import { motion } from "motion/react";
import { Instagram, Linkedin, Twitter, Mail, MapPin, Phone, Facebook, Pin, Ghost } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-32 pb-16 px-8 overflow-hidden relative grainy">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 relative z-10">
        <div className="space-y-10">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-teal/10 border border-teal/20 rounded-full flex items-center justify-center group-hover:border-teal/50 transition-all duration-700">
              <span className="text-teal font-serif italic text-lg">S</span>
            </div>
            <span className="text-white font-serif tracking-[0.2em] text-sm group-hover:text-teal transition-colors duration-700 uppercase">Marketer Sinan VK</span>
          </Link>
          <p className="text-silver/40 text-sm leading-relaxed font-light tracking-wide max-w-xs">
            The definitive destination for AI-powered digital mastery. 
            Crafting digital legacies for the world's most ambitious entities.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { Icon: Twitter, label: "X" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Ghost, label: "Snapchat", isSnap: true },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Pin, label: "Pinterest" },
              { Icon: Linkedin, label: "LinkedIn" }
            ].map(({ Icon, label, isSnap }, i) => (
              <motion.a 
                key={i} 
                href="#" 
                aria-label={label}
                whileHover={isSnap ? { scale: 1.2, rotate: [0, -10, 10, 0] } : { scale: 1.1 }}
                transition={isSnap ? { type: "spring", stiffness: 400, damping: 10 } : { duration: 0.3 }}
                className="w-10 h-10 glass-2 rounded-full flex items-center justify-center text-silver/40 hover:text-teal hover:border-teal/30 hover:shadow-[0_0_20px_rgba(0,128,128,0.3)] transition-all duration-500 group"
              >
                <Icon size={16} className="group-hover:scale-110 transition-transform" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <h4 className="text-white font-serif italic text-sm tracking-[0.2em] uppercase">Navigation</h4>
          <ul className="space-y-5">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Certificate", path: "/certificate" },
              { name: "Services", path: "/services" },
              { name: "Portfolio", path: "/portfolio" },
              { name: "Posts", path: "/blog" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="text-silver/40 hover:text-teal text-xs font-light tracking-widest transition-colors duration-500 uppercase">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-10">
          <h4 className="text-white font-serif italic text-sm tracking-[0.2em] uppercase">Base</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <MapPin className="w-4 h-4 text-teal shrink-0 mt-1" />
              <Link to="/contact" className="text-silver/40 text-xs font-light leading-relaxed tracking-wide hover:text-teal transition-colors">
                Mappattukara, Koppam <br />
                Palakkad, Kerala, India
              </Link>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-4 h-4 text-teal shrink-0" />
              <span className="text-silver/40 text-xs font-light tracking-wide">+91 8590181381</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-4 h-4 text-teal shrink-0" />
              <span className="text-silver/40 text-xs font-light tracking-wide">marketersinanvk@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="space-y-10">
          <h4 className="text-white font-serif italic text-sm tracking-[0.2em] uppercase">The Manifesto</h4>
          <p className="text-silver/40 text-xs font-light leading-relaxed tracking-wide">
            Subscribe to our private newsletter for neural insights and elite trends.
          </p>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full glass-2 bg-white/[0.02] border border-white/5 rounded-full px-8 py-5 text-xs text-white placeholder:text-silver/20 focus:outline-none focus:border-teal/30 transition-all duration-700"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-teal text-midnight px-8 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-500">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
        <p className="text-silver/20 text-[9px] font-bold uppercase tracking-[0.5em]">
          © 2026 MARKETER SINAN VK. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-12">
          <a href="#" className="text-silver/20 hover:text-teal text-[9px] font-bold uppercase tracking-[0.5em] transition-colors">Privacy</a>
          <a href="#" className="text-silver/20 hover:text-teal text-[9px] font-bold uppercase tracking-[0.5em] transition-colors">Terms</a>
        </div>
      </div>

      {/* Large Background Monogram */}
      <div className="absolute -bottom-20 -left-20 text-[25vw] font-serif italic text-white/[0.01] select-none pointer-events-none tracking-tighter">
        S
      </div>
    </footer>
  );
}
