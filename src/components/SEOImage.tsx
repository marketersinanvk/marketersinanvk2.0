import React from "react";

interface SEOImageProps {
  src: string;
  alt: string;
  title?: string;
  width?: number | string;
  height?: number | string;
  caption?: string;
  priority?: boolean;
  className?: string;
}

/**
 * SEOImage: A high-performance, schema-integrated image component.
 * Engineered for Google Image Search and Google Lens indexing.
 */
export default function SEOImage({
  src,
  alt,
  title,
  width,
  height,
  caption,
  priority = false,
  className = ""
}: SEOImageProps) {
  const baseUrl = "https://marketersinanvk.in";
  const absoluteUrl = src.startsWith("http") ? src : `${baseUrl}${src}`;

  // ImageObject Structured Data for Visual Search Indexing
  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": absoluteUrl,
    "url": absoluteUrl,
    "name": title || alt,
    "description": alt,
    "width": {
      "@type": "QuantitativeValue",
      "value": typeof width === 'number' ? width : 1200
    },
    "height": {
      "@type": "QuantitativeValue",
      "value": typeof height === 'number' ? height : 630
    },
    "license": `${baseUrl}/license`,
    "acquireLicensePage": `${baseUrl}/#contact`,
    "creditLine": "Marketer Sinan VK - Performance Marketing Agency",
    "creator": {
      "@type": "Organization",
      "name": "Digital Hug",
      "url": "https://marketersinanvk.in"
    },
    "copyrightNotice": "Marketer Sinan VK"
  };

  return (
    <figure className={`group space-y-4 ${className}`}>
      {/* Schema Injection (Hidden from UI, visible to bots) */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-950">
        <img
          src={src}
          alt={alt}
          title={title || alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="w-full h-auto object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s] ease-out scale-100 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Subtle Neon Overlay on Hover */}
        <div className="absolute inset-0 bg-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {caption && (
        <figcaption className="px-4 text-center">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] italic">
            <span className="text-neon-purple/60 mr-2">//</span>
            {caption}
          </p>
        </figcaption>
      )}
    </figure>
  );
}
