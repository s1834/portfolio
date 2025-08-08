"use client";

import React, { useEffect, useState } from "react";

export default function CircularCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-8 h-8 bg-blue-500/50 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
      }}
    />
  );
}
