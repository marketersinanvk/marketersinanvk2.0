import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Megaphone, Layout, Signal, Wifi, BatteryFull, Bell, Linkedin, Briefcase, Cpu, X, Send, MessageSquare } from "lucide-react";

const notifications = [
  {
    header: "Gadgenix (Urgent)",
    text: "Sinan's AI strategy doubled our ROAS in just 30 days. Exceptional!",
    icon: Search,
    time: "2 mins ago",
    delay: 0.5
  },
  {
    header: "Luxavya (Feedback)",
    text: "The premium UI/UX design transformed our brand's digital presence.",
    icon: Megaphone,
    time: "5 mins ago",
    delay: 0.6
  },
  {
    header: "Mincokids (SEO)",
    text: "Best SEO expert in Kerala. Our organic traffic is at an all-time high.",
    icon: Layout,
    time: "12 mins ago",
    delay: 0.7
  },
  {
    header: "KL Gadgetix (Growth)",
    text: "Market dominance achieved in record time. Highly recommended.",
    icon: Linkedin,
    time: "now",
    delay: 0.8
  },
  {
    header: "Elite Client (UAE)",
    text: "The AI-integrated marketing approach is a game-changer for our Dubai operations.",
    icon: Briefcase,
    time: "now",
    delay: 0.9
  }
];

