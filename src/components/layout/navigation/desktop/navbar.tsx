"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBarDesktop() {
  const pathname = usePathname();
  const pages = [
    { name: "Hjem", path: "/" },
    { name: "Kokkeoppdrag", path: "/PrivatKokk" },
    { name: "Catering", path: "/Catering" },
    { name: "Airbnb Events", path: "/AirbnbEvents" },
    { name: "Om kokken", path: "/OmKokken" },
    { name: "Bestilling", path: "/Bestilling" },
  ];

  return (
    <nav className="flex h-20 w-full  mx-auto">
      <h1 className="text-gray-700 self-center font-bold text-2xl">
        FlatenKokk og Catering
      </h1>

      <ul className="flex 2xl:space-x-6 space-x-3 ml-auto self-center text-gray-700 font-medium items-center">
        {pages.map((page) => {
          const isActive = pathname === page.path;
          const isBestilling = page.name === "Bestilling";
          
          if (isBestilling) {
            return (
              <li key={page.name}>
                <Link
                  href={page.path}
                  className="button-text pt-2 pb-2 px-7 gap-2 rounded-lg bg-amber-500 hover:text-white hover:bg-amber-700 transition-all duration-200 cursor-pointer block relative z-10"
                >
                  {page.name}
                </Link>
              </li>
            );
          }
          
          return (
          <li key={page.name}>
            <Link
              href={page.path}
                className={`px-3 py-2 rounded-lg transition-all duration-200 hover:bg-amber-500 cursor-pointer block relative z-10 ${isActive ? 'text-amber-700' : ''}`}
            >
              {page.name}
            </Link>
          </li>
          );
        })}
      </ul>
    </nav>
  );
}
