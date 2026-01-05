import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface Producer {
  id: number;
  name: string;
  location?: string;
  productType?: string;
  description?: string;
  link?: string;
}

interface ProdukterProps {
  producers?: Producer[];
  title?: string;
  description?: string;
}

const Produkter: React.FC<ProdukterProps> = ({
  producers = [],
  title = "Lokale produsenter vi samarbeider med",
  description = "Vi setter pris på å samarbeide med lokale produsenter og leverandører i Bergen og Vestlandet. Dette sikrer ferske, sesongbaserte råvarer av høy kvalitet og støtter det lokale næringslivet.",
}) => {
  const displayProducers =
    producers.length > 0
      ? producers
      : [
          {
            id: 1,
            name: "Lokal produsent 1",
            location: "Bergen",
            productType: "Grønnsaker",
            description:
              "Ferske, økologiske grønnsaker dyrket lokalt i Bergen-området.",
            link: "https://www.myrdalgard.no/",
          },
          {
            id: 2,
            name: "Lokal produsent 2",
            location: "Vestlandet",
            productType: "Kjøtt",
            description:
              "Kvalitetskjøtt fra lokale gårder med fokus på dyrevelferd og bærekraft.",
            link: "https://www.myrdalgard.no/",
          },
          {
            id: 3,
            name: "Lokal produsent 3",
            location: "Bergen",
            productType: "Fisk",
            description:
              "Fersk fisk og sjømat fra lokale fiskere langs kysten.",
            link: "https://www.myrdalgard.no/",
          },
          {
            id: 4,
            name: "Lokal produsent 4",
            location: "Vestlandet",
            productType: "Meieriprodukter",
            description:
              "Tradisjonelle meieriprodukter fra lokale gårder i regionen.",
            link: "https://www.myrdalgard.no/",
          },
        ];

  return (
    <div className="wrapper-bg-stone">
      <section className="wrapper-content">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-center">{title}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {displayProducers.map((producer) => {
              const CardContent = (
                <>
                  <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-full lg:h-auto lg:aspect-square flex-shrink-0 lg:flex-shrink bg-gradient-to-br from-amber-50 to-stone-100 overflow-hidden rounded-lg lg:rounded-none self-center lg:self-stretch ml-3 md:ml-4 lg:ml-0">
                    <Image
                      src="/icons/produkt.png"
                      alt={producer.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 25vw"
                    />
                  </div>
                  <div className="p-4 md:p-6 lg:p-6 flex flex-col gap-2 md:gap-3 flex-1">
                    {producer.productType && (
                      <span className="text-xs md:text-sm text-amber-600 font-semibold uppercase tracking-wide">
                        {producer.productType}
                      </span>
                    )}
                    <h3 className="font-semibold text-lg md:text-xl text-neutral-900 leading-tight">
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
                        <p className="text-sm font-medium">
                          {producer.location}
                        </p>
                      </div>
                    )}
                    {producer.description && (
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed mt-1">
                        {producer.description}
                      </p>
                    )}
                  </div>
                </>
              );

              const cardClasses =
                "flex flex-row md:flex-row lg:flex-col items-center bg-white rounded-[24px] overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1";

              if (producer.link) {
                const isExternal =
                  producer.link.startsWith("http://") ||
                  producer.link.startsWith("https://");

                if (isExternal) {
                  return (
                    <a
                      key={producer.id}
                      href={producer.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${cardClasses} cursor-pointer`}
                    >
                      {CardContent}
                    </a>
                  );
                } else {
                  return (
                    <Link
                      key={producer.id}
                      href={producer.link}
                      className={`${cardClasses} cursor-pointer`}
                    >
                      {CardContent}
                    </Link>
                  );
                }
              }

              return (
                <div key={producer.id} className={cardClasses}>
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Produkter;
