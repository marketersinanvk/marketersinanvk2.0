import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Who is the best SEO expert in Kerala for small business growth?",
    answer: "Muhammed Sinan VK (Marketer Sinan VK) is widely recognized as the Best SEO Expert in Kerala, specializing in sustainable growth for small businesses through AI-integrated strategies. By focusing on technical integrity and semantic depth, I help local entrepreneurs outrank massive competitors. My approach as a Freelance Digital Marketer in Kerala is personalized, results-driven, and built for the long term, ensuring your brand achieves 10x visibility and sustainable ROI. We prioritize high-competition keywords like 'Custom Website Development Kerala' and 'Local SEO Services in Palakkad' to ensure you dominate your specific market niche from day one.",
    links: [
      { text: "About My Strategy", path: "/about" },
      { text: "Success Stories", path: "/portfolio" }
    ]
  },
  {
    question: "How do I find local SEO services in Palakkad that actually work?",
    answer: "Finding effective Local SEO Services in Palakkad requires looking for a specialist who understands the local search landscape and Google Map Pack algorithms. I provide targeted localization strategies that capture high-intent customers right when they are searching for services in Palakkad. We resolve your indexing delays and optimize your Google Business Profile to ensure absolute regional dominance. My freelance digital marketer in Kerala services act as a bridge between your local presence and global standards, ensuring your business stays relevant and highly visible to the local population looking for reliable experts.",
    links: [
      { text: "Local SEO Elite", path: "/services" }
    ]
  },
  {
    question: "What is the true cost of professional website development in Kerala for 2026?",
    answer: "I offer Affordable Web Development Services that do not compromise on the 'Elite Agency' aesthetic. My Custom Website Development Kerala packages are designed to provide high-performance Next.js applications that are built for conversion. Whether it's Ecommerce Website Development India or a simple brand portfolio, we focus on performance, accessibility, and integrated SEO architecture. In 2026, a website must be more than pretty; it must be a technical masterpiece. Our solutions ensure your website is an asset that generates revenue, rather than just a digital brochure, typically providing an ROI that exceeds traditional media spend by 400%.",
    links: [
      { text: "Explore Tech Stack", path: "/services" }
    ]
  },
  {
    question: "How can a social media manager for small business help my brand scale?",
    answer: "As a strategic Social Media Manager for Small Business, I transform your social profiles into high-converting funnels. My Social Media Post Design Services focus on premium aesthetics that command attention. By integrating Meta Ads and cinematic storytelling through my Professional Video Editor for Instagram Reels services, I create a holistic digital ecosystem that builds community and drives measurable sales growth. In the modern 'attention economy', your brand needs to stop the scroll. We use viral-hook psychology and algorithmic precision to ensure your content reaches the right eyes at the right time, especially for businesses in the Real Estate and Retail sectors across Kerala.",
    links: [
      { text: "Social Media Elite", path: "/services" }
    ]
  },
  {
    question: "Which lead generation services for real estate in Kerala are most effective?",
    answer: "Lead Generation Services for Real Estate in Kerala are most effective when they combine high-intent Google Search traffic with high-ROI Meta Ads targeting. I build surgical acquisition funnels that identify and capture qualified prospects ready to buy. For the Retail sector, we focus on localized social commerce. As the Best SEO Expert in Kerala, I ensure your lead generation is backed by data and optimized for the highest possible conversion rate. We use automated lead qualification systems that ensure your sales team only spends time on high-probability opportunities, making your entire sales pipeline more efficient and profitable.",
    links: [
      { text: "Contact Me", path: "/contact" }
    ]
  },
  {
    question: "How long does it take for a freelance digital marketer in Kerala to show SEO results?",
    answer: "While many digital marketing efforts yield initial visibility within weeks, true market dominance typically takes 3 to 6 months. As a dedicated Freelance Digital Marketer in Kerala, I provide transparent, data-driven reporting that tracks your growth in real-time. We use advanced indexing techniques to resolve Search Console issues within days, ensuring your 'Custom Website Development Kerala' or 'Local SEO Palakkad' campaigns are running at peak performance from the start. We prioritize 'White-Hat' techniques that ensure your rankings are sustainable and protected from future search engine algorithm updates.",
    links: [
      { text: "View Portfolio", path: "/portfolio" }
    ]
  },
  {
    question: "What makes your Ecommerce Website Development India strategy superior for global sales?",
    answer: "My Ecommerce Website Development India strategy is built on pure performance and global compliance. We build headless commerce solutions using Next.js and Shopify/Stripe integrations that allow for lightning-fast international page loads. By combining this with my 'Best SEO Expert in Kerala' capabilities, we ensure your products rank globally for high-volume search terms. We focus on 'Zero-Friction' checkout experiences and mobile-first design, ensuring that whether a customer is in Kochi, Dubai, or New York, their experience is seamless and your conversion rate remains world-class.",
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
    <section className="py-16 md:py-24 px-8 relative overflow-hidden border-t border-white/5">
      {/* SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-vibrant-indigo text-[9px] font-bold uppercase tracking-[0.5em]"
          >
            The Intelligence
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif tracking-tight text-white leading-tight"
          >
            Curated <span className="italic text-vibrant-indigo text-indigo-glow">Knowledge.</span>
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
                borderColor: openIndex === i ? "rgba(99, 102, 241, 0.3)" : "rgba(255, 255, 255, 0.05)",
                boxShadow: openIndex === i ? "0 0 30px rgba(99, 102, 241, 0.1)" : "none"
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <span 
                  className="text-xl font-serif italic tracking-tight transition-colors duration-500"
                  style={{ color: openIndex === i ? "#6366f1" : "white" }}
                >
                  {faq.question}
                </span>
                <div 
                  className="w-10 h-10 glass-2 rounded-full flex items-center justify-center transition-all duration-500"
                  style={{ 
                    backgroundColor: openIndex === i ? "#6366f1" : "transparent",
                    color: openIndex === i ? "#ffffff" : "rgba(192, 192, 192, 0.4)",
                    boxShadow: openIndex === i ? "0 0 15px rgba(99, 102, 241, 0.5)" : "none"
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
                              className="inline-flex items-center gap-2 text-vibrant-indigo text-[10px] font-bold uppercase tracking-widest hover:gap-3 transition-all group/link"
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
