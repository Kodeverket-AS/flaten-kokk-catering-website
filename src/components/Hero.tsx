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
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl mb-4">{title}</h1>
        <p className="text-2xl">{subtitle}</p>
        <button
          onClick={onButtonClick}
          className="bg-black font-semibold rounded-2xl py-3 px-6 mt-5  hover:text-green-700"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
