"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, User, Code, Briefcase, FileText, Mail, Command, X } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./Icons";
import { useRouter } from "next/navigation";

interface CommandItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  action: () => void;
  section: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Handle keyboard shortcut (CMD+K / CTRL+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setSearch("");
    }
  }, [isOpen]);

  const closeAndNavigate = (id: string) => {
    setIsOpen(false);
    
    // For section navigation
    if (id.startsWith("#")) {
      const element = document.getElementById(id.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/${id}`);
      }
    }
  };

  const commands: CommandItem[] = [
    { id: "#home", name: "Home", icon: <Home className="w-4 h-4" />, action: () => closeAndNavigate("#home"), section: "Navigation" },
    { id: "#about", name: "About", icon: <User className="w-4 h-4" />, action: () => closeAndNavigate("#about"), section: "Navigation" },
    { id: "#skills", name: "Skills", icon: <Code className="w-4 h-4" />, action: () => closeAndNavigate("#skills"), section: "Navigation" },
    { id: "#projects", name: "Projects", icon: <Briefcase className="w-4 h-4" />, action: () => closeAndNavigate("#projects"), section: "Navigation" },
    { id: "#contact", name: "Contact", icon: <Mail className="w-4 h-4" />, action: () => closeAndNavigate("#contact"), section: "Navigation" },
    
    { id: "resume", name: "Download Resume", icon: <FileText className="w-4 h-4" />, action: () => { window.open("/resume.pdf", "_blank"); setIsOpen(false); }, section: "Actions" },
    { id: "github", name: "GitHub", icon: <Github className="w-4 h-4" />, action: () => { window.open("https://github.com/", "_blank"); setIsOpen(false); }, section: "Social" },
    { id: "linkedin", name: "LinkedIn", icon: <Linkedin className="w-4 h-4" />, action: () => { window.open("https://linkedin.com/", "_blank"); setIsOpen(false); }, section: "Social" },
  ];

  const filteredCommands = commands.filter((command) =>
    command.name.toLowerCase().includes(search.toLowerCase())
  );

  const sections = Array.from(new Set(filteredCommands.map((c) => c.section)));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-0 z-[101] flex items-start justify-center pt-[10vh] px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-2xl bg-cards border border-glass-border rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Header */}
              <div className="flex items-center px-4 py-4 border-b border-glass-border/50">
                <Search className="w-5 h-5 text-text-muted mr-3" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search portfolio, jump to section..."
                  className="flex-1 bg-transparent border-none outline-none text-text-primary placeholder:text-text-muted font-sans"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md hover:bg-glass text-text-muted hover:text-text-primary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Results Area */}
              <div className="max-h-[60vh] overflow-y-auto p-2 no-scrollbar">
                {filteredCommands.length === 0 ? (
                  <div className="py-12 text-center text-text-muted">
                    <p>No results found for "{search}"</p>
                  </div>
                ) : (
                  sections.map((section) => (
                    <div key={section} className="mb-4 last:mb-0">
                      <div className="px-3 py-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
                        {section}
                      </div>
                      <div className="space-y-1">
                        {filteredCommands
                          .filter((c) => c.section === section)
                          .map((command) => (
                            <button
                              key={command.id}
                              onClick={command.action}
                              className="w-full flex items-center px-3 py-3 rounded-xl hover:bg-glass hover:text-accent group transition-all text-left"
                            >
                              <div className="mr-3 text-text-muted group-hover:text-accent transition-colors">
                                {command.icon}
                              </div>
                              <span className="text-text-primary group-hover:text-white font-medium transition-colors">
                                {command.name}
                              </span>
                            </button>
                          ))}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-3 border-t border-glass-border/50 flex items-center justify-between text-xs text-text-muted">
                <div className="flex items-center">
                  <span>Press</span>
                  <kbd className="mx-1 px-1.5 py-0.5 rounded-md bg-surface border border-glass-border font-mono text-[10px]">ESC</kbd>
                  <span>to close</span>
                </div>
                <div className="flex items-center">
                  <span>Navigation by Akhil</span>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
