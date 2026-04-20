import { motion } from "motion/react";
import { Instagram, Linkedin, Twitter, Mail, MapPin, Phone, Facebook, Pin, Ghost, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 md:pt-32 pb-12 md:pb-16 px-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 relative z-10">
        <div className="space-y-10">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-vibrant-indigo/10 border border-vibrant-indigo/20 rounded-full flex items-center justify-center group-hover:border-vibrant-indigo/50 transition-all duration-700">
              <span className="text-vibrant-indigo font-serif italic text-lg">S</span>
            </div>
            <span className="text-white font-serif tracking-[0.2em] text-sm group-hover:text-vibrant-indigo transition-colors duration-700 uppercase">Marketer Sinan VK</span>
          </Link>
          <p className="text-silver/40 text-sm leading-relaxed font-light tracking-wide max-w-xs">
            Marketer Sinan VK is the <span className="text-white font-medium">Best Digital Marketer in Kerala</span>, specializing in AI-driven growth and elite digital solutions. 
            Based in <span className="text-white font-medium">Palakkad, Kerala</span>, I help businesses scale with precision and excellence.
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
                className="w-10 h-10 glass-2 rounded-full flex items-center justify-center text-silver/40 hover:text-vibrant-indigo hover:border-vibrant-indigo/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-500 group"
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
              { name: "Home Market", path: "/" },
              { name: "Best Marketer Kerala", path: "/about" },
              { name: "Expert Certificates", path: "/certificate" },
              { name: "Kerala Marketing Services", path: "/services" },
              { name: "SEO specialist Portfolio", path: "/portfolio" },
              { name: "Digital Strategy Blog", path: "/blog" },
              { name: "Contact Best Marketer", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="text-silver/40 hover:text-vibrant-indigo text-xs font-light tracking-widest transition-colors duration-500 uppercase">
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
              <MapPin className="w-4 h-4 text-vibrant-indigo shrink-0 mt-1" />
              <Link to="/contact" className="text-silver/40 text-xs font-light leading-relaxed tracking-wide hover:text-vibrant-indigo transition-colors">
                Mappattukara, Koppam <br />
                Palakkad, Kerala, India
              </Link>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-4 h-4 text-vibrant-indigo shrink-0" />
              <span className="text-silver/40 text-xs font-light tracking-wide">+91 8590181381</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-4 h-4 text-vibrant-indigo shrink-0" />
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
              className="w-full glass-2 bg-white/[0.02] border border-white/5 rounded-full px-8 py-5 text-xs text-white placeholder:text-silver/20 focus:outline-none focus:border-vibrant-indigo/30 transition-all duration-700"
            />
            <button 
              aria-label="Join Newsletter"
              className="absolute right-2 top-2 bottom-2 bg-vibrant-indigo text-white px-8 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-500"
            >
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
          <a href="#" className="text-silver/20 hover:text-vibrant-indigo text-[9px] font-bold uppercase tracking-[0.5em] transition-colors">Privacy</a>
          <a href="#" className="text-silver/20 hover:text-vibrant-indigo text-[9px] font-bold uppercase tracking-[0.5em] transition-colors">Terms</a>
        </div>
      </div>

      {/* Large Background Monogram */}
      <div className="absolute -bottom-20 -left-20 text-[25vw] font-serif italic text-white/[0.01] select-none pointer-events-none tracking-tighter">
        S
      </div>
    </footer>
  );
}
