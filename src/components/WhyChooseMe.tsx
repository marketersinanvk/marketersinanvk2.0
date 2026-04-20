import { motion } from "motion/react";
import { Cpu, BarChart3, ShieldCheck, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const reasons = [
  {
    title: "AI Integration",
    description: "As the best digital marketer in Kerala, I leverage advanced AI tools to predict trends, automate lead generation, and optimize campaigns for maximum efficiency.",
    icon: Cpu
  },
  {
    title: "Nex.js Lead Gen",
    description: "Specializing in Next.js web development that doesn't just look good, but processes leads for real estate and retail at surgical precision.",
    icon: BarChart3
  },
  {
    title: "Search Dominance",
    description: "Dominating Google Search results with Local SEO Palakkad strategies that place your business in front of high-intent customers instantly.",
    icon: ShieldCheck
  },
  {
    title: "Elite Production",
    description: "Combining technical SEO with professional video editing for Reels to create a multi-channel presence that commands absolute authority.",
    icon: Headphones
  }
];

export default function WhyChooseMe() {
  return (
    <section className="py-12 md:py-16 px-6 sm:px-8 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 md:mb-16 space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-vibrant-indigo text-[9px] font-bold uppercase tracking-[0.5em]"
          >
            The Advantage
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif tracking-tighter text-white leading-tight"
          >
            Why Choose the <br />
            <span className="italic text-vibrant-indigo"><Link to="/services" className="hover:underline">Best Digital Marketer in Kerala?</Link></span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-2 p-8 rounded-[32px] border border-white/5 hover:border-vibrant-indigo/30 transition-all duration-500 group"
            >
              <div className="w-12 h-12 bg-vibrant-indigo/10 rounded-2xl flex items-center justify-center text-vibrant-indigo mb-6 group-hover:bg-vibrant-indigo group-hover:text-white transition-all duration-500">
                <reason.icon size={24} />
              </div>
              <h3 className="text-white text-xl font-serif italic mb-4">{reason.title}</h3>
              <p className="text-silver/40 text-sm font-light leading-relaxed">
                {reason.description} With result-driven strategies from a top <Link to="/contact" className="text-white/60 hover:text-white underline">SEO Specialist in Kerala</Link>, I ensure your brand stays ahead.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
