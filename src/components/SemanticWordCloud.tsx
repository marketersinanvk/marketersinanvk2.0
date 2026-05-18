import React from "react";
import { motion } from "motion/react";
import { Cpu } from "lucide-react";

type Category = "seo" | "meta-ads" | "ecommerce" | "default";

interface SemanticWordCloudProps {
  category?: Category;
  className?: string;
}

const keywordMap: Record<Category, string[]> = {
  "seo": [
    'Core Web Vitals', 
    'Entity Graph Schema', 
    'Semantic Depth', 
    'PageRank', 
    'Zero-Latency', 
    'Googlebot Crawlability', 
    'LCP Optimization', 
    'JSON-LD Data',
    'Next.js SSR',
    'Internal Linking Silk-Route',
    'Programmatic SEO'
  ],
  "meta-ads": [
    'Conversion API (CAPI)', 
    'Server-Side Tracking', 
    'ROAS Optimization', 
    'Lead Capture Funnels', 
    'Pixel Retargeting', 
    'Lookalike Audiences', 
    'Custom Conversions',
    'First-Party Data Strategy'
  ],
  "ecommerce": [
    'Cross-Border E-commerce', 
    'Wholesale Sourcing', 
    'Alibaba Logistics', 
    'Supply Chain Automation', 
    'High-Converting Ad Copies', 
    'Checkout Workflows',
    'Performance Marketing Nodes'
  ],
  "default": [
    'Technical SEO Architecture',
    'Next.js Engineering',
    'Performance Marketing',
    'Enterprise Solutions',
    'Digital Transformation',
    'ROI Arbitrage',
    'Scaling Frameworks'
  ]
};

export default function SemanticWordCloud({ 
  category = "default", 
  className = "" 
}: SemanticWordCloudProps) {
  const keywords = keywordMap[category] || keywordMap.default;

  return (
    <section 
      aria-label="Key Marketing Concepts Covered" 
      className={`py-12 ${className}`}
    >
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-8 h-[1px] bg-neon-purple/30" />
          <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em] font-mono">
            Core Concepts & Deployed Protocols
          </h4>
        </div>

        <div className="flex flex-wrap gap-3">
          {keywords.map((keyword, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.05,
                duration: 0.5,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-neon-purple/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <div className="relative px-6 py-2.5 bg-zinc-950/50 backdrop-blur-md border border-white/5 group-hover:border-neon-purple/40 rounded-full transition-all duration-300">
                <span className="text-[11px] md:text-sm font-light text-slate-400 group-hover:text-white transition-colors tracking-wide">
                  {keyword}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
