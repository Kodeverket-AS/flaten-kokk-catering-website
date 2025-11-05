import React from "react";

interface Card {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ContainerProps {
  title?: string;
  sections: Card[];
}

const EnkelBestille: React.FC<ContainerProps> = ({
  title = "Enkelt å Bestille",
  sections,
}) => {
  return (
    <div className="wrapper-content bg-gray-400 w-full ">
      <div className="w-full flex flex-col items-center">
        <h2 className="font-playfair font-semibold text-black text-center mb-6">
          {title}
        </h2>

        <div className="content bg-amber-900 h-22 w-22 flex justify-between items-center">
          {sections.map((Card) => (
            <div key={Card.id} className="bg-amber-300 h-20 w-20">
              <div className="bg-amber-700 h-18 w-18">
                <div className="bg-amber-300 rounded-full m-auto h-16 w-16">{Card.icon}</div>
              </div>
              <h3 className="">{Card.title}</h3>
              <p className="">{Card.description}</p>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};
export default EnkelBestille;
