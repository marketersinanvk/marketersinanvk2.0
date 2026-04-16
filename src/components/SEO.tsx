import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  article?: boolean;
}

export default function SEO({ title, description, image, article }: SEOProps) {
  useEffect(() => {
    // Standard Metadata
    document.title = title;
    
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (el) {
        el.setAttribute("content", content);
      } else {
        el = document.createElement("meta");
        if (isProperty) el.setAttribute("property", name);
        else el.setAttribute("name", name);
        el.setAttribute("content", content);
        document.head.appendChild(el);
      }
    };

    updateMeta("description", description);
    updateMeta("og:title", title, true);
    updateMeta("og:description", description, true);
    updateMeta("og:type", article ? "article" : "website", true);
    updateMeta("og:url", window.location.href, true);
    if (image) updateMeta("og:image", image, true);

    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    if (image) updateMeta("twitter:image", image);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", window.location.href);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", window.location.href);
      document.head.appendChild(canonical);
    }

    // JSON-LD Schema
    const schemaId = "seo-schema";
    let schemaScript = document.getElementById(schemaId) as HTMLScriptElement;
    
    const schemaData = {
      "@context": "https://schema.org",
      "@type": article ? "BlogPosting" : "ProfessionalService",
      "name": "Sinan VK | Best Digital Marketer in Kerala",
      "alternateName": "Muhammed Sinan VK",
      "image": image || "https://i.ibb.co/Lhbqr2Sz/41aecd83-4559-408c-b5fd-380658eed52f.png",
      "@id": "https://marketersinanvk.in",
      "url": "https://marketersinanvk.in",
      "description": description || "Sinan VK is the Best Digital Marketer in Kerala and Freelance Digital Marketer in Kerala. Providing AI-driven marketing and SEO Specialist in Kerala services.",
      "telephone": "+918590181381",
      "priceRange": "$$$",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Palakkad",
          "addressLocality": "Palakkad",
          "addressRegion": "Kerala",
          "postalCode": "678001",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Manama",
          "addressCountry": "BH"
        }
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 10.7867,
        "longitude": 76.6547
      },
      "areaServed": [
        { "@type": "City", "name": "Palakkad" },
        { "@type": "City", "name": "Malappuram" },
        { "@type": "State", "name": "Kerala" },
        { "@type": "Country", "name": "Bahrain" },
        { "@type": "Country", "name": "India" },
        { "@type": "City", "name": "Dubai" }
      ],
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
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128"
      },
      "sameAs": [
        "https://www.instagram.com/marketersinanvk",
        "https://www.linkedin.com/in/marketersinanvk",
        "https://twitter.com/sinan246810"
      ]
    };

    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = schemaId;
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }
    schemaScript.text = JSON.stringify(schemaData);

    return () => {
      // Cleanup schema on unmount if needed, though usually fine to keep
    };
  }, [title, description, image, article]);

  return null;
}
