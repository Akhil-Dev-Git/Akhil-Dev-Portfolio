"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    if (progress < 100) {
      const timer = setTimeout(() => {
        // Smoothly increment progress
        setProgress(prev => Math.min(prev + Math.floor(Math.random() * 12) + 3, 100));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setIsComplete(true);
        document.body.style.overflow = "auto";
        onComplete();
      }, 600);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-md flex items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
            className="flex flex-col items-center justify-center p-10 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl min-w-[300px]"
          >
            {/* Elegant Spinner with AD Logo */}
            <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
              {/* Background faint track */}
              <svg className="absolute inset-0 w-full h-full text-white/10" viewBox="0 0 50 50">
                <circle cx="25" cy="25" r="23" fill="none" strokeWidth="1" stroke="currentColor" />
              </svg>
              {/* Spinning track */}
              <motion.svg 
                className="absolute inset-0 w-full h-full text-white/80"
                viewBox="0 0 50 50"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              >
                <circle 
                  cx="25" 
                  cy="25" 
                  r="23" 
                  fill="none" 
                  strokeWidth="1.5" 
                  stroke="currentColor" 
                  strokeDasharray="40 120" 
                  strokeLinecap="round" 
                />
              </motion.svg>
              {/* Center Typography Logo */}
              <span className="font-heading font-light text-2xl text-white tracking-widest pl-1">
                AD
              </span>
            </div>

            {/* Typography */}
            <h2 className="text-lg font-medium text-white/90 tracking-widest uppercase mb-2 font-sans">
              Portfolio
            </h2>
            <p className="text-xs text-white/50 tracking-wider mb-8 font-sans">
              Preparing Experience...
            </p>

            {/* Micro Progress Bar */}
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-white rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            
            <div className="mt-3 text-[10px] text-white/40 font-mono tracking-widest">
              {progress}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
