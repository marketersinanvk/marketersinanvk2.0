import { motion } from "motion/react";
import { Target, Cpu, TrendingUp, ExternalLink, Instagram } from "lucide-react";
import { BentoGrid, BentoCard } from "./BentoGrid";

const caseStudies = [
  {
    title: "Digisinans.in SEO Victory",
    client: "Digisinans",
    subtitle: "Organic Growth Dominance",
    location: "Global & Kerala",
    challenge: "Establishing absolute search dominance for a high-competition digital portal.",
    strategy: "As the Best SEO Expert in Kerala, I architected a multi-layered keyword cluster maps and neural linking structure. This project utilized my proprietary Best AI Digital Marketing Agency framework to outpace competitors within 120 days.",
    result: "#1 Rankings for 250+ Keywords",
    metrics: "20,000+ Monthly Organic Traffic",
    image: "https://picsum.photos/seed/digisinans-seo/800/600",
    alt: "Best SEO Expert in Kerala - Digisinans case study by Muhammed Sinan VK",
    links: [
      { text: "Visit Live Site", url: "https://digisinans.in", icon: ExternalLink }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Project",
      "name": "Digisinans SEO Victory by Best SEO Expert in Kerala",
      "description": "Architecting organic search dominance for Digisinans using AI-driven SEO clusters.",
      "url": "https://marketersinanvk.in/portfolio",
      "image": "https://picsum.photos/seed/digisinans-seo/800/600"
    }
  },
  {
    title: "Luxavya: Luxury SMM Operations",
    client: "Luxavya",
    subtitle: "Fashion & Lifestyle Branding",
    location: "Global / Dubai / Kerala",
    challenge: "Establishing a premier fashion/lifestyle presence for 'Lepro Plus' branding in competitive luxury markets.",
    strategy: "I functioned as the SMM Expert Kerala for this launch, engineering a Professional SMM Operating system. We utilized visual prestige and high-end influencer synthesis to anchor Luxavya as a lifestyle leader.",
    result: "7x ROI on Paid Campaigns",
    metrics: "Elite Brand Status Achieved",
    image: "https://picsum.photos/seed/luxavya-fragrance/800/600",
    alt: "SMM Expert Kerala - Luxavya professional SMM operations by Freelance Digital Marketer Sinan VK",
    links: [
      { text: "Visit Archive", url: "https://instagram.com/luxavya", icon: Instagram }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Project",
      "name": "Luxavya Luxury SMM by SMM Expert Kerala",
      "description": "Luxury branding and SMM operations for fashion/lifestyle label Luxavya.",
      "url": "https://marketersinanvk.in/portfolio",
      "image": "https://picsum.photos/seed/luxavya-fragrance/800/600"
    }
  },
  {
    title: "Minco Kids: High-Engagement SMM",
    client: "Minco Kids",
    subtitle: "Kids' Wear Digital Growth",
    location: "Kerala / Palakkad",
    challenge: "Increasing engagement and conversion rates for a specialized children's educational and wear brand.",
    strategy: "Leveraging my status as a Freelance Digital Marketer in Kerala, I implemented a community-first SMM protocol. By focusing on parent-child visual storytelling, we achieved viral reach within target demographics across Kerala.",
    result: "4.5x ROAS & 200% Growth",
    metrics: "Market Dominance Secured",
    image: "https://picsum.photos/seed/mincokids-growth/800/600",
    alt: "Freelance Digital Marketer in Kerala - Minco Kids SMM growth case study",
    links: [
      { text: "Visit Archive", url: "https://instagram.com/mincokids", icon: Instagram }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Project",
      "name": "Minco Kids SMM Growth by Freelance Digital Marketer Kerala",
      "description": "High-engagement SMM strategy for kids wear and educational brand Minco Kids.",
      "url": "https://marketersinanvk.in/portfolio",
      "image": "https://picsum.photos/seed/mincokids-growth/800/600"
    }
  },
  {
    title: "KL Gadjenix: Digital Transition",
    client: "KL Gadjenix",
    subtitle: "Electronics Transformation",
    location: "Palakkad, Kerala",
    challenge: "Transitioning a traditional electronics retail powerhouse into a digital-first market leader.",
    strategy: "Provided Local SEO Services in Palakkad to capture high-intent 'near me' traffic. As a Web Development Specialist Kerala, I architected their digital infrastructure for frictionless lead capture and inventory syncing.",
    result: "300% Increase in Local Leads",
    metrics: "Digital Transformation Complete",
    image: "https://picsum.photos/seed/gadjenix-electronics/800/600",
    alt: "Local SEO Services in Palakkad - KL Gadjenix transformation by Web Development Specialist Kerala",
    links: [
      { text: "Operational Hub", url: "https://instagram.com/kl_gadjenix", icon: Instagram }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Project",
      "name": "KL Gadjenix Digital Transition by Digital Growth Strategist",
      "description": "Electronics retail digital transformation involving Local SEO and Web Development.",
      "url": "https://marketersinanvk.in/portfolio",
      "image": "https://picsum.photos/seed/gadjenix-electronics/800/600"
    }
  }
];

