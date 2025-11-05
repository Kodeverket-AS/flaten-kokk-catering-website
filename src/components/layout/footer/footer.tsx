import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const links = [
  { label: "Hjem", path: "/" },
  { label: "Kokkeoppdrag", path: "/PrivatKokk" },
  { label: "Catering", path: "/Catering" },
  { label: "Airbnb Events", path: "/AirbnbEvents" },
  { label: "Om kokken", path: "/OmKokken" },
  { label: "Bestilling", path: "/Bestilling" },
];

export function Footer() {
  return (
    <div className="wrapper-footer">
      <footer className="py-20 px-4 xl:px-0 select-none">
        <div className="flex flex-col gap-y-10 text-text lg:hidden">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 items-center select-none justify-center">
              <Image
                src="/FooterLogo.png"
                alt="logo"
                width={100}
                height={100}
                draggable={false}
              />

              <p className="sm:max-w-sm">
                Profesjonell matlagning og catering-tjenester for alle
                anledninger. Vi skaper uforglemmelige matopplevelser som bringer
                mennesker sammen.
              </p>

              <div className="flex gap-6 pt-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-pink-600 hover:text-pink-700 transition-colors nodrag"
                >
                  <FaInstagram className="w-7 h-7" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-blue-600 hover:text-blue-700 transition-colors nodrag"
                >
                  <FaFacebook className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile version */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="title">Hurtiglenker</h4>
              <ul className="text-base space-y-4 mb-3 ">
                {links.map((link) => (
                  <li className="" key={link.label}>
                    <Link
                      href={link.path}
                      className="inline sm:links-hover cursor-pointer nodrag active:text-[#f59e0b] focus:text-[#f59e0b]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="title">Kontakt</h4>

              <a
                href="tel:+4712345678"
                className="flex items-center gap-2 sm:links-hover active:text-[#f59e0b] focus:text-[#f59e0b] nodrag"
                aria-label="Ring oss"
              >
                <Phone className="w-5 h-5" />
                <span>+47 123 45 678</span>
              </a>

              <a
                href="mailto:"
                className="flex items-center gap-2 sm:links-hover active:text-[#f59e0b] focus:text-[#f59e0b] nodrag"
                aria-label="Send oss en epost"
              >
                <Mail className="w-5 h-5" />
                <span>email@example.com</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google maps"
                  className="flex items-center gap-2 sm:links-hover active:text-[#f59e0b] focus:text-[#f59e0b] nodrag"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Serverer hele Østlandet</span>
                </a>
              </div>
              <div className="mt-6 flex flex-col items-start w-full gap-2">
                <h4 className="title">Åpningstider</h4>

                <div className="flex flex-col gap-2 items-start ">
                  <span>Man-Fre: 09:00-18:00</span>
                  <span>Lør-Søn: Etter avtale</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop version */}
        <div className="hidden lg:flex flex-col justify-between lg:flex-row gap-y-10 lg:gap-x-1 ">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <Image
                src="/FooterLogo.png"
                alt="logo"
                width={100}
                height={100}
                draggable={false}
              />
            </div>
            <p className="sm:max-w-sm md:max-w-sm xl:max-w-1xl">
              Profesjonell matlagning og catering-tjenester for alle
              anledninger. Vi skaper uforglemmelige matopplevelser som bringer
              mennesker sammen.
            </p>
            <div className="flex gap-6 pt-2">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className=" hover:text-pink-600 transition-colors nodrag"
              >
                <FaInstagram className="w-7 h-7" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className=" hover:text-blue-600 transition-colors nodrag"
              >
                <FaFacebook className="w-7 h-7" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 pb-4">
            <h4 className="title">Hurtiglenker</h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li className="" key={link.label}>
                  <Link
                    href={link.path}
                    className="inline links-hover cursor-pointer nodrag"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="title">Kontakt</h4>

            <a
              href="tel:+4712345678"
              className="flex items-center gap-2 links-hover nodrag"
              aria-label="Ring oss"
            >
              <Phone className="w-5 h-5" />
              <span>+47 123 45 678</span>
            </a>

            <a
              href="mailto:"
              className="flex items-center gap-2 links-hover"
              aria-label="Send oss en epost"
            >
              <Mail className="w-5 h-5" />
              <span>email@example.com</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google maps"
                className="flex items-center gap-2 links-hover"
              >
                <MapPin className="w-5 h-5" />
                <span>Serverer hele Østlandet</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="title">Åpningstider</h4>

            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6" />
              <div className="flex flex-col">
                <span>Man-Fre: 09:00-18:00</span>
                <span>Lør-Søn: Etter avtale</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-1 border-gray-200  mt-3"></div>
        <div className="mt-8 flex justify-between text-sm text-gray-400 ">
          © {new Date().getFullYear()} Utviklet i regnet av Kodeverket Bergen
          <div className="flex gap-4">
            <a href="#" className="links-hover">
              Personvern
            </a>
            <a href="#" className="links-hover">
              Vilkår
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
