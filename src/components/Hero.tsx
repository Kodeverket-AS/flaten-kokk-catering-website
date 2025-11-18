"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  backgroundImage?: string;
  onButtonClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Flaten Kokk og Catering",
  subtitle = "Skaper uforglemmelige matopplevelser for alle anledninger.",
  buttonText = "Bestill kokk i dag",
  backgroundImage = "/bg1.jpg",
  onButtonClick,
}) => {
  const router = useRouter();

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      router.push("/Bestilling");
    }
  };

  return (
    <section 
      className="relative w-full flex items-center justify-center h-screen rounded-[32px] overflow-hidden"
      aria-label="Hero section"
    >
      {/* Hero background */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>
     
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Content */}
      <div className="relative w-full max-w-[1920px] mx-auto h-full flex items-center justify-center">
        <div className="relative text-center text-white px-6 z-10">
          <h1 className="text-5xl md:text-7xl mb-4 font-playfair">{title}</h1>
          <p className="text-2xl font-inter">{subtitle}</p>
          {buttonText && (
            <button
              onClick={handleButtonClick}
              className="button-text pt-2 pb-2 px-7 gap-2 rounded-lg bg-amber-500 text-neutral-900 hover:text-white hover:bg-amber-700 transition-all duration-200 cursor-pointer mt-5"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;