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

const nodeTypes: NodeTypes = {
  builderNode: CustomNode,
};

function FlowCanvas() {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const { screenToFlowPosition } = useReactFlow();

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
        onSelectionChange={useCallback((params) => {
          // Avoid infinite loops by not setting if the selected node ID hasn't changed
          setSelectedNode(params.nodes.length > 0 ? (params.nodes[0] as any) : null);
        }, [setSelectedNode])}
        fitView
        className="bg-gray-950"
      >
        <Controls />
        <MiniMap
            nodeColor={(n) => {
                if (n.data?.type === 'http_trigger') return '#2563eb';
                if (n.data?.type === 'db_query') return '#16a34a';
                if (n.data?.type === 'response_formatter') return '#9333ea';
                return '#4b5563';
            }}
            maskColor="rgba(0,0,0,0.5)"
            style={{ backgroundColor: '#111827' }}
        />
        <Background color="#374151" gap={16} />
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
