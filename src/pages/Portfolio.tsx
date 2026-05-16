import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, ExternalLink, Filter, Search, Award, Layers, TrendingUp, Video } from "lucide-react";
import SEO from "../components/SEO";
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { BentoGrid, BentoCard } from "../components/BentoGrid";
import { NeuralBackground } from "../components/NeuralBackground";

// Premium Success Stories Data
const successStories = [
  {
    id: "digisinans-seo",
    title: "Project Digisinans",
    result: "Google Page #1 Authority",
    category: "SEO",
    imageUrl: "https://i.ibb.co/s7k15Sm/Screenshot-2026-05-16-224324.png",
    description: "Architected keyword clusters for Digisinans using an AI framework. Captured 250+ high-intent keywords, establishing market authority in the Kerala digital commerce vertical.",
    tags: ["Best SEO Expert", "SEO Specialist in Kerala", "AI Digital Marketing"],
    link: "https://digisinans.in",
    isCaseStudy: true,
    meta: "Case Study: Digisinans SEO Victory"
  },
  {
    id: "gadjenix-fullstack",
    title: "Gadjenix Core",
    result: "Full-Stack Brand Growth",
    category: "Web Development",
    imageUrl: "https://i.ibb.co/fmhc291/Screenshot-2026-05-16-224940.png",
    description: "Managed custom web development and technical SEO for Gadjenix. Optimized for local search in Palakkad, driving a significant increase in leads through a high-performance ecosystem.",
    tags: ["Freelance Marketer", "Web Development Specialist", "Local SEO Palakkad"],
    link: "https://gadjenix-mr95.vercel.app/",
    isCaseStudy: true,
    meta: "Gadjenix Full-Scale Management"
  },
  {
    id: "luxavya-smm",
    title: "Luxavya Lifestyle",
    result: "Fashion SMM Prestige",
    category: "SMM",
    imageUrl: "https://i.ibb.co/dsHxr4xV/Screenshot-2026-05-16-224538.png",
    description: "Conducted professional SMM operations for Luxavya. Engineered a visual narrative for high-end fashion branding, converting interest into loyal customer engagement.",
    tags: ["SMM Expert Kerala", "Content Marketing Expert", "Luxury Branding"],
    link: "https://www.luxavya.com/",
    isCaseStudy: true,
    meta: "Luxavya Professional SMM Operations"
  },
  {
    id: "morvex-perfumes",
    title: "Morvex Perfumes",
    result: "Luxury Branding & E-com Expansion",
    category: "SMM",
    imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop",
    description: "Architected a premium visual identity for Morvex. Engineered a conversion-optimized e-commerce landscape that captures the essence of luxury fragrances for the global market.",
    tags: ["Brand Strategy", "Luxury Marketing", "E-commerce Growth"],
    isCaseStudy: true,
    meta: "Morvex Premium Perfume Branding"
  },
  {
    id: "jamalullail-node",
    title: "Jamalullail Academy",
    result: "Educational Infrastructure & SEO Node",
    category: "Web Development",
    imageUrl: "https://i.ibb.co/d4Jt8R8r/Screenshot-2026-05-16-224812.png",
    description: "Engineered a specialized educational platform for Islamic courses. Integrated a seamless course retrieval system with deep SEO integration to serve a global spiritual audience.",
    tags: ["Educational Platform", "Scalable Web Dev", "SEO Architecture"],
    link: "https://jamalullail.vercel.app/",
    isCaseStudy: true,
    meta: "Jamalullail: Educational Infrastructure"
  },
  {
    id: "mincokids-smm",
    title: "Minco Kids Growth",
    result: "High-Engagement Scaling",
    category: "SMM",
    imageUrl: "https://i.ibb.co/k2GvTWj4/Screenshot-2026-05-16-224448.png",
    description: "Implemented a community-first SMM protocol for children's wear. Leveraged video storytelling to achieve high engagement and market leadership.",
    tags: ["Digital Growth Strategist", "AI-Driven Marketing Consultant", "Reels Storytelling"],
    link: "https://www.mincokids.com/",
    isCaseStudy: true,
    meta: "Minco Kids High-Engagement SMM"
  }
];

