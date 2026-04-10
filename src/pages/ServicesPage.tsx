import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Code, 
  Search, 
  Share2, 
  TrendingUp, 
  Video, 
  Layout, 
  Mail, 
  PenTool, 
  Target, 
  BarChart3,
  ArrowRight,
  MessageCircle,
  Zap
} from "lucide-react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../lib/firebase";
import SEO from "../components/SEO";

const iconMap: Record<string, any> = {
  Code, Search, Share2, TrendingUp, Video, Layout, Mail, PenTool, Target, BarChart3, Zap
};

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const whatsappNumber = "918590181381";
  
  useEffect(() => {
    const q = query(collection(db, "services"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setServices(items);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const handleConsultation = (serviceName: string) => {
    const message = encodeURIComponent(`Hello Sinan, I am interested in your ${serviceName} service. Can we discuss?`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen pt-32 md:pt-48 px-6 sm:px-8 pb-32 grainy"
    >
      <SEO 
        title="Premium AI Digital Marketing Services | Meta Ads Expert Kerala"
        description="High-ROI Meta Ads, SEO, SEM, SMM, and Premium Web Development services by Muhammed Sinan VK. AI-driven marketing strategies for brands in India, Kerala, and Dubai."
      />
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24 relative z-10">
        <div className="space-y-4 md:space-y-6">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-neon-blue text-[9px] font-bold uppercase tracking-[0.5em]"
          >
            The Capabilities
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-9xl font-serif tracking-tighter text-white leading-[1.1] md:leading-[0.85]"
          >
            Bespoke <br />
            <span className="italic text-neon-blue">Solutions.</span>
          </motion.h1>
        </div>

        {loading && services.length === 0 ? (
          <div className="flex items-center justify-center py-40">
            <div className="w-12 h-12 border-2 border-neon-blue/20 border-t-neon-blue rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => {
              const IconComponent = iconMap[service.icon] || Zap;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-2 p-8 md:p-10 rounded-[30px] md:rounded-[40px] border border-white/5 hover:border-neon-blue/50 transition-all duration-700 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-neon-blue/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-neon-blue group-hover:text-midnight transition-all duration-700">
                      <IconComponent className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <h3 className="text-white text-xl md:text-2xl font-serif italic mb-4">{service.title}</h3>
                    <p className="text-silver/50 text-sm font-light leading-relaxed mb-6 md:mb-8">
                      {service.description || service.desc}
                    </p>
                    {service.details && (
                      <ul className="space-y-3 mb-8">
                        {service.details.map((detail: string) => (
                          <li key={detail} className="text-silver/30 text-[9px] md:text-[10px] uppercase tracking-widest flex items-center gap-2">
                            <div className="w-1 h-1 bg-neon-blue/30 rounded-full" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={() => handleConsultation(service.title)}
                      className="w-full py-4 bg-neon-blue text-midnight text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,243,255,0.2)]"
                    >
                      Consultation <MessageCircle size={12} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </motion.main>
  );
}
