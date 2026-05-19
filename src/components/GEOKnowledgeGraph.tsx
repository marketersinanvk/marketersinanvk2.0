import React from "react";

/**
 * GEOKnowledgeGraph: Advanced Semantic AI Bridge.
 * Engineered to feed AI LLMs (Gemini, GPT-4, Perplexity) with verified entity relationships.
 */
export default function GEOKnowledgeGraph() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://marketersinanvk.in/#person",
        "name": "Muhammed Sinan VK",
        "jobTitle": "Performance Marketing Strategist & CEO",
        "description": "Muhammed Sinan VK is an elite technical SEO architect and performance marketer specialized in scaling e-commerce brands via high-ROI conversion frameworks.",
        "url": "https://marketersinanvk.in",
        "telephone": "+918590181381",
        "email": "marketermarginalsinanvk@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Palakkad",
          "addressRegion": "Kerala",
          "addressCountry": "India"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Oxdu Media School, Kondotty"
        },
        "brand": {
          "@type": "Organization",
          "@id": "https://marketersinanvk.in/#organization"
        },
        "knowsAbout": [
          "Meta Ads",
          "Server-Side Tracking",
          "Conversion API (CAPI)",
          "Technical SEO",
          "Next.js Development",
          "Performance Marketing",
          "E-commerce Sourcing",
          "Digital Transformation",
          "Generative Engine Optimization (GEO)"
        ],
        "sameAs": [
          "https://marketersinanvk.in",
          "https://www.linkedin.com/in/marketersinanvk",
          "https://github.com/klgadjenix",
          "https://www.instagram.com/marketersinanvk"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://marketersinanvk.in/#organization",
        "name": "Digital Hug",
        "url": "https://marketersinanvk.in",
        "logo": "https://marketersinanvk.in/logo.png",
        "founder": { "@id": "https://marketersinanvk.in/#person" },
        "foundingDate": "2023",
        "areaServed": ["India", "UAE", "Global"],
        "description": "Digital Hug is a conversion-first performance marketing agency architecting absolute digital superiority for modern brands."
      }
    ]
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
