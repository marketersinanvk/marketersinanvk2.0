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
      "@type": article ? "BlogPosting" : "LocalBusiness",
      "name": "Marketer Sinan VK",
      "image": image || "https://picsum.photos/seed/sinan/1200/630",
      "@id": "https://marketersinanvk.in",
      "url": "https://marketersinanvk.in",
      "telephone": "+918590181381",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Palakkad",
        "addressLocality": "Palakkad",
        "addressRegion": "Kerala",
        "postalCode": "678001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 10.7867,
        "longitude": 76.6547
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
        "https://www.instagram.com/marketersinanvk",
        "https://www.linkedin.com/in/marketersinanvk"
      ],
      "description": description
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
