"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ExperienceNode, { ExperienceItem } from "../ui/ExperienceNode";

const timeline: ExperienceItem[] = [
  { year: "2023", title: "Started Engineering", desc: "Began B.Tech in Artificial Intelligence & Data Science at JKKMCT. Explored fundamentals of programming and software development." },
  { year: "2024", title: "AI Projects & Full Stack", desc: "Developed AI Trip Planner, FUTURA AI, and AD Jewels. Gained proficiency in React, Next.js, and integrating LLMs." },
  { year: "2025", title: "Computer Vision focus", desc: "Built Threat Detection and Posture Detection systems using PyTorch, OpenCV, and YOLO. Deepened understanding of Deep Learning." },
  { year: "2026", title: "AI Agents & Autonomous Systems", desc: "Transitioned focus to building autonomous AI agents, using local LLMs (Ollama) and agentic frameworks for complex tasks." },
  { year: "Future", title: "Building Intelligent Products", desc: "Aiming to build scalable AI products that solve real-world problems and push the boundaries of creative technology." },
];

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsMobile(typeof window !== "undefined" && (window.innerWidth <= 768 || window.matchMedia("(pointer: coarse)").matches));
    setMounted(true);
  }, []);

  return (
    <section id="experience" className="w-full py-32 bg-secondary relative overflow-hidden" ref={containerRef}>
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-24 text-center overflow-hidden">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-pink-500"
          >
            Journey
          </motion.h2>
        </div>

        <div className="relative">
          {/* Animated Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent-blue via-accent-purple to-accent-blue shadow-[0_0_10px_rgba(59,130,246,0.8)]"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {timeline.map((item, index) => (
              <ExperienceNode key={item.year} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
