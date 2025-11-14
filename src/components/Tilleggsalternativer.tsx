"use client";

import React from "react";

const Tilleggsalternativer: React.FC = () => {
  const sections = [
    {
      title: "Privat kokk",
      description: "Lei en profesjonell kokk til ditt arrangement",
      price: "Fra 125 kr/person",
      icon: <img 
        src="/icons/lucide_chef-hat.svg" 
        alt="Chef hat icon" 
        className="w-14 h-14"
        style={{
          filter: 'brightness(0) saturate(100%) invert(73%) sepia(96%) saturate(1738%) hue-rotate(1deg) brightness(96%) contrast(96%)'
        }}
      />,
    },
    {
      title: "Catering pakker",
      description: "Ferdige menyer til alle anledninger",
      price: "Fra 450 kr/person/dag",
      icon: <img 
        src="/icons/lucide_cooking-pot.svg" 
        alt="Cooking pot icon" 
        className="w-14 h-14"
        style={{
          filter: 'brightness(0) saturate(100%) invert(73%) sepia(96%) saturate(1738%) hue-rotate(1deg) brightness(96%) contrast(96%)'
        }}
      />,
    },
    {
      title: "Airbnb Events",
      description: "Spesialtilbud for Airbnb-gjester",
      price: "Prisavtale",
      icon: <img 
        src="/icons/lucide_plus.svg" 
        alt="Plus icon" 
        className="w-14 h-14"
        style={{
          filter: 'brightness(0) saturate(100%) invert(73%) sepia(96%) saturate(1738%) hue-rotate(1deg) brightness(96%) contrast(96%)'
        }}
      />,
    },
  ];
  return (
    <div className="wrapper-bg-stone">
      <div className="wrapper-content">
        <div className="w-full flex flex-col gap-8">
          <h2 className="text-center">Legg til flere tjenester</h2>

          <div className="flex justify-center flex-wrap gap-4 xl:gap-10 min-w-[250px]">
            {sections.map((section) => (
              <div
                key={section.title}
                className="border border-gray-200 rounded-[24px] p-10 flex flex-col justify-between shadow hover:shadow-lg transition-shadow duration-300 bg-white flex-1"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h3 className="text-center">
                    {section.title}
                  </h3>
                  <p className="text-neutral-900 text-center">
                    {section.description}
                  </p>
                </div>
                {section.price && (
                  <p className="text-amber-600 text-center font-medium mt-6">
                    {section.price}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tilleggsalternativer;

