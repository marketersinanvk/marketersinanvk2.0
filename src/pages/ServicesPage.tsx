import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  Zap,
  Sparkles,
  MousePointerClick,
  Layers,
  Cpu,
  X
} from "lucide-react";
import SEO from "../components/SEO";
import { SERVICES } from "../constants/data";

const iconMap: Record<string, any> = {
  Sparkles,
  Target,
  Search,
  MousePointerClick,
  PenTool,
  Share2,
  Layers,
  Zap,
  Cpu
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const whatsappNumber = "918590181381";
  
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
        title="Freelance Digital Marketer in Kerala | Best AI-Integrated Marketing Services"
        description="Scale your brand with the best freelance digital marketer in Kerala. Marketer Sinan VK offers AI-integrated marketing, Meta Ads expert services, and local SEO in Palakkad."
      />
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24 relative z-10">
        <div className="space-y-4 md:space-y-6">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-neon-green text-[9px] font-bold uppercase tracking-[0.5em]"
          >
            The Capabilities
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-9xl font-serif tracking-tighter text-white leading-[1.1] md:leading-[0.85]"
          >
            Freelance <br />
            <span className="italic text-neon-green">Digital Marketer.</span>
          </motion.h1>
          <p className="text-silver/50 text-lg md:text-xl font-light leading-relaxed tracking-wide max-w-2xl">
            As a premier <span className="text-white font-medium">Freelance digital marketer in Kerala</span>, I offer <span className="text-white font-medium">AI-integrated digital marketing services</span> designed to scale your business with precision and elite branding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, i) => {
            const IconComponent = iconMap[service.icon] || Zap;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelectedService(service)}
                className="glass-2 p-8 md:p-10 rounded-[24px] md:rounded-[32px] border border-white/5 hover:border-neon-green/30 transition-all duration-700 group flex flex-col justify-between cursor-pointer hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(57,255,20,0.1)]"
              >
                <div>
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-neon-green/5 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-neon-green group-hover:text-midnight transition-all duration-700 border border-white/5 group-hover:border-neon-green/50">
                    <IconComponent className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-white text-xl md:text-2xl font-serif italic mb-4 tracking-wide">{service.title}</h3>
                  <p className="text-silver/40 text-sm font-light leading-relaxed mb-6 md:mb-8 line-clamp-3 tracking-wide">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <button 
                    className="w-full py-4 glass-2 border border-white/10 text-neon-green text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-neon-green hover:text-midnight transition-all flex items-center justify-center gap-2"
                  >
                    View Report <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detailed Service Report Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-midnight/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="max-w-2xl w-full glass-2 p-10 md:p-16 rounded-[40px] border border-neon-green/20 relative"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-8 right-8 text-silver/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-neon-green text-[9px] font-bold uppercase tracking-[0.5em]">Service Report</p>
                  <h2 className="text-4xl md:text-6xl font-serif italic text-white">{selectedService.title}</h2>
                </div>
                
                <p className="text-silver/60 text-lg md:text-xl font-light leading-relaxed">
                  {selectedService.report}
                </p>
                
                <button 
                  onClick={() => handleConsultation(selectedService.title)}
                  className="w-full py-5 bg-neon-green text-midnight text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(57,255,20,0.3)]"
                >
                  Initiate Consultation <MessageCircle size={14} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
