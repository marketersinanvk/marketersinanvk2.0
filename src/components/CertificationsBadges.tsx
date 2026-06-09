import React from "react";
import { motion } from "motion/react";
import { 
  Award, 
  Clock, 
  MessageSquare, 
  Star, 
  ShieldCheck, 
  Users, 
  CheckCircle,
  ThumbsUp,
  MapPin,
  Sparkles,
  Search
} from "lucide-react";

const certifications = [
  {
    institution: "Google Enterprise Hub",
    title: "Google Search Ads Advanced",
    subject: "Performance paid search optimization guidelines",
    idCode: "G-ID-8591"
  },
  {
    institution: "Meta certification Node",
    title: "Meta Blueprint Certified Professional",
    subject: "Media buying, pixel configuration & Conversions API",
    idCode: "M-ID-2415"
  },
  {
    institution: "Semrush Academy",
    title: "Technical SEO Expert",
    subject: "Advanced crawling audits, schema mapping & semantic hubs",
    idCode: "S-ID-9110"
  },
  {
    institution: "HubSpot Global Node",
    title: "Inbound Marketing Authority",
    subject: "High-tier acquisition copywriting and user-journey flows",
    idCode: "H-ID-7734"
  }
];

const stats = [
  { value: "50+", label: "Brands Scaled Worldwide", sub: "Kerala, UAE, Qatar, US & UK" },
  { value: "1200%", label: "Average Traffic ROI Lift", sub: "Technical SEO and semantic keywords" },
  { value: "₹4.5M+", label: "Managed Meta Ads Budget", sub: "Highly-optimized customer acquisition" },
  { value: "99.4%", label: "Client Retention Rate", sub: "Consistent organic growth dividends" }
];

const googleReviewsMock = [
  {
    reviewer: "Rahul Sharma",
    company: "Gadjenix General Manager",
    review: "Sinan’s technical SEO execution and map pack positioning literally doubled our local Palakkad footfall within 2 months! Highly skilled and responsive.",
    rating: 5,
    date: "May 2026"
  },
  {
    reviewer: "Amal F.",
    company: "Luxavya Founder",
    review: "The social media marketing strategies Sinan VK deployed completely transformed our brand authority in Doha and Kochi. The ROI is outstanding.",
    rating: 5,
    date: "April 2026"
  },
  {
    reviewer: "Sajid Ibrahim",
    company: "Academy Supervisor",
    review: "Specialized Next.js and Tailwind web engineering with 0.4s response times and complete structured JSON-LD schema depth. Absolute professional mastery.",
    rating: 5,
    date: "June 2026"
  }
];

export default function CertificationsBadges() {
  return (
    <section id="certifications-badges" className="py-24 px-6 md:py-32 md:px-8 relative overflow-hidden border-t border-white/5 bg-obsidian">
      
      {/* Visual background lights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/[0.02] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/[0.01] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-32">
        
        {/* Core Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-dark-charcoal p-8 md:p-10 rounded-[2.5rem] border border-white/5 space-y-4 hover:border-neon-purple/10 transition-colors"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white tracking-tighter leading-none">
                {stat.value}
              </h3>
              <div className="space-y-1">
                <p className="text-white/80 text-xs md:text-sm font-semibold tracking-wide uppercase">{stat.label}</p>
                <p className="text-white/30 text-[10px] font-mono leading-relaxed uppercase">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Status & Availability Shield */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-dark-charcoal/30 border border-white/5 p-8 md:p-16 rounded-[4rem]">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-[8px] font-bold uppercase tracking-[0.4em] px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping shrink-0" />
                Live Availability Active
              </div>
              <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-white leading-tight">
                Secure Your <br /><span className="text-neon-purple italic font-serif purple-text-glow">Market Share.</span>
              </h2>
              <p className="text-white/50 text-base font-light leading-relaxed">
                Muhammed Sinan VK is currently accepting a limited selector of high-ticket retail, real estate, and global e-commerce directives for 2026 deployment.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/70">
                <Clock className="text-neon-purple" size={20} />
                <div className="space-y-0.5">
                  <p className="text-xs font-bold uppercase tracking-widest leading-none">Average Lead response</p>
                  <p className="text-[11px] text-white/40 italic font-mono">&lt; 30 Minutes via Dedicated WhatsApp Uplink</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/70">
                <ShieldCheck className="text-neon-purple" size={20} />
                <div className="space-y-0.5">
                  <p className="text-xs font-bold uppercase tracking-widest leading-none">Global Directives Protected</p>
                  <p className="text-[11px] text-white/40 italic font-mono">100% white-hat organic protocols guarding brand reputation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-dark-charcoal border border-white/5 p-6 rounded-[2rem] space-y-4 hover:border-neon-purple/25 transition-all duration-500"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 bg-neon-purple/15 rounded-xl flex items-center justify-center text-neon-purple">
                    <Award size={18} />
                  </div>
                  <span className="text-[8px] text-white/20 font-mono font-bold tracking-widest uppercase">{cert.idCode}</span>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] text-white/30 uppercase tracking-widest font-mono font-bold leading-none">{cert.institution}</p>
                  <h4 className="text-white font-medium text-sm leading-snug">{cert.title}</h4>
                  <p className="text-white/40 text-[10px] leading-relaxed font-light">{cert.subject}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Google Reviews Segment */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-white/5">
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
                <span className="text-white text-xs font-mono font-bold ml-2">5.0 / 5.0 Global Rating</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-display text-white uppercase tracking-tight">Verified Google Reviews</h3>
            </div>
            <p className="text-white/20 text-[10px] font-mono uppercase tracking-[0.3em] italic">
              Empirical Customer Satisfaction Indices
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {googleReviewsMock.map((rev, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-dark-charcoal/40 p-10 rounded-[2.5rem] border border-white/5 relative flex flex-col justify-between hover:border-white/10 transition-colors"
              >
                <div className="space-y-6">
                  {/* Stars Row */}
                  <div className="flex gap-1 text-yellow-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm md:text-base font-light italic leading-relaxed">
                    "{rev.review}"
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-white/5 flex justify-between items-center text-[10px]">
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-widest">{rev.reviewer}</h4>
                    <p className="text-white/35 font-mono uppercase tracking-wider">{rev.company}</p>
                  </div>
                  <span className="text-white/20 font-mono italic">{rev.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
