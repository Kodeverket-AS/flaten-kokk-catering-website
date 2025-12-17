"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-13 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-full mx-auto px-4 relative flex py-10 justify-end">
        <button
          onClick={scrollToTop}
          className="bg-amber-500 hover:bg-amber-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 pointer-events-auto"
          aria-label="Scroll to top"
        >
          <Image
            src="/icons/lucide_chevron-up.svg"
            alt="Scroll to top"
            width={24}
            height={24}
            className="w-5 h-5"
          />
        </button>
      </div>
    </div>
  );
};

export default ScrollToTopButton;
