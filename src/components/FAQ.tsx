import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Who is the best SEO expert in Kerala for small business growth?",
    answer: "Muhammed Sinan VK is a leading SEO expert in Kerala, specializing in AI-integrated strategies that help small businesses outrank competitors. My approach focuses on technical integrity and semantic depth to ensure sustainable growth and a high ROI for your niche.",
    links: [
      { text: "About My Strategy", path: "/about" },
      { text: "Success Stories", path: "/portfolio" }
    ]
  },
  {
    question: "How do I find local SEO services in Palakkad that actually work?",
    answer: "Effective local SEO in Palakkad relies on understanding regional search patterns and Google Map Pack algorithms. I provide targeted strategies that optimize your GMB profile and resolve indexing delays, ensuring your business stays highly visible to local customers.",
    links: [
      { text: "Local SEO Elite", path: "/services" }
    ]
  },
  {
    question: "What is the true cost of professional website development in Kerala for 2026?",
    answer: "I deliver high-performance Next.js applications that balance premium aesthetics with technical precision. My packages are built for conversion, ensuring your website functions as a revenue-generating asset rather than just a digital brochure.",
    links: [
      { text: "Explore Tech Stack", path: "/services" }
    ]
  },
  {
    question: "How can a social media manager for small business help my brand scale?",
    answer: "As a social media manager, I use Meta Ads and cinematic storytelling to create high-converting funnels. By focusing on 'scroll-stopping' content and viral-hook psychology, I build communities and drive measurable sales growth for your brand.",
    links: [
      { text: "Social Media Elite", path: "/services" }
    ]
  },
  {
    question: "Which lead generation services for real estate in Kerala are most effective?",
    answer: "Effective real estate lead generation combines high-intent search traffic with targeted Meta Ads. I build acquisition funnels that capture qualified prospects, using data-driven optimization to maximize conversion rates and pipeline efficiency.",
    links: [
      { text: "Contact Me", path: "/contact" }
    ]
  },
  {
    question: "How long does it take for a freelance digital marketer in Kerala to show SEO results?",
    answer: "While initial results appear in weeks, market dominance typically takes 3 to 6 months. I provide transparent reporting and use 'White-Hat' techniques to ensure your rankings are sustainable and protected from algorithm updates.",
    links: [
      { text: "View Portfolio", path: "/portfolio" }
    ]
  },
  {
    question: "What makes your Ecommerce Website Development India strategy superior for global sales?",
    answer: "My e-commerce strategy focuses on pure performance and global compliance. We build headless solutions using Next.js for lightning-fast speeds, ensuring your products rank globally and deliver a zero-friction checkout experience.",
    links: [
        { text: "Ecommerce Solutions", path: "/services" }
    ]
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // FAQ Schema (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-16 md:py-24 px-8 relative overflow-hidden border-t border-white/5 bg-obsidian">
      {/* SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent-purple text-[9px] font-bold uppercase tracking-[0.5em]"
          >
            Tactical Intelligence
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display tracking-tight text-white leading-tight uppercase"
          >
            Curated <span className="italic text-neon-purple purple-text-glow">Knowledge.</span>
          </motion.h2>
          <p className="text-sm font-light tracking-wide max-w-lg mx-auto text-white/30 italic">
            Insights from the <span className="text-white font-medium">Best AI Digital Marketer in Palakkad</span> on engineering digital dominance.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bg-dark-charcoal/50 rounded-3xl overflow-hidden border transition-all duration-700`}
              style={{ 
                borderColor: openIndex === i ? "rgba(106, 13, 173, 0.3)" : "rgba(255, 255, 255, 0.05)",
                boxShadow: openIndex === i ? "0 20px 40px rgba(106, 13, 173, 0.05)" : "none"
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <span 
                  className={`text-xl font-display uppercase tracking-tight transition-colors duration-500 ${openIndex === i ? "text-neon-purple" : "text-white/70"}`}
                >
                  {faq.question}
                </span>
                <div 
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 border ${openIndex === i ? "bg-neon-purple text-white border-neon-purple shadow-[0_0_20px_rgba(106,13,173,0.3)]" : "bg-white/5 text-white/20 border-white/5"}`}
                >
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
                    <div className="px-8 pb-8 space-y-6">
                      <p className="text-base font-light leading-relaxed tracking-wide max-w-2xl text-white/40 italic">
                        {faq.answer}
                      </p>
                      
                      {faq.links && (
                        <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                          {faq.links.map((link, li) => (
                            <Link 
                              key={li}
                              to={link.path}
                              className="inline-flex items-center gap-2 text-neon-purple text-[10px] font-bold uppercase tracking-widest hover:gap-3 transition-all group/link hover:text-white"
                            >
                              {link.text} <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </Link>
                          ))}
                        </div>
                      )}
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
