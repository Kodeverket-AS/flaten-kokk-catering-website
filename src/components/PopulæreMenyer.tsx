import React from "react";

const ServicesWithImages: React.FC = () => {
  const sections = [
    {
      title: "Bryllupsmeny",
      description: "Perfekt for bryllup og spesielle anledninger med focus på lokale ingredienser",
      buttonText: "Les mer",
      imageUrl: "/images/chef.jpg", // replace with your image path
    },
    {
      title: "Konfirmasjon",
      description: "Klassisk nordisk kjøkken med moderne touch, perfekt for konfirmasjoner",
      buttonText: "Les mer",
      imageUrl: "/images/catering.jpg",
    },
    {
      title: "Jubileum",
      description: "Perfekt for mer uformelle sammenkomster og jubileum",
      buttonText: "Les mer",
      imageUrl: "/images/airbnb.jpg",
    },
  ];

  return (
    <div className="px-20 py-8 bg-gray-200 w-full">
      <h2 className="text-3xl font-bold text-black text-center mb-8">Populære menyer</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col"
          >
            {/* Image */}
            <img
              src={section.imageUrl}
              alt={section.title}
              className="w-full h-48 object-cover"
            />

            {/* Text content */}
            <div className="p-6 flex flex-col">
              <h3 className="text-xl text-black font-semibold">
                {section.title}
              </h3>
              <p className="text-black mb-6">{section.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesWithImages;
