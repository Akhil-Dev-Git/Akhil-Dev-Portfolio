import { motion } from "framer-motion";
import { Plane, MapPin, ShieldAlert, Bot, Network, Gem, Sparkles } from "lucide-react";

export default function ProjectVisual({ id }: { id: string }) {
  switch (id) {
    case 'trip-planner':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Plane className="w-24 h-24 text-gray-800 opacity-90 drop-shadow-[0_0_15px_rgba(0,0,0,0.2)]" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 left-1/4"
          >
            <MapPin className="w-12 h-12 text-blue-300 opacity-80" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/4 right-1/4"
          >
            <MapPin className="w-16 h-16 text-cyan-300 opacity-80" />
          </motion.div>
        </div>
      );
    case 'threat-detection':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <ShieldAlert className="w-28 h-28 text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-64 h-64 rounded-full border-2 border-red-500/20 border-t-red-500/80 border-b-orange-500/80" />
          </motion.div>
          <motion.div
            animate={{ scale: [0.8, 1.5, 0.8], opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-48 h-48 rounded-full border border-orange-500/50" />
          </motion.div>
        </div>
      );
    case 'futura-ai':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Bot className="w-32 h-32 text-purple-600 drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]" />
          </motion.div>
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-72 h-72 rounded-full border border-purple-500/20 relative">
              <Network className="w-10 h-10 text-pink-400 absolute -top-5 left-1/2 -translate-x-1/2 drop-shadow-[0_0_10px_rgba(244,114,182,0.8)]" />
              <Network className="w-10 h-10 text-purple-400 absolute -bottom-5 left-1/2 -translate-x-1/2 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
            </div>
          </motion.div>
        </div>
      );
    case 'ad-jewels':
      return (
        <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: 1000 }}>
          <motion.div
            animate={{ y: [0, -20, 0], rotateY: [0, 180, 360] }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 8, repeat: Infinity, ease: "linear" }
            }}
            className="relative z-10"
          >
            <Gem className="w-32 h-32 text-amber-500 drop-shadow-[0_0_30px_rgba(251,191,36,0.4)]" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/4 right-1/3"
          >
            <Sparkles className="w-10 h-10 text-yellow-200" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-1/3 left-1/4"
          >
            <Sparkles className="w-12 h-12 text-amber-400" />
          </motion.div>
        </div>
      );
    default:
      return null;
  }
}
