"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, GitCommit, GitPullRequest } from "lucide-react";
import { GithubIcon as Github } from "../ui/Icons";

// In a real application, you'd fetch this from the GitHub API using a server component or API route.
// For the portfolio UI, we'll simulate the data fetching for demonstration of the design.
const GITHUB_USERNAME = "akhildev";

interface GithubData {
  repos: number;
  followers: number;
  following: number;
  stars: number;
  contributions: number;
  languages: { name: string; percentage: number; color: string }[];
  latestCommits: { repo: string; message: string; time: string }[];
}

export default function GithubSection() {
  const [data, setData] = useState<GithubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call
    const fetchGithubData = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setData({
        repos: 42,
        followers: 1250,
        following: 35,
        stars: 340,
        contributions: 1458,
        languages: [
          { name: "TypeScript", percentage: 45, color: "#3178c6" },
          { name: "Python", percentage: 35, color: "#3572A5" },
          { name: "Rust", percentage: 10, color: "#dea584" },
          { name: "Other", percentage: 10, color: "#ededed" },
        ],
        latestCommits: [
          { repo: "autonomous-agent-core", message: "feat: implement memory retrieval pipeline", time: "2 hours ago" },
          { repo: "portfolio-v4", message: "fix: WebGL rendering glitch on mobile", time: "5 hours ago" },
          { repo: "vision-model-trainer", message: "chore: update PyTorch dependencies", time: "1 day ago" },
        ]
      });
      setLoading(false);
    };

    fetchGithubData();
  }, []);

  return (
    <section id="github" className="w-full py-32 bg-transparent relative overflow-hidden border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-6 flex items-center justify-center gap-4 text-white"
          >
            <Github className="w-10 h-10 md:w-12 md:h-12 text-white" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
              Open Source
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto"
          >
            Live statistics and recent activity pulled directly from GitHub API.
          </motion.p>
        </div>

        {loading || !data ? (
          <div className="w-full h-96 flex flex-col items-center justify-center">
            <div className="w-12 h-12 border-4 border-glass-border border-t-accent rounded-full animate-spin mb-4" />
            <p className="text-text-muted font-mono animate-pulse">Fetching neural data...</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {/* Top Stats Grid */}
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Repositories", value: data.repos, icon: <Github /> },
                { label: "Total Stars", value: data.stars, icon: <Star className="text-yellow-500" /> },
                { label: "Followers", value: data.followers, icon: <GitFork className="text-blue-400" /> },
                { label: "Contributions (1Yr)", value: data.contributions, icon: <GitCommit className="text-green-500" /> },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-cards border border-glass-border hover:border-accent/30 transition-all group flex flex-col items-center justify-center text-center">
                  <div className="mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold font-mono text-white mb-1 group-hover:text-accent transition-colors">
                    {stat.value}
                  </h3>
                  <p className="text-xs text-text-muted uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Language Breakdown */}
            <div className="lg:col-span-1 p-8 rounded-3xl bg-surface border border-glass-border">
              <h3 className="text-xl font-bold font-heading text-white mb-6">Top Languages</h3>
              
              <div className="w-full h-3 flex rounded-full overflow-hidden mb-6">
                {data.languages.map((lang, i) => (
                  <div 
                    key={i} 
                    style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }} 
                    className="h-full"
                    title={`${lang.name} ${lang.percentage}%`}
                  />
                ))}
              </div>
              
              <div className="space-y-4">
                {data.languages.map((lang, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                      <span className="text-text-secondary">{lang.name}</span>
                    </div>
                    <span className="text-white font-mono">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest Commits */}
            <div className="lg:col-span-2 p-8 rounded-3xl bg-surface border border-glass-border">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
                  <GitCommit className="w-5 h-5 text-accent" />
                  Latest Activity
                </h3>
                <a href={`https://github/${GITHUB_USERNAME}`} target="_blank" className="text-sm text-accent hover:text-accent-secondary transition-colors">
                  View Profile →
                </a>
              </div>
              
              <div className="space-y-6">
                {data.latestCommits.map((commit, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-glass-border group-hover:bg-accent transition-colors z-10" />
                      {i !== data.latestCommits.length - 1 && (
                        <div className="w-px h-full bg-glass-border -mt-1 group-hover:bg-accent/30 transition-colors" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h4 className="text-accent-secondary font-mono text-sm mb-1">{commit.repo}</h4>
                      <p className="text-white font-medium mb-1">{commit.message}</p>
                      <p className="text-xs text-text-muted">{commit.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        )}
      </div>
    </section>
  );
}
