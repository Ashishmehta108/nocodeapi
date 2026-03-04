import React, { useState, useEffect } from 'react';
import { Import, MagicStar, Trash, Sun1, Moon } from 'iconsax-reactjs';
import { useBuilderStore } from '../lib/store';
import { exportCode } from '../lib/export';
import { useTheme } from 'next-themes';

export default function Header() {
  const [prompt, setPrompt] = useState('');
  const [mounted, setMounted] = useState(false);
  const { generateFromPrompt, clearCanvas, nodes, edges } = useBuilderStore();
  const { theme, setTheme } = useTheme();

  // Prevent hydration styling mismatch by only rendering theme toggle after mount
  useEffect(() => {
    setMounted(true);
  }, []);

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
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 z-10 relative shadow-sm">
      <div className="flex items-center gap-4 flex-1">
        <h1 className="text-xl font-bold text-foreground tracking-tight flex items-center gap-2">
          <span className="text-blue-600 dark:text-blue-500">NoCodeApi</span>
        </h1>

        <form onSubmit={handleGenerate} className="flex items-center w-full max-w-2xl ml-8">
          <div className="relative w-full shadow-sm">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder='Try: "Build a REST API with JWT auth and Postgres CRUD"'
              className="w-full bg-background border border-input text-foreground text-sm rounded-l-md pl-10 pr-4 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
            />
            <MagicStar variant="Bold" className="absolute left-3 top-2.5 text-muted-foreground" size={16} />
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-r-md text-sm font-medium transition-colors border border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background shadow-sm"
          >
            Generate
          </button>
        </form>
      </div>

      <div className="flex items-center gap-3">
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors border border-transparent"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun1 variant="Bold" size={18} /> : <Moon variant="Bold" size={18} />}
          </button>
        )}
        <div className="w-px h-6 bg-border mx-1"></div>
        <button
          onClick={clearCanvas}
          className="flex items-center gap-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          title="Clear Canvas"
        >
          <Trash variant="Bold" size={16} />
        </button>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm"
        >
          <Import variant="Bold" size={16} />
          Export Code
        </button>
      </div>
    </header>
  );
}
