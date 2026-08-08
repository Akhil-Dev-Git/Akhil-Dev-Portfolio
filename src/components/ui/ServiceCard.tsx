import { motion } from "framer-motion";

export interface Service {
  icon: any; // Type as needed based on lucide-react exports
  name: string;
  desc: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative p-8 rounded-3xl bg-white/80 border border-gray-200 shadow-sm hover:shadow-md hover:bg-white transition-all overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center mb-6 text-gray-900 group-hover:text-accent-blue group-hover:scale-110 transition-all duration-300">
          <Icon className="w-6 h-6" />
        </div>
        
        <h3 className="text-xl font-bold font-heading text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-purple transition-all">
          {service.name}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {service.desc}
        </p>
      </div>
    </motion.div>
  );
}
