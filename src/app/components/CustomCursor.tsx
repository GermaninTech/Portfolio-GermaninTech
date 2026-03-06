// src/components/CustomCursor.tsx
"use client";
import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const cursorX = useSpring(0, { stiffness: 300, damping: 20 });
  const cursorY = useSpring(0, { stiffness: 300, damping: 20 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8); // Ajusta -8 para centrar el círculo
      cursorY.set(e.clientY - 8); // Ajusta -8 para centrar el círculo
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Define aquí qué elementos hacen que el cursor reaccione
      const interactiveElements = ['A', 'BUTTON', 'INPUT', '.group']; // Añadimos .group para tus tarjetas Bento
      if (interactiveElements.includes(target.tagName) || target.closest('.group')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveElements = ['A', 'BUTTON', 'INPUT', '.group'];
      if (interactiveElements.includes(target.tagName) || target.closest('.group')) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter, true);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter, true);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className={`fixed z-[9999] pointer-events-none rounded-full transition-all duration-200 ease-out 
                  ${isHovering 
                    ? 'bg-emerald-500/50 w-8 h-8 opacity-100 blur-sm' 
                    : 'bg-emerald-500/80 w-4 h-4 opacity-70'
                  }`}
      style={{
        translateX: cursorX,
        translateY: cursorY,
        mixBlendMode: isHovering ? 'normal' : 'difference', // Efecto de color al pasar sobre texto
      }}
    />
  );
}