"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  href,
  type = "button",
  className = "",
  ariaLabel,
}) => {
  const router = useRouter();

  const baseClasses = "button-text transition-colors cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap";

  const variantClasses = {
    primary: "bg-amber-500 text-neutral-900 hover:bg-amber-700 hover:text-white rounded-[8px] pt-3 pb-3 px-6",
    secondary: "bg-white border border-amber-700 text-neutral-900 hover:bg-amber-700 hover:text-white rounded-[8px] pt-3 pb-3 px-6 text-center",
    outline: "border border-amber-700 text-neutral-900 hover:bg-amber-700 hover:text-white rounded-[8px] pt-3 pb-3 px-6 text-center",
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      router.push(href);
    }
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href && !onClick) {
    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;

