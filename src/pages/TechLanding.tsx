import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight, Cpu, CheckCircle2, Zap, Code, Shield, Layers } from "lucide-react";
import SEO from "../components/SEO";
import { techConfigs } from "../data/tech";
import { BentoGrid, BentoCard } from "../components/BentoGrid";
import SemanticFooterLinks from "../components/SemanticFooterLinks";
import SemanticWordCloud from "../components/SemanticWordCloud";

import QABlock from "../components/QABlock";
import QASchema from "../components/QASchema";

import { normalizeSlug, optimizeMetadataSnippet } from "../lib/seo-utils";

export default function TechLanding() {
  const params = useParams<{ slug: string }>();
  const [config, setConfig] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const resolveParams = async () => {
      const { slug } = params;
      if (slug) {
        const normalized = normalizeSlug(slug);
        const data = techConfigs[normalized];
        if (data) {
          setConfig(data);
        }
      }
      setLoading(false);
      window.scrollTo(0, 0);
    };

    resolveParams();
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center">
        <Cpu className="text-neon-purple animate-spin" size={48} />
      </div>
    );
  }

  if (!config) {
    return (
      <div className="min-h-screen bg-midnight flex flex-col items-center justify-center p-6 text-center space-y-12">
        <SEO 
          title="Protocol Not Found | MSVK Technical Hub"
          description="Technology protocol not supported by the best digital marketer in Kerala."
        />
        <div className="w-24 h-24 rounded-[2rem] bg-neon-purple/5 border border-neon-purple/20 flex items-center justify-center text-neon-purple animate-pulse">
          <Layers size={40} />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif italic text-white tracking-tighter uppercase">Protocol Not Supported</h1>
          <p className="text-slate-400 max-w-md mx-auto font-light leading-relaxed">This stack is currently outside our high-performance optimization matrix. The requested architecture node retrieval failed.</p>
        </div>
        <Link to="/" className="group relative px-10 py-4 bg-transparent border border-neon-purple/50 rounded-full overflow-hidden transition-all">
          <span className="relative z-10 text-[10px] font-bold uppercase tracking-widest text-white group-hover:text-black transition-colors">Return to Hub</span>
          <div className="absolute inset-0 bg-neon-purple translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </Link>
      </div>
    );
  }

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-midnight min-h-screen selection:bg-neon-purple selection:text-white"
    >
      <SEO 
        title={`${config.metaTitle} | Technical SEO Expert`}
        description={optimizeMetadataSnippet(config.metaDescription, config.displayName)}
        keywords={[params.slug || "", "Technical SEO", "Next.js", "Performance Engineering", "Best SEO Expert in Kerala"]}
      />

      {/* Hero: Architecture Node */}
      <section className="pt-40 pb-24 px-6 md:px-8 max-w-7xl mx-auto space-y-12 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-neon-purple/5 blur-[120px] -z-10 rounded-full" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-6 py-2 glass-2 rounded-full border border-white/5"
        >
          <Code size={14} className="text-neon-purple" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neon-purple/80 italic">Protocol: {config.displayName}</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-9xl font-serif italic text-white leading-[1] tracking-tighter"
        >
          {config.heroHeading}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-xl md:text-3xl font-light leading-relaxed max-w-5xl mx-auto"
        >
          {config.subheading}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 pt-12"
        >
          <Link to="/contact" className="px-14 py-6 bg-neon-purple text-white rounded-full text-[12px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-[0_0_50px_rgba(168,85,247,0.2)]">
            Partner for Dominance
          </Link>
          <a href="#seo-impact" className="px-14 py-6 glass-2 border border-white/10 text-white rounded-full text-[12px] font-bold uppercase tracking-[0.2em] hover:border-white/30 transition-all">
            Audit SEO Impact
          </a>
        </motion.div>
      </section>

      {/* SEO Impact Section */}
      <section id="seo-impact" className="px-6 md:px-8 max-w-7xl mx-auto py-32">
        <BentoGrid className="md:grid-cols-12 gap-8">
          <BentoCard className="md:col-span-8 p-12 bg-dark-charcoal/40 border border-white/5 relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-neon-purple/5 blur-[100px] group-hover:bg-neon-purple/10 transition-colors" />
            <div className="relative z-10 space-y-12">
               <div className="w-16 h-16 bg-neon-purple/10 rounded-2xl flex items-center justify-center text-neon-purple border border-neon-purple/20">
                  <Zap size={32} />
               </div>
               <div className="space-y-6">
                  <h2 className="text-4xl md:text-6xl text-white font-serif italic tracking-tighter">Why {config.displayName} Matters for SEO.</h2>
                  <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                    In the absolute digital landscape of 2026, speed is the only currency. Using {config.displayName} directly influences Google's Core Web Vitals (LCP, INP, CLS). We eliminate layout shifts and reduce execution latency to under 100ms, ensuring your rankings are built on a rock-solid technical substrate.
                  </p>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {config.features.map(f => (
                    <div key={f} className="space-y-2">
                       <CheckCircle2 size={16} className="text-neon-purple" />
                       <div className="text-[9px] font-bold text-white/40 uppercase tracking-widest">{f}</div>
                    </div>
                  ))}
               </div>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-4 p-12 glass-2 border border-white/5 flex flex-col justify-between items-center text-center">
            <div className="space-y-6">
               <Shield size={64} className="text-neon-purple/40 mx-auto" strokeWidth={1} />
               <h3 className="text-2xl text-white font-serif italic">Verified Architecture</h3>
               <p className="text-slate-500 text-sm font-light">
                 Every node we deploy undergoes a surgical audit to ensure zero-regressions in SEO health and user experience.
               </p>
            </div>
            <div className="pt-8 border-t border-white/5 w-full">
               <div className="text-7xl font-serif text-white italic tracking-tighter">100</div>
               <div className="text-[10px] font-bold text-neon-purple uppercase tracking-[0.3em]">Lighthouse Score</div>
            </div>
          </BentoCard>
        </BentoGrid>
      </section>

      {/* Pricing Alignment: Strategic Retrieval */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto py-32">
        <div className="glass-2 border border-neon-purple/20 rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center space-y-12">
          <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-neon-purple/10 border border-neon-purple/20 rounded-full text-neon-purple text-[10px] font-bold uppercase tracking-widest">
             Dedicated Technical Audit
          </div>

          <h2 className="text-4xl md:text-7xl text-white font-serif italic tracking-tighter">Starter Optimization Retrieval.</h2>
          
          <div className="flex flex-col items-center gap-4">
             <div className="text-7xl md:text-9xl font-serif text-white tracking-tighter italic">₹3,500 <span className="text-xl md:text-2xl text-slate-500 not-italic uppercase tracking-widest">/ Audit</span></div>
             <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl">
               A 1-on-1 strategic deep-dive into your {config.displayName} architecture. We map your brand ascension with surgical precision.
             </p>
          </div>

          <div className="pt-8">
            <Link to="/contact" className="group relative inline-flex items-center gap-4 px-16 py-7 bg-white text-black rounded-full text-[12px] font-bold uppercase tracking-[0.2em] overflow-hidden">
              <span className="relative z-10 group-hover:text-white transition-colors">Begin Architecture Audit</span>
              <ArrowUpRight size={18} className="relative z-10 group-hover:text-white transition-colors" />
              <div className="absolute inset-0 bg-neon-purple translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* AI SGE Optimized QA Section */}
      <QASchema />
      <QABlock />

      <div className="px-6 md:px-8 max-w-7xl mx-auto border-t border-white/5">
        <SemanticWordCloud category="seo" className="py-24" />
      </div>

      {/* Semantic Silk-Route Link Matrix */}
      <SemanticFooterLinks currentTech={params.slug} />

      <footer className="py-24 text-center border-t border-white/5 opacity-40 bg-midnight">
         <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[1em]">Absolute Digital Superiority / Terminal / 2026</p>
      </footer>
    </motion.main>
  );
}
