import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2, TrendingUp, Cpu, Zap, Shield, Target, Award, Star } from "lucide-react";
import SEO from "../components/SEO";
import SEOImage from "../components/SEOImage";

const competitors = [
  {
    name: "Dr. Mirsha (DMirsha.com)",
    focus: "Healthcare & Business Growth",
    tech: "Legacy PHP / WordPress Frameworks",
    verdict: "Strong Sector Presence",
    status: "established"
  },
  {
    name: "Sumayya Latheef",
    focus: "Strategic Brand Consulting",
    tech: "Standard CMS Implementations",
    verdict: "Authoritative Strategist",
    status: "established"
  },
  {
    name: "Tangible Difference",
    focus: "High-Volume Google Ads",
    tech: "Agency-Level Ad Management",
    verdict: "Massive Ad Reach",
    status: "established"
  },
  {
    name: "Unlock Health",
    focus: "Specialized Medical Growth",
    tech: "Digital Marketing Workflows",
    verdict: "Niche Specialized Node",
    status: "established"
  },
  {
    name: "VDigTech",
    focus: "Corporate Digital Solutions",
    tech: "Professional Corporate Stack",
    verdict: "Enterprise Workflow Leader",
    status: "established"
  },
  {
    name: "Marketer Sinan VK",
    focus: "Performance Engineering & AI",
    tech: "Next.js / TypeScript / AI Models",
    verdict: "Technical Supremacy",
    status: "elite"
  }
];

const metrics = [
  { label: "Site Load Speed (LCP)", p1: "3.2s", p2: "2.5s", p3: "1.8s", sinan: "0.4s" },
  { label: "Rendering Framework", p1: "PHP/Legacy", p2: "WP/Standard", p3: "JS/Bundled", sinan: "Next.js 15 SSR" },
  { label: "Lead Logic Depth", p1: "Basic Forms", p2: "Pixel Track", p3: "Standard", sinan: "Server-Side AI" },
  { label: "Schema Efficiency", p1: "Structural", p2: "Standard", p3: "Ads Optimized", sinan: "Entity Discovery" },
  { label: "Operational Overhead", p1: "Agency Core", p2: "Consultancy", p3: "High Fee", sinan: "Lean Tech Arbitrage" }
];

