import React from "react";
import { Phone } from "lucide-react";

interface CallButtonProps {
  lable?: string;
  phoneNumber?: string;
  className?: string;
}

function CallButton(props: CallButtonProps) {
  const { lable, phoneNumber, className } = props;

  const handelCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button className={className} onClick={handelCall}>
      <Phone size={24} />
      {lable}
    </button>
  );
}

export default CallButton;
