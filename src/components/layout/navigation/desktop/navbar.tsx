import Link from "next/link";

export function NavBarDesktop() {
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

      <ul className="flex space-x-6 ml-auto self-center text-gray-700 font-medium">
        {pages.map((page) => (
          <li key={page.name}>
            <Link
              href={page.path}
              className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-green-100 hover:text-green-700 cursor-pointer block relative z-10"
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
