import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import CinemaReel from "../components/CinemaReel";
import SEO from "../components/SEO";
import { BentoGrid, BentoCard } from "../components/BentoGrid";
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { Award, Globe, ExternalLink, Calendar, TrendingUp, Maximize2, X, Eye, ShieldCheck, Zap } from "lucide-react";

const campaignReports = [
  {
    id: "smart-supply",
    title: "Smart Supply - High ROAS Campaign Scaling",
    client: "Smart Supply Store",
    metric: "Kitchen Gadget Ads Performance Report",
    results: "Sustained High ROAS & Conversions",
    description: "Highly optimized custom Meta Ads strategy driving direct buyer conversions with tailored visual hooks and advanced Facebook pixel segmentation for smart kitchen utility products.",
    imageUrl: "https://i.ibb.co/1JPgNFLZ/Screenshot-2026-07-02-225232.png",
    tagColor: "bg-green-500/10 text-green-400 border-green-500/20",
    stats: [
      { label: "Funnel Strategy", value: "Conversion Ads" },
      { label: "Niche Focus", value: "Modern Kitchen" },
      { label: "Ad Creatives", value: "Video Hooks" }
    ],
    reportType: "campaign"
  },
  {
    id: "asna-packing-code",
    title: "Asna Packing - Modern E-com Web Engineering",
    client: "Asna Packing",
    metric: "Source Code & Architecture Proof",
    results: "Clean React / Tailwind Node",
    description: "Full implementation of the Asna Packing storefront. Designed with premium high-end aesthetics, direct-response contact pathways, and exceptional speed, proving elite grade doesn't require a high budget.",
    imageUrl: "https://i.ibb.co/FLFvwsfw/Screenshot-2026-07-03-055918.png",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    stats: [
      { label: "Performance", value: "0.5s Loadtime" },
      { label: "Stack Node", value: "Vite + Tailwind" },
      { label: "UX Quality", value: "Premium Grade" }
    ],
    reportType: "code"
  },
  {
    id: "gadjenix",
    title: "KL Gadjenix - Dynamic Retail Conversions",
    client: "KL Gadjenix Retail",
    metric: "Meta Ads Performance Analytics",
    results: "Targeted Audience Synergy",
    description: "Deep funnel setup using Meta Pixel tracking, customized retargeting pools, and custom lead generation pathways to scale physical and digital storefront visibility.",
    imageUrl: "https://i.ibb.co/2DTBnpn/Screenshot-2026-07-02-224443.png",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    stats: [
      { label: "Targeting Mode", value: "Lookalike Pools" },
      { label: "Event Analytics", value: "CAPI Linked" },
      { label: "Growth Lift", value: "Consistent Leads" }
    ],
    reportType: "campaign"
  },
  {
    id: "luxavya",
    title: "Luxavya Lifestyle - Fashion SMM",
    client: "Luxavya SMM Campaigns",
    metric: "Elite Brand Engagement & Reach",
    results: "Visual Prestige & Ad Recall",
    description: "Architected high-prestige social media and targeted interest-based marketing. Scaling luxury fashion branding across Kerala, Qatar, and Dubai with elite aesthetic alignment.",
    imageUrl: "https://i.ibb.co/7tcDv92K/Screenshot-2026-06-30-144005.png",
    tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    stats: [
      { label: "Niche Focus", value: "Luxury Lifestyle" },
      { label: "Aesthetics", value: "Prestige Reels" },
      { label: "Geography", value: "Global / GCC" }
    ],
    reportType: "campaign"
  }
];

