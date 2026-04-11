import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";
import SEO from "../components/SEO";
import { PROJECTS } from "../constants/data";
import { getImageSrcSet } from "../lib/imageUtils";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen pt-32 md:pt-48 px-6 sm:px-8 pb-32 grainy"
    >
      <SEO 
        title="Portfolio of Selected Works | Freelance Digital Marketer in Kerala"
        description="Explore the selected digital marketing projects by Marketer Sinan VK, the best freelance digital marketer in Kerala. Proven results in Meta Ads and Brand Growth."
      />
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-4 md:space-y-6">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-neon-green text-[9px] font-bold uppercase tracking-[0.5em]"
            >
              The Archive
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-9xl font-serif tracking-tighter text-white leading-[1.1] md:leading-[0.85]"
            >
              Selected <br />
              <span className="italic text-neon-green">Works.</span>
            </motion.h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-[4/5] glass-2 rounded-[24px] overflow-hidden border border-white/5 hover:border-neon-green/30 transition-all duration-700 shadow-2xl cursor-pointer hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(57,255,20,0.1)] bg-white/5"
            >
              <img 
                src={project.image} 
                srcSet={getImageSrcSet(project.image)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={`${project.title} - Freelance Digital Marketer in Kerala Project`}
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-[2000ms] scale-110 group-hover:scale-100"
                referrerPolicy="no-referrer"
                loading="lazy"
                width="400"
                height="500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent opacity-80" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                <div className="space-y-3">
                  <p className="text-neon-green text-[9px] font-bold uppercase tracking-[0.5em]">{project.category}</p>
                  <h3 className="text-white text-2xl font-serif italic tracking-wide">{project.title}</h3>
                  <p className="text-silver/40 text-xs font-light leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 tracking-wide">
                    {project.description}
                  </p>
                </div>
                <button className="absolute top-8 right-8 w-12 h-12 glass-2 border border-white/10 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-neon-green group-hover:text-midnight transition-all duration-700 scale-50 group-hover:scale-100 shadow-xl">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-midnight/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="max-w-4xl w-full glass-2 rounded-[40px] border border-neon-green/20 relative overflow-hidden flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-50 text-white/40 hover:text-white transition-colors bg-midnight/50 p-2 rounded-full backdrop-blur-md"
              >
                <X size={24} />
              </button>
              
              <div className="w-full md:w-1/2 aspect-square md:aspect-auto relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-midnight/50 hidden md:block" />
              </div>

              <div className="w-full md:w-1/2 p-10 md:p-16 space-y-8 overflow-y-auto max-h-[60vh] md:max-h-auto">
                <div className="space-y-4">
                  <p className="text-neon-green text-[9px] font-bold uppercase tracking-[0.5em]">{selectedProject.category}</p>
                  <h2 className="text-4xl md:text-5xl font-serif italic text-white">{selectedProject.title}</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-silver/30 text-[10px] uppercase tracking-widest font-bold">The Challenge</p>
                    <p className="text-silver/60 text-base font-light leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-neon-green text-[10px] uppercase tracking-widest font-bold">The Result (Case Study)</p>
                    <p className="text-white/80 text-lg font-light leading-relaxed italic">
                      {selectedProject.caseStudy}
                    </p>
                  </div>
                </div>
                
                <a 
                  href="https://marketersinanvk.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-neon-green text-[10px] font-bold uppercase tracking-[0.3em] hover:gap-5 transition-all"
                >
                  View Live Project <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