export default function CaseStudies() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 relative overflow-hidden border-t" style={{ borderColor: "rgba(99, 102, 241, 0.05)" }}>
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

      <div className="space-y-16">
        <div className="mb-24 space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-vibrant-indigo text-[9px] font-bold uppercase tracking-[0.5em]"
          >
            The Evidence
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-7xl font-serif tracking-tighter text-white leading-tight max-w-full uppercase"
          >
            Best Digital Marketer in Kerala & Bahrain — <br />
            <span className="italic text-vibrant-indigo" style={{ filter: "drop-shadow(0 0 15px rgba(99, 102, 241, 0.3))" }}>Proven Success.</span>
          </motion.h2>
          <p className="text-sm font-light tracking-wide max-w-2xl" style={{ color: "rgba(192, 192, 192, 0.4)" }}>
            Delivering <span className="text-white font-medium text-indigo-glow">Top Digital Marketing Results in Kerala & Bahrain</span> through <span className="text-white font-medium">Leading AI Marketing Strategies</span> for brands like Luxavya, Minco Kids, and KL Gadjenix.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full overflow-hidden">
          {caseStudies.map((study, i) => (
            <BentoCard
              key={i}
              delay={i * 0.2}
              className="p-8 md:p-10 flex flex-col justify-between group transition-all duration-700 hover:shadow-[0_0_40px_rgba(99, 102, 241, 0.05)] border-white/5 bg-white/[0.01] h-full md:col-span-1 lg:col-span-1"
            >
              <div className="space-y-10">
                <div className="space-y-6">
                  <div className="aspect-video rounded-[24px] overflow-hidden border border-white/5">
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
                       <p className="text-vibrant-indigo text-[10px] font-bold uppercase tracking-widest">{study.subtitle}</p>
                      <h3 className="text-2xl md:text-3xl font-serif italic text-white tracking-tight">{study.title}</h3>
                      <p className="text-[10px] uppercase tracking-widest italic" style={{ color: "rgba(192, 192, 192, 0.4)" }}>{study.location}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Step 1: The Challenge */}
                  <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white/[0.03] border border-white/10">
                      <Target size={18} className="text-silver/40" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-bold text-white uppercase tracking-widest">The Challenge</h4>
                      <p className="text-sm font-light leading-relaxed text-silver/40">{study.challenge}</p>
                    </div>
                  </div>

                  {/* Step 2: The AI Strategy */}
                  <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-vibrant-indigo/5 border border-vibrant-indigo/20">
                      <Cpu size={18} className="text-vibrant-indigo" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-bold text-vibrant-indigo uppercase tracking-widest">AI Strategy</h4>
                      <p className="text-sm font-light leading-relaxed text-silver/40">{study.strategy}</p>
                    </div>
                  </div>

                  {/* Step 3: The Result */}
                  <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-vibrant-indigo/10 border border-vibrant-indigo/40">
                      <TrendingUp size={18} className="text-vibrant-indigo" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-bold text-vibrant-indigo uppercase tracking-widest">The Result</h4>
                      <p className="text-xl md:text-2xl font-serif italic text-white leading-tight">
                        {study.result}
                      </p>
                      <div className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-vibrant-indigo text-white shadow-[0_0_15px_rgba(99, 102, 241, 0.3)]">
                        {study.metrics}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-10 mt-10 border-t border-white/5 flex flex-col gap-4">
                {study.links.map((link, li) => (
                  <a 
                    key={li}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative px-8 py-4 glass-2 border border-white/5 rounded-full overflow-hidden transition-all duration-500 hover:border-vibrant-indigo/30 flex items-center justify-center gap-3"
                  >
                    <span className="relative z-10 text-[10px] font-bold text-white uppercase tracking-[0.2em] group-hover/btn:text-vibrant-indigo transition-colors">
                      {link.text}
                    </span>
                    <link.icon size={14} className="relative z-10 text-silver/40 group-hover/btn:text-vibrant-indigo group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                    <div className="absolute inset-0 bg-vibrant-indigo/5 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
