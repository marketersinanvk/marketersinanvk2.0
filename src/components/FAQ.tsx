import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Why should I hire a freelance digital marketer in Kerala?",
    answer: "Hiring a freelance digital marketer in Kerala offers personalized attention and cost-effective solutions tailored to your business. Unlike large agencies, a freelancer like myself provides agile strategies and direct communication, ensuring your brand's unique needs are met with precision and AI-driven insights.",
    links: [
      { text: "About My Journey", path: "/about" },
      { text: "View Success Stories", path: "/portfolio" }
    ]
  },
  {
    question: "Who is the best digital marketer in Kerala for AI growth?",
    answer: "Muhammed Sinan VK (Marketer Sinan VK) is widely recognized as the best digital marketer in Kerala for AI-integrated growth. By combining Oxdu Media School expertise with advanced AI tools, I help businesses in Palakkad and across Kerala achieve 10x scaling through data-driven strategies.",
    links: [
      { text: "Explore AI Services", path: "/services" }
    ]
  },
  {
    question: "What makes you a top SEO specialist in Kerala?",
    answer: "As an SEO specialist in Kerala, I focus on 'Result-Oriented SEO'. This means going beyond just rankings to drive actual conversions. My process involves deep technical audits, AI-powered keyword research, and high-authority link building to ensure your business dominates local and global search results.",
    links: [
      { text: "SEO Methodology", path: "/about" }
    ]
  },
  {
    question: "How can a social media specialist in Kerala help my brand?",
    answer: "A social media specialist in Kerala helps your brand build a loyal community and drive sales through platforms like Meta and Instagram. I specialize in high-ROI Meta Ads and cinematic content strategy that captures attention and converts followers into customers.",
    links: [
      { text: "Social Media Strategy", path: "/services" }
    ]
  },
  {
    question: "Do you offer digital marketing services in Palakkad?",
    answer: "Yes, I am based in Palakkad, Kerala, and offer comprehensive digital marketing services to local businesses. From local SEO to premium branding, I help Palakkad-based entrepreneurs compete on a global scale using the latest digital tools.",
    links: [
      { text: "Contact Me", path: "/contact" }
    ]
  },
  {
    question: "What are the benefits of AI-integrated marketing for small businesses?",
    answer: "AI-integrated marketing allows small businesses in Kerala to automate data analysis, personalize customer experiences, and optimize ad spend with surgical precision. This ensures that even with a limited budget, you can achieve results that rival much larger competitors.",
    links: [
      { text: "AI Solutions", path: "/services" }
    ]
  },
  {
    question: "How long does it take to see results from SEO in Kerala?",
    answer: "While SEO is a long-term strategy, most businesses in Kerala start seeing significant improvements in local search visibility within 3 to 6 months. As a dedicated SEO specialist in Kerala, I provide monthly reports to track progress and adjust strategies for maximum ROI.",
    links: [
      { text: "View Portfolio", path: "/portfolio" }
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
