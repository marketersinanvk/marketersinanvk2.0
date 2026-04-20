import { ReactNode } from "react";
import { motion } from "motion/react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
}

export function BentoCard({ children, className = "", delay = 0, onClick }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        delay, 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={`bento-card bento-card-hover ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

export function BentoGrid({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bento-grid ${className}`}>
      {children}
    </div>
  );
}
