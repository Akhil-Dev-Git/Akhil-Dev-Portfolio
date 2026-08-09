"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Projects", value: 15, suffix: "+" },
  { label: "Technologies", value: 25, suffix: "+" },
  { label: "GitHub Repositories", value: 30, suffix: "+" },
  { label: "GitHub Contributions", value: 1200, suffix: "+" },
  { label: "Years Learning", value: 3, suffix: "+" },
  { label: "Current Streak", value: 15, suffix: " Days" },
];

function Counter({ from = 0, to, duration = 2, suffix = "" }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "0px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      let startTime: number;
      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / (duration * 1000), 1);
        
        // Easing out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        if (nodeRef.current) {
          nodeRef.current.innerText = Math.floor(easeProgress * (to - from) + from).toString() + suffix;
        }
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHasAnimated(true);
    }
  }, [inView, from, to, duration, suffix, hasAnimated]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="w-full py-24 bg-transparent border-t border-glass-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent-secondary/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-3xl md:text-4xl font-bold font-mono text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-accent-secondary transition-colors duration-300">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-text-muted uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
