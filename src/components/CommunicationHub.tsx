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
        className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-12 h-12 sm:w-14 sm:h-14 bg-arctic-blue text-midnight rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.3)] pointer-events-auto group"
      >
        <MessageCircle size={24} className="sm:w-6 sm:h-6" />
        <span className="absolute right-full mr-4 px-4 py-2 glass-2 rounded-full text-[9px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
          WhatsApp
        </span>
      </motion.a>

      {/* AI Chatbot Bubble - Bottom Left (Cyan Chatbot Icon) */}
      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 pointer-events-auto">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="absolute bottom-20 left-0 w-80 glass-2 rounded-[30px] overflow-hidden shadow-2xl border border-arctic-blue/20"
            >
              <div className="p-6 bg-arctic-blue/5 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-arctic-blue/20 rounded-full flex items-center justify-center">
                    <MessageSquare size={16} className="text-arctic-blue" />
                  </div>
                  <div>
                    <h4 className="text-white text-[10px] font-bold uppercase tracking-widest">Sinan AI</h4>
                    <p className="text-arctic-blue/40 text-[8px] uppercase tracking-widest">Active</p>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="text-silver/40 hover:text-white transition-colors">
                  <X size={16} />
                </button>
              </div>
              
              <div className="h-64 p-6 overflow-y-auto space-y-4">
                <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none max-w-[80%]">
                  <p className="text-silver/60 text-xs leading-relaxed">
                    Welcome to the atelier. I am Sinan's digital twin. How can I assist your legacy today?
                  </p>
                </div>
              </div>

              <div className="p-4 border-t border-white/5 flex gap-2">
                <input 
                  type="text" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask anything..."
                  className="flex-1 bg-white/5 border border-white/5 rounded-full px-4 py-2 text-xs text-white focus:outline-none focus:border-arctic-blue/30 transition-all"
                />
                <button className="w-8 h-8 bg-arctic-blue text-midnight rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Send size={14} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsChatOpen(!isChatOpen)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          className="w-14 h-14 sm:w-16 sm:h-16 glass-2 rounded-full flex items-center justify-center text-arctic-blue shadow-[0_0_30px_rgba(0,229,255,0.2)] group border border-arctic-blue/20"
        >
          <MessageSquare size={20} className="sm:w-6 sm:h-6" />
          <span className="absolute left-full ml-4 px-4 py-2 glass-2 rounded-full text-[9px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
            AI Assistant
          </span>
        </motion.button>
      </div>
    </div>
  );
}
