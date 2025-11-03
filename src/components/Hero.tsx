import React from "react";

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
  backgroundImage = "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1950&q=80",
  onButtonClick,
}) => {
  return (
    <div className="relative w-full flex items-center justify-center h-screen  rounded-[32px] overflow-hidden">
      {/* Hero background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      <div className="relative w-full max-w-[1920px] mx-auto h-full flex items-center justify-center">
        {/* Content */}
        <div className="relative text-center text-white px-6 z-10">
          <h1 className="text-5xl md:text-7xl mb-4 font-playfair">{title}</h1>
          <p className="text-2xl font-inter">{subtitle}</p>
          <button
            onClick={onButtonClick}
            className="bg-black font-semibold rounded-2xl py-3 px-6 mt-5 hover:text-green-700 transition-colors"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;