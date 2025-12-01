import React from "react";
import Button from "@/components/ui/buttons/Button";

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
            <Button
              variant="outline"
              href={buttonLink}
              className="my-3"
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Intro;

