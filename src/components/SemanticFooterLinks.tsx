import React from "react";
import { Link } from "react-router-dom";
import { MoveRight, Globe, Code2, Database, ShieldCheck } from "lucide-react";
import { locationConfigs } from "../data/locations";
import { techConfigs } from "../data/tech";

import { normalizeSlug } from "../lib/seo-utils";

interface SemanticFooterLinksProps {
  currentLocation?: string;
  currentTech?: string;
  className?: string;
}

export default function SemanticFooterLinks({ 
  currentLocation, 
  currentTech,
  className = "" 
}: SemanticFooterLinksProps) {
  
  const locations = Object.keys(locationConfigs).map(slug => ({
    slug: normalizeSlug(slug),
    name: locationConfigs[slug].name
  }));

  const techs = Object.keys(techConfigs).map(slug => ({
    slug: normalizeSlug(slug),
    name: techConfigs[slug].displayName
  }));

  const coreNodes = [
    { slug: "top-digital-marketing-agencies-kerala", name: "Industry Comparison Hub" },
    { slug: "posts", name: "Strategic Journal" },
    { slug: "portfolio", name: "Result Analytics" },
    { slug: "contact", name: "Deployment Portal" }
  ];

  const sections = [
    {
      title: "Target Enterprise Zones",
      icon: <Globe size={12} className="text-neon-purple/50" />,
      links: locations.filter(l => l.slug !== currentLocation?.toLowerCase())
    },
    {
      title: "Engineering Capabilities",
      icon: <Code2 size={12} className="text-neon-purple/50" />,
      links: techs.filter(t => t.slug !== currentTech?.toLowerCase())
    },
    {
      title: "Industry Blueprints",
      icon: <Database size={12} className="text-neon-purple/50" />,
      links: coreNodes
    }
  ];

  return (
    <section className={`py-24 border-t border-purple-900/20 bg-midnight relative overflow-hidden ${className}`}>
      {/* Structural Grid Decor */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #a855f7 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-12">
          <p className="text-neon-purple text-[10px] font-bold uppercase tracking-[0.6em] italic mb-4">Semantic Silk-Route Protocol</p>
          <h3 className="text-2xl text-white font-serif italic tracking-tighter">Authority Distribution Matrix.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-8">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                {section.icon}
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] font-mono">
                  {section.title}
                </span>
              </div>
              
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx} className="group">
                    <Link 
                      to={`/${link.slug}`} 
                      className="flex items-center justify-between group-hover:pl-2 transition-all duration-300"
                    >
                      <span className="text-sm font-light text-slate-500 group-hover:text-white transition-colors">
                        {link.name}
                      </span>
                      <MoveRight 
                        size={12} 
                        className="text-neon-purple opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" 
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Global Security Node */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-4">
              <ShieldCheck size={16} className="text-neon-purple/40" />
              <p className="text-[9px] font-mono text-slate-700 uppercase tracking-widest leading-relaxed">
                Network State: <span className="text-neon-purple">Synchronized</span> / 
                Integrity Algorithm: <span className="text-slate-500">MSVK-v2026.4</span>
              </p>
           </div>
           
           <div className="flex gap-12">
              <span className="text-[8px] font-bold text-slate-800 uppercase tracking-widest">Architecture: Next.js 15</span>
              <span className="text-[8px] font-bold text-slate-800 uppercase tracking-widest">Protocol: Headless SSR</span>
           </div>
        </div>
      </div>
    </section>
  );
}
