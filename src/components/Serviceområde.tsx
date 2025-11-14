import React from "react";
import { MapPin } from "lucide-react";

const Serviceområde: React.FC = () => {
  return (
    <div className="wrapper-content flex flex-col gap-8">
      <h2>Serviceområde</h2>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <MapPin size={46} />
          <div className="flex flex-col items-center justify-center gap-2">
            <h3>Serverer hele Østlandet</h3>
            <p>
              Oslo, Akershus og omkringliggende områder. Kontakt oss for andre
              lokasjoner.
            </p>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Serviceområde;
