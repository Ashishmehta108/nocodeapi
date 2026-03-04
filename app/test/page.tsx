// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import "../globals.css";
// export default function InfiniteCanvas() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [zoomLevel, setZoomLevel] = useState(1);
//   const [offset, setOffset] = useState({ x: 0, y: 0 }); // Virtual canvas offset
//   const [isPanning, setIsPanning] = useState(false);
//   const lastMousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

//   const allowDrop = (ev: React.DragEvent<HTMLDivElement>) => {
//     ev.preventDefault();
//   };

//   const drag = (ev: React.DragEvent<HTMLDivElement>) => {
//     ev.dataTransfer.setData("text", ev.currentTarget.id);
//     document.body.style.cursor = "grabbing";
//   };

//   const dragEnd = () => {
//     document.body.style.cursor = "default";
//   };

//   const drop = (ev: React.DragEvent<HTMLDivElement>) => {
//     ev.preventDefault();
//     const data = ev.dataTransfer.getData("text");
//     const draggedElement = document.getElementById(data);

//     if (draggedElement && containerRef.current) {
//       const containerRect = containerRef.current.getBoundingClientRect();
//       const x = (ev.clientX - containerRect.left - offset.x) / zoomLevel; // Adjust for zoom and pan
//       const y = (ev.clientY - containerRect.top - offset.y) / zoomLevel; // Adjust for zoom and pan

//       draggedElement.style.position = "absolute";
//       draggedElement.style.left = `${x}px`;
//       draggedElement.style.top = `${y}px`;
//       containerRef.current.appendChild(draggedElement);
//     }
//   };
//   const handleWheel = (ev: React.WheelEvent<HTMLDivElement>) => {
//     ev.preventDefault();
//     setZoomLevel((prevZoom) =>
//       Math.min(Math.max(prevZoom + ev.deltaY * -0.001, 0.5), 2)
//     );
//   };
//   const handleMouseDown = (ev: React.MouseEvent<HTMLDivElement>) => {
//     setIsPanning(true);
//     lastMousePosition.current = { x: ev.clientX, y: ev.clientY };
//   };
//   const handleMouseMove = (ev: React.MouseEvent<HTMLDivElement>) => {
//     if (isPanning) {
//       const dx = ev.clientX - lastMousePosition.current.x;
//       const dy = ev.clientY - lastMousePosition.current.y;

//       setOffset((prev) => ({
//         x: prev.x + dx,
//         y: prev.y + dy,
//       }));

//       lastMousePosition.current = { x: ev.clientX, y: ev.clientY };
//     }
//   };

//   const handleMouseUp = () => {
//     setIsPanning(false);
//   };

//   useEffect(() => {
//     const container = containerRef.current;
//     if (container) {
//       container.style.transform = `translate(${offset.x}px, ${offset.y}px) scale(${zoomLevel})`;
//       container.style.transformOrigin = "0 0";
//     }
//   }, [zoomLevel, offset]);

//   return (
//     <div
//       className="h-screen w-full bg-gray-50 overflow-hidden relative   "
//       onWheel={handleWheel}
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       style={{
//         cursor: isPanning ? "grabbing" : "grab",
//         // backgroundImage: "linear-gradient(to right, #eee 1px, transparent 1px), linear-gradient(to bottom, #eee 1px, transparent 1px)",
//         // backgroundSize: "40px 40px", // Grid pattern
//       }}
//     >
//       {/* Canvas container */}
//       <div
//         ref={containerRef}
//         className="absolute top-0 left-0 w-full h-full"
//         onDrop={drop}
//         onDragOver={allowDrop}
//         style={{
//           position: "relative",
//         }}
//       >
//         {/* Draggable items */}
//         <div
//           id="drag1"
//           draggable="true"
//           onDragStart={drag}
//           onDragEnd={dragEnd}
//           className="w-20 h-20 bg-blue-500 text-white flex items-center justify-center rounded-md shadow-md absolute"
//           style={{
//             left: "100px",
//             top: "100px",
//             cursor: "grab",
//           }}
//         >
//           Drag Me
//         </div>

//         <div
//           id="drag2"
//           draggable="true"
//           onDragStart={drag}
//           onDragEnd={dragEnd}
//           className="w-20 h-20 bg-green-500 text-white flex items-center justify-center rounded-md shadow-md absolute"
//           style={{
//             left: "200px",
//             top: "200px",
//             cursor: "grab",
//           }}
//         >
//           Drag Me 2
//         </div>
//       </div>
//       <div className="absolute bottom-4 left-4 text-sm text-gray-700 bg-white p-2 rounded shadow">
//         <p>🖱 Drag items to drop anywhere on the infinite canvas.</p>
//         <p>🔍 Use mouse wheel to zoom in/out.</p>
//         <p>✋ Hold and drag anywhere to pan the canvas.</p>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import "../globals.css";

export default function Page() {
  const [dimensions, setDimensions] = useState({ width: 200, height: 200 });

  const handleResize = (e:React.MouseEvent<HTMLDivElement>, direction:any) => {
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = dimensions.width;
    const startHeight = dimensions.height;

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (direction === "right") {
        setDimensions((prev) => ({
          ...prev,
          width: Math.max(50, startWidth + (moveEvent.clientX - startX)),
        }));
      } else if (direction === "bottom") {
        setDimensions((prev) => ({
          ...prev,
          height: Math.max(50, startHeight + (moveEvent.clientY - startY)),
        }));
      }
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div
      className="relative bg-neutral-400 border border-gray-500 rounded-lg shadow-md p-4"
      style={{
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
      }}
    >
      <span
        className="absolute top-0 right-0 w-2 bg-blue-500 cursor-ew-resize"
        onMouseDown={(e) => handleResize(e, "right")}
      />
      <span
        className="absolute bottom-0 left-0 w-full h-2 bg-blue-500 cursor-ns-resize"
        onMouseDown={(e) => handleResize(e, "bottom")}
      />
      hii
    </div>
  );
}
