import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Users, UtensilsCrossed } from "lucide-react";

interface CateringPackage {
  id: number;
  category: string;
  badgeLabel: string;
  title: string;
  description: string;
  guestsRange: string;
  price: string;
  menuType: string[];
  included: string[];
  imageSrc: string;
}

const packages: CateringPackage[] = [
  {
    id: 1,
    category: "Bryllup",
    badgeLabel: "Bryllup",
    title: "Elegant Bryllupsmeny",
    description: "Komplett bryllupsmeny med treretters middag og bryllupskake",
    guestsRange: "50-200 personer",
    price: "Fra 850 kr/person",
    menuType: ["Vegetar", "Glutenfri tilgjengelig"],
    included: [
      "Velkomstdrink med canapéer",
      "Treretters middag",
      "Bryllupskake",
    ],
    imageSrc: "/package.jpg",
  },
  {
    id: 2,
    category: "Konfirmasjon",
    badgeLabel: "Konfirmasjon",
    title: "Familievennlig Konfirmasjon",
    description: "Festlig konfirmasjonsmeny som passer for hele familien",
    guestsRange: "20-80 personer",
    price: "Fra 550 kr/person",
    menuType: ["Vegetar", "Barnemenyer"],
    included: [
      "Buffet med varme og kalde retter",
      "Friske salater og tilbehør",
      "Dessertbord med kaker og frukt",
    ],
    imageSrc: "/package.jpg",
  },
  {
    id: 3,
    category: "Forretning",
    badgeLabel: "Forretning",
    title: "Business Lunch Premium",
    description:
      "Profesjonell catering for møter og forretningsarrangementer",
    guestsRange: "10-100 personer",
    price: "Fra 395 kr/person",
    menuType: ["Vegetar", "Glutenfri", "Lav karbo"],
    included: [
      "Sesongbasert hovedrett",
      "Varme og kalde sideretter",
      "Dessert med kaffe/te",
    ],
    imageSrc: "/package.jpg",
  },
  {
    id: 4,
    category: "Jubileum",
    badgeLabel: "Jubileum",
    title: "Intim Dinnerparty",
    description: "Personlig matopplevelse for mindre selskaper hjemme",
    guestsRange: "2-4 personer",
    price: "Fra 650 kr/person",
    menuType: ["Vegetar", "Sesongbasert"],
    included: [
      "Eksklusiv velkomstdrink",
      "Kokk tilberedet meny hjemme hos deg",
      "Sesongens dessert",
    ],
    imageSrc: "/package.jpg",
  },
  {
    id: 5,
    category: "Jubileum",
    badgeLabel: "Jubileum",
    title: "Eksklusiv Jubileumsmiddag",
    description: "Raffinert meny for spesielle milepæler og jubileer",
    guestsRange: "10-60 personer",
    price: "Fra 750 kr/person",
    menuType: ["Vegetar", "Vegansk"],
    included: [
      "Tre-retters gourmetmeny",
      "Signaturretter fra kokken",
      "Champagne eller musserende drikke",
    ],
    imageSrc: "/package.jpg",
  },
  {
    id: 6,
    category: "Forretning",
    badgeLabel: "Forretning",
    title: "Business Lunch Premium",
    description:
      "Profesjonell catering for møter og forretningsarrangementer",
    guestsRange: "10-100 personer",
    price: "Fra 395 kr/person",
    menuType: ["Vegetar", "Glutenfri", "Lav karbo"],
    included: [
      "Varme lunsjalternativer",
      "Sunn snacks og tilbehør",
      "Sesongens dessert og kaffe",
    ],
    imageSrc: "/package.jpg",
  },
];

const CateringPackages: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Alle pakker");

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(packages.map((item) => item.category)));
    return ["Alle pakker", ...uniqueCategories];
  }, []);

  const visiblePackages = useMemo(() => {
    if (activeCategory === "Alle pakker") {
      return packages;
    }

    return packages.filter((pkg) => pkg.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="wrapper-content ">
      <div className="flex flex-col items-center">
        <h2 className="text-center">Våre cateringpakker</h2>

        <div className="flex flex-wrap justify-center gap-3 ">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border border-amber-500 px-5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-amber-500 text-white"
                    : "bg-white text-amber-700 hover:bg-amber-100"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {visiblePackages.map((pkg) => (
          <article
            key={pkg.id}
            className="relative flex h-full flex-col overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="relative h-[250px] w-full overflow-hidden rounded-t-[24px]">
              <Image
                src={pkg.imageSrc}
                alt={pkg.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-full w-full object-cover"
                priority={false}
              />
              <span className="absolute left-4 top-4 flex items-center gap-2 rounded-lg bg-amber-700 px-2 py-1 text-[12px] font-medium text-white leading-[130%]">
                {pkg.badgeLabel}
              </span>
            </div>

            <div className="flex flex-1 flex-col px-6 py-8">
              <header className="space-y-3">
                <p className="title">
                  {pkg.title}
                </p>
                <div className="flex items-center gap-6 text-sm text-neutral-700">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-amber-700" />
                    <span>{pkg.guestsRange}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UtensilsCrossed className="h-4 w-4 text-amber-700" />
                    <span>{pkg.price}</span>
                  </div>
                </div>
                <p className="text-left text-base font-normal leading-[130%] text-neutral-700">
                  {pkg.description}
                </p>
              </header>

              <div className="mt-4 flex flex-wrap gap-2">
                {pkg.menuType.map((item) => (
                  <span
                    key={item}
                    className="rounded bg-gray-200 px-2 py-1 text-xs font-medium text-neutral-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-3 text-left text-sm text-neutral-900">
                <span className="font-medium">Inkludert:</span>
                <ul className="space-y-2">
                  {pkg.included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-700">
                      <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-amber-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                className="mt-8 w-full rounded-lg bg-amber-500 py-3 px-6 text-sm font-semibold  transition-colors hover:bg-amber-700 hover:text-white flex items-center justify-center gap-2"
              >
                Velg denne pakken
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CateringPackages;
