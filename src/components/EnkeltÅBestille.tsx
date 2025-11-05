import React from "react";

interface Card {
  id: string;
  title: string;
  description: string;
  number: number;
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
    <div className="wrapper-content bg-gray-400 w-full">
      <div className="w-full h-70 flex flex-col items-center">
        <h2 className="font-playfair font-semibold text-black text-center mb-6">
          {title}
        </h2>

        <div className="content bg-amber-900 h-[80%] w-[75%] flex justify-around items-center">
          {sections.map((Card) => (
            <div
              key={Card.id}
              className="bg-amber-100 h-full flex flex-col items-center"
            >
              <div className="">
                <div className="bg-amber-300 rounded-full m-auto pb-0.5 h-16 w-16 font-semibold text-white flex justify-center items-center">
                  {Card.number}
                </div>
              </div>
              <h4 className="text-xl font-semibold text-black">{Card.title}</h4>
              <p className="text-md">{Card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default EnkelBestille;
