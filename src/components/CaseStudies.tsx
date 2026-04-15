import { motion } from "motion/react";
import { Target, Cpu, TrendingUp, ExternalLink, Instagram } from "lucide-react";

const caseStudies = [
  {
    title: "Luxavya: Lepro Plus Branding",
    client: "Luxavya",
    subtitle: "Premium Fragrance Launch",
    location: "Kerala & Global",
    challenge: "Establishing a luxury perfume brand presence in the competitive Kerala market with a focus on high-end consumer segments.",
    strategy: "Executed Kerala's leading AI marketing strategies for luxury audience segmentation. Focused on the 'Lepro Plus' branding success to achieve top digital marketing results in Kerala.",
    result: "5x ROI & Successful Market Entry",
    metrics: "Elite Status Achieved",
    image: "https://picsum.photos/seed/luxavya-perfume/800/600",
    alt: "Digital marketing success story by the best digital marketer in Kerala for Luxavya perfumes",
    links: [
      { text: "Visit Live Project", url: "https://luxavya.com", icon: ExternalLink },
      { text: "Visit Client Instagram", url: "https://instagram.com/luxavya", icon: Instagram }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Project",
      "name": "Luxavya Lepro Plus Branding by Best Digital Marketer in Kerala",
      "description": "Premium perfume branding and launch of Lepro Plus using AI-targeted luxury audience segmentation.",
      "url": "https://marketersinanvk.in/portfolio",
      "image": "https://picsum.photos/seed/luxavya-perfume/800/600"
    }
  },
  {
    title: "Minco Kids E-commerce Scaling",
    client: "Minco Kids",
    subtitle: "Educational Products Growth",
    location: "Kerala, India",
    challenge: "Scaling an e-commerce platform for children's educational books across Kerala's diverse digital marketplace.",
    strategy: "Implemented high-conversion e-commerce strategies and visual storytelling. Leveraged AI to optimize customer journeys, delivering top digital marketing results in Kerala.",
    result: "4.5x ROAS & 200% Revenue Growth",
    metrics: "Market Leader Status",
    image: "https://picsum.photos/seed/minco-kids-books/800/600",
    alt: "Digital marketing success story by the best digital marketer in Kerala for Minco Kids e-commerce",
    links: [
      { text: "Visit Live Project", url: "https://mincokids.com", icon: ExternalLink },
      { text: "Visit Client Instagram", url: "https://instagram.com/mincokids", icon: Instagram }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Project",
      "name": "Minco Kids E-commerce Scaling by Best Digital Marketer in Kerala",
      "description": "High-conversion e-commerce strategies and visual storytelling for educational books.",
      "url": "https://marketersinanvk.in/portfolio",
      "image": "https://picsum.photos/seed/minco-kids-books/800/600"
    }
  },
  {
    title: "KL Gadjenix Digital Transition",
    client: "KL Gadjenix",
    subtitle: "Electronics Retail Transformation",
    location: "Palakkad & Kerala",
    challenge: "Transitioning a traditional retail electronics shop into a modern digital brand capable of competing across Kerala.",
    strategy: "Developed an omnichannel marketing strategy and local lead generation system. Website development currently in progress to solidify their position using Kerala's leading AI marketing strategies.",
    result: "300% Increase in Local Leads",
    metrics: "Digital Brand Established",
    image: "https://picsum.photos/seed/gadjenix-electronics/800/600",
    alt: "Digital marketing success story by the best digital marketer in Kerala for KL Gadjenix electronics",
    links: [
      { text: "Visit Client Instagram", url: "https://instagram.com/kl_gadjenix", icon: Instagram }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Project",
      "name": "KL Gadjenix Digital Transformation by Best Digital Marketer in Kerala",
      "description": "Transitioning a traditional retail shop into a digital brand with omnichannel marketing.",
      "url": "https://marketersinanvk.in/portfolio",
      "image": "https://picsum.photos/seed/gadjenix-electronics/800/600"
    }
  }
];

