import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import CinemaReel from "../components/CinemaReel";
import SEO from "../components/SEO";
import { BentoGrid, BentoCard } from "../components/BentoGrid";
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Award, Globe, ExternalLink, Calendar } from "lucide-react";

export default function Certificate() {
  const [certs, setCerts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'certification'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCerts(items);
      setLoading(false);
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
        title="Professional Certifications | Best SEO Expert in Kerala"
        description="Verified digital marketing excellence by Marketer Sinan VK. Industry-validated expertise from Google, Meta, HubSpot, and HP."
      />
      
      <div className="space-y-32 relative z-10">
        <div className="space-y-8 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-vibrant-indigo text-[9px] font-bold uppercase tracking-[0.5em]"
          >
            Institutional Validation
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-serif tracking-tighter text-white leading-[0.85]"
          >
            Neural <br />
            <span className="italic text-vibrant-indigo text-indigo-glow">Accreditation.</span>
          </motion.h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-silver/40 text-lg font-light leading-relaxed">
               As the <span className="text-white">Best SEO Expert in Kerala</span>, my methodology is architected on verified principles. From semantic search mastery at HubSpot to technical performance engineering at Google.
            </p>
          </div>
        </div>

        <div className="glass-2 rounded-[60px] overflow-hidden border border-white/5 shadow-2xl relative group">
          <div className="absolute inset-0 bg-vibrant-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[100px]" />
          <CinemaReel subtitle="Strategic Partners" />
        </div>

        <div className="space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <h2 className="text-white text-4xl font-serif italic tracking-tight">The Credential <span className="text-vibrant-indigo">Grid.</span></h2>
              <p className="text-silver/40 text-xs uppercase tracking-widest font-bold">Verified by global nodes.</p>
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
                      <div className="flex items-center gap-2 text-vibrant-indigo text-[8px] font-bold uppercase tracking-widest">
                        <Award size={10} /> {cert.issuer}
                      </div>
                      <h4 className="text-white text-lg font-serif italic leading-tight group-hover:text-vibrant-indigo transition-colors">{cert.title}</h4>
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
    </motion.main>
  );
}
