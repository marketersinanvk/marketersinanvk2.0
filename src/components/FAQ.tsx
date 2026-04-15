import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Why should I choose the best AI digital marketer in Palakkad?",
    answer: "Choosing the best AI digital marketer in Palakkad ensures your brand leverages cutting-edge neural strategies that traditional agencies miss. AI-driven growth offers 10x faster scaling by predicting consumer behavior. You can see my results in my portfolio or check out my specialized services.",
    links: [
      { text: "View Portfolio", path: "/portfolio" },
      { text: "Explore Services", path: "/services" }
    ]
  },
  {
    question: "How does AI-integrated marketing improve my ROI?",
    answer: "AI-integrated marketing optimizes your ad spend in real-time, ensuring every rupee delivers maximum value. By using predictive analytics and automated behavior tracking, we achieve higher conversion rates compared to standard methods. Learn more about our high-ROI Meta Ads on our services page.",
    links: [
      { text: "Our Services", path: "/services" }
    ]
  },
  {
    question: "What makes your digital marketing consultancy unique in Kerala?",
    answer: "Unlike a standard digital marketing agency in Kerala, my consultancy focuses on a synthesis of human intuition and machine-learned precision. I provide personalized, agile strategies that adapt to algorithm changes instantly. Read more about my methodology in the about section.",
    links: [
      { text: "About My Process", path: "/about" }
    ]
  },
  {
    question: "Can you help scale my business in Dubai or the UAE?",
    answer: "Absolutely. I serve a global clientele from India to Dubai, helping brands achieve international market dominance. Whether you need local SEO in Palakkad or global scaling in the UAE, my AI strategies are built for cross-border success. Contact me to discuss your global vision.",
    links: [
      { text: "Initiate Connection", path: "/contact" }
    ]
  },
  {
    question: "Do you provide custom UI/UX design for small businesses?",
    answer: "Yes, I believe a great marketing strategy must be supported by a high-converting user experience. I offer premium UI/UX design for small businesses, ensuring your website is a high-performance sales machine that reflects your brand's elite status.",
    links: [
      { text: "UI/UX Services", path: "/services" }
    ]
  },
  {
    question: "How can I start a project with Marketer Sinan VK?",
    answer: "Starting a project is simple. You can reach out via my contact form or use the quick-access WhatsApp button on the home page. We'll begin with a brand audit to identify your growth potential and engineer your digital legacy.",
    links: [
      { text: "Contact Now", path: "/contact" }
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
    <section className="py-32 px-8 relative overflow-hidden border-t border-white/5">
      {/* SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-neon-blue text-[9px] font-bold uppercase tracking-[0.5em]"
          >
            The Intelligence
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif tracking-tight text-white leading-tight"
          >
            Curated <span className="italic text-neon-blue drop-shadow-[0_0_10px_rgba(0,210,255,0.3)]">Knowledge.</span>
          </motion.h2>
          <p className="text-sm font-light tracking-wide max-w-lg mx-auto" style={{ color: "rgba(192, 192, 192, 0.4)" }}>
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
              className={`glass-2 rounded-[30px] overflow-hidden border transition-all duration-700`}
              style={{ 
                borderColor: openIndex === i ? "rgba(0, 210, 255, 0.3)" : "rgba(255, 255, 255, 0.05)",
                boxShadow: openIndex === i ? "0 0 30px rgba(0, 210, 255, 0.1)" : "none"
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <span 
                  className="text-xl font-serif italic tracking-tight transition-colors duration-500"
                  style={{ color: openIndex === i ? "#00d2ff" : "white" }}
                >
                  {faq.question}
                </span>
                <div 
                  className="w-10 h-10 glass-2 rounded-full flex items-center justify-center transition-all duration-500"
                  style={{ 
                    backgroundColor: openIndex === i ? "#00d2ff" : "transparent",
                    color: openIndex === i ? "#000000" : "rgba(192, 192, 192, 0.4)",
                    boxShadow: openIndex === i ? "0 0 15px rgba(0, 210, 255, 0.5)" : "none"
                  }}
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
                      <p className="text-base font-light leading-relaxed tracking-wide max-w-2xl" style={{ color: "rgba(192, 192, 192, 0.6)" }}>
                        {faq.answer}
                      </p>
                      
                      {faq.links && (
                        <div className="flex flex-wrap gap-4 pt-2">
                          {faq.links.map((link, li) => (
                            <Link 
                              key={li}
                              to={link.path}
                              className="inline-flex items-center gap-2 text-neon-blue text-[10px] font-bold uppercase tracking-widest hover:gap-3 transition-all group/link"
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
