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

const TextMedBoxU: React.FC<TextMedBoxUProps> = ({
  title = "Våre Tjenester",
  sections,
}) => {

  const gridClasses =
    sections.length <= 3
      ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center place-items-center"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4";

  return (
    <div className="wrapper-content">
      <div className="w-full">
        <h2 className="text-3xl font-bold text-neutral-900 text-center mb-8">
          {title}
        </h2>

        <div className={`${gridClasses} gap-6`}>
          {sections.map((section) => (
            <div
              key={section.title}
              className="w-full max-w-[300px] h-[311px] rounded-[24px] border border-black p-12 flex flex-col justify-between gap-6 shadow hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <div className="w-full h-[137px] flex flex-col items-center gap-4">
                <div className="flex items-center justify-center w-full h-[40px]">
                  <div className="w-[40px] h-[40px] flex items-center justify-center">
                    {section.icon}
                  </div>
                </div>
                <h3 className="text-xl text-neutral-900 font-semibold text-center">
                  {section.title}
                </h3>
                <p className="text-neutral-900 text-center">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextMedBoxU;
