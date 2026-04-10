import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../lib/firebase";
import SEO from "../components/SEO";

export default function Portfolio() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "portfolio"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(items);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen pt-32 md:pt-48 px-6 sm:px-8 pb-32 grainy"
    >
      <SEO 
        title="Portfolio of Selected Works | Marketer Sinan VK"
        description="Explore the selected digital marketing projects by Muhammed Sinan VK. Case studies including MincoKids, KL Gadgetix, and Luxavya. Proven results in Meta Ads and Brand Growth."
      />
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-4 md:space-y-6">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-neon-blue text-[9px] font-bold uppercase tracking-[0.5em]"
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
              <span className="italic text-neon-blue">Works.</span>
            </motion.h1>
          </div>
        </div>

        {loading && projects.length === 0 ? (
          <div className="flex items-center justify-center py-40">
            <div className="w-12 h-12 border-2 border-neon-blue/20 border-t-neon-blue rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[4/3] glass-2 rounded-[40px] md:rounded-[60px] overflow-hidden border border-white/5 hover:border-neon-blue/30 transition-all duration-700 shadow-2xl"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-[2000ms] scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent opacity-80" />
                
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="space-y-3 md:space-y-4">
                    <p className="text-neon-blue text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em]">{project.category}</p>
                    <h3 className="text-white text-3xl md:text-4xl font-serif italic">{project.title}</h3>
                    <p className="text-silver/50 text-xs md:text-sm font-light leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      {project.description || project.desc}
                    </p>
                  </div>
                  <button className="absolute top-8 right-8 md:top-12 md:right-12 w-12 h-12 md:w-16 md:h-16 glass-2 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-neon-blue group-hover:text-midnight transition-all duration-700 scale-50 group-hover:scale-100">
                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.main>
  );
}
