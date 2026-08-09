"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/utils/cn";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  as?: React.ElementType;
}

export function TextReveal({
  text,
  className,
  delay = 0,
  duration = 0.8,
  stagger = 0.03,
  as = "span",
}: TextRevealProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = as as any;
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay * i },
    }),
  };

  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    setIsMobile(typeof window !== "undefined" && (window.innerWidth <= 768 || window.matchMedia("(pointer: coarse)").matches));
  }, []);

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: isMobile ? "none" : "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
    hidden: {
      opacity: 0,
      y: isMobile ? 20 : 40,
      scale: isMobile ? 1 : 0.9,
      filter: isMobile ? "none" : "blur(8px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
  };

  return (
    <Component className={cn("inline-block overflow-hidden", className)}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px" }}
        className="inline-block"
      >
        {text.split(" ").map((word, wordIndex, wordsArray) => (
          <React.Fragment key={wordIndex}>
            <span className="inline-block whitespace-nowrap">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  variants={child}
                  key={charIndex}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            {wordIndex !== wordsArray.length - 1 && " "}
          </React.Fragment>
        ))}
      </motion.span>
    </Component>
  );
}
