"use client";

import { motion } from "framer-motion";
import { Database, Cpu, Code2, Sparkles } from "lucide-react";

const processSteps = [
  {
    icon: <Database className="w-8 h-8" />,
    title: "1. Architecture & Design",
    description: "Mapping out resilient data pipelines, scalable cloud infrastructure, and defining the core AI model requirements before a single line of code is written."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "2. AI & ML Engineering",
    description: "Developing intelligent algorithms, fine-tuning large language models, and orchestrating autonomous agents optimized for speed and accuracy."
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "3. Full Stack Integration",
    description: "Fusing the AI engine with a robust backend architecture and secure APIs, seamlessly connecting complex logic to the frontend interface."
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "4. Premium UI/UX",
    description: "Crafting pixel-perfect, physics-based user interfaces that make interacting with complex artificial intelligence feel effortless and magical."
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative w-full py-32 bg-transparent overflow-hidden border-t border-glass-border">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white"
          >
            The Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto font-light"
          >
            How I transform ambitious ideas into production-ready, intelligent digital products.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
              className="relative p-8 rounded-3xl bg-surface border border-glass-border hover:border-accent/50 hover:bg-cards transition-all duration-300 group overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="w-16 h-16 rounded-2xl bg-glass border border-glass-border flex items-center justify-center text-text-secondary group-hover:text-accent group-hover:border-accent/30 mb-8 transition-colors relative z-10">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold font-heading text-white mb-4 relative z-10">
                {step.title}
              </h3>
              
              <p className="text-sm text-text-muted leading-relaxed relative z-10">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
