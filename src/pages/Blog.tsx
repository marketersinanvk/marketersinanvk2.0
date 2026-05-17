import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Clock, User, Search, Brain, Target, TrendingUp, Cpu, Code, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { BentoGrid } from "../components/BentoGrid";
import { NeuralBackground } from "../components/NeuralBackground";
import { getSortedPostsData, PostData } from "../lib/posts";

export default function Blog() {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    setPosts(getSortedPostsData());
  }, []);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative overflow-hidden"
    >
      <NeuralBackground />
      
      <SEO 
        title="Tactical Insights | Best Digital Marketer in Kerala | MSVK Journal"
        description="The neural laboratory for digital growth. Insights from the Best Digital Marketer in Kerala on SEO, high-ROI ads, and strategic SMM."
      />

      <div className="pt-40 pb-32 px-6 sm:px-8">
        <div className="space-y-32">
          {/* Premium Hero Section */}
          <header className="relative min-h-[60vh] flex items-center rounded-[4rem] overflow-hidden border border-white/5 group">
            <div className="absolute inset-0 z-0">
               <img 
                 src="https://i.ibb.co/tPXVB1Lp/about.png" 
                 alt="Strategic Digital Authority - Best Digital Marketer in Kerala" 
                 className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[3000ms]"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-transparent" />
               <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />
            </div>

            <div className="relative z-10 p-12 md:p-20 space-y-8 max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-[1px] bg-neon-purple/50" />
                <span className="text-neon-purple text-[10px] font-bold uppercase tracking-[0.6em]">Premium Journal // 2026 Edition</span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-6xl sm:text-7xl md:text-8xl font-serif tracking-tighter text-white leading-tight"
                >
                  Neural <span className="italic text-neon-purple purple-text-glow">Market</span> <br />
                  Dominance.
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-slate-400 text-xl font-light leading-relaxed tracking-wide max-w-2xl"
                >
                  High-performance strategies and architectural insights from the <span className="text-white font-medium">Best Digital Marketer in Kerala</span>. Engineering growth across SEO, SMM, and Digital Ecosystems.
                </motion.p>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 p-12 hidden md:block">
               <div className="flex flex-col items-end gap-2">
                 <span className="text-white/10 text-[8px] uppercase tracking-[0.5em] font-bold">Protocol Status</span>
                 <span className="text-neon-purple text-[10px] uppercase tracking-[0.3em] font-bold">In-Depth Retrieval // Active</span>
               </div>
            </div>
          </header>

          <BentoGrid className="grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className={`group relative flex flex-col border-b border-white/5 pb-16 md:pb-24 ${
                  i % 3 === 0 ? "md:col-span-12" : "md:col-span-6"
                }`}
              >
                <Link to={`/posts/${post.slug}`} className="absolute inset-0 z-20" />
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                  <div className={`md:col-span-6 overflow-hidden rounded-[2.5rem] border border-white/5 relative aspect-[16/10] ${
                    i % 3 !== 0 ? "md:order-1" : i % 2 === 0 ? "md:order-1" : "md:order-2"
                  }`}>
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 to-transparent" />
                    <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 bg-midnight/60 backdrop-blur-xl border border-white/10 rounded-full text-neon-purple text-[8px] font-bold uppercase tracking-[0.3em]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`md:col-span-6 space-y-8 ${
                    i % 3 !== 0 ? "md:order-2" : i % 2 === 0 ? "md:order-2" : "md:order-1"
                  }`}>
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-5xl font-serif italic text-white leading-tight tracking-tighter group-hover:text-neon-purple transition-colors duration-700">
                        {post.title}
                      </h2>
                      <p className="text-slate-400 text-lg font-light leading-relaxed line-clamp-3 md:line-clamp-none">
                        {post.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">
                           <Clock size={12} className="text-neon-purple/60" /> {post.readingTime}
                        </div>
                        <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">
                           <User size={12} className="text-neon-purple/60" /> {post.author || 'Sinan VK'}
                        </div>
                      </div>
                      
                      <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-neon-purple group-hover:border-neon-purple transition-all duration-500">
                         <ArrowUpRight size={20} className="text-slate-400 group-hover:text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </BentoGrid>
          
          <div className="pt-20 text-center">
             <p className="text-slate-400/20 text-[8px] uppercase tracking-[0.5em] font-sans">
               Best Digital Marketer in Kerala // Strategic Authority // Neural Laboratory
             </p>
          </div>
        </div>
      </div>
    </motion.main>
  );
}

