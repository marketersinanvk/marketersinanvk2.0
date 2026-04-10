import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What defines an 'Elite AI Digital Marketer'?",
    answer: "An Elite AI Digital Marketer is someone who combines deep strategic expertise with advanced neural network architectures to predict, target, and acquire high-net-worth audiences with surgical precision.",
  },
  {
    question: "How does Marketer Sinan VK integrate AI into branding?",
    answer: "We use proprietary AI models to analyze market sentiment, predict aesthetic trends, and generate bespoke visual assets that resonate with premium consumers.",
  },
  {
    question: "Is the 'Neural Sync' strategy exclusive to Marketer Sinan VK?",
    answer: "Yes. Neural Sync is our signature laboratory-tested methodology that synchronizes brand identity with the subconscious desires of target segments.",
  },
  {
    question: "What is the typical timeline for a digital legacy campaign?",
    answer: "Our campaigns are built for longevity. A standard initiation phase takes 8-12 weeks, with continuous neural optimization over the following 12-24 months.",
  },
  {
    question: "How do you handle privacy and data for high-profile clients?",
    answer: "Privacy is our highest priority. All client data is processed through secure, encrypted neural nodes with zero-knowledge architecture, ensuring absolute confidentiality.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-teal-light text-[9px] font-bold uppercase tracking-[0.5em]"
          >
            The Inquiries
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif tracking-tight text-white"
          >
            Curated <span className="italic text-teal">Knowledge.</span>
          </motion.h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-2 rounded-[30px] overflow-hidden border border-white/5 hover:border-teal/20 transition-all duration-700"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <span className={`text-xl font-serif italic tracking-tight transition-colors duration-500 ${
                  openIndex === i ? "text-teal" : "text-white group-hover:text-teal-light"
                }`}>
                  {faq.question}
                </span>
                <div className={`w-10 h-10 glass-2 rounded-full flex items-center justify-center transition-all duration-500 ${
                  openIndex === i ? "bg-teal text-midnight" : "text-silver/40"
                }`}>
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-8 pb-8 text-silver/40 text-sm font-light leading-relaxed tracking-wide max-w-2xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
