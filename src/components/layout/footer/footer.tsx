import { Phone, Mail, ChefHat, MapPin, Clock } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <div className="wrapper-footer">
      <footer className="w-full py-20">
        <div className="flex flex-col justify-between md:flex-row gap-y-10 md:gap-x-1 text-text">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <ChefHat className="rotate-45" />
              <h3 className="text-2xl lg:text-3xl font-medium pb-2">
                Flaten Kokk og Catering
              </h3>
            </div>
            <p className="sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-1xl">
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
                className="hover:text-pink-600 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-600 transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Hurtiglenker</h3>
            <ul className="text-base space-y-2 mb-3">
              <li>
                <a className="links-hover" href="#">
                  Hjem
                </a>
              </li>
              <li>
                <a className="links-hover" href="#">
                  Kokkeoppdrag
                </a>
              </li>
              <li>
                <a className="links-hover" href="#">
                  Catering
                </a>
              </li>
              <li>
                <a className="links-hover" href="#">
                  Airbnb Events
                </a>
              </li>
              <li>
                <a className="links-hover" href="#">
                  Om kokken
                </a>
              </li>
              <li>
                <a className="links-hover" href="#">
                  Bestilling
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Kontakt</h3>

            <a
              href="tel:+4712345678"
              className="flex items-center gap-2 links-hover"
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

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <div className="flex flex-col">
                <span>Man-Fre: 09:00-18:00</span>
                <span>Lør-Søn: Etter avtale</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-1 border-black dark:border-white mt-3  "></div>
        <div className="mt-8 flex justify-between text-sm ">
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
