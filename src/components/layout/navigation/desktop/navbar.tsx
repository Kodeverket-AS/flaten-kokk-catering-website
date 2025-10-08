export function NavBarDesktop() {
  return (
    <nav className="flex h-20 bg-white w-full px-8">
      {/* Logo */}
      <h1 className="text-gray-700 self-center font-bold text-2xl">
        FlatenKokk og Catering
      </h1>

      <ul className="flex space-x-6 ml-auto self-center text-gray-700 font-medium">
        {[
          "Hjem",
          "Kokkeoppdrag",
          "Catering",
          "Airbnb Events",
          "Om kokken",
          "Bestilling",
        ].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-green-100 hover:text-green-700"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
