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
      <div className={`flex flex-col md:flex-row items-center gap-10 w-full ${bgColor} ${reverse ? "md:flex-row-reverse" : ""}`}>
        <div className="flex flex-col text-center md:text-left  gap-8">
          <h2 className="font-semibold text-gray-800">{title}</h2>
          {paragraphArray.map((text, index) => (
            <p key={index} className="text-gray-600">
              {text}
            </p>
          ))}
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={480}
            height={319}
            className="rounded-[24px] object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default TextBilde;
