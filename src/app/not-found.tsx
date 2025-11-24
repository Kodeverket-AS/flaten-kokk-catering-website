"Use client";
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl  text-text mb-4">404</h1>

      <h2 className="!text-lg md:!text-2xl mb-6">
        Beklager. Siden du ser etter eksisterer ikke.
      </h2>

      <Link
        href="/"
        className=" button-text transition-colors cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap bg-amber-500 text-neutral-900 hover:bg-amber-700 hover:text-white rounded-lg py-3 px-6"
      >
        <Home size={20} />
        Hjem
      </Link>
    </main>
  );
}
