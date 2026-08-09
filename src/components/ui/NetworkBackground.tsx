"use client";

import { useEffect, useRef } from "react";

interface Hub {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

interface Satellite {
  hubIndex: number;
  angle: number;
  speed: number;
  distance: number;
  radius: number;
  color: string;
}

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.innerWidth <= 768 || window.matchMedia("(pointer: coarse)").matches) {
      // Disable this heavy background effect on mobile devices to prevent severe lag
      return;
    }

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Mouse interaction
    const mouse = { x: -1000, y: -1000, radius: 250 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseOut = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    const colors = ["#3b82f6", "#a855f7", "#ec4899"]; // Accent blue, purple, pink
    
    const numHubs = Math.max(3, Math.floor((width * height) / 300000));
    const hubs: Hub[] = [];
    const satellites: Satellite[] = [];

    // Initialize Hubs
    for (let i = 0; i < numHubs; i++) {
      hubs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 4 + 4, // Hubs are larger (4 to 8)
        color: colors[Math.floor(Math.random() * colors.length)],
      });

      // Initialize Satellites for this hub
      const numSatellites = Math.floor(Math.random() * 15) + 10; // 10 to 25 satellites per hub
      for (let j = 0; j < numSatellites; j++) {
        satellites.push({
          hubIndex: i,
          angle: Math.random() * Math.PI * 2,
          speed: (Math.random() - 0.5) * 0.02,
          distance: Math.random() * 100 + 40, // Distance from hub
          radius: Math.random() * 1.5 + 1, // Satellites are smaller
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw hubs
      hubs.forEach((hub, i) => {
        // Move hub
        hub.x += hub.vx;
        hub.y += hub.vy;

        // Bounce off edges
        if (hub.x < 0 || hub.x > width) hub.vx *= -1;
        if (hub.y < 0 || hub.y > height) hub.vy *= -1;

        // Mouse magnetic attraction & connecting lines
        const dx = mouse.x - hub.x;
        const dy = mouse.y - hub.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          // Attract towards mouse
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          // Easing force
          const force = (mouse.radius - distance) / mouse.radius;
          hub.x += forceDirectionX * force * 1.5;
          hub.y += forceDirectionY * force * 1.5;

          // Draw laser line to mouse
          ctx.beginPath();
          ctx.moveTo(hub.x, hub.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(255, 122, 0, ${force * 0.4})`; // Accent orange color
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Draw hub
        ctx.beginPath();
        ctx.arc(hub.x, hub.y, hub.radius, 0, Math.PI * 2);
        ctx.fillStyle = hub.color;
        ctx.fill();

        // Connect hubs to each other if close
        for (let j = i + 1; j < hubs.length; j++) {
          const h2 = hubs[j];
          const dhx = hub.x - h2.x;
          const dhy = hub.y - h2.y;
          const distH = Math.sqrt(dhx * dhx + dhy * dhy);

          if (distH < 300) {
            ctx.beginPath();
            ctx.moveTo(hub.x, hub.y);
            ctx.lineTo(h2.x, h2.y);
            const opacity = (1 - distH / 300) * 0.5;
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }
      });

      // Update and draw satellites
      satellites.forEach((sat) => {
        const hub = hubs[sat.hubIndex];
        
        // Update angle for orbiting
        sat.angle += sat.speed;

        // Calculate exact position
        const sx = hub.x + Math.cos(sat.angle) * sat.distance;
        const sy = hub.y + Math.sin(sat.angle) * sat.distance;

        // Draw satellite
        ctx.beginPath();
        ctx.arc(sx, sy, sat.radius, 0, Math.PI * 2);
        ctx.fillStyle = sat.color;
        ctx.fill();

        // Connect satellite to its hub
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(hub.x, hub.y);
        ctx.strokeStyle = `rgba(59, 130, 246, 0.15)`; // Faint blue line to hub
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none mix-blend-screen"
      style={{ opacity: 0.6 }}
    />
  );
}
