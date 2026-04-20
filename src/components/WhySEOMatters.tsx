import { motion } from "motion/react";
import { Zap, Target, TrendingUp, BarChart3, ShieldCheck, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const points = [
  {
    title: "Organic Authority",
    description: "By working with the Best SEO Expert in Kerala, you're not just buying traffic; you're building a fortress of organic authority. We ensure your brand is perceived as a leader by both Google and your potential customers.",
    icon: ShieldCheck,
  },
  {
    title: "Precision Targeting",
    description: "Our Local SEO Services in Palakkad focus on the 3% of your audience that is ready to purchase right now. We stop wasting budget on curiosity seekers and start targeting high-intent leads.",
    icon: Target,
  },
  {
    title: "Sustainable ROI",
    description: "Unlike paid ads that stop the moment you stop paying, the work of a Freelance Digital Marketer in Kerala pays dividends for years. It's a compound asset that grows in value over time.",
    icon: TrendingUp,
  },
  {
    title: "Performance Architecture",
    description: "Search dominance requires speed. My Custom Website Development Kerala approach ensures your site hits 100 on PageSpeed, which is a critical ranking factor in the 2026 algorithmic landscape.",
    icon: Zap,
  },
  {
    title: "Lead Acquisition",
    description: "We specialize in Lead Generation Services for Real Estate & Retail. By aligning SEO with your sales funnel, we create a seamless bridge between a search query and a high-value customer conversion.",
    icon: BarChart3,
  },
  {
    title: "Global Scalability",
    description: "Whether you need Ecommerce Website Development India or local branding, our strategies are built for scale. We help Kerala businesses transition from local heroes to global contenders.",
    icon: Globe,
  }
];

export default function WhySEOMatters() {
  return (
    <section className="py-24 md:py-32 px-6 sm:px-8 relative overflow-hidden bg-white/[0.01] border-y border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-6">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-vibrant-indigo text-[9px] font-bold uppercase tracking-[0.5em]"
              >
                The Strategic Edge
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-serif tracking-tighter text-white leading-tight"
              >
                Why <span className="italic text-vibrant-indigo">SEO</span> <br />
                Matters.
              </motion.h2>
            </div>
            
            <div className="prose prose-silver prose-lg font-light leading-relaxed tracking-wide space-y-6" style={{ color: "rgba(192, 192, 192, 0.4)" }}>
              <p>
                In the modern digital economy, if your business isn't on the first page of Google, it's virtually invisible to 95% of your market. As the <span className="text-white font-medium">Best SEO Expert in Kerala</span>, I understand that search engine optimization is not an optional marketing expense—it is a foundational business survival skill. My methodology involves a deep technical audit of your core infrastructure to ensure your 'Custom Website Development Kerala' foundation is ready to support massive organic growth.
              </p>
              <p>
                The shift towards digital-first discovery means your customers are actively searching for solutions in Palakkad and across Kerala right now. If they find your competitor instead of you, you're not just losing a sale; you're handing over market share. My <span className="text-white font-medium italic">Local SEO Services in Palakkad</span> are designed to ensure you capture this high-intent traffic and convert it into sustainable growth through aggressive keyword optimization and semantic mapping.
              </p>
              <p>
                By choosing a <Link to="/contact" className="text-vibrant-indigo font-bold hover:underline">Freelance Digital Marketer in Kerala</Link>, you're opting for a personalized, data-driven approach that legacy agencies simply cannot match. We focus on the bottom line: ROI through search dominance and performance-driven <span className="text-white font-medium">Custom Website Development Kerala</span>. Whether you are in Real Estate or Retail, our Lead Generation Services ensure that your influx of traffic translates directly into a growing sales pipeline.
              </p>
              <p>
                In the 2026 landscape, search engines favor 'Expertise, Experience, Authoritativeness, and Trustworthiness' (E-E-A-T). We build your digital fortress by ensuring every piece of content, from 'Social Media Post Design Services' to 'Professional Video Editor for Instagram Reels', reinforces your brand's authority. This integrated approach is why we are consistently ranked as the <span className="text-white font-medium">Best SEO Expert in Kerala</span> for businesses that require high-impact results and long-term search stability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-2 p-8 rounded-[32px] border border-white/5 hover:border-vibrant-indigo/30 transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-vibrant-indigo/5 rounded-2xl flex items-center justify-center text-vibrant-indigo mb-6 group-hover:bg-vibrant-indigo group-hover:text-white transition-all duration-500 border border-white/5">
                  <point.icon size={24} />
                </div>
                <h3 className="text-white text-xl font-serif italic mb-4">{point.title}</h3>
                <p className="text-silver/40 text-xs font-light leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-vibrant-indigo/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
