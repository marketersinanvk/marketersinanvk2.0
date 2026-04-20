import { motion } from "motion/react";
import { Code, Search, Target, TrendingUp, Zap, PenTool } from "lucide-react";

const services = [
  {
    title: "Website Development",
    description: "Expert Ecommerce Website Development India using Next.js. We build high-performance, search-optimized stores that score 100 on PageSpeed.",
    details: "In the digital age, your website is your most valuable employee. Our Custom Website Development Kerala services focus on technical excellence and conversion psychology. We use Next.js and React to deliver ultra-fast user experiences. From complex Ecommerce Website Development India projects to local business sites, we ensure every project includes Affordable Web Development Services without compromising on the 'Elite Agency' aesthetic. We build with a mobile-first focus, ensuring your site is ready for the high-competition Kerala market.",
    icon: Code,
    color: "text-neon-green",
  },
  {
    title: "SEO Specialist",
    description: "Best SEO Expert in Kerala providing Local SEO Services in Palakkad for absolute Google Search dominance.",
    details: "Visibility is the currency of the digital world. As the Best SEO Expert in Kerala, I provide a comprehensive suite of services designed to dominate search engine result pages (SERPs). Our Local SEO Services in Palakkad target high-intent customers right when they are searching for you. We resolve indexing delays in Search Console through technical fixes and semantic depth. My approach as a Freelance Digital Marketer in Kerala is data-driven, leveraging AI to identify keyword gaps and backlink opportunities that your competitors are missing.",
    icon: Search,
    color: "text-white",
  },
  {
    title: "Lead Generation",
    description: "Surgical Lead Generation Services for Real Estate & Retail using AI-driven Meta Ads and precision targeting.",
    details: "Growth requires a steady stream of high-intent inquiries. Our Lead Generation Services for Real Estate & Retail are engineered to deliver just that. We don't just generate clicks; we deliver high-quality leads that are ready to close. Using advanced Meta Ads strategies and precision search marketing, we target the 0.1% most likely to engage with your products or services. As a premier Digital Marketer in Palakkad, I consolidate these efforts into a cohesive funnel that ensures a consistent ROI for your marketing spend.",
    icon: Target,
    color: "text-silver",
  },
  {
    title: "Social Media Ads",
    description: "Premium Social Media Manager for Small Business services focusing on Meta Ads and Community Growth.",
    details: "Social media is where your brand's personality meets its performance. As a top-tier Social Media Manager for Small Business, I curate narratives that resonate. My Social Media Post Design Services ensure that every pixel reflects an elite status. We focus on high-ROI Meta Ads and organic community scaling, ensuring your brand in Kerala or anywhere globally commands absolute authority. We manage your presence across Meta, Instagram, and LinkedIn with surgical precision, transforming followers into a loyal customer base.",
    icon: TrendingUp,
    color: "text-neon-green",
  },
  {
    title: "Video Production",
    description: "Professional Video Editor for Instagram Reels creating cinematic brand stories that stop the scroll.",
    details: "The future is vertical. As your Professional Video Editor for Instagram Reels, I create cinematic brand stories that capture attention in less than 3 seconds. Using Premiere Pro and advanced CapCut techniques, I provide high-end professional video editing services Kerala that meet the 'Elite Agency' standard. We optimize every reel for viral potential, ensuring your brand story is told with high-impact visuals and sound design. This is essential for modern brand storytelling and maintaining a competitive edge in the Reels-driven economy.",
    icon: Zap,
    color: "text-white",
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 relative grainy">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-vibrant-indigo text-[9px] font-bold uppercase tracking-[0.5em]"
          >
            The Capabilities
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif tracking-tight text-white"
          >
            Elite <span className="italic text-vibrant-indigo text-indigo-glow">Solutions.</span>
          </motion.h2>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-2 rounded-[48px] p-10 md:p-14 flex flex-col group hover:border-vibrant-indigo/40 transition-all duration-700 relative overflow-hidden h-full min-h-[500px]"
            >
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-vibrant-indigo/5 blur-[80px] rounded-full group-hover:bg-vibrant-indigo/10 transition-all duration-1000" />
              
              <div className="relative z-10 space-y-8 md:space-y-10 group/content">
                <div className="w-16 h-16 bg-vibrant-indigo/5 rounded-[24px] flex items-center justify-center text-vibrant-indigo border border-white/5 group-hover:bg-vibrant-indigo group-hover:text-white transition-all duration-700 shadow-xl">
                  <service.icon size={32} />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-serif text-white italic leading-tight group-hover:text-vibrant-indigo transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-silver/50 text-sm md:text-base font-light leading-relaxed tracking-wide">
                    {service.description}
                  </p>
                </div>
                
                {/* Scroll Reveal Details with motion */}
                <motion.div 
                   initial={{ opacity: 0, height: 0 }}
                   whileHover={{ opacity: 1, height: "auto" }}
                   className="space-y-4 pt-8 border-t border-white/5 overflow-hidden transition-all duration-700"
                >
                   <p className="text-xs md:text-sm font-light leading-relaxed text-silver/30 group-hover:text-silver/50 transition-colors">
                     {service.details}
                   </p>
                </motion.div>
                
                <div className="pt-4 flex items-center gap-3 text-vibrant-indigo text-[9px] font-bold uppercase tracking-[0.5em] group-hover:gap-5 transition-all duration-500">
                  <a href="#contact" className="hover:underline underline-offset-8 decoration-vibrant-indigo/30">Initiate Growth</a>
                  <div className="w-8 h-[1px] bg-vibrant-indigo/20 group-hover:w-12 transition-all" />
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 p-8 text-white/5 select-none">
                <span className="text-6xl font-serif italic">0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
