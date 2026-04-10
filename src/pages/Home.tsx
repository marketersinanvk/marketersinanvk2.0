import { motion } from "motion/react";
import Hero from "../components/Hero";
import CinemaReel from "../components/CinemaReel";
import ContactForm from "../components/ContactForm";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";
import { Briefcase, Award, Globe, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen grainy"
    >
      <SEO 
        title="Best AI Digital Marketer in Palakkad, Kerala | Marketer Sinan VK"
        description="Elevate your business with Muhammed Sinan VK, the best AI digital marketer in Palakkad, Kerala. Expert in Meta Ads, SEO, and AI-driven growth strategies for brands in India and Dubai."
        image="https://picsum.photos/seed/sinan-hero/1200/630"
      />
      <Hero />

      {/* Trust & Impact Metrics - Counter Section */}
      <section className="py-20 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                label: "Projects Delivered", 
                value: "50+", 
                icon: Briefcase, 
                link: "/portfolio",
                desc: "High-impact digital solutions" 
              },
              { 
                label: "Professional Certifications", 
                value: "10+", 
                icon: Award, 
                link: "/certificate",
                desc: "Industry-validated expertise" 
              },
              { 
                label: "Market Expertise", 
                value: "India & UAE", 
                icon: Globe, 
                link: "/about",
                desc: "Global scaling, local precision" 
              }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <Link to={stat.link} className="block p-8 glass-2 rounded-[30px] border border-white/5 hover:border-neon-green/30 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-neon-green/10 rounded-2xl flex items-center justify-center text-neon-green group-hover:bg-neon-green group-hover:text-midnight transition-all duration-500">
                      <stat.icon size={24} />
                    </div>
                    <p className="text-neon-green text-3xl md:text-4xl font-serif italic tracking-tighter">{stat.value}</p>
                  </div>
                  <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-2">{stat.label}</h4>
                  <p className="text-silver/40 text-xs font-light tracking-wide">{stat.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Validated Expertise - Trust Bar */}
      <CinemaReel 
        title="THE VISUAL ARCHIVE" 
        subtitle="CINEMATIC NARRATIVES" 
        refCode="REF. MSVK-8590181381 // KERALA, INDIA // 2026"
      />
      
      {/* Brand Philosophy - The Intro */}
      <section className="py-24 md:py-40 px-6 sm:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 md:space-y-10"
          >
            <h2 className="text-neon-green text-[9px] font-bold uppercase tracking-[0.5em]">The Philosophy</h2>
            <h3 className="text-5xl sm:text-6xl md:text-8xl font-serif tracking-tighter text-white leading-[1.1] md:leading-[0.85]">
              Engineering <br />
              <span className="italic text-neon-green">Digital</span> <br />
              Legacies.
            </h3>
            <p className="text-silver/50 text-lg md:text-xl font-light leading-relaxed tracking-wide max-w-lg">
              We transcend traditional marketing. Marketer Sinan VK is a laboratory of digital excellence, 
              where AI meets the refined aesthetics of premium branding. 
              Specializing as a <Link to="/services" className="text-neon-green hover:underline decoration-neon-green/30 underline-offset-4 hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all">Meta Ads Expert</Link> and 
              <Link to="/services" className="text-neon-green hover:underline decoration-neon-green/30 underline-offset-4 hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all">SEO Analyst</Link>, 
              we engineer every interaction as an intentional step towards market dominance in <Link to="/contact" className="text-neon-green hover:underline decoration-neon-green/30 underline-offset-4">Palakkad, Kerala</Link> and Dubai.
            </p>
            <button className="px-10 py-5 md:px-12 md:py-6 glass-2 border border-neon-green/20 text-neon-green font-bold rounded-full hover:bg-neon-green hover:text-midnight transition-all duration-700 uppercase tracking-[0.2em] text-[10px] w-full sm:w-auto">
              The Manifesto
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] glass-2 rounded-[40px] sm:rounded-[80px] overflow-hidden group shadow-[0_0_50px_rgba(57,255,20,0.1)] border border-neon-green/5">
              <img 
                src="https://i.ibb.co/Lhbqr2Sz/41aecd83-4559-408c-b5fd-380658eed52f.png" 
                alt="Muhammed Sinan VK - Digital Excellence Portrait" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-[2000ms] scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-60" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 sm:-bottom-12 sm:-right-12 w-40 h-40 sm:w-56 sm:h-56 glass-2 rounded-full border border-neon-green/10 flex items-center justify-center p-6 sm:p-10 animate-pulse">
              <p className="text-neon-green text-[7px] sm:text-[8px] font-bold uppercase tracking-[0.4em] text-center leading-loose">
                Crafted for the <br /> 0.1%
              </p>
            </div>
          </motion.div>
        </div>
      </section>
 
      <Testimonials />

      {/* Let's Collaborate - Contact Section */}
      <section className="py-24 md:py-40 px-6 sm:px-8 relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="space-y-8 md:space-y-12 lg:sticky lg:top-40">
              <div className="space-y-4 md:space-y-6">
                <p className="text-neon-green text-[9px] font-bold uppercase tracking-[0.5em]">The Initiation</p>
                <h2 className="text-6xl sm:text-7xl md:text-9xl font-serif tracking-tighter text-white leading-[1.1] md:leading-[0.85]">
                  Let's <br />
                  <span className="italic text-neon-green">Collaborate.</span>
                </h2>
              </div>
              <p className="text-silver/40 text-base md:text-lg font-light leading-relaxed tracking-wide max-w-md">
                Ready to scale your brand with AI-driven precision? 
                Initiate the connection and let's engineer your digital legacy in Palakkad and beyond.
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4">
                {[
                  { Icon: Twitter, href: "https://twitter.com/sinan246810", label: "X" },
                  { Icon: Instagram, href: "https://www.instagram.com/muhammed_sinan_vk_85", label: "Instagram" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/sinan-vk", label: "LinkedIn" },
                  { Icon: Youtube, href: "https://www.youtube.com/@DigitalMark-l3q", label: "YouTube" }
                ].map(({ Icon, href, label }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 glass-2 rounded-2xl flex items-center justify-center text-neon-blue hover:border-neon-blue/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-500"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </motion.main>
  );
}
