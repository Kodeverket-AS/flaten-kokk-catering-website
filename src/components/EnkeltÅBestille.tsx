import React from "react";

interface Card {
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
  const gridClasses =
    sections.length <= 3
      ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center place-items-center"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4";

  return <div className="wrapper-content"></div>;
};
export default EnkelBestille;