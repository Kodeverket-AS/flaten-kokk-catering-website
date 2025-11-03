import React from "react";

interface Section {
  title: string;
  description: string;
  icon: string;
}

interface UansettAnledningProps {
  title?: string;
  sections: Section[];
}

const UansettAnledning: React.FC<UansettAnledningProps> = ({
  title = "Uansett anledning – vi gjør alt klart for deg",
  sections,
}) => {
  return (
    <div className="wrapper-content">
      <div className="w-full">
        <h2 className="text-3xl font-bold text-black text-center mb-8">
          {title}
        </h2>

        <div className="flex justify-center flex-wrap gap-10">
          {sections.map((section) => (
            <div
              key={section.title}
              className="border border-gray-200 rounded-[24px] p-10 flex flex-col justify-between shadow hover:shadow-lg transition-shadow duration-300 bg-white flex-1 min-w-[250px] h-[324px]"
            >
              <div className="flex flex-col items-center flex-1 justify-center">
                <img 
                  src={section.icon} 
                  alt={section.title} 
                  className="mb-4 w-10 h-10"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(73%) sepia(96%) saturate(1738%) hue-rotate(1deg) brightness(96%) contrast(96%)'
                  }}
                />
                <h3 className="text-xl text-black font-semibold text-center mb-2">
                  {section.title}
                </h3>
                <p className="text-black mb-12 text-center">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UansettAnledning;

