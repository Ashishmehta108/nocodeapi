import { create } from 'zustand';
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
} from '@xyflow/react';
import { AnyNodeData, NodeType } from '../types';

export type BuilderNode = Node<AnyNodeData>;

interface BuilderState {
  nodes: BuilderNode[];
  edges: Edge[];
  selectedNode: BuilderNode | null;
  onNodesChange: OnNodesChange<BuilderNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  addNode: (type: NodeType, position: { x: number; y: number }) => void;
  updateNodeData: (id: string, data: Partial<AnyNodeData>) => void;
  setSelectedNode: (node: BuilderNode | null) => void;
  clearCanvas: () => void;
  generateFromPrompt: (prompt: string) => void;
}

const initialNodes: BuilderNode[] = [
  {
    id: '1',
    type: 'builderNode', // custom react flow node type
    position: { x: 250, y: 100 },
    data: {
      type: 'http_trigger',
      label: 'HTTP Trigger',
      method: 'GET',
      path: '/api/users',
    },
  },
];

const initialEdges: Edge[] = [];

let idCounter = 2;
const getId = () => `${idCounter++}`;

export const useBuilderStore = create<BuilderState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  selectedNode: null,

  onNodesChange: (changes: NodeChange<BuilderNode>[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  onConnect: (connection: Connection) => {
    set({
      edges: addEdge({ ...connection, animated: true }, get().edges),
    });
  },

  addNode: (type: NodeType, position: { x: number; y: number }) => {
    const newNode: BuilderNode = {
      id: getId(),
      type: 'builderNode', // Ensure we use our custom node type for rendering
      position,
      data: getDefaultData(type),
    };
    set({ nodes: [...get().nodes, newNode] });
  },

  updateNodeData: (id: string, data: Partial<AnyNodeData>) => {
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, ...data } } : node
      ),
      selectedNode:
        state.selectedNode?.id === id
          ? { ...state.selectedNode, data: { ...state.selectedNode.data, ...data } }
          : state.selectedNode,
    }));
  },

  setSelectedNode: (node: BuilderNode | null) => {
    set((state) => {
      if (state.selectedNode?.id === node?.id) return {}; // avoid re-renders if same node
      return { selectedNode: node };
    });
  },

  clearCanvas: () => {
    set({ nodes: [], edges: [], selectedNode: null });
  },

  generateFromPrompt: (prompt: string) => {
    // Simple simulated AI response based on keywords
    let nodes: BuilderNode[] = [];
    let edges: Edge[] = [];

    // reset id counter to have predictable ids for simulation
    idCounter = 1;

    if (prompt.toLowerCase().includes('jwt') && prompt.toLowerCase().includes('crud')) {
      nodes = [
        { id: getId(), type: 'builderNode', position: { x: 50, y: 100 }, data: { type: 'http_trigger', label: 'GET /users', method: 'GET', path: '/users' } },
        { id: getId(), type: 'builderNode', position: { x: 300, y: 100 }, data: { type: 'auth_guard', label: 'JWT Auth', strategy: 'jwt' } },
        { id: getId(), type: 'builderNode', position: { x: 550, y: 100 }, data: { type: 'db_query', label: 'Get Users', dbType: 'postgres', query: 'SELECT * FROM users', operation: 'find', collectionOrTable: 'users' } },
        { id: getId(), type: 'builderNode', position: { x: 800, y: 100 }, data: { type: 'response_formatter', label: 'Format Output', statusCode: 200 } }
      ];
      edges = [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3', animated: true },
        { id: 'e3-4', source: '3', target: '4', animated: true }
      ];
    } else {
      // Default basic flow
      nodes = [
        { id: getId(), type: 'builderNode', position: { x: 250, y: 100 }, data: { type: 'http_trigger', label: 'API Endpoint', method: 'POST', path: '/data' } },
        { id: getId(), type: 'builderNode', position: { x: 250, y: 300 }, data: { type: 'response_formatter', label: 'Send Response', statusCode: 201 } }
      ];
      edges = [
        { id: 'e1-2', source: '1', target: '2', animated: true }
      ];
    }

    set({ nodes, edges, selectedNode: null });
  }
}));

function getDefaultData(type: NodeType): AnyNodeData {
  switch (type) {
    case 'http_trigger':
      return { type, label: 'HTTP Trigger', method: 'GET', path: '/' };
    case 'route_handler':
      return { type, label: 'Route Handler', name: 'myRouteHandler' };
    case 'middleware':
      return { type, label: 'Middleware', name: 'myMiddleware' };
    case 'auth_guard':
      return { type, label: 'Auth Guard', strategy: 'jwt' };
    case 'db_query':
      return { type, label: 'DB Query', dbType: 'postgres', query: '', operation: 'find' };
    case 'validator':
      return { type, label: 'Validator', schema: 'z.object({})' };
    case 'response_formatter':
      return { type, label: 'Response', statusCode: 200 };
    case 'error_handler':
      return { type, label: 'Error Handler', catchAll: true };
    case 'ai_transform':
      return { type, label: 'AI Transform', prompt: 'Summarize data' };
    case 'webhook':
      return { type, label: 'Webhook', event: 'user.created' };
    default:
      return { type: 'http_trigger', label: 'Unknown', method: 'GET', path: '/' } as any;
  }
}
