'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Canvas from '../../components/Canvas';
import ConfigPanel from '../../components/ConfigPanel';
import LivePreview from '../../components/LivePreview';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { Setting2, Shapes, Code, Monitor } from 'iconsax-reactjs';

function ResizeHandle({ vertical = false }: { vertical?: boolean }) {
  return (
    <PanelResizeHandle
      className={[
        'relative flex items-center justify-center z-20 bg-border group transition-colors',
        vertical
          ? 'h-1.5 w-full cursor-row-resize hover:bg-primary/30'
          : 'w-1.5 h-full cursor-col-resize hover:bg-primary/30',
      ].join(' ')}
    >
      <div
        className={[
          'bg-muted-foreground/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity',
          vertical ? 'h-1 w-10' : 'w-1 h-10',
        ].join(' ')}
      />
    </PanelResizeHandle>
  );
}

export default function BuilderPage() {
  const [activeTab, setActiveTab] = useState<'canvas' | 'nodes' | 'config' | 'preview'>('canvas');

  return (
    <div className="flex flex-col h-screen w-full bg-background text-foreground overflow-hidden font-sans selection:bg-primary/30">
      <Header />

      {/* Desktop View (hidden on mobile) */}
      <div className="hidden md:flex flex-1 overflow-hidden">
        <PanelGroup direction="horizontal" className="flex-1 overflow-hidden">
          {/* Left Sidebar */}
          <Panel defaultSize={16} minSize={10} maxSize={30}>
            <div className="h-full overflow-hidden">
              <Sidebar />
            </div>
          </Panel>

          <ResizeHandle />

          {/* Center: Canvas stacked above Live Preview */}
          <Panel defaultSize={62} minSize={30}>
            <PanelGroup direction="vertical">
              <Panel defaultSize={68} minSize={25}>
                <div className="relative h-full w-full">
                  <Canvas />
                </div>
              </Panel>

              <ResizeHandle vertical />

              <Panel defaultSize={32} minSize={12} maxSize={60}>
                <div className="h-full overflow-hidden">
                  <LivePreview />
                </div>
              </Panel>
            </PanelGroup>
          </Panel>

          <ResizeHandle />

          {/* Right Config Panel */}
          <Panel defaultSize={22} minSize={14} maxSize={42}>
            <div className="h-full overflow-hidden">
              <ConfigPanel />
            </div>
          </Panel>
        </PanelGroup>
      </div>

      {/* Mobile View (hidden on desktop) */}
      <div className="flex md:hidden flex-col flex-1 overflow-hidden relative">
        <div className="flex-1 overflow-hidden relative">
          <div className={`absolute inset-0 transition-opacity duration-200 ${activeTab === 'canvas' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
            <Canvas />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-200 ${activeTab === 'nodes' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
            <Sidebar />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-200 ${activeTab === 'config' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
            <ConfigPanel />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-200 ${activeTab === 'preview' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
            <LivePreview />
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="h-14 bg-card border-t border-border flex items-center justify-around px-2 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20">
          <button
            onClick={() => setActiveTab('canvas')}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${activeTab === 'canvas' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Monitor variant={activeTab === 'canvas' ? 'Bold' : 'Linear'} size={20} />
            <span className="text-[10px] font-medium">Canvas</span>
          </button>
          <button
            onClick={() => setActiveTab('nodes')}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${activeTab === 'nodes' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Shapes variant={activeTab === 'nodes' ? 'Bold' : 'Linear'} size={20} />
            <span className="text-[10px] font-medium">Nodes</span>
          </button>
          <button
            onClick={() => setActiveTab('config')}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${activeTab === 'config' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Setting2 variant={activeTab === 'config' ? 'Bold' : 'Linear'} size={20} />
            <span className="text-[10px] font-medium">Config</span>
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${activeTab === 'preview' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Code variant={activeTab === 'preview' ? 'Bold' : 'Linear'} size={20} />
            <span className="text-[10px] font-medium">Preview</span>
          </button>
        </div>
      </div>
    </div>
  );
}
