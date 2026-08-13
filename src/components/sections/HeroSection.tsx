"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Particles from "../3d/Particles";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";
import { useState, useEffect, useRef } from "react";
import { FileText, ArrowRight, Mail } from "lucide-react";
import { LinkedinIcon as Linkedin, UpworkIcon as Upwork } from "../ui/Icons";
import { TextReveal } from "../ui/TextReveal";
import Image from "next/image";

const TITLES = [
  "AI Engineer",
  "Full Stack Developer",
  "AI Product Builder",
  "AI Automation Engineer"
];

const leftVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -150, 
    transition: { duration: 0.5, ease: [0.32, 0, 0.67, 0] } 
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
};

const rightVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 150, 
    scale: 0.95, 
    transition: { duration: 0.5, ease: [0.32, 0, 0.67, 0] } 
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }
  }
};


export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects based on scroll
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isPhotoTouched, setIsPhotoTouched] = useState(false);

  useEffect(() => {
    setIsMobile(typeof window !== "undefined" && (window.innerWidth <= 768 || window.matchMedia("(pointer: coarse)").matches));
    setMounted(true);
    
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center bg-transparent">
      {/* 3D Background with Parallax */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 opacity-40">
        {!isMobile && mounted && (
          <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <ambientLight intensity={0.2} />
            {/* Orange rim light effect */}
            <pointLight position={[10, 10, 10]} color="#FF7A00" intensity={2} />
            <pointLight position={[-10, -10, -10]} color="#FFA347" intensity={1} />
            <Particles count={400} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
          </Canvas>
        )}
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 pt-24 pb-12">
        
        {/* Left Column: Text & Buttons */}
        <motion.div 
          style={mounted && isMobile ? {} : { y: yText, opacity }}
          className="flex flex-col items-start text-left order-2 lg:order-1"
        >
          
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "0px" }}
            variants={leftVariants}
            className="mb-2"
          >
            <span className="text-text-muted font-mono tracking-wider text-sm md:text-base uppercase">
              Hello, I&apos;m
            </span>
          </motion.div>

          <div className="mb-4 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-heading text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <TextReveal text="P AKHIL DEV" delay={0.2} stagger={0.05} />
          </div>

          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "0px" }}
            variants={leftVariants}
            className="h-8 md:h-10 mb-6"
          >
            <span className="text-xl md:text-3xl text-accent font-light font-heading tracking-wide">
              {TITLES[titleIndex]}
            </span>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "0px" }}
            variants={leftVariants}
            className="mb-8 pl-4 border-l-2 border-accent/50"
          >
            <p className="text-lg md:text-2xl text-white font-medium italic font-heading">
              &quot;Architecting Intelligent Digital Experiences.&quot;
            </p>
          </motion.div>

          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "0px" }}
            variants={leftVariants}
            className="text-base md:text-lg text-text-secondary mb-10 max-w-xl font-light leading-relaxed"
          >
            <p>
              Engineering intelligent software that combines AI, scalable systems, automation, and premium digital experiences.
            </p>
          </motion.div>

          <motion.div
            custom={6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "0px" }}
            variants={leftVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton>
              <a 
                href="mailto:akhildev6281@gmail.com" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "mailto:akhildev6281@gmail.com";
                }}
                className="flex items-center gap-2 px-8 py-4 text-sm font-bold text-white transition-all rounded-full bg-accent hover:bg-accent-secondary shadow-[0_0_20px_rgba(255,122,0,0.3)] hover:shadow-[0_0_40px_rgba(255,122,0,0.5)] uppercase tracking-wider"
              >
                <Mail className="w-4 h-4" />
                Mail Me
              </a>
            </MagneticButton>
            
            <MagneticButton>
              <a href="#projects" className="flex items-center gap-2 px-8 py-4 text-sm font-bold text-white transition-all rounded-full bg-glass border border-glass-border hover:bg-white/10 uppercase tracking-wider">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div
            custom={7}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "0px" }}
            variants={leftVariants}
            className="flex items-center gap-4 mt-8"
          >
            <MagneticButton>
              <a href="/resume.pdf" target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full bg-glass border border-glass-border text-text-secondary hover:text-white hover:border-white/20 transition-all">
                <FileText className="w-5 h-5" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a href="https://www.linkedin.com/in/akhil-dev-631a972a3/" target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full bg-glass border border-glass-border text-text-secondary hover:text-white hover:border-white/20 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="https://www.upwork.com/freelancers/~017c60e5c9a72ab018" target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full bg-glass border border-glass-border text-text-secondary hover:text-white hover:border-white/20 transition-all">
                <Upwork className="w-5 h-5" />
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Right Column: Portrait */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "0px" }}
          variants={rightVariants}
          className="flex justify-center items-center h-full order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none relative"
        >
          {/* Neural Glow behind portrait */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(255,122,0,0.15)_0%,transparent_70%)] blur-2xl z-0 pointer-events-none" />
          
          <motion.div
            onTouchStart={() => setIsPhotoTouched(true)}
            onTouchEnd={() => setIsPhotoTouched(false)}
            onTouchCancel={() => setIsPhotoTouched(false)}
            className={`relative z-10 w-[85%] lg:w-[80%] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-glass-border transition-all duration-700 group ${isPhotoTouched ? 'grayscale-0' : 'grayscale hover:grayscale-0'}`}
            animate={{ y: mounted && isMobile ? 0 : [0, -15, 0], rotate: 0, scale: 1 }}
            whileTap={{ 
              scale: 0.95, 
              rotate: -2, 
              boxShadow: "0px 0px 80px rgba(255, 122, 0, 0.8)",
              borderColor: "rgba(255, 122, 0, 0.5)",
              transition: { duration: 0.1 }
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Fallback styling in case image doesn't exist yet */}
            <div className="absolute inset-0 bg-surface flex items-center justify-center">
              {/* Removed fallback text to prevent it showing through the image */}
            </div>
            
            <Image 
              src="/portrait.jpg" 
              alt="Akhil Dev Portrait" 
              fill
              className={`absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-700 pointer-events-none select-none [-webkit-user-drag:none] ${isPhotoTouched ? 'mix-blend-normal' : 'mix-blend-luminosity group-hover:mix-blend-normal'}`} 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            
            {/* Orange Rim Light Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/40 via-transparent to-transparent opacity-60 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none" />
            
          </motion.div>
        </motion.div>

      </div>
      
    </section>
  );
}
