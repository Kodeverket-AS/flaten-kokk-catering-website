"use client";

import React from "react";
import Link from "next/link";
import { ChefHat, Package, Home } from "lucide-react"; 

const Services: React.FC = () => {
  const sections = [
    {
      title: "Privat Kokk",
      description: "Lei en profesjonell kokk til ditt arrangement",
      buttonText: "Les mer",
      icon: <ChefHat className="w-10 h-10 text-black mx-auto mb-4" />,
      path: "/PrivatKokk",
    },
    {
      title: "Catering Pakker",
      description: "Ferdige menyer til alle anledninger",
      buttonText: "Les mer",
      icon: <Package className="w-10 h-10 text-black mx-auto mb-4" />,
      path: "/Catering",
    },
    {
      title: "Airbnb Events",
      description: "Spesialtilbud for Airbnb-gjester",
      buttonText: "Les mer",
      icon: <Home className="w-10 h-10 text-black mx-auto mb-4" />,
      path: "/AirbnbEvents",
    },
  ];

  return (
    <div className="wrapper-bg-stone">
      <div className="wrapper-content">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-black text-center mb-8">
            Våre Tjenester
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {sections.map((section) => (
              <div
                key={section.title}
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

                <Link
                  href={section.path}
                  className="mt-auto text-center bg-white text-black border border-black py-2 px-4 rounded hover:bg-gray-200 transition-colors"
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

export default Services;
