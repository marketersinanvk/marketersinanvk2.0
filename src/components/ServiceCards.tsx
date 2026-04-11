import { motion } from "motion/react";
import { Search, Megaphone, Layout, Signal, Wifi, BatteryFull, Bell, Linkedin, Briefcase, Cpu } from "lucide-react";

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
  return (
    <div className="w-full h-full p-1 flex flex-col items-center relative overflow-hidden bg-black border-[6px] border-[#1a1a1a] rounded-[60px] shadow-[0_0_100px_rgba(0,0,0,0.8),0_0_20px_rgba(57,255,20,0.05)]">
      {/* Inner Bezel / Screen Edge */}
      <div className="absolute inset-0 border-[1px] border-white/5 rounded-[54px] pointer-events-none z-50" />
      
      {/* Arabic Geometric Pattern Background (Subtle) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0l10 30h30l-25 20 10 30-25-20-25 20 10-30-25-20h30z' fill='%2339ff14'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      />

      {/* Dynamic Island - Realistic iOS 18+ Style */}
      <div className="absolute top-4 left-0 w-full px-8 flex justify-between items-center z-[60]">
        <span className="text-[11px] font-bold text-white/90">10:09</span>
        
        <motion.div 
          initial={{ width: 100 }}
          animate={{ width: 120 }}
          className="h-7 bg-black rounded-full flex items-center justify-center px-3 border border-white/5 shadow-lg relative"
        >
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-neon-green rounded-full shadow-[0_0_8px_#39ff14] animate-pulse" />
            <div className="w-1 h-1 bg-white/20 rounded-full" />
          </div>
          {/* AI Active Dot */}
          <div className="absolute right-2 w-1 h-1 bg-neon-green rounded-full shadow-[0_0_5px_#39ff14]" />
        </motion.div>

        <div className="flex items-center gap-1.5">
          <Signal size={12} className="text-white/90" />
          <Wifi size={12} className="text-white/90" />
          <div className="w-5 h-2.5 border border-white/30 rounded-[3px] p-[1px] flex items-center">
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
            className="text-neon-green/80 text-[13px] font-medium tracking-wide"
          >
            Saturday, April 11
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[84px] font-sans font-bold text-white tracking-tighter leading-none drop-shadow-[0_0_15px_rgba(57,255,20,0.2)]"
          >
            10:09
          </motion.h2>
          <p className="text-neon-green/40 text-[10px] font-arabic font-bold tracking-[0.3em] uppercase">
            ١٠:٠٩
          </p>
        </div>

        {/* System Notification - Branding & Keyword */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full mb-6 glass-2 backdrop-blur-[30px] border-[0.5px] border-neon-green/30 p-3 rounded-[20px] flex items-center gap-3 shadow-lg"
        >
          <div className="w-8 h-8 rounded-lg bg-neon-green flex items-center justify-center shrink-0">
            <Cpu size={16} className="text-midnight" />
          </div>
          <div>
            <h4 className="text-neon-green text-[10px] font-bold uppercase tracking-wider">Marketer Sinan VK</h4>
            <p className="text-white/60 text-[9px] font-medium">Freelance digital marketer in Kerala</p>
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
              className="glass-2 backdrop-blur-[30px] border-[0.5px] border-white/10 p-4 rounded-[24px] flex items-start gap-3.5 shadow-md group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-neon-green group-hover:text-midnight transition-all duration-500">
                <notif.icon className="w-5 h-5 text-neon-green group-hover:text-midnight transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <h4 className="text-white/90 text-[11px] font-bold truncate">{notif.header}</h4>
                  <span className="text-white/30 text-[9px] font-medium">{notif.time}</span>
                </div>
                <p className="text-white/50 text-[11px] leading-snug line-clamp-2 font-light">
                  {notif.text}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/20 rounded-full z-50" />
    </div>
  );
}
