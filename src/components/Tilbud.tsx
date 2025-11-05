import React from "react";

export interface Feature {
  text: string;
}

export interface TilbudSection {
  title: string;
  description: string;
  icon: string;
  list: Feature[];
}

interface TilbudProps {
  title?: string;
  sections: TilbudSection[];
}

const Tilbud: React.FC<TilbudProps> = ({
  title = "Vårt tilbud",
  sections,
}) => {
  return (
    <div className="wrapper-bg-stone">
      <div className="wrapper-content">
        <h2 className="text-[36px] font-playfair font-medium text-neutral-900 leading-[125%] text-center ">
          {title}
        </h2>

        <div className="flex  flex-col lg:flex-row justify-center flex-wrap gap-8 lg:gap-10">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-white rounded-[24px] p-8 lg:p-10 flex flex-col items-start shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 "
            >
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={section.icon} 
                  alt={section.title} 
                  className="w-12 h-12"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(73%) sepia(96%) saturate(1738%) hue-rotate(1deg) brightness(96%) contrast(96%)'
                  }}
                />
                <h4 className="text-[22px] text-neutral-900 font-medium font-inter leading-[130%] text-left">
                  {section.title}
                </h4>
              </div>
              <p className="text-gray-600 mb-6 text-left leading-relaxed flex-1">
                {section.description}
              </p>
              
              <ul className="space-y-3 w-full text-gray-600">
                {section.list.map((listpoint, index) => (
                  <li key={index} className="flex items-start text-left text-gray-600">
                    <span 
                      className="inline-block w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"
                      style={{
                        backgroundColor: '#f59e0b'
                      }}
                    />
                    <span className="text-gray-600">{listpoint.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tilbud;