export default function Certificate() {
  const [certs, setCerts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedReport, setSelectedReport] = useState<any | null>(null);

  useEffect(() => {
    const q = query(collection(db, 'certification'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCerts(items);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, "certification");
    });
    return () => unsubscribe();
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen pt-48 px-8 pb-32 grainy"
    >
      <SEO 
        title="Meta Ads Reports & Certifications | Best SEO Expert in Kerala"
        description="Verified campaign proofs, live Meta Ads reports, and professional marketing certifications. Direct performance metrics by Muhammed Sinan VK."
      />
      
      <div className="space-y-32 relative z-10">
        <div className="space-y-8 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-neon-purple text-[9px] font-bold uppercase tracking-[0.5em]"
          >
            Live Performance Validation
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-serif tracking-tighter text-white leading-[0.85]"
          >
            Proofs & <br />
            <span className="italic text-neon-purple purple-text-glow">Accreditation.</span>
          </motion.h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-slate-400 text-lg font-light leading-relaxed">
               As the <span className="text-white">Best Digital Marketer and Web Developer in Kerala</span>, my methodology is backed by actual revenue, live conversions, and premium verified Meta Ads analytics.
            </p>
          </div>
        </div>

        <div className="glass-2 rounded-[60px] overflow-hidden border border-white/5 shadow-2xl relative group">
          <div className="absolute inset-0 bg-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[100px]" />
          <CinemaReel subtitle="Strategic Partners" />
        </div>

        {/* Live Meta Ads Campaign Reports & Performance Proofs Section */}
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-mono tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase">
                <ShieldCheck size={12} className="animate-pulse" /> Verified Campaign & Web Dev Proofs
              </span>
              <h2 className="text-white text-4xl md:text-5xl font-serif italic tracking-tight">
                Empirical <span className="text-neon-purple">Performance Proofs.</span>
              </h2>
              <p className="text-slate-400 text-sm font-light max-w-xl">
                Real, unedited campaign performance metrics, analytics, and software source code proofs confirming absolute transparent validation. Click any proof to view.
              </p>
            </div>
            <div className="text-slate-500 text-xs font-mono uppercase tracking-widest hidden md:block">
              Empirical ROI & Engineering Evidence
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {campaignReports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-dark-charcoal to-obsidian p-6 shadow-2xl hover:border-neon-purple/20 transition-all duration-500"
              >
                <div className="space-y-6">
                  {/* Image Holder */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/5 bg-midnight/50 cursor-zoom-in"
                       onClick={() => setSelectedReport(report)}>
                    <img 
                      src={report.imageUrl} 
                      alt={report.title} 
                      className="h-full w-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out scale-100 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <span className="text-[10px] text-white/50 font-mono flex items-center gap-1.5">
                        {report.reportType === "code" ? <Zap size={10} className="text-amber-400" /> : <Calendar size={10} />}
                        {report.reportType === "code" ? "Source Code Proof" : "Active Campaign Report"}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all">
                        <Maximize2 size={12} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-start gap-2">
                      <span className={`px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest border ${report.tagColor}`}>
                        {report.metric}
                      </span>
                      <span className="text-neon-purple text-[9px] font-mono font-bold uppercase tracking-widest">
                        {report.results}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif text-white group-hover:text-neon-purple transition-colors duration-300">
                      {report.title}
                    </h3>
                    <p className="text-white/50 text-xs font-light leading-relaxed">
                      {report.description}
                    </p>
                  </div>
                </div>

                {/* Performance stats boxes */}
                <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-3 gap-2">
                  {report.stats.map((stat, sIndex) => (
                    <div key={sIndex} className="bg-white/2 p-3 rounded-xl border border-white/2 text-center space-y-0.5">
                      <p className="text-white/30 text-[8px] font-mono uppercase tracking-wider">{stat.label}</p>
                      <p className="text-white font-medium text-[10px] tracking-tight">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Certification Grid */}
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <h2 className="text-white text-4xl font-serif italic tracking-tight">The Credential <span className="text-neon-purple">Grid.</span></h2>
              <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">Verified by global nodes.</p>
            </div>
          </div>

          <BentoGrid>
            {certs.length > 0 ? certs.map((cert, i) => (
              <BentoCard key={cert.id} className="md:col-span-3 p-0 overflow-hidden group shadow-2xl">
                <div className="aspect-[4/3] relative overflow-hidden">
                   <img 
                    src={cert.imageUrl} 
                    alt={cert.title} 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80" />
                   <div className="absolute bottom-6 left-6 right-6 space-y-2">
                      <div className="flex items-center gap-2 text-neon-purple text-[8px] font-bold uppercase tracking-widest">
                        <Award size={10} /> {cert.issuer}
                      </div>
                      <h4 className="text-white text-lg font-serif italic leading-tight group-hover:text-neon-purple transition-colors">{cert.title}</h4>
                   </div>
                   {cert.link && (
                     <a 
                      href={cert.link} 
                      target="_blank" 
                      className="absolute top-6 right-6 w-10 h-10 glass-2 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-vibrant-indigo hover:text-white hover:scale-110"
                     >
                        <ExternalLink size={14} />
                     </a>
                   )}
                </div>
                <div className="p-6 bg-midnight/40 backdrop-blur-sm border-t border-white/5 space-y-4">
                   <div className="flex justify-between items-center text-silver/40 text-[9px] uppercase tracking-widest font-bold">
                      <span className="flex items-center gap-2"><Calendar size={10} /> {cert.date || 'Active'}</span>
                      <span className="text-vibrant-indigo/50">Verified Node</span>
                   </div>
                </div>
              </BentoCard>
            )) : (
              <div className="md:col-span-12 py-32 text-center glass-2 rounded-3xl border border-white/5">
                <p className="text-silver/20 text-xs uppercase tracking-widest font-bold">Awaiting neural link sync...</p>
              </div>
            )}
          </BentoGrid>
        </div>
      </div>

      {/* Lightbox Modal for Campaigns */}
      <AnimatePresence>
        {selectedReport && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedReport(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 150 }}
              className="relative max-w-5xl w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-dark-charcoal to-obsidian shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedReport(null)}
                className="absolute top-6 right-6 z-10 p-3 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-all duration-300 border border-white/10 hover:border-transparent"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-8 bg-black/40 flex items-center justify-center p-2 relative group min-h-[300px] md:min-h-[500px]">
                  <img 
                    src={selectedReport.imageUrl} 
                    alt={selectedReport.title}
                    className="max-h-[75vh] w-auto object-contain mx-auto rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-6 left-6 bg-black/60 px-4 py-2 rounded-full text-xs text-white/70 font-mono flex items-center gap-2 border border-white/10 backdrop-blur-md">
                    <Zap size={12} className="text-yellow-400" /> High-Resolution Analytics Node
                  </div>
                </div>
                
                <div className="md:col-span-4 p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-neon-purple text-[10px] font-mono font-bold uppercase tracking-widest">
                        {selectedReport.client}
                      </p>
                      <h4 className="text-white text-2xl font-serif italic tracking-tight">
                        {selectedReport.title}
                      </h4>
                    </div>
                    <p className="text-white/60 text-sm font-light leading-relaxed">
                      {selectedReport.description}
                    </p>
                    <div className="space-y-4">
                      <p className="text-xs uppercase font-mono tracking-widest text-slate-400">Key Metrics & Strategy</p>
                      <div className="space-y-3">
                        {selectedReport.stats.map((stat, idx) => (
                          <div key={idx} className="flex justify-between items-center bg-white/5 px-4 py-3 rounded-xl border border-white/5">
                            <span className="text-white/40 text-[10px] uppercase tracking-wider">{stat.label}</span>
                            <span className="text-white font-semibold text-xs">{stat.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.3em]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Verified
                    </div>
                    <button 
                      onClick={() => setSelectedReport(null)}
                      className="px-6 py-2.5 rounded-full text-xs bg-white text-black font-semibold hover:bg-neon-purple hover:text-white transition-all duration-300"
                    >
                      Close Report
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
