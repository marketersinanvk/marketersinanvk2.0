import { motion } from "motion/react";
import { Instagram, Linkedin, Twitter, Mail, MapPin, Phone, Facebook, Pin, Ghost, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 md:pt-32 pb-12 md:pb-16 px-8 overflow-hidden relative bg-obsidian">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 relative z-10">
        <div className="space-y-10">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-neon-purple/10 border border-neon-purple/20 rounded-full flex items-center justify-center group-hover:border-neon-purple/50 transition-all duration-700">
              <span className="text-neon-purple font-serif italic text-lg shadow-neon-purple/50">S</span>
            </div>
            <span className="text-white font-display tracking-[0.2em] text-sm group-hover:text-neon-purple transition-colors duration-700 uppercase">Marketer Sinan VK</span>
          </Link>
          <p className="text-white/40 text-sm leading-relaxed font-light tracking-wide max-w-xs uppercase">
            Marketer Sinan VK is the <span className="text-neon-purple font-bold">Best Digital Marketer in Kerala</span>, specializing in AI-driven growth and elite digital solutions. 
            Based in <span className="text-accent-purple font-bold">Palakkad</span>, I help businesses scale with precision.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { Icon: Twitter, label: "X", href: "https://twitter.com/sinan246810" },
              { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/muhammed_sinan_vk_85" },
              { Icon: Ghost, label: "Snapchat", href: "https://www.snapchat.com/add/muhammed_sinan_vk_85", isSnap: true },
              { Icon: Pin, label: "Pinterest", href: "https://www.pinterest.com/sinan246810111214" },
              { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@DigitalMark-l3q" },
              { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sinan-vk" }
            ].map(({ Icon, label, href, isSnap }, i) => (
              <motion.a 
                key={i} 
                href={href} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={isSnap ? { scale: 1.2, rotate: [0, -10, 10, 0] } : { scale: 1.1 }}
                transition={isSnap ? { duration: 0.4, ease: "easeInOut" } : { duration: 0.3 }}
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-neon-purple hover:border-neon-purple/30 hover:shadow-[0_0_20px_rgba(106,13,173,0.3)] transition-all duration-500 group"
              >
                <Icon size={16} className="group-hover:scale-110 transition-transform" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <h4 className="text-neon-purple font-display text-[10px] tracking-[0.5em] uppercase font-bold">Navigation</h4>
          <ul className="space-y-5">
            {[
              { name: "Home Market", path: "/" },
              { name: "Best Marketer Kerala", path: "/about" },
              { name: "Expert Certificates", path: "/certificate" },
              { name: "Global Growth Services", path: "/services" },
              { name: "Elite Portfolio", path: "/portfolio" },
              { name: "Strategic Insights", path: "/blog" },
              { name: "Initiate Link", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="text-white/30 hover:text-neon-purple text-[10px] font-bold tracking-[0.3em] transition-colors duration-500 uppercase">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-10">
          <h4 className="text-neon-purple font-display text-[10px] tracking-[0.5em] uppercase font-bold">Strategic Base</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <MapPin className="w-4 h-4 text-neon-purple shrink-0 mt-1" />
              <Link to="/contact" className="text-white/40 text-[11px] font-light leading-relaxed tracking-wider hover:text-accent-purple transition-colors uppercase">
                Mappattukara, Koppam <br />
                Palakkad, Kerala, India
              </Link>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-4 h-4 text-neon-purple shrink-0" />
              <span className="text-white/40 text-[11px] font-light tracking-widest uppercase">+91 8590181381</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-4 h-4 text-neon-purple shrink-0" />
              <span className="text-white/40 text-[11px] font-light tracking-widest lowercase">marketermarginalsinanvk@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="space-y-10">
          <h4 className="text-accent-purple font-display text-[10px] tracking-[0.5em] uppercase font-bold">The Manifesto</h4>
          <p className="text-white/30 text-[10px] font-light leading-relaxed tracking-[0.2em] uppercase">
            Subscribe for neural insights and <span className="text-white">Elite Retrieval</span> protocols.
          </p>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-white/[0.02] border border-white/10 rounded-full px-8 py-5 text-[10px] text-white placeholder:text-white/10 focus:outline-none focus:border-neon-purple/50 transition-all duration-700 uppercase tracking-widest font-bold shadow-inner"
            />
            <button 
              aria-label="Join Newsletter"
              className="absolute right-2 top-2 bottom-2 purple-gradient-bg text-white px-8 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-500 shadow-neon-purple/20"
            >
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
        <p className="text-white/10 text-[9px] font-bold uppercase tracking-[0.8em]">
          © 2026 MARKETER SINAN VK. ALL RIGHTS RESERVED. DOMINANCE SECURED.
        </p>
        <div className="flex gap-12">
          <a href="#" className="text-white/10 hover:text-neon-purple text-[9px] font-bold uppercase tracking-[0.5em] transition-colors">Privacy</a>
          <a href="#" className="text-white/10 hover:text-neon-purple text-[9px] font-bold uppercase tracking-[0.5em] transition-colors">Terms</a>
        </div>
      </div>

      {/* Large Background Monogram */}
      <div className="absolute -bottom-20 -left-20 text-[25vw] font-serif italic text-white/[0.01] select-none pointer-events-none tracking-tighter">
        MSVK
      </div>
    </footer>
  );
}