export default function CaseStudies() {
  return (
    <section className="py-32 px-8 relative overflow-hidden border-t" style={{ borderColor: "rgba(0, 229, 255, 0.05)" }}>
      {/* SEO Schema Injection */}
      {caseStudies.map((study, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(study.schema)}
        </script>
      ))}
      
      {/* LocalBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Marketer Sinan VK",
          "image": "https://i.ibb.co/Lhbqr2Sz/41aecd83-4559-408c-b5fd-380658eed52f.png",
          "@id": "https://marketersinanvk.in",
          "url": "https://marketersinanvk.in",
          "telephone": "+918590181381",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Mappattukara, Koppam",
            "addressLocality": "Palakkad",
            "addressRegion": "Kerala",
            "postalCode": "679307",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 10.8957,
            "longitude": 76.2144
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://www.linkedin.com/in/sinan-vk",
            "https://www.instagram.com/muhammed_sinan_vk_85",
            "https://twitter.com/sinan246810"
          ],
          "jobTitle": "Digital Marketing Expert",
          "description": "Muhammed Sinan VK is the best digital marketer in Kerala & Bahrain, providing AI-driven growth strategies and premium branding services."
        })}
      </script>

      <div className="max-w-7xl mx-auto">
        <div className="mb-24 space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-arctic-blue text-[9px] font-bold uppercase tracking-[0.5em]"
          >
            The Evidence
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif tracking-tighter text-white leading-tight"
          >
            Best Digital Marketer in Kerala & Bahrain — <br />
            <span className="italic text-arctic-blue" style={{ filter: "drop-shadow(0 0 15px rgba(0, 229, 255, 0.3))" }}>Strategic Success Stories.</span>
          </motion.h2>
          <p className="text-sm font-light tracking-wide max-w-2xl" style={{ color: "rgba(192, 192, 192, 0.4)" }}>
            Delivering <span className="text-white font-medium text-arctic-glow">Top Digital Marketing Results in Kerala & Bahrain</span> through <span className="text-white font-medium">Leading AI Marketing Strategies</span> for brands like Luxavya, Minco Kids, and KL Gadjenix.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="glass-2 rounded-[40px] p-8 md:p-10 flex flex-col justify-between group transition-all duration-700 hover:shadow-[0_0_40px_rgba(0,229,255,0.05)] magnetic border-beam"
              style={{ borderColor: "rgba(0, 229, 255, 0.05)" }}
            >
              <div className="space-y-10">
                <div className="space-y-6">
                  <div className="aspect-video rounded-[24px] overflow-hidden border" style={{ borderColor: "rgba(0, 229, 255, 0.05)" }}>
                    <img 
                      src={study.image} 
                      alt={study.alt} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <p className="text-arctic-blue text-[10px] font-bold uppercase tracking-widest">{study.subtitle}</p>
                      <h3 className="text-2xl md:text-3xl font-serif italic text-white tracking-tight">{study.title}</h3>
                      <p className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(192, 192, 192, 0.4)" }}>{study.location}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Step 1: The Challenge */}
                  <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(255, 255, 255, 0.03)", border: "0.5px solid rgba(255, 255, 255, 0.1)" }}>
                      <Target size={18} style={{ color: "rgba(255, 255, 255, 0.4)" }} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-bold text-white uppercase tracking-widest">The Challenge</h4>
                      <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(192, 192, 192, 0.6)" }}>{study.challenge}</p>
                    </div>
                  </div>

                  {/* Step 2: The AI Strategy */}
                  <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(0, 229, 255, 0.05)", border: "0.5px solid rgba(0, 229, 255, 0.2)" }}>
                      <Cpu size={18} className="text-arctic-blue" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-bold text-arctic-blue uppercase tracking-widest">AI Strategy</h4>
                      <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(192, 192, 192, 0.6)" }}>{study.strategy}</p>
                    </div>
                  </div>

                  {/* Step 3: The Result */}
                  <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(0, 229, 255, 0.1)", border: "0.5px solid rgba(0, 229, 255, 0.4)" }}>
                      <TrendingUp size={18} className="text-arctic-blue" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-bold text-arctic-blue uppercase tracking-widest">The Result</h4>
                      <p className="text-xl md:text-2xl font-serif italic text-white leading-tight">
                        {study.result}
                      </p>
                      <div className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-arctic-blue text-midnight shadow-[0_0_15px_rgba(0, 229, 255, 0.3)]">
                        {study.metrics}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-10 mt-10 border-t flex flex-col gap-4" style={{ borderColor: "rgba(255, 255, 255, 0.05)" }}>
                {study.links.map((link, li) => (
                  <a 
                    key={li}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnetic group/btn relative px-8 py-4 glass-2 border border-white/5 rounded-full overflow-hidden transition-all duration-500 hover:border-arctic-blue/30 flex items-center justify-center gap-3"
                  >
                    <span className="relative z-10 text-[10px] font-bold text-white uppercase tracking-[0.2em] group-hover/btn:text-arctic-blue transition-colors">
                      {link.text}
                    </span>
                    <link.icon size={14} className="relative z-10 text-silver/40 group-hover/btn:text-arctic-blue group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                    <div className="absolute inset-0 bg-arctic-blue/5 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
