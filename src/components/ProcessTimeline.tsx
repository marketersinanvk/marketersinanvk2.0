import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Compass, 
  Settings, 
  Activity, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle,
  Eye,
  ShieldCheck,
  Zap
} from "lucide-react";

interface Step {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  outputs: string[];
  icon: any;
  metric: string;
}

const processSteps: Step[] = [
  {
    id: "audit",
    number: "01",
    title: "SEO & Tech Audit",
    headline: "Identify your current technical blocks and search opportunities.",
    description: "We perform a thorough SEO crawl, analyze competitor keywords, and review site loading performance. This exposes hidden search blockages and opportunities for better ranking.",
    outputs: [
      "Dynamic Keyword Gap Ledger",
      "Core Web Vitals & Hydration Audit",
      "Attribution & Pixel Diagnostics",
      "Local SEO Strategy Map"
    ],
    icon: Compass,
    metric: "In-Depth Audit"
  },
  {
    id: "architect",
    number: "02",
    title: "Strategy & Planning",
    headline: "Structure your website content and search marketing plans.",
    description: "We design optimized content structures, plan page architectures, and configure analytics tools to ensure you can measure and track your sales funnel accurately.",
    outputs: [
      "Custom Programmatic SEO Architecture",
      "Local Map Pack Strategy Plan",
      "Server-side CAPI Infrastructure Map",
      "High-converting Landing Page Wireframes"
    ],
    icon: Settings,
    metric: "Custom Roadmap"
  },
  {
    id: "deploy",
    number: "03",
    title: "Implementation",
    headline: "Fast web design and optimized content creation.",
    description: "We build high-speed pages, deploy customized web architectures, index search assets, and launch optimized social media campaigns to drive leads.",
    outputs: [
      "Headless Speed Optimised Deployments",
      "Programmatic Pages Indexed",
      "Active Social Campaigns",
      "Google Business Profile optimization"
    ],
    icon: Activity,
    metric: "Fast Launch"
  },
  {
    id: "scale",
    number: "04",
    title: "Growth & Optimization",
    headline: "Scale your reach while maintaining steady marketing efficiency.",
    description: "We monitor keyword performance closely, publish informative blog content, and refine social media targeting to steadily increase your organic traffic.",
    outputs: [
      "Weekly Keyword Position Audits",
      "Smart-bidding Performance Scaling",
      "Reconstructive Video Hook adjustments",
      "Comprehensive Traffic Reports"
    ],
    icon: TrendingUp,
    metric: "Sustained Growth"
  }
];

export default function ProcessTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="process-timeline" className="py-24 px-6 md:py-32 md:px-8 relative overflow-hidden bg-dark-charcoal/20 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-[1.5px] w-8 bg-neon-purple" />
            <p className="text-neon-purple text-[10px] font-bold uppercase tracking-[0.5em]">Our Development Pipeline</p>
          </div>
          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight text-white leading-tight">
            The Growth <span className="text-neon-purple italic font-serif purple-text-glow">Process.</span>
          </h2>
          <p className="text-white/40 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            A battle-tested 4-phase optimization workflow designed to elevate regional brands into market leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Timeline Process Nav - Left */}
          <div className="lg:col-span-5 space-y-4">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeIdx === idx;
              
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-6 md:p-8 rounded-[2rem] border transition-all duration-500 relative flex items-center justify-between group ${
                    isActive 
                      ? "bg-dark-charcoal border-neon-purple/30 shadow-[0_20px_40px_rgba(106,13,173,0.06)] scale-[1.01]" 
                      : "bg-transparent border-white/5 hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-base font-mono font-bold tracking-widest ${isActive ? "text-neon-purple" : "text-white/20"}`}>
                      {step.number}
                    </span>
                    <div className="space-y-1">
                      <h3 className={`text-lg md:text-xl font-display uppercase tracking-tight transition-colors duration-500 ${isActive ? "text-white" : "text-white/50 group-hover:text-white/80"}`}>
                        {step.title}
                      </h3>
                      <p className="text-[10px] text-white/35 font-mono uppercase tracking-widest">
                        {step.metric}
                      </p>
                    </div>
                  </div>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-500 ${
                    isActive ? "bg-neon-purple text-white shadow-[0_0_15px_rgba(106,13,173,0.3)]" : "bg-white/5 text-white/30"
                  }`}>
                    <Icon size={14} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Detail Display - Right */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-dark-charcoal border border-white/5 p-8 md:p-14 rounded-[3.5rem] relative overflow-hidden min-h-[480px] flex flex-col justify-between shadow-2xl"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />
                
                <div className="space-y-10 relative z-10">
                  {/* Top Row */}
                  <div className="flex justify-between items-center pb-6 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 bg-neon-purple rounded-full shadow-[0_0_10px_rgba(106,13,173,0.8)]" />
                      <p className="text-[10px] text-neon-purple font-mono uppercase tracking-widest font-bold">Phase Metrics: {processSteps[activeIdx].metric}</p>
                    </div>
                    <span className="text-8xl font-mono text-white/5 font-black leading-none">
                      {processSteps[activeIdx].number}
                    </span>
                  </div>

                  {/* Main Copy */}
                  <div className="space-y-4">
                    <h3 className="text-white text-3xl md:text-4xl font-serif italic font-bold">
                      {processSteps[activeIdx].headline}
                    </h3>
                    <p className="text-white/50 text-sm md:text-base font-light leading-relaxed">
                      {processSteps[activeIdx].description}
                    </p>
                  </div>

                  {/* Deliverables/Outputs */}
                  <div className="space-y-4">
                    <p className="text-white/20 text-[9px] uppercase tracking-[0.3em] font-mono font-bold">Targeted Phase Outputs</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {processSteps[activeIdx].outputs.map((outStr, oIdx) => (
                        <li key={oIdx} className="flex items-center gap-4 text-xs font-light text-white/70">
                          <CheckCircle size={14} className="text-neon-purple shrink-0" />
                          <span className="font-sans leading-tight">{outStr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-10 border-t border-white/5 relative z-10 flex items-center justify-between text-[10px] text-white/35 font-mono uppercase tracking-[0.3em]">
                  <span>SEO & Marketing // Muhammed Sinan VK</span>
                  <div className="flex items-center gap-2 text-neon-purple">
                    <Zap size={12} />
                    <span>Continuous Optimization</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
