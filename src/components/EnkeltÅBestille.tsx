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
    <div className="bg-(--color-gray-100) w-full px-20 py-24">
      <div className="w-full h-70 flex flex-col items-center">
        <h2 className="font-playfair font-semibold text-black text-center mb-6">
          {title}
        </h2>

        <div className="h-[80%] w-[75%] flex justify-around items-center">
          {sections.map((Card) => (
            <div key={Card.id} className="h-full flex flex-col items-center">
              <div className="">
                <div className="bg-(--color-amber-500) rounded-full m-auto pb-0.5 h-16 w-16 font-semibold text-white flex justify-center items-center">
                  {Card.number}
                </div>
              </div>
              <h4 className="text-xl font-semibold text-black pt-2">
                {Card.title}
              </h4>
              <p className="text-md text-center pt-1">{Card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default EnkelBestille;
