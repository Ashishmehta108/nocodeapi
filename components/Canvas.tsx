import React, { useCallback, useRef } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useReactFlow,
  ReactFlowProvider,
  NodeTypes,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useBuilderStore } from '../lib/store';
import { NodeType } from '../types';
import CustomNode from './CustomNode';
import { useTheme } from 'next-themes';

const nodeTypes: NodeTypes = {
  builderNode: CustomNode,
};

function FlowCanvas() {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const { screenToFlowPosition } = useReactFlow();
  const { theme } = useTheme();

  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    addNode,
    setSelectedNode,
  } = useBuilderStore();

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow') as NodeType;

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      addNode(type, position);
    },
    [screenToFlowPosition, addNode]
  );

  const isDark = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <div className="flex-1 h-full w-full" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        onSelectionChange={useCallback((params: any) => {
          setSelectedNode(params.nodes.length > 0 ? (params.nodes[0] as any) : null);
        }, [setSelectedNode])}
        fitView
        className="bg-background"
      >
        <Controls />
        <MiniMap
          nodeColor={(n) => {
            if (n.data?.type === 'http_trigger') return '#3b82f6';
            if (n.data?.type === 'db_query') return '#22c55e';
            if (n.data?.type === 'response_formatter') return '#a855f7';
            return isDark ? '#4b5563' : '#cbd5e1';
          }}
          maskColor={isDark ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)"}
          style={{ backgroundColor: isDark ? '#18181b' : '#f8fafc' }}
        />
        <Background color={isDark ? "#3f3f46" : "#e2e8f0"} gap={16} />
      </ReactFlow>
    </div>
  );
}

export default function Canvas() {
  return (
    <ReactFlowProvider>
      <FlowCanvas />
    </ReactFlowProvider>
  );
}
