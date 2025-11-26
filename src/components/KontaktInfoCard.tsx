import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  CreditCard,
  LucideIcon,
} from "lucide-react";
import Button from "./ui/buttons/Button";

interface KontaktInfoCardProps {
  phone: string;
  phoneInfo: string;
  email: string;
  mailInfo: string;
  location: string;
  locationInfo: string;
}

interface BookingInfoProps {
  varsel: string;
  varselInfo: string;
  personer: string;
  personerInfo: string;
  forskudd: string;
  forskuddInfo: string;
}

interface CombineProps extends KontaktInfoCardProps, BookingInfoProps {}

interface InfoItemData {
  icon: LucideIcon;
  title: string;
  info: string;
}

interface CardProps {
  title: string;
  items: InfoItemData[];
}

const Card: React.FC<CardProps> = ({ title, items }) => (
  <div className="max-w-[308px] p-10 rounded-3xl border border-gray-200 flex flex-col gap-6">
    <h4 className="">{title}</h4>
    {items.map(({ icon: Icon, title, info }, index) => (
      <div key={index} className="flex items-center gap-2">
        <Icon size={24} />
        <div>
          <p className="font-medium leading-[130%]">{title}</p>
          <p className="text-xs leading-[130%]">{info}</p>
        </div>
      </div>
    ))}
  </div>
);

function KontaktInfoCard(props: CombineProps) {
  return (
    <div className="wrapper-component">
      <div className="flex flex-col justify-center items-start gap-4">
        <Card
          title="Kontaktinformasjon"
          items={[
            { icon: Phone, title: props.phone, info: props.phoneInfo },
            { icon: Mail, title: props.email, info: props.mailInfo },
            { icon: MapPin, title: props.location, info: props.locationInfo },
          ]}
        />

        <Card
          title="Booking info"
          items={[
            { icon: Clock, title: props.varsel, info: props.varselInfo },
            { icon: Users, title: props.personer, info: props.personerInfo },
            {
              icon: CreditCard,
              title: props.forskudd,
              info: props.forskuddInfo,
            },
          ]}
        />

        <div className="max-w-[308px] p-10 rounded-3xl border border-gray-200 flex flex-col justify-center items-center gap-6">
          <p className="font-medium text-[22px] leading-[130%] text-center">
            Foretrekker telefon?
          </p>
          <p className="leading-[130%] text-center">
            Ring meg for personlig rådgiving og skreddersydde løsninger
          </p>

          <Button
            variant="primary"
            onClick={() => {
              window.location.href = "tel:12345678";
            }}
            className="w-full"
          >
            <Phone size={24} />
            Ring nå
          </Button>
        </div>
      </div>
    </div>
  );
}

export default KontaktInfoCard;
