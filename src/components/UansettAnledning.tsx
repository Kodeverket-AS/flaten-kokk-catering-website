import React from "react";
import Image from "next/image";

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
      <div className="w-full flex flex-col gap-8
      ">
        <h2 className="text-center">{title}</h2>

        <div className="flex justify-center flex-wrap gap-10">
          {sections.map((section) => (
            <div
              key={section.title}
              className="border border-gray-200 rounded-[24px] p-10 flex flex-col justify-between shadow hover:shadow-lg transition-shadow duration-300 bg-white flex-1 min-w-[250px] h-[324px]"
            >
              <div className="flex flex-col items-center flex-1 justify-center">
                <Image 
                  src={section.icon} 
                  alt={section.title} 
                  width={40}
                  height={40}
                  className="mb-4 w-10 h-10"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(73%) sepia(96%) saturate(1738%) hue-rotate(1deg) brightness(96%) contrast(96%)'
                  }}
                />
                  <h3 className="text-center">
                  {section.title}
                </h3>
                <p className="text-neutral-900 mb-12 text-center">
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