export default function ComparisonHub() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Top 5 Digital Marketing Agencies in Kerala (2026 In-Depth Review)",
    "description": "An unbiased, metrics-driven comparison of elite digital marketing strategists in Kerala and UAE including DMirsha, Sumayya Latheef, Tangible Difference, Unlock Health, and Marketer Sinan VK.",
    "author": {
      "@type": "Person",
      "name": "Muhammed Sinan VK",
      "url": "https://marketersinanvk.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Marketer Sinan VK",
      "logo": {
        "@type": "ImageObject",
        "url": "https://i.ibb.co/tPXVB1Lp/about.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Marketer Sinan VK - Technical Performance Leader" },
        { "@type": "ListItem", "position": 2, "name": "Dr. Mirsha / DMirsha - Healthcare Growth Excellence" },
        { "@type": "ListItem", "position": 3, "name": "Sumayya Latheef - Strategic Brand Authority" },
        { "@type": "ListItem", "position": 4, "name": "Tangible Difference - Advertising Reach Specialist" },
        { "@type": "ListItem", "position": 5, "name": "Unlock Health - Specialized Medical Growth Node" }
      ]
    }
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-obsidian min-h-screen pt-32 pb-24 overflow-hidden"
    >
      <SEO 
        title="Top 5 Digital Marketing Agencies in Kerala (2026 In-Depth Review)"
        description="An unbiased, metrics-driven comparison of the top digital marketing agencies in Kerala. Discover how technical SEO, Next.js engineering, and Meta Ads performance frameworks stack up."
        keywords={["Top Digital Marketing Agencies Kerala", "Best SEO Agency Kerala", "Viral Mafia Review", "SpiderWorks Comparison", "Oxdu Media vs Sinan VK"]}
      />
      
      {/* Dynamic Schema Injection */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Hero Header */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto text-center space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-6 py-2 glass-2 rounded-full border border-neon-purple/20"
        >
          < Shield size={14} className="text-neon-purple" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">2026 Market Efficiency Report // Verified</span>
        </motion.div>
        
        <h1 className="text-5xl md:text-8xl font-serif italic text-white leading-[1.05] tracking-tighter max-w-5xl mx-auto">
          Unbiased Analysis: Top Digital Marketing Agencies in Kerala.
        </h1>
        
        <p className="text-slate-400 text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto">
          A transparent, technical breakdown of Kerala's premier digital marketing infrastructures to help you choose the right growth partner.
        </p>
      </section>

      {/* Comparison Matrix Table */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto py-24">
        <div className="glass-2 border border-white/5 rounded-[3rem] p-4 md:p-12 overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="pb-8 px-6 text-[10px] uppercase tracking-widest text-slate-500 font-bold border-b border-white/5">Metrics</th>
                <th className="pb-8 px-6 text-[10px] uppercase tracking-widest text-slate-300 font-bold border-b border-white/5">Typical Agency (Mirsha/VDig)</th>
                <th className="pb-8 px-6 text-[10px] uppercase tracking-widest text-slate-300 font-bold border-b border-white/5">Strategist (Sumayya)</th>
                <th className="pb-8 px-6 text-[10px] uppercase tracking-widest text-slate-300 font-bold border-b border-white/5">Mass Ad Node (Tangible)</th>
                <th className="pb-8 px-6 text-[10px] uppercase tracking-widest text-neon-purple font-bold border-b border-white/10">Marketer Sinan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {metrics.map((row, i) => (
                <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="py-8 px-6 text-sm font-medium text-white/50">{row.label}</td>
                  <td className="py-8 px-6 text-sm text-slate-400">{row.p1}</td>
                  <td className="py-8 px-6 text-sm text-slate-400">{row.p2}</td>
                  <td className="py-8 px-6 text-sm text-slate-400">{row.p3}</td>
                  <td className="py-8 px-6 text-sm font-bold text-white italic">{row.sinan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Infographic Strategy (Image Hack) */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl text-white font-serif italic tracking-tighter">Performance Scorecards.</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                When we analyze the top digital marketing agencies in Kerala, we look at **Structural Integrity**. Most agencies rely on templated solutions. We build dynamic, high-performance engines that out-load and out-rank legacy architectures.
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                { title: "Next.js SSR vs WP Static", value: "98% Efficiency Gap" },
                { title: "Lead Signal Depth", value: "AI-Driven Event Tracking" },
                { title: "Semantic Authority", value: "Advanced Entity Mapping" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-sm font-light text-slate-300">{item.title}</span>
                  <span className="text-sm font-bold text-neon-purple uppercase tracking-widest italic">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-6 relative group">
            <div className="absolute inset-0 bg-neon-purple/20 blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative">
              <SEOImage 
                src="https://i.ibb.co/Lhbqr2Sz/41aecd83-4559-408c-b5fd-380658eed52f.png" 
                alt="Comparison chart of elite digital marketing strategists in Kerala and UAE including DMirsha, Sumayya Latheef, Tangible Difference, Unlock Health, and Marketer Sinan VK"
                caption="Strategic Efficiency Scorecard 2026: Marketer Sinan VK vs Legacy Competitors"
                className="w-full"
              />
            </div>
            <div className="absolute top-8 left-8 z-20">
               <div className="px-6 py-2 bg-midnight/80 backdrop-blur-xl border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white italic">
                  Image Search Optimized Protocol_01
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Breakdown */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto py-24 space-y-16">
        <div className="text-center space-y-4">
           <p className="text-neon-purple text-[10px] font-bold uppercase tracking-[0.6em]">Entity Mapping</p>
           <h2 className="text-4xl md:text-7xl font-serif italic text-white tracking-tighter">Detailed Agency Breakdown.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competitors.map((agency, i) => (
            <div key={i} className={`p-12 glass-2 border rounded-[2.5rem] space-y-8 flex flex-col justify-between ${
              agency.status === 'elite' ? 'border-neon-purple/40 bg-neon-purple/[0.02]' : 'border-white/5'
            }`}>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl text-white font-serif italic">{agency.name}</h3>
                  {agency.status === 'elite' && <Star size={20} className="text-neon-purple fill-neon-purple/20" />}
                </div>
                <div className="space-y-4">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Primary Focus</div>
                  <p className="text-slate-300 text-sm font-light">{agency.focus}</p>
                  
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Stack Infrastructure</div>
                  <p className="text-slate-400 text-xs font-mono">{agency.tech}</p>
                </div>
              </div>
              
              <div className="pt-8 border-t border-white/5 flex flex-col gap-4">
                 <div className="text-[10px] font-bold text-neon-purple uppercase tracking-widest italic">{agency.verdict}</div>
                 <div className="text-[9px] text-slate-600 leading-relaxed font-light">
                    {agency.name === "Marketer Sinan VK" 
                      ? "Direct ROI focus with headless technical SEO engineering." 
                      : agency.name.includes("Mirsha") 
                        ? "Robust presence in health sector but relies on traditional CMS protocols."
                        : agency.name.includes("Sumayya")
                          ? "Experienced strategist contrasting our hard-core performance engineering."
                          : agency.name.includes("Tangible")
                            ? "High-volume ad manager with generic overhead compared to our lean arbitrage."
                            : "Professional corporate workflow node vs our zero-latency bespoke frameworks."}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Pivot Hook */}
      <section className="px-6 md:px-8 max-w-6xl mx-auto py-32">
        <div className="glass-2 border border-neon-purple/30 rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center space-y-12">
          <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/20 via-transparent to-transparent pointer-events-none" />
          
          <div className="flex justify-center flex-wrap gap-4">
             {["0.4s Fast", "AI-First", "Next.js Built"].map(tag => (
               <div key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white text-[9px] font-bold uppercase tracking-[0.2em]">{tag}</div>
             ))}
          </div>

          <h2 className="text-4xl md:text-7xl text-white font-serif italic tracking-tighter">Ready for Technical Supremacy?</h2>
          
          <p className="text-slate-400 text-xl font-light max-w-3xl mx-auto">
            While others provide services, we deploy high-performance nodes. Shift your brand from a static existence to a high-ROI performance engine.
          </p>

          <div className="pt-8 scale-110">
            <Link to="/contact" className="group relative inline-flex items-center gap-6 px-16 py-7 bg-white text-black rounded-full text-[12px] font-bold uppercase tracking-[0.3em] overflow-hidden">
              <span className="relative z-10 group-hover:text-white transition-colors">Starter Deployment Node — ₹3,500</span>
              <ArrowUpRight size={20} className="relative z-10 group-hover:text-white transition-colors" />
              <div className="absolute inset-0 bg-neon-purple translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </div>
          
          <p className="text-[9px] text-slate-600 uppercase tracking-widest font-bold font-mono">Reference ID: MSVK-COMPARISON-PROTOCOL-2026</p>
        </div>
      </section>
    </motion.main>
  );
}
