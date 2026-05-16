import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { 
  ArrowUpRight, 
  MapPin, 
  GraduationCap, 
  Award, 
  Globe, 
  Zap,
  CheckCircle2,
  Cpu,
  Brain,
  Search,
  Code,
  TrendingUp,
  Briefcase,
  Target
} from "lucide-react";
import SEO from "../components/SEO";
import { BentoGrid, BentoCard } from "../components/BentoGrid";
import { NeuralBackground } from "../components/NeuralBackground";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        duration: 1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as any 
      }
    }
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen pt-48 px-6 pb-32 relative"
    >
      <NeuralBackground />
      
      <SEO 
        title="Leading Digital Marketing Agency & SEO Expert in Kerala | MSVK"
        description="Learn about Muhammed Sinan VK, the founder of MSVK - the leading Digital Marketing Agency in Kerala. Specialized in AI SEO, Web Development, and Global Growth."
      />

      <div className="max-w-6xl mx-auto space-y-32 relative z-10">
        {/* AUTHORITY PIVOT HERO SECTION */}
        <AuthorityPivot />

        {/* BENTO MILESTONES: EDUCATION & GLOBAL VISION */}
        <section className="space-y-16">
           <div className="space-y-4">
              <p className="text-accent-purple text-[10px] font-bold uppercase tracking-[0.8em]">Operational Milestone Grid</p>
              <h2 className="text-white">Architectural <span className="text-accent-purple font-serif italic">Chronicles.</span></h2>
           </div>

           <BentoGrid className="auto-rows-[300px]">
              {/* Card 1: Education */}
              <BentoCard className="md:col-span-4 p-8 flex flex-col justify-between group bg-dark-charcoal border border-white/5">
                 <div className="w-12 h-12 bg-neon-purple/10 rounded-xl flex items-center justify-center text-neon-purple group-hover:bg-neon-purple group-hover:text-white transition-all">
                    <GraduationCap size={24} />
                 </div>
                 <div className="space-y-4">
                    <h3 className="text-2xl text-white font-display">Oxdu Media <br/>School.</h3>
                    <p className="text-slate-400 text-sm font-light">
                      Technical foundation where legacy marketing met digital engineering, specializing in UI/UX and advanced growth stacks.
                    </p>
                 </div>
              </BentoCard>

              {/* Card 2: Certifications */}
              <BentoCard className="md:col-span-4 p-8 flex flex-col justify-between bg-dark-charcoal border border-white/5">
                 <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white">
                    <Award size={24} />
                 </div>
                 <div className="space-y-4">
                    <h3 className="text-2xl text-white font-display">Certified <br/>Expertise.</h3>
                    <ul className="text-slate-400/60 text-xs font-mono space-y-2">
                       <li>// Google Search Ads Elite</li>
                       <li>// Meta Blueprint Advanced</li>
                       <li>// Technical SEO Professional</li>
                    </ul>
                 </div>
              </BentoCard>

              {/* Card 3: Key Projects */}
              <BentoCard className="md:col-span-4 p-8 flex flex-col justify-between border-neon-purple/20 bg-dark-charcoal shadow-sm">
                 <div className="w-12 h-12 bg-accent-purple/10 rounded-xl flex items-center justify-center text-accent-purple">
                    <Zap size={24} />
                 </div>
                 <div className="space-y-4">
                    <h3 className="text-2xl text-white font-display">Growth <br/>Archives.</h3>
                    <p className="text-slate-400 text-sm font-light">
                      Scaled 50+ regional projects into authoritative digital marketplaces with sustained growth.
                    </p>
                 </div>
              </BentoCard>

            </BentoGrid>
         </section>

        {/* DETAILED CONTENT: VERTICAL SPECIALIZATIONS */}
        <section className="space-y-24">
           <div className="text-center space-y-6">
              <p className="text-neon-purple text-[10px] font-bold uppercase tracking-[1em]">Strategic Matrix</p>
              <h2 className="text-white uppercase">Operational <span className="text-neon-purple italic font-serif">Authority.</span></h2>
           </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {/* Vertical 1: Morvex Perfumes */}
              <motion.div variants={itemVariants} className="space-y-8 p-4 md:p-10 group bg-dark-charcoal/50 rounded-[4rem] border border-white/5 overflow-hidden">
                 <div className="aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 mb-8">
                    <img 
                      src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop" 
                      alt="Morvex Fragrances UI/UX" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                 </div>
                 <h2 className="text-4xl text-white font-display tracking-tight leading-none border-l-8 border-neon-purple pl-8">
                    Luxury Branding for <span className="text-neon-purple font-bold">Morvex Fragrances.</span>
                 </h2>
                 <p className="text-slate-400 text-lg font-light leading-relaxed text-justify px-4 md:px-8 border-x border-white/5 py-4">
                    Architecting a premium visual identity for Morvex Perfumes. Engineered a conversion-optimized e-commerce landscape that captures the essence of luxury fragrances for a global audience.
                 </p>
              </motion.div>

              {/* Vertical 2: Jamalullail Academy */}
              <motion.div variants={itemVariants} className="space-y-8 bg-white/5 p-12 rounded-[4rem] border border-white/10 group overflow-hidden">
                 <div className="aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 mb-8">
                    <img 
                      src="https://i.ibb.co/d4Jt8R8r/Screenshot-2026-05-16-224812.png" 
                      alt="Jamalullail Academy Infrastructure" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                 </div>
                 <h2 className="text-3xl text-accent-purple font-display border-b-2 border-accent-purple/20 pb-4">
                    Web Infrastructure for <span className="text-white">Jamalullail Academy.</span>
                 </h2>
                 <p className="text-slate-400 text-lg font-normal leading-relaxed">
                    Engineering specialized educational platforms for spiritual excellence. We unified technical web architecture with global SEO nodes, ensuring a seamless retrieval system for Islamic courses and scholarly content.
                 </p>
                 <div className="flex items-center gap-6 p-10 bg-dark-charcoal rounded-full shadow-lg border border-accent-purple/20">
                    <div className="w-16 h-16 bg-neon-purple/10 rounded-full flex items-center justify-center text-neon-purple shrink-0">
                       <Code size={32} />
                    </div>
                    <div>
                       <p className="text-white/70 text-sm font-medium leading-tight">"Engineered a scalable node that serves a global spiritual audience with 0.4s response times."</p>
                       <p className="text-accent-purple text-[10px] font-bold uppercase tracking-widest mt-2">Academic Success Protocol</p>
                    </div>
                 </div>
              </motion.div>
           </div>
        </section>

        {/* 1000+ WORD BODY COPY EXTENSION: THE PHILOSOPHY */}
        <section className="max-w-4xl mx-auto space-y-16">
           <div className="space-y-12 text-slate-400 text-lg font-light leading-loose">
              <p>
                MSVK is built on the principle that excellence is non-negotiable. As an SEO specialist in Kerala, I help businesses bridge the gap between technical infrastructure and commercial growth, delivering institutional-grade strategies for ambitious brands worldwide.
              </p>
           </div>
           
           <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex items-center gap-6">
                 <div className="w-16 h-16 rounded-full bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center text-neon-purple">
                    <TrendingUp size={32} />
                 </div>
                 <div className="space-y-1">
                    <p className="text-white font-bold uppercase tracking-widest text-xs">Trajectory: Upward</p>
                    <p className="text-white/20 text-[9px] font-mono tracking-tighter">SINAN_VK_SYSTEMS_ACTIVE // 2026</p>
                 </div>
              </div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="px-10 py-5 bg-neon-purple text-white font-bold uppercase tracking-widest text-[10px] rounded-2xl flex items-center gap-4 cursor-pointer shadow-xl hover:bg-muted-purple transition-all"
              >
                Download Credentials <ArrowUpRight size={16} />
              </motion.div>
           </div>
        </section>

        {/* GEOGRAPHIC NODE MAP */}
        <section className="space-y-16 pb-32">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                 <h2 className="text-5xl text-white font-display">The Global Node <br/><span className="text-accent-purple font-serif italic">Centralized.</span></h2>
                 <div className="space-y-6">
                    <div className="flex gap-6 items-start">
                       <MapPin className="text-accent-purple shrink-0" size={24} />
                       <div className="space-y-1">
                          <p className="text-white font-bold uppercase tracking-widest text-xs">Primary Operations Base</p>
                          <p className="text-slate-400 text-sm font-light">Palakkad, Kerala, India (Global Time Node: IST)</p>
                       </div>
                    </div>
                    <div className="flex gap-6 items-start">
                       <Briefcase className="text-accent-purple shrink-0" size={24} />
                       <div className="space-y-1">
                          <p className="text-white font-bold uppercase tracking-widest text-xs">Targeted Verticals</p>
                          <p className="text-slate-400 text-sm font-light">Global Digital Marketing // Luxury Fragrances // Islamic Education // E-commerce Growth</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="h-[400px] rounded-[3rem] overflow-hidden bg-dark-charcoal border border-white/5 relative group shadow-sm">
                 <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none group-hover:bg-transparent transition-all duration-700" />
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.467433290132!2d76.654878!3d10.776652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86dfa087d3a77%3A0x110db567946955a!2sPalakkad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1713511874251!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    className="border-none transition-all duration-1000 scale-105 group-hover:scale-100 grayscale-[0.8] group-hover:grayscale-0 contrast-125 invert-[0.9] hue-rotate-180"
                    allowFullScreen 
                    loading="lazy" 
                  />
              </div>
           </div>
        </section>
      </div>

      {/* NEW SECTION: THE ELITE CERTIFICATION WALL */}
      <section className="bg-obsidian py-32 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-neon-purple/5 blur-[120px] -z-10" />
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          <div className="text-center space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="h-[1px] w-8 bg-neon-purple" />
              <p className="text-neon-purple text-[10px] font-bold uppercase tracking-[1em]">Academic & Skill Clusters</p>
              <div className="h-[1px] w-8 bg-neon-purple" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-display text-white uppercase tracking-tighter leading-none"
            >
              Academic & Professional <br />
              <span className="italic font-serif text-accent-purple">Credentials.</span>
            </motion.h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "Google Search Ads Certification", desc: "Expertise in high-ROI programmatic search strategies and algorithmic bid management.", icon: "G" },
              { title: "Meta Blueprint Associate", desc: "Professional validation for scaling brands within the Meta ecosystem through social dominance.", icon: "M" },
              { title: "HubSpot SEO Certification", desc: "Inbound authority masterclass focused on content entity mapping and search intent.", icon: "H" },
              { title: "Oxdu Media School Diploma", desc: "The core digital marketing foundation, covering technical development and clinical growth.", icon: "O" },
              { title: "Academic Background", desc: "Foundational higher secondary education supporting a logic-driven commercial mindset.", icon: "A" }
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02, 
                  rotateY: 5, 
                  rotateX: 5,
                  zIndex: 20
                }}
                className="group relative bg-dark-charcoal border border-accent-purple/10 rounded-2xl p-10 space-y-8 transition-all hover:border-neon-purple/50 hover:shadow-[0_0_30px_rgba(157,39,176,0.1)]"
              >
                <div className="absolute top-8 right-8 text-accent-purple">
                   <CheckCircle2 size={24} className="drop-shadow-[0_0_10px_rgba(157,39,176,0.5)]" />
                </div>
                
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-purple font-display text-2xl font-bold group-hover:bg-neon-purple group-hover:text-white transition-all duration-500">
                   {cert.icon}
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-display text-white uppercase tracking-tight leading-none group-hover:text-accent-purple transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed italic">
                    {cert.desc}
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-2">
                   <div className="h-[2px] w-0 bg-neon-purple group-hover:w-1/2 transition-all duration-700" />
                   <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest group-hover:text-neon-purple transition-colors">Verified Protocol</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </motion.main>
  );
}

