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
          "name": "Digital Hug & Marketer Sinan VK",
          "url": "https://marketersinanvk.in/",
          "telephone": "+918590181381",
          "email": "klgadjenix@gmail.com",
          "priceRange": "$$",
          "image": image || "https://i.ibb.co/Lhbqr2Sz/41aecd83-4559-408c-b5fd-380658eed52f.png",
          "description": "Muhammed Sinan VK is an elite digital marketing strategist and SEO expert in Kerala, specializing in performance marketing, technical SEO, and high-converting web development.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Palakkad",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 10.7867,
            "longitude": 76.6548
          },
          "areaServed": [
            { "@type": "Country", "name": "India" },
            { "@type": "AdministrativeArea", "name": "Kerala" },
            { "@type": "Country", "name": "United Kingdom" },
            { "@type": "Country", "name": "United States" }
          ],
          "founder": {
            "@id": "https://marketersinanvk.in/#person"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "21:00"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Marketer Sinan VK Service Catalog",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Search Engine Optimization (Technical & Local SEO)",
                  "description": "Surgical search engine optimization to dominate local and global rankings through technical excellence and semantic authority."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Performance Marketing (Meta Ads & Google Ads Management)",
                  "description": "High-ROI paid acquisition strategies leveraging AI-driven bidding and precision audience targeting for maximum conversion depth."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Full-Stack Web Development (Next.js & Tailwind CSS)",
                  "description": "Premium, high-performance web applications engineered for speed, SEO durability, and elite user experiences."
                }
              }
            ]
          }
        },
        {
          "@type": "Person",
          "@id": "https://marketersinanvk.in/#person",
          "name": "Muhammed Sinan VK",
          "jobTitle": "Founder & CEO",
          "worksFor": {
            "@type": "Organization",
            "name": "Digital Hug"
          },
          "url": "https://marketersinanvk.in/",
          "sameAs": [
            "https://www.linkedin.com/in/sinan-vk",
            "https://www.instagram.com/muhammed_sinan_vk_85",
            "https://twitter.com/sinan246810",
            "https://www.youtube.com/@DigitalMark-l3q"
          ]
        },
        {
          "@type": "Product",
          "name": "Starter Deployment / 1-on-1 Strategic Retrieval",
          "image": "https://marketersinanvk.in/starter-service.png",
          "description": "A definitive 1-on-1 strategic retrieval with Muhammed Sinan VK for brand ascension.",
          "offers": {
            "@type": "Offer",
            "url": "https://marketersinanvk.in/",
            "price": "3500",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Marketer Sinan VK"
            }
          }
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
