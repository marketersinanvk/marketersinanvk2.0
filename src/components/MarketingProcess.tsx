import { motion } from "motion/react";
import { Search, Lightbulb, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    title: "Analysis",
    description: "Deep dive into your market as an SEO specialist in Kerala to identify growth opportunities.",
    icon: Search,
    color: "rgba(0, 229, 255, 0.2)"
  },
  {
    title: "Strategy",
    description: "Crafting a bespoke AI-integrated roadmap by the best digital marketer in Kerala.",
    icon: Lightbulb,
    color: "rgba(0, 229, 255, 0.3)"
  },
  {
    title: "Execution",
    description: "Implementing high-performance campaigns as a freelance digital marketer in Kerala.",
    icon: Zap,
    color: "rgba(0, 229, 255, 0.4)"
  },
  {
    title: "Optimization",
    description: "Continuous monitoring by a social media specialist in Kerala to ensure maximum ROI.",
    icon: TrendingUp,
    color: "rgba(0, 229, 255, 0.5)"
  }
];

export default function MarketingProcess() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-8 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 md:mb-16 text-right space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-arctic-blue text-[9px] font-bold uppercase tracking-[0.5em]"
          >
            The Methodology
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif tracking-tighter text-white leading-tight"
          >
            Our Marketing <br />
            <span className="italic text-arctic-blue">Process.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-arctic-blue/20 to-transparent hidden lg:block -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center text-arctic-blue mb-8 border border-arctic-blue/20 relative group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundColor: step.color }}
                >
                  <step.icon size={32} />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-midnight border border-arctic-blue/20 rounded-full flex items-center justify-center text-[10px] font-bold text-arctic-blue">
                    0{i + 1}
                  </div>
                </div>
                <h3 className="text-white text-2xl font-serif italic mb-4">{step.title}</h3>
                <p className="text-silver/40 text-sm font-light leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
