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
    imageUrl: "https://res.cloudinary.com/dam0azywj/image/upload/q_auto,f_auto/v1/marketersinan/digisinans-screenshot.jpg",
    description: "As the Best SEO Expert in Kerala, I architected a multi-layered keyword cluster maps for Digisinans. We utilized the Best AI Digital Marketing Agency framework to capture 250+ high-intent keywords, outperforming legacy competitors in the Kerala digital commerce vertical.",
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
    imageUrl: "https://res.cloudinary.com/dam0azywj/image/upload/q_auto,f_auto/v1/marketersinan/gadjenix-display.jpg",
    description: "Managed by an expert Freelance Digital Marketer in Kerala, this project spanned Custom Web Development and technical SEO. As a Web Development Specialist Kerala, I architected a high-performance ecosystem optimized for Local SEO Services in Palakkad, driving a 300% increase in leads.",
    tags: ["Freelance Marketer", "Web Development Specialist", "Local SEO Palakkad"],
    link: "https://gadjenix.com",
    isCaseStudy: true,
    meta: "Gadjenix Full-Scale Management"
  },
  {
    id: "luxavya-smm",
    title: "Luxavya Lifestyle",
    result: "Fashion SMM Prestige",
    category: "SMM",
    imageUrl: "https://res.cloudinary.com/dam0azywj/image/upload/q_auto,f_auto/v1/marketersinan/fashion-smm.jpg",
    description: "Focusing on Professional SMM Operations for high-end fashion/lifestyle. In my capacity as an SMM Expert Kerala and Content Marketing Expert, I engineered a visual narrative for Luxavya's 'Lepro Plus' branding that converted high-net-worth curiosity into loyalty.",
    tags: ["SMM Expert Kerala", "Content Marketing Expert", "Luxury Branding"],
    isCaseStudy: true,
    meta: "Luxavya Professional SMM Operations"
  },
  {
    id: "mincokids-smm",
    title: "Minco Kids Growth",
    result: "High-Engagement scaling",
    category: "SMM",
    imageUrl: "https://picsum.photos/seed/mincokids-smm/800/1000",
    description: "Strategic SMM for children's wear. As a Digital Growth Strategist and AI-Driven Marketing Consultant, I implemented a community-first content protocol that leveraged high-engagement video storytelling for market leadership.",
    tags: ["Digital Growth Strategist", "AI-Driven Marketing Consultant", "Reels Storytelling"],
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
          <div className="space-y-4 md:space-y-6 flex flex-col items-start">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-vibrant-indigo text-[9px] font-bold uppercase tracking-[0.5em]"
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
              <span className="italic text-vibrant-indigo text-indigo-glow">Success.</span>
            </motion.h1>
            <p className="text-silver/50 text-xl font-light leading-relaxed max-w-2xl">
              As the <span className="text-white font-medium">Best SEO Expert in Kerala</span>, my portfolio is more than a list—it's a record of market captures. We transition brands from obscurity to page-one dominance.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 p-1 glass-2 rounded-full border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 md:px-8 py-2 md:py-3 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? "bg-vibrant-indigo text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]" 
                    : "text-silver/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading && dynamicProjects.length === 0 && (
          <div className="h-96 flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-vibrant-indigo/20 border-t-vibrant-indigo rounded-full animate-spin" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full overflow-hidden">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <BentoCard
                key={project.id}
                delay={i * 0.1}
                onClick={() => setSelectedProject(project)}
                className={`overflow-hidden group flex flex-col justify-end h-full min-h-[450px] border-white/5 transition-all duration-700 bg-white/[0.01] ${
                  project.isCaseStudy ? "md:col-span-1 lg:col-span-1" : "md:col-span-1 lg:col-span-1"
                }`}
              >
                <div className="absolute inset-0">
                  <img 
                    src={project.imageUrl || project.image || `https://picsum.photos/seed/${project.id}/800/1000`} 
                    alt={`${project.title} - ${project.meta || 'Freelance Digital Marketer in Kerala Project'}`}
                    className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-[2000ms] scale-110 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${project.title}/800/1000`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent" />
                </div>
                
                <div className="relative z-10 p-8 md:p-10 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <p className="text-vibrant-indigo text-[8px] font-bold uppercase tracking-[0.4em]">{project.category}</p>
                      <h3 className="text-white text-3xl font-serif italic tracking-tighter leading-none">{project.title}</h3>
                    </div>
                    {project.isCaseStudy && (
                      <span className="px-3 py-1 bg-vibrant-indigo/10 border border-vibrant-indigo/20 text-vibrant-indigo text-[7px] font-bold uppercase tracking-widest rounded-full">Case Study</span>
                    )}
                  </div>
                  
                  <div className="space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <p className="text-vibrant-indigo/80 text-lg font-medium tracking-tight italic">{project.result}</p>
                    <p className="text-silver/40 text-[13px] font-light leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="pt-4 flex items-center justify-between">
                      <button className="text-white text-[9px] font-bold uppercase tracking-[0.3em] flex items-center gap-2 group/btn">
                        View Project <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </button>
                      <div className="flex gap-2">
                        {project.tags?.slice(0, 1).map((tag: string) => (
                          <span key={tag} className="text-[7px] text-silver/20 uppercase tracking-[0.2em]">{tag}</span>
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
             <Filter className="text-silver/10" size={64} />
             <p className="text-silver/40 text-sm tracking-widest uppercase">No projects captured in this sector.</p>
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-midnight/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="max-w-5xl w-full glass-2 rounded-[40px] border border-vibrant-indigo/20 relative overflow-hidden flex flex-col lg:flex-row shadow-[0_0_100px_rgba(99,102,241,0.1)]"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-50 text-white/40 hover:text-white transition-colors bg-midnight/50 p-2 rounded-full backdrop-blur-md"
              >
                <X size={24} />
              </button>
              
              <div className="w-full lg:w-1/2 min-h-[300px] lg:h-auto relative">
                <img 
                  src={selectedProject.imageUrl || selectedProject.image || `https://picsum.photos/seed/${selectedProject.id}/1000/1200`} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${selectedProject.title}/1000/1200`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-midnight/80 hidden lg:block" />
                <div className="absolute bottom-10 left-10 space-y-2">
                   <p className="text-vibrant-indigo text-xs font-bold uppercase tracking-widest">{selectedProject.category}</p>
                   <h2 className="text-5xl font-serif italic text-white tracking-tighter leading-none">{selectedProject.title}</h2>
                </div>
              </div>

              <div className="w-full lg:w-1/2 p-10 md:p-16 space-y-10 overflow-y-auto max-h-[70vh] lg:max-h-[85vh]">
                <div className="space-y-4">
                  <span className="inline-block py-1 px-3 rounded-full bg-vibrant-indigo/10 text-vibrant-indigo text-[8px] font-bold uppercase tracking-[0.3em]">Operational Report</span>
                  <div className="flex items-center gap-4 text-3xl font-serif italic text-white leading-tight">
                    <Award className="text-vibrant-indigo" size={32} />
                    {selectedProject.result}
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <p className="text-silver/20 text-[10px] uppercase tracking-widest font-bold border-b border-white/5 pb-2">Strategic Narrative</p>
                    <p className="text-silver/60 text-lg font-light leading-relaxed italic">
                      {selectedProject.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <p className="text-silver/20 text-[9px] uppercase tracking-widest font-bold">Client</p>
                      <p className="text-white font-medium text-sm">{selectedProject.title}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-silver/20 text-[9px] uppercase tracking-widest font-bold">Nodes Secured</p>
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
                      className="flex-1 py-4 bg-vibrant-indigo text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-white hover:text-midnight transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(99,102,241,0.2)]"
                    >
                      Audit Live Node <ExternalLink size={14} />
                    </a>
                  )}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 py-4 glass-2 border border-white/10 text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-white/5 transition-all"
                  >
                    Return to Case Archive
                  </button>
                </div>

                <div className="pt-8 text-center sm:text-left">
                  <p className="text-silver/20 text-[8px] uppercase tracking-[0.5em] font-sans">
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
