import { Edge } from '@xyflow/react';
import { BuilderNode } from './store';
import { GeneratedFile, GeneratedFolder } from '../types';

function buildAdjacencyList(edges: Edge[]) {
  const list: Record<string, string[]> = {};
  edges.forEach((edge) => {
    if (!list[edge.source]) list[edge.source] = [];
    list[edge.source].push(edge.target);
  });
  return list;
}

export function generateCode(nodes: BuilderNode[], edges: Edge[]): (GeneratedFile | GeneratedFolder)[] {
  if (nodes.length === 0) {
    return [
      {
        name: 'index.js',
        type: 'file',
        content: `// Add nodes to generate Express application`
      }
    ];
  }

  const adjList = buildAdjacencyList(edges);
  const nodeMap = new Map(nodes.map(n => [n.id, n]));

  // Find trigger nodes
  const triggers = nodes.filter(n => n.data.type === 'http_trigger');

  let routesCode = `import express from 'express';\n\nconst router = express.Router();\n\n`;
  let controllersCodeMap: Record<string, string> = {};

  triggers.forEach((trigger) => {
    if (trigger.data.type !== 'http_trigger') return;
    const { method, path } = trigger.data as any;

    // Trace path
    const pathNodes = getPathNodes(trigger.id, adjList, nodeMap);

    // Generate controller for this route
    const controllerName = `${method.toLowerCase()}${path.replace(/[^a-zA-Z0-9]/g, ' ').split(' ').map((s: string) => s.charAt(0).toUpperCase() + s.slice(1)).join('')}Handler`;

    let controllerLogic = `/**\n * Auto-generated handler for ${method} ${path}\n */\n`;
    controllerLogic += `export const ${controllerName} = async (req, res, next) => {\n  try {\n    // Extracted logic from nodes:\n`;

    let hasResponse = false;

    pathNodes.forEach((pNode, index) => {
      if (index === 0) return; // Skip trigger
      const data = pNode.data;

      switch (data.type) {
        case 'auth_guard':
          controllerLogic += `    // [Auth Guard: ${(data as any).strategy}]\n    // TODO: Verify ${(data as any).strategy} token from req.headers.authorization\n    const user = { id: 1, role: 'user' };\n    req.user = user;\n\n`;
          break;
        case 'db_query':
          const dbData = data as any;
          controllerLogic += `    // [DB Query: ${dbData.operation} on ${dbData.collectionOrTable}]\n    const dbResult = await db.${dbData.collectionOrTable}.${dbData.operation}(/* args */);\n    const data = dbResult;\n\n`;
          break;
        case 'validator':
          controllerLogic += `    // [Validator]\n    // const validatedData = ${(data as any).schema}.parse(req.body);\n\n`;
          break;
        case 'ai_transform':
          controllerLogic += `    // [AI Transform]\n    // const aiResult = await ai.generate(${(data as any).prompt}, data);\n\n`;
          break;
        case 'response_formatter':
          hasResponse = true;
          controllerLogic += `    // [Response Formatter]\n    return res.status(${(data as any).statusCode || 200}).json({\n      success: true,\n      data: typeof data !== 'undefined' ? data : { message: 'Success' }\n    });\n`;
          break;
        case 'redis_cache':
          const rcData = data as any;
          if (rcData.action === 'get') {
            controllerLogic += `    // [Redis Cache: GET]\n    const cachedData = await redis.get(\`${rcData.keyPattern}\`);\n    if (cachedData) {\n      return res.status(200).json({ success: true, data: JSON.parse(cachedData), source: 'cache' });\n    }\n\n`;
          } else if (rcData.action === 'set') {
            controllerLogic += `    // [Redis Cache: SET]\n    await redis.setex(\`${rcData.keyPattern}\`, ${rcData.ttlSeconds}, JSON.stringify(data));\n\n`;
          } else {
            controllerLogic += `    // [Redis Cache: DELETE]\n    await redis.del(\`${rcData.keyPattern}\`);\n\n`;
          }
          break;
        case 'rate_limiter':
          const rlData = data as any;
          controllerLogic += `    // [Rate Limiter: ${rlData.maxRequests} req / ${rlData.windowMinutes}m]\n    // Note: In a real app this should be Express middleware declared on the route.\n    // const limiter = rateLimit({ windowMs: ${rlData.windowMinutes} * 60 * 1000, max: ${rlData.maxRequests} });\n\n`;
          break;
        case 's3_upload':
          const s3Data = data as any;
          controllerLogic += `    // [S3 Upload]\n    // const uploadResult = await s3Client.putObject({ Bucket: '${s3Data.bucketName}', Key: \`upload-\$\{Date.now()\}\`, Body: req.file.buffer, ACL: '${s3Data.acl}' });\n\n`;
          break;
        case 'bullmq_job':
          const jobData = data as any;
          controllerLogic += `    // [Queue Job: ${jobData.jobName}]\n    // await ${jobData.queueName}Queue.add('${jobData.jobName}', { ...data });\n\n`;
          break;
        case 'send_email':
          const mailData = data as any;
          controllerLogic += `    // [Send Email: ${mailData.provider}]\n    // await mailService.send({ to: req.body.email, subject: '${mailData.subject}', body: 'Hello!' });\n\n`;
          break;
        default:
          controllerLogic += `    // [${data.type}: ${data.label}]\n\n`;
      }
    });

    if (!hasResponse) {
      controllerLogic += `    // Default Response\n    return res.status(200).json({ success: true, message: 'Endpoint reached successfully' });\n`;
    }

    controllerLogic += `  } catch (error) {\n    next(error);\n  }\n};\n`;

    controllersCodeMap[controllerName] = controllerLogic;

    // Add route to router
    routesCode += `// Route: ${trigger.data.label}\n`;
    routesCode += `router.${method.toLowerCase()}('${path}', ${controllerName});\n\n`;
  });

  routesCode += `export default router;\n`;

  // Build controllers file
  let fullControllersCode = `// Controllers\n// Auto-generated by n8n Builder\n\n`;
  fullControllersCode += `import { db } from '../config/db.js';\n`; // mockup import
  if (nodes.some(n => n.data.type === 'redis_cache')) {
    fullControllersCode += `import { redis } from '../config/redis.js';\n`;
  }
  fullControllersCode += `\n`;
  Object.values(controllersCodeMap).forEach(code => {
    fullControllersCode += code + '\n';
  });

  // Create import lines for routes to import from controllers
  const controllerImports = Object.keys(controllersCodeMap).map(name => name).join(', ');
  if (controllerImports) {
    routesCode = `import { ${controllerImports} } from '../controllers/api.js';\n` + routesCode;
  }

  const indexJs = `import express from 'express';
import apiRoutes from './routes/api.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Main Routes
app.use('/api', apiRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: err.message || 'Internal Server Error',
  });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
`;

  const packageJson = `{
  "name": "generated-express-api",
  "version": "1.0.0",
  "description": "Auto-generated Express API",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "zod": "^3.22.4"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}`;

  return [
    { name: 'package.json', type: 'file', content: packageJson },
    { name: 'index.js', type: 'file', content: indexJs },
    {
      name: 'routes',
      type: 'folder',
      children: [
        { name: 'api.js', type: 'file', content: routesCode }
      ]
    },
    {
      name: 'controllers',
      type: 'folder',
      children: [
        { name: 'api.js', type: 'file', content: fullControllersCode }
      ]
    }
  ];
}

function getPathNodes(startId: string, adjList: Record<string, string[]>, nodeMap: Map<string, BuilderNode>): BuilderNode[] {
  const path: BuilderNode[] = [];
  let currentId = startId;

  // Simple traversal (assuming linear paths for simplicity of generation right now)
  while (currentId) {
    const node = nodeMap.get(currentId);
    if (node) path.push(node);

    const nextIds = adjList[currentId];
    if (nextIds && nextIds.length > 0) {
      currentId = nextIds[0]; // just take first branch for MVP code gen
    } else {
      break;
    }
  }

  return path;
}
