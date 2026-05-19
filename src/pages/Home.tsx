import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  Zap, 
  Search, 
  Code, 
  Cpu,
  Brain,
  MessageSquare,
  Globe,
  TrendingUp,
  BarChart,
  ShieldAlert,
  Terminal,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Layers,
  Sparkles,
  Command,
  MousePointer2,
  Building2,
  HeartPulse,
  ShoppingCart,
  GraduationCap
} from "lucide-react";
import { BentoGrid, BentoCard } from "../components/BentoGrid";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import { NeuralBackground } from "../components/NeuralBackground";
import SEOImage from "../components/SEOImage";

import QABlock from "../components/QABlock";
import QASchema from "../components/QASchema";
import SemanticFooterLinks from "../components/SemanticFooterLinks";
import SemanticWordCloud from "../components/SemanticWordCloud";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <motion.main
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen relative bg-obsidian text-white/90 selection:bg-neon-purple selection:text-white"
    >
      <NeuralBackground />
      
      <SEO 
        title="Performance Marketing Agency | Best SEO Expert in Kerala | MSVK Elite Retrieval"
        description="Muhammed Sinan VK: Institutional-grade Performance Marketing. Architecting digital supremacy through AI-powered search dominance, Luxury Perfume Branding, Academic Web Engineering, and Fashion Retail scaling."
      />

      <div className="strict-container z-10 pt-32">
        {/* HERO SECTION: MICKED ELITE PROTOCOLS */}
        <section className="min-h-[90vh] flex flex-col justify-center py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="flex flex-wrap gap-4 items-center">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-[10px] font-bold uppercase tracking-[0.5em] shadow-[0_0_20px_rgba(106,13,173,0.2)]">
                <Sparkles size={12} className="animate-pulse" />
                Elite Retrieval Node Active
              </div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-accent-purple/30 text-accent-purple text-[10px] font-bold uppercase tracking-[0.4em]">
                Global Dominance Protocol
              </div>
            </div>
            
            <h1 className="text-white font-display leading-[0.85] tracking-[-0.07em]">
              Digital Marketing <br />
              <span className="purple-text-glow font-serif italic bg-gradient-to-r from-neon-purple to-accent-purple bg-clip-text text-transparent">Agency.</span>
            </h1>

            <div className="max-w-4xl space-y-12">
              <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed">
                Architecting digital supremacy. We deploy high-performance SEO protocols to ensure absolute market dominance for elite brands in <span className="text-accent-purple font-bold">India</span>, the <span className="text-accent-purple font-bold">Middle East</span>, and <span className="text-accent-purple font-bold">Europe</span>.
              </p>
              
              <div className="flex flex-wrap gap-8 pt-6">
                <Link to="/contact" className="group relative px-12 py-6 purple-gradient-bg text-white font-bold rounded-2xl transition-all overflow-hidden shadow-[0_20px_60px_rgba(106,13,173,0.4)] hover:scale-105 active:scale-95">
                  <span className="relative z-10 flex items-center gap-4 uppercase tracking-[0.4em] text-[11px]">Initiate Deployment <ArrowUpRight size={18} /></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Link>
                <Link to="/portfolio" className="px-12 py-6 bg-dark-charcoal border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all uppercase tracking-[0.4em] text-[11px] flex items-center gap-4 shadow-xl border-l-[0.5px] border-l-neon-purple/20">
                  Case Archives <Layers size={16} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Floating Elite Stats */}
          <div className="absolute right-0 bottom-20 hidden xl:flex flex-col gap-8">
             {[
               { l: "Global Expansion", v: "Institutional" },
               { l: "Target Scaling", v: "1200% ROI" },
               { l: "Status Code", v: "DOMINANT" }
             ].map((s, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 1 + (i * 0.1) }}
                 className="p-8 bg-dark-charcoal border border-white/5 shadow-2xl rounded-3xl text-right space-y-2 w-56 border-r-2 border-r-accent-purple/50"
               >
                 <p className="text-white/20 text-[9px] font-bold uppercase tracking-[0.5em]">{s.l}</p>
                 <p className="text-neon-purple text-3xl font-display font-bold tracking-tighter purple-text-glow">{s.v}</p>
               </motion.div>
             ))}
          </div>
        </section>

        {/* INSTITUTIONAL CORE: NICHE SEO DOMINANCE */}
        <section className="py-40 border-t border-white/5 relative bg-dark-charcoal/30 -mx-6 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-12 space-y-24">
              <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                <div className="space-y-6">
                   <div className="flex items-center gap-3">
                      <div className="h-[1px] w-12 bg-accent-purple" />
                      <p className="text-accent-purple text-[10px] font-bold uppercase tracking-[0.8em]">Precision Operations</p>
                   </div>
                   <h2 className="text-white">The <span className="text-neon-purple font-serif italic">Expert Node.</span></h2>
                </div>
                <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.5em] leading-loose max-w-sm hidden md:block text-right">
                   Best SEO Expert in Kerala // Performance Marketing Specialist // Global Growth Protocol.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                 {/* ELITE SEO BLOCK 1: GADJENIX */}
                 <div className="space-y-8 p-10 bg-dark-charcoal border border-white/5 shadow-2xl rounded-[3rem] hover:border-neon-purple/20 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                       <ShoppingCart size={80} className="text-neon-purple" />
                    </div>
                    <div className="w-14 h-14 bg-neon-purple/10 rounded-2xl flex items-center justify-center text-neon-purple border border-neon-purple/20 group-hover:scale-110 transition-transform">
                       <ShoppingCart size={28} />
                    </div>
                    <div className="space-y-6 relative z-10">
                       <h3 className="text-white text-2xl font-display uppercase tracking-tighter">Gadjenix <br /><span className="text-neon-purple">E-com Growth.</span></h3>
                       <p className="text-white/40 text-sm leading-relaxed font-light">
                         Full-stack marketing for Gadjenix. We engineered technical SEO and SMM strategies that scaled this Kerala-based gadget shop to a national audience.
                       </p>
                    </div>
                 </div>

                 {/* ELITE SEO BLOCK 2: MORVEX */}
                 <div className="space-y-8 p-10 bg-dark-charcoal border border-white/5 shadow-2xl rounded-[3rem] bento-card-glow transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                       <Sparkles size={80} className="text-neon-purple" />
                    </div>
                    <div className="w-14 h-14 bg-neon-purple/10 rounded-2xl flex items-center justify-center text-neon-purple border border-neon-purple/20 group-hover:scale-110 transition-transform">
                       <Globe size={28} />
                    </div>
                    <div className="space-y-6 relative z-10">
                       <h3 className="text-white text-2xl font-display uppercase tracking-tighter">Morvex <br /><span className="text-neon-purple">Global Node.</span></h3>
                       <p className="text-white/40 text-sm leading-relaxed font-light">
                         Scaling Morvex perfumes across the UK, US, and Middle East. We deployed architectural SEO and prestige branding to dominate the global fragrance market.
                       </p>
                    </div>
                 </div>

                 {/* ELITE SEO BLOCK 3: JAMALULLAIL */}
                 <div className="space-y-8 p-10 bg-dark-charcoal border border-white/5 shadow-2xl rounded-[3rem] hover:border-neon-purple/20 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                       <GraduationCap size={80} className="text-neon-purple" />
                    </div>
                    <div className="w-14 h-14 bg-neon-purple/10 rounded-2xl flex items-center justify-center text-neon-purple border border-neon-purple/20 group-hover:scale-110 transition-transform">
                       <GraduationCap size={28} />
                    </div>
                    <div className="space-y-6 relative z-10">
                       <h3 className="text-white text-2xl font-display uppercase tracking-tighter">Jamalullail <br /><span className="text-neon-purple">Education Hub.</span></h3>
                       <p className="text-white/40 text-sm leading-relaxed font-light">
                         Local SEO and digital transformation for Jamalullail Academy. Establishing digital authority for Islamic studies through strategic search and SMM.
                       </p>
                    </div>
                 </div>
              </div>

              {/* Extended SEO Narrative for Institutional Positioning */}
              <div className="space-y-12 max-w-5xl mx-auto pt-24 border-t border-white/5">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-white/30 text-base font-light font-sans leading-loose tracking-wide">
                    <p className="italic border-l-2 border-neon-purple/30 pl-10">
                       Success in 2026 requires more than optimization; it demands absolute digital dominance. As an SEO specialist, I deliver high-ROI strategies and technical supremacy.
                    </p>
                    <p className="border-l-2 border-neon-purple/30 pl-10">
                       Our focus on performance frameworks allows brands to bypass the noise of saturated markets. We provide the roadmap to digital supremacy for ambitious firms.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUCCESS BENTO: THE ELITE ARCHIVE (REBUILT SECTIONS) */}
        <section className="py-40 space-y-32">
          <div className="text-center space-y-8">
             <div className="inline-flex items-center gap-4 text-accent-purple/60 text-[10px] font-bold uppercase tracking-[1.5em]">
               The Archive // Elite Tier
             </div>
             <h2 className="text-white uppercase leading-[0.8] tracking-[-0.05em]">Success <br /><span className="purple-text-glow font-serif italic text-neon-purple">Link.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[400px] md:auto-rows-[500px]">
            {/* 1. Digisinans */}
            <motion.a 
               href="https://digisinans.in/"
               target="_blank"
               rel="noopener noreferrer"
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="md:col-span-8 bento-card bento-card-glow group cursor-pointer border-neon-purple/10 block"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000" />
               <img 
                 src="https://i.ibb.co/s7k15Sm/Screenshot-2026-05-16-224324.png" 
                 className="absolute inset-0 w-full h-full object-cover grayscale opacity-10 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                 alt="Digisinans Global Presence"
               />
               <div className="relative h-full flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="px-6 py-2 bg-neon-purple text-white text-[9px] font-bold uppercase tracking-[0.3em] rounded-full shadow-[0_0_20px_rgba(106,13,173,0.5)]">Digisinans CNS // Elite Rank</span>
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-3xl">
                       <ArrowUpRight size={24} className="text-white group-hover:text-neon-purple group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-5xl md:text-7xl text-white font-display tracking-tighter">Digisinans.</h3>
                    <p className="text-white/40 text-xl font-light leading-relaxed max-w-lg">
                      Surgically dominant search protocol for the Digisinans enterprise. #1 Placement achieved across 14 global nodes.
                    </p>
                  </div>
               </div>
               <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-neon-pink to-neon-purple translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
            </motion.a>

            {/* 2. Gadjenix */}
            <motion.a 
               href="https://gadjenix-mr95.vercel.app/"
               target="_blank"
               rel="noopener noreferrer"
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="md:col-span-4 bento-card bento-card-glow group cursor-pointer border-accent-purple/10 block"
            >
               <img 
                 src="https://i.ibb.co/fmhc291/Screenshot-2026-05-16-224940.png" 
                 className="absolute inset-0 w-full h-full object-cover grayscale opacity-10 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                 alt="Gadjenix Technical Superiority"
               />
               <div className="relative h-full flex flex-col justify-between z-10">
                  <div className="flex flex-col items-end gap-2">
                     <span className="px-5 py-2 border border-accent-purple/30 text-accent-purple text-[8px] font-bold uppercase tracking-widest rounded-full backdrop-blur-md">Elite Web Hub</span>
                     <div className="w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl text-white font-display">Gadjenix.</h3>
                    <p className="text-white/30 text-sm font-light leading-relaxed">
                      Deploying zero-latency web environments for high-tier tech conglomerates in Kerala and beyond.
                    </p>
                  </div>
               </div>
            </motion.a>

            {/* 3. Luxavya */}
            <motion.a 
               href="https://www.luxavya.com/"
               target="_blank"
               rel="noopener noreferrer"
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="md:col-span-6 bento-card bento-card-glow group cursor-pointer bg-neon-purple/5 border-neon-purple/10 block"
            >
               <img 
                 src="https://i.ibb.co/dsHxr4xV/Screenshot-2026-05-16-224538.png" 
                 className="absolute inset-0 w-full h-full object-cover grayscale opacity-10 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                 alt="Luxavya Brand Authority"
               />
               <div className="relative h-full flex flex-col justify-between z-10">
                  <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 backdrop-blur-3xl self-end group-hover:bg-neon-purple group-hover:text-white transition-all">
                     <Sparkles size={24} className="text-neon-purple group-hover:text-white" />
                  </div>
                  <div className="space-y-6 pt-10">
                    <h3 className="text-5xl text-white font-serif italic text-accent-purple">Luxavya.</h3>
                    <p className="text-white/40 text-lg font-light leading-relaxed">
                      Luxury perfume branding and SMM for Dubai, Qatar, and Indian markets. Establishing prestige through visual storytelling.
                    </p>
                  </div>
               </div>
            </motion.a>

            {/* 4. Minco Kids */}
             <motion.a 
                href="https://www.mincokids.com/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="md:col-span-6 bento-card bento-card-glow group cursor-pointer border-white/5 bg-gradient-to-br from-dark-charcoal to-obsidian block overflow-hidden"
             >
                <div className="absolute inset-0 z-0">
                  <SEOImage 
                    src="https://i.ibb.co/k2GvTWj4/Screenshot-2026-05-16-224448.png" 
                    alt="Minco Kids E-commerce - Growth marketing protocol by Best Digital Marketer in Kerala"
                    className="w-full h-full"
                  />
                </div>
                <div className="relative h-full flex flex-col justify-between z-10">
                  <div className="space-y-4">
                     <div className="flex items-center gap-2">
                        <div className="w-10 h-[1px] bg-accent-purple" />
                        <p className="text-[10px] text-accent-purple font-bold uppercase tracking-[0.5em]">Education Node</p>
                     </div>
                     <h3 className="text-5xl text-white font-display tracking-tighter">Minco Kids.</h3>
                  </div>
                  <div className="flex items-center gap-8 pt-8 border-t border-white/5">
                     <div className="space-y-1">
                        <p className="text-white/20 text-[9px] uppercase font-bold tracking-widest italic font-sans">Growth Factor</p>
                        <p className="text-white text-3xl font-bold font-display purple-text-glow text-neon-purple">4.2X</p>
                     </div>
                     <p className="text-white/50 text-base font-light leading-relaxed flex-1 italic">
                       Establishing brand authority for India's leading kids book shop through targeted SMM.
                     </p>
                  </div>
               </div>
            </motion.a>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
               className="md:col-span-6 bento-card bento-card-glow group cursor-pointer border-accent-purple/10 overflow-hidden"
            >
               <div className="absolute inset-0 z-0">
                 <SEOImage 
                   src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop" 
                   alt="Morvex Perfume Branding - International marketing expansion by Best SEO Expert in Kerala"
                   className="w-full h-full"
                 />
               </div>
               <div className="relative h-full flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="px-5 py-2 bg-accent-purple/20 border border-accent-purple/30 text-accent-purple text-[8px] font-bold uppercase tracking-widest rounded-full backdrop-blur-md">Premium Branding</span>
                    <ArrowUpRight size={20} className="text-white/20 group-hover:text-neon-purple transition-all" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-5xl text-white font-display">Morvex.</h3>
                    <p className="text-white/40 text-lg font-light leading-relaxed">
                      Global perfume brand scaling across India, Qatar, Dubai, US, and UK with full-stack marketing.
                    </p>
                  </div>
               </div>
            </motion.div>

             <motion.a 
                href="https://jamalullail.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="md:col-span-6 bento-card bento-card-glow group cursor-pointer border-neon-purple/10 bg-dark-charcoal block overflow-hidden"
             >
                <div className="absolute inset-0 z-0">
                  <SEOImage 
                    src="https://i.ibb.co/d4Jt8R8r/Screenshot-2026-05-16-224812.png" 
                    alt="Jamalullail Academy Portfolio - Web engineering and SEO retrieval by Muhammed Sinan VK"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/5 to-transparent z-[1]" />
                <div className="relative h-full flex flex-col justify-between z-10">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-neon-purple/10 rounded-xl flex items-center justify-center text-neon-purple border border-neon-purple/20">
                        <Code size={24} />
                     </div>
                     <div className="space-y-1">
                        <p className="text-neon-purple text-[9px] font-bold uppercase tracking-widest leading-none">Education Infrastructure</p>
                        <p className="text-white/20 text-[7px] font-bold uppercase tracking-[0.4em]">Islamic Studies Node</p>
                     </div>
                  </div>
                  <div className="space-y-6 pt-10">
                    <h3 className="text-4xl text-white font-serif italic">Jamalullail <br /><span className="text-neon-purple">Academy.</span></h3>
                    <p className="text-white/40 text-lg font-light leading-relaxed">
                      Engineering specialized local SEO and web infrastructure for a premier Islamic study center in Kerala.
                    </p>
                    <div className="pt-4 flex items-center gap-2">
                       <div className="h-[1px] w-12 bg-white/10" />
                       <span className="text-[10px] text-white/20 uppercase tracking-[0.3em]">Audit Live Node</span>
                    </div>
                  </div>
               </div>
            </motion.a>
          </div>
        </section>

        {/* ELITE ENTRY: THE ₹3,500 SIGNATURE OFFER (ACCENT ACCENTED) */}
        <section className="py-40 border-t border-white/5 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-neon-purple/[0.02] -z-10 blur-[150px] animate-pulse" />
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-6 space-y-12">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-[1px] bg-accent-purple" />
                   <p className="text-accent-purple text-[11px] font-bold uppercase tracking-[1em]">Starter Deployment LINK</p>
                 </div>
                 <h2 className="text-white leading-[0.9] text-6xl md:text-8xl">Elite <br/><span className="bg-gradient-to-r from-neon-purple to-accent-purple bg-clip-text text-transparent italic font-serif">Activation.</span></h2>
                 <p className="text-white/40 text-2xl font-light leading-relaxed max-w-xl">
                    Secure your fundamental search architecture. Designed for ambitious pioneers requiring the vision of the <strong>Best SEO Expert in Kerala</strong> without full institutional commitment.
                 </p>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 pt-8">
                    {[
                      "Neural Intelligence Audit",
                      "Core Vital Stabilization",
                      "Authority Node Blueprint",
                      "Conversion SMM Strategy"
                    ].map(item => (
                       <li key={item} className="flex items-center gap-4 text-white/70 text-[11px] uppercase tracking-[0.4em] font-bold">
                          <Zap size={16} className="text-accent-purple" />
                          {item}
                       </li>
                    ))}
                 </ul>
              </div>
              <div className="lg:col-span-6 relative">
                 <div className="absolute inset-0 bg-neon-purple/5 blur-[120px] rounded-full" />
                 <div className="p-16 md:p-20 bg-dark-charcoal border-[0.5px] border-accent-purple/30 rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] group relative z-10 hover:border-accent-purple transition-all duration-700">
                 <div className="space-y-12">
                       <div className="flex justify-between items-start">
                          <div className="space-y-3">
                             <span className="text-[11px] font-bold text-white/30 uppercase tracking-[0.8em]">Deployment Investment</span>
                             <div className="flex items-baseline gap-4">
                                <p className="text-8xl md:text-9xl font-display font-bold text-white tracking-tighter">₹3,500</p>
                                <span className="text-accent-purple font-bold text-2xl uppercase tracking-[0.3em] italic">/Init</span>
                             </div>
                          </div>
                          <div className="w-16 h-16 bg-accent-purple/10 rounded-2xl flex items-center justify-center border border-accent-purple/20">
                             <Command size={32} className="text-accent-purple" />
                          </div>
                       </div>
                       <p className="text-white/50 text-xl leading-relaxed font-light italic border-l-2 border-white/10 pl-8">
                         A definitive 1-on-1 strategic retrieval with Muhammed Sinan VK. Absolute clarity for your brand's digital ascension.
                       </p>
                       <Link to="/contact" className="w-full py-8 purple-gradient-bg text-white font-bold uppercase tracking-[0.6em] text-[12px] rounded-[2.5rem] flex items-center justify-center gap-5 hover:scale-[1.02] transition-all shadow-[0_20px_50px_rgba(106,13,173,0.4)] group relative overflow-hidden">
                         <span className="relative z-10">Initiate Signature Protocol</span>
                         <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                         <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                       </Link>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* AI SGE Optimized QA Section */}
      <QASchema />
      <QABlock />

      {/* ELITE FOOTER: THE OBSERVATORY */}
        <footer className="py-24 border-t border-white/5 space-y-24 bg-dark-charcoal/20 -mx-6 px-6">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
              <div className="lg:col-span-4 space-y-10">
                 <Link to="/" className="text-4xl font-display font-bold tracking-tighter text-white uppercase flex items-center gap-3">
                    <Command className="text-neon-purple purple-text-glow" /> MSVK<span className="text-neon-purple">.</span>
                 </Link>
                 <p className="text-white/30 text-base leading-loose font-light max-w-sm italic">
                   Elite Neural Marketing Observatory. Directing commercial trajectory through absolute search dominance and visual prestige. Authorized in India, UAE, Qatar, US, and UK.
                 </p>
                 <div className="flex gap-8">
                    {[Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                       <a key={i} href="#" className="text-white/20 hover:text-neon-purple transition-all hover:scale-125 transform purple-text-glow">
                          <Icon size={24} />
                       </a>
                    ))}
                 </div>
              </div>

              <div className="lg:col-span-8">
                 <div className="w-full h-[450px] rounded-[4rem] overflow-hidden border border-white/5 group shadow-2xl relative shadow-neon-purple/5">
                    <div className="absolute inset-0 bg-obsidian/40 z-10 pointer-events-none group-hover:bg-transparent transition-all duration-1000" />
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.467433290132!2d76.654878!3d10.776652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86dfa087d3a77%3A0x110db567946955a!2sPalakkad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1713511874251!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      className="border-none transition-all duration-[2000ms] scale-110 group-hover:scale-100 grayscale invert opacity-50 group-hover:opacity-100 group-hover:grayscale-0 group-hover:invert-0"
                      allowFullScreen 
                      loading="lazy" 
                    />
                    <div className="absolute top-12 left-12 p-10 bg-obsidian/90 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-10 group-hover:translate-y-0 shadow-[0_30px_60px_rgba(0,0,0,1)] border-l-4 border-l-neon-purple">
                       <p className="text-neon-purple text-[11px] font-bold uppercase tracking-[1em] mb-3">Observatory CNS Core</p>
                       <p className="text-white text-xl font-serif italic mb-1 uppercase tracking-tighter">Muhammed Sinan VK HQ</p>
                       <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest">Authorized Operations Zone // 2026</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-16 border-t border-white/5">
              <div className="flex flex-col gap-2">
                 <p className="text-white/10 text-[11px] font-bold uppercase tracking-[0.5em]">© 2026 Marketer Sinan VK // Elite Mixed Protocol v4.4</p>
                 <p className="text-white/5 text-[9px] font-mono uppercase tracking-widest">Obsidian // Charcoal // Neon Purple // Accent Purple</p>
              </div>
              <div className="flex gap-12 text-white/20 text-[11px] font-bold uppercase tracking-[0.3em]">
                 <Link to="/services" className="hover:text-neon-purple hover:purple-text-glow transition-all">Services Spectrum</Link>
                 <Link to="/portfolio" className="hover:text-neon-purple hover:purple-text-glow transition-all">Case Library</Link>
                 <Link to="/contact" className="hover:text-neon-purple hover:purple-text-glow transition-all">Command Link</Link>
              </div>
           </div>
        </footer>
      </div>

      <div className="bg-obsidian relative z-20 px-6 md:px-8 max-w-7xl mx-auto">
         <SemanticWordCloud category="default" className="pt-24" />
         <SemanticFooterLinks />
      </div>
    </motion.main>
  );
}
