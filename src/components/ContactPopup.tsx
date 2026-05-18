import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, MessageSquare, User, Mail, Phone, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: ""
  });

  const closePopup = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenContactPopup", "true");
  }, []);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenContactPopup");
    if (hasSeen) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [closePopup]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation of lead generation protocol ingestion
    try {
      console.log("Ingesting lead data into MSVK-Growth-Cluster:", formData);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setTimeout(closePopup, 3000);
    } catch (error) {
      console.error("Lead retrieval failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-midnight/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-zinc-950 border border-white/5 rounded-[2.5rem] shadow-[0_0_50px_-12px_rgba(168,85,247,0.3)] overflow-hidden"
          >
            {/* Design Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent blur-sm" />

            <div className="p-8 md:p-12">
              {/* Close Button */}
              <button 
                onClick={closePopup}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-slate-500 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={18} />
              </button>

              {!isSubmitted ? (
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-purple/10 border border-neon-purple/20 rounded-full text-neon-purple text-[10px] font-bold uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse" />
                      Priority Gateway
                    </div>
                    <h2 className="text-3xl md:text-4xl text-white font-serif italic tracking-tighter">
                      Architect Your Growth Protocol.
                    </h2>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">
                      Drop your details below for a 1-on-1 strategic retrieval session with Marketer Sinan VK.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative group">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-neon-purple transition-colors" />
                      <input 
                        required
                        type="text" 
                        placeholder="Your Identity (Name)"
                        className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white text-sm outline-none focus:border-neon-purple/50 focus:bg-white/[0.07] transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative group">
                        <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-neon-purple transition-colors" />
                        <input 
                          required
                          type="email" 
                          placeholder="Email Node"
                          className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white text-sm outline-none focus:border-neon-purple/50 focus:bg-white/[0.07] transition-all"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div className="relative group">
                        <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-neon-purple transition-colors" />
                        <input 
                          required
                          type="tel" 
                          placeholder="WhatsApp Pulse"
                          className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white text-sm outline-none focus:border-neon-purple/50 focus:bg-white/[0.07] transition-all"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <MessageSquare size={16} className="absolute left-4 top-6 text-slate-500 group-focus-within:text-neon-purple transition-colors" />
                      <textarea 
                        required
                        placeholder="Brief Growth Requirement..."
                        rows={3}
                        className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 pl-12 pr-4 text-white text-sm outline-none focus:border-neon-purple/50 focus:bg-white/[0.07] transition-all resize-none"
                        value={formData.requirement}
                        onChange={(e) => setFormData({...formData, requirement: e.target.value})}
                      />
                    </div>

                    <button
                      disabled={isLoading}
                      type="submit"
                      className="w-full group relative py-4 bg-neon-purple text-white font-bold text-xs uppercase tracking-[0.3em] rounded-2xl overflow-hidden active:scale-95 transition-all shadow-[0_10px_30px_-10px_rgba(168,85,247,0.5)]"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      <div className="relative flex items-center justify-center gap-3">
                        {isLoading ? (
                          <Loader2 size={16} className="animate-spin" />
                        ) : (
                          <Send size={16} />
                        )}
                        <span>{isLoading ? "Synchronizing..." : "Initialize Strategy"}</span>
                      </div>
                    </button>
                  </form>
                </div>
              ) : (
                <div className="py-12 flex flex-col items-center text-center space-y-6">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.2 }}
                    className="w-20 h-20 bg-neon-purple/20 rounded-full flex items-center justify-center text-neon-purple"
                  >
                    <CheckCircle2 size={40} />
                  </motion.div>
                  <div className="space-y-2">
                    <h3 className="text-2xl text-white font-serif italic tracking-tighter">Protocol Success.</h3>
                    <p className="text-slate-400 text-sm font-light">Lead successfully ingested. Marketer Sinan VK will establish communication within 24 hours.</p>
                  </div>
                  <div className="text-[10px] text-neon-purple/40 font-mono uppercase tracking-widest">
                    Encryption Node: ACTIVE / Retrieval Status: COMPLETE
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
