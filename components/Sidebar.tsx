import React from 'react';
import { NodeType } from '../types';
import {
  Play,
  Code1,
  SecuritySafe,
  Data,
  TickCircle,
  Send2,
  Warning2,
  MagicStar,
  Global,
  Archive,
  Timer1,
  CloudAdd,
  Sms,
  RepeatCircle,
} from 'iconsax-reactjs';

const v = 'Bold';

const nodeTypes: { type: NodeType; label: string; icon: React.ReactNode; color: string; bgColor: string }[] = [
  { type: 'http_trigger', label: 'HTTP Trigger', icon: <Play variant={v} size={16} />, color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
  { type: 'route_handler', label: 'Route Handler', icon: <Code1 variant={v} size={16} />, color: 'text-gray-500 text-stone-500', bgColor: 'bg-gray-500/10 dark:bg-stone-500/10' },
  { type: 'middleware', label: 'Middleware', icon: <Code1 variant={v} size={16} />, color: 'text-indigo-500', bgColor: 'bg-indigo-500/10' },
  { type: 'auth_guard', label: 'Auth Guard', icon: <SecuritySafe variant={v} size={16} />, color: 'text-red-500', bgColor: 'bg-red-500/10' },
  { type: 'db_query', label: 'DB Query', icon: <Data variant={v} size={16} />, color: 'text-green-500', bgColor: 'bg-green-500/10' },
  { type: 'validator', label: 'Validator', icon: <TickCircle variant={v} size={16} />, color: 'text-teal-500', bgColor: 'bg-teal-500/10' },
  { type: 'response_formatter', label: 'Response', icon: <Send2 variant={v} size={16} />, color: 'text-purple-500', bgColor: 'bg-purple-500/10' },
  { type: 'error_handler', label: 'Error Handler', icon: <Warning2 variant={v} size={16} />, color: 'text-orange-500', bgColor: 'bg-orange-500/10' },
  { type: 'ai_transform', label: 'AI Transform', icon: <MagicStar variant={v} size={16} />, color: 'text-pink-500', bgColor: 'bg-pink-500/10' },
  { type: 'webhook', label: 'Webhook', icon: <Global variant={v} size={16} />, color: 'text-yellow-500', bgColor: 'bg-yellow-500/10' },
  { type: 'redis_cache', label: 'Redis Cache', icon: <Archive variant={v} size={16} />, color: 'text-rose-500', bgColor: 'bg-rose-500/10' },
  { type: 'rate_limiter', label: 'Rate Limiter', icon: <Timer1 variant={v} size={16} />, color: 'text-cyan-500', bgColor: 'bg-cyan-500/10' },
  { type: 's3_upload', label: 'S3 Upload', icon: <CloudAdd variant={v} size={16} />, color: 'text-sky-500', bgColor: 'bg-sky-500/10' },
  { type: 'bullmq_job', label: 'Queue Job', icon: <RepeatCircle variant={v} size={16} />, color: 'text-violet-500', bgColor: 'bg-violet-500/10' },
  { type: 'send_email', label: 'Send Email', icon: <Sms variant={v} size={16} />, color: 'text-emerald-500', bgColor: 'bg-emerald-500/10' },
];

import { useBuilderStore } from '../lib/store';

export default function Sidebar() {
  const { addNode } = useBuilderStore();

  const onDragStart = (event: React.DragEvent, nodeType: NodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const handleNodeClick = (nodeType: NodeType) => {
    // Determine a basic center placement on mobile/desktop
    // Using simple offset so multiple nodes don't overlap completely
    const randomOffset = Math.floor(Math.random() * 50);
    const position = { x: 100 + randomOffset, y: 100 + randomOffset };
    addNode(nodeType, position);
  };

  return (
    <aside className="w-full bg-card border-r border-border p-4 flex flex-col h-full overflow-y-auto shadow-sm z-10">
      <h2 className="text-muted-foreground font-semibold mb-4 text-xs uppercase tracking-wider">Node Palette</h2>
      <div className="flex flex-col gap-2">
        {nodeTypes.map((node) => (
          <div
            key={node.type}
            className="flex items-center gap-3 p-3 bg-background border border-border rounded-lg cursor-grab hover:border-primary/50 hover:shadow-sm transition-all text-foreground text-sm font-medium group"
            onDragStart={(event) => onDragStart(event, node.type)}
            onClick={() => handleNodeClick(node.type)}
            draggable
          >
            <div className={`p-1.5 rounded-md ${node.bgColor} ${node.color} group-hover:scale-110 transition-transform`}>
              {node.icon}
            </div>
            {node.label}
          </div>
        ))}
      </div>
    </aside>
  );
}
