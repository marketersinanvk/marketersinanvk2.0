import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Clock, User, Calendar, Share2, Search, Brain, Target, TrendingUp, Cpu, Code, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { collection, onSnapshot, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { BentoGrid, BentoCard } from "../components/BentoGrid";
import { NeuralBackground } from "../components/NeuralBackground";

// Static Strategic Posts for Authority Seeding
const strategicPosts = [
  {
    id: "ranked-digisinans-seo-victory",
    title: "How I ranked Digisinans.in #1: Insights from the Best SEO Expert in Kerala.",
    excerpt: "A deep dive into the neural content strategy and technical architecture that secured the top spot for competitive AI digital marketing queries.",
    category: "SEO",
    imageUrl: "https://res.cloudinary.com/dam0azywj/image/upload/q_auto,f_auto/v1/marketersinan/digisinans-seo.jpg",
    createdAt: new Date("2026-04-10").getTime(),
    author: "Sinan VK",
    readTime: "8 min",
    icon: <Search className="text-vibrant-indigo" />
  },
  {
    id: "freelance-digital-marketer-kerala-2026",
    title: "Why every brand needs a Freelance Digital Marketer in Kerala in 2026.",
    excerpt: "The shift from generic agency models to surgical, individualized marketing strategies. How to leverage localized expertise for global reach.",
    category: "Digital Marketing",
    imageUrl: "https://res.cloudinary.com/dam0azywj/image/upload/q_auto,f_auto/v1/marketersinan/marketing-future.jpg",
    createdAt: new Date("2026-04-12").getTime(),
    author: "Sinan VK",
    readTime: "6 min",
    icon: <Target className="text-vibrant-indigo" />
  },
  {
    id: "dominating-local-seo-palakkad",
    title: "Dominating the map: A guide to Local SEO Services in Palakkad featuring Gadjenix.",
    excerpt: "Surgical GMB optimization and localized semantic mapping. Real-world results and revenue growth for Palakkad's top service nodes.",
    category: "Local SEO",
    imageUrl: "https://res.cloudinary.com/dam0azywj/image/upload/q_auto,f_auto/v1/marketersinan/palakkad-seo.jpg",
    createdAt: new Date("2026-04-14").getTime(),
    author: "Sinan VK",
    readTime: "10 min",
    icon: <Brain className="text-vibrant-indigo" />
  },
  {
    id: "scaling-luxavya-minco-smm",
    title: "Scaling Luxavya & Minco Kids: Strategies from an SMM Expert Kerala.",
    excerpt: "Visual storytelling and engagement engineering for high-tier fashion brands. How visual prestige drives direct commerce.",
    category: "SMM",
    imageUrl: "https://res.cloudinary.com/dam0azywj/image/upload/q_auto,f_auto/v1/marketersinan/smm-fashion.jpg",
    createdAt: new Date("2026-04-15").getTime(),
    author: "Sinan VK",
    readTime: "7 min",
    icon: <TrendingUp className="text-vibrant-indigo" />
  },
  {
    id: "best-ai-marketing-agency-framework",
    title: "The future of marketing with the Best AI Digital Marketing Agency framework.",
    excerpt: "Integrating LLMs and predictive analytics into the customer journey. Why AI-driven architecture is no longer optional.",
    category: "AI & Tech",
    imageUrl: "https://res.cloudinary.com/dam0azywj/image/upload/q_auto,f_auto/v1/marketersinan/ai-future.jpg",
    createdAt: new Date("2026-04-16").getTime(),
    author: "Sinan VK",
    readTime: "12 min",
    icon: <Cpu className="text-vibrant-indigo" />
  },
  {
    id: "high-performance-ui-ux-kerala",
    title: "High-performance UI/UX by a Web Development Specialist Kerala.",
    excerpt: "Engineered for speed, built for conversion. A technical breakdown of Next.js architecture in the 2026 web ecosystem.",
    category: "Web Dev",
    imageUrl: "https://res.cloudinary.com/dam0azywj/image/upload/q_auto,f_auto/v1/marketersinan/web-dev-kerala.jpg",
    createdAt: new Date("2026-04-18").getTime(),
    author: "Sinan VK",
    readTime: "9 min",
    icon: <Code className="text-vibrant-indigo" />
  },
  {
    id: "data-driven-growth-secrets",
    title: "Data-driven growth secrets from a Digital Growth Strategist.",
    excerpt: "Moving beyond vanity metrics to revenue nodes. The exact data protocol I use for Emirati and Kerala brands.",
    category: "Strategy",
    imageUrl: "https://res.cloudinary.com/dam0azywj/image/upload/q_auto,f_auto/v1/marketersinan/growth-secrets.jpg",
    createdAt: new Date("2026-04-19").getTime(),
    author: "Sinan VK",
    readTime: "15 min",
    icon: <Zap className="text-vibrant-indigo" />
  }
];

export default function Blog() {
  const [dynamicPosts, setDynamicPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'blog'), orderBy('createdAt', 'desc'), limit(12));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDynamicPosts(items);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Merge static strategic posts with dynamic ones, avoiding duplicates
  const allPosts = [...strategicPosts, ...dynamicPosts.filter(dp => !strategicPosts.some(sp => sp.title === dp.title))];

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative overflow-hidden"
    >
      <NeuralBackground />
      
      <SEO 
        title="Tactical Insights | Best SEO Expert in Kerala | MSVK Journal"
        description="The neural laboratory for digital growth. Insights from the Best SEO Expert in Kerala on AI, local SEO services in Palakkad, and strategic SMM."
      />

      <div className="pt-40 pb-32 px-6 sm:px-8">
        <div className="space-y-20">
          <header className="space-y-6">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-vibrant-indigo text-[9px] font-bold uppercase tracking-[0.5em]"
            >
              The Digital Laboratory // 2026 Edition
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl md:text-9xl font-serif tracking-tighter text-white leading-[0.85]"
            >
              Expert <br />
              <span className="italic text-vibrant-indigo text-indigo-glow">Insights.</span>
            </motion.h1>
            <p className="text-silver/50 text-xl font-light leading-relaxed tracking-wide max-w-2xl">
              Engineered narratives on market dominance, neural SEO, and conversion architecture from the <span className="text-white font-medium">Best SEO Expert in Kerala</span>.
            </p>
          </header>

          {loading && dynamicPosts.length === 0 && (
             <div className="h-96 flex items-center justify-center">
              <div className="w-12 h-12 border-2 border-vibrant-indigo/20 border-t-vibrant-indigo rounded-full animate-spin" />
            </div>
          )}

          <BentoGrid className="auto-rows-auto">
            {allPosts.map((post, i) => (
              <BentoCard
                key={post.id}
                delay={i * 0.1}
                className={`group relative flex flex-col min-h-[450px] border-white/5 transition-all duration-700 bg-white/[0.01] hover:bg-vibrant-indigo/[0.02] ${
                  i % 3 === 0 ? "md:col-span-6" : "md:col-span-3"
                }`}
              >
                <Link to={`/blog/${post.id}`} className="absolute inset-0 z-20" />
                
                <div className="absolute inset-0 z-0">
                  <img 
                    src={post.imageUrl || post.image || `https://picsum.photos/seed/${post.id}/800/800`} 
                    alt={`${post.title} - Best SEO Expert in Kerala Insights`}
                    className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-[1500ms] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${post.id}/800/800`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
                </div>

                <div className="relative z-10 p-8 md:p-12 mt-auto space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-vibrant-indigo/10 border border-vibrant-indigo/20 rounded-full text-vibrant-indigo text-[7px] font-bold uppercase tracking-[0.3em]">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-silver/20 group-hover:text-vibrant-indigo transition-colors">
                      {post.icon}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-serif italic text-white leading-tight tracking-tighter group-hover:text-vibrant-indigo transition-colors duration-500">
                      {post.title}
                    </h2>
                    
                    <p className="text-silver/40 text-[13px] font-light leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 flex items-center justify-between border-t border-white/5">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.3em] text-silver/20">
                         <Clock size={10} className="text-vibrant-indigo/40" /> {post.readTime || '5 min'}
                      </div>
                      <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.3em] text-silver/20">
                         <User size={10} className="text-vibrant-indigo/40" /> Sinan VK
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <button className="text-silver/20 hover:text-vibrant-indigo transition-colors">
                         <Share2 size={14} />
                       </button>
                       <ArrowUpRight size={16} className="text-white/20 group-hover:text-white transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 border border-vibrant-indigo/0 group-hover:border-vibrant-indigo/20 transition-all duration-700 pointer-events-none rounded-[32px] shadow-[inset_0_0_40px_rgba(99,102,241,0)] group-hover:shadow-[inset_0_0_40px_rgba(99,102,241,0.05)]" />
              </BentoCard>
            ))}
          </BentoGrid>
          
          <div className="pt-20 text-center">
             <p className="text-silver/20 text-[8px] uppercase tracking-[0.5em] font-sans">
               Best SEO Expert in Kerala // Freelance Digital Marketer // Neural Laboratory
             </p>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
