import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Pin, Ghost, Youtube } from "lucide-react";
import { BentoGrid, BentoCard } from "../components/BentoGrid";
import ContactForm from "../components/ContactForm";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen pt-48 px-8 pb-32 grainy"
    >
      <SEO 
        title="Contact Marketer Sinan VK | Hire the Best Freelance Digital Marketer in Kerala"
        description="Ready to scale your brand? Contact Marketer Sinan VK for premium Meta Ads, SEO, and Branding services. Serving clients in Palakkad, Kerala, Dubai, and worldwide."
      />
      <div className="space-y-16 relative z-10">
        <BentoGrid className="gap-16 lg:gap-32">
          {/* Contact Info Card */}
          <div className="md:col-span-6 space-y-16 py-8">
            <div className="space-y-6">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-vibrant-indigo/40 text-[9px] font-bold uppercase tracking-[0.5em]"
              >
                The Initiation
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-9xl font-serif tracking-tighter text-white leading-[0.85]"
              >
                Let's <br />
                <span className="italic text-vibrant-indigo text-indigo-glow">Connect.</span>
              </motion.h1>
            </div>

            <div className="space-y-12">
              {[
                { icon: Mail, label: "Email", value: "marketersinanvk@gmail.com" },
                { icon: Phone, label: "WhatsApp", value: "+91 8590181381" },
                { icon: MapPin, label: "Base", value: "Palakkad, Kerala" }
              ].map((item, i) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-8 group"
                >
                  <div className="w-16 h-16 glass-2 rounded-2xl flex items-center justify-center text-vibrant-indigo group-hover:bg-vibrant-indigo group-hover:text-white transition-all duration-700">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-silver/30 text-[9px] font-bold uppercase tracking-[0.3em] mb-1">{item.label}</p>
                    <p className="text-white text-xl font-serif italic">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-wrap gap-6">
              {/* Social Icons for Contact Page */}
              {[
                { Icon: Twitter, label: "X", href: "https://twitter.com/sinan246810" },
                { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/muhammed_sinan_vk_85" },
                { Icon: Ghost, label: "Snapchat", href: "https://www.snapchat.com/add/muhammed_sinan_vk_85", isSnap: true },
                { Icon: Pin, label: "Pinterest", href: "https://www.pinterest.com/sinan246810111214" },
                { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@DigitalMark-l3q" },
                { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sinan-vk" }
              ].map(({ Icon, label, href, isSnap }, i) => (
                <motion.a 
                  key={label} 
                  href={href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={isSnap ? { scale: 1.2, rotate: [0, -10, 10, 0] } : { scale: 1.1 }}
                  transition={isSnap ? { duration: 0.4, ease: "easeInOut" } : { duration: 0.3 }}
                  className="w-12 h-12 glass-2 rounded-full flex items-center justify-center text-silver/40 hover:text-vibrant-indigo hover:border-vibrant-indigo/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-500 group"
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:col-span-6">
            <ContactForm />
          </div>
        </BentoGrid>
      </div>
    </motion.main>
  );
}
