import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  article?: boolean;
  keywords?: string[];
}

export default function SEO({ title, description, image, article, keywords }: SEOProps) {
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
    if (keywords) {
      updateMeta("keywords", keywords.join(", "));
    } else {
      // Default strategic keywords
      updateMeta("keywords", [
        "Best SEO Expert in Kerala",
        "Freelance Digital Marketer in Kerala",
        "Local SEO Services in Palakkad",
        "SMM Expert Kerala",
        "Best AI Digital Marketing Agency",
        "Web Development Specialist Kerala",
        "Digital Growth Strategist"
      ].join(", "));
    }
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
    const rootUrl = "https://marketersinanvk.in";
    const currentPath = window.location.pathname === "/" ? "" : window.location.pathname;
    const canonicalUrl = `${rootUrl}${currentPath}`;
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", canonicalUrl);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", canonicalUrl);
      document.head.appendChild(canonical);
    }

    // JSON-LD Schema
    const schemaId = "seo-schema";
    let schemaScript = document.getElementById(schemaId) as HTMLScriptElement;
    
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          "@id": "https://marketersinanvk.in/#service",
          "name": "Marketer Sinan VK | Best SEO Expert in Kerala",
          "alternateName": "Freelance Digital Marketer in Kerala",
          "url": "https://marketersinanvk.in",
          "image": image || "https://i.ibb.co/Lhbqr2Sz/41aecd83-4559-408c-b5fd-380658eed52f.png",
          "description": "Premium Digital Marketing Agency in Kerala specializing in Local SEO Services in Palakkad, Custom Website Development Kerala, and high-ROI Lead Generation.",
          "telephone": "+918590181381",
          "priceRange": "$$$",
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
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "21:00"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Marketing & Development Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Best SEO Services in Kerala",
                  "description": "Surgical search engine optimization to dominate local rankings."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom Website Development Kerala",
                  "description": "High-performance Next.js web applications for modern brands."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Lead Generation for Real Estate & Retail",
                  "description": "High-intent lead acquisition funnels for maximum ROI."
                }
              }
            ]
          }
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://marketersinanvk.in/#business",
          "name": "Marketer Sinan VK",
          "image": "https://i.ibb.co/Lhbqr2Sz/41aecd83-4559-408c-b5fd-380658eed52f.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Palakkad",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
          },
          "url": "https://marketersinanvk.in"
        }
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
