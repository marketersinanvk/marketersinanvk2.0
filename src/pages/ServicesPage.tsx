import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Code, 
  Search, 
  Share2, 
  TrendingUp, 
  Video, 
  Layout, 
  Mail, 
  PenTool, 
  Target, 
  BarChart3,
  ArrowRight,
  MessageCircle,
  Zap,
  Sparkles,
  MousePointerClick,
  Layers,
  Cpu,
  X,
  Globe,
  ShoppingCart,
  CheckCircle2,
  Terminal,
  Activity,
  Award
} from "lucide-react";
import SEO from "../components/SEO";
import FAQ from "../components/FAQ";
import { BentoGrid, BentoCard } from "../components/BentoGrid";
import { NeuralBackground } from "../components/NeuralBackground";

export default function ServicesPage() {
  const [selectedCase, setSelectedCase] = useState<any | null>(null);
  const whatsappNumber = "918590181381";
  
  const handleConsultation = (serviceName: string) => {
    const message = encodeURIComponent(`Hello Sinan, I am interested in your ${serviceName} service. Can we discuss?`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const services = [
    {
      title: "Freelance Digital Marketing",
      description: "Holistic brand growth engineered through data. We align your brand with current market trends in Kerala to drive sustainable revenue.",
      icon: <TrendingUp className="w-8 h-8" />,
      features: ["Content Strategy", "Performance Ads", "Growth Hacking"],
      className: "md:col-span-6"
    },
    {
      title: "Local SEO Expert",
      description: "Dominating search results for local businesses. We ensure you are the first name people see in Palakkad and across Kerala.",
      icon: <Search className="w-8 h-8" />,
      features: ["GMB Optimization", "Local Citations", "Hyper-local Content"],
      className: "md:col-span-3"
    },
    {
      title: "SMM Expert",
      description: "High-impact social media management. We craft narratives that resonate, engage, and convert your followers into loyal customers.",
      icon: <Share2 className="w-8 h-8" />,
      features: ["Reels Strategy", "Community Mgmt", "Viral Design"],
      className: "md:col-span-3"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Digisinans.in",
      stat: "Rank #1",
      keyword: "Best SEO Expert in Kerala",
      desc: "Architected a full-scale SEO dominance strategy for Digisinans, utilizing the Best AI Digital Marketing Agency framework to capture high-intent search nodes.",
      icon: <Award className="text-vibrant-indigo" />
    },
    {
      id: 2,
      title: "Gadjenix Core",
      stat: "Full Stack",
      keyword: "Web Development Specialist Kerala",
      desc: "A comprehensive digital transformation ensuring seamless user experience and consistent brand messaging via Local SEO Services in Palakkad.",
      icon: <Layers className="text-vibrant-indigo" />
    },
    {
      id: 3,
      title: "Luxavya Lifestyle",
      stat: "SMM Elite",
      keyword: "Professional SMM Operations",
      desc: "Focusing on Professional SMM Operations for high-end fashion branding, engineering a visual narrative that converted luxury curiosity into loyalty.",
      icon: <TrendingUp className="text-vibrant-indigo" />
    },
    {
      id: 4,
      title: "Minco Kids Growth",
      stat: "Market Leader",
      keyword: "Freelance Digital Marketer",
      desc: "Strategic SMM for children's wear, leveraging high-engagement video storytelling and engagement scaling as a Freelance Digital Marketer in Kerala.",
      icon: <Cpu className="text-vibrant-indigo" />
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen pt-32 md:pt-48 px-6 sm:px-8 pb-32 relative"
    >
      <NeuralBackground />
      
      <SEO 
        title="Elite Services | Freelance Digital Marketer in Kerala | Muhammed Sinan VK"
        description="High-converting digital services: Freelance Digital Marketing, Local SEO Palakkad, and SMM Expert Kerala. Strategic growth for the 0.1% of brands."
      />

      <div className="space-y-24 relative z-10">
        {/* Hero Section */}
        <div className="space-y-6">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-vibrant-indigo text-[9px] font-bold uppercase tracking-[0.5em]"
          >
            Capabilities Portfolio // 2026
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl lg:text-7xl font-serif tracking-tighter text-white leading-tight max-w-full uppercase"
          >
            Digital <br />
            <span className="italic text-vibrant-indigo text-indigo-glow">Dominance.</span>
          </motion.h1>
          <p className="text-silver/50 text-xl font-light leading-relaxed max-w-2xl">
            Muhammed Sinan VK delivers elite-level growth through a synthesis of medical-grade precision and algorithmic mastery. As the <span className="text-white font-medium">Freelance Digital Marketer in Kerala</span>, my mission is your market capture.
          </p>
        </div>

        {/* Core Services Bento */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-white font-serif italic text-3xl">The Service Spectrum</h2>
            <div className="h-[1px] flex-1 bg-white/5" />
          </div>
          <BentoGrid>
            {services.map((service, i) => (
              <BentoCard key={i} className={`${service.className} p-10 md:p-12 space-y-8 group hover:bg-vibrant-indigo/[0.02] transition-all`}>
                <div className="w-14 h-14 bg-vibrant-indigo/10 rounded-2xl flex items-center justify-center text-vibrant-indigo group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif italic text-white tracking-tight">{service.title}</h3>
                  <p className="text-silver/40 leading-relaxed font-light">{service.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[10px] text-silver/20 font-bold uppercase tracking-widest">
                      <CheckCircle2 size={12} className="text-vibrant-indigo/40" />
                      {feature}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => handleConsultation(service.title)}
                  className="w-full py-4 glass-2 border border-white/5 text-silver/40 text-[10px] font-bold uppercase tracking-widest rounded-xl group-hover:bg-vibrant-indigo group-hover:text-white group-hover:border-vibrant-indigo transition-all duration-500"
                >
                  Initiate Strategy
                </button>
              </BentoCard>
            ))}
          </BentoGrid>
        </section>

        {/* Pricing & Process Section */}
        <section className="space-y-12">
          <BentoGrid>
            {/* Starter Growth Plan */}
            <BentoCard className="md:col-span-6 p-12 bg-gradient-to-br from-vibrant-indigo/10 to-transparent border-vibrant-indigo/20 shadow-[0_0_50px_rgba(99,102,241,0.1)] flex flex-col justify-between">
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-vibrant-indigo/20 text-vibrant-indigo text-[8px] font-bold uppercase tracking-[0.3em]">Special: Kerala Business Launch Offer</span>
                    <h3 className="text-4xl md:text-5xl font-serif italic text-white tracking-tight">Starter Growth Plan</h3>
                  </div>
                  <Zap className="text-vibrant-indigo animate-pulse" />
                </div>
                <p className="text-silver/50 text-xl font-light leading-relaxed max-w-md">
                  A precision-engineered entry point for Kerala startups looking to establish an immediate competitive edge. High ROI, zero waste.
                </p>
              </div>
              
              <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-end md:items-center justify-between gap-8">
                <div className="flex items-end gap-4">
                  <p className="text-white text-6xl font-serif italic leading-none">₹3,500</p>
                  <div className="flex flex-col">
                    <p className="text-silver/20 text-xs line-through mb-1">Was ₹5,000</p>
                    <p className="text-vibrant-indigo text-[9px] font-bold uppercase tracking-widest whitespace-nowrap">Limited Slot Deployment</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleConsultation("Starter Growth Plan")}
                  className="px-10 py-5 bg-vibrant-indigo text-white font-bold rounded-2xl hover:bg-white hover:text-midnight transition-all text-[11px] uppercase tracking-wider shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                >
                  Claim My Slot
                </button>
              </div>
            </BentoCard>

            {/* The Sinan Method */}
            <BentoCard className="md:col-span-6 p-12 space-y-10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Activity size={150} />
               </div>
               <div className="space-y-4 relative z-10">
                 <p className="text-vibrant-indigo text-[9px] font-bold uppercase tracking-[0.5em]">The Operational Protocol</p>
                 <h3 className="text-5xl font-serif italic text-white tracking-tighter">The Sinan <span className="text-vibrant-indigo">Method.</span></h3>
               </div>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                  {[
                    { step: "01", label: "Analysis", desc: "Surgical Data Audit" },
                    { step: "02", label: "Strategy", desc: "Neural Blueprint" },
                    { step: "03", label: "Execution", desc: "Rapid Deployment" },
                    { step: "04", label: "Success", desc: "Market Domination" }
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className="text-vibrant-indigo/40 font-mono text-sm tracking-widest">{item.step}</div>
                      <div className="space-y-1">
                        <p className="text-white font-serif italic text-xl whitespace-nowrap">{item.label}</p>
                        <p className="text-silver/20 text-[8px] uppercase tracking-widest font-bold">{item.desc}</p>
                      </div>
                    </div>
                  ))}
               </div>
               <div className="pt-8 border-t border-white/5 text-silver/30 text-[10px] font-light italic relative z-10">
                 "Average results are a failure. We architect outliers."
               </div>
            </BentoCard>
          </BentoGrid>
        </section>

        {/* Tech Stack Card */}
        <section className="space-y-12">
          <BentoGrid>
            <BentoCard className="md:col-span-12 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12 bg-white/[0.01]">
              <div className="space-y-4 max-w-sm text-center md:text-left">
                <Terminal className="text-vibrant-indigo mx-auto md:mx-0" size={24} />
                <h3 className="text-3xl font-serif italic text-white">Technological Arsenal</h3>
                <p className="text-silver/40 text-sm leading-relaxed">
                  Leveraging an elite-tier tech stack to ensure your data is accurate and your site is optimized for the next generation of web search.
                </p>
              </div>
              <div className="flex-1 w-full overflow-hidden">
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50 hover:opacity-100 transition-opacity duration-1000">
                  {["Google Search Console", "GA4", "Semrush", "Premiere Pro", "Next.js"].map((tech, i) => (
                    <div key={i} className="flex flex-col items-center gap-4 group">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center grayscale group-hover:grayscale-0 group-hover:border-vibrant-indigo/40 transition-all duration-500">
                        <Cpu className="text-silver/20 group-hover:text-vibrant-indigo transition-colors" />
                      </div>
                      <span className="text-[9px] font-bold text-silver/20 group-hover:text-white uppercase tracking-widest transition-colors">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BentoCard>
          </BentoGrid>
        </section>

        {/* Case Studies */}
        <section className="space-y-16 overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
             <div className="space-y-4 flex flex-col items-start text-left">
                <p className="text-vibrant-indigo text-[9px] font-bold uppercase tracking-[0.5em]">Evidence Protocol</p>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif text-white tracking-tighter uppercase leading-tight max-w-full">Proven <span className="text-vibrant-indigo text-indigo-glow">Success.</span></h2>
             </div>
             <p className="text-silver/30 text-xs font-mono tracking-widest">( Real Brands / Real ROI )</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {caseStudies.map((item, idx) => (
              <BentoCard key={idx} className="p-10 space-y-6 hover:bg-white/[0.01] transition-all cursor-pointer group h-full md:col-span-1 lg:col-span-1" onClick={() => setSelectedCase(item)}>
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-xl bg-vibrant-indigo/10 flex items-center justify-center text-vibrant-indigo">
                    {item.id === 1 ? <Search size={20} /> : item.id === 2 ? <Layers size={20} /> : item.id === 3 ? <TrendingUp size={20} /> : <Cpu size={20} />}
                  </div>
                  <span className="text-[10px] font-bold text-vibrant-indigo uppercase tracking-widest border border-vibrant-indigo/20 px-3 py-1 rounded-full group-hover:bg-vibrant-indigo group-hover:text-white transition-colors">{item.stat}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif italic text-white">{item.title}</h3>
                  <p className="text-vibrant-indigo/60 text-[10px] font-bold uppercase tracking-[0.2em]">{item.keyword}</p>
                </div>
                <p className="text-silver/40 text-sm leading-relaxed line-clamp-2">{item.desc}</p>
                <div className="pt-4 flex items-center gap-2 text-silver/20 text-[9px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                  View Case Insight <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </BentoCard>
            ))}
          </div>
        </section>

        {/* FAQ Node */}
        <section className="pt-12">
          <FAQ />
        </section>

        {/* Final CTA Node */}
        <section className="pt-24 border-t border-white/5 text-center space-y-12 flex flex-col items-center">
           <div className="space-y-4">
              <p className="text-vibrant-indigo text-[9px] font-bold uppercase tracking-[0.5em]">Next Operation Init</p>
              <h4 className="text-3xl md:text-5xl lg:text-7xl font-serif text-white tracking-widest leading-tight max-w-full uppercase">
                Scale Your <span className="text-vibrant-indigo text-indigo-glow">Brand Node.</span>
              </h4>
           </div>
           <button 
              onClick={() => handleConsultation("General Optimization")}
              className="px-16 py-6 bg-white text-midnight font-bold rounded-2xl hover:bg-vibrant-indigo hover:text-white transition-all text-sm uppercase tracking-[0.3em] shadow-[0_20px_40px_rgba(255,255,255,0.05)]"
           >
              Deploy Growth Phase
           </button>
           <p className="text-silver/20 text-[8px] uppercase tracking-[0.5em] font-sans">
             Best SEO Expert in Kerala // Freelance Digital Marketer // Palakkad Authority
           </p>
        </section>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-midnight/90 backdrop-blur-xl"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="max-w-2xl w-full glass-2 p-10 md:p-16 rounded-[40px] border border-vibrant-indigo/20 relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCase(null)}
                className="absolute top-8 right-8 text-silver/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="space-y-8 text-center sm:text-left">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <span className="text-vibrant-indigo text-[9px] font-bold uppercase tracking-[0.5em]">Confidential Insight</span>
                    <span className="px-3 py-1 bg-vibrant-indigo/10 border border-vibrant-indigo/20 text-vibrant-indigo text-[8px] font-bold uppercase tracking-widest rounded-full">{selectedCase.stat}</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-serif italic text-white">{selectedCase.title}</h2>
                  <p className="text-vibrant-indigo text-xs font-bold uppercase tracking-widest">{selectedCase.keyword}</p>
                </div>
                
                <p className="text-silver/60 text-lg md:text-xl font-light leading-relaxed">
                  {selectedCase.desc}
                </p>

                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
                  <p className="text-silver/40 text-xs font-mono uppercase tracking-widest">Strategic Outcome</p>
                  <p className="text-white text-lg font-light leading-relaxed italic">
                    "This brand node achieved calculated dominance through structural SEO and neural content mapping, resulting in a sustained 1200% increase in organic reach."
                  </p>
                </div>
                
                <button 
                  onClick={() => handleConsultation(`Case Study: ${selectedCase.title}`)}
                  className="w-full py-5 bg-vibrant-indigo text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(99,102,241,0.3)]"
                >
                  Request Similar Roadmap <MessageCircle size={14} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
