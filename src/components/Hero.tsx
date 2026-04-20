import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { collection, onSnapshot, query, limit } from "firebase/firestore";
import { db } from "../lib/firebase";
import ServiceCards from "./ServiceCards";

export default function Hero() {
  const [heroData, setHeroData] = useState<any>(null);

  useEffect(() => {
    const q = query(collection(db, "hero"), limit(1));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        setHeroData(snapshot.docs[0].data());
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-vibrant-indigo/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-vibrant-indigo/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 md:space-y-10"
        >
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-3 px-5 py-2 glass-2 rounded-full border border-vibrant-indigo/20 w-fit">
              <Sparkles className="w-3 h-3 text-vibrant-indigo" />
              <span className="text-vibrant-indigo text-[9px] font-bold uppercase tracking-[0.4em]">Expert Lead Generation for Real Estate</span>
            </div>
            <h2 className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.2em] ml-5 text-white/60">
              Expert Next.js Web Development & Lead Generation
            </h2>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-9xl font-serif tracking-tighter text-white leading-[1.1] md:leading-[0.85]">
            Best <br />
            <span className="italic text-vibrant-indigo text-indigo-glow">SEO Expert</span> <br />
            In Kerala.
          </h1>

          <div className="prose prose-silver prose-lg max-w-2xl font-light leading-relaxed tracking-wide space-y-6" style={{ color: "rgba(192, 192, 192, 0.4)" }}>
            <p>
              Muhammed Sinan VK is the <span className="text-white font-medium">Best SEO Expert in Kerala</span> and a leading <span className="text-white font-medium">Freelance Digital Marketer in Kerala</span>. We focus on engineering digital dominance through surgical precision, AI-integrated strategies, and elite branding. Our expertise spans across <span className="text-white font-medium italic">Custom Website Development Kerala</span>, <span className="text-white font-medium">Local SEO Services in Palakkad</span>, and high-ROI <span className="text-white font-medium">Lead Generation Services for Real Estate & Retail</span>.
            </p>
            <p>
              In the modern digital economy, visibility is the currency of success. As a premier <span className="text-white font-medium">Social Media Manager for Small Business</span>, I help brands transition from being hidden to becoming market leaders. Whether you need <span className="text-white font-medium">Ecommerce Website Development India</span> or a <span className="text-white font-medium">Professional Video Editor for Instagram Reels</span>, my mission is to deliver sustainable growth and absolute search dominance.
            </p>
            <p>
              By leveraging <span className="text-white font-medium italic">Affordable Web Development Services</span> and surgical <span className="text-white font-medium">Social Media Post Design Services</span>, we build "Digital Legacies" for the elite 0.1%. Welcome to the laboratory of search mastery in Kerala.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-6">
            <Link 
              to="/contact" 
              aria-label="Start Mission"
              className="group relative px-10 py-5 bg-vibrant-indigo text-white font-bold rounded-full overflow-hidden transition-all duration-700 hover:scale-105 shadow-[0_0_40px_rgba(99,102,241,0.3)] w-full sm:w-auto border-b-4 border-vibrant-indigo/30 active:border-b-0 active:translate-y-1 magnetic flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-[10px]">
                Start Mission <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link 
              to="/portfolio" 
              aria-label="View Database"
              className="px-10 py-5 glass-2 border border-white/5 text-silver font-bold rounded-full hover:bg-white/[0.05] transition-all duration-700 uppercase tracking-[0.2em] text-[10px] w-full sm:w-auto text-center border-b-4 border-white/5 active:border-b-0 active:translate-y-1 magnetic"
            >
              View Database
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative hidden lg:block min-h-[600px] w-full max-w-[480px] mx-auto aspect-[4/5]"
        >
          <div className="relative z-10 w-full h-full glass-2 rounded-[60px] overflow-hidden group shadow-[0_0_60px_rgba(99,102,241,0.2)] border border-vibrant-indigo/10">
            {heroData?.imageUrl ? (
              <img 
                src={heroData.imageUrl} 
                alt={heroData.title || "Best Digital Marketer in Kerala - Marketer Sinan VK"} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-[2000ms] scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
                fetchPriority="high"
                loading="eager"
                width="800"
                height="1000"
              />
            ) : (
              <ServiceCards />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-40 pointer-events-none" />
          </div>
          
          {/* Minimalist Orbits */}
          <div className="absolute -top-16 -right-16 w-64 h-64 border-[0.5px] border-vibrant-indigo/10 rounded-full animate-[spin_30s_linear_infinite]" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 border-[0.5px] border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
        </motion.div>
      </div>
    </section>
  );
}
