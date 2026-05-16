import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto bg-dark-charcoal/80 backdrop-blur-2xl rounded-full px-8 py-4 flex items-center justify-between border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
      >
        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(106,13,173,0.06),rgba(212,175,55,0.02),rgba(106,13,173,0.06))] bg-[length:100%_2px,3px_100%]" />
        
        <Link to="/" className="flex items-center gap-3 group relative z-10">
          <div className="w-8 h-8 bg-neon-purple/5 border border-neon-purple/20 rounded-full flex items-center justify-center group-hover:border-neon-purple/50 transition-all duration-700">
            <span className="text-neon-purple font-serif italic text-lg">S</span>
          </div>
          <span className="text-white font-display tracking-[0.2em] text-sm group-hover:text-neon-purple transition-colors duration-700 uppercase">Marketer Sinan VK</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Certificate", path: "/certificate" },
            { name: "Services", path: "/services" },
            { name: "Portfolio", path: "/portfolio", badge: "NEW" },
            { name: "Posts", path: "/blog", badge: "TRENDING" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className="relative text-white/40 hover:text-white text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 group/link"
            >
              {item.name}
              {item.badge && (
                <span className="absolute -top-4 -right-4 bg-neon-purple text-white text-[6px] px-1.5 py-0.5 rounded-full font-bold animate-pulse shadow-[0_0_10px_rgba(106,13,173,0.5)]">
                  {item.badge}
                </span>
              )}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-purple transition-all duration-500 group-hover/link:w-full shadow-[0_0_5px_rgba(157,39,176,0.5)]" />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white/70 p-4 -mr-4" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-obsidian/98 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center gap-8 p-8"
          >
            <button 
              className="absolute top-10 right-10 text-neon-purple hover:scale-110 transition-transform"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Certificate", path: "/certificate" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Posts", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={item.path}
                    className="text-white text-3xl font-display tracking-[0.2em] uppercase hover:text-neon-purple transition-colors py-4 px-8 block text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-20 flex gap-8">
              {[
                { label: "IG", href: "https://www.instagram.com/muhammed_sinan_vk_85", aria: "Instagram" },
                { label: "LI", href: "https://www.linkedin.com/in/sinan-vk", aria: "LinkedIn" },
                { label: "X", href: "https://twitter.com/sinan246810", aria: "Twitter" }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.aria}
                  className="w-12 h-12 bg-neon-purple/5 rounded-full flex items-center justify-center text-neon-purple/60 hover:text-neon-purple hover:border-neon-purple/30 transition-all duration-500 border border-neon-purple/10"
                >
                  <span className="text-[10px] font-bold">{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
