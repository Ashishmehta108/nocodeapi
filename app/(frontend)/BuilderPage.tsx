'use client';

import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Canvas from '../../components/Canvas';
import ConfigPanel from '../../components/ConfigPanel';
import LivePreview from '../../components/LivePreview';

export default function BuilderPage() {
  return (
    <div className="flex flex-col h-screen w-full bg-gray-950 text-white overflow-hidden font-sans selection:bg-blue-600/30">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 relative">
            <Canvas />
          </div>
          <LivePreview />
        </main>
        <ConfigPanel />
      </div>
    </div>
  );
}
