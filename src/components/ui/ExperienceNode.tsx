import { motion } from "framer-motion";

export interface ExperienceItem {
  year: string;
  title: string;
  desc: string;
}

interface ExperienceNodeProps {
  item: ExperienceItem;
  index: number;
}

export default function ExperienceNode({ item, index }: ExperienceNodeProps) {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Timeline Dot */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
        className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-accent-blue shadow-[0_0_20px_rgba(59,130,246,0.8)] z-10 mt-1.5 md:mt-0 translate-x-[-7px] md:translate-x-[-8px]" 
      />

      {/* Content Box */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`ml-10 md:ml-0 w-[calc(100%-2.5rem)] md:w-[calc(50%-3rem)] ${isEven ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}
      >
        {/* Glowing border card */}
        <div className="relative group rounded-2xl p-[1px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/30 via-accent-purple/30 to-accent-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative p-8 rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-200 shadow-sm group-hover:border-gray-300 group-hover:shadow-md transition-all duration-500 z-10 overflow-hidden">
            
            {/* Hover Spotlight */}
            <div className="absolute -inset-20 bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 blur-[50px] transition-opacity duration-1000 -z-10" />

            <div className="overflow-hidden mb-4 inline-block">
              <motion.span 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-block px-3 py-1 text-xs font-mono font-bold text-accent-blue bg-accent-blue/10 rounded-full border border-accent-blue/20"
              >
                {item.year}
              </motion.span>
            </div>
            
            <div className="overflow-hidden mb-2">
              <motion.h3 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                className="text-xl md:text-2xl font-bold font-heading text-gray-900"
              >
                {item.title}
              </motion.h3>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-600 text-sm leading-relaxed"
            >
              {item.desc}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
