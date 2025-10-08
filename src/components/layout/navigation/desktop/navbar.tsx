export function NavBarDesktop() {
  return (
    <nav className="flex bg-white w-full ">
        {/* Logo */}
        <h1 className="text-gray-700 fornt-bold text-2xl">
          FlatenKokk og Catering
        </h1>
        
      <ul className="flex  space-x-8 ml-auto self self-center text-gray-700 font-medium">
          <li><a href="#hjem" className="hover:text-amber-600">Hjem</a></li>
          <li><a href="#Kokkeoppdrag" className="hover:text-amber-600">Kokkeoppdrag</a></li>
          <li><a href="#Catering" className="hover:text-amber-600">Catering</a></li>
          <li><a href="#Airbnb Events" className="hover:text-amber-600">Airbnb Events</a></li>
          <li><a href="#Om kokken" className="hover:text-amber-600">Om kokken</a></li>
          <li><a href="#Bestilling" className="hover:text-amber-600">Bestilling</a></li>
        </ul>
    </nav>
  );
}
