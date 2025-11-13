import React from "react";
import Image from "next/image";

interface MenuSection {
  title: string;
  description: string;
  imageUrl: string;
  buttonText?: string;
  pris?: string;
}

interface MenyerProps {
  sections: MenuSection[];
  title?: string;
}

// viktig !!!!! description må ha en string med "Forrett: Hovedrett: Dessert:" som deler opp teksten i tre deler, hvis ikke, kommer som t en ext  

const Menyer: React.FC<MenyerProps> = ({ sections, title = "Populære menyer" }) => {
  const formatDescription = (description: string) => {
    const parts = description.split(/(Forrett:|Hovedrett:|Dessert:)/);
    const lines = [];
    
    if (parts.length === 1) {
      return <div>{description}</div>;
    }
    
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (part.match(/^(Forrett:|Hovedrett:|Dessert:)$/)) {
        const nextPart = parts[i + 1] || '';
        const content = nextPart.trim();
        
        lines.push(
          <div key={i}>
            <span className="font-semibold">{part}</span> {content}
          </div>
        );
        i++;
      }
    }

    
    return lines.length > 0 ? lines : <div>{description}</div>;
  };


  //console.log(sections); -debugign
  return (
    <div className="wrapper-content">
      <div className="w-full flex flex-col gap-8">
        <h2 className="text-center">{title}</h2>
        <div className="flex flex-col md:flex-row md:flex-wrap md:gap-10 md:justify-center xl:flex-row flex-wrap gap-10 justify-center">
          {sections.map((section, index) => (
          <div
            key={section.title}
              className="rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col md:flex-row xl:flex-col md:w-full xl:w-auto"
          >
              <div
                className={`w-full md:w-1/2 lg:w-1/2 xl:w-[400px] h-[400px] flex items-center justify-center mx-auto ${
                  index % 2 === 0 ? "md:order-2 xl:order-none" : "md:order-1 xl:order-none"
                }`}
              >
              <Image
                src={section.imageUrl}
                alt={section.title}
                width={376}
                height={376}
                className="w-full max-w-[376px] h-[376px] rounded-[12px] object-cover"
              />
            </div>
              <div
                className={`p-6 flex flex-col w-full md:w-1/2 md:text-left text-left xl:w-[400px] gap-8 mx-auto flex-1 ${
                  index % 2 === 0 ? "md:order-1 xl:order-none" : "md:order-2 xl:order-none"
                }`}
              >
                <h3 className="">{section.title}</h3>
                <div className="text-neutral-900 font-normal text-base leading-[150%] flex-1">
                {formatDescription(section.description)}
              </div>
              {section.pris && (
                  <p className="text-neutral-900 font-medium text-lg leading-[130%]">
                    {section.pris}
                  </p>
              )}
              {section.buttonText && (
                  <button className="bg-amber-500 rounded-[8px] hover:bg-amber-700 hover:text-white transition-colors w-full lg:w-auto xl:w-full py-3 px-6 gap-2 flex items-center justify-center md:self-start xl:self-center">
                  {section.buttonText}
                </button>
              )}
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Menyer;
