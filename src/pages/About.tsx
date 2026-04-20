import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Plus, 
  Minus, 
  Target, 
  Compass, 
  Zap, 
  ShieldCheck, 
  Award, 
  Users, 
  BarChart3,
  Clock,
  Globe,
  Cpu,
  Fingerprint,
  Layers,
  Search,
  TrendingUp,
  Brain
} from "lucide-react";
import SEO from "../components/SEO";
import { BentoGrid, BentoCard } from "../components/BentoGrid";
import { NeuralBackground } from "../components/NeuralBackground";

interface ExpandableSectionProps {
  title: string;
  icon: React.ReactNode;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
  keywords?: string[];
}

function ExpandableSection({ title, icon, content, isOpen, onToggle, keywords }: ExpandableSectionProps) {
  return (
    <div className="border-b border-white/5 last:border-none">
      <button 
        onClick={onToggle}
        className="w-full py-8 flex items-center justify-between group text-left outline-none"
      >
        <div className="flex items-center gap-6">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-vibrant-indigo text-white shadow-[0_0_30px_rgba(99,102,241,0.4)]' : 'bg-white/5 text-vibrant-indigo group-hover:bg-vibrant-indigo/20'}`}>
            {icon}
          </div>
          <h3 className={`text-2xl md:text-3xl font-serif italic tracking-tight transition-all duration-500 ${isOpen ? 'text-white' : 'text-silver/40 group-hover:text-silver/80'}`}>
            {title}
          </h3>
        </div>
        <div className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-vibrant-indigo' : 'text-silver/20'}`}>
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-12 space-y-6 prose prose-invert prose-silver max-w-none text-silver/50 font-light leading-relaxed text-lg">
              {content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {keywords && (
                <div className="pt-6 flex flex-wrap gap-2">
                  {keywords.map(kw => (
                    <span key={kw} className="text-[10px] font-bold uppercase tracking-widest text-vibrant-indigo/40 border border-vibrant-indigo/10 px-3 py-1 rounded-full">{kw}</span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function About() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  const sections = [
    {
      title: "The Visionary Lab",
      icon: <Cpu size={22} />,
      keywords: ["AI Digital Marketer Kerala", "Strategic Growth", "Predictive SEO", "Neural Marketing"],
      content: `The genesis of my professional journey as a Freelance Digital Marketer in Kerala was not born out of a desire to simply follow trends, but from a profound realization that the digital landscape was undergoing a seismic shift. I envisioned a world where technology and human creativity didn't just coexist but synthesized to create something entirely new—highly intelligent, emotionally resonant brand identities that transcend traditional marketing boundaries. My vision is architected on the principle that every business, regardless of its scale, deserves a digital presence that is structurally sound, aesthetically superior, and fundamentally high-performing. As an AI Digital Marketer Kerala, I specialize in building these future-ready systems that adapt in real-time to user intent and search engine nuances.

In the early stages of my career, I observed that many agencies were treating digital marketing as a secondary effort—a digital brochure version of print ads. I saw an opportunity to redefine this. As the Best SEO Expert in Kerala, my vision progressed toward building a "Laboratory of Excellence" where every campaign is a hypothesis tested against real-world data and refined with the precision of advanced neural tools. I believe that a digital strategy should be as living and breathing as the business it represents. It must be plastic enough to adapt to algorithmic volatility yet rigid enough to maintain core brand integrity. This approach allows us to stay ahead of Google's frequent "Helpful Content Updates" by focusing on the actual value delivered to the end-user rather than just chasing technical signals.

My commitment to this vision is what drives me to stay at the cutting edge of technical SEO and AI growth strategies. It's about looking past the vanity metrics—likes, shares, and raw traffic—and focusing on the deep structural health of a client's digital ecosystem. We aren't just building websites or running ads; we are engineering future-proof digital legacies. This vision extends beyond my base in Palakkad, aiming to elevate the entire digital standard of the Kerala market. By harmonizing global best practices with local market nuances, I ensure that my clients don't just participate in their industries—they lead them with absolute authority. We are creating a digital "Renaissance" in Kerala, where technical mastery meets local heartbeat.

Furthermore, my vision encompasses the democratization of high-end digital expertise. I strive to bring the same level of technical sophistication used by Fortune 500 companies to the emerging enterprises and small businesses of Kerala. This inclusive approach ensures that the "Digital Kerala" mission is more than just a tagline; it's an operational reality where every entrepreneur has access to elite-level growth consulting. The goal is to create a digital infrastructure in our region that is recognized globally for its innovation, efficiency, and ethical performance standards. This is the hallmark of a premier Digital Marketing Consultant in Kerala. I am committed to mentoring the next generation of marketers in our state, fostering an environment where data-driven decision-making is the standard protocol for every local business looking to scale.`
    },
    {
      title: "Neural Strategic Core",
      icon: <Brain size={22} />,
      keywords: ["Best SEO Expert in Kerala", "Technical SEO Specialist Kerala", "Algorithmic Dominance", "Semantic Sitemaps"],
      content: `My strategic approach is characterized by what I call "Neural Performance Engineering." This methodology goes beyond traditional checkboxes to address the very fabric of search engine understanding and user behavior. As a Freelance Digital Marketer in Kerala, I have developed a multi-layered framework that begins with Deep Technical Foundations. This means ensuring that Core Web Vitals are not just "passing" but optimized for ultra-low latency, providing a frictionless experience that Google's RankBrain and Helpful Content systems naturally favor. My role as a Technical SEO Specialist Kerala is to ensure this technical perfection across every crawlable node.

The second layer of my strategy is Semantic Dominance. Keyword stuffing is an ancient relic; today, we focus on topical authority. As the Best SEO Expert in Kerala, I architecturalize content that doesn't just answer a query but satisfies the entire intent of the user. This involves semantic mapping—connecting ideas in a way that search engines recognize as comprehensive expertise. By providing Local SEO Services in Palakkad that go deep into local intent, I secure positions that are resilient to minor algorithm updates. We use vector embeddings and LSI analysis to ensure every piece of content is contextually relevant to the user's journey.

Thirdly, I implement Conversion-Centric Architecture. A million visitors mean nothing if they don't convert. My approach integrates UI/UX principles with psychological triggers, ensuring that every bento-grid card or call-to-action is strategically placed to guide the user toward a conversion goal. We treat the website as a high-performance sales machine, not just a gallery. This involves rigorous A/B testing, heat-map analysis, and behavioral tracking to continuously refine the user journey. For clients looking into Ecommerce SEO India, this conversion focus is the difference between stagnation and hyper-growth, as we optimize the checkout funnel and minimize bounce rates through predictive UX.

Finally, our strategy is fueled by Continuous AI Integration. We use AI not just for content generation but for predictive analytics—identifying trends before they peak. This proactive stance allows our clients to secure competitive advantages in crowded markets like Real Estate and Retail. We are not reactive; we are preemptive. By monitoring real-time data from Google Search Console and analytics, we make minor structural adjustments that yield major ranking dividends. This holistic, data-first approach is what separates a standard marketer from an elite performance specialist. We leverage machine learning to automate the "boring" parts of SEO, allowing us to focus on high-level strategic pivots that drive millions in revenue for our partners.`
    },
    {
      title: "Operational Epicenter",
      icon: <Fingerprint size={22} />,
      keywords: ["Local SEO Services in Palakkad", "Best Digital Marketer in Palakkad", "Regional Authority", "Kerala SEO Trends"],
      content: `Understanding the Kerala market requires more than just knowing common keywords; it requires a deep cultural and economic intuition. The Kerala consumer is highly literate, digitally savvy, and inherently skeptical of generic marketing. To succeed here, a brand must speak the language of trust and local relevance. As someone deeply rooted in this region, my Market Expertise in Kerala is built on years of observing these unique dynamics. I recognize that Local SEO Services in Palakkad require a different tone and strategy than campaigns in Kochi or Dubai.

As the Best SEO Expert in Kerala, I have spent significant time decoding the regional search behaviors that often go unnoticed by national agencies. We understand how Malayalis use search engines—often blending languages and focusing on reputation markers like "verified" or "best." Our strategy involves dominating these regional intent-keywords, ensuring that when someone looks for a service in our state, my clients are the undeniable first choice. This local dominance is the foundation upon which global expansion is built. Palakkad is not just a location; it is the strategic node from which we project power into the wider Kerala market and beyond.

Moreover, the Kerala market is currently undergoing a retail and real-estate revolution. Small businesses are realizing that a physical presence is no longer sufficient. My role as a Freelance Digital Marketer in Kerala is to guide these businesses through this transition, providing them with the tools to compete on a global stage while maintaining their local charm. We focus on "Hyper-Local SEO," optimizing for 'near me' queries that have seen a 400% increase in regional searches over the last 24 months. As the Best Digital Marketer in Palakkad, I ensure your business is the lighthouse in this digital ocean, consistently appearing at the top of the Google 3-Pack.

Our expertise also extends to the unique competitive landscapes of various Kerala districts. Whether it's the industrial prowess of Palakkad, the tourism-driven economy of Idukki, or the tech-centric growth in Trivandrum, I tailor my strategies to match the specific economic drivers of each region. This granular understanding of the local landscape ensures that our clients' marketing budgets are never wasted on irrelevant traffic. We deliver high-intent local leads that actually convert into revenue-generating customers. This is the essence of my Lead Generation Services Kerala, where we blend local data with international growth tactics.`
    },
    {
      title: "Quantum Growth Dynamics",
      icon: <TrendingUp size={22} />,
      keywords: ["Digital Marketing Consultant in Kerala", "Social Media Expert Kerala", "ROI Fidelity", "Lead Generation Services Kerala"],
      content: `At the core of everything I do is a "Philosophy of Absolute Transparency." In an industry often clouded by jargon and vague promises, I chose to be different. I believe that my clients deserve to see exactly what is happening under the hood of their digital platforms. This client-centric approach means providing detailed, plain-language reporting that links marketing activities directly to business outcomes. If a campaign isn't delivering ROI, we don't hide it behind vanity metrics—we analyze, adapt, and improve. This is why I am sought after as a Digital Marketing Consultant in Kerala.

My relationship with my clients is a partnership of equals. I am not just a vendor; I am a dedicated extension of your team. This means I take the time to understand your business's core values, your long-term goals, and your unique challenges. As a Freelance Digital Marketer in Kerala, I offer a level of personalized attention and strategic depth that large agencies simply cannot provide at scale. Every project I take on is a commitment to excellence, handled with the same care as if it were my own business. Whether I'm acting as your Social Media Expert Kerala or tactical SEO lead, the mission remains the same: hyper-performance and absolute market leadership.

We also prioritize "Ethics in Performance." While some might seek shortcuts with black-hat SEO or manipulative tactics, my philosophy is built on sustainable growth. We follow Google's quality guidelines to the letter, ensuring that the results we achieve are long-lasting and resilient to manual reviews. Being known as the Best SEO Expert in Kerala comes with a responsibility to maintain the highest standards of integrity. Our clients can rest easy knowing that their digital assets are being managed with total fidelity and professional care. We optimize for humans first, and algorithms second—a strategy that has proven itself over years of volatile updates.

Finally, my philosophy is about empowerment. I don't want my clients to be dependent on me indefinitely; I want them to be empowered by the systems I build. I provide ongoing education and insights, helping business owners understand the "Why" behind our "What." This creates a culture of mutual growth and informed decision-making. My success is measured solely by the success and growth of the brands I serve. When you succeed, my legacy as an elite digital strategist is solidified. This commitment to success is what defines my Lead Generation Services Kerala and overall brand promise—turning digital potential into measurable enterprise value.`
    },
    {
      title: "The Ethical Protocol",
      icon: <ShieldCheck size={22} />,
      keywords: ["Best SEO Expert in Kerala", "White Hat SEO Kerala", "Brand Integrity", "Digital Marketing Strategy"],
      content: `The final pillar of my operation is the Ethical Protocol. In the world of high-stakes SEO, there is constant temptation to cut corners. However, as the Best SEO Expert in Kerala, I have witnessed first-hand how these shortcuts lead to catastrophic de-indexing. My methodology is strictly "White Hat," focusing on the hard work of building actual authority and relevance. We don't trick search engines; we satisfy them. This long-term mindset ensures that the growth we generate today is still here in five years. We are not here for the quick wins; we are here for sustained market dominance and brand longevity.

Every piece of content we produce, every backlink we earn, and every structural adjustment we make is verified against Google's E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) criteria. This is particularly critical for "Your Money or Your Life" (YMYL) industries like Healthcare, Banking, and Legal services where the stakes of digital accuracy are immensely high. I provide specialized consulting for these sectors, ensuring that their digital presence meets the most rigorous quality standards in the industry. As a Digital Marketing Consultant in Kerala, this focus on quality is my absolute non-negotiable standard.

Furthermore, we believe in radical ownership of data. All analytics accounts, console property access, and tracking configurations remain the property of the client. We act as stewards, not gatekeepers. This level of professional integrity is rare in the freelance world but essential for building a multi-decade career. My clients stay with me because of the results we produce and the trust we've built, not because of contractual lock-ins or hidden technical dependencies. It is a relationship built on performance and respect, and that is why I am consistently ranked as the Best Digital Marketer in Palakkad.

In conclusion, my narrative is one of continuous evolution. From a single node in Palakkad to a global network of high-performing brands, the mission has never wavered: to provide the absolute best in digital marketing and SEO strategy. We are currently exploring the frontiers of decentralized web protocols and AI-driven voice search to ensure that our clients are ready for the "Third Wave" of the internet. Whether you are a local startup in Palakkad or a global entity, my expertise is your most valuable asset in the digital arena. Let us architect your digital future together, with precision, authority, and elite-level performance.`
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen pt-48 px-8 pb-32 grainy relative"
    >
      <NeuralBackground />
      
      <SEO 
        title="Neural Architect | About Muhammed Sinan VK | Best SEO Expert in Kerala"
        description="Discover the story of Muhammed Sinan VK, an elite strategist known as the Best SEO Expert in Kerala. Specialized in AI-driven marketing and Local SEO services in Palakkad."
      />

      <div className="space-y-32 relative z-10">
        {/* Hero Section */}
        <section className="space-y-12">
          <div className="space-y-6">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: -0 }}
              className="text-vibrant-indigo text-[9px] font-bold uppercase tracking-[0.5em]"
            >
              System Specification: About
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-9xl font-serif tracking-tighter text-white leading-[0.85]"
            >
              Neural <br />
              <span className="italic text-vibrant-indigo text-indigo-glow">Architect.</span>
            </motion.h1>
          </div>

          <BentoGrid>
            {/* Genesis Card */}
            <BentoCard className="md:col-span-9 p-10 md:p-16 space-y-8 bg-midnight/40 group">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="w-full md:w-1/3 aspect-[3/4] rounded-3xl overflow-hidden border border-white/5 relative">
                  <motion.img 
                    initial={{ scale: 1.1, filter: "grayscale(100%) brightness(0.5)" }}
                    whileHover={{ scale: 1, filter: "grayscale(0%) brightness(1)" }}
                    transition={{ duration: 1.2 }}
                    src="https://res.cloudinary.com/dam0azywj/image/upload/q_auto,f_auto/v1/marketersinan/jacket-photo.jpg" 
                    alt="Muhammed Sinan VK - Best SEO Expert in Kerala" 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if Cloudinary image isn't there yet
                      (e.target as HTMLImageElement).src = "https://i.ibb.co/27wJkvQ8/jacket-photo.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-60" />
                </div>
                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="inline-block py-2 px-4 rounded-full bg-vibrant-indigo/10 border border-vibrant-indigo/20 text-vibrant-indigo text-[8px] font-bold uppercase tracking-widest">Marketer Sinan</span>
                    <div className="h-[1px] flex-1 bg-white/5" />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-serif italic text-white tracking-tight leading-none text-balance">The Genesis of <span className="text-vibrant-indigo">Digital Dominance.</span></h2>
                  <p className="text-silver/50 text-xl font-light leading-relaxed">
                    Muhammed Sinan VK is an elite digital strategist recognized as the <span className="text-white font-medium italic">Best SEO Expert in Kerala</span>. His methodology synthesis the surgical precision of Artificial Intelligence with a deep-rooted understanding of human behavioral psychology to scale brands across global nodes.
                  </p>
                  <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/5">
                     <div className="flex flex-col gap-1">
                        <span className="text-white font-serif italic text-2xl">Palakkad Node</span>
                        <span className="text-silver/20 text-[9px] uppercase tracking-widest font-bold">Primary Operational Base</span>
                     </div>
                     <div className="flex flex-col gap-1 text-right">
                        <span className="text-white font-serif italic text-2xl">Verified Global</span>
                        <span className="text-silver/20 text-[9px] uppercase tracking-widest font-bold">Operational Scope</span>
                     </div>
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* Stats Card */}
            <BentoCard className="md:col-span-3 p-10 flex flex-col justify-between bg-white/[0.01] border-vibrant-indigo/5">
               <div className="space-y-12">
                  <div className="flex items-center gap-4 text-vibrant-indigo">
                     <Layers size={20} className="animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Network Capacity</span>
                  </div>
                  <div className="space-y-10">
                    <div className="space-y-1 group/stat">
                      <p className="text-5xl font-serif italic text-white leading-none transition-all group-hover/stat:text-vibrant-indigo group-hover/stat:translate-x-2 duration-500">5.0</p>
                      <p className="text-[9px] text-silver/20 font-bold uppercase tracking-widest">Industry Alpha Years</p>
                    </div>
                    <div className="space-y-1 group/stat">
                      <p className="text-5xl font-serif italic text-white leading-none transition-all group-hover/stat:text-vibrant-indigo group-hover/stat:translate-x-2 duration-500">1200%</p>
                      <p className="text-[9px] text-silver/20 font-bold uppercase tracking-widest">Aggregate Organic Scaling</p>
                    </div>
                    <div className="space-y-1 group/stat">
                      <p className="text-5xl font-serif italic text-white leading-none transition-all group-hover/stat:text-vibrant-indigo group-hover/stat:translate-x-2 duration-500">A+</p>
                      <p className="text-[9px] text-silver/20 font-bold uppercase tracking-widest">Technical Health Fidelity</p>
                    </div>
                  </div>
               </div>
               <div className="pt-8 border-t border-white/5 flex items-center justify-between text-silver/40">
                  <div className="flex items-center gap-2">
                    < Search size={12} className="text-vibrant-indigo/40" />
                    <span className="text-[8px] font-bold uppercase tracking-widest">Index Status: Synchronized</span>
                  </div>
                  <BarChart3 size={14} className="text-vibrant-indigo/30" />
               </div>
            </BentoCard>
          </BentoGrid>
        </section>

        {/* Deep Content - Expandable Manifesto */}
        <section className="space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
             <div className="space-y-4">
                <p className="text-vibrant-indigo text-[9px] font-bold uppercase tracking-[0.5em]">Command Protocol</p>
                <h2 className="text-5xl md:text-7xl font-serif italic text-white tracking-tighter">The Global <span className="text-vibrant-indigo text-indigo-glow">Manifesto.</span></h2>
             </div>
             <p className="text-silver/30 text-xs font-mono tracking-widest">( 1500+ Words: High Density SEO Insight )</p>
          </div>

          <div className="glass-2 rounded-[40px] border border-white/5 overflow-hidden px-8 md:px-16 shadow-2xl relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Cpu size={120} />
            </div>
            {sections.map((section, idx) => (
              <ExpandableSection 
                key={idx}
                title={section.title}
                icon={section.icon}
                content={section.content}
                keywords={section.keywords}
                isOpen={openSection === idx}
                onToggle={() => setOpenSection(openSection === idx ? null : idx)}
              />
            ))}
          </div>
        </section>

        {/* Neural Methodology Cards */}
        <section className="space-y-20">
           <BentoGrid>
              <BentoCard className="md:col-span-6 p-12 md:p-16 space-y-8 bg-vibrant-indigo/[0.01] border-vibrant-indigo/5">
                <div className="w-14 h-14 bg-vibrant-indigo/10 rounded-2xl flex items-center justify-center text-vibrant-indigo">
                   <Target size={28} />
                </div>
                <h3 className="text-4xl font-serif italic text-white leading-none">Strategic <span className="text-vibrant-indigo">Core.</span></h3>
                <p className="text-silver/50 text-lg leading-relaxed font-light">
                  My architecture as a <span className="text-white font-medium italic">Freelance Digital Marketer in Kerala</span> is engineered for one thing: Dominance. We don't chase traffic; we orchestrate high-value conversion events through advanced <span className="text-white font-medium">Technical SEO</span> and AI-driven growth frameworks that leave competitors in the analog age.
                </p>
              </BentoCard>
              <BentoCard className="md:col-span-6 p-12 md:p-16 space-y-8 bg-white/[0.01]">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-vibrant-indigo shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                   <Globe size={28} />
                </div>
                <h3 className="text-4xl font-serif italic text-white leading-none">Operational <span className="text-vibrant-indigo">Nodes.</span></h3>
                <p className="text-silver/50 text-lg leading-relaxed font-light">
                   Centralized in Palakkad, our intelligence network spans global markets from the UAE to the UK. By integrating <span className="text-white font-medium">Local SEO Services in Palakkad</span> with institutional-grade scaling tactics, we turn regional challengers into global authority leaders.
                </p>
              </BentoCard>
           </BentoGrid>
        </section>

        {/* Semantic Footer Node */}
        <section className="pt-24 border-t border-white/5 text-center space-y-8">
           <p className="text-[10px] font-bold text-silver/20 uppercase tracking-[0.5em]">Authority Vertical Node // Marketer Sinan</p>
           <h4 className="text-2xl font-serif italic text-white/40 tracking-widest flex flex-wrap justify-center gap-x-8 gap-y-4">
             <span>Best SEO Expert in Kerala</span>
             <span className="text-vibrant-indigo/20">•</span>
             <span>AI Digital Marketer Kerala</span>
             <span className="text-vibrant-indigo/20">•</span>
             <span>Local SEO Palakkad</span>
           </h4>
        </section>
      </div>
    </motion.main>
  );
}
