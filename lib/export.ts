import { Edge } from '@xyflow/react';
import { BuilderNode } from './store';
import { generateCode } from './codegen';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { GeneratedFile, GeneratedFolder } from '../types';

export async function exportCode(nodes: BuilderNode[], edges: Edge[]) {
  const codeFiles = generateCode(nodes, edges);

  const zip = new JSZip();

  function addToZip(folder: JSZip, items: (GeneratedFile | GeneratedFolder)[]) {
    items.forEach(item => {
      if (item.type === 'file') {
        folder.file(item.name, item.content);
      } else if (item.type === 'folder') {
        const newFolder = folder.folder(item.name);
        if (newFolder) {
          addToZip(newFolder, item.children);
        }
      }
    });
  }

  addToZip(zip, codeFiles);

  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, 'express-api.zip');
}
