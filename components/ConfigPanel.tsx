import React from 'react';
import { useBuilderStore } from '../lib/store';
import { AnyNodeData } from '../types';

export default function ConfigPanel() {
  const { selectedNode, updateNodeData } = useBuilderStore();

  if (!selectedNode) {
    return (
      <aside className="w-80 bg-gray-900 border-l border-gray-800 p-4 flex flex-col justify-center items-center text-gray-500 text-center h-full">
        Select a node on the canvas to configure its properties.
      </aside>
    );
  }

  const data = selectedNode.data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateNodeData(selectedNode.id, { [name]: value });
  };

  return (
    <aside className="w-80 bg-gray-900 border-l border-gray-800 p-4 flex flex-col h-full overflow-y-auto">
      <h2 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
        Configure {data.label}
      </h2>

      <div className="space-y-4">
        {/* Label - Common for all */}
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1">Node Label</label>
          <input
            type="text"
            name="label"
            value={data.label}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-sm text-white focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* HTTP Trigger Specific */}
        {data.type === 'http_trigger' && (
          <>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Method</label>
              <select
                name="method"
                value={(data as any).method}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-sm text-white focus:outline-none focus:border-blue-500"
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
                <option value="PATCH">PATCH</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Route Path</label>
              <input
                type="text"
                name="path"
                value={(data as any).path}
                onChange={handleChange}
                placeholder="/api/users"
                className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-sm text-white font-mono focus:outline-none focus:border-blue-500"
              />
            </div>
          </>
        )}

        {/* DB Query Specific */}
        {data.type === 'db_query' && (
          <>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Database Type</label>
              <select
                name="dbType"
                value={(data as any).dbType}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-sm text-white focus:outline-none focus:border-blue-500"
              >
                <option value="postgres">Postgres</option>
                <option value="mongodb">MongoDB</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Operation</label>
              <select
                name="operation"
                value={(data as any).operation}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-sm text-white focus:outline-none focus:border-blue-500"
              >
                <option value="find">Find / Select</option>
                <option value="insert">Insert</option>
                <option value="update">Update</option>
                <option value="delete">Delete</option>
                <option value="custom">Custom Query</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Table / Collection</label>
              <input
                type="text"
                name="collectionOrTable"
                value={(data as any).collectionOrTable || ''}
                onChange={handleChange}
                placeholder="users"
                className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-sm text-white font-mono focus:outline-none focus:border-blue-500"
              />
            </div>
          </>
        )}

        {/* Auth Guard Specific */}
        {data.type === 'auth_guard' && (
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Strategy</label>
            <select
              name="strategy"
              value={(data as any).strategy}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-sm text-white focus:outline-none focus:border-blue-500"
            >
              <option value="jwt">JWT Bearer</option>
              <option value="basic">Basic Auth</option>
              <option value="oauth2">OAuth2</option>
            </select>
          </div>
        )}

        {/* Validator Specific */}
        {data.type === 'validator' && (
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Zod Schema</label>
            <textarea
              name="schema"
              value={(data as any).schema}
              onChange={handleChange}
              rows={4}
              className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-sm text-white font-mono focus:outline-none focus:border-blue-500"
            />
          </div>
        )}

        {/* Response Formatter Specific */}
        {data.type === 'response_formatter' && (
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Status Code</label>
            <input
              type="number"
              name="statusCode"
              value={(data as any).statusCode}
              onChange={(e) => updateNodeData(selectedNode.id, { statusCode: parseInt(e.target.value, 10) })}
              className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-sm text-white font-mono focus:outline-none focus:border-blue-500"
            />
          </div>
        )}

        {/* Webhook Specific */}
        {data.type === 'webhook' && (
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Event Name</label>
            <input
              type="text"
              name="event"
              value={(data as any).event}
              onChange={handleChange}
              placeholder="stripe.charge.succeeded"
              className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-sm text-white font-mono focus:outline-none focus:border-blue-500"
            />
          </div>
        )}

      </div>
    </aside>
  );
}
