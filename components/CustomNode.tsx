import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { AnyNodeData } from '../types';
import {
  Play,
  Code,
  Shield,
  Database,
  CheckCircle,
  Send,
  AlertTriangle,
  Wand2,
  Webhook as WebhookIcon,
} from 'lucide-react';

export default memo(function CustomNode({ data, selected }: { data: AnyNodeData; selected: boolean }) {
  let icon = <Code size={16} />;
  let color = 'bg-gray-600';
  let hasInput = true;
  let hasOutput = true;

  switch (data.type) {
    case 'http_trigger':
      icon = <Play size={16} />;
      color = 'bg-blue-600';
      hasInput = false;
      break;
    case 'webhook':
      icon = <WebhookIcon size={16} />;
      color = 'bg-yellow-600';
      hasInput = false;
      break;
    case 'response_formatter':
      icon = <Send size={16} />;
      color = 'bg-purple-600';
      hasOutput = false;
      break;
    case 'error_handler':
      icon = <AlertTriangle size={16} />;
      color = 'bg-orange-600';
      break;
    case 'db_query':
      icon = <Database size={16} />;
      color = 'bg-green-600';
      break;
    case 'auth_guard':
      icon = <Shield size={16} />;
      color = 'bg-red-600';
      break;
    case 'validator':
      icon = <CheckCircle size={16} />;
      color = 'bg-teal-600';
      break;
    case 'ai_transform':
      icon = <Wand2 size={16} />;
      color = 'bg-pink-600';
      break;
  }

  return (
    <div
      className={`min-w-[150px] bg-gray-800 border-2 rounded-lg shadow-xl ${
        selected ? 'border-blue-500' : 'border-gray-700'
      }`}
    >
      {hasInput && (
        <Handle
          type="target"
          position={Position.Top}
          className="w-3 h-3 bg-gray-400 border-2 border-gray-800"
        />
      )}

      <div className={`px-3 py-2 flex items-center gap-2 rounded-t-md ${color} text-white`}>
        {icon}
        <span className="text-xs font-bold tracking-wider uppercase truncate">{data.label}</span>
      </div>

      <div className="p-3 bg-gray-800 rounded-b-md text-gray-300">
        {data.type === 'http_trigger' && (
          <div className="text-sm truncate">
            <span className="font-mono font-bold text-blue-400 mr-2">{String(data.method)}</span>
            <span className="font-mono text-gray-400">{String(data.path)}</span>
          </div>
        )}
        {data.type === 'db_query' && (
          <div className="text-sm truncate font-mono text-green-400">
            {String(data.operation)} {String(data.collectionOrTable)}
          </div>
        )}
        {data.type === 'response_formatter' && (
          <div className="text-sm truncate font-mono text-purple-400">Status: {String(data.statusCode)}</div>
        )}
        {data.type === 'auth_guard' && (
          <div className="text-sm truncate font-mono text-red-400">Strategy: {String(data.strategy)}</div>
        )}
        {data.type === 'webhook' && (
          <div className="text-sm truncate font-mono text-yellow-400">Event: {String(data.event)}</div>
        )}
        {!['http_trigger', 'db_query', 'response_formatter', 'auth_guard', 'webhook'].includes(
          data.type
        ) && <div className="text-sm truncate font-mono text-gray-400">{String(data.type)}</div>}
      </div>

      {hasOutput && (
        <Handle
          type="source"
          position={Position.Bottom}
          className="w-3 h-3 bg-gray-400 border-2 border-gray-800"
        />
      )}
    </div>
  );
});
