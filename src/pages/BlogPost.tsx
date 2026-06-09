import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, User, ArrowRight, Clock } from "lucide-react";
import SEO from "../components/SEO";
import Markdown from "react-markdown";
import { doc, onSnapshot } from "firebase/firestore";
import { db, handleFirestoreError, OperationType } from "../lib/firebase";
import { NeuralBackground } from "../components/NeuralBackground";
import { blogPosts } from "../data/posts";
import { getPostData, PostData } from "../lib/posts";
import SemanticFooterLinks from "../components/SemanticFooterLinks";
import TableOfContents from "../components/TableOfContents";
import SemanticWordCloud from "../components/SemanticWordCloud";
import SEOImage from "../components/SEOImage";
import { normalizeSlug } from "../lib/seo-utils";

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState<any | PostData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const resolveParams = async () => {
      // In Next.js 15, params is a Promise. We simulate a safe retrieval here.
      const { id, slug } = params;
      
      try {
        // 1. Check for Programmatic Slug first (Normalized)
        if (slug) {
          const normalizedSlug = normalizeSlug(slug);
          const programmaticPost = getPostData(normalizedSlug);
          if (programmaticPost) {
            setPost(programmaticPost);
            setLoading(false);
            window.scrollTo(0, 0);
            return;
          }
        }

        // 2. Check for legacy ID (static data)
        if (id) {
          const staticPost = blogPosts.find(p => p.id === id);
          if (staticPost) {
            setPost({
              ...staticPost,
              imageUrl: staticPost.image,
              date: staticPost.date,
              readingTime: (staticPost as any).readTime || '8 min read',
              content: staticPost.content,
              description: staticPost.excerpt,
              slug: staticPost.id
            });
            setLoading(false);
            window.scrollTo(0, 0);
            return;
          }

          // 3. Try Firebase for dynamic posts
          const unsubscribe = onSnapshot(doc(db, "blog", id), (docSnapshot) => {
            if (docSnapshot.exists()) {
              const data = docSnapshot.data();
              setPost({ 
                id: docSnapshot.id, 
                ...data,
                slug: docSnapshot.id,
                description: data.excerpt || data.description,
                imageUrl: data.imageUrl || data.image,
                readingTime: data.readTime || '5 min read'
              });
            }
            setLoading(false);
          }, (error) => {
            handleFirestoreError(error, OperationType.GET, `blog/${id}`);
          });
          
          window.scrollTo(0, 0);
          return () => unsubscribe();
        }
      } catch (err) {
        console.error("Critical Parameter Resolution Failure:", err);
      } finally {
        setLoading(false);
      }
    };

    resolveParams();
  }, [params]);

  const handleConsultation = () => {
    const message = encodeURIComponent(`Hello Sinan, I just finished reading "${post?.title}" and I'm ready to discuss a strategic integration.`);
    window.open(`https://wa.me/918590181381?text=${message}`, "_blank");
  };

  // Programmatically extract headings for TOC
  const extractHeadings = (markdown: string) => {
    const lines = markdown.split("\n");
    const headings: { id: string; text: string; level: number }[] = [];
    
    lines.forEach((line) => {
      const match = line.match(/^(#{2,3})\s+(.+)$/);
      if (match) {
        const text = match[2].trim();
        headings.push({
          id: normalizeSlug(text),
          text: text,
          level: match[1].length
        });
      }
    });
    
    return headings;
  };

  const tocHeadings = post?.content ? extractHeadings(post.content) : [];

  const MarkdownComponents = {
    h1: ({ children }: any) => {
      // RULE 2: H1 is reserved for Page Title. Downgrade any internal H1s to H2.
      const text = React.Children.toArray(children).join("");
      const id = normalizeSlug(text);
      return <h2 id={id} className="text-3xl md:text-5xl font-serif italic text-white tracking-tighter mt-20 mb-8">{children}</h2>;
    },
    h2: ({ children }: any) => {
      const text = React.Children.toArray(children).join("");
      const id = normalizeSlug(text);
      return <h2 id={id} className="group flex items-center gap-4 text-2xl md:text-4xl text-white font-medium mt-16 mb-6">
        {children}
        <a href={`#${id}`} className="opacity-0 group-hover:opacity-40 text-neon-purple transition-opacity text-sm font-mono">#</a>
      </h2>;
    },
    h3: ({ children }: any) => {
      const text = React.Children.toArray(children).join("");
      const id = normalizeSlug(text);
      return <h3 id={id} className="group flex items-center gap-3 text-xl md:text-2xl text-slate-200 mt-12 mb-4">
        {children}
        <a href={`#${id}`} className="opacity-0 group-hover:opacity-40 text-neon-purple transition-opacity text-xs font-mono">#</a>
      </h3>;
    },
    img: ({ src, alt }: any) => {
      return (
        <SEOImage 
          src={src || ""} 
          alt={alt || "Strategic Digital Marketing Visualization"} 
          caption={alt}
          className="my-16" 
        />
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center relative">
        <NeuralBackground />
        <div className="w-12 h-12 border-2 border-neon-purple/20 border-t-neon-purple rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative space-y-6">
        <NeuralBackground />
        <h1 className="text-4xl font-serif italic text-white tracking-tighter">Strategic Insights Not Found</h1>
        <p className="text-slate-400 text-sm">The digital node you are looking for has been repositioned by the Best Digital Marketer in Kerala.</p>
        <Link to="/blog" className="text-neon-purple text-[10px] font-bold uppercase tracking-widest border border-neon-purple/20 px-6 py-2 rounded-full hover:bg-neon-purple hover:text-white transition-all">Restore Navigation</Link>
      </div>
    );
  }

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.coverImage || post.imageUrl || post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": "Muhammed Sinan VK",
      "jobTitle": "Best Digital Marketer in Kerala",
      "url": "https://marketersinanvk.in"
    },
    "description": post.description,
    "publisher": {
      "@type": "Organization",
      "name": "Marketer Sinan VK",
      "logo": {
        "@type": "ImageObject",
        "url": "https://i.ibb.co/tPXVB1Lp/about.png",
        "creditText": "Marketer Sinan VK",
        "copyrightNotice": "Copyright 2026 Digital Hug. All Rights Reserved."
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-40 pb-40 relative"
    >
      <NeuralBackground />
      
      <SEO 
        title={`${post.title} | Best Digital Marketer in Kerala`}
        description={post.description}
        image={post.coverImage || post.imageUrl || post.image}
      />

      {/* JSON-LD Schema Injection */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      
      <article className="max-w-5xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Navigation & Context */}
        <div className="flex items-center justify-between mb-16 pb-8 border-b border-white/5">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-3 text-slate-400/40 hover:text-neon-purple transition-all group"
          >
            <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center group-hover:border-neon-purple/30 group-hover:bg-neon-purple/5 transition-all">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.4em]">Back to Research Archive</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <span className="text-white/5 text-[9px] uppercase tracking-[0.5em] font-bold">Protocol ID: MSVK-{post.slug?.slice(0, 6).toUpperCase()}</span>
            <div className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
          </div>
        </div>

        {/* Premium Post Header */}
        <header className="space-y-12 mb-24 max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-4 bg-white/[0.02] border border-white/5 px-6 py-2 rounded-full backdrop-blur-md">
              <span className="text-neon-purple text-[8px] font-bold uppercase tracking-[0.4em]">
                {post.tags?.[0] || 'Strategic Insight'}
              </span>
              <div className="w-[1px] h-3 bg-white/10" />
              <div className="flex items-center gap-2 text-slate-500 text-[8px] font-bold uppercase tracking-[0.2em]">
                <Calendar size={10} className="text-neon-purple/40" /> {post.date}
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-white leading-[1.1] tracking-tighter">
              {post.title}
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto border-l border-neon-purple/20 pl-8 ml-auto mr-auto md:ml-0 md:mr-0 text-left">
              {post.description}
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center pt-12 gap-8 md:gap-12">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full border border-white/10 p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-neon-purple/20 to-transparent flex items-center justify-center">
                  <User size={18} className="text-neon-purple" />
                </div>
              </div>
              <div className="space-y-0.5">
                <p className="text-white text-[10px] font-bold uppercase tracking-widest leading-none">Muhammed Sinan VK</p>
                <p className="text-neon-purple/40 text-[7px] uppercase tracking-[0.3em] font-medium italic">Managing Strategist</p>
              </div>
            </div>
            
            <div className="hidden sm:block w-[1px] h-8 bg-white/5" />
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-slate-500 text-[8px] font-bold uppercase tracking-[0.2em]">
                <Calendar size={12} className="text-neon-purple/40" /> {post.date}
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-[8px] font-bold uppercase tracking-[0.2em]">
                <Clock size={12} className="text-neon-purple/40" /> {post.readingTime}
              </div>
            </div>
          </div>
        </header>

        {/* Feature Image Frame */}
        <div className="relative mb-24 md:mb-32 group px-4 md:px-0">
          <div className="absolute inset-0 bg-neon-purple/20 blur-[150px] opacity-0 group-hover:opacity-20 transition-opacity duration-1000 -z-10" />
          <SEOImage 
            src={(post.coverImage || post.imageUrl || post.image) as string} 
            alt={`${post.title} - Case Study by Best Digital Marketer in Kerala`}
            caption={`${post.title} // Performance Analysis Matrix`}
            priority={true}
          />
        </div>

        {/* Post Content with Premium Proportions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
          <aside className="lg:col-span-3 order-2 lg:order-1 pt-12">
            <TableOfContents headings={tocHeadings} />
          </aside>
          
          <div className="lg:col-span-9 order-1 lg:order-2">
            <div className="blog-content prose prose-invert prose-neon-purple max-w-4xl mx-auto">
              <div className="text-slate-400 text-lg md:text-xl font-light leading-relaxed space-y-12 tracking-wide font-sans">
                <Markdown components={MarkdownComponents}>{post.content}</Markdown>
              </div>
            </div>

            {/* Tags / Meta */}
            <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap gap-4">
              {post.tags?.map((tag: string) => (
                <span key={tag} className="text-[10px] font-mono text-neon-purple/40 lowercase tracking-widest bg-neon-purple/5 px-4 py-2 rounded-full border border-neon-purple/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Footer CTA */}
        <footer className="mt-40">
          <div className="relative p-12 md:p-24 rounded-[5rem] overflow-hidden border border-white/5 group bg-slate-900/40 backdrop-blur-2xl">
            <div className="absolute inset-0 z-0">
               <img 
                 src="https://i.ibb.co/tPXVB1Lp/about.png" 
                 alt="Contact Best Digital Marketer in Kerala" 
                 className="w-full h-full object-cover opacity-5 grayscale group-hover:opacity-10 transition-all duration-[3000ms]"
               />
               <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight/90 to-neon-purple/10" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center space-y-12">
              <div className="space-y-4">
                <span className="text-neon-purple text-[10px] font-bold uppercase tracking-[0.6em]">System Verification Required</span>
                <h3 className="text-4xl md:text-7xl font-serif italic text-white tracking-tighter leading-none">Ready for <br /> <span className="text-neon-purple purple-text-glow">Expansion?</span></h3>
                <p className="text-slate-400/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                  Applying the <span className="text-white">Best Digital Marketer in Kerala</span> protocol to your brand is a calculated investment in market dominance.
                </p>
              </div>
              
              <button 
                onClick={handleConsultation}
                className="group relative px-16 py-8 bg-neon-purple text-white text-[11px] font-bold uppercase tracking-[0.4em] rounded-[24px] hover:bg-white hover:text-midnight transition-all duration-700 shadow-[0_20px_50px_rgba(157,39,176,0.3)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-6">
                  Initiate Strategic Audit <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-700" />
                </span>
              </button>
            </div>
          </div>
        </footer>
      </article>

      {/* Semantic Silk-Route Link Matrix */}
      <div className="mt-40 border-t border-white/5 px-6 md:px-8 max-w-7xl mx-auto">
        <SemanticWordCloud category="seo" className="py-24" />
        <SemanticFooterLinks />
      </div>
    </motion.main>
  );
}

