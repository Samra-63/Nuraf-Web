"use client";

import React, { useRef, useEffect } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  active: boolean;
  pulseOffset: number;
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.getBoundingClientRect().width * window.devicePixelRatio;
      height = canvas.height = canvas.getBoundingClientRect().height * window.devicePixelRatio;
    };
    window.addEventListener("resize", handleResize);

    // Initialize nodes
    const nodeCount = 50;
    const nodes: Node[] = [];

    // Let's make some nodes "active" (e.g., matching the three case study cards)
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2 + 1,
        active: i < 3, // First three nodes are our "active related project" connectors
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    let pulseTime = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      pulseTime += 0.02;

      // Update positions
      nodes.forEach((node) => {
        // Slow down active nodes and keep them near specific grid sectors for a focused connective look
        if (node.active) {
          // Attract active nodes to predefined hotspots in a grid format
          // Hotspot 1: top-left, Hotspot 2: middle-right, Hotspot 3: bottom-left
          let targetX = width * 0.25;
          let targetY = height * 0.3;
          if (nodes.indexOf(node) === 1) {
            targetX = width * 0.75;
            targetY = height * 0.45;
          } else if (nodes.indexOf(node) === 2) {
            targetX = width * 0.45;
            targetY = height * 0.8;
          }

          node.x += (targetX - node.x) * 0.01;
          node.y += (targetY - node.y) * 0.01;
        } else {
          node.x += node.vx;
          node.y += node.vy;

          // Boundary checks
          if (node.x < 0) node.x = width;
          if (node.x > width) node.x = 0;
          if (node.y < 0) node.y = height;
          if (node.y > height) node.y = 0;
        }
      });

      // Draw connective lines for regular ambient nodes
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "rgba(168, 85, 247, 0.05)";
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw thick connective lines for Active project nodes indicating related paths
      const activeNodes = nodes.filter((n) => n.active);
      ctx.lineWidth = 2.0;

      // Draw lines between active nodes with pulse waves
      for (let i = 0; i < activeNodes.length; i++) {
        for (let j = i + 1; j < activeNodes.length; j++) {
          const n1 = activeNodes[i];
          const n2 = activeNodes[j];

          // Glow effect
          ctx.shadowBlur = 15;
          ctx.shadowColor = "rgba(168, 85, 247, 0.8)";

          const grad = ctx.createLinearGradient(n1.x, n1.y, n2.x, n2.y);
          grad.addColorStop(0, "rgba(168, 85, 247, 0.5)");
          grad.addColorStop(0.5, "rgba(59, 130, 246, 0.7)");
          grad.addColorStop(1, "rgba(168, 85, 247, 0.5)");
          ctx.strokeStyle = grad;

          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.stroke();

          // Draw small moving glowing particle pulse packets on the connective wire
          ctx.shadowBlur = 0; // Turn off shadow blur for packet
          const packetCount = 2;
          for (let p = 0; p < packetCount; p++) {
            // Speed factor
            const progress = ((pulseTime * 0.2 + p / packetCount) % 1.0);
            const px = n1.x + (n2.x - n1.x) * progress;
            const py = n1.y + (n2.y - n1.y) * progress;

            ctx.beginPath();
            ctx.arc(px, py, 4, 0, Math.PI * 2);
            ctx.fillStyle = "#ffffff";
            ctx.shadowBlur = 10;
            ctx.shadowColor = "#3b82f6";
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }

      // Draw all nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        if (node.active) {
          const scale = 1 + Math.sin(pulseTime * 3 + node.pulseOffset) * 0.3;
          ctx.arc(node.x, node.y, 6 * scale, 0, Math.PI * 2);
          ctx.fillStyle = "#a855f7";
          ctx.shadowBlur = 15;
          ctx.shadowColor = "#a855f7";
        } else {
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(148, 163, 184, 0.4)";
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      });

      ctx.shadowBlur = 0;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
