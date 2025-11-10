"use client";

import React from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

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
              <button
                type="button"
                onClick={() => router.push("/Bestilling")}
                aria-label={buttonText}
                className="bg-amber-500 hover:bg-amber-700  transition rounded-lg flex justify-center items-center w-[171px] h-[45px] py-3 px6 gap-2"
              >
                <span className="whitespace-nowrap text-center">{buttonText}</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BottomCTA;
