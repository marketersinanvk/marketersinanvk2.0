import { useState, FormEvent, ChangeEvent } from "react";
import { Send, Loader2, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

const services = [
  "AI-Driven Growth Strategy",
  "Meta Ads (Performance Marketing)",
  "Premium Branding & Identity",
  "Web Development (High-End)",
  "SEO & Search Engine Marketing",
  "Project Inquiry: MincoKids",
  "Project Inquiry: KL Gadgetix",
  "Project Inquiry: Luxavya",
  "Content Strategy & Video Editing",
  "Data Analytics & Reporting"
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct WhatsApp message
    const message = `Hello Sinan, I am ${formData.name}. My Phone: ${formData.mobile}, Email: ${formData.email}. I am interested in ${formData.service}. Message: ${formData.message}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918590181381?text=${encodedMessage}`;

    // Simulate a brief loading state before redirecting
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
    }, 1000);
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
      className="glass-2 p-6 sm:p-8 md:p-12 rounded-[30px] sm:rounded-[40px] border border-white/5 shadow-2xl bg-midnight/40 backdrop-blur-xl w-full"
    >
      <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-2">
            <label className="text-silver/30 text-[9px] font-bold uppercase tracking-[0.3em] ml-4">Name</label>
            <input 
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text" 
              className="w-full bg-midnight/20 border border-white/5 rounded-full px-6 py-4 text-white focus:outline-none focus:border-teal focus:shadow-[0_0_15px_rgba(0,128,128,0.3)] transition-all font-light placeholder:text-silver/10 text-sm sm:text-base"
              placeholder="Your Name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-silver/30 text-[9px] font-bold uppercase tracking-[0.3em] ml-4">Mobile Number</label>
            <input 
              required
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              type="tel" 
              className="w-full bg-midnight/20 border border-white/5 rounded-full px-6 py-4 text-white focus:outline-none focus:border-teal focus:shadow-[0_0_15px_rgba(0,128,128,0.3)] transition-all font-light placeholder:text-silver/10 text-sm sm:text-base"
              placeholder="+91 00000 00000"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-2">
            <label className="text-silver/30 text-[9px] font-bold uppercase tracking-[0.3em] ml-4">Email</label>
            <input 
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email" 
              className="w-full bg-midnight/20 border border-white/5 rounded-full px-6 py-4 text-white focus:outline-none focus:border-teal focus:shadow-[0_0_15px_rgba(0,128,128,0.3)] transition-all font-light placeholder:text-silver/10 text-sm sm:text-base"
              placeholder="Your Email"
            />
          </div>
          <div className="space-y-2">
            <label className="text-silver/30 text-[9px] font-bold uppercase tracking-[0.3em] ml-4">Service Required</label>
            <div className="relative">
              <select 
                required
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-midnight/20 border border-white/5 rounded-full px-6 py-4 text-white focus:outline-none focus:border-teal focus:shadow-[0_0_15px_rgba(0,128,128,0.3)] transition-all font-light appearance-none cursor-pointer text-sm sm:text-base"
              >
                <option value="" className="bg-midnight">Select a Service</option>
                {services.map(service => (
                  <option key={service} value={service} className="bg-midnight">{service}</option>
                ))}
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-teal/50">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-silver/30 text-[9px] font-bold uppercase tracking-[0.3em] ml-4">Message</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-midnight/20 border border-white/5 rounded-[20px] sm:rounded-[30px] px-6 py-4 text-white focus:outline-none focus:border-teal focus:shadow-[0_0_15px_rgba(0,128,128,0.3)] transition-all font-light resize-none placeholder:text-silver/10 text-sm sm:text-base"
            placeholder="Tell us about your project..."
          />
        </div>

        <div className="space-y-4">
          <button 
            disabled={isSubmitting}
            className="w-full py-5 sm:py-6 bg-teal text-midnight font-bold rounded-full flex items-center justify-center gap-4 group hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-[0_0_40px_rgba(0,128,128,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <span className="uppercase tracking-[0.3em] text-[10px]">Get Started</span>
                <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
          
          <div className="flex items-center justify-center gap-2 text-teal/40">
            <ShieldCheck size={12} />
            <span className="text-[8px] font-bold uppercase tracking-[0.2em]">Secure & Private</span>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
