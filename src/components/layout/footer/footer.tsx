import Image from "next/image";
import { Phone, Mail, MapPin, Clock, LucideIcon } from "lucide-react";

const CONTACT_INFO = {
  phone: {
    href: "tel:+4712345678",
    label: "+47 123 45 678",
    ariaLabel: "Ring oss",
  },
  email: {
    href: "mailto:post@flatenkokk.no",
    label: "post@flatenkokk.no",
    ariaLabel: "Send oss en epost",
  },
  location: {
    href: "#",
    label: "Serverer hele Vestlandet",
    ariaLabel: "Google maps",
  },
};

const OPENING_HOURS = {
  weekdays: "Man-Fre: 09:00-18:00",
  weekends: "Lør-Søn: Etter avtale",
};

const DESCRIPTION =
  "Profesjonell matlagning og catering-tjenester for alle anledninger. Vi skaper uforglemmelige matopplevelser som bringer mennesker sammen.";

interface ContactLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  ariaLabel: string;
  external?: boolean;
}

const ContactLink: React.FC<ContactLinkProps> = ({
  href,
  icon: Icon,
  label,
  ariaLabel,
  external = false,
}) => (
  <a
    href={href}
    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    className="flex items-center gap-2 links-hover active:text-amber-400 focus:text-amber-500 nodrag"
    aria-label={ariaLabel}
  >
    <Icon className="w-4 h-4 md:w-5 md:h-5" />
    <span>{label}</span>
  </a>
);

const LogoSection: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex flex-col gap-2 ${className}`}>
    <Image
      className="pb-2"
      src="/FooterLogo.png"
      alt="logo"
      width={100}
      height={100}
      draggable={false}
    />
    <p className="text-sm md:text-base max-w-sm">{DESCRIPTION}</p>
  </div>
);

const OpeningHours: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex flex-col gap-4 ${className}`}>
    <h4 className="title">Åpningstider</h4>
    <div className="flex items-center gap-3">
      <Clock className="w-5 h-5 md:w-6 md:h-6" />
      <div className="flex flex-col">
        <span>{OPENING_HOURS.weekdays}</span>
        <span>{OPENING_HOURS.weekends}</span>
      </div>
    </div>
  </div>
);

export function Footer() {
  return (
    <div className="wrapper-footer">
      <footer className="select-none pb-8 ">
        <div className="flex flex-col gap-y-10 text-text py-8">
          <LogoSection className="lg:hidden items-center justify-center" />

          <div className="flex items-start justify-start gap-3 w-full md:flex-row md:justify-evenly lg:justify-between lg:gap-x-1 gap-y-10">
            <LogoSection className="hidden lg:flex items-start flex-1 max-w-sm" />

            <div className="flex flex-col items-start gap-4">
              <h4 className="title">Kontakt</h4>
              <div className="text-sm md:text-base flex flex-col space-y-4 mb-3">
                <ContactLink {...CONTACT_INFO.phone} icon={Phone} />
                <ContactLink {...CONTACT_INFO.email} icon={Mail} />
                <ContactLink
                  {...CONTACT_INFO.location}
                  icon={MapPin}
                  external
                />
              </div>
              <OpeningHours className="md:hidden text-sm md:text-base items-start flex" />
            </div>

            <OpeningHours className="hidden text-sm md:text-base items-start md:flex" />
          </div>
        </div>

        <div className="border-b-1 border-gray-200 mt-3" />
        <div className="mt-3 mx-2 flex justify-between text-xs text-gray-400">
          <a
            className="links-hover"
            href="https://kodeverketbergen.no"
            target="_blank"
            rel="noopener noreferrer"
          >
            © {new Date().getFullYear()} Utviklet i regnet av Kodeverket Bergen
          </a>
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
