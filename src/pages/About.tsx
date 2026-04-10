import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen pt-32 md:pt-48 px-6 sm:px-8 pb-32 grainy"
    >
      <SEO 
        title="About Muhammed Sinan VK | Best AI Digital Marketer in Palakkad"
        description="Learn about Muhammed Sinan VK (Marketer Sinan VK), the Best AI Digital Marketer based in Palakkad, Kerala. Specialized in Meta Ads Expert services and SEO Analyst expertise for global clients."
      />
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-32 relative z-10">
        <div className="space-y-6 md:space-y-8">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-neon-green text-[9px] font-bold uppercase tracking-[0.5em]"
          >
            The Heritage
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-9xl font-serif tracking-tighter text-white leading-[1.1] md:leading-[0.85]"
          >
            Defining <br />
            <span className="italic text-neon-green">Excellence.</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="space-y-12 md:space-y-16"
          >
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-serif italic text-white tracking-tight">The Neural Genesis</h2>
              <p className="text-silver/50 text-lg md:text-xl font-light leading-relaxed tracking-wide">
                <span className="text-white font-medium">Muhammed Sinan VK</span> (Marketer Sinan VK) is the <span className="text-neon-green font-bold">Best AI Digital Marketer</span> based in Mappattukara, Koppam, <Link to="/contact" className="text-neon-green hover:underline decoration-neon-green/30 underline-offset-4">Palakkad, Kerala</Link>. 
                Specialized in AI-Driven Growth Strategies, <Link to="/services" className="text-neon-green hover:underline decoration-neon-green/30 underline-offset-4 hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all">Meta Ads Expert</Link> services, and Premium Branding, 
                he serves a global clientele from India to Dubai. 
                Our methodology is a synthesis of human intuition and machine-learned precision, delivering excellence as an 
                <Link to="/services" className="text-neon-green hover:underline decoration-neon-green/30 underline-offset-4 hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all">SEO Analyst</Link> and 
                <Link to="/services" className="text-neon-green hover:underline decoration-neon-green/30 underline-offset-4 hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all">Web Development</Link> specialist.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 md:gap-16">
              {[
                { label: "AI Strategies", value: "45+" },
                { label: "Meta ROI Avg.", value: "4.2x" },
                { label: "Global Clients", value: "12" },
                { label: "Brand Audits", value: "120+" }
              ].map((stat, i) => (
                <div key={i} className="space-y-2 md:space-y-3">
                  <p className="text-neon-green text-4xl md:text-5xl font-serif italic tracking-tighter">{stat.value}</p>
                  <p className="text-silver/30 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em]">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="relative"
          >
            <div className="aspect-[3/4] glass-2 rounded-[40px] md:rounded-[80px] overflow-hidden group border border-white/10 backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.05)]">
              <img 
                src="https://i.ibb.co/35nygCJh/4468012d-b185-4c55-99b5-5f868fd30429.webp" 
                alt="Sinan VK - Freelance Digital Marketing Expert" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-[2000ms] scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-40" />
            </div>
            <div className="absolute -top-12 -right-12 md:-top-16 md:-right-16 w-32 h-32 md:w-48 md:h-48 border-[0.5px] border-neon-green/20 rounded-full animate-pulse" />
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Large Card - Journey */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-2 glass-2 p-8 md:p-12 rounded-[30px] md:rounded-[40px] hover:border-neon-green/50 transition-all duration-700"
          >
            <h3 className="text-neon-green text-2xl md:text-3xl font-serif italic tracking-tight mb-6 md:mb-8">The Journey</h3>
            <p className="text-silver/50 text-lg md:text-xl font-light leading-relaxed tracking-wide">
              My path in the digital realm began with a fascination for the intersection of technology and human psychology. 
              As an AI Digital Marketer, I specialize in leveraging advanced neural architectures to craft marketing strategies 
              that don't just reach audiences—they resonate with them on a fundamental level. 
              My expertise spans across <Link to="/services" className="text-neon-green hover:underline decoration-neon-green/30 underline-offset-4">SEO</Link>, 
              <Link to="/services" className="text-neon-green hover:underline decoration-neon-green/30 underline-offset-4">SEM</Link>, 
              <Link to="/services" className="text-neon-green hover:underline decoration-neon-green/30 underline-offset-4">SMM</Link>, and 
              <Link to="/services" className="text-neon-green hover:underline decoration-neon-green/30 underline-offset-4">Web Development</Link>, 
              ensuring a holistic approach to brand scaling.
            </p>
          </motion.div>

          {/* Small Card - Education */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-2 p-8 md:p-12 rounded-[30px] md:rounded-[40px] hover:border-neon-green/50 transition-all duration-700 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 bg-neon-green/10 rounded-xl flex items-center justify-center text-neon-green group-hover:bg-neon-green group-hover:text-midnight transition-all duration-700">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-neon-green text-xl font-serif italic tracking-tight mb-2">Foundation</h3>
                <p className="text-white font-serif italic text-lg leading-tight">Digital Marketing Specialist Training</p>
                <p className="text-silver/40 text-[10px] uppercase tracking-widest mt-2">
                  YES UQ Mogam & Oxdu Media School <br />
                  <span className="text-neon-green/60">(Specialized in AI-Integrated Marketing)</span>
                </p>
              </div>
            </div>
            <div className="pt-6 border-t border-white/5 mt-6">
              <p className="text-silver/50 text-xs font-light leading-relaxed">
                Gained hands-on experience in high-impact Meta Ads, advanced SEO, and brand growth strategies. 
                This foundation shaped my expertise in scaling brands like MincoKids and KL Gadgetix with data-driven marketing.
              </p>
            </div>
          </motion.div>

          {/* Small Card - Location */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="glass-2 p-8 md:p-12 rounded-[30px] md:rounded-[40px] hover:border-neon-green/50 transition-all duration-700 flex flex-col justify-between group"
          >
            <div>
              <h3 className="text-neon-green text-xl font-serif italic tracking-tight mb-4">Base</h3>
              <Link to="/contact" className="text-silver/40 text-sm font-light leading-relaxed hover:text-neon-green transition-colors">
                Mappattukara, Koppam, Palakkad
              </Link>
            </div>
            <div className="pt-6 md:pt-8 border-t border-white/5 mt-8 md:mt-0">
              <p className="text-white font-serif italic text-xl md:text-2xl">Kerala, India & Dubai</p>
            </div>
          </motion.div>

          {/* Small Card - Expertise */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-2 p-8 md:p-12 rounded-[30px] md:rounded-[40px] hover:border-neon-green/50 transition-all duration-700"
          >
            <h3 className="text-neon-green text-xl font-serif italic tracking-tight mb-6">Expertise</h3>
            <ul className="space-y-3 md:space-y-4">
              {["AI Growth Strategy", "High-ROI Meta Ads", "Premium Branding", "Data Analytics"].map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-silver/50 text-sm font-light">
                  <div className="w-1.5 h-1.5 bg-neon-green rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Large Card - Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 glass-2 p-8 md:p-12 rounded-[30px] md:rounded-[40px] hover:border-neon-green/50 transition-all duration-700"
          >
            <h3 className="text-neon-green text-2xl md:text-3xl font-serif italic tracking-tight mb-6 md:mb-8">The Vision</h3>
            <p className="text-silver/50 text-lg md:text-xl font-light leading-relaxed tracking-wide">
              I believe that the future of the web belongs to those who can harmonize the cold precision of AI 
              with the warm intuition of human creativity. My mission is to build digital legacies that stand 
              the test of time and technological shifts.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
