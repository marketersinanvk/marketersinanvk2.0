import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 px-8 grainy">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-blue/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-blue/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 glass-2 rounded-full border border-neon-blue/20">
            <Sparkles className="w-3 h-3 text-neon-blue" />
            <span className="text-neon-blue text-[9px] font-bold uppercase tracking-[0.4em]">The Future of Digital</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-normal tracking-tight leading-[1.1] md:leading-[0.85] text-white">
            Muhammed Sinan VK <br className="hidden sm:block" />
            <span className="italic text-neon-blue text-neon-glow">Best Digital Marketer</span>
          </h1>

          <p className="text-silver/50 text-base md:text-xl max-w-2xl font-light leading-relaxed tracking-wide">
            Scaling brands in India & Dubai through <Link to="/services" className="text-neon-blue hover:underline decoration-neon-blue/30 underline-offset-4">High-ROI Meta Ads</Link> and Premium Branding. 
            Expertise in AI-Powered Digital Marketing serving clients across Kerala and UAE.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-6">
            <button className="group relative px-10 py-5 bg-neon-blue text-midnight font-bold rounded-full overflow-hidden transition-all duration-700 hover:scale-105 shadow-[0_0_40px_rgba(0,243,255,0.3)] w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-[10px]">
                Get Started <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <Link to="/portfolio" className="px-10 py-5 glass-2 border border-white/5 text-silver font-bold rounded-full hover:bg-white/[0.05] transition-all duration-700 uppercase tracking-[0.2em] text-[10px] w-full sm:w-auto text-center">
              View Portfolio
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 aspect-[4/5] glass-2 rounded-[60px] overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/luxury-tech/1200/1500.webp" 
              alt="Ultra-Premium AI Visualization - Marketer Sinan VK" 
              className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-[2000ms] scale-105 group-hover:scale-100"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80" />
            
            {/* Floating Data Card */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-10 left-10 right-10 glass-2 p-8 rounded-3xl"
            >
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="text-neon-blue text-[9px] font-bold uppercase tracking-[0.3em] mb-1">Neural Sync</p>
                  <p className="text-white font-serif italic text-xl">Optimized</p>
                </div>
                <span className="text-silver/40 font-mono text-[10px]">v.2.0.4</span>
              </div>
              <div className="h-[1px] w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "92%" }}
                  transition={{ duration: 3, delay: 2 }}
                  className="h-full bg-neon-blue shadow-[0_0_15px_#00f3ff]"
                />
              </div>
            </motion.div>
          </div>
          
          {/* Minimalist Orbits */}
          <div className="absolute -top-16 -right-16 w-64 h-64 border-[0.5px] border-neon-blue/10 rounded-full animate-[spin_30s_linear_infinite]" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 border-[0.5px] border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
        </motion.div>
      </div>
    </section>
  );
}
