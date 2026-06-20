"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Framer Motion values for the cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for smooth tracking
  const springConfig = { stiffness: 500, damping: 28 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is a touch device (using matchMedia)
    const touchMediaQuery = window.matchMedia("(pointer: coarse)");
    setIsTouchDevice(touchMediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(e.matches);
    };

    touchMediaQuery.addEventListener("change", handleMediaChange);

    // Track mouse position
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8); // Offset by half width/height to center the dot
      cursorY.set(e.clientY - 8);
      if (!isVisible) setIsVisible(true);
    };

    // Hide cursor when leaving window
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    if (!touchMediaQuery.matches) {
      window.addEventListener("mousemove", moveCursor);
      window.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("mouseenter", handleMouseEnter);
    }

    return () => {
      touchMediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  // If it's a touch device or hasn't entered the screen yet, don't render or render hidden
  if (isTouchDevice) return null;

  return (
    <motion.div
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0,
      }}
      className="fixed top-0 left-0 w-4 h-4 bg-[#00FF87] rounded-full pointer-events-none z-[9999] shadow-[0_0_15px_#00FF87] transition-opacity duration-300"
    />
  );
}
