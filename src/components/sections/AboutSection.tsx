"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Cpu, Rocket, Target, Zap, Sparkles, Shield, Activity, Infinity, Layers } from "lucide-react";
import { useRef } from "react";
import { TextReveal } from "../ui/TextReveal";

const timeline = [
  { year: "2023", title: "Started AI & DS", description: "Began my journey into data science, analyzing complex datasets and building foundational statistical models." },
  { year: "2024", title: "Machine Learning", description: "Mastered predictive modeling, feature engineering, and deploying robust scikit-learn algorithms into production." },
  { year: "2024", title: "Deep Learning", description: "Architected and trained deep neural networks using TensorFlow and PyTorch for advanced pattern recognition." },
  { year: "2025", title: "Computer Vision", description: "Developed real-time object detection, facial recognition, and ergonomic posture analysis systems." },
  { year: "2025", title: "AI Agents", description: "Created autonomous, goal-driven agents leveraging Large Language Models to solve complex multi-step reasoning tasks." },
  { year: "2026", title: "Automation", description: "Designed intelligent workflow automations, integrating AI with cloud services to eliminate repetitive manual labor." },
  { year: "2026+", title: "Building Intelligent Products", description: "Fusing AI backend orchestration with premium frontend design to engineer end-to-end luxury software products." }
];

const values = [
  { icon: <Zap className="w-6 h-6" />, title: "Innovation", text: "Pushing boundaries with cutting-edge technology." },
  { icon: <Brain className="w-6 h-6" />, title: "Learning", text: "Continuous adaptation in a fast-paced AI world." },
  { icon: <Target className="w-6 h-6" />, title: "Precision", text: "Writing clean, scalable, and optimized code." },
  { icon: <Rocket className="w-6 h-6" />, title: "Leadership", text: "Guiding projects from architecture to deployment." },
  { icon: <Cpu className="w-6 h-6" />, title: "Problem Solving", text: "Engineering solutions to complex challenges." },
  { icon: <Sparkles className="w-6 h-6" />, title: "Aesthetics", text: "Crafting pixel-perfect, luxury digital experiences." },
  { icon: <Activity className="w-6 h-6" />, title: "Autonomy", text: "Designing intelligent, self-operating AI agents." },
  { icon: <Layers className="w-6 h-6" />, title: "Scalability", text: "Architecting cloud systems for massive data throughput." },
  { icon: <Shield className="w-6 h-6" />, title: "Security", text: "Ensuring robust data protection and secure pipelines." },
  { icon: <Infinity className="w-6 h-6" />, title: "Impact", text: "Building enduring technology that solves human problems." }
];

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} id="about" className="relative w-full py-32 bg-transparent overflow-hidden border-t border-glass-border">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-[500px] bg-accent-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header / About Me - Full Viewport Height */}
        <motion.div style={{ y: y3 }} className="min-h-[90vh] flex flex-col justify-center mb-32 md:w-4/5">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading mb-8 text-white">
            <TextReveal text="The Journey of" delay={0.1} /> <br />
            <TextReveal 
              text="Engineering Intelligence." 
              delay={0.4} 
              className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary" 
            />
          </h2>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "0px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="text-text-secondary text-lg md:text-xl leading-relaxed space-y-6"
          >
            <p>
              I am an AI Engineer and Full Stack Developer driven by a singular goal: building intelligent systems that feel indistinguishable from magic. My journey began with a deep fascination for data science, which quickly evolved into a specialized focus on artificial intelligence and modern web architecture.
            </p>
            <p>
              I don&apos;t just train models in isolated notebooks. I architect end-to-end solutions—from engineering resilient backend pipelines and orchestrating autonomous AI agents, to crafting pixel-perfect, luxury frontend experiences that users love to interact with.
            </p>
            <p>
              Whether it&apos;s developing real-time computer vision systems, fine-tuning large language models for enterprise automation, or building highly responsive Next.js applications, I approach every project with an uncompromising commitment to engineering excellence and aesthetic design.
            </p>
            <p>
              My technical approach is deeply rooted in performance and scalability. I build robust backend orchestrations that seamlessly process complex AI tasks, while ensuring the frontend remains blazingly fast. From deploying microservices to crafting fluid, physics-based UI animations, I believe great engineering should be invisible to the user.
            </p>
            <p>
              Beyond code, I am a product thinker. I continuously analyze how users interact with artificial intelligence, iterating on user experiences to eliminate friction. My goal is to build tools that amplify human potential, giving creators and businesses the leverage they need to innovate faster.
            </p>
            <p className="text-white font-medium border-l-2 border-accent pl-6 py-2 italic mt-8 text-xl">
              &quot;For me, technology is a tool to solve human problems. I thrive at the intersection of research and production, turning complex algorithms into seamless, intuitive products.&quot;
            </p>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="mb-32">
            <motion.h3 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "0px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-heading font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-accent to-white"
            >
              The Path to Mastery
            </motion.h3>
            <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-glass-border before:to-transparent">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "0px" }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active py-4"
                >
                  {/* Marker */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-glass-border group-hover:bg-accent group-hover:border-accent/30 group-hover:shadow-[0_0_15px_rgba(255,122,0,0.5)] transition-all duration-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />
                  
                  {/* Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-cards border border-glass-border hover:border-accent/50 transition-colors duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-white text-lg">{item.title}</h4>
                      {item.year && <span className="text-accent font-mono text-sm">{item.year}</span>}
                    </div>
                    <p className="text-sm text-text-muted">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
        </div>

        {/* Core Values */}
        <div className="max-w-5xl mx-auto">
            <motion.h3 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "0px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-heading font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-accent to-white"
            >
              Core Values
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((val, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "0px" }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: (index % 5) * 0.05 }}
                  className="p-6 rounded-2xl bg-surface border border-glass-border hover:border-accent/50 hover:bg-cards transition-all duration-300 group flex items-start gap-6"
                >
                  <div className="w-12 h-12 shrink-0 rounded-full bg-glass flex items-center justify-center text-text-secondary group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{val.title}</h4>
                    <p className="text-sm text-text-muted leading-relaxed">{val.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
    </section>
  );
}
