"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import MagneticButton from "../ui/MagneticButton";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-4 left-0 right-0 z-50 flex justify-center w-full px-4 transition-all duration-300 ${
        isScrolled ? "scale-95" : "scale-100"
      }`}
    >
      <div
        className={`flex items-center justify-between w-full max-w-5xl px-6 py-3 mx-auto border rounded-full backdrop-blur-none md:backdrop-blur-md transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 md:bg-glass border-glass-border shadow-[0_4px_30px_rgba(0,0,0,0.3)] md:shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <Link href="#home" className="flex items-center group relative">
          <div className="absolute inset-0 bg-accent/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-glass-border bg-cards/90 md:bg-cards/50 backdrop-blur-none md:backdrop-blur-md group-hover:border-accent/50 transition-all">
            <span className="text-lg font-bold font-heading tracking-tighter">
              <span className="text-white">A</span>
              <span className="text-accent">D</span>
            </span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <MagneticButton>
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm text-text-secondary transition-colors rounded-full hover:text-white hover:bg-glass"
                >
                  {link.name}
                </Link>
              </MagneticButton>
            </li>
          ))}
        </ul>

        <MagneticButton>
          <a
            href="mailto:akhildev6281@gmail.com"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "mailto:akhildev6281@gmail.com";
            }}
            className="px-5 py-2 text-sm font-bold text-white transition-all rounded-full bg-accent border border-accent hover:bg-accent-secondary hover:shadow-[0_0_20px_rgba(255,122,0,0.4)] tracking-wide uppercase"
          >
            Mail Me
          </a>
        </MagneticButton>
      </div>
    </motion.nav>
  );
}
