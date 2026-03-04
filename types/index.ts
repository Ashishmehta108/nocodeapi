export type NodeType =
  | 'http_trigger'
  | 'route_handler'
  | 'middleware'
  | 'auth_guard'
  | 'db_query'
  | 'response_formatter'
  | 'error_handler'
  | 'ai_transform'
  | 'validator'
  | 'webhook'
  | 'redis_cache'
  | 'rate_limiter'
  | 's3_upload'
  | 'bullmq_job'
  | 'send_email';

export interface BaseNodeData extends Record<string, unknown> {
  label: string;
  type: NodeType;
  description?: string;
}

export interface HttpTriggerData extends BaseNodeData {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
}

export interface RouteHandlerData extends BaseNodeData {
  name: string;
}

export interface MiddlewareData extends BaseNodeData {
  name: string;
  code?: string;
}

export interface AuthGuardData extends BaseNodeData {
  strategy: 'jwt' | 'basic' | 'oauth2';
}

export interface DbQueryData extends BaseNodeData {
  dbType: 'postgres' | 'mongodb';
  query: string;
  collectionOrTable?: string;
  operation?: 'find' | 'insert' | 'update' | 'delete' | 'custom';
}

export interface ValidatorData extends BaseNodeData {
  schema: string; // Zod schema string representation
}

export interface ResponseFormatterData extends BaseNodeData {
  statusCode: number;
}

export interface ErrorHandlerData extends BaseNodeData {
  catchAll: boolean;
}

export interface AiTransformData extends BaseNodeData {
  prompt: string;
}

export interface WebhookData extends BaseNodeData {
  event: string;
}

export interface RedisCacheData extends BaseNodeData {
  action: 'get' | 'set' | 'delete';
  keyPattern: string;
  ttlSeconds: number;
}

export interface RateLimiterData extends BaseNodeData {
  maxRequests: number;
  windowMinutes: number;
}

export interface S3UploadData extends BaseNodeData {
  bucketName: string;
  acl: 'private' | 'public-read';
}

export interface BullMQJobData extends BaseNodeData {
  queueName: string;
  jobName: string;
}

export interface SendEmailData extends BaseNodeData {
  provider: 'smtp' | 'resend' | 'sendgrid';
  subject: string;
}

export type AnyNodeData =
  | HttpTriggerData
  | RouteHandlerData
  | MiddlewareData
  | AuthGuardData
  | DbQueryData
  | ValidatorData
  | ResponseFormatterData
  | ErrorHandlerData
  | AiTransformData
  | WebhookData
  | RedisCacheData
  | RateLimiterData
  | S3UploadData
  | BullMQJobData
  | SendEmailData;

// A generic generated file
export interface GeneratedFile {
  name: string;
  content: string;
  type: 'file';
}

// A generated folder
export interface GeneratedFolder {
  name: string;
  type: 'folder';
  children: (GeneratedFile | GeneratedFolder)[];
}
