import React from "react";
import Link from "next/link";

const VåreTjenesterMain: React.FC = () => {
  const sections = [
    {
      title: "Privat Kokk",
      description: "Lei en profesjonell kokk til ditt arrangement",
      buttonText: "Les mer",
      icon: "/icons/lucide_chef-hat.svg",
      path: "/PrivatKokk",
    },
    {
      title: "Catering Pakker",
      description: "Ferdige menyer til alle anledninger",
      buttonText: "Les mer",
      icon: "/icons/lucide_cooking-pot.svg",
      path: "/Catering",
    },
    {
      title: "Airbnb Events",
      description: "Spesialtilbud for Airbnb-gjester",
      buttonText: "Les mer",
      icon: "/icons/lucide_home.svg",
      path: "/AirbnbEvents",
    },
  ];

  return (
    <div className="wrapper-bg-stone">
      <div className="wrapper-content">
        <div className="w-full">
          <h2 className="text-center">Våre Tjenester</h2>

          <div className="flex justify-center flex-wrap gap-10">
            {sections.map((section) => (
              <div
                key={section.title}
                className="border border-gray-200 rounded-[24px] p-10 flex flex-col justify-between shadow hover:shadow-lg transition-shadow duration-300 bg-white flex-1 min-w-[250px] h-[324px]"
              >
                <div className="flex flex-col items-center">
                  <img 
                    src={section.icon} 
                    alt={section.title} 
                    className="mb-4 w-10 h-10"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(73%) sepia(96%) saturate(1738%) hue-rotate(1deg) brightness(96%) contrast(96%)'
                    }}
                  />
                  <h3 className="text-center">
                    {section.title}
                  </h3>
                  <p className="text-neutral-900 mb-6 text-center">
                    {section.description}
                  </p>
                </div>

                <Link
                  href={section.path}
                  className="mx-auto text-center bg-white text-gray-600 border border-amber-700 rounded-lg hover:bg-gray-200 transition-colors w-[111px] h-[45px] pt-3 pb-3 pr-6 pl-6 gap-2 flex items-center justify-center opacity-100"
                >
                  {section.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VåreTjenesterMain;

