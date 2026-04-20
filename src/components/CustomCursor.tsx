import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    if (!isMobile) {
      window.addEventListener("mousemove", moveCursor);
      window.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile, cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 border border-vibrant-indigo/50 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          width: isHovering ? 60 : 32,
          height: isHovering ? 60 : 32,
          opacity: isHovering ? 0.8 : 0.5,
        }}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-vibrant-indigo rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
