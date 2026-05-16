import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, MessageSquare, X, Send } from "lucide-react";
import { useState, useEffect } from "react";

export default function CommunicationHub() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {/* Floating WhatsApp Button - Bottom Right (Minimalist) */}
      <motion.a
        href="https://wa.me/918590181381"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-12 h-12 sm:w-14 sm:h-14 bg-vibrant-indigo text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.25)] pointer-events-auto group"
      >
        <MessageCircle size={24} className="sm:w-6 sm:h-6" />
        <span className="absolute right-full mr-4 px-4 py-2 glass-2 rounded-full text-[9px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
          WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
