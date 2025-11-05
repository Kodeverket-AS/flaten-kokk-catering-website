import React from "react";
import TextBilde from "./TextBilde";

const Filozofi: React.FC = () => {
  return (
    <div className="flex flex-col ">
        <h2 className="font-semibold text-gray-800 text-center">Min filosofi og tilnærming</h2>
      <TextBilde
        title="Kvalitet først"
        paragraphs={[
          "Jeg bruker kun de beste råvarene fra utvalgte leverandører. Kvalitet kommer alltid foran kvantitet."
        ]}
        imageSrc="/filozofi1.jpg"
        imageAlt="bilde av kokken"
      />
      <TextBilde
        title="Personlig tilpasning"
        paragraphs={[
          "Jeg bruker kun de beste råvarene fra utvalgte leverandører. Kvalitet kommer alltid foran kvantitet."
        ]}
        imageSrc="/filozofi2.jpg"
        imageAlt="bilde av kokken"
        reverse={true}
      />
      <TextBilde
        title="Opplevelse og service"
        paragraphs={[
          "Maten er bare en del av opplevelsen. Jeg fokuserer på hele kundens reise fra første kontakt til siste bitt."
        ]}
        imageSrc="/filozofi3.jpg"
        imageAlt="bilde av kokken"
      />
    </div>
  );
};

export default Filozofi;

