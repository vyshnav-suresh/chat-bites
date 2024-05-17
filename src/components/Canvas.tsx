"use client";
import type { NodeChange, OnConnect } from "reactflow";
import { useCallback, useState } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
} from "reactflow";

import "reactflow/dist/style.css";
import { initialNodes, nodeTypes } from "./nodes";
import { edgeTypes, initialEdges } from "./edges";

export default function Canvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );
  const [elements, setElements] = useState([]);

  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
  };

  const onCanvasDrop = (event: any) => {
    event.preventDefault();

    const reactflowType = event.dataTransfer.getData("application/reactflow");
    const position = { x: event.clientX, y: event.clientY };

    // Get the bounding rectangle of the canvas container
    const canvasBounds = event.currentTarget.getBoundingClientRect();

    // Calculate the position relative to the canvas
    const canvasPosition = {
      x: position.x - canvasBounds.left,
      y: position.y - canvasBounds.top,
    };

    console.log(
      canvasPosition,
      " positionX",
      position.x,
      " positionY",
      position.y,
      " canvasleft",
      canvasBounds.left,
      " canvasright",
      canvasBounds.top
    );

    const newNode = {
      id: Date.now().toString(),
      type: reactflowType,
      position: canvasPosition, // Use canvasPosition instead of position
      data: { label: `${reactflowType}` },
    };

    // Add the new node to the initialNodes
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  const onCanvasDragOver = (event: any) => {
    event.preventDefault();
  };

  return (
    <div
      className="w-full h-full"
      onDrop={onCanvasDrop}
      onDragOver={onCanvasDragOver}
    >
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        edgeTypes={edgeTypes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        {/* <Background /> */}
        {/* <MiniMap /> */}
        <Controls />
      </ReactFlow>
    </div>
  );
}
