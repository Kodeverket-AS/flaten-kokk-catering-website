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
    <div className="wrapper-bg-stone pb-5">
      <div className="wrapper-content">
        <div className="">
          <h2 className="text-center">{title}</h2>

          <div className="gap-10 pt-12 flex flex-col items-center sm:flex sm:flex-row sm:justify-around sm:items-center">
            {sections.map((Card) => (
              <div
                key={Card.id}
                className="max-w-77 flex flex-col items-center"
              >
                <div className="pt-2">
                  <div className="bg-amber-500 rounded-full py-6 h-18 w-18 text-white flex justify-center items-center">
                    {Card.number}
                  </div>
                </div>
                <h4 className="pt-4 text-lg">{Card.title}</h4>
                <p className="text-center pt-1">{Card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EnkelBestille;
