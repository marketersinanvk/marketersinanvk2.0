import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Calendar, User, Share2, MessageCircle, Clock, Globe, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import Markdown from "react-markdown";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase";
import { NeuralBackground } from "../components/NeuralBackground";

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    
    // Check if it's one of the persistent strategic posts
    const isStrategic = id.startsWith("ranked-") || id.includes("-digital-marketer-") || id.includes("-local-seo-") || id.includes("-ai-marketing-") || id.includes("-high-performance-") || id.includes("-growth-secrets");
    
    if (isStrategic) {
      // In a real app we'd fetch from a JSON or specific DB, here we'll mock it if not in Firestore
      // For now, let's keep it simple and listen to Firestore, but handle the state
    }

    const unsubscribe = onSnapshot(doc(db, "blog", id), (doc) => {
      if (doc.exists()) {
        setPost({ id: doc.id, ...doc.data() });
      } else {
        // Fallback for demo purposes if static posts aren't in DB yet
        // You would normally seed these to Firestore
      }
      setLoading(false);
    });
    
    window.scrollTo(0, 0);
    return () => unsubscribe();
  }, [id]);

  const handleConsultation = () => {
    const message = encodeURIComponent(`Hello Sinan, I just finished reading "${post?.title}" and I'm ready to discuss a strategic integration.`);
    window.open(`https://wa.me/918590181381?text=${message}`, "_blank");
  };

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href,
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center relative">
        <NeuralBackground />
        <div className="w-12 h-12 border-2 border-arctic-blue/20 border-t-arctic-blue rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative space-y-6">
        <NeuralBackground />
        <h1 className="text-4xl font-serif italic text-white tracking-tighter">Insight Sequence Null.</h1>
        <Link to="/blog" className="text-arctic-blue text-[10px] font-bold uppercase tracking-widest border border-arctic-blue/20 px-6 py-2 rounded-full hover:bg-arctic-blue hover:text-midnight transition-all">Restore Navigation</Link>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-32 relative"
    >
      <NeuralBackground />
      
      <SEO 
        title={`${post.title} | Best SEO Expert in Kerala`}
        description={post.seoMeta || post.excerpt}
        image={post.imageUrl || post.image}
      />
      
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-silver/40 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-widest">The Archive</span>
        </Link>

        <header className="space-y-10 mb-20 text-center sm:text-left">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
              <span className="px-3 py-1 bg-arctic-blue/10 border border-arctic-blue/20 rounded-full text-arctic-blue text-[7px] font-bold uppercase tracking-widest">
                {post.category || 'Strategic Insight'}
              </span>
              <div className="flex items-center gap-4 text-silver/20 text-[8px] font-bold uppercase tracking-[0.2em]">
                <div className="flex items-center gap-1"><Calendar size={10} className="text-arctic-blue/40" /> {new Date(post.createdAt).toLocaleDateString()}</div>
                <div className="flex items-center gap-1"><Clock size={10} className="text-arctic-blue/40" /> {post.readTime || '8 min read'}</div>
              </div>
            </div>
            <h1 className="text-4xl md:text-7xl font-serif italic text-white leading-[1] tracking-tighter">
              {post.title}
            </h1>
            <p className="text-silver/40 text-lg md:text-xl font-light leading-relaxed max-w-3xl italic">
              {post.excerpt}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between py-8 border-y border-white/5 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-arctic-blue/5 border border-arctic-blue/20 flex items-center justify-center">
                <User size={18} className="text-arctic-blue" />
              </div>
              <div className="text-left">
                <p className="text-white text-[11px] font-bold uppercase tracking-widest leading-none mb-1">Muhammed Sinan VK</p>
                <p className="text-silver/30 text-[9px] uppercase tracking-widest leading-none">Best SEO Expert in Kerala</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={sharePost}
                className="w-12 h-12 glass-2 rounded-2xl flex items-center justify-center text-silver/40 hover:text-arctic-blue hover:border-arctic-blue/30 transition-all group"
              >
                <Share2 size={18} className="group-hover:scale-110 transition-transform" />
              </button>
              <button 
                onClick={handleConsultation}
                className="px-6 h-12 bg-white/5 border border-white/10 text-white text-[9px] font-bold uppercase tracking-widest rounded-2xl hover:bg-white hover:text-midnight transition-all flex items-center gap-2"
              >
                Deploy Strategy <Globe size={14} />
              </button>
            </div>
          </div>
        </header>

        <div className="aspect-video rounded-[48px] overflow-hidden mb-20 border border-white/5 shadow-[0_0_80px_rgba(0,210,255,0.05)] relative group">
          <img 
            src={post.imageUrl || post.image} 
            alt={`${post.title} - Insight Protocol by Sinan VK`}
            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 to-transparent pointer-events-none" />
        </div>

        <div className="blog-content prose prose-invert prose-arctic-blue max-w-none">
          <div className="text-silver/70 text-lg md:text-xl font-light leading-relaxed space-y-10 tracking-wide">
            <Markdown>{post.content}</Markdown>
          </div>
        </div>

        <footer className="mt-32 pt-16 border-t border-white/5">
          <div className="glass-2 p-12 md:p-20 rounded-[48px] border border-arctic-blue/20 relative overflow-hidden flex flex-col items-center text-center space-y-10 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-arctic-blue/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
            
            <div className="space-y-4 relative z-10">
              <span className="text-arctic-blue text-[9px] font-bold uppercase tracking-[0.5em]">Initiate Transformation</span>
              <h3 className="text-4xl md:text-6xl font-serif italic text-white tracking-tighter leading-tight">Scale Your <span className="text-arctic-blue text-elegant-glow">Search Node.</span></h3>
              <p className="text-silver/40 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                Stop settling for average visibility. As the <span className="text-white">Best SEO Expert in Kerala</span>, I engineer absolute market dominance.
              </p>
            </div>
            
            <button 
              onClick={handleConsultation}
              className="px-16 py-6 bg-arctic-blue text-midnight text-[11px] font-bold uppercase tracking-[0.3em] rounded-[24px] hover:bg-white transition-all shadow-[0_20px_40px_rgba(0,210,255,0.2)] flex items-center gap-4 group relative z-10"
            >
              Start Strategic Audit <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
            
            <p className="text-silver/20 text-[8px] uppercase tracking-[0.6em] relative z-10">
              Kerala / UAE / International Strategy Operations
            </p>
          </div>
        </footer>
      </div>
    </motion.main>
  );
}
