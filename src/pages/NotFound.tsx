import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Cpu, ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-midnight flex flex-col items-center justify-center p-6 text-center space-y-12">
      <SEO 
        title="404 | Access Denied"
        description="The requested digital node was not found."
      />
      
      <div className="relative">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-32 h-32 rounded-[2.5rem] bg-neon-purple/5 border border-neon-purple/20 flex items-center justify-center text-neon-purple shadow-[0_0_50px_rgba(168,85,247,0.1)]"
        >
          <Cpu size={64} />
        </motion.div>
        <div className="absolute -top-4 -right-4 px-4 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
           <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Error 404</span>
        </div>
      </div>

      <div className="space-y-6 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-serif italic text-white tracking-tighter uppercase leading-tight">
          Deployment Node <br/>Not Found.
        </h1>
        <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
          This digital sector is currently outside our absolute dominance grid. The requested coordinate does not exist in the current retrieval index.
        </p>
      </div>

      <Link 
        to="/" 
        className="group relative flex items-center gap-4 px-12 py-5 bg-transparent border border-neon-purple/40 rounded-full overflow-hidden transition-all hover:border-neon-purple"
      >
        <ArrowLeft size={18} className="text-neon-purple group-hover:-translate-x-1 transition-transform" />
        <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white">Return to Operational Hub</span>
        <div className="absolute inset-0 bg-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>

      <div className="pt-24 opacity-20">
         <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[1em]">Absolute Digital Superiority / Terminal Output</p>
      </div>
    </div>
  );
}
