import React from "react";
import Image from "next/image";

interface TextBildeHistorieProps {
  title: string;
  paragraphs: string | string[];
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean;
  bgColor?: string;
}

const IMAGE_WIDTH = 480;
const IMAGE_HEIGHT = 319;

const TextBildeHistorie: React.FC<TextBildeHistorieProps> = ({
  title,
  paragraphs,
  imageSrc,
  imageAlt = "",
  reverse = false,
  bgColor = "",
}) => {
  const paragraphArray = Array.isArray(paragraphs) ? paragraphs : [paragraphs];

  const containerClasses = [
    "flex flex-col md:flex-row items-center gap-10 w-full",
    bgColor,
    reverse ? "lg:flex-row-reverse" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="wrapper-content">
      <div className={containerClasses}>
        <div className="flex flex-col text-center md:text-left gap-8 order-2 lg:order-none">
          <h3 className="font-semibold text-gray-800">{title}</h3>
          {paragraphArray.map((text) => (
            <p key={`${title}-${text.slice(0, 30)}`} className="text-gray-600">
              {text}
            </p>
          ))}
        </div>

        <div className={`flex justify-center order-1 lg:order-none ${reverse ? "lg:order-2" : ""} flex-shrink-0`}>
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            className="rounded-[24px] object-cover flex-shrink-0"
            style={{ width: `${IMAGE_WIDTH}px`, height: `${IMAGE_HEIGHT}px`, minWidth: `${IMAGE_WIDTH}px`, minHeight: `${IMAGE_HEIGHT}px` }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default TextBildeHistorie;

