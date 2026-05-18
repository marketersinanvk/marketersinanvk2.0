import React, { useEffect, Suspense } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp, Target, Cpu, MapPin, Globe, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";
import { BentoGrid, BentoCard } from "../components/BentoGrid";
import CaseStudies from "../components/CaseStudies";
import { locationConfigs } from "../data/locations";
import SemanticFooterLinks from "../components/SemanticFooterLinks";
import SemanticWordCloud from "../components/SemanticWordCloud";

import QABlock from "../components/QABlock";
import QASchema from "../components/QASchema";

import { normalizeSlug, optimizeMetadataSnippet } from "../lib/seo-utils";

export default function LocationLanding() {
  const params = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [config, setConfig] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  // Next.js like notFound() simulation + Async Params Resolution
  useEffect(() => {
    const resolveParams = async () => {
      const { slug } = params;
      if (slug) {
        const normalized = normalizeSlug(slug);
        const data = locationConfigs[normalized];
        if (data) {
          setConfig(data);
        }
      }
      setLoading(false);
      window.scrollTo(0, 0);
    };

    resolveParams();
  }, [params, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center">
        <Cpu className="text-neon-purple animate-spin" size={48} />
      </div>
    );
  }

  if (!config) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-8 bg-midnight px-6 text-center">
        <div className="w-24 h-24 rounded-full bg-neon-purple/10 flex items-center justify-center border border-neon-purple/20 animate-pulse">
           <Cpu size={40} className="text-neon-purple" />
        </div>
        <h1 className="text-4xl md:text-6xl font-serif italic text-white tracking-tighter uppercase">Deployment Node Not Found</h1>
        <p className="text-slate-400 max-w-md font-light">This digital sector is currently outside our absolute dominance grid. The requested location retrieval failed.</p>
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
        title={`${config.metaTitle} | Best Digital Marketer in Kerala`}
        description={optimizeMetadataSnippet(config.metaDescription, config.name)}
        keywords={[...config.primaryKeywords, "Best Digital Marketer in Kerala", "Muhammed Sinan VK", "AI Marketing Strategy"]}
      />

      {/* Hero Section: Zero-Latency Retrieval */}
      <section className="pt-40 pb-24 px-6 md:px-8 max-w-7xl mx-auto space-y-12 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-neon-purple/5 blur-[120px] -z-10 rounded-full" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-6 py-2 glass-2 rounded-full border border-white/5"
        >
          <div className="w-2 h-2 rounded-full bg-neon-purple animate-ping" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neon-purple/80 italic">Sector: {config.name} / Dominance Protocol Active</span>
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
            Deploy Growth Node
          </Link>
          <Link to="/portfolio" className="px-14 py-6 glass-2 border border-white/10 text-white rounded-full text-[12px] font-bold uppercase tracking-[0.2em] hover:border-white/30 transition-all">
            Audit Analytics
          </Link>
        </motion.div>
      </section>

      {/* Logic Card Grid */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto">
        <BentoGrid className="auto-rows-auto md:grid-cols-12 gap-8">
          <BentoCard className="md:col-span-7 p-12 bg-dark-charcoal/40 border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-neon-purple/5 blur-[100px] group-hover:bg-neon-purple/10 transition-colors" />
            <div className="relative z-10 space-y-8">
               <div className="w-16 h-16 bg-neon-purple/10 rounded-2xl flex items-center justify-center text-neon-purple border border-neon-purple/20">
                  <TrendingUp size={32} />
               </div>
               <div className="space-y-4">
                  <h2 className="text-4xl text-white font-serif italic tracking-tighter capitalize">Retrieval Meta-Strategy</h2>
                  <p className="text-slate-400 text-lg font-light leading-relaxed">
                    Our {config.name} operations leverage high-density data retrieval models to identify keyword friction and conversion bottlenecks before they affect your P&L.
                  </p>
               </div>
               <div className="flex flex-wrap gap-3">
                  {config.primaryKeywords.map(k => (
                    <span key={k} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-white/40 uppercase tracking-widest">{k}</span>
                  ))}
               </div>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-5 p-12 glass-2 border border-white/5 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl text-white font-serif italic uppercase tracking-tighter">Market Analysis</h3>
              <ul className="space-y-4">
                {["Competitor Retrieval", "Algorithm Mapping", "Conversion Arbitrage"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-400 text-sm font-light">
                    <CheckCircle2 size={16} className="text-neon-purple/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-8 border-t border-white/5">
               <p className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Operational Status: <span className="text-neon-purple">Active</span></p>
            </div>
          </BentoCard>
        </BentoGrid>
      </section>

      {/* Dynamic Case Studies Node */}
      <section className="space-y-16">
        <div className="px-6 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
           <div className="space-y-4">
              <p className="text-neon-purple text-[10px] font-bold uppercase tracking-[0.5em] italic">Prioritized Result Sets</p>
              <h2 className="text-4xl md:text-7xl font-serif italic text-white tracking-tighter">
                {config.region === "global" ? "International Dominance." : "Local Market Excellence."}
              </h2>
           </div>
           <p className="text-slate-500 text-sm max-w-sm font-light italic">
              Retrieving high-authority case studies specifically mapped for {config.name} entity requirements.
           </p>
        </div>
        
        {/* We use the highlightLocation to prioritize within the component */}
        <Suspense fallback={<div className="h-[600px] flex items-center justify-center"><Cpu className="animate-spin text-neon-purple" /></div>}>
          <CaseStudies highlightLocation={config.name} region={config.region} />
        </Suspense>
      </section>

      {/* Pricing Alignment: The Strategic Retrieval Package */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto py-32">
        <div className="glass-2 border border-neon-purple/20 rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center space-y-12">
          <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-neon-purple/10 border border-neon-purple/20 rounded-full text-neon-purple text-[10px] font-bold uppercase tracking-widest">
             Entry Point Deployment
          </div>

          <h2 className="text-4xl md:text-7xl text-white font-serif italic tracking-tighter">Starter Deployment Package.</h2>
          
          <div className="flex flex-col items-center gap-4">
             <div className="text-7xl md:text-9xl font-serif text-white tracking-tighter italic">₹3,500 <span className="text-xl md:text-2xl text-slate-500 not-italic uppercase tracking-widest">/ Node</span></div>
             <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl">
               A definitive 1-on-1 strategic retrieval with Muhammed Sinan VK. We map your brand ascension in {config.name} with surgical precision.
             </p>
          </div>

          <div className="pt-8">
            <Link to="/contact" className="group relative inline-flex items-center gap-4 px-16 py-7 bg-white text-black rounded-full text-[12px] font-bold uppercase tracking-[0.2em] overflow-hidden">
              <span className="relative z-10 transition-colors group-hover:text-white">Secure Audit for {config.name}</span>
              <ArrowUpRight size={18} className="relative z-10 transition-colors group-hover:text-white" />
              <div className="absolute inset-0 bg-neon-purple translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* AI SGE Optimized QA Section */}
      <QASchema />
      <QABlock />

      <div className="px-6 md:px-8 max-w-7xl mx-auto border-t border-white/5">
        <SemanticWordCloud category="meta-ads" className="py-24" />
      </div>

      {/* Semantic Silk-Route Link Matrix */}
      <SemanticFooterLinks currentLocation={params.slug} />

      {/* Global Bridge Node */}
      <footer className="py-24 text-center border-t border-white/5 bg-midnight">
         <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[1em]">Absolute Digital Superiority / 2026</p>
      </footer>
    </motion.main>
  );
}
