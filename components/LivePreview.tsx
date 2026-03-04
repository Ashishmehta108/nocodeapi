import React, { useMemo } from 'react';
import { useBuilderStore } from '../lib/store';
import { generateCode } from '../lib/codegen';

export default function LivePreview() {
  const { nodes, edges } = useBuilderStore();

  const generatedFiles = useMemo(() => {
    return generateCode(nodes, edges);
  }, [nodes, edges]);

  // Just preview the first file for simplicity in the bottom panel
  const previewFile = generatedFiles.find(f => f.type === 'file' && f.name.endsWith('.js')) || generatedFiles[0];

  return (
    <div className="h-64 bg-gray-900 border-t border-gray-800 flex flex-col">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800 bg-gray-800 text-sm">
        <h3 className="text-white font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span> Live Preview
        </h3>
        <div className="flex gap-2">
          {generatedFiles.map((f, i) => (
             f.type === 'file' ? (
                <span key={i} className={`text-xs px-2 py-1 rounded cursor-pointer ${previewFile?.name === f.name ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-700'}`}>
                  {f.name}
                </span>
             ) : null
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4 bg-[#1e1e1e] font-mono text-sm text-gray-300">
        <pre>
          <code>{previewFile && previewFile.type === 'file' ? previewFile.content : '// Connect nodes to generate code...'}</code>
        </pre>
      </div>
    </div>
  );
}
