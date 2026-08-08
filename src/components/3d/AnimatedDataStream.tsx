"use client";

import { useEffect, useRef } from "react";

export default function AnimatedDataStream() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    
    interface StreamParticle {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      width: number;
    }

    let particles: StreamParticle[] = [];
    const particleCount = 50; // Minimal and clean

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height * 2 - height, // Start randomly above or on screen
          length: 40 + Math.random() * 120,
          speed: 1 + Math.random() * 2,
          opacity: 0.05 + Math.random() * 0.2, // Very subtle
          width: Math.random() > 0.8 ? 2 : 1, // Occasional thicker stream
        });
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Deep dark background
      ctx.fillStyle = "#0A0A0A";
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        // Move down
        p.y += p.speed;
        
        // Reset if it goes off screen
        if (p.y - p.length > height) {
          p.y = -p.length;
          p.x = Math.random() * width;
          p.speed = 1 + Math.random() * 2;
        }

        // Draw the stream (fading tail)
        const gradient = ctx.createLinearGradient(p.x, p.y - p.length, p.x, p.y);
        gradient.addColorStop(0, "rgba(255, 122, 0, 0)");
        gradient.addColorStop(0.8, `rgba(255, 122, 0, ${p.opacity})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${p.opacity + 0.3})`); // Bright head

        ctx.beginPath();
        ctx.moveTo(p.x, p.y - p.length);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = p.width;
        ctx.lineCap = "round";
        
        // Add subtle glow to the head of the stream
        if (p.width > 1) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = "rgba(255, 122, 0, 0.6)";
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]"
      style={{ background: "#0A0A0A" }}
    />
  );
}
