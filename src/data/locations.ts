export interface LocationData {
  name: string;
  heroHeading: string;
  subheading: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeywords: string[];
  region: "internal" | "global";
  marketInsight?: string;
  topBrands?: string[];
}

export const locationConfigs: Record<string, LocationData> = {
  kochi: {
    name: "Kochi",
    heroHeading: "Digital Supremacy in Kochi",
    subheading: "Deploying zero-latency technical SEO and elite performance marketing frameworks to ensure absolute market dominance for high-tier brands in Kochi.",
    description: "Muhammed Sinan VK is the leading digital marketing strategist in Kochi, engineering high-ROI campaigns for the city's most ambitious enterprises.",
    metaTitle: "Best SEO Expert in Kochi | Marketer Sinan VK",
    metaDescription: "Architecting digital supremacy and high-ROI performance marketing for elite brands in Kochi. Partner with Muhammed Sinan VK for absolute market dominance.",
    primaryKeywords: ["Best Digital Marketer in Kochi", "SEO Expert Kochi", "Social Media Marketing Kochi"],
    region: "internal",
    marketInsight: "Kochi's rapid E-commerce evolution requires zero-latency web architectures and server-side tracking to bypass iOS14+ data loss.",
    topBrands: ["LuLu Mall Scaling", "Infopark Tech Retrieval"],
  },
  calicut: {
    name: "Calicut",
    heroHeading: "Digital Supremacy in Calicut",
    subheading: "Deploying zero-latency technical SEO and elite performance marketing frameworks to ensure absolute market dominance for high-tier brands in Calicut.",
    description: "Transforming traditional Calicut businesses into digital-first leaders. Scale your legacy with the Best SEO Expert in Kerala.",
    metaTitle: "Best SEO Expert in Calicut | Marketer Sinan VK",
    metaDescription: "Architecting digital supremacy and high-ROI performance marketing for elite brands in Calicut. Partner with Muhammed Sinan VK for absolute market dominance.",
    primaryKeywords: ["Digital Marketer Calicut", "SEO Calicut", "Marketing Consultant Calicut"],
    region: "internal",
    marketInsight: "The luxury retail sector in Calicut demands high-visual focus campaigns integrated with Google Lens-optimized image objects.",
    topBrands: ["Hilite Group Optimization", "Cyberpark SEO Retention"],
  },
  palakkad: {
    name: "Palakkad",
    heroHeading: "Digital Supremacy in Palakkad",
    subheading: "Deploying technical SEO and precision performance marketing to dominate the Palakkad search quadrant.",
    description: "Empowering Palakkad's local industries with technical SEO and optimized Google Business Profile management.",
    metaTitle: "Best SEO Expert in Palakkad | Marketer Sinan VK",
    metaDescription: "Strategic marketing retrieval for Palakkad. Empowering local industries with technical SEO and Google Business Profile mastery.",
    primaryKeywords: ["SEO Expert Palakkad", "Google Ads Palakkad", "Performance Marketing Palakkad"],
    region: "internal",
    marketInsight: "Palakkad's industrial growth calls for B2B LinkedIn strategies and localized SEO to dominate the regional manufacturing quadrant.",
    topBrands: ["KINFRA Digital Growth", "Industrial Hub Strategy"],
  },
  thrissur: {
    name: "Thrissur",
    heroHeading: "Digital Supremacy in Thrissur",
    subheading: "Architecting high-converting ad copies for Thrissur's gold and textile giants.",
    description: "The cultural capital's premier digital strategist. Transforming traditional Thrissur businesses into digital-first leaders.",
    metaTitle: "Best Digital Marketer in Thrissur | Marketer Sinan VK",
    metaDescription: "The cultural capital's premier digital strategist. Architecting high-converting ad copies for Thrissur's gold and textile giants.",
    primaryKeywords: ["Digital Marketer Thrissur", "Facebook Ads Specialist Thrissur", "Top SEO Expert Thrissur"],
    region: "internal",
    marketInsight: "Thrissur's traditional business entities require a 'Digital Transformation' protocol to bridge the gap between legacy trust and online visibility.",
    topBrands: ["Gold Sector Arbitrage", "Textile Vertical Scaling"],
  },
  trivandrum: {
    name: "Trivandrum",
    heroHeading: "Digital Supremacy in Trivandrum",
    subheading: "Scaling Technopark startups through deep-semantic SEO and automated lead capturing workflows.",
    description: "Trivandrum's technical marketing authority. Engineering growth for India's emerging tech hub.",
    metaTitle: "Best SEO Expert in Trivandrum | Marketer Sinan VK",
    metaDescription: "Trivandrum's technical marketing authority. Scaling Technopark startups through deep-semantic SEO and automated workflows.",
    primaryKeywords: ["SEO Expert Trivandrum", "Technopark Digital Marketing", "Best Ads Expert Trivandrum"],
    region: "internal",
    marketInsight: "The capital's tech ecosystem demands rigorous PageSpeed optimization and JSON-LD data structures to satisfy global enterprise crawlers.",
    topBrands: ["Technopark Node Retrieval", "IT Export Scaling"],
  },
  dubai: {
    name: "Dubai",
    heroHeading: "Digital Supremacy in Dubai",
    subheading: "Deploying zero-latency technical SEO and elite performance marketing frameworks to ensure absolute market dominance for high-tier brands in Dubai and beyond.",
    description: "Projecting power into the UAE market. We architect premium digital infrastructures that dominate the Dubai luxury and retail landscape.",
    metaTitle: "Best SEO Expert in Dubai | Marketer Sinan VK",
    metaDescription: "Architecting digital supremacy and high-ROI performance marketing for elite brands in Dubai. Partner with Muhammed Sinan VK for absolute market dominance.",
    primaryKeywords: ["Digital Marketer Dubai", "SEO Expert UAE", "Performance Marketing Dubai"],
    region: "global"
  },
  bangalore: {
    name: "Bangalore",
    heroHeading: "Digital Supremacy in Bangalore",
    subheading: "Deploying zero-latency technical SEO and elite performance marketing frameworks to ensure absolute market dominance for high-tier brands in Bangalore and beyond.",
    description: "Architecting growth for India's tech capital. We integrate performance marketing with scalable SEO for high-growth Bangalore startups.",
    metaTitle: "Best SEO Expert in Bangalore | Marketer Sinan VK",
    metaDescription: "Architecting digital supremacy and high-ROI performance marketing for elite brands in Bangalore. Partner with Muhammed Sinan VK for absolute market dominance.",
    primaryKeywords: ["Digital Marketer Bangalore", "SEO Expert Bangalore", "Performance Marketing India"],
    region: "internal"
  },
  london: {
    name: "London",
    heroHeading: "Digital Supremacy in London",
    subheading: "Deploying zero-latency technical SEO and elite performance marketing frameworks to ensure absolute market dominance for high-tier brands in London and beyond.",
    description: "Elite digital performance for the global financial hub. We provide technical marketing arbitrage for UK enterprises seeking market superiority.",
    metaTitle: "Best SEO Expert in London | Marketer Sinan VK",
    metaDescription: "Architecting digital supremacy and high-ROI performance marketing for elite brands in London. Partner with Muhammed Sinan VK for absolute market dominance.",
    primaryKeywords: ["SEO Consultant London", "Digital Marketer UK", "Global Performance Marketing"],
    region: "global"
  }
};
