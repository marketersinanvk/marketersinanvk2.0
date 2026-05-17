export interface TechData {
  displayName: string;
  heroHeading: string;
  subheading: string;
  metaTitle: string;
  metaDescription: string;
  features: string[];
}

export const techConfigs: Record<string, TechData> = {
  "nextjs-developer-kerala": {
    displayName: "Next.js Architecture & Performance",
    heroHeading: "Engineering Digital Dominance via Next.js Architecture",
    subheading: "We don't just build websites. We compile ultra-optimized, bleeding-edge web infrastructures engineered explicitly for technical SEO supremacy and maximum sales conversion.",
    metaTitle: "Elite Next.js Architecture & Performance | Technical SEO Consultant - Marketer Sinan VK",
    metaDescription: "Architecting zero-latency web environments using Next.js. Eliminate layout shifts, boost Core Web Vitals, and dominate Google rankings. Partner with Muhammed Sinan VK.",
    features: [
      "Zero-Latency SSR/SSG Protocols",
      "Surgical Core Web Vitals Optimization",
      "Dynamic Routing & Data Fetching",
      "Absolute Technical SEO Dominance"
    ]
  },
  "tailwind-css-expert": {
    displayName: "Tailwind CSS Utility-First Engineering",
    heroHeading: "Engineering Digital Dominance via Tailwind CSS Utility-First Engineering",
    subheading: "We don't just build websites. We compile ultra-optimized, bleeding-edge web infrastructures engineered explicitly for technical SEO supremacy and maximum sales conversion.",
    metaTitle: "Elite Tailwind CSS Utility-First Engineering | Technical SEO Consultant - Marketer Sinan VK",
    metaDescription: "Architecting zero-latency web environments using Tailwind CSS. Eliminate layout shifts, boost Core Web Vitals, and dominate Google rankings. Partner with Muhammed Sinan VK.",
    features: [
      "Atomic CSS Design Systems",
      "Zero-Runtime Overhead Styling",
      "Responsive Fluidity Protocols",
      "Premium Aesthetic Engineering"
    ]
  },
  "supabase-developer": {
    displayName: "Supabase Serverless Cloud Architecture",
    heroHeading: "Engineering Digital Dominance via Supabase Serverless Cloud Architecture",
    subheading: "We don't just build websites. We compile ultra-optimized, bleeding-edge web infrastructures engineered explicitly for technical SEO supremacy and maximum sales conversion.",
    metaTitle: "Elite Supabase Serverless Cloud Architecture | Technical SEO Consultant - Marketer Sinan VK",
    metaDescription: "Architecting zero-latency web environments using Supabase. Eliminate layout shifts, boost Core Web Vitals, and dominate Google rankings. Partner with Muhammed Sinan VK.",
    features: [
      "Serverless Backend Architecture",
      "Real-time Data Synchronicity",
      "Auth & Storage Infrastructure",
      "Edge-to-Edge Logic Deployment"
    ]
  }
};
