import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { AnyNodeData } from '../types';
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

export default memo(function CustomNode({ data, selected }: { data: AnyNodeData; selected: boolean }) {
  let icon = <Code1 variant={v} size={16} />;
  let color = 'bg-gray-600';
  let hasInput = true;
  let hasOutput = true;

  switch (data.type) {
    case 'http_trigger':
      icon = <Play variant={v} size={16} />;
      color = 'bg-blue-600';
      hasInput = false;
      break;
    case 'webhook':
      icon = <Global variant={v} size={16} />;
      color = 'bg-yellow-600';
      hasInput = false;
      break;
    case 'response_formatter':
      icon = <Send2 variant={v} size={16} />;
      color = 'bg-purple-600';
      hasOutput = false;
      break;
    case 'error_handler':
      icon = <Warning2 variant={v} size={16} />;
      color = 'bg-orange-600';
      break;
    case 'db_query':
      icon = <Data variant={v} size={16} />;
      color = 'bg-green-600';
      break;
    case 'auth_guard':
      icon = <SecuritySafe variant={v} size={16} />;
      color = 'bg-red-600';
      break;
    case 'validator':
      icon = <TickCircle variant={v} size={16} />;
      color = 'bg-teal-600';
      break;
    case 'ai_transform':
      icon = <MagicStar variant={v} size={16} />;
      color = 'bg-pink-600';
      break;
    case 'redis_cache':
      icon = <Archive variant={v} size={16} />;
      color = 'bg-rose-500';
      break;
    case 'rate_limiter':
      icon = <Timer1 variant={v} size={16} />;
      color = 'bg-cyan-500';
      break;
    case 's3_upload':
      icon = <CloudAdd variant={v} size={16} />;
      color = 'bg-sky-500';
      break;
    case 'bullmq_job':
      icon = <RepeatCircle variant={v} size={16} />;
      color = 'bg-violet-500';
      break;
    case 'send_email':
      icon = <Sms variant={v} size={16} />;
      color = 'bg-emerald-500';
      break;
  }

  return (
    <div
      className={`min-w-[150px] bg-card border shadow-md rounded-xl group transition-all duration-200 ${selected ? 'border-primary ring-1 ring-primary/50' : 'border-border hover:border-primary/50'
        }`}
    >
      {hasInput && (
        <Handle
          type="target"
          position={Position.Top}
          className="w-3 h-3 bg-muted-foreground border-2 border-background"
        />
      )}

      <div className={`px-4 py-2.5 flex items-center gap-2 rounded-t-xl ${color} text-white`}>
        {icon}
        <span className="text-[11px] font-bold tracking-wider uppercase truncate">{data.label}</span>
      </div>

      <div className="p-3.5 bg-card rounded-b-xl text-foreground/80 flex flex-col gap-1">
        {data.type === 'http_trigger' && (
          <div className="text-xs truncate flex items-center gap-2">
            <span className="font-mono font-bold text-blue-500">{String(data.method)}</span>
            <span className="font-mono text-muted-foreground">{String(data.path)}</span>
          </div>
        )}
        {data.type === 'db_query' && (
          <div className="text-xs truncate font-mono text-green-500">
            {String(data.operation)} {String(data.collectionOrTable)}
          </div>
        )}
        {data.type === 'response_formatter' && (
          <div className="text-xs truncate font-mono text-purple-500">Status: {String(data.statusCode)}</div>
        )}
        {data.type === 'auth_guard' && (
          <div className="text-xs truncate font-mono text-red-500">Strategy: {String(data.strategy)}</div>
        )}
        {data.type === 'webhook' && (
          <div className="text-xs truncate font-mono text-yellow-500">Event: {String(data.event)}</div>
        )}
        {data.type === 'redis_cache' && (
          <div className="text-xs truncate font-mono text-rose-500">
            {String(data.action).toUpperCase()} {String(data.keyPattern)}
          </div>
        )}
        {data.type === 'rate_limiter' && (
          <div className="text-xs truncate font-mono text-cyan-500">
            {String(data.maxRequests)} req / {String(data.windowMinutes)}m
          </div>
        )}
        {data.type === 's3_upload' && (
          <div className="text-xs truncate font-mono text-sky-500">Bucket: {String(data.bucketName)}</div>
        )}
        {data.type === 'bullmq_job' && (
          <div className="text-xs truncate font-mono text-violet-500">Queue: {String(data.queueName)}</div>
        )}
        {data.type === 'send_email' && (
          <div className="text-xs truncate font-mono text-emerald-500">Provider: {String(data.provider)}</div>
        )}
        {!['http_trigger', 'db_query', 'response_formatter', 'auth_guard', 'webhook', 'redis_cache', 'rate_limiter', 's3_upload', 'bullmq_job', 'send_email'].includes(
          data.type
        ) && <div className="text-xs truncate font-mono text-muted-foreground">{String(data.type)}</div>}
      </div>

      {hasOutput && (
        <Handle
          type="source"
          position={Position.Bottom}
          className="w-3 h-3 bg-muted-foreground border-2 border-background"
        />
      )}
    </div>
  );
});
