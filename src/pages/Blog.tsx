import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Clock, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../lib/firebase";
import SEO from "../components/SEO";

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "posts"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(items);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="min-h-screen bg-transparent">
      <SEO 
        title="Elite Digital Marketing Insights | Blog by Marketer Sinan VK"
        description="Read the latest insights on AI marketing, Meta Ads strategies, and brand scaling from Muhammed Sinan VK. Expert knowledge for businesses in Kerala and Dubai."
      />
      <main className="pt-40 pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20 space-y-6">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-neon-blue text-[9px] font-bold uppercase tracking-[0.5em]"
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
              <span className="italic text-neon-blue text-teal-glow">Insights.</span>
            </motion.h1>
          </header>

          {loading && posts.length === 0 ? (
            <div className="flex items-center justify-center py-40">
              <div className="w-12 h-12 border-2 border-neon-blue/20 border-t-neon-blue rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[350px]">
              {posts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 1 }}
                  className={`${post.span || "md:col-span-1 md:row-span-1"} glass-2 rounded-[40px] overflow-hidden group relative flex flex-col`}
                >
                  <Link to={`/blog/${post.id}`} className="absolute inset-0 z-20" />
                  
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent" />
                  </div>

                  <div className="relative z-10 p-10 mt-auto space-y-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags && post.tags.slice(0, 2).map((tag: string) => (
                        <span key={tag} className="px-3 py-1 bg-neon-blue/10 border border-neon-blue/20 rounded-full text-neon-blue text-[8px] font-bold uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-serif text-white leading-tight group-hover:text-neon-blue transition-colors duration-500">
                      {post.title}
                    </h2>
                    
                    <p className="text-silver/40 text-sm font-light leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="pt-6 flex items-center justify-between border-t border-white/5">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-silver/30">
                          <User size={10} className="text-neon-blue" /> {post.author || "Sinan VK"}
                        </div>
                        <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-silver/30">
                          <Calendar size={10} className="text-neon-blue" /> {post.date || new Date().toLocaleDateString()}
                        </div>
                      </div>
                      <button className="w-10 h-10 glass-2 rounded-full flex items-center justify-center text-white group-hover:bg-neon-blue group-hover:text-midnight transition-all duration-500">
                        <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 border border-neon-blue/0 group-hover:border-neon-blue/30 transition-all duration-700 pointer-events-none rounded-[40px]" />
                  <div className="absolute -inset-px bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl" />
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
