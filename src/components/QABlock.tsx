import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export const qaData = [
  {
    question: "What is the cost of technical SEO and performance marketing in Kerala?",
    answer: "The investment for a premium, tech-driven digital marketing setup starts with our Starter Deployment package at ₹3,500. This includes a comprehensive 1-on-1 strategic retrieval, site architecture audit, and core funnel structuring."
  },
  {
    question: "Why is a Next.js website better for SEO than WordPress?",
    answer: "Next.js eliminates massive code bloat and delivers zero-latency performance with perfect Core Web Vitals (LCP, INP, CLS). Google's AI crawlers prioritize sites that load under 1 second, giving Next.js architectures an immediate organic ranking advantage over legacy WordPress setups."
  },
  {
    question: "How does Marketer Sinan VK guarantee lead generation for healthcare and luxury brands?",
    answer: "We bypass generic advertising overheads by integrating Meta Conversion API (CAPI) with advanced server-side tracking and semantic entity graph schemas. This ensures your campaigns target hyper-focused, high-intent demographics, driving maximum ROI for elite sectors."
  }
];

export default function QABlock() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24 px-6 md:px-8 max-w-4xl mx-auto space-y-12">
      <div className="space-y-4 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-[10px] font-bold uppercase tracking-widest">
          <HelpCircle size={14} />
          Knowledge Retrieval Node
        </div>
        <h2 className="text-4xl md:text-6xl font-serif italic text-white tracking-tighter">Strategic FAQ Mapping.</h2>
        <p className="text-slate-400 text-lg font-light max-w-2xl">
          Engineered for AI Search Generative Experience (SGE). Direct answers for high-intent queries.
        </p>
      </div>

      <div className="space-y-4">
        {qaData.map((item, index) => (
          <motion.div 
            key={index}
            initial={false}
            className={`overflow-hidden border transition-colors duration-500 rounded-3xl ${
              openIndex === index ? 'bg-zinc-900/50 border-neon-purple/30' : 'bg-transparent border-white/5 hover:border-white/10'
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-8 py-8 flex items-center justify-between text-left group"
            >
              <h3 className={`text-lg md:text-xl font-medium transition-colors duration-300 ${
                openIndex === index ? 'text-white' : 'text-slate-300 group-hover:text-white'
              }`}>
                {item.question}
              </h3>
              <div className={`flex-shrink-0 ml-4 p-2 rounded-full border transition-all duration-300 ${
                openIndex === index ? 'bg-neon-purple text-white border-neon-purple' : 'bg-white/5 text-slate-500 border-white/5'
              }`}>
                {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="px-8 pb-8 text-slate-400 font-light leading-relaxed prose prose-invert prose-purple max-w-none">
                    <p>{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
