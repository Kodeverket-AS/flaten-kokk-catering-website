"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavBarMobileProps {
  onMenuToggle?: (isOpen: boolean) => void;
}

export function NavBarMobile({ onMenuToggle }: NavBarMobileProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuToggle = (open: boolean) => {
    setMenuOpen(open);
    onMenuToggle?.(open);
  };

  const pages = [
    { name: "Hjem", path: "/" },
    { name: "Kokkeoppdrag", path: "/PrivatKokk" },
    { name: "Catering", path: "/Catering" },
    { name: "Airbnb Events", path: "/AirbnbEvents" },
    { name: "Om kokken", path: "/OmKokken" },
    { name: "Bestilling", path: "/Bestilling" },
  ];

  return (
    <>
      <nav className="flex items-center justify-between h-20 w-full relative">
      {/* Logo / tittel */}
        <h1 className="text-neutral-900 font-bold text-xl lg:text-2xl">
        FlatenKokk og Catering
      </h1>

      {/* Desktop-meny (vises når skjermen er bredere enn 769px) */}
        <ul className="hidden lg:flex space-x-6 text-neutral-900 font-medium">
          {pages.map((page) => {
            const isActive = pathname === page.path;
            return (
          <li key={page.name}>
            <Link
              href={page.path}
                  className={`px-3 py-2 rounded-lg transition-all duration-200 hover:text-amber-700 ${isActive ? 'text-amber-700' : ''}`}
            >
              {page.name}
            </Link>
          </li>
            );
          })}
      </ul>

      {/* Hamburger-knapp (vises på 769px og mindre) */}
      <button
          className="lg:hidden p-2 text-neutral-900 hover:text-amber-700 focus:outline-none"
          onClick={() => handleMenuToggle(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobilmeny (dropdown) */}
      {menuOpen && (
          <div className="absolute top-20 -left-4 -right-4 bg-stone-50 shadow-md lg:hidden rounded-b-xl">
          <ul className="flex flex-col items-center space-y-4 py-6 text-neutral-900 font-medium">
            {pages.map((page) => {
              const isActive = pathname === page.path;
              return (
              <li key={page.name}>
                <Link
                  href={page.path}
                    onClick={() => handleMenuToggle(false)}
                    className={`block px-4 py-2 rounded-lg transition-all duration-200 hover:text-amber-500 active:text-amber-700 ${isActive ? 'text-amber-700' : ''}`}
                >
                  {page.name}
                </Link>
              </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
    </>
  );
}
