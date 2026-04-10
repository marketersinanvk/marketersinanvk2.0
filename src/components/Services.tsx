import { motion } from "motion/react";
import { Code, Search, Target, TrendingUp } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Premium, high-performance websites using Next.js & Firebase with a focus on lead conversion.",
    icon: Code,
    color: "text-neon-blue",
  },
  {
    title: "SEO Mastery",
    description: "Advanced strategies to rank businesses on the first page of Google in India and Dubai.",
    icon: Search,
    color: "text-white",
  },
  {
    title: "Meta Ads",
    description: "Proven expertise in Meta Ads to scale e-commerce and local businesses effectively.",
    icon: Target,
    color: "text-silver",
  },
  {
    title: "SEM Growth",
    description: "Result-oriented Google Ads campaigns for instant visibility and high ROI.",
    icon: TrendingUp,
    color: "text-neon-blue",
  },
];

export default function Services() {
  return (
    <section className="py-32 px-8 relative grainy">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-neon-blue-dim text-[9px] font-bold uppercase tracking-[0.5em]"
          >
            The Capabilities
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif tracking-tight text-white"
          >
            Elite <span className="italic text-neon-blue text-neon-blue-glow">Solutions.</span>
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          {/* Main Feature - Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-2 md:row-span-2 glass-2 rounded-[40px] p-12 flex flex-col justify-between group hover:border-neon-blue/50 hover:bg-white/[0.08] transition-all duration-700 overflow-hidden relative shadow-2xl"
          >
            <div className="relative z-10">
              <Code className="w-12 h-12 text-neon-blue mb-8 group-hover:scale-110 transition-transform duration-700" />
              <h3 className="text-3xl font-serif text-white mb-6">Web Development</h3>
              <p className="text-silver/50 text-lg font-light leading-relaxed max-w-sm">
                Architecting high-performance, scalable web ecosystems using Next.js and Firebase. 
                Designed to convert every visitor into a high-value lead.
              </p>
            </div>
            <div className="relative z-10 mt-12 flex items-center gap-3 text-neon-blue text-[9px] font-bold uppercase tracking-[0.3em]">
              Explore Solutions <div className="w-12 h-[0.5px] bg-neon-blue" />
            </div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-neon-blue/5 blur-[100px] rounded-full group-hover:bg-neon-blue/10 transition-all duration-700" />
          </motion.div>

          {/* Feature 2 - Wide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 glass-2 rounded-[40px] p-10 flex items-center gap-8 group hover:border-neon-blue/50 hover:bg-white/[0.08] transition-all duration-700 shadow-2xl"
          >
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
              <Search className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-700" />
            </div>
            <div>
              <h3 className="text-xl font-serif text-white mb-2">SEO Mastery</h3>
              <p className="text-silver/50 text-sm font-light leading-relaxed">
                Dominating search results in India and Dubai with advanced ranking strategies.
              </p>
            </div>
          </motion.div>

          {/* Feature 3 - Small */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-2 rounded-[40px] p-10 flex flex-col justify-between group hover:border-neon-blue/50 hover:bg-white/[0.08] transition-all duration-700 shadow-2xl"
          >
            <Target className="w-8 h-8 text-silver group-hover:scale-110 transition-transform duration-700" />
            <div>
              <h3 className="text-lg font-serif text-white mb-2">Meta Ads</h3>
              <p className="text-silver/50 text-xs font-light leading-relaxed">
                Proven expertise in scaling brands like MincoKids through Meta.
              </p>
            </div>
          </motion.div>

          {/* Feature 4 - Small */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-2 rounded-[40px] p-10 flex flex-col justify-between group hover:border-neon-blue/50 hover:bg-white/[0.08] transition-all duration-700 shadow-2xl"
          >
            <TrendingUp className="w-8 h-8 text-neon-blue group-hover:scale-110 transition-transform duration-700" />
            <div>
              <h3 className="text-lg font-serif text-white mb-2">SEM Growth</h3>
              <p className="text-silver/50 text-xs font-light leading-relaxed">
                Instant visibility and high ROI through precision Google Ads.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
