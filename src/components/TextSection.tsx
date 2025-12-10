import React from "react";

interface TextSectionProps {
  title: string;
  description: string;
}

const TextSection: React.FC<TextSectionProps> = ({ title, description }) => {
  return (
    <div className="wrapper-content">
      <div className="flex items-center justify-center">
        <div className="flex-col text-center space-y-4">
          <h2 className="text-center">{title}</h2>
          <p className="mx-auto text-center text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TextSection;