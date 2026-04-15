import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { getImageSrcSet } from "../lib/imageUtils";

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen pt-32 md:pt-48 px-6 sm:px-8 pb-32 grainy"
    >
      <SEO 
        title="About Muhammed Sinan VK | Best AI Digital Marketer in Palakkad"
        description="Learn about Muhammed Sinan VK (Marketer Sinan VK), the Best AI Digital Marketer based in Palakkad, Kerala. Specialized in Meta Ads Expert services and SEO Analyst expertise for global clients."
      />
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-32 relative z-10">
        <div className="space-y-6 md:space-y-8">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-neon-green text-[9px] font-bold uppercase tracking-[0.5em]"
          >
            The Heritage
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-9xl font-serif tracking-tighter text-white leading-[1.1] md:leading-[0.85]"
          >
            Defining <br />
            <span className="italic text-neon-green">Excellence.</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="space-y-12 md:space-y-16"
          >
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-serif italic text-white tracking-tight">The Neural Genesis</h2>
              <p className="text-lg md:text-xl font-light leading-relaxed tracking-wide" style={{ color: "rgba(192, 192, 192, 0.5)" }}>
                <span className="text-white font-medium">Muhammed Sinan VK</span> (Marketer Sinan VK) is the <span className="text-neon-green font-bold">Best AI Digital Marketer</span> based in Mappattukara, Koppam, <Link to="/contact" className="text-neon-green hover:underline decoration-neon-green/30 underline-offset-4 font-bold" style={{ textDecorationColor: "rgba(57, 255, 20, 0.3)" }}>Palakkad, Kerala</Link>. 
                Specialized in AI-Driven Growth Strategies, <Link to="/services" className="text-neon-green hover:underline underline-offset-4 hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all font-bold" style={{ textDecorationColor: "rgba(57, 255, 20, 0.3)" }}>Meta Ads Expert</Link> services, and Premium Branding, 
                he serves a global clientele from India to Dubai. 
                Our methodology is a synthesis of human intuition and machine-learned precision, delivering excellence as an 
                <Link to="/services" className="text-neon-green hover:underline underline-offset-4 hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all font-bold" style={{ textDecorationColor: "rgba(57, 255, 20, 0.3)" }}>SEO Analyst</Link> and 
                <Link to="/services" className="text-neon-green hover:underline underline-offset-4 hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all font-bold" style={{ textDecorationColor: "rgba(57, 255, 20, 0.3)" }}>Web Development</Link> specialist.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 md:gap-16">
              {[
                { label: "AI Strategies", value: "45+" },
                { label: "Meta ROI Avg.", value: "4.2x" },
                { label: "Global Clients", value: "12" },
                { label: "Brand Audits", value: "120+" }
              ].map((stat, i) => (
                <div key={i} className="space-y-2 md:space-y-3">
                  <p className="text-neon-green text-4xl md:text-5xl font-serif italic tracking-tighter">{stat.value}</p>
                  <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em]" style={{ color: "rgba(192, 192, 192, 0.3)" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="relative group/photo"
          >
            <motion.div 
              className="aspect-[3/4] glass-2 rounded-[24px] overflow-hidden border backdrop-blur-md shadow-[0_0_30px_rgba(57,255,20,0.2)] relative"
              style={{ borderColor: "rgba(57, 255, 20, 0.2)", backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.img 
                src="https://i.ibb.co/27wJkvQ8/jacket-photo.jpg" 
                alt="Muhammed Sinan VK - Freelance Digital Marketer in Kerala" 
                className="w-full h-full object-cover transition-all duration-[1200ms] ease-[0.16,1,0.3,1]"
                initial={{ filter: "grayscale(100%) blur(4px)", scale: 1.05 }}
                whileHover={{ filter: "grayscale(0%) blur(0px)", scale: 1 }}
                whileTap={{ filter: "grayscale(0%) blur(0px)", scale: 1 }}
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="600"
                height="800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-40 group-hover/photo:opacity-20 transition-opacity duration-1000" />
              
              {/* Glowing Border Overlay */}
              <div className="absolute inset-0 border border-neon-green/0 group-hover/photo:border-neon-green/40 group-hover/photo:shadow-[inset_0_0_20px_rgba(57,255,20,0.2)] transition-all duration-1000 rounded-[24px] pointer-events-none" />
            </motion.div>
            <div className="absolute -top-12 -right-12 md:-top-16 md:-right-16 w-32 h-32 md:w-48 md:h-48 border-[0.5px] rounded-full animate-pulse group-hover/photo:border-neon-green/50 transition-colors duration-1000" style={{ borderColor: "rgba(57, 255, 20, 0.2)" }} />
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Large Card - Journey */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-2 glass-2 p-8 md:p-12 rounded-[24px] md:rounded-[32px] hover:border-neon-green/30 transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            <h3 className="text-neon-green text-2xl md:text-3xl font-serif italic tracking-tight mb-6 md:mb-8">The Journey</h3>
            <p className="text-lg md:text-xl font-light leading-relaxed tracking-wide" style={{ color: "rgba(192, 192, 192, 0.5)" }}>
              My path in the digital realm began with a fascination for the intersection of technology and human psychology. 
              As an AI Digital Marketer, I specialize in leveraging advanced neural architectures to craft marketing strategies 
              that don't just reach audiences—they resonate with them on a fundamental level. 
              My expertise spans across <Link to="/services" className="text-neon-green hover:underline underline-offset-4 font-bold" style={{ textDecorationColor: "rgba(57, 255, 20, 0.3)" }}>SEO</Link>, 
              <Link to="/services" className="text-neon-green hover:underline underline-offset-4 font-bold" style={{ textDecorationColor: "rgba(57, 255, 20, 0.3)" }}>SEM</Link>, 
              <Link to="/services" className="text-neon-green hover:underline underline-offset-4 font-bold" style={{ textDecorationColor: "rgba(57, 255, 20, 0.3)" }}>SMM</Link>, and 
              <Link to="/services" className="text-neon-green hover:underline underline-offset-4 font-bold" style={{ textDecorationColor: "rgba(57, 255, 20, 0.3)" }}>Web Development</Link>, 
              ensuring a holistic approach to brand scaling.
            </p>
          </motion.div>

          {/* Small Card - Education */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-2 p-8 md:p-12 rounded-[24px] md:rounded-[32px] hover:border-neon-green/30 transition-all duration-700 flex flex-col justify-between group hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-neon-green group-hover:bg-neon-green group-hover:text-midnight transition-all duration-700" style={{ backgroundColor: "rgba(57, 255, 20, 0.1)" }}>
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-neon-green text-xl font-serif italic tracking-tight mb-2">Foundation</h3>
                <p className="text-white font-serif italic text-lg leading-tight">Digital Marketing Specialist Training</p>
                <p className="text-[10px] uppercase tracking-widest mt-2" style={{ color: "rgba(192, 192, 192, 0.4)" }}>
                  YES UQ Mogam & Oxdu Media School <br />
                  <span style={{ color: "rgba(57, 255, 20, 0.6)" }}>(Specialized in AI-Integrated Marketing)</span>
                </p>
              </div>
            </div>
            <div className="pt-6 border-t mt-6" style={{ borderColor: "rgba(255, 255, 255, 0.05)" }}>
              <p className="text-xs font-light leading-relaxed" style={{ color: "rgba(192, 192, 192, 0.5)" }}>
                Gained hands-on experience in high-impact Meta Ads, advanced SEO, and brand growth strategies. 
                This foundation shaped my expertise in scaling brands like MincoKids and KL Gadgetix with data-driven marketing.
              </p>
            </div>
          </motion.div>

          {/* Small Card - Location */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="glass-2 p-8 md:p-12 rounded-[24px] md:rounded-[32px] hover:border-neon-green/30 transition-all duration-700 flex flex-col justify-between group hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            <div>
              <h3 className="text-neon-green text-xl font-serif italic tracking-tight mb-4">Base</h3>
              <Link to="/contact" className="text-sm font-light leading-relaxed hover:text-neon-green transition-colors" style={{ color: "rgba(192, 192, 192, 0.4)" }}>
                Mappattukara, Koppam, Palakkad
              </Link>
            </div>
            <div className="pt-6 md:pt-8 border-t mt-8 md:mt-0" style={{ borderColor: "rgba(255, 255, 255, 0.05)" }}>
              <p className="text-white font-serif italic text-xl md:text-2xl">Kerala, India & Dubai</p>
            </div>
          </motion.div>

          {/* Small Card - Expertise */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-2 p-8 md:p-12 rounded-[24px] md:rounded-[32px] hover:border-neon-green/30 transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            <h3 className="text-neon-green text-xl font-serif italic tracking-tight mb-6">Expertise</h3>
            <ul className="space-y-3 md:space-y-4">
              {["AI Growth Strategy", "High-ROI Meta Ads", "Premium Branding", "Data Analytics"].map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-sm font-light" style={{ color: "rgba(192, 192, 192, 0.5)" }}>
                  <div className="w-1.5 h-1.5 bg-neon-green rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Large Card - Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 glass-2 p-8 md:p-12 rounded-[24px] md:rounded-[32px] hover:border-neon-green/30 transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            <h3 className="text-neon-green text-2xl md:text-3xl font-serif italic tracking-tight mb-6 md:mb-8">The Vision</h3>
            <p className="text-silver/50 text-lg md:text-xl font-light leading-relaxed tracking-wide">
              I believe that the future of the web belongs to those who can harmonize the cold precision of AI 
              with the warm intuition of human creativity. My mission is to build digital legacies that stand 
              the test of time and technological shifts.
            </p>
          </motion.div>
        </div>
        {/* SEO Content Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-12 md:space-y-16 border-t border-white/5 pt-24"
        >
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-6xl font-serif italic text-white tracking-tight leading-tight">
              The Premier <span className="text-neon-green">Freelance Digital Marketer in Kerala</span> for AI-Driven Growth
            </h2>
            
            <div className="prose prose-invert prose-silver max-w-none space-y-8 text-silver/60 font-light leading-relaxed text-lg">
              <p>
                In the rapidly evolving digital landscape of South India, finding a <span className="text-white font-medium">Freelance digital marketer in Kerala</span> who understands the nuances of both traditional branding and cutting-edge technology is crucial. 
                <span className="text-neon-green font-bold">Marketer Sinan VK</span> stands at this intersection, offering a unique blend of human creativity and artificial intelligence to scale businesses effectively. 
                As the <span className="text-white font-medium">Best AI digital marketer in Palakkad</span>, my mission is to provide transformative results through data-driven strategies that resonate with modern audiences.
              </p>

              <h3 className="text-2xl md:text-3xl font-serif text-white italic">Why Choose a Freelance Digital Marketer in Kerala?</h3>
              <p>
                The digital economy in Kerala is booming, from the tech hubs of Kochi and Trivandrum to the growing business sectors in Palakkad. 
                A <span className="text-white font-medium">Freelance digital marketer in Kerala</span> offers the flexibility and personalized attention that a large <span className="text-white font-medium">digital marketing agency in Kerala</span> might lack. 
                By working directly with a <span className="text-white font-medium">digital marketing consultant in Kerala</span>, business owners can ensure their vision is translated perfectly into digital campaigns. 
                Whether you are looking for <span className="text-white font-medium">affordable digital marketing Kerala</span> or high-end premium branding, the freelance model provides the best ROI for growing enterprises.
              </p>

              <h3 className="text-2xl md:text-3xl font-serif text-white italic">AI-Integrated Digital Marketing Services: The Future of Growth</h3>
              <p>
                Traditional marketing is no longer enough. To stay ahead, businesses need <span className="text-white font-medium">AI-integrated digital marketing services</span>. 
                As the <span className="text-white font-medium">Best digital marketer in Kerala</span>, I leverage advanced AI tools to analyze consumer behavior, automate repetitive tasks, and optimize ad spend in real-time. 
                This approach is particularly effective for <span className="text-white font-medium">small business marketing Kerala</span>, where every rupee spent must deliver measurable value. 
                From predictive analytics to AI-generated content optimization, my methodology ensures your brand stays at the forefront of innovation.
              </p>

              <h3 className="text-2xl md:text-3xl font-serif text-white italic">Dominating Local Search: Local SEO Expert in Palakkad</h3>
              <p>
                For businesses targeting a specific geographic area, local visibility is everything. 
                As a <span className="text-white font-medium">Local SEO expert in Palakkad</span>, I help businesses appear at the top of Google Search and Maps when local customers are looking for their services. 
                Providing the <span className="text-white font-medium">Best SEO services in Palakkad</span> involves more than just keywords; it requires a deep understanding of local search intent, Google Business Profile optimization, and high-quality local citations. 
                A <span className="text-white font-medium">Freelance digital marketer in Kerala</span> with local expertise can bridge the gap between your physical store and your digital presence.
              </p>

              <h3 className="text-2xl md:text-3xl font-serif text-white italic">Comprehensive Digital Solutions for Modern Brands</h3>
              <p>
                My expertise isn't limited to just one channel. A holistic strategy is required for true market dominance. 
                As a <span className="text-white font-medium">social media expert in Kerala</span>, I craft engaging narratives across Meta, Instagram, and LinkedIn that drive community growth and conversions. 
                Furthermore, I believe that a great marketing strategy must be supported by a great user experience. 
                That's why I offer <span className="text-white font-medium">UI/UX design for small businesses</span>, ensuring that your website isn't just a digital brochure, but a high-converting sales machine. 
                To complete the visual experience, my team provides <span className="text-white font-medium">professional video editing services Kerala</span>, creating cinematic content that captures attention in seconds.
              </p>

              <h3 className="text-2xl md:text-3xl font-serif text-white italic">The Marketer Sinan VK Advantage</h3>
              <p>
                When you partner with <span className="text-white font-medium">Marketer Sinan VK</span>, you aren't just hiring a service provider; you are gaining a growth partner. 
                Being a <span className="text-white font-medium">Freelance digital marketer in Kerala</span> allows me to stay agile and adapt to the latest algorithm changes faster than any traditional <span className="text-white font-medium">digital marketing agency in Kerala</span>. 
                My focus is on transparency, data, and most importantly, your success. 
                Whether you need the <span className="text-white font-medium">Best AI digital marketer in Palakkad</span> to overhaul your tech stack or a <span className="text-white font-medium">digital marketing consultant in Kerala</span> to guide your long-term strategy, I am here to deliver excellence.
              </p>

              <p>
                In conclusion, the journey to becoming the <span className="text-white font-medium">Best digital marketer in Kerala</span> is paved with successful client outcomes and a relentless pursuit of innovation. 
                If you are ready to scale your brand with <span className="text-white font-medium">AI-integrated digital marketing services</span> and the expertise of a dedicated <span className="text-white font-medium">Freelance digital marketer in Kerala</span>, let's connect. 
                From <span className="text-white font-medium">affordable digital marketing Kerala</span> to premium global scaling, your digital legacy starts here.
              </p>
              
              <div className="pt-12 border-t border-white/5">
                <p className="text-xs uppercase tracking-[0.3em] text-silver/30">
                  Keywords: Freelance digital marketer in Kerala, Best AI digital marketer in Palakkad, Digital marketing agency in Kerala, Local SEO expert in Palakkad, AI-integrated digital marketing services, Small business marketing Kerala, Best digital marketer in Kerala, UI/UX design for small businesses, Professional video editing services Kerala, Marketer Sinan VK, Digital marketing consultant in Kerala, Best SEO services in Palakkad, Social media expert in Kerala, Affordable digital marketing Kerala.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.main>
  );
}
