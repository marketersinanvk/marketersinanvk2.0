import { useState, FormEvent, ChangeEvent } from "react";
import { Send, Loader2, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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
  const [errorHeader, setErrorHeader] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorHeader(null);

    const data = {
      ...formData,
      access_key: "3cc20a0b-fe19-45c1-87bd-28dc3a71d0ed",
      from_name: "MSVK Elite Portfolio",
      subject: `New Inquiry from ${formData.name}`
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          service: "",
          message: ""
        });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);
      setErrorHeader(error instanceof Error ? error.message : "Failed to transmit message. Please try again.");
      setTimeout(() => setErrorHeader(null), 5000);
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
      <div className="absolute inset-0 bg-gradient-to-br from-vibrant-indigo to-transparent opacity-30 group-hover/form:opacity-50 transition-opacity duration-500" />
      
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
                <CheckCircle2 className="w-24 h-24 text-vibrant-indigo mb-6 filter drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
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
                className="px-10 py-4 glass-2 rounded-full text-vibrant-indigo text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-vibrant-indigo/10 transition-all duration-500 border border-vibrant-indigo/20"
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
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text" 
                className="w-full bg-white/[0.03] border-none rounded-full px-8 py-5 text-white focus:outline-none focus:ring-1 focus:ring-vibrant-indigo/30 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-500 font-light placeholder:text-silver/10 text-sm sm:text-base"
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
                className="w-full bg-white/[0.03] border-none rounded-full px-8 py-5 text-white focus:outline-none focus:ring-1 focus:ring-vibrant-indigo/30 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-500 font-light placeholder:text-silver/10 text-sm sm:text-base"
                placeholder="+91 00000 00000"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            <div className="space-y-3">
              <label className="text-silver/40 text-[10px] font-medium uppercase tracking-[0.4em] ml-5 block">Email Address</label>
              <input 
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email" 
                className="w-full bg-white/[0.03] border-none rounded-full px-8 py-5 text-white focus:outline-none focus:ring-1 focus:ring-vibrant-indigo/30 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-500 font-light placeholder:text-silver/10 text-sm sm:text-base"
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
                  className="w-full bg-white/[0.03] border-none rounded-full px-8 py-5 text-white focus:outline-none focus:ring-1 focus:ring-vibrant-indigo/30 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-500 font-light appearance-none cursor-pointer text-sm sm:text-base"
                >
                  <option value="" className="bg-midnight">Select a Service</option>
                  {services.map(service => (
                    <option key={service} value={service} className="bg-midnight">{service}</option>
                  ))}
                </select>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-vibrant-indigo/40">
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
              className="w-full bg-white/[0.03] border-none rounded-[25px] sm:rounded-[35px] px-8 py-6 text-white focus:outline-none focus:ring-1 focus:ring-vibrant-indigo/30 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-500 font-light resize-none placeholder:text-silver/10 text-sm sm:text-base"
              placeholder="Describe your vision..."
            />
          </div>

          <div className="space-y-6">
            <AnimatePresence>
              {errorHeader && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs flex items-center gap-3"
                >
                  <AlertCircle size={14} />
                  {errorHeader}
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              disabled={isSubmitting}
              className="relative w-full py-6 sm:py-7 bg-vibrant-indigo text-white font-bold rounded-full overflow-hidden group/btn transition-all duration-700 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_50px_rgba(99,102,241,0.2)]"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite] pointer-events-none" />
              
              <div className="relative z-10 flex items-center justify-center gap-4">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="uppercase tracking-[0.4em] text-[11px]">Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="uppercase tracking-[0.4em] text-[11px]">Initiate Contact</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                  </>
                )}
              </div>
            </button>
            
            <div className="flex items-center justify-center gap-3 text-vibrant-indigo/30">
              <ShieldCheck size={14} />
              <span className="text-[9px] font-medium uppercase tracking-[0.3em]">Encrypted Transmission</span>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
