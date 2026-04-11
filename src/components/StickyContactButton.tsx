import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function StickyContactButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-[100] md:hidden"
        >
          <Link
            to="/contact"
            className="flex items-center gap-3 bg-neon-green text-midnight px-6 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:scale-105 transition-transform active:scale-95"
          >
            <MessageSquare size={20} />
            <span className="text-sm uppercase tracking-wider">Contact Sinan</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
