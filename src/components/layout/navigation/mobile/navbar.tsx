"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function NavBarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = [
    { name: "Hjem", path: "/" },
    { name: "Kokkeoppdrag", path: "/PrivatKokk" },
    { name: "Catering", path: "/Catering" },
    { name: "Airbnb Events", path: "/AirbnbEvents" },
    { name: "Om kokken", path: "/OmKokken" },
    { name: "Bestilling", path: "/Bestilling" },
  ];

  return (
    <nav className="flex items-center justify-between h-20 bg-white w-full px-6 shadow-sm relative max-w-[1280px] mx-auto">
      {/* Logo / tittel */}
      <h1 className="text-gray-700 font-bold text-xl lg:text-2xl">
        FlatenKokk og Catering
      </h1>

      {/* Desktop-meny (vises når skjermen er bredere enn 769px) */}
      <ul className="hidden lg:flex space-x-6 text-gray-700 font-medium">
        {pages.map((page) => (
          <li key={page.name}>
            <Link
              href={page.path}
              className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-green-100 hover:text-green-700"
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger-knapp (vises på 769px og mindre) */}
      <button
        className="lg:hidden p-2 text-gray-700 hover:text-green-700 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobilmeny (dropdown) */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md lg:hidden">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
            {pages.map((page) => (
              <li key={page.name}>
                <Link
                  href={page.path}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg transition-all duration-200 hover:bg-green-100 hover:text-green-700"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
