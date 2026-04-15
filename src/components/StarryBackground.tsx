import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: any[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const starCount = Math.floor((width * height) / 3000);
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: 0.5, // Fixed small size for luxury feel
          opacity: Math.random(),
          flickerSpeed: Math.random() * 0.02 + 0.005,
          parallaxFactor: Math.random() * 0.3 + 0.05,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const scrollY = window.scrollY;

      stars.forEach((star) => {
        // Flicker effect
        star.opacity += star.flickerSpeed;
        if (star.opacity > 0.8 || star.opacity < 0.1) {
          star.flickerSpeed = -star.flickerSpeed;
        }

        // Parallax effect
        const yPos = (star.y - scrollY * star.parallaxFactor) % height;
        const finalY = yPos < 0 ? yPos + height : yPos;

        ctx.beginPath();
        ctx.arc(star.x, finalY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `#00E5FF${Math.floor(star.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
}
