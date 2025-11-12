import React from "react";
import Link from "next/link";

interface IntroProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

const Intro: React.FC<IntroProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="wrapper-content">
      <div className="flex flex-col items-center justify-center text-center gap-8 ">
        <h2 className="text-center">{title}</h2>
        <div className="w-full">
          <p className="mx-auto text-center  max-w-[632px]">
            {description}
          </p>
        </div>
        {buttonText && buttonLink && (
          <div className="flex justify-center">
            <Link href={buttonLink}>
              <button className="w-[182px] h-[45px] py-3 px-6 gap-2 my-3 rounded-lg border border-amber-700 hover:bg-amber-700 hover:text-white transition flex items-center justify-center text-center">
                {buttonText}
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Intro;

