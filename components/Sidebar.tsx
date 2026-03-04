import React from 'react';
import { NodeType } from '../types';
import {
  Play,
  Code,
  Shield,
  Database,
  CheckCircle,
  Send,
  AlertTriangle,
  Wand2,
  Webhook as WebhookIcon
} from 'lucide-react';

const nodeTypes: { type: NodeType; label: string; icon: React.ReactNode; color: string }[] = [
  { type: 'http_trigger', label: 'HTTP Trigger', icon: <Play size={16} />, color: 'bg-blue-600' },
  { type: 'route_handler', label: 'Route Handler', icon: <Code size={16} />, color: 'bg-gray-600' },
  { type: 'middleware', label: 'Middleware', icon: <Code size={16} />, color: 'bg-indigo-600' },
  { type: 'auth_guard', label: 'Auth Guard', icon: <Shield size={16} />, color: 'bg-red-600' },
  { type: 'db_query', label: 'DB Query', icon: <Database size={16} />, color: 'bg-green-600' },
  { type: 'validator', label: 'Validator', icon: <CheckCircle size={16} />, color: 'bg-teal-600' },
  { type: 'response_formatter', label: 'Response', icon: <Send size={16} />, color: 'bg-purple-600' },
  { type: 'error_handler', label: 'Error Handler', icon: <AlertTriangle size={16} />, color: 'bg-orange-600' },
  { type: 'ai_transform', label: 'AI Transform', icon: <Wand2 size={16} />, color: 'bg-pink-600' },
  { type: 'webhook', label: 'Webhook', icon: <WebhookIcon size={16} />, color: 'bg-yellow-600' },
];

export default function Sidebar() {
  const onDragStart = (event: React.DragEvent, nodeType: NodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 p-4 flex flex-col h-full overflow-y-auto">
      <h2 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Nodes</h2>
      <div className="flex flex-col gap-2">
        {nodeTypes.map((node) => (
          <div
            key={node.type}
            className="flex items-center gap-3 p-3 bg-gray-800 border border-gray-700 rounded-md cursor-grab hover:bg-gray-700 transition-colors text-gray-200 text-sm"
            onDragStart={(event) => onDragStart(event, node.type)}
            draggable
          >
            <div className={`p-1.5 rounded ${node.color} text-white`}>
              {node.icon}
            </div>
            {node.label}
          </div>
        ))}
      </div>
    </aside>
  );
}