const categories = ["All", "SEO", "Web Development", "SMM", "Video Editing"];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [dynamicProjects, setDynamicProjects] = useState<any[]>([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDynamicProjects(items);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Merge static success stories with dynamic projects, avoiding duplicates by title/id if needed
  const allProjects = [...successStories, ...dynamicProjects.filter(dp => !successStories.some(ss => ss.title === dp.title))];
  const filteredProjects = filter === "All" ? allProjects : allProjects.filter(p => p.category === filter);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen pt-32 md:pt-48 px-6 sm:px-8 pb-32 relative overflow-hidden"
    >
      <NeuralBackground />
      
      <SEO 
        title="Proven Results & Case Studies | Best SEO Expert in Kerala | MSVK"
        description="Explore success stories like Digisinans and Gadjenix. Premium portfolio showcasing SEO victories, web development, and SMM growth by Sinan VK."
      />
      
      <div className="space-y-16 md:space-y-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="space-y-4 md:space-y-6 flex flex-col items-start text-left w-full max-w-2xl px-0 ml-0">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-accent-purple text-[9px] font-bold uppercase tracking-[0.5em]"
            >
              The Evidence Protocol // 2026 Strategy
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl lg:text-7xl font-serif tracking-tighter text-white leading-tight max-w-full uppercase"
            >
              Proven <br />
              <span className="italic text-accent-purple">Success.</span>
            </motion.h1>
            <p className="text-white/50 text-xl font-light leading-relaxed">
              My portfolio is a record of successful market captures, transitioning brands from obscurity to page-one search dominance with proven strategies.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 p-1 bg-dark-charcoal border border-white/5 rounded-full shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 md:px-8 py-2 md:py-3 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all ${
                    filter === cat 
                    ? "bg-neon-purple text-white shadow-lg" 
                    : "text-white/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading && dynamicProjects.length === 0 && (
          <div className="h-96 flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-neon-purple/20 border-t-neon-purple rounded-full animate-spin" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full overflow-hidden">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <BentoCard
                key={project.id}
                delay={i * 0.1}
                onClick={() => setSelectedProject(project)}
                className={`overflow-hidden group flex flex-col justify-end h-full min-h-[450px] border-white/5 transition-all duration-700 bg-dark-charcoal shadow-xl hover:shadow-2xl ${
                  project.isCaseStudy ? "md:col-span-1 lg:col-span-1" : "md:col-span-1 lg:col-span-1"
                }`}
              >
                <div className="absolute inset-0">
                  <img 
                    src={project.imageUrl || project.image || `https://picsum.photos/seed/${project.id}/800/1000`} 
                    alt={`${project.title} - ${project.meta || 'Freelance Digital Marketer in Kerala Project'}`}
                    className="w-full h-full object-cover grayscale opacity-10 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-[2000ms] scale-110 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${project.title}/800/1000`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal via-dark-charcoal/40 to-transparent" />
                </div>
                
                <div className="relative z-10 p-8 md:p-10 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <p className="text-neon-purple text-[8px] font-bold uppercase tracking-[0.4em]">{project.category}</p>
                      <h3 className="text-white text-3xl font-serif italic tracking-tighter leading-none">{project.title}</h3>
                    </div>
                    {project.isCaseStudy && (
                      <span className="px-3 py-1 bg-neon-purple/5 border border-neon-purple/10 text-neon-purple text-[7px] font-bold uppercase tracking-widest rounded-full">Case Study</span>
                    )}
                  </div>
                  
                  <div className="space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <p className="text-accent-purple/80 text-lg font-medium tracking-tight italic">{project.result}</p>
                    <p className="text-white/40 text-[13px] font-light leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="pt-4 flex items-center justify-between">
                      <button className="text-white text-[9px] font-bold uppercase tracking-[0.3em] flex items-center gap-2 group/btn">
                        View Project <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </button>
                      <div className="flex gap-2">
                        {project.tags?.slice(0, 1).map((tag: string) => (
                          <span key={tag} className="text-[7px] text-white/20 uppercase tracking-[0.2em]">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </BentoCard>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && !loading && (
          <div className="h-96 flex flex-col items-center justify-center space-y-4">
             <Filter className="text-white/10" size={64} />
             <p className="text-white/40 text-sm tracking-widest uppercase">No projects captured in this sector.</p>
          </div>
        )}
      </div>

      {/* Project Case Study Detailed Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-obsidian/60 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="max-w-5xl w-full bg-dark-charcoal rounded-[40px] border border-white/5 relative overflow-hidden flex flex-col lg:flex-row shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-50 text-white/40 hover:text-white transition-colors bg-white/5 p-2 rounded-full backdrop-blur-md border border-white/5"
              >
                <X size={24} />
              </button>
              
              <div className="w-full lg:w-1/2 min-h-[300px] lg:h-auto relative">
                <img 
                  src={selectedProject.imageUrl || selectedProject.image || `https://picsum.photos/seed/${selectedProject.id}/1000/1200`} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover grayscale brightness-110"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${selectedProject.title}/1000/1200`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-charcoal/80 hidden lg:block" />
                <div className="absolute bottom-10 left-10 space-y-2">
                   <p className="text-neon-purple text-xs font-bold uppercase tracking-widest">{selectedProject.category}</p>
                   <h2 className="text-5xl font-serif italic text-white tracking-tighter leading-none">{selectedProject.title}</h2>
                </div>
              </div>

              <div className="w-full lg:w-1/2 p-10 md:p-16 space-y-10 overflow-y-auto max-h-[70vh] lg:max-h-[85vh]">
                <div className="space-y-4">
                  <span className="inline-block py-1 px-3 rounded-full bg-neon-purple/5 text-neon-purple text-[8px] font-bold uppercase tracking-[0.3em]">Operational Report</span>
                  <div className="flex items-center gap-4 text-3xl font-serif italic text-white leading-tight">
                    <Award className="text-neon-purple" size={32} />
                    {selectedProject.result}
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <p className="text-white/20 text-[10px] uppercase tracking-widest font-bold border-b border-white/5 pb-2">Strategic Narrative</p>
                    <p className="text-white/60 text-lg font-light leading-relaxed italic">
                      {selectedProject.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <p className="text-white/20 text-[9px] uppercase tracking-widest font-bold">Client</p>
                      <p className="text-white font-medium text-sm">{selectedProject.title}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white/20 text-[9px] uppercase tracking-widest font-bold">Nodes Secured</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags?.map((tag: string) => (
                          <span key={tag} className="text-[10px] text-white/60">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-10 flex flex-col sm:flex-row gap-4">
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 py-4 bg-neon-purple text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-muted-purple transition-all flex items-center justify-center gap-3 shadow-xl"
                    >
                      Audit Live Node <ExternalLink size={14} />
                    </a>
                  )}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 py-4 bg-white/5 border border-white/10 text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-white/10 transition-all shadow-sm"
                  >
                    Return to Case Archive
                  </button>
                </div>

                <div className="pt-8 text-center sm:text-left">
                  <p className="text-white/20 text-[8px] uppercase tracking-[0.5em] font-sans">
                    Best SEO Expert in Kerala // Freelance Digital Marketer // MSVK Archive
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
