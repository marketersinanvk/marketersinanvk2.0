import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, User, Share2, MessageCircle } from "lucide-react";
import SEO from "../components/SEO";
import { BLOG_POSTS } from "../constants/data";
import Markdown from "react-markdown";

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState<any | null>(null);

  useEffect(() => {
    const foundPost = BLOG_POSTS.find(p => p.id === id);
    if (foundPost) {
      setPost(foundPost);
    }
    window.scrollTo(0, 0);
  }, [id]);

  const handleConsultation = () => {
    const message = encodeURIComponent(`Hello Sinan, I just read your post "${post?.title}" and would like to discuss a project.`);
    window.open(`https://wa.me/918590181381?text=${message}`, "_blank");
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center grainy">
        <div className="w-12 h-12 border-2 border-neon-green/20 border-t-neon-green rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-32 grainy"
    >
      <SEO 
        title={`${post.title} | Best Digital Marketer in Palakkad, Kerala`}
        description={post.excerpt}
      />
      
      <div className="max-w-4xl mx-auto px-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-silver/40 hover:text-neon-green transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Back to Journal</span>
        </Link>

        <header className="space-y-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-neon-green/10 border border-neon-green/20 rounded-full text-neon-green text-[8px] font-bold uppercase tracking-widest">
                Trending Insight
              </span>
              <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-silver/30">
                <Calendar size={10} className="text-neon-green" /> {post.date}
              </div>
            </div>
            <h1 className="text-4xl md:text-7xl font-serif italic text-white leading-[1.1] tracking-tight">
              {post.title}
            </h1>
          </div>

          <div className="flex items-center justify-between py-6 border-y border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-neon-green/10 border border-neon-green/20 flex items-center justify-center">
                <User size={16} className="text-neon-green" />
              </div>
              <div>
                <p className="text-white text-[10px] font-bold uppercase tracking-widest">Sinan VK</p>
                <p className="text-silver/30 text-[9px] uppercase tracking-widest">AI Marketing Expert</p>
              </div>
            </div>
            <button className="w-10 h-10 glass-2 rounded-full flex items-center justify-center text-silver/40 hover:text-neon-green transition-colors">
              <Share2 size={16} />
            </button>
          </div>
        </header>

        <div className="aspect-video rounded-[40px] overflow-hidden mb-16 border border-white/5">
          <img 
            src={post.image} 
            alt={`${post.title} - Best Digital Marketer in Palakkad, Kerala`}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="blog-content prose prose-invert prose-neon-green max-w-none">
          <div className="text-silver/70 text-lg md:text-xl font-light leading-relaxed space-y-8">
            <Markdown>{post.content}</Markdown>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-white/5">
          <div className="glass-2 p-10 rounded-[40px] border border-neon-green/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-white text-2xl font-serif italic">Ready to scale?</h3>
              <p className="text-silver/40 text-sm font-light">Let's implement these strategies for your brand.</p>
            </div>
            <button 
              onClick={handleConsultation}
              className="px-10 py-4 bg-neon-green text-midnight text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(57,255,20,0.3)] flex items-center gap-2"
            >
              Start Project <MessageCircle size={14} />
            </button>
          </div>
        </footer>
      </div>
    </motion.main>
  );
}
