import React from "react";
import Image from "next/image";

interface TextBildeHistorieProps {
  title: string;
  paragraphs: string | string[];
  imageSrc: string;
  imageAlt?: string;
}

const IMAGE_WIDTH = 480;
const IMAGE_HEIGHT = 319;

const TextBildeHistorie: React.FC<TextBildeHistorieProps> = ({
  title,
  paragraphs,
  imageSrc,
  imageAlt = "",
}) => {
  const paragraphArray = Array.isArray(paragraphs) ? paragraphs : [paragraphs];

  return (
    <div className="wrapper-content">
      <div className="flex flex-col lg:flex-row items-center gap-10 w-full">
        <div className="flex flex-col text-justify md:text-left gap-8 order-2 lg:order-none">
          <h2 className="text-center">{title}</h2>
          {paragraphArray.map((text) => (
            <p key={`${title}-${text.slice(0, 30)}`} className="text-gray-600">
              {text}
            </p>
          ))}
        </div>

        <div className="flex justify-center order-1 lg:order-none flex-shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            className="rounded-[24px] object-cover flex-shrink-0 w-full  h-auto  "
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default TextBildeHistorie;

