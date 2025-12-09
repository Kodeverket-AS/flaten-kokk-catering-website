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
}

const Produkter: React.FC<ProdukterProps> = ({ 
  producers = [], 
  title = "Lokale produsenter vi samarbeider med" 
}) => {
  const displayProducers = producers.length > 0 
    ? producers 
    : [
        { id: 1, name: "Lokal produsent 1", location: "Bergen", productType: "Grønnsaker" },
        { id: 2, name: "Lokal produsent 2", location: "Vestlandet", productType: "Kjøtt" },
        { id: 3, name: "Lokal produsent 3", location: "Bergen", productType: "Fisk" },
        { id: 4, name: "Lokal produsent 4", location: "Vestlandet", productType: "Meieriprodukter" },
      ];

  return (
    <section className="wrapper-content">
      <div className="flex flex-col gap-8">
        <h2 className="text-center">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducers.map((producer) => (
            <div
              key={producer.id}
              className="flex flex-col gap-4 bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full aspect-square bg-gray-100">
                <Image
                  src="/icons/produkt.png"
                  alt={producer.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                {producer.productType && (
                  <span className="text-sm text-amber-600 font-medium">
                    {producer.productType}
                  </span>
                )}
                <h3 className="font-semibold text-lg">{producer.name}</h3>
                {producer.location && (
                  <p className="text-gray-500 text-sm">{producer.location}</p>
                )}
                {producer.description && (
                  <p className="text-gray-600 text-sm">{producer.description}</p>
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

