import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Zap, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function CommunicationHub() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("contact-uplink");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-x-0 bottom-0 pointer-events-none z-[100] p-6 sm:p-10 flex justify-between items-end">
          
          {/* Floating Diagnostic Audit Badge - Bottom Left (Non-Intrusive) */}
          <motion.button
            onClick={scrollToContact}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            whileHover={{ scale: 1.03, y: -2 }}
            className="pointer-events-auto flex items-center gap-3 bg-[rgba(10,10,10,0.85)] hover:bg-[rgba(15,15,15,0.95)] border border-neon-purple/20 shadow-[0_15px_30px_rgba(106,13,173,0.15)] px-4 py-3 sm:px-6 sm:py-4 rounded-full text-white backdrop-blur-md transition-all group"
          >
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-neon-purple opacity-70 animate-ping" />
              <div className="relative w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-neon-purple" />
            </div>
            
            <div className="text-left font-mono">
              <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.25em] text-neon-purple flex items-center gap-1.5 leading-none mb-1">
                <Zap size={8} /> Book Free Diagnostic Audit
              </p>
              <p className="text-[10px] sm:text-[11px] font-semibold text-white/80 uppercase tracking-widest leading-none">
                Kerala / Dubai slots open
              </p>
            </div>
          </motion.button>

          {/* Floating WhatsApp Option - Bottom Right */}
          <motion.a
            href="https://wa.me/918590181381"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            className="pointer-events-auto relative w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(34,197,94,0.3)] group transition-all"
          >
            {/* Subtle external pulse circles */}
            <span className="absolute inset-0 rounded-full animate-ping bg-green-400/30 -z-10" />
            
            <MessageCircle size={24} className="sm:w-6 sm:h-6" />
            
            <span className="absolute right-full mr-4 px-4 py-2 bg-black/90 border border-white/5 backdrop-blur-md rounded-full text-[9px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
              Support uplink active
            </span>
          </motion.a>

        </div>
      )}
    </AnimatePresence>
  );
}
