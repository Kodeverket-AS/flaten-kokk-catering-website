

import React from "react";
import Button from "@/components/ui/buttons/Button";

const MøtKokken: React.FC = () => {
  return (
    <div className="wrapper-content">
      <div className="flex items-center justify-center">
        <div className="flex-col text-center space-y-4">
          <h2 className="text-center">Møt Kokken</h2>
          <div className="w-full">
            <p className="mx-auto text-center text-gray-600">
              Med over 15 års erfaring fra kjøkkenet har jeg jobbet i noen av Norges beste restauranter. 
              Min lidenskap er å skape unike matopplevelser som gjør din anledning spesiell og minneverdig. 
              Jeg tror på å bruke de beste lokale ingrediensene og kombinere tradisjonelle teknikker med moderne presentasjon. 
              Hver rett er laget med kjærlighet og oppmerksomhet på detaljer.
            </p>
          </div>
          <Button href="/OmKokken" variant="primary" className="my-3">
              Les mer om meg!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MøtKokken;