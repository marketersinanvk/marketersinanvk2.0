import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Clock, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { BLOG_POSTS } from "../constants/data";
import { getImageSrcSet } from "../lib/imageUtils";

export default function Blog() {
  const posts = BLOG_POSTS as any[];
  return (
    <div className="min-h-screen bg-transparent">
      <SEO 
        title="Elite Digital Marketing Insights | Freelance Digital Marketer in Kerala"
        description="Read the latest insights on AI marketing, Meta Ads strategies, and brand scaling from Marketer Sinan VK, the best freelance digital marketer in Kerala."
      />
      <main className="pt-40 pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20 space-y-6">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-neon-green text-[9px] font-bold uppercase tracking-[0.5em]"
            >
              The Journal
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-9xl font-serif tracking-tighter text-white leading-[0.85]"
            >
              Elite <br />
              <span className="italic text-neon-green text-elegant-glow">Insights.</span>
            </motion.h1>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[450px]">
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 1 }}
                className={`${post.id === '1' ? "md:col-span-2 md:row-span-1" : "md:col-span-1 md:row-span-1"} glass-2 rounded-[24px] overflow-hidden group relative flex flex-col hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(57,255,20,0.1)] transition-all duration-700 bg-white/5`}
              >
                <Link to={`/blog/${post.id}`} className="absolute inset-0 z-20" />
                
                <div className="absolute inset-0 z-0">
                  <img 
                    src={post.image} 
                    srcSet={getImageSrcSet(post.image)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={`${post.title} - Best Digital Marketer in Palakkad, Kerala`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-40 group-hover:opacity-60"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    width="400"
                    height="450"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent" />
                </div>

                <div className="relative z-10 p-10 mt-auto space-y-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-neon-green/5 border border-neon-green/20 rounded-full text-neon-green text-[8px] font-bold uppercase tracking-[0.3em]">
                      Trending
                    </span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/40 text-[8px] font-bold uppercase tracking-[0.3em]">
                      AI Marketing
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-serif text-white leading-tight group-hover:text-neon-green transition-colors duration-500 tracking-wide">
                    {post.title}
                  </h2>
                  
                  <p className="text-silver/40 text-sm font-light leading-relaxed line-clamp-2 tracking-wide">
                    {post.excerpt}
                  </p>

                  <div className="pt-6 flex items-center justify-between border-t border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-silver/30">
                        <User size={10} className="text-neon-green" /> Sinan VK
                      </div>
                      <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-silver/30">
                        <Calendar size={10} className="text-neon-green" /> {post.date}
                      </div>
                    </div>
                    <button className="w-10 h-10 glass-2 border border-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-neon-green group-hover:text-midnight transition-all duration-500 shadow-xl">
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 border border-neon-green/0 group-hover:border-neon-green/20 transition-all duration-700 pointer-events-none rounded-[24px]" />
                <div className="absolute -inset-px bg-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl" />
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
