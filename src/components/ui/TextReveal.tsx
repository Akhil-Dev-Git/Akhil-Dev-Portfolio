"use client";

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
  const characters = text.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
      filter: "blur(8px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
  };

  return (
    <Component className={cn("inline-flex overflow-hidden", className)}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap whitespace-pre"
      >
        {characters.map((char, index) => (
          <motion.span
            variants={child}
            key={index}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}
