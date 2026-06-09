import React from "react";
import { motion } from "motion/react";
import { 
  Code, 
  Search, 
  Cpu, 
  Database, 
  Layers, 
  LineChart, 
  BarChart, 
  ShieldCheck, 
  Globe
} from "lucide-react";

const toolCategories = [
  {
    name: "Web Engineering Stack",
    description: "High-level performance framework protocols",
    tools: [
      { name: "Next.js", level: "Enterprise", category: "Framework" },
      { name: "React 19", level: "Advanced", category: "UI Core" },
      { name: "Tailwind CSS", level: "Expert", category: "Styling" },
      { name: "Drizzle ORM", level: "Advanced", category: "Database" },
      { name: "TypeScript", level: "Robust", category: "Language" }
    ],
    icon: Code
  },
  {
    name: "SEO Retrieval Platforms",
    description: "Deep crawling, tracking & intelligence software",
    tools: [
      { name: "Ahrefs", level: "Expert", category: "Competitor Intel" },
      { name: "SEMrush", level: "Strategy", category: "Keyword Matrix" },
      { name: "Screaming Frog", level: "Surgical", category: "Technical Audit" },
      { name: "Search Console", level: "Sustained", category: "Indexing" },
      { name: "Google Analytics 4", level: "Telemetry", category: "Behavioral Data" }
    ],
    icon: Search
  },
  {
    name: "Performance & Tracking",
    description: "Conversion attribution and payload optimization",
    tools: [
      { name: "Meta Conversions API (CAPI)", level: "Server-Side", category: "Attribution" },
      { name: "Google Tag Manager", level: "Advanced", category: "Tag Control" },
      { name: "Meta Pixel", level: "Pixel Perfect", category: "Behavioral Track" },
      { name: "Clarity/Hotjar", level: "Qualitative", category: "Heatmapping" },
      { name: "Vercel Analytics", level: "Zero Latency", category: "Real-time Metrics" }
    ],
    icon: LineChart
  }
];

export default function ToolsTechnologies() {
  return (
    <section id="tools-technologies" className="py-24 px-6 md:py-32 md:px-8 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-[1.5px] w-8 bg-neon-purple" />
              <p className="text-neon-purple text-[10px] font-bold uppercase tracking-[0.5em]">The Infrastructure</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight text-white leading-tight">
              Tools & <span className="text-neon-purple italic font-serif purple-text-glow">Technologies.</span>
            </h2>
            <p className="text-white/40 text-base md:text-lg font-light leading-relaxed max-w-xl">
              We deploy the most advanced, speed-optimized stack to ensure absolute crawling supremacy and high-attribution performance marketing.
            </p>
          </div>
          
          <div className="flex items-center gap-3 bg-white/5 px-6 py-4 rounded-full border border-white/10 shrink-0">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
            <p className="text-white/70 text-[10px] uppercase font-bold tracking-widest font-mono">Modern Stack Compliant (2026)</p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.7 }}
                className="bg-dark-charcoal/50 border border-white/5 p-10 rounded-[2.5rem] relative overflow-hidden group hover:border-neon-purple/20 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(106,13,173,0.05)]"
              >
                {/* Micro Ambient Glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-1000 bg-neon-purple/30" />
                
                <div className="space-y-8 relative z-10 h-full flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-neon-purple/10 border border-neon-purple/20 rounded-xl flex items-center justify-center text-neon-purple">
                      <Icon size={24} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-white text-2xl font-display uppercase tracking-tight">{category.name}</h3>
                      <p className="text-white/40 text-xs font-light leading-relaxed">{category.description}</p>
                    </div>
                  </div>

                  {/* Tools List */}
                  <div className="space-y-4 pt-8 border-t border-white/5">
                    {category.tools.map((tool, tIdx) => (
                      <div 
                        key={tIdx} 
                        className="flex items-center justify-between group/item p-2 rounded-xl hover:bg-white/[0.02] transition-colors"
                      >
                        <div className="space-y-1">
                          <p className="text-white font-medium text-sm transition-colors group-hover/item:text-neon-purple">{tool.name}</p>
                          <p className="text-white/20 text-[8px] uppercase tracking-widest font-mono">{tool.category}</p>
                        </div>
                        <span className="text-[10px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-white/50 font-mono text-center shrink-0">
                          {tool.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
