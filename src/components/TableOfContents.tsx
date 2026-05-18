import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TOCItem[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-10% 0% -80% 0%" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className="hidden lg:block sticky top-32 h-fit space-y-8 max-w-[240px]">
      <div className="space-y-4">
        <div className="flex items-center gap-3 px-2 border-b border-white/5 pb-4">
          <List size={14} className="text-neon-purple/60" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] font-mono">
            Navigation Index
          </span>
        </div>
        
        <ul className="space-y-1">
          {headings.map((heading) => (
            <li key={heading.id} className="relative">
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={`block py-2 text-xs transition-all duration-300 relative z-10 ${
                  heading.level === 3 ? "pl-6" : "pl-2"
                } ${
                  activeId === heading.id
                    ? "text-white font-medium italic"
                    : "text-slate-500 hover:text-white/60 font-light"
                }`}
              >
                {heading.text}
              </a>
              {activeId === heading.id && (
                <motion.div
                  layoutId="active-toc"
                  className="absolute left-0 top-0 w-0.5 h-full bg-neon-purple shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-8 border-t border-white/5">
        <div className="px-4 py-3 bg-neon-purple/5 border border-neon-purple/10 rounded-2xl">
          <p className="text-[9px] text-slate-500 leading-relaxed font-light">
            <span className="text-neon-purple font-bold">PRO-TIP:</span> Google AI crawlers utilize these anchor tags for "Jump to section" SERP features.
          </p>
        </div>
      </div>
    </nav>
  );
}
