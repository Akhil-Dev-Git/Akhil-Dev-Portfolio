"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C++", "Java", "SQL"]
  },
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js", "GSAP"]
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express", "FastAPI", "Flask", "GraphQL", "REST", "WebSockets", "gRPC", "Prisma"]
  },
  {
    title: "Artificial Intelligence",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "LangChain", "Hugging Face", "Computer Vision", "NLP", "LLMs", "OpenCV"]
  },
  {
    title: "Database Systems",
    skills: ["PostgreSQL", "MySQL", "Snowflake", "MongoDB", "Redis", "Pinecone", "Milvus", "Supabase"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "Kubernetes", "AWS", "GCP", "Vercel", "GitHub Actions", "CI/CD", "Nginx", "Linux"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-32 bg-transparent relative overflow-hidden border-t border-glass-border">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(255,122,0,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "0px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white"
          >
            Technical <span className="text-accent">Arsenal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "0px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            A comprehensive stack engineered for building intelligent, high-performance applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "0px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.05 }}
              className={`p-6 md:p-8 rounded-3xl bg-cards border border-glass-border hover:border-accent/30 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(255,122,0,0.1)] ${
                idx === skillCategories.length - 1 && skillCategories.length % 3 !== 0
                  ? (skillCategories.length % 3 === 2 ? 'md:col-span-2 lg:col-span-1' : 'md:col-span-2 lg:col-span-2')
                  : ''
              }`}
            >
              <h3 className="text-xl font-bold font-heading text-white mb-6 flex items-center group-hover:text-accent transition-colors">
                <span className="w-8 h-[2px] bg-accent/50 mr-4 group-hover:w-12 group-hover:bg-accent transition-all duration-300" />
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-surface border border-glass-border text-text-secondary group-hover:border-accent/20 hover:!bg-accent hover:!text-white hover:!border-accent transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
