import { useState, FormEvent, ChangeEvent, useRef } from "react";
import { Send, Loader2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import emailjs from "@emailjs/browser";

const services = [
  "AI-Driven Growth Strategy",
  "Meta Ads (Performance Marketing)",
  "Premium Branding & Identity",
  "Web Development (High-End)",
  "SEO & Search Engine Marketing",
  "Content Strategy & Video Editing",
  "Data Analytics & Reporting"
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    mobile: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      mobile: formData.mobile,
      service: formData.service,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_8yyoxdh",
        "template_878dba",
        templateParams,
        "U9vRH2VToMQBpQ7f_"
      );
      
      setIsSuccess(true);
      setFormData({
        user_name: "",
        user_email: "",
        mobile: "",
        service: "",
        message: ""
      });
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again or contact via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative p-[1px] rounded-[30px] sm:rounded-[40px] overflow-hidden group/form"
    >
      {/* Gradient Border Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00d2ff] to-transparent opacity-30 group-hover/form:opacity-50 transition-opacity duration-500" />
      
      <div className="relative p-6 sm:p-8 md:p-12 rounded-[29px] sm:rounded-[39px] bg-[rgba(10,10,10,0.7)] backdrop-blur-[15px] shadow-2xl w-full overflow-hidden">
        <AnimatePresence>
          {isSuccess && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[rgba(10,10,10,0.9)] backdrop-blur-md p-8 text-center"
            >
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", damping: 12, stiffness: 200 }}
              >
                <CheckCircle2 className="w-24 h-24 text-arctic-blue mb-6 filter drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]" />
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-serif text-white mb-3 tracking-tight"
              >
                Thank You
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-silver/60 text-sm max-w-xs mx-auto mb-10 font-light leading-relaxed"
              >
                Your message has been transmitted successfully. Sinan's elite team will contact you shortly.
              </motion.p>
              <motion.button 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsSuccess(false)}
                className="px-10 py-4 glass-2 rounded-full text-arctic-blue text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-arctic-blue/10 transition-all duration-500 border border-arctic-blue/20"
              >
                Send Another
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <form className="space-y-8 sm:space-y-10" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            <div className="space-y-3">
              <label className="text-silver/40 text-[10px] font-medium uppercase tracking-[0.4em] ml-5 block">Name</label>
              <input 
                required
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                type="text" 
                className="w-full bg-white/[0.03] border-none rounded-full px-8 py-5 text-white focus:outline-none focus:ring-1 focus:ring-arctic-blue/30 focus:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-500 font-light placeholder:text-silver/10 text-sm sm:text-base"
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-3">
              <label className="text-silver/40 text-[10px] font-medium uppercase tracking-[0.4em] ml-5 block">Mobile</label>
              <input 
                required
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                type="tel" 
                className="w-full bg-white/[0.03] border-none rounded-full px-8 py-5 text-white focus:outline-none focus:ring-1 focus:ring-arctic-blue/30 focus:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-500 font-light placeholder:text-silver/10 text-sm sm:text-base"
                placeholder="+91 00000 00000"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            <div className="space-y-3">
              <label className="text-silver/40 text-[10px] font-medium uppercase tracking-[0.4em] ml-5 block">Email Address</label>
              <input 
                required
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                type="email" 
                className="w-full bg-white/[0.03] border-none rounded-full px-8 py-5 text-white focus:outline-none focus:ring-1 focus:ring-arctic-blue/30 focus:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-500 font-light placeholder:text-silver/10 text-sm sm:text-base"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-3">
              <label className="text-silver/40 text-[10px] font-medium uppercase tracking-[0.4em] ml-5 block">Service</label>
              <div className="relative">
                <select 
                  required
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border-none rounded-full px-8 py-5 text-white focus:outline-none focus:ring-1 focus:ring-arctic-blue/30 focus:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-500 font-light appearance-none cursor-pointer text-sm sm:text-base"
                >
                  <option value="" className="bg-midnight">Select a Service</option>
                  {services.map(service => (
                    <option key={service} value={service} className="bg-midnight">{service}</option>
                  ))}
                </select>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-arctic-blue/40">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-silver/40 text-[10px] font-medium uppercase tracking-[0.4em] ml-5 block">Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-white/[0.03] border-none rounded-[25px] sm:rounded-[35px] px-8 py-6 text-white focus:outline-none focus:ring-1 focus:ring-arctic-blue/30 focus:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-500 font-light resize-none placeholder:text-silver/10 text-sm sm:text-base"
              placeholder="Describe your vision..."
            />
          </div>

          <div className="space-y-6">
            <button 
              disabled={isSubmitting}
              className="relative w-full py-6 sm:py-7 bg-arctic-blue text-midnight font-bold rounded-full overflow-hidden group/btn transition-all duration-700 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_50px_rgba(0,229,255,0.2)]"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite] pointer-events-none" />
              
              <div className="relative z-10 flex items-center justify-center gap-4">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="uppercase tracking-[0.4em] text-[11px]">Transmitting...</span>
                  </>
                ) : (
                  <>
                    <span className="uppercase tracking-[0.4em] text-[11px]">Initiate Contact</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                  </>
                )}
              </div>
            </button>
            
            <div className="flex items-center justify-center gap-3 text-arctic-blue/30">
              <ShieldCheck size={14} />
              <span className="text-[9px] font-medium uppercase tracking-[0.3em]">Encrypted Transmission</span>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
