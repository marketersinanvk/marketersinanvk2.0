import { motion } from "motion/react";
import { Cpu, BarChart3, ShieldCheck, Headphones } from "lucide-react";

const reasons = [
  {
    title: "AI Integration",
    description: "As the best digital marketer in Kerala, I leverage advanced AI tools to predict trends, automate workflows, and optimize campaigns for maximum efficiency.",
    icon: Cpu
  },
  {
    title: "Result-Oriented SEO",
    description: "Implementing data-driven strategies as an SEO specialist in Kerala that don't just increase traffic, but drive high-quality conversions.",
    icon: BarChart3
  },
  {
    title: "Data Privacy",
    description: "Your data is handled with the highest security standards by a professional freelance digital marketer in Kerala, ensuring complete confidentiality.",
    icon: ShieldCheck
  },
  {
    title: "24/7 Support",
    description: "Dedicated support around the clock from a top social media specialist in Kerala to ensure your digital presence is always performing at its peak.",
    icon: Headphones
  }
];

export default function WhyChooseMe() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-8 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 md:mb-16 space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-arctic-blue text-[9px] font-bold uppercase tracking-[0.5em]"
          >
            The Advantage
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif tracking-tighter text-white leading-tight"
          >
            Why Choose the <br />
            <span className="italic text-arctic-blue">Best in Kerala?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-2 p-8 rounded-[32px] border border-white/5 hover:border-arctic-blue/30 transition-all duration-500 group"
            >
              <div className="w-12 h-12 bg-arctic-blue/10 rounded-2xl flex items-center justify-center text-arctic-blue mb-6 group-hover:bg-arctic-blue group-hover:text-midnight transition-all duration-500">
                <reason.icon size={24} />
              </div>
              <h3 className="text-white text-xl font-serif italic mb-4">{reason.title}</h3>
              <p className="text-silver/40 text-sm font-light leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
