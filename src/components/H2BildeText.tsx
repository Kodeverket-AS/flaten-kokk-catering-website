import React from "react";

interface ServiceSection {
  title: string;
  description: string;
  imageUrl: string;
}

interface ServicesProps {
  heading?: string;
  sections: ServiceSection[];
}

const H2BildeText: React.FC<ServicesProps> = ({ heading = "Populære menyer", sections }) => {
  return (
    <div className="wrapper-content">
      <div className="bg-gray-200 w-full">
        <h2 className="text-center">{heading}</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
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
              <h3 className="text-center">{section.title}</h3>
              <p className="text-neutral-900">{section.description}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default H2BildeText;