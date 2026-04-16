import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "testimonials"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTestimonials(items);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <section className="py-16 md:py-24 px-6 sm:px-8 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-neon-green text-[9px] font-bold uppercase tracking-[0.5em]"
          >
            Client Verdicts
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif tracking-tighter text-white leading-tight"
          >
            The <span className="italic text-neon-green">Elite</span> Circle.
          </motion.h2>
        </div>

        {/* Minimal Client Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {[
            {
              quote: "Sinan is a visionary. His AI strategies doubled our leads in a month!",
              author: "John D.",
              role: "Tech Startup Founder"
            },
            {
              quote: "Highly professional and skilled. MSVK Elite Agency delivered more than expected.",
              author: "Sara K.",
              role: "Boutique Owner"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-2 p-8 rounded-[24px] border border-white/5 hover:border-neon-green/20 transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                "{item.quote}"
              </p>
              <div className="flex flex-col">
                <span className="text-white text-sm font-medium">{item.author}</span>
                <span className="text-silver/40 text-xs font-light">{item.role}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative h-full glass-2 p-10 rounded-[24px] md:rounded-[32px] border border-white/5 flex flex-col justify-between transition-all duration-700 hover:border-neon-green/30 hover:translate-y-[-10px] overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(57,255,20,0.1)]">
                <div 
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-neon-green/20"
                />
                <div className="relative z-10">
                  <Quote className="text-neon-green/20 w-12 h-12 mb-8 group-hover:text-neon-green/40 transition-colors duration-700" />
                  <p className="text-silver/60 text-lg font-light leading-relaxed italic mb-12">
                    "{t.review}"
                  </p>
                </div>
                <div className="relative z-10">
                  <h4 className="text-white text-2xl font-serif italic mb-1">{t.name}</h4>
                  <p className="text-neon-green text-[10px] font-bold uppercase tracking-widest mb-1">{t.brand}</p>
                  <p className="text-silver/30 text-[9px] font-medium uppercase tracking-wider">{t.companyType}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
              </div>
              <div className="absolute -inset-px bg-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl rounded-[24px] md:rounded-[32px]" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-neon-green/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neon-green/5 blur-[120px] rounded-full translate-x-1/4 pointer-events-none" />
    </section>
  );
}
