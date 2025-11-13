import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Users, UtensilsCrossed } from "lucide-react";

export interface PackageItem {
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

interface PackagesProps {
  items: PackageItem[];
  title?: string;
  showFilters?: boolean;
}

const Packages: React.FC<PackagesProps> = ({ items, title = "Våre cateringpakker", showFilters = true }) => {
  const [activeCategory, setActiveCategory] = useState<string>("Alle pakker");

  const categories = useMemo(() => {
    if (!showFilters) {
      return [];
    }
    const uniqueCategories = Array.from(new Set(items.map((item) => item.category)));
    return ["Alle pakker", ...uniqueCategories];
  }, [items, showFilters]);

  const visiblePackages = useMemo(() => {
    if (!showFilters || activeCategory === "Alle pakker") {
      return items;
    }

    return items.filter((pkg) => pkg.category === activeCategory);
  }, [activeCategory, items, showFilters]);

  return (
    <section className="wrapper-content ">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-center">{title}</h2>

        {showFilters && (
          <div className="flex flex-wrap justify-center gap-3 ">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-[8px] border border-amber-700 px-6 py-3 flex items-center justify-center gap-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-amber-700 text-white"
                      : "bg-white  hover:border-none hover:bg-amber-500"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
        {visiblePackages.map((pkg) => (
          <article
            key={pkg.id}
            className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-lg md:w-[calc(50%-1rem)] xl:w-[calc(33.333%-1.25rem)]"
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
                <p className="title-packages">
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

                <div className="mt-5 flex flex-col gap-3 text-left text-sm text-neutral-900 lg:max-h-0 lg:opacity-0 lg:transition-[max-height,opacity,margin] lg:duration-300 lg:ease-out lg:group-hover:mt-5 lg:group-hover:max-h-[220px] lg:group-hover:opacity-100">
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
                  className="mt-8 w-full rounded-lg bg-amber-500 py-3 px-6 text-sm font-semibold transition-colors hover:bg-amber-700 hover:text-white flex items-center justify-center gap-2"
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

export default Packages;
