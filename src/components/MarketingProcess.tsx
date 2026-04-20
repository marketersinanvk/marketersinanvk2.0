import { motion } from "motion/react";
import { Search, Lightbulb, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    title: "Intelligence Gathering",
    description: "Our mission begins with deep neural analysis. As the Best SEO Expert in Kerala, I conduct exhaustive technical audits and competitor landscape mapping. We identify the specific triggers that drive Local SEO Services in Palakkad, ensuring your baseline is primed for rapid indexing and search dominance.",
    icon: Search,
    color: "rgba(99, 102, 241, 0.1)"
  },
  {
    title: "Strategy Architecture",
    description: "We don't guess; we engineer. As your Freelance Digital Marketer in Kerala, I craft a bespoke roadmap that integrates Ecommerce Website Development India standards with high-ROI Meta Ads funnels. We define the search intent and community pillars that will govern your brand's digital legacy.",
    icon: Lightbulb,
    color: "rgba(99, 102, 241, 0.15)"
  },
  {
    title: "Surgical Execution",
    description: "The activation phase. Here, my team provides Custom Website Development Kerala expertise, deploying ultra-fast Next.js applications and high-impact Social Media Post Design Services. Every line of code and every pixel is optimized for performance, storytelling, and surgical conversion precision.",
    icon: Zap,
    color: "rgba(99, 102, 241, 0.2)"
  },
  {
    title: "Algorithmic Scaling",
    description: "Optimization is infinite. Acting as your Social Media Manager for Small Business and SEO analyst, I monitor real-time data to pivot and scale your influence. We leverage lead generation services for real estate & retail sectors to ensure a consistent flow of high-intent clients and absolute market authority.",
    icon: TrendingUp,
    color: "rgba(99, 102, 241, 0.25)"
  }
];

export default function MarketingProcess() {
  return (
    <section className="py-12 md:py-16 px-6 sm:px-8 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 md:mb-16 text-right space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-vibrant-indigo text-[9px] font-bold uppercase tracking-[0.5em]"
          >
            The Methodology
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif tracking-tighter text-white leading-tight"
          >
            Our Marketing <br />
            <span className="italic text-vibrant-indigo">Process.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-vibrant-indigo/20 to-transparent hidden lg:block -translate-y-1/2" />

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
                  className="w-20 h-20 rounded-full flex items-center justify-center text-vibrant-indigo mb-8 border border-vibrant-indigo/20 relative group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundColor: step.color }}
                >
                  <step.icon size={32} />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-midnight border border-vibrant-indigo/20 rounded-full flex items-center justify-center text-[10px] font-bold text-vibrant-indigo">
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
