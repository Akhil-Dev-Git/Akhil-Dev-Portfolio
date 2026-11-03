"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LinkedinIcon as Linkedin } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-glass-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />
      
      <div className="py-12 max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Logo, Name & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-glass border border-glass-border shadow-[0_0_15px_rgba(255,122,0,0.2)]">
              <span className="font-heading font-black text-accent text-lg tracking-tighter drop-shadow-[0_0_8px_rgba(255,122,0,0.8)]">
                AD
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-heading text-white tracking-wider leading-tight">
                P AKHIL DEV
              </span>
              <span className="sr-only">PAKHILDEV</span>
            </div>
            <a
              href="https://www.linkedin.com/in/adp-groups/"
              target="_blank"
              rel="noopener noreferrer me"
              title="P Akhil Dev on LinkedIn"
              className="ml-2 flex items-center justify-center w-8 h-8 rounded-full bg-glass border border-glass-border text-text-secondary hover:text-white hover:border-accent/40 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </motion.div>
          <p className="text-xs text-text-muted font-light">
            © {new Date().getFullYear()} P Akhil Dev. All rights reserved.
          </p>
        </div>

        {/* Center: Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 text-sm font-medium text-text-secondary"
        >
          <Link href="#home" className="hover:text-white transition-colors">Home</Link>
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </motion.div>

        {/* Right: Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center"
        >
          <span className="text-sm md:text-base font-medium font-heading text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary italic">
            Architecting Intelligent Digital Experiences.
          </span>
        </motion.div>

      </div>
    </footer>
  );
}
