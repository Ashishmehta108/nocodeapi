import React, { useState } from 'react';
import { Download, Wand2, Trash2 } from 'lucide-react';
import { useBuilderStore } from '../lib/store';
import { exportCode } from '../lib/export';

export default function Header() {
  const [prompt, setPrompt] = useState('');
  const { generateFromPrompt, clearCanvas, nodes, edges } = useBuilderStore();

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      generateFromPrompt(prompt);
    }
  };

  const handleExport = () => {
    exportCode(nodes, edges);
  };

  return (
    <header className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6">
      <div className="flex items-center gap-4 flex-1">
        <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <span className="text-blue-500">n8n</span> Builder
        </h1>

        <form onSubmit={handleGenerate} className="flex items-center w-full max-w-2xl ml-8">
          <div className="relative w-full">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder='e.g., "Build a REST API with JWT auth and Postgres CRUD"'
              className="w-full bg-gray-800 border border-gray-700 text-white text-sm rounded-l-md pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
            <Wand2 className="absolute left-3 top-2.5 text-gray-400" size={16} />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md text-sm font-medium transition-colors border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Generate
          </button>
        </form>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={clearCanvas}
          className="flex items-center gap-2 text-gray-400 hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          title="Clear Canvas"
        >
          <Trash2 size={16} />
        </button>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          <Download size={16} />
          Export Code
        </button>
      </div>
    </header>
  );
}
