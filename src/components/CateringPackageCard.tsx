import React, { useState } from "react";

export default function CateringPackages() {
  const categories = ["Alle pakker", "Bryllup", "Konfirmasjon", "Jubileum", "Forretning"];
  const [active, setActive] = useState("Alle pakker");

  const packages = [
    {
      id: 1,
      category: "Bryllup",
      title: "Elegant Bryllupsmeny",
      description: "Komplett bryllupsmeny med treretters middag og bryllupskake",
      guests: "50-200 personer",
      price: "Fra 850 kr/person",
    },
    {
      id: 2,
      category: "Konfirmasjon",
      title: "Familievennlig meny",
      description: "Lett og smakfull meny til konfirmasjonen",
      guests: "20-80 personer",
      price: "Fra 450 kr/person",
    },
    {
      id: 3,
      category: "Forretning",
      title: "Business Buffet",
      description: "Effektivt og elegant oppsett for bedriftsarrangementer",
      guests: "10-150 personer",
      price: "Fra 600 kr/person",
    },
  ];

  const visible = packages.filter((p) => active === "Alle pakker" || p.category === active);

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-serif text-center mb-6">Våre cateringpakker</h2>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              active === c ? "bg-black text-white" : "bg-white text-gray-700"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((pkg) => (
          <div key={pkg.id} className="border rounded-xl shadow-sm overflow-hidden bg-white">
            <div className="bg-gray-200 h-40 flex items-center justify-center">
              <svg className="w-16 h-16 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="14" rx="2" />
                <circle cx="8.5" cy="9" r="1.5" />
                <path d="M21 19l-5-5L11 21" />
              </svg>
            </div>
            <div className="p-5">
              <h3 className="font-semibold mb-1">{pkg.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{pkg.description}</p>
              <p className="text-sm text-gray-700 mb-1">👥 {pkg.guests}</p>
              <p className="text-sm text-gray-700 mb-4">🍽️ {pkg.price}</p>
              <button className="w-full py-2 bg-black text-white rounded-md">Bestill pakke</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
