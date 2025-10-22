import React from "react";
import Image from "next/image";

interface TextBildeProps {
  title: string;
  paragraphs: string | string[];
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean;
  bgColor?: string;
}

const TextBilde: React.FC<TextBildeProps> = ({
  title,
  paragraphs,
  imageSrc,
  imageAlt = "",
  reverse = false,
  bgColor = "",
}) => {
  const paragraphArray = Array.isArray(paragraphs) ? paragraphs : [paragraphs];

  return (
    <div className="wrapper-content">
      <div
        className={`flex flex-col md:flex-row items-center justify-center ${bgColor} ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <div className="flex flex-col text-center md:text-left md:w-1/2 space-y-4 mb-6 md:mb-0">
          <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
          {paragraphArray.map((text, i) => (
            <p key={i} className="text-gray-600">
              {text}
            </p>
          ))}
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default TextBilde;
