import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LayoutProps {
  children: React.ReactNode;
}

import StarryBackground from "./StarryBackground";

export default function Layout({ children }: LayoutProps) {
  const grainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP Magnetic Effect Helper
    const magneticElements = document.querySelectorAll(".magnetic");
    
    magneticElements.forEach((el) => {
      el.addEventListener("mousemove", (e: any) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = el.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        
        gsap.to(el, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        });
      });
    });

    // Staggered Entrance for all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      gsap.from(section.children, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-midnight">
      <StarryBackground />
      <div ref={grainRef} className="cinematic-grain" />
      
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-deep-violet/10 blur-[150px] rounded-full opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-vibrant-indigo/5 blur-[120px] rounded-full opacity-20" />
        <div className="absolute top-[40%] right-[-5%] w-[30%] h-[30%] bg-deep-violet/5 blur-[100px] rounded-full opacity-20" />
      </div>

      <main className="container-main relative z-10 overflow-hidden">
        {children}
      </main>
    </div>
  );
}
