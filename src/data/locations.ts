export interface LocationData {
  name: string;
  heroHeading: string;
  subheading: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeywords: string[];
  region: "internal" | "global";
}

export const locationConfigs: Record<string, LocationData> = {
  kochi: {
    name: "Kochi",
    heroHeading: "Digital Supremacy in Kochi",
    subheading: "Deploying zero-latency technical SEO and elite performance marketing frameworks to ensure absolute market dominance for high-tier brands in Kochi and beyond.",
    description: "Muhammed Sinan VK is the leading digital marketing strategist in Kochi, engineering high-ROI campaigns for the city's most ambitious enterprises.",
    metaTitle: "Best SEO Expert in Kochi | Marketer Sinan VK",
    metaDescription: "Architecting digital supremacy and high-ROI performance marketing for elite brands in Kochi. Partner with Muhammed Sinan VK for absolute market dominance.",
    primaryKeywords: ["Best Digital Marketer in Kochi", "SEO Expert Kochi", "Social Media Marketing Kochi"],
    region: "internal"
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
  calicut: {
    name: "Calicut",
    heroHeading: "Digital Supremacy in Calicut",
    subheading: "Deploying zero-latency technical SEO and elite performance marketing frameworks to ensure absolute market dominance for high-tier brands in Calicut and beyond.",
    description: "Transforming traditional Calicut businesses into digital-first leaders. Scale your legacy with the Best SEO Expert in Kerala.",
    metaTitle: "Best SEO Expert in Calicut | Marketer Sinan VK",
    metaDescription: "Architecting digital supremacy and high-ROI performance marketing for elite brands in Calicut. Partner with Muhammed Sinan VK for absolute market dominance.",
    primaryKeywords: ["Digital Marketer Calicut", "SEO Calicut", "Marketing Consultant Calicut"],
    region: "internal"
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
