"use client";

import React from "react";
import Button from "@/components/ui/buttons/Button";

type BottomCTAProps = {
  title?: string;
  description?: string;
  buttonText?: string;
};

const BottomCTA: React.FC<BottomCTAProps> = ({
  title = "Klar for en uforglemmelig matopplevelse?",
  description = "Kontakt oss i dag for et uforpliktende tilbud tilpasset din anledning.",
  buttonText = "Bestill kokk i dag",
}) => {

  return (
    <div className="wrapper-bg-stone">
      <div className="wrapper-content">
        <section className="w-full h-full flex items-center justify-center gap-8">
          <div className="flex flex-col self-center gap-8">
            <div>
              <h2 className="text-center">{title}</h2>
              <p className="text-center text-md text-gray-600">{description}</p>
            </div>

            <div className="flex justify-center w-full">
              <Button
                href="/Bestilling"
                variant="primary"
                ariaLabel={buttonText}
                className="rounded-lg"
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BottomCTA;
