"use client";

import { motion } from "framer-motion";
import { Brain, Bot, Cpu, Network, Zap, Eye, Layout, PenTool, Database, Link, Cloud } from "lucide-react";

const services = [
  { name: "AI Development", icon: <Brain className="w-6 h-6" /> },
  { name: "AI Agents", icon: <Bot className="w-6 h-6" /> },
  { name: "Machine Learning", icon: <Network className="w-6 h-6" /> },
  { name: "Deep Learning", icon: <Cpu className="w-6 h-6" /> },
  { name: "Automation", icon: <Zap className="w-6 h-6" /> },
  { name: "Computer Vision", icon: <Eye className="w-6 h-6" /> },
  { name: "Web Development", icon: <Layout className="w-6 h-6" /> },
  { name: "UI/UX Design", icon: <PenTool className="w-6 h-6" /> },
  { name: "Backend APIs", icon: <Database className="w-6 h-6" /> },
  { name: "Blockchain", icon: <Link className="w-6 h-6" /> },
  { name: "Cloud Solutions", icon: <Cloud className="w-6 h-6" /> },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-32 bg-transparent relative overflow-hidden border-t border-glass-border">
      {/* Abstract blurred background shapes */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-white"
            >
              Services & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-muted to-white">
                Capabilities.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className="text-text-secondary text-lg"
            >
              Comprehensive technical solutions spanning from intelligent backend systems to premium user interfaces.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          >
            <a href="#contact" className="inline-block border-b border-accent text-white font-medium pb-1 hover:text-accent transition-colors">
              Discuss a Project
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
              className="group p-6 rounded-2xl bg-surface border border-glass-border hover:border-accent/40 hover:bg-cards transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center gap-4"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="text-text-muted group-hover:text-accent transition-colors duration-300 z-10">
                {service.icon}
              </div>
              <h3 className="text-white font-medium z-10 group-hover:drop-shadow-[0_0_10px_rgba(255,122,0,0.3)] transition-all">
                {service.name}
              </h3>
            </motion.div>
          ))}
          
          {/* CTA Card to complete grid if needed */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: services.length % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: services.length * 0.05 }}
            className="group p-6 rounded-2xl bg-gradient-to-br from-accent to-accent-secondary border border-accent/50 hover:shadow-[0_0_30px_rgba(255,122,0,0.4)] transition-all duration-300 flex flex-col items-center justify-center text-center gap-4 min-h-[160px]"
          >
            <h3 className="text-white font-bold text-lg">
              Start Building
            </h3>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-4 h-4 text-white" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