function AuthorityPivot() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  const springConfig = { damping: 25, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const moveX1 = useTransform(x, [-300, 300], [-20, 20]);
  const moveY1 = useTransform(y, [-300, 300], [-20, 20]);
  
  const moveX2 = useTransform(x, [-300, 300], [20, -20]);
  const moveY2 = useTransform(y, [-300, 300], [20, -20]);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="bg-obsidian -mx-6 px-6 py-32 overflow-hidden border-y border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        {/* IMAGE GEOMETRY */}
        <div 
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full lg:w-1/2 aspect-[4/5] perspective-1000 order-2 lg:order-1"
        >
          {/* Frame 1: Purple Glow Behind */}
          <motion.div 
            style={{ x: moveX1, y: moveY1, rotateX: springRotateX, rotateY: springRotateY }}
            className="absolute -inset-4 bg-neon-purple/10 rounded-[3rem] blur-[80px] -z-10" 
          />
          <motion.div 
            style={{ x: moveX1, y: moveY1, rotateX: springRotateX, rotateY: springRotateY }}
            className="absolute inset-6 bg-neon-purple/50 shadow-[0_0_100px_rgba(157,39,176,0.3)] rounded-[2.5rem] -z-10" 
          />

          {/* Background: Floating Glass */}
          <motion.div 
            style={{ x: moveX2, y: moveY2, rotateX: springRotateX, rotateY: springRotateY }}
            className="absolute inset-0 bg-white/5 backdrop-blur-[100px] border border-white/10 rounded-[2.5rem] -z-5" 
          />

          {/* Main Visual */}
          <motion.div 
            style={{ rotateX: springRotateX, rotateY: springRotateY }}
            className="relative w-full h-full rounded-[2.5rem] overflow-hidden group cursor-crosshair shadow-2xl"
          >
            <motion.img 
              src="https://i.ibb.co/tPXVB1Lp/about.png" 
              alt="Muhammed Sinan VK"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            
            {/* Frame 2: Purple Border (Offset) */}
            <motion.div 
              style={{ x: moveX2, y: moveY2 }}
              className="absolute inset-4 border-[1px] border-accent-purple rounded-[2rem] pointer-events-none group-hover:shadow-[0_0_40px_rgba(157,39,176,0.5)] transition-all duration-500" 
            />

            {/* Scanlines Effect Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(157,39,176,0.06),rgba(157,39,176,0.02),rgba(157,39,176,0.06))] bg-[length:100%_2px,3px_100%]" />
          </motion.div>
        </div>

        {/* TEXT ARCHITECTURE */}
        <div className="lg:w-1/2 space-y-12 order-1 lg:order-2">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent-purple text-[9px] font-bold uppercase tracking-[0.5em]"
            >
              <div className="w-1.5 h-1.5 bg-neon-purple rounded-full animate-pulse" />
              Institutional Protocol // 2026
            </motion.div>
            
            <div className="space-y-2">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter leading-[0.8]"
              >
                Muhammed <br />
                Sinan VK.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl font-serif italic text-accent-purple"
              >
                Global Digital Growth Architect
              </motion.p>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <p className="text-slate-400 text-xl font-light leading-relaxed max-w-xl">
              Digital dominance is about more than visibility—it's about authority. I combine <span className="text-white font-medium italic">SEO Expertise</span> and high-fidelity engineering to scale brands globally.
            </p>
            
            <div className="grid grid-cols-2 gap-10">
               <div className="space-y-1">
                  <p className="text-white text-3xl font-display font-bold tracking-tight text-accent-purple">1200%</p>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">Growth Scaling</p>
               </div>
               <div className="space-y-1">
                  <p className="text-white text-3xl font-display font-bold tracking-tight">50+</p>
                  <p className="text-accent-purple text-[10px] font-bold uppercase tracking-[0.3em]">Global Nodes</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-8"
          >
             <button className="bg-neon-purple px-12 py-5 rounded-2xl text-white font-display font-bold uppercase tracking-widest text-[11px] shadow-[0_20px_50px_rgba(157,39,176,0.3)] hover:scale-105 transition-transform">
                Initiate Uplink Protocol
             </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