export default function ServiceCards() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", brief: "" });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Sinan! %0A%0A*New Project Inquiry*%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Brief:* ${formData.brief}`;
    window.open(`https://wa.me/918590181381?text=${text}`, "_blank");
  };

  return (
    <div className="w-full h-full p-1 flex flex-col items-center relative overflow-hidden bg-black border-[6px] border-[#1a1a1a] rounded-[60px] shadow-[0_0_100px_rgba(0,0,0,0.8),0_0_20px_rgba(57,255,20,0.05)]">
      {/* Inner Bezel / Screen Edge */}
      <div className="absolute inset-0 border-[1px] border-white/5 rounded-[54px] pointer-events-none z-50" />
      
      {/* Arabic Geometric Pattern Background (Subtle) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0l10 30h30l-25 20 10 30-25-20-25 20 10-30-25-20h30z' fill='%2300E5FF'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      />

      {/* Dynamic Island - Realistic iOS 18+ Style */}
      <div className="absolute top-4 left-0 w-full px-8 flex justify-between items-center z-[60]">
        <span className="text-[11px] font-bold" style={{ color: "rgba(255, 255, 255, 0.9)" }}>10:09</span>
        
        <motion.div 
          initial={{ width: 100 }}
          animate={{ width: 120 }}
          className="h-7 bg-black rounded-full flex items-center justify-center px-3 border border-white/5 shadow-lg relative"
        >
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-arctic-blue rounded-full shadow-[0_0_8px_#00E5FF] animate-pulse" />
            <div className="w-1 h-1 bg-white/20 rounded-full" />
          </div>
          {/* AI Active Dot */}
          <div className="absolute right-2 w-1 h-1 bg-arctic-blue rounded-full shadow-[0_0_5px_#00E5FF]" />
        </motion.div>

        <div className="flex items-center gap-1.5">
          <Signal size={12} style={{ color: "rgba(255, 255, 255, 0.9)" }} />
          <Wifi size={12} style={{ color: "rgba(255, 255, 255, 0.9)" }} />
          <div className="w-5 h-2.5 border rounded-[3px] p-[1px] flex items-center" style={{ borderColor: "rgba(255, 255, 255, 0.3)" }}>
            <div className="w-full h-full bg-white rounded-[1px]" />
          </div>
        </div>
      </div>

      {/* Main Screen Content */}
      <div className="w-full h-full flex flex-col items-center pt-24 px-6 relative z-10">
        {/* Clock & Date - SF Pro Style */}
        <div className="text-center space-y-1 mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[13px] font-medium tracking-wide"
            style={{ color: "rgba(0, 229, 255, 0.8)" }}
          >
            Saturday, April 11
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[84px] font-sans font-bold text-white tracking-tighter leading-none drop-shadow-[0_0_15px_rgba(0,229,255,0.2)]"
          >
            10:09
          </motion.h2>
          <p className="text-[10px] font-arabic font-bold tracking-[0.3em] uppercase" style={{ color: "rgba(0, 229, 255, 0.4)" }}>
            ١٠:٠٩
          </p>
        </div>

        {/* System Notification - Branding & Keyword */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full mb-6 glass-2 backdrop-blur-[30px] border-[0.5px] p-3 rounded-[20px] flex items-center gap-3 shadow-lg"
          style={{ borderColor: "rgba(0, 229, 255, 0.3)" }}
        >
          <div className="w-8 h-8 rounded-lg bg-arctic-blue flex items-center justify-center shrink-0">
            <Cpu size={16} className="text-midnight" />
          </div>
          <div>
            <h4 className="text-arctic-blue text-[10px] font-bold uppercase tracking-wider">Marketer Sinan VK</h4>
            <p className="text-[9px] font-medium" style={{ color: "rgba(255, 255, 255, 0.6)" }}>Freelance digital marketer in Kerala</p>
          </div>
        </motion.div>

        {/* Notification Stack - iOS 18 Style */}
        <div className="w-full space-y-2.5 max-h-[380px] overflow-hidden relative">
          {notifications.map((notif, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + (i * 0.1), 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="glass-2 backdrop-blur-[30px] border-[0.5px] p-4 rounded-[24px] flex items-start gap-3.5 shadow-md group"
              style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-arctic-blue group-hover:text-midnight transition-all duration-500">
                <notif.icon className="w-5 h-5 text-arctic-blue group-hover:text-midnight transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <h4 className="text-[11px] font-bold truncate" style={{ color: "rgba(255, 255, 255, 0.9)" }}>{notif.header}</h4>
                  <span className="text-[9px] font-medium" style={{ color: "rgba(255, 255, 255, 0.3)" }}>{notif.time}</span>
                </div>
                <p className="text-[11px] leading-snug line-clamp-2 font-light" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                  {notif.text}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Swipe-up Contact Form Overlay */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute inset-0 z-[100] bg-midnight/90 backdrop-blur-[40px] p-8 flex flex-col pt-20"
          >
            <button 
              onClick={() => setIsFormOpen(false)}
              className="absolute top-8 right-8 w-10 h-10 glass-2 rounded-full flex items-center justify-center transition-colors"
              style={{ color: "rgba(192, 192, 192, 0.4)" }}
            >
              <X size={20} />
            </button>

            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-neon-green text-[9px] font-bold uppercase tracking-[0.5em]">The Initiation</p>
                <h3 className="text-3xl font-serif italic text-white">Start Your <br /> Project.</h3>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-silver/30 uppercase tracking-widest ml-4">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Muhammed Sinan"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full glass-2 bg-white/[0.02] border border-white/5 rounded-full px-6 py-4 text-xs text-white placeholder:text-silver/10 focus:outline-none focus:border-neon-green/30 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-silver/30 uppercase tracking-widest ml-4">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="sinan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full glass-2 bg-white/[0.02] border border-white/5 rounded-full px-6 py-4 text-xs text-white placeholder:text-silver/10 focus:outline-none focus:border-neon-green/30 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-silver/30 uppercase tracking-widest ml-4">Project Brief</label>
                  <textarea 
                    required
                    rows={3}
                    placeholder="Tell me about your vision..."
                    value={formData.brief}
                    onChange={(e) => setFormData({...formData, brief: e.target.value})}
                    className="w-full glass-2 bg-white/[0.02] border border-white/5 rounded-[24px] px-6 py-4 text-xs text-white placeholder:text-silver/10 focus:outline-none focus:border-neon-green/30 transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-neon-green text-midnight font-bold rounded-full flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(57,255,20,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-[0.2em] text-[10px] mt-4"
                >
                  Contact via WhatsApp <MessageSquare size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Home Indicator / Swipe Handle */}
      <motion.div 
        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 rounded-full z-[110] cursor-pointer group"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        whileHover={{ scaleX: 1.1, backgroundColor: "rgba(57, 255, 20, 0.4)" }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={(_, info) => {
          if (info.offset.y < -50) setIsFormOpen(true);
        }}
        onClick={() => setIsFormOpen(true)}
      >
        {/* Tooltip for Desktop */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[8px] font-bold text-neon-green uppercase tracking-widest bg-black/80 px-3 py-1.5 rounded-full border border-neon-green/20 backdrop-blur-md">
          Swipe up or click to start
        </div>
      </motion.div>
    </div>
  );
}
