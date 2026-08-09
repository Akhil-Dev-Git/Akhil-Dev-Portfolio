import { motion } from "framer-motion";
import { ExternalLink, Layers, Cpu } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import ProjectVisual from "./ProjectVisual";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  stack: string[];
  metrics: { [key: string]: string };
  links: { github: string; live: string };
  color: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className="relative group">
      {/* Cinematic Background Glow */}
      <div className={`absolute -inset-10 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-1000 rounded-[3rem] -z-10`} />
      
      <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
        
        {/* Visual Side */}
        <motion.div 
          initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-3/5 relative"
        >
          <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-xl relative group-hover:border-gray-300 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent flex items-center justify-center">
              <div className="w-full h-full relative p-4">
                <div className="w-full h-full rounded-xl border border-gray-200 bg-white overflow-hidden relative">
                   <motion.div 
                     animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                     transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                     className={`absolute inset-0 bg-gradient-to-br ${project.color}`} 
                   />
                   <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply" />
                   <ProjectVisual id={project.id} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-2/5 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-accent-blue" />
            <span className="text-accent-blue font-mono text-sm tracking-widest uppercase">{project.category}</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            {project.title}
          </h3>
          
          <p className="text-gray-600 mb-8 font-light leading-relaxed">
            {project.description}
          </p>

          <div className="grid grid-cols-2 gap-6 mb-10">
            <div>
              <h4 className="text-gray-900 text-sm font-semibold mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-gray-500" />
                Key Features
              </h4>
              <ul className="space-y-2">
                {project.features.map(f => (
                  <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent-blue/50" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 text-sm font-semibold mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-gray-500" />
                Tech Stack
              </h4>
              <ul className="space-y-2">
                {project.stack.map(s => (
                  <li key={s} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent-purple/50" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-auto">
            {project.links.live !== "#" && (
              <a 
                href={project.links.live} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.links.github !== "#" && (
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/5 border border-gray-200 text-gray-900 hover:bg-black/10 transition-colors"
              >
                <FiGithub className="w-4 h-4" />
                Source Code
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
