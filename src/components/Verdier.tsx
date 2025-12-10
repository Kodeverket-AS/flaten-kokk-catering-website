"use client";

import React, { useEffect, useRef } from "react";

interface VerdierItem {
  year: string;
  title: string;
  description: string;
}

interface VerdierProps {
  title?: string;
  items: VerdierItem[];
}

const Verdier: React.FC<VerdierProps> = ({ title = "Mine verdier", items }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll<HTMLElement>(
      "[data-verdier-item]"
    );

    if (!elements || elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("verdier-item-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
    
      }
    );

    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 150}ms`;
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [items.length]);

  return (
    <section className="wrapper-content">
      {title && <h2 className="text-center">{title}</h2>}

      <div ref={containerRef} className="relative md:max-w-[75%] w-full mx-auto">
        {items.map((item, index) => (
            <div 
              key={item.title} 
              data-verdier-item
              className=" mb-12 relative flex items-center verdier-item"
            >
            <div className="shrink-0 relative self-center">
              {index !== items.length - 1 && (
                <div className="absolute left-[47px] top-24 w-0.5 h-[150px] bg-amber-500 z-0" />
              )}
              <div className="w-24 h-24 rounded-full bg-amber-500 flex items-center justify-center text-gray-800 font-semibold text-sm text-center px-2 z-10 shadow-sm">
                {item.year}
              </div>
            </div>

            <div className="flex-1 ml-4 rounded-lg bg-stone-100 p-6 md:p-12 lg:p-14 shadow hover:shadow-lg transition-shadow flex flex-col gap-4">
              <p className="title">
                {item.title}
              </p>
              <p className="text-gray-600 text-base">
                {item.description}
              </p>
            </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Verdier;
