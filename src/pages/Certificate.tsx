import { motion } from "motion/react";
import CinemaReel from "../components/CinemaReel";
import SEO from "../components/SEO";

export default function Certificate() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen pt-48 px-8 pb-32 grainy"
    >
      <SEO 
        title="Professional Certifications | Marketer Sinan VK"
        description="Industry-validated expertise from Google, Meta, HubSpot, and HP. Verified digital marketing excellence by Muhammed Sinan VK."
      />
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="space-y-6 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-neon-blue-dim text-[9px] font-bold uppercase tracking-[0.5em]"
          >
            The Validation
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-serif tracking-tighter text-white leading-[0.85]"
          >
            Verified <br />
            <span className="italic text-neon-blue text-neon-blue-glow">Excellence.</span>
          </motion.h1>
        </div>

        <div className="glass-2 rounded-[60px] overflow-hidden border border-neon-blue/10 shadow-2xl">
          <CinemaReel />
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-silver/40 text-lg font-light leading-relaxed tracking-wide">
            Each certification represents a milestone in digital mastery, 
            validated by industry-leading institutions and laboratory-tested methodologies.
          </p>
        </div>
      </div>
    </motion.main>
  );
}
