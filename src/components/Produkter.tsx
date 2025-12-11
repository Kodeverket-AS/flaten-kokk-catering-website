import React from "react";
import Image from "next/image";

export interface Producer {
  id: number;
  name: string;
  location?: string;
  productType?: string;
  description?: string;
}

interface ProdukterProps {
  producers?: Producer[];
  title?: string;
  description?: string;
}

const Produkter: React.FC<ProdukterProps> = ({ 
  producers = [], 
  title = "Lokale produsenter vi samarbeider med",
  description = "Vi setter pris på å samarbeide med lokale produsenter og leverandører i Bergen og Vestlandet. Dette sikrer ferske, sesongbaserte råvarer av høy kvalitet og støtter det lokale næringslivet."
}) => {
  const displayProducers = producers.length > 0 
    ? producers 
    : [
        { 
          id: 1, 
          name: "Lokal produsent 1", 
          location: "Bergen", 
          productType: "Grønnsaker",
          description: "Ferske, økologiske grønnsaker dyrket lokalt i Bergen-området."
        },
        { 
          id: 2, 
          name: "Lokal produsent 2", 
          location: "Vestlandet", 
          productType: "Kjøtt",
          description: "Kvalitetskjøtt fra lokale gårder med fokus på dyrevelferd og bærekraft."
        },
        { 
          id: 3, 
          name: "Lokal produsent 3", 
          location: "Bergen", 
          productType: "Fisk",
          description: "Fersk fisk og sjømat fra lokale fiskere langs kysten."
        },
        { 
          id: 4, 
          name: "Lokal produsent 4", 
          location: "Vestlandet", 
          productType: "Meieriprodukter",
          description: "Tradisjonelle meieriprodukter fra lokale gårder i regionen."
        },
      ];

  return (
    <section className="wrapper-content">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-center">{title}</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {displayProducers.map((producer) => (
            <div
              key={producer.id}
              className="flex flex-col bg-white rounded-[24px] overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full aspect-square bg-gradient-to-br from-amber-50 to-stone-100 overflow-hidden">
                <Image
                  src="/icons/produkt.png"
                  alt={producer.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                {producer.productType && (
                  <span className="text-sm text-amber-600 font-semibold uppercase tracking-wide">
                    {producer.productType}
                  </span>
                )}
                <h3 className="font-semibold text-xl text-neutral-900 leading-tight">
                  {producer.name}
                </h3>
                {producer.location && (
                  <div className="flex items-center gap-2 text-gray-500">
                    <Image
                      src="/icons/lucide_map-pin.svg"
                      alt="Lokasjon"
                      width={16}
                      height={16}
                      className="opacity-60"
                    />
                    <p className="text-sm font-medium">{producer.location}</p>
                  </div>
                )}
                {producer.description && (
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">
                    {producer.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Produkter;

