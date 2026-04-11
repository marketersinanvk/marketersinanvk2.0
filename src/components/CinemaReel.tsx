import { motion } from "motion/react";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

interface CinemaReelProps {
  title?: string;
  subtitle?: string;
  refCode?: string;
}

interface Logo {
  name: string;
  src: string;
  isMeta?: boolean;
}

interface LogoCardProps {
  logo: Logo;
}

function LogoCard({ logo }: LogoCardProps) {
  const [isError, setIsError] = useState(false);

  return (
    <motion.div 
      whileHover={{ 
        y: -10, 
        scale: 1.1,
        rotateY: 15,
        rotateX: 5,
        z: 50
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-[180px] md:w-[240px] h-[90px] md:h-[120px] flex items-center justify-center glass-2 rounded-xl border border-white/5 group cursor-pointer transition-all duration-500 hover:border-neon-green/50 shrink-0 ${
        logo.isMeta 
          ? "shadow-[0_0_30px_rgba(57,255,20,0.2)] border-neon-green/30 hover:shadow-[0_0_60px_rgba(57,255,20,0.6)]" 
          : "shadow-[0_0_20px_rgba(57,255,20,0.1)] hover:shadow-[0_0_50px_rgba(57,255,20,0.4)]"
      }`}
    >
      {/* Meta Specific Active Glow */}
      {logo.isMeta && (
        <div className="absolute inset-0 bg-neon-green/5 rounded-xl pointer-events-none" />
      )}
      
      {!isError ? (
        <img 
          src={logo.src} 
          alt={logo.name} 
          onError={() => setIsError(true)}
          className={`max-w-[100px] md:max-w-[140px] max-h-[40px] md:max-h-[60px] object-contain transition-all duration-500 opacity-100 grayscale-0 ${
            logo.isMeta 
              ? "drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]" 
              : "drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]"
          }`}
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      ) : (
        <span className="text-white font-serif italic text-xl md:text-2xl tracking-tight opacity-80">
          {logo.name}
        </span>
      )}
      
      <div className={`absolute inset-0 opacity-5 group-hover:opacity-20 transition-opacity duration-700 blur-2xl rounded-xl ${
        logo.isMeta ? "bg-neon-green" : "bg-neon-green"
      }`} />

      {/* Inner Shadow for Depth */}
      <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.3)] pointer-events-none rounded-xl" />
    </motion.div>
  );
}

export default function CinemaReel({ 
  title = "THE VISUAL ARCHIVE", 
  subtitle = "Cinematic Narratives",
  refCode = "REF. MSVK-8590181381 // KERALA, INDIA // 2026"
}: CinemaReelProps) {
  const logos: Logo[] = [
    { name: "HubSpot", src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" },
    { name: "HP", src: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
    { name: "Meta", src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", isMeta: true },
    { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  ];

  return (
    <section className="py-24 overflow-hidden relative grainy">
      <div className="max-w-7xl mx-auto px-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-neon-green text-[9px] font-bold uppercase tracking-[0.5em] mb-4">{title}</h2>
          <h3 className="text-4xl md:text-6xl font-serif italic tracking-tight text-white leading-tight">{subtitle}</h3>
        </motion.div>
        <div className="text-silver/20 font-mono text-[9px] uppercase tracking-[0.4em]">
          {refCode}
        </div>
      </div>

      <div className="relative">
        {/* Realistic Film Strip Borders - Enhanced 3D Look */}
        <div className="absolute top-0 left-0 right-0 h-8 border-y border-white/5 z-10 bg-midnight/95 backdrop-blur-md flex items-center justify-around overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className="w-4 h-4 border-[0.5px] border-white/10 rounded-sm shrink-0 bg-midnight/50" />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 border-y border-white/5 z-10 bg-midnight/95 backdrop-blur-md flex items-center justify-around overflow-hidden shadow-[0_-4px_10px_rgba(0,0,0,0.5)]">
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className="w-4 h-4 border-[0.5px] border-white/10 rounded-sm shrink-0 bg-midnight/50" />
          ))}
        </div>

        {/* Marquee Content */}
        <div className="flex py-4 md:py-8 perspective-1000 overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1200] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-8 md:gap-16 px-8"
          >
            {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <div key={index}>
                <LogoCard logo={logo} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Verified Professional Badge */}
        <div className="absolute top-1/2 right-12 -translate-y-1/2 z-20 hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass-2 p-6 rounded-full border border-neon-green/30 flex flex-col items-center gap-2 shadow-[0_0_40px_rgba(57,255,20,0.2)] animate-pulse"
          >
            <CheckCircle className="text-neon-green w-8 h-8" />
            <p className="text-neon-green text-[7px] font-bold uppercase tracking-[0.3em] text-center leading-tight">
              Verified <br /> Professional
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
