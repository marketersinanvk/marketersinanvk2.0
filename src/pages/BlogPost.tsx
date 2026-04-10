import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, MessageCircle, Share2, Clock } from "lucide-react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import SEO from "../components/SEO";

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      try {
        const docRef = doc(db, "posts", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() });
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center grainy">
        <div className="w-12 h-12 border-2 border-neon-blue/20 border-t-neon-blue rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center grainy">
        <div className="text-center space-y-8">
          <h1 className="text-4xl font-serif text-white italic">Post Not Found</h1>
          <Link to="/blog" className="inline-flex items-center gap-2 text-neon-blue uppercase tracking-widest text-xs font-bold">
            <ArrowLeft size={14} /> Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  const handleConsultation = () => {
    const message = encodeURIComponent(`Hello Sinan, I just read your post "${post.title}" and would like to discuss a project.`);
    window.open(`https://wa.me/918590181381?text=${message}`, "_blank");
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen pt-32 md:pt-48 pb-32 grainy"
    >
      <SEO 
        title={`${post.title} | Marketer Sinan VK Insights`}
        description={post.excerpt}
      />
      <article className="max-w-4xl mx-auto px-8">
        {/* Header */}
        <header className="space-y-8 mb-16">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-silver/40 hover:text-neon-blue transition-colors uppercase tracking-[0.3em] text-[10px] font-bold group"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Back to Journal
          </Link>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="px-4 py-1 bg-neon-blue/10 border border-neon-blue/20 rounded-full text-neon-blue text-[9px] font-bold uppercase tracking-widest">
                {post.category || "Insight"}
              </span>
              <div className="flex items-center gap-2 text-silver/30 text-[9px] font-bold uppercase tracking-widest">
                <Clock size={10} /> 6 Min Read
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-white leading-[1.1]">
              {post.title.split(':').map((part: string, i: number) => (
                <span key={i} className={i === 1 ? "italic text-neon-blue" : ""}>
                  {part}{i === 0 && post.title.includes(':') ? ':' : ''}
                </span>
              ))}
            </h1>
          </div>

          <div className="flex items-center justify-between py-8 border-y border-white/5">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue font-serif italic">S</div>
                <div>
                  <p className="text-white text-[10px] font-bold uppercase tracking-widest">{post.author || "Sinan VK"}</p>
                  <p className="text-silver/40 text-[9px] uppercase tracking-widest">Elite Strategist</p>
                </div>
              </div>
              <div className="h-8 w-[1px] bg-white/5" />
              <div className="flex items-center gap-2 text-silver/40 text-[10px] uppercase tracking-widest">
                <Calendar size={12} className="text-neon-blue" /> {post.date || new Date().toLocaleDateString()}
              </div>
            </div>
            <div className="flex gap-4">
              <button className="w-10 h-10 glass-2 rounded-full flex items-center justify-center text-silver/40 hover:text-neon-blue transition-colors">
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="aspect-[21/9] rounded-[40px] overflow-hidden mb-16 glass-2 border border-white/5">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-teal max-w-none">
          <div 
            className="text-silver/70 text-lg md:text-xl font-light leading-relaxed space-y-8 font-sans blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Tags */}
        {post.tags && (
          <div className="mt-16 pt-12 border-t border-white/5 flex flex-wrap gap-3">
            {post.tags.map((tag: string) => (
              <span key={tag} className="text-silver/30 text-[10px] font-bold uppercase tracking-widest hover:text-neon-blue cursor-pointer transition-colors">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <section className="mt-24 p-12 md:p-16 glass-2 rounded-[60px] border border-neon-blue/20 relative overflow-hidden group">
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-white italic tracking-tight">
              Ready to engineer your <br />
              <span className="text-neon-blue not-italic font-sans font-bold uppercase tracking-tighter">Digital Legacy?</span>
            </h2>
            <p className="text-silver/50 text-lg font-light max-w-xl">
              Let's discuss how we can apply these strategies to your brand. 
              Direct consultation with Marketer Sinan VK.
            </p>
            <button 
              onClick={handleConsultation}
              className="px-12 py-6 bg-neon-blue text-midnight font-bold rounded-full hover:scale-105 transition-all duration-700 uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 shadow-[0_0_40px_rgba(0,243,255,0.3)]"
            >
              Consult with Sinan <MessageCircle size={14} />
            </button>
          </div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-neon-blue/5 blur-[100px] rounded-full group-hover:bg-neon-blue/10 transition-all duration-700" />
        </section>
      </article>
    </motion.main>
  );
}
