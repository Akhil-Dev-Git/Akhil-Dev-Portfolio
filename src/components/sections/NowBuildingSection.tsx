"use client";

import { motion } from "framer-motion";
import { Activity, Code2, BookOpen, Clock, Target, TerminalSquare } from "lucide-react";

export default function NowBuildingSection() {
  return (
    <section id="now-building" className="w-full py-32 bg-transparent relative overflow-hidden border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex items-center justify-center w-6 h-6">
                <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />
                <div className="w-3 h-3 rounded-full bg-accent" />
              </div>
              <span className="text-accent font-mono text-sm uppercase tracking-widest">Live Status</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-heading text-white"
            >
              Now <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">Building</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-glass-border text-sm text-text-secondary"
          >
            <Activity className="w-4 h-4 text-green-500" /> System Online
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Focus / Current Project */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 p-8 md:p-10 rounded-3xl bg-surface border border-glass-border relative overflow-hidden group"
          >
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:bg-accent/10 transition-colors duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-text-muted mb-6">
                <TerminalSquare className="w-5 h-5" />
                <span className="font-mono text-sm">Primary Focus</span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
                Next-Gen Portfolio AI Agent
              </h3>
              <p className="text-lg text-text-secondary mb-8 max-w-2xl leading-relaxed">
                Developing an embedded LLM agent that can interactively guide visitors through my portfolio, explain code architecture, and simulate conversations based on my past experiences.
              </p>
              
              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-white mb-3">Current Tech Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {["Next.js 15", "React 19", "Ollama", "LangChain", "Vector DB"].map((tech) => (
                    <span key={tech} className="px-4 py-2 text-sm rounded-lg bg-cards border border-glass-border text-text-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress & Milestone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-transparent border border-glass-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-4 h-4 text-accent" />
                    <span className="text-sm font-bold text-white">Current Milestone</span>
                  </div>
                  <p className="text-sm text-text-muted">Integrating local RAG pipeline for instant retrieval of project documentation without external API latency.</p>
                </div>
                <div className="p-5 rounded-2xl bg-transparent border border-glass-border flex flex-col justify-center">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-bold text-white">Development Progress</span>
                    <span className="text-xs font-mono text-accent">65%</span>
                  </div>
                  <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "65%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-accent to-accent-secondary rounded-full" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Column */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-6">
            
            {/* Current Learning */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-cards border border-glass-border"
            >
              <div className="flex items-center gap-2 text-text-muted mb-6">
                <BookOpen className="w-5 h-5" />
                <span className="font-mono text-sm">Currently Learning</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-3">
                Rust for Machine Learning
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Exploring how Rust can be utilized to optimize inference engines and build blazing fast data pipelines for AI workloads.
              </p>
              <div className="w-full h-1 bg-surface rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-blue-500 rounded-full" />
              </div>
            </motion.div>

            {/* Availability / Status */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-accent/10 border border-accent/20 relative overflow-hidden"
            >
              <div className="absolute -right-4 -bottom-4 opacity-10 pointer-events-none">
                <Code2 className="w-32 h-32 text-accent" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-accent mb-4">
                  <Clock className="w-5 h-5" />
                  <span className="font-mono text-sm">Status</span>
                </div>
                <h3 className="text-2xl font-bold font-heading text-white mb-2">
                  Open to Opportunities
                </h3>
                <p className="text-text-secondary text-sm mb-6">
                  Actively looking for roles where I can architect and build AI-driven products.
                </p>
                <a href="#contact" className="inline-block px-6 py-3 text-sm font-bold text-background bg-accent rounded-full hover:bg-accent-secondary transition-colors uppercase tracking-wider">
                  Let&apos;s Talk
                </a>
              </div>
            </motion.div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
