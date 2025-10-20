import React from "react";

interface TextSectionProps {
  title: string;
  description: string;
}

const TextSection: React.FC<TextSectionProps> = ({ title, description }) => {
  return (
    <div className="flex items-center justify-center bg-gray-100 pt-5 pb-5">
      <div className="flex-col text-center space-y-4 max-w-2xl">
        <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
        <p className="mx-auto text-center text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TextSection;