'use client';

import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Canvas from '../../components/Canvas';
import ConfigPanel from '../../components/ConfigPanel';
import LivePreview from '../../components/LivePreview';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

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
  return (
    <div className="flex flex-col h-screen w-full bg-background text-foreground overflow-hidden font-sans selection:bg-primary/30">
      <Header />

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
  );
}
