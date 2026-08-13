"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronRight, X } from "lucide-react";
import { GithubIcon as Github } from "../ui/Icons";
import { TextReveal } from "../ui/TextReveal";

// Mock data based on blueprint. In a real app, this would be more detailed.
const projects = [
  {
    id: "ai-trip-planner",
    name: "AI Trip Planner",
    tagline: "Autonomous travel itinerary generation using LLMs.",
    year: "2024",
    image: "/project-trip.jpg", // Placeholder
    hasDemo: true,
    hasGithub: false,
    demoUrl: "https://akhil-dev-git.github.io/AI-Trip-Planner/",
    tech: ["Next.js", "OpenAI", "TailwindCSS", "PostgreSQL"],
    caseStudy: {
      problem: "Planning trips requires countless hours of cross-referencing flights, hotels, and activities.",
      solution: "An intelligent agent that takes user preferences and budget, generating a complete, bookable itinerary in seconds.",
      architecture: "Next.js frontend communicating with a Python FastAPI backend that orchestrates multiple AI agents.",
      challenges: "Handling context limits for long trips and preventing AI hallucinations for real-world locations.",
      results: "Reduced average planning time from 3 hours to 30 seconds with 95% user satisfaction.",
    }
  },
  {
    id: "threat-detection",
    name: "Threat Detection",
    tagline: "Real-time cybersecurity anomaly detection.",
    year: "2024",
    image: "/project-threat.jpg",
    hasDemo: false,
    hasGithub: true,
    demoUrl: "#",
    githubUrl: "https://github.com/akhil-dev-git/Threat-Detection",
    tech: ["Python", "TensorFlow", "Kafka", "React"],
    caseStudy: {
      problem: "Traditional rule-based firewalls miss novel zero-day attacks.",
      solution: "A machine learning pipeline that analyzes network traffic patterns to detect anomalies in real-time.",
      architecture: "Data ingestion via Kafka, processing with TensorFlow models, and a React dashboard for visualization.",
      challenges: "Minimizing false positives while maintaining ultra-low latency.",
      results: "Successfully identified 99.2% of simulated zero-day attacks in testing.",
    }
  },
  {
    id: "posture-detection",
    name: "Posture Detection",
    tagline: "Computer vision for ergonomic health.",
    year: "2023",
    image: "/project-posture.jpg",
    hasDemo: false,
    hasGithub: true,
    demoUrl: "#",
    githubUrl: "https://github.com/akhil-dev-git/posture-detection",
    tech: ["OpenCV", "MediaPipe", "Python"],
    caseStudy: {
      problem: "Remote workers suffer from chronic back pain due to poor desk posture.",
      solution: "A lightweight desktop application that uses the webcam to monitor spinal alignment and alert the user.",
      architecture: "MediaPipe Pose estimation running locally to ensure complete privacy, with a minimal UI.",
      challenges: "Running complex CV models efficiently on standard laptop hardware without draining battery.",
      results: "Maintained 30 FPS on integrated graphics while correctly identifying poor posture 94% of the time.",
    }
  },
  {
    id: "futura-ai",
    name: "FUTURA AI",
    tagline: "Next-generation personal assistant.",
    year: "2024",
    image: "/project-futura.jpg",
    hasDemo: false,
    hasGithub: true,
    demoUrl: "#",
    githubUrl: "https://github.com/akhil-dev-git/FUTURA-AI",
    tech: ["React Native", "PyTorch", "Whisper", "Node.js"],
    caseStudy: {
      problem: "Voice assistants lack deep contextual understanding and proactive capabilities.",
      solution: "A mobile-first assistant that learns user habits and preemptively manages tasks.",
      architecture: "React Native app connected to a custom NLP engine processing speech via Whisper.",
      challenges: "Achieving natural, conversational latency (< 800ms) over mobile networks.",
      results: "Beta tested with 50 users who reported a 30% increase in daily productivity.",
    }
  },
  {
    id: "ad-jewels",
    name: "AD Jewels",
    tagline: "Luxury e-commerce platform with AR try-on.",
    year: "2023",
    image: "/project-jewels.jpg",
    hasDemo: true,
    hasGithub: false,
    demoUrl: "https://akhil-dev-git.github.io/AD-JEWELS/",
    tech: ["Next.js", "Three.js", "Stripe", "Sanity CMS"],
    caseStudy: {
      problem: "High return rates for online jewelry purchases due to sizing and styling uncertainty.",
      solution: "A premium e-commerce experience featuring 3D product viewing and WebXR try-on capabilities.",
      architecture: "Next.js storefront with Three.js rendering engine, backed by a headless CMS.",
      challenges: "Optimizing 3D models to load instantly without compromising luxury visual quality.",
      results: "Increased conversion rate by 45% and reduced returns by 22% post-launch.",
    }
  }
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);
  
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsMobile(typeof window !== "undefined" && (window.innerWidth <= 768 || window.matchMedia("(pointer: coarse)").matches));
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeProject]);

  return (
    <section ref={containerRef} id="projects" className="w-full py-32 bg-transparent relative border-t border-glass-border min-h-screen">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div style={mounted && isMobile ? {} : { y: yTitle }} className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-white">
            <TextReveal text="Engineering" delay={0.1} /> <br />
            <TextReveal 
              text="Case Studies." 
              delay={0.4} 
              className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary"
            />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "0px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="text-text-secondary text-lg max-w-2xl"
          >
            Deep dives into architecture, challenges, and results. Not just what I built, but how and why.
          </motion.p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "0px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.05 }}
            >
              <button
                onClick={() => setActiveProject(project)}
                className="w-full group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-10 rounded-3xl bg-surface border border-glass-border hover:border-accent/50 hover:bg-cards transition-all duration-500 text-left relative overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex flex-col gap-4 z-10">
                  <div className="flex items-center gap-4">
                    <span className="text-accent font-mono text-sm">{project.year}</span>
                    <h3 className="text-2xl md:text-4xl font-bold font-heading text-white group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <p className="text-text-secondary text-lg">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full border border-glass-border text-text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 md:mt-0 w-12 h-12 rounded-full border border-glass-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300 z-10 shrink-0 self-end md:self-auto">
                  <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-white transition-colors" />
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-surface border border-glass-border rounded-3xl overflow-y-auto no-scrollbar shadow-2xl flex flex-col"
              data-lenis-prevent="true"
            >
              {/* Header Image Area with Wipe Reveal */}
              <div className="relative h-64 md:h-80 bg-cards border-b border-glass-border overflow-hidden shrink-0 flex items-center justify-center">
                {/* Image Wipe Animation */}
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1], delay: 0.3 }}
                  className="absolute top-0 right-0 bottom-0 bg-accent z-40"
                />
                
                {/* Simulated Image Scale Down */}
                <motion.div
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  className="absolute inset-0 bg-accent/5"
                  style={{
                    backgroundImage: `url(${activeProject.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent z-10" />
                
                <h2 className="relative z-20 text-4xl md:text-6xl font-bold font-heading text-white text-center px-6">
                  {activeProject.name}
                </h2>
                
                <button 
                  onClick={() => setActiveProject(null)}
                  className="absolute top-6 right-6 z-30 p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-accent hover:border-accent transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Case Study Content */}
              <div className="p-8 md:p-12 text-lg">
                <div className="flex flex-wrap items-center gap-4 mb-12 pb-8 border-b border-glass-border">
                  {activeProject.hasDemo !== false && (
                    <a 
                      href={activeProject.demoUrl || "#"} 
                      target={activeProject.demoUrl && activeProject.demoUrl !== "#" ? "_blank" : undefined} 
                      rel={activeProject.demoUrl && activeProject.demoUrl !== "#" ? "noopener noreferrer" : undefined} 
                      onClick={(e) => {
                        if (!activeProject.demoUrl || activeProject.demoUrl === "#") {
                          e.preventDefault();
                          alert("Live demo link is pending. Please check back later!");
                        }
                      }}
                      className="flex items-center gap-2 text-sm font-bold text-white px-6 py-3 rounded-full bg-accent hover:bg-accent-secondary transition-colors uppercase tracking-wider"
                    >
                      Live Demo <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  {activeProject.hasGithub !== false && (
                    <a 
                      href={activeProject.githubUrl || "#"} 
                      target={activeProject.githubUrl && activeProject.githubUrl !== "#" ? "_blank" : undefined} 
                      rel={activeProject.githubUrl && activeProject.githubUrl !== "#" ? "noopener noreferrer" : undefined} 
                      onClick={(e) => {
                        if (!activeProject.githubUrl || activeProject.githubUrl === "#") {
                          e.preventDefault();
                          alert("GitHub repository link is pending. Please check back later!");
                        }
                      }}
                      className="flex items-center gap-2 text-sm font-bold text-white px-6 py-3 rounded-full bg-cards border border-glass-border hover:bg-white/10 transition-colors uppercase tracking-wider"
                    >
                      GitHub <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-12">
                    <section>
                      <h4 className="text-accent font-mono text-sm uppercase tracking-widest mb-4">The Problem</h4>
                      <p className="text-white leading-relaxed">{activeProject.caseStudy.problem}</p>
                    </section>
                    
                    <section>
                      <h4 className="text-accent font-mono text-sm uppercase tracking-widest mb-4">Architecture & Tech</h4>
                      <p className="text-text-secondary leading-relaxed mb-6">{activeProject.caseStudy.architecture}</p>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.tech.map(t => (
                          <span key={t} className="text-sm px-4 py-2 rounded-lg bg-cards border border-glass-border text-white">
                            {t}
                          </span>
                        ))}
                      </div>
                    </section>
                  </div>

                  <div className="space-y-12">
                    <section>
                      <h4 className="text-accent font-mono text-sm uppercase tracking-widest mb-4">The Solution</h4>
                      <p className="text-white leading-relaxed">{activeProject.caseStudy.solution}</p>
                    </section>
                    
                    <section>
                      <h4 className="text-accent font-mono text-sm uppercase tracking-widest mb-4">Challenges & Results</h4>
                      <p className="text-text-secondary leading-relaxed mb-4">
                        <strong className="text-white">Challenge:</strong> {activeProject.caseStudy.challenges}
                      </p>
                      <div className="p-6 rounded-2xl bg-accent/10 border border-accent/20">
                        <strong className="block text-accent mb-2 font-heading">Key Result:</strong>
                        <p className="text-white">{activeProject.caseStudy.results}</p>
                      </div>
                    </section>
                  </div>
                </div>
                
                {/* Placeholder for Lessons Learned & Future Improvements */}
                <div className="mt-12 pt-12 border-t border-glass-border">
                  <p className="text-text-muted text-center italic">
                    Full architectural diagrams and codebase deep-dives available upon request.
                  </p>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
