import React from "react";
import { motion } from "motion/react";

export const NeuralBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      {/* Grid Dots */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px' 
        }} 
      />
      
      {/* Moving Neural Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(99, 102, 241, 0.2)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {[...Array(6)].map((_, i) => (
          <motion.path
            key={i}
            d={`M -100 ${100 + i * 150} Q ${400 + i * 50} ${50 + i * 20} ${1200} ${200 + i * 100} T 2000 ${400}`}
            stroke="url(#neural-gradient)"
            strokeWidth="1"
            fill="transparent"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1], 
              opacity: [0, 1, 0],
              x: [0, 100, 0]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
          />
        ))}
      </svg>
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-vibrant-indigo/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-vibrant-indigo/5 blur-[120px] rounded-full" />
    </div>
  );
};
