"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ui/buttons/Button";

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
        <div className="w-full flex flex-col gap-8">
          <h2 className="text-center">Våre Tjenester</h2>

          <div className="flex justify-center flex-wrap gap-4 xl:gap-10 min-w-[250px]">
            {sections.map((section) => (
              <div
                key={section.title}
                className="border border-gray-200 rounded-[24px] p-10 flex flex-col justify-between shadow hover:shadow-lg transition-shadow duration-300 bg-white flex-1  "
              >
                <div className="flex flex-col items-center gap-4 flex-1">
                  <Image 
                    src={section.icon} 
                    alt={section.title} 
                    width={56}
                    height={56}
                    className="mb-4 w-14 h-14"
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

                <div className="mx-auto">
                <Button
                  variant="secondary"
                  href={section.path}
                >
                  {section.buttonText}
                </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VåreTjenesterMain;

