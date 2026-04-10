import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, MessageSquare, X, Send } from "lucide-react";
import { useState } from "react";

export default function CommunicationHub() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {/* Floating WhatsApp Button - Bottom Right */}
      <motion.a
        href="https://wa.me/918590181381"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-14 h-14 sm:w-16 sm:h-16 bg-neon-blue text-midnight rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.4)] pointer-events-auto group"
      >
        <MessageCircle size={28} className="sm:w-8 sm:h-8" />
        <span className="absolute right-full mr-4 px-4 py-2 glass-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* AI Chatbot Bubble - Bottom Left */}
      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 pointer-events-auto">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="absolute bottom-20 left-0 w-80 glass-2 rounded-[30px] overflow-hidden shadow-2xl"
            >
              <div className="p-6 bg-neon-blue/10 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-neon-blue/20 rounded-full flex items-center justify-center">
                    <MessageSquare size={16} className="text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="text-white text-[10px] font-bold uppercase tracking-widest">Sinan AI</h4>
                    <p className="text-neon-blue-dim text-[8px] uppercase tracking-widest">Online</p>
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
                  className="flex-1 bg-white/5 border border-white/5 rounded-full px-4 py-2 text-xs text-white focus:outline-none focus:border-neon-blue/30 transition-all"
                />
                <button className="w-8 h-8 bg-neon-blue text-midnight rounded-full flex items-center justify-center hover:scale-110 transition-transform">
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
          className="w-14 h-14 sm:w-16 sm:h-16 glass-2 rounded-full flex items-center justify-center text-neon-blue shadow-[0_0_30px_rgba(0,229,255,0.2)] group"
        >
          <MessageSquare size={20} className="sm:w-6 sm:h-6" />
          <span className="absolute left-full ml-4 px-4 py-2 glass-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
            Ask Sinan anything!
          </span>
        </motion.button>
      </div>
    </div>
  );
}
