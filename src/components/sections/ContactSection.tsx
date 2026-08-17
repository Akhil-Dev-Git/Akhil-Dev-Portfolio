"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { Send, MapPin, Globe, CheckCircle2, Clock } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

// Neural Core Component - Represents AI & Tech focus
function NeuralCore() {
  const coreRef = useRef<THREE.Group>(null);
  const ringsRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleCount = 200;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    
    if (coreRef.current) {
      coreRef.current.rotation.x = time * 0.15;
      coreRef.current.rotation.y = time * 0.2;
    }
    
    if (ringsRef.current) {
      ringsRef.current.rotation.x = Math.sin(time * 0.2) * 0.3;
      ringsRef.current.rotation.y = time * 0.1;
    }
    
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05;
      particlesRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    }
  });

  return (
    <group>
      {/* Central Neural Node (Icosahedron) */}
      <group ref={coreRef}>
        <mesh>
          <icosahedronGeometry args={[1.4, 0]} />
          <meshBasicMaterial color="#050505" />
        </mesh>
        <mesh scale={1.05}>
          <icosahedronGeometry args={[1.4, 1]} />
          <meshBasicMaterial color="#FF7A00" wireframe transparent opacity={0.15} />
        </mesh>
        <mesh scale={1.15}>
          <icosahedronGeometry args={[1.4, 0]} />
          <meshBasicMaterial color="#FF7A00" wireframe transparent opacity={0.5} />
        </mesh>
      </group>
      
      {/* Orbital Data Rings */}
      <group ref={ringsRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.2, 0.01, 16, 100]} />
          <meshBasicMaterial color="#FF7A00" transparent opacity={0.4} />
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[2.6, 0.01, 16, 100]} />
          <meshBasicMaterial color="#FF7A00" transparent opacity={0.2} />
        </mesh>
        <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[3.0, 0.01, 16, 100]} />
          <meshBasicMaterial color="#FF7A00" transparent opacity={0.1} />
        </mesh>
      </group>

      {/* Floating Data Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={positions.length / 3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#FF7A00" transparent opacity={0.6} sizeAttenuation />
      </points>
    </group>
  );
}

export default function ContactSection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata"
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Construct the email body
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    
    // Open default mail client
    window.location.href = `mailto:akhildev6281@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${body}`;
    
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="w-full py-32 bg-transparent relative overflow-hidden border-t border-glass-border min-h-screen flex flex-col justify-center">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Contact Info & Neural Core */}
        <div className="flex flex-col">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "0px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold w-fit mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available For Opportunities
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "0px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-heading text-white mb-6"
          >
            Let&apos;s Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
              Something Extraordinary.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "0px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            className="text-text-secondary text-lg mb-12 max-w-md"
          >
            Whether you have a specific AI product in mind or need engineering leadership for an ambitious idea.
          </motion.p>

          <div className="flex flex-wrap items-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-white font-medium">India</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-accent" />
              <span className="text-white font-medium">Remote Collaboration</span>
            </div>
          </div>

          {/* 3D Neural Core Container */}
          <motion.div 
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, margin: "0px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
            className="relative w-full h-[300px] rounded-3xl overflow-hidden bg-surface border border-glass-border"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,122,0,0.1)_0%,transparent_70%)] pointer-events-none" />
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <NeuralCore />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </motion.div>
        </div>

        {/* Right: Luxury Form */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "0px" }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col gap-6"
        >
          <div className="p-8 md:p-12 rounded-3xl bg-cards border border-glass-border shadow-2xl relative overflow-hidden group">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-accent/10 transition-colors duration-700" />
            
            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-text-muted uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    className="w-full bg-surface border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-text-muted/50"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-text-muted uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full bg-surface border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-text-muted/50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-bold text-text-muted uppercase tracking-wider">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-surface border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-text-muted/50"
                  placeholder="AI Integration Project"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-text-muted uppercase tracking-wider">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-surface border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-text-muted/50 resize-none"
                  placeholder="Tell me about your vision..."
                />
              </div>

              <MagneticButton>
                <button 
                  type="submit"
                  disabled={formState !== 'idle'}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-accent text-white font-bold tracking-wide uppercase hover:bg-accent-secondary transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {formState === 'idle' && (
                    <>Send Transmission <Send className="w-4 h-4" /></>
                  )}
                  {formState === 'submitting' && (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  )}
                  {formState === 'success' && (
                    <>Message Received <CheckCircle2 className="w-4 h-4" /></>
                  )}
                </button>
              </MagneticButton>
            </form>
          </div>

          {/* Separate Time Display Widget */}
          <div className="flex items-center justify-center gap-4 p-4 rounded-2xl bg-cards/50 border border-glass-border w-full">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-text-muted tracking-widest uppercase">Local Time (IST)</span>
              {time ? (
                <span className="text-lg font-bold font-mono text-white tracking-wider">{formatTime(time)}</span>
              ) : (
                <div className="h-6 w-24 bg-white/5 animate-pulse rounded mt-1" />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
