import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Search, 
  TrendingUp, 
  ShoppingCart,
  Terminal,
  Activity,
  Building2,
  HeartPulse,
  Mail,
  ArrowRight,
  Globe,
  Zap,
  Sparkles,
  Shield,
  BarChart3,
  MousePointer2,
  Target,
  Cpu,
  GraduationCap
} from "lucide-react";
import SEO from "../components/SEO";
import FAQ from "../components/FAQ";

// Magnetic effect component for buttons
const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default function ServicesPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const services = [
    {
      id: "digisinans-global",
      title: "Global Digital Marketing Strategy",
      region: "Digisinans Strategy",
      keyword: "Global SMM & SEO Specialist",
      description: "Scaling international outreach for Digisinans through custom SEO and social media campaigns. We establish strong online visibility with dedicated and results-driven marketing.",
      extendedDesc: "Our strategy focuses on high-competition search dominance and viral social storytelling, ensuring consistent growth for global digital agencies.",
      icon: <Globe className="w-8 h-8" />,
      features: ["International Search Optimization", "Multi-Platform Social Media Management", "Global Brand Strategy", "High-Return Advertising"],
      className: "lg:col-span-12",
      image: "https://i.ibb.co/s7k15Sm/Screenshot-2026-05-16-224324.png",
      accent: "purple",
      link: "https://digisinans.in/"
    },
    {
      id: "gadjenix-ecommerce",
      title: "Full-Stack Gadget Retail Marketing",
      region: "Gadjenix Project",
      keyword: "Ecommerce SEO & Web Dev Expert",
      description: "Scaling Gadjenix from a local gadget shop to a national online store. We integrate fast web development with proven SEO and social media marketing to drive sales in India.",
      extendedDesc: "Engineered zero-latency e-commerce environments optimized for high-volume gadget sales. Full marketing lifecycle management from lead to loyalty.",
      icon: <ShoppingCart className="w-8 h-8" />,
      features: ["Technical E-commerce Development", "National Search Optimization", "Retail Social Media Marketing", "Strategic Sales Consulting"],
      className: "lg:col-span-6",
      image: "https://i.ibb.co/fmhc291/Screenshot-2026-05-16-224940.png",
      accent: "purple",
      link: "https://gadjenix-mr95.vercel.app/"
    },
    {
      id: "smart-supply",
      title: "Smart Kitchen E-commerce & Meta Ads",
      region: "Smart Supply Project",
      keyword: "Smart Kitchen E-com Meta Ads",
      description: "Scaling Smart Supply kitchen gadget store through custom web optimization and high-ROAS Meta Ads campaigns. We deliver targeted traffic and conversion performance.",
      extendedDesc: "Driving customer acquisition for high-demand smart home kitchen devices. We provide full-funnel marketing solutions including pixel setup, custom landing pages, and visual advertising loops.",
      icon: <ShoppingCart className="w-8 h-8" />,
      features: ["Conversion-Optimized Web Design", "Meta Ads Campaign Scaling", "High-ROAS Funnel Engineering", "Advanced Sales Tracking"],
      className: "lg:col-span-6",
      image: "https://i.ibb.co/1JPgNFLZ/Screenshot-2026-07-02-225232.png",
      accent: "purple"
    },
    {
      id: "academic-islamic",
      title: "Islamic Educational Infrastructure",
      region: "Jamalullail Academy Project",
      keyword: "Local SEO & Web Dev for Academy",
      description: "Helping Jamalullail Academy grow as a leading digital platform for Islamic studies. We deploy optimized local SEO and responsive web design to share educational resources in Kerala.",
      extendedDesc: "Optimizing educational retrieval for a scholarly audience through precise web modules and community-focused SMM protocols.",
      icon: <GraduationCap className="w-8 h-8" />,
      features: ["Academic Web Development", "Local SEO & Visibility Building", "Community Social Media Strategy", "Educational Resource Optimization"],
      className: "lg:col-span-12",
      image: "https://i.ibb.co/d4Jt8R8r/Screenshot-2026-05-16-224812.png",
      accent: "purple",
      link: "https://jamalullail.vercel.app/"
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "3cc20a0b-fe19-45c1-87bd-28dc3a71d0ed");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-obsidian pt-32 md:pt-48 px-6 sm:px-8 pb-32 relative text-white/90 selection:bg-neon-purple selection:text-white"
    >
      <SEO 
        title="Professional SEO & Digital Marketing Services in Kerala | MSVK"
        description="Explore our tailored digital marketing and SEO services. Expert branding, web development, and organic growth solutions for Smart Supply, Jamalullail Academy, and more."
      />

      <div className="max-w-6xl mx-auto space-y-48">
        {/* Mixed Elite Hero Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12 text-left"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-6">
             <div className="h-[1px] w-12 bg-accent-purple" />
             <p className="text-accent-purple text-[11px] font-bold uppercase tracking-[0.8em]">Our Services // Dedicated Solutions</p>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-9xl font-display tracking-tight text-white leading-none max-w-5xl uppercase"
          >
            Strategic <br />
            <span className="purple-text-glow italic font-serif bg-gradient-to-r from-neon-purple to-accent-purple bg-clip-text text-transparent">Growth Solutions.</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="max-w-4xl space-y-10">
            <p className="text-white/40 text-2xl font-light leading-relaxed">
              Muhammed Sinan VK delivers reliable digital growth through structured search optimization and targeted social marketing. We don't just optimize—we refine your brand's digital journey for long-term regional and global success.
            </p>
            <div className="flex flex-wrap gap-8 text-white/20">
               <span className="text-[10px] uppercase tracking-[0.5em] font-bold border border-white/5 px-4 py-2 rounded-full">Kerala Core</span>
               <span className="text-[10px] uppercase tracking-[0.5em] font-bold border border-white/5 px-4 py-2 rounded-full">Morvex Node</span>
               <span className="text-[10px] uppercase tracking-[0.5em] font-bold border border-white/5 px-4 py-2 rounded-full">Jamalullail Hub</span>
               <span className="text-[10px] uppercase tracking-[0.5em] font-bold border border-white/5 px-4 py-2 rounded-full">Minco Fashion</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Professional Service Matrix */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-40"
        >
          {services.map((service, i) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              className={`${service.className} grid grid-cols-1 lg:grid-cols-2 gap-20 items-center`}
            >
              <div className={`space-y-12 ${i % 2 !== 0 && i !== 3 ? 'lg:order-2' : ''}`}>
                <div className="space-y-8">
                   <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border transition-all duration-700
                        ${service.accent === 'accent' ? 'border-accent-purple/30 text-accent-purple shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 
                          service.accent === 'pink' ? 'border-neon-pink/30 text-neon-pink shadow-[0_0_30px_rgba(255,77,109,0.1)]' : 
                          'border-neon-purple/30 text-neon-purple shadow-[0_0_30px_rgba(106,13,173,0.1)]'}`}
                      >
                         {service.icon}
                      </div>
                      <div className="space-y-1">
                         <p className={`${service.accent === 'accent' ? 'text-accent-purple' : 'text-neon-purple'} text-[10px] font-bold uppercase tracking-[0.4em] font-mono`}>{service.region}</p>
                         <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest leading-none">{service.keyword}</p>
                      </div>
                   </div>
                   <h3 className="text-4xl md:text-6xl font-display text-white tracking-tighter leading-none uppercase">{service.title}</h3>
                </div>

                <div className="space-y-10">
                   <p className="text-white/50 text-xl leading-relaxed font-light">
                      {service.description}
                   </p>
                   <p className="text-white/30 text-base leading-relaxed font-light border-l-2 border-white/5 pl-10 italic">
                      {service.extendedDesc}
                   </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 py-12 border-y border-white/5">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-[11px] text-white/50 font-bold uppercase tracking-[0.3em] group">
                      <Shield size={16} className={`${service.accent === 'accent' ? 'text-accent-purple' : 'text-neon-purple'} group-hover:scale-125 transition-transform`} />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-6">
                  <MagneticButton>
                    <button 
                      onClick={() => document.getElementById('consultation-node')?.scrollIntoView({ behavior: 'smooth' })}
                      className={`px-14 py-7 font-bold rounded-2xl transition-all text-[11px] uppercase tracking-[0.4em] shadow-2xl flex items-center gap-4 active:scale-95 group relative overflow-hidden
                        ${service.accent === 'accent' ? 'bg-accent-purple text-obsidian hover:bg-white' : 'purple-gradient-bg text-white hover:scale-[1.02]'}`}
                    >
                      <span className="relative z-10">Get Started Now</span>
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform relative z-10" />
                    </button>
                  </MagneticButton>
                  
                  {service.link && (
                    <MagneticButton>
                      <a 
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-14 py-7 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-[11px] uppercase tracking-[0.4em] flex items-center gap-4 shadow-xl group"
                      >
                        Visit Website <Globe size={18} className="group-hover:rotate-12 transition-transform" />
                      </a>
                    </MagneticButton>
                  )}
                </div>
              </div>

              <div className={`relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl group ${i % 2 !== 0 && i !== 3 ? 'lg:order-1' : ''} border border-white/5 shadow-neon-purple/5`}>
                 <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-16">
                    <div className="space-y-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                       <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Verified Success Metric</p>
                       <p className={`text-4xl font-serif italic ${service.accent === 'accent' ? 'text-accent-purple' : 'text-neon-purple'}`}>Growth Strategy: Proven Results.</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* The Success Protocol: Obsidian Rebuild */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-dark-charcoal p-16 md:p-32 rounded-[5rem] border border-white/5 shadow-2xl space-y-32 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-neon-purple/[0.02] -z-10 blur-[100px]" />
          <div className="text-center space-y-8">
             <div className="flex items-center justify-center gap-4">
                <div className="h-[0.5px] w-12 bg-accent-purple" />
                <p className="text-accent-purple text-[11px] font-bold uppercase tracking-[1.5em]">The Sequential Blueprint</p>
                <div className="h-[0.5px] w-12 bg-accent-purple" />
             </div>
             <h2 className="text-6xl md:text-9xl font-display text-white leading-none uppercase tracking-tighter">Our <br /><span className="purple-text-glow italic font-serif text-neon-purple">Process.</span></h2>
             <p className="text-white/10 text-xs font-mono tracking-[0.8em] uppercase italic underline underline-offset-8">Research / Plan / Optimize / Grow</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative">
             <div className="hidden lg:block absolute top-12 left-0 w-full h-[0.5px] bg-white/5 z-0" />
             {[
               { s: "01", t: "Research", d: "Detailed audit of existing digital assets, market opportunities, and competitor visibility gaps." },
               { s: "02", t: "Plan", d: "Designing a comprehensive roadmap optimized for high-intent organic traffic and brand authority." },
               { s: "03", t: "Optimize", d: "Implementation of technical SEO improvements and highly responsive user interfaces." },
               { s: "04", t: "Grow", d: "Ongoing optimization and strategy refinement designed for sustained search growth and brand value." }
             ].map((step, idx) => (
                <div key={idx} className="space-y-10 relative z-10 pt-10 lg:pt-0 group">
                   <div className="w-24 h-24 bg-obsidian border border-white/10 rounded-3xl flex items-center justify-center text-neon-purple text-4xl font-display font-bold group-hover:bg-neon-purple group-hover:text-white transition-all transform group-hover:rotate-[360deg] duration-1000 shadow-xl group-hover:shadow-neon-purple/20">
                      {step.s}
                   </div>
                   <div className="space-y-6">
                      <h4 className="text-3xl font-display text-white tracking-tighter uppercase">{step.t}</h4>
                      <p className="text-white/30 text-base leading-relaxed font-light italic">
                        {step.d}
                      </p>
                      <div className="h-[2px] w-0 bg-neon-purple group-hover:w-full transition-all duration-700" />
                   </div>
                </div>
             ))}
          </div>
        </motion.section>

        {/* Methodological Depth: Dark Elite Theme */}
        <section className="space-y-32">
           <div className="flex flex-col md:flex-row justify-between items-end gap-10">
              <div className="space-y-8">
                 <div className="flex items-center gap-4">
                    <p className="text-accent-purple text-[11px] font-bold uppercase tracking-[1em]">Methodology SPECTRUM</p>
                 </div>
                 <h2 className="text-white text-6xl md:text-9xl font-display tracking-tighter leading-none uppercase">The <span className="purple-text-glow text-neon-purple italic font-serif">Certainty Framework.</span></h2>
              </div>
              <p className="text-white/10 text-[11px] font-mono uppercase tracking-[0.5em] font-bold italic underline">Proven Strategy // Professional Results</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              <div className="space-y-20">
                 <div className="space-y-8 p-12 bg-dark-charcoal/50 border border-white/5 rounded-[3rem] hover:border-accent-purple/20 transition-all group">
                    <h4 className="text-accent-purple text-sm font-bold uppercase tracking-[0.4em] flex items-center gap-4">
                       <Cpu size={20} /> 01. Semantic Entity & Topic Mapping
                    </h4>
                    <p className="text-white/40 text-xl leading-relaxed font-light">
                       Modern search is no longer about strings; it is about entities and relationships. We utilize advanced semantic mapping to ensure your brand is perceived as a high-authority node in your specific vertical.
                    </p>
                 </div>
                 <div className="space-y-8 p-12 bg-dark-charcoal/50 border border-white/5 rounded-[3rem] hover:border-neon-purple/20 transition-all group">
                    <h4 className="text-neon-purple text-sm font-bold uppercase tracking-[0.4em] flex items-center gap-4">
                       <BarChart3 size={20} /> 02. High-Yield Lead Generation
                    </h4>
                    <p className="text-white/40 text-xl leading-relaxed font-light">
                       Lead generation for luxury high-ticket items requires a filtering process that prioritizes intent over volume. We engineer funnels that use psychology trigger mapping to qualify prospects instantly.
                    </p>
                 </div>
              </div>
              <div className="space-y-20">
                 <div className="space-y-8 p-12 bg-dark-charcoal/50 border border-white/5 rounded-[3rem] hover:border-neon-purple/20 transition-all group">
                    <h4 className="text-neon-purple text-sm font-bold uppercase tracking-[0.4em] flex items-center gap-4">
                       <Activity size={20} /> 03. Proactive & Predictive Optimization
                    </h4>
                    <p className="text-white/40 text-xl leading-relaxed font-light">
                       Our comprehensive digital growth strategy uses proactive analysis to stay ahead of search algorithm updates. We position your brand in the path of emerging organic traffic opportunities.
                    </p>
                 </div>
                 <div className="space-y-8 p-12 bg-dark-charcoal/50 border border-white/5 rounded-[3rem] hover:border-accent-purple/20 transition-all group">
                    <h4 className="text-white text-sm font-bold uppercase tracking-[0.4em] flex items-center gap-4">
                       <Shield size={20} /> 04. High Trust & Authority Building
                    </h4>
                    <p className="text-white/40 text-xl leading-relaxed font-light">
                       Authority is key. We establish long-term trust for e-commerce sites, combining elegant web design with reliable optimization and security practices.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* Global Strategy Consultation Form: Obsidian Rebuild */}
        <section id="consultation-node" className="space-y-24 py-24 relative">
          <div className="text-center space-y-8">
             <div className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-[10px] font-bold uppercase tracking-[0.8em] shadow-[0_0_30px_rgba(106,13,173,0.2)]">
               <Sparkles size={14} className="animate-pulse" />
               Get Direct Consultation
             </div>
             <h2 className="text-6xl md:text-9xl font-display text-white uppercase tracking-tighter leading-none">Start Your <br /><span className="purple-text-glow text-neon-purple italic font-serif">Consultation.</span></h2>
             <p className="text-white/20 text-xl font-light tracking-[1em] uppercase">( MORVEX / JAMALULLAIL / MINCO / LUXAVYA )</p>
          </div>

          <div className="max-w-5xl mx-auto bg-dark-charcoal p-16 md:p-24 rounded-[4.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-16 opacity-5 rotate-12">
               <Mail size={400} className="text-neon-purple" />
            </div>
            <form onSubmit={handleSubmit} className="space-y-16 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-6">
                  <label className="text-[11px] font-bold uppercase tracking-[0.5em] text-white/30 flex items-center gap-3">
                     <MousePointer2 size={14} className="text-neon-purple" /> Your Name
                  </label>
                  <input 
                    name="name"
                    required
                    type="text" 
                    placeholder="Your Full Name"
                    className="w-full bg-transparent border-b border-white/10 px-0 py-8 text-white placeholder:text-white/10 focus:outline-none focus:border-neon-purple transition-all font-light text-2xl"
                  />
                </div>
                <div className="space-y-6">
                  <label className="text-[11px] font-bold uppercase tracking-[0.5em] text-white/30 flex items-center gap-3">
                     <Mail size={14} className="text-neon-purple" /> Your Email
                  </label>
                  <input 
                    name="email"
                    required
                    type="email" 
                    placeholder="name@company.com"
                    className="w-full bg-transparent border-b border-white/10 px-0 py-8 text-white placeholder:text-white/10 focus:outline-none focus:border-neon-purple transition-all font-light text-2xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-6">
                    <label className="text-[11px] font-bold uppercase tracking-[0.5em] text-white/30 flex items-center gap-3">
                       <Target size={14} className="text-neon-purple" /> Select Project Area
                    </label>
                    <select 
                      name="market"
                      className="w-full bg-transparent border-b border-white/10 px-0 py-8 text-white focus:outline-none focus:border-neon-purple transition-all font-light text-xl appearance-none cursor-pointer"
                    >
                      <option className="bg-obsidian">Smart Supply E-commerce</option>
                      <option className="bg-obsidian">Asna Packing Web Showcase</option>
                      <option className="bg-obsidian">Jamalullail Academy Project</option>
                      <option className="bg-obsidian">Minco Kids E-commerce</option>
                      <option className="bg-obsidian">Luxavya Social Media</option>
                      <option className="bg-obsidian">Other Custom Projects</option>
                    </select>
                </div>
                <div className="space-y-6">
                    <label className="text-[11px] font-bold uppercase tracking-[0.5em] text-white/30 flex items-center gap-3">
                       <BarChart3 size={14} className="text-neon-purple" /> Select Strategic Goal
                    </label>
                    <select 
                      name="objective"
                      className="w-full bg-transparent border-b border-white/10 px-0 py-8 text-white focus:outline-none focus:border-neon-purple transition-all font-light text-xl appearance-none cursor-pointer"
                    >
                      <option className="bg-obsidian">Search Engine Optimization</option>
                      <option className="bg-obsidian">Web Development & Design</option>
                      <option className="bg-obsidian">Growth Strategy</option>
                      <option className="bg-obsidian">Consultation Support</option>
                    </select>
                </div>
              </div>

              <div className="space-y-6">
                <label className="text-[11px] font-bold uppercase tracking-[0.5em] text-white/30 flex items-center gap-3">
                   <Activity size={14} className="text-neon-purple" /> How Can We Help You?
                </label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project goals and requirements..."
                  className="w-full bg-transparent border-b border-white/10 px-0 py-8 text-white placeholder:text-white/10 focus:outline-none focus:border-neon-purple transition-all font-light text-2xl resize-none"
                />
              </div>

              <MagneticButton>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-10 purple-gradient-bg text-white font-bold rounded-[2.5rem] transition-all text-[12px] uppercase tracking-[0.8em] flex items-center justify-center gap-6 shadow-[0_30px_60px_rgba(106,13,173,0.3)] disabled:opacity-50 group active:scale-95 relative overflow-hidden"
                >
                  <span className="relative z-10">{isSubmitting ? "Sending Request..." : "Request Free Consultation"}</span>
                  <ArrowRight size={22} className="group-hover:translate-x-3 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </MagneticButton>

              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-accent-purple text-[12px] font-bold uppercase tracking-[0.5em] text-center italic"
                  >
                    Thank you! Your request has been sent successfully. We'll be in touch soon.
                  </motion.p>
                )}
                {submitStatus === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-neon-pink text-[12px] font-bold uppercase tracking-[0.5em] text-center"
                  >
                    An error occurred. Please try again or contact us directly.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </section>

        {/* Global Node Branding Accent */}
        <div className="pt-40 text-center space-y-10">
           <div className="h-[0.5px] w-24 bg-white/10 mx-auto" />
           <p className="text-white/10 text-[10px] uppercase tracking-[1em] font-display font-medium">
             Muhammed Sinan VK // Digital Marketing & SEO Services // KERALA - GLOBAL
           </p>
           <Link to="/" className="text-white/5 hover:text-white/20 transition-all text-[8px] uppercase tracking-[0.5em] block">
              Back to Home
           </Link>
        </div>
      </div>
      
      <div className="bg-obsidian relative z-20 mt-40">
         <FAQ />
      </div>
    </motion.main>
  );
}

