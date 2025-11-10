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

const IMAGE_WIDTH = 524;
const IMAGE_HEIGHT = 242;

const TextBilde: React.FC<TextBildeProps> = ({
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
    reverse ? "md:flex-row-reverse" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="wrapper-content">
      <div className={containerClasses}>
        <div className="flex flex-col text-center md:text-left gap-8 order-2 md:order-none">
          <h3 className="text-center">{title}</h3>
          {paragraphArray.map((text) => (
            <p key={`${title}-${text.slice(0, 30)}`} className="text-gray-600">
              {text}
            </p>
          ))}
        </div>

        <div className={`w-full lg:w-1/2 flex items-start object-top order-1 md:order-none ${reverse ? "md:order-2" : ""}`}>
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            className="rounded-[24px] object-cover  object-top w-full"
            style={{ height: `${IMAGE_HEIGHT}px` }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default TextBilde;
