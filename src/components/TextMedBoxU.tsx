import React from "react";

interface Section {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TextMedBoxUProps {
  title?: string;        
  sections: Section[];
}

const TextMedBoxU: React.FC<TextMedBoxUProps> = ({ title = "Våre Tjenester", sections }) => {
  return (
    <div className="wrapper-content">
      <div className="bg-gray-200 w-full">
        <h2 className="text-3xl font-bold text-black text-center mb-8">
          {title} {/* <- Bruker prop */}
        </h2>

      <div className="grid md:grid-cols-4 gap-10">
        {sections.map((section, index) => (
          <div
            key={index}
            className="border border-black rounded-xl p-6 flex flex-col justify-between shadow hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <div className="flex flex-col items-center">
              {section.icon}
              <h3 className="text-xl text-black font-semibold text-center mb-2">
                {section.title}
              </h3>
              <p className="text-black mb-6 text-center">
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

export default TextMedBoxU;
