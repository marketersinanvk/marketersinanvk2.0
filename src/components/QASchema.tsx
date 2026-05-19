import React from "react";

/**
 * QASchema: Google-Validated FAQPage Structured Data.
 * Fixed to resolve Search Console warnings and errors.
 */
export default function QASchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://marketersinanvk.in/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the best digital marketer in Palakkad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Muhammed Sinan VK is an elite performance marketing strategist and the founder of Digital Hug, based in Palakkad, Kerala, specializing in Meta Ads and high-converting growth funnels."
        }
      },
      {
        "@type": "Question",
        "name": "What services does Marketer Sinan VK provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "He provides end-to-end performance marketing, Meta and Google Ads management, server-side tracking via Conversion API (CAPI), and scalable technical SEO architectures using Next.js."
        }
      },
      {
        "@type": "Question",
        "name": "How to contact Digital Hug for business scaling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can initiate a strategic retrieval session by contacting Muhammed Sinan VK directly at +918590181381 or via email at marketermarginalsinanvk@gmail.com."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
