import React, { useMemo, useState, useEffect } from 'react';
import { useBuilderStore } from '../lib/store';
import { generateCode } from '../lib/codegen';
import { GeneratedFile, GeneratedFolder } from '../types';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function LivePreview() {
  const { nodes, edges } = useBuilderStore();
  const [activeFilePath, setActiveFilePath] = useState('index.js');

  const generatedFiles = useMemo(() => {
    return generateCode(nodes, edges);
  }, [nodes, edges]);

  // Flatten abstract syntax tree for preview files
  const flattenedFiles = useMemo(() => {
    const flatten = (items: (GeneratedFile | GeneratedFolder)[], pathPrefix = ''): { path: string, content: string }[] => {
      let result: { path: string, content: string }[] = [];
      items.forEach(item => {
        const fullPath = pathPrefix ? `${pathPrefix}/${item.name}` : item.name;
        if (item.type === 'file') {
          result.push({ path: fullPath, content: item.content });
        } else if (item.type === 'folder' && item.children) {
          result = result.concat(flatten(item.children, fullPath));
        }
      });
      return result;
    };
    return flatten(generatedFiles);
  }, [generatedFiles]);

  const activeFile = flattenedFiles.find(f => f.path === activeFilePath) || flattenedFiles[0];

  // Effect to handle if the active file disappears (e.g., deleted node)
  useEffect(() => {
    if (!flattenedFiles.find(f => f.path === activeFilePath) && flattenedFiles.length > 0) {
      setActiveFilePath(flattenedFiles[0].path);
    }
  }, [flattenedFiles, activeFilePath]);

  return (
    <div className="h-64 bg-card border-t border-border flex flex-col z-10 shadow-sm relative">
      <div className="flex items-center px-4 py-2 border-b border-border bg-muted/30 text-sm overflow-x-auto whitespace-nowrap scsb">
        <h3 className="text-foreground font-semibold flex items-center gap-2 mr-6 shrink-0">
          <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span> Live Preview
        </h3>
        <div className="flex gap-1">
          {flattenedFiles.map((f) => (
            <button
              key={f.path}
              onClick={() => setActiveFilePath(f.path)}
              className={`text-xs px-3 py-1.5 rounded-md transition-all ${activeFile?.path === f.path
                ? 'bg-primary text-primary-foreground font-medium shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
            >
              {f.path}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-auto bg-[#1e1e1e] font-mono text-xs md:text-sm">
        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          customStyle={{ margin: 0, padding: '16px', background: '#1e1e1e', height: '100%' }}
          wrapLongLines={false}
        >
          {activeFile ? activeFile.content : '// Add nodes to generate code...'}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
