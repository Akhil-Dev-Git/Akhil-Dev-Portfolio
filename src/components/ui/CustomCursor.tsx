"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(typeof window !== "undefined" && (window.innerWidth <= 768 || window.matchMedia("(pointer: coarse)").matches));
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent | TouchEvent) => {
      if (isMobile) return;
      let clientX, clientY;
      
      if ('touches' in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      
      cursorX.set(clientX);
      cursorY.set(clientY);
    };

    const handleMouseOver = (e: MouseEvent | TouchEvent) => {
      if (isMobile) return;
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("magnetic")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    if (!isMobile) {
      window.addEventListener("mousemove", moveCursor);
      window.addEventListener("mouseover", handleMouseOver);
      window.addEventListener("touchmove", moveCursor);
      window.addEventListener("touchstart", moveCursor);
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener("mousemove", moveCursor);
        window.removeEventListener("mouseover", handleMouseOver);
        window.removeEventListener("touchmove", moveCursor);
        window.removeEventListener("touchstart", moveCursor);
      }
    };
  }, [cursorX, cursorY, isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 -ml-3 -mt-3 pointer-events-none z-[99999] flex items-center justify-center"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      animate={{
        scale: isHovering ? 1.5 : 1,
        opacity: isHovering ? 1 : 0.9,
      }}
      transition={{ duration: 0.15 }}
    >
      <span className="font-heading font-black text-accent text-sm tracking-tighter drop-shadow-[0_0_8px_rgba(255,122,0,0.8)]">
        AD
      </span>
    </motion.div>
  );
}
