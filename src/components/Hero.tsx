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
    <div 
      className="relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
 
      <div className="wrapper-content">
        <section
          className="relative w-full h-screen flex items-center justify-center"
        >


      <div className="relative text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl mb-4">{title}</h1>
        <p className="text-2xl">{subtitle}</p>
        <button
          onClick={onButtonClick}
          className="bg-black font-semibold rounded-2xl py-3 px-6 mt-5 hover:text-green-700 transition-colors"
        >
          {buttonText}
        </button>
      </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;