"use client";

import React, { useRef, useEffect } from "react";

export default function InfinityLoop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      if (!canvas) return;
      const parent = canvas.parentElement;
      const w = parent ? parent.clientWidth : 500;
      const h = parent ? parent.clientHeight : 500;
      
      const targetWidth = w * window.devicePixelRatio;
      const targetHeight = h * window.devicePixelRatio;

      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        width = canvas.width = targetWidth || 500;
        height = canvas.height = targetHeight || 500;
      }
    };

    // Run once on load
    resizeCanvas();

    const handleResize = () => {
      resizeCanvas();
    };
    window.addEventListener("resize", handleResize);

    // Particle orbits with radial implosion gather animation
    const particleCount = 120;
    const particles: {
      angle: number;
      speed: number;
      currentRadius: number;
      targetRadius: number;
      size: number;
      color: string;
      alpha: number;
      gatherSpeed: number;
    }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        speed: 0.003 + Math.random() * 0.008,
        // Spawn far away to animate drawing/imploding inward
        currentRadius: 280 + Math.random() * 220,
        targetRadius: 65 + Math.random() * 115,
        size: 1.2 + Math.random() * 2.2,
        color: i % 3 === 0 ? "#a855f7" : i % 3 === 1 ? "#3b82f6" : "#c084fc", // purple, blue, light purple
        alpha: 0.25 + Math.random() * 0.55,
        gatherSpeed: 2.0 + Math.random() * 2.5,
      });
    }

    let time = 0;

    const draw = () => {
      resizeCanvas();
      ctx.clearRect(0, 0, width, height);
      
      ctx.globalAlpha = 1.0;
      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";

      time += 0.01;

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw rotating particles
      particles.forEach((p) => {
        p.angle += p.speed;
        
        // Vortex gather inward logic
        if (p.currentRadius > p.targetRadius) {
          p.currentRadius -= p.gatherSpeed;
        } else {
          p.currentRadius = p.targetRadius;
        }
        
        const radiusMultiplier = window.devicePixelRatio;
        const currentRadius = (p.currentRadius + Math.sin(time * 1.5 + p.targetRadius) * 6) * radiusMultiplier;
        
        const x = centerX + Math.cos(p.angle) * currentRadius;
        const y = centerY + Math.sin(p.angle) * currentRadius;

        ctx.beginPath();
        ctx.arc(x, y, p.size * window.devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-[350px]">
      {/* Outer pulsating radial glow behind the logo */}
      <div className="absolute w-[70%] h-[70%] bg-purple-500/10 rounded-full filter blur-[80px] animate-pulse pointer-events-none z-0"></div>

      {/* Dynamic high-tech HUD rotating orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        {/* Clockwise rotating dashed circle */}
        <svg 
          className="absolute w-[290px] h-[290px] md:w-[370px] md:h-[370px] animate-spin opacity-35" 
          style={{ animationDuration: "18s" }} 
          viewBox="0 0 200 200"
        >
          <circle 
            cx="100" 
            cy="100" 
            r="88" 
            fill="none" 
            stroke="url(#hud-grad-1)" 
            strokeWidth="1.5" 
            strokeDasharray="6 4 14 6" 
          />
          <defs>
            <linearGradient id="hud-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Counter-clockwise rotating dotted circle */}
        <svg 
          className="absolute w-[260px] h-[260px] md:w-[340px] md:h-[340px] animate-spin opacity-25" 
          style={{ animationDuration: "28s", animationDirection: "reverse" }} 
          viewBox="0 0 200 200"
        >
          <circle 
            cx="100" 
            cy="100" 
            r="82" 
            fill="none" 
            stroke="url(#hud-grad-2)" 
            strokeWidth="1" 
            strokeDasharray="2 6" 
          />
          <defs>
            <linearGradient id="hud-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Canvas for background particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Centered animated brand logo image with CSS entrance + float combination */}
      <div className="relative z-10 w-[240px] h-[240px] md:w-[320px] md:h-[320px] flex items-center justify-center animate-logo-entrance">
        {/* Inner container to apply float loop separate from entry bounce */}
        <div className="w-full h-full flex items-center justify-center animate-float">
          {/* Soft backplate glow specifically to enhance logo readability */}
          <div className="absolute inset-4 bg-white/40 backdrop-blur-[2px] rounded-full shadow-[0_0_60px_25px_rgba(139,92,246,0.18)] pointer-events-none"></div>
          
          <img
            src="/logos/nuraf_icon_cropped.png"
            alt="NURAF Icon"
            className="w-[85%] h-[85%] object-contain drop-shadow-[0_15px_35px_rgba(139,92,246,0.38)]"
          />
        </div>
      </div>
    </div>
  );
}
