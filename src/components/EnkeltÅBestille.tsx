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
      <div className="w-full h-auto sm:h-70 flex flex-col items-center">
        <h2 className="font-playfair font-semibold text-black text-center mb-6">
          {title}
        </h2>

        <div className="flex flex-col gap-6 w-full h-auto items-stretch sm:h-[80%] sm:flex sm:flex-row sm:justify-around sm:items-center">
          {sections.map((Card) => (
            <div
              key={Card.id}
              className="h-full max-w-65 flex flex-col items-center"
            >
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
