"use client";

import clsx from "clsx";
import { ReactNode } from "react";
import { scrollToSection } from "@/utils/scrollToSection";

type ButtonProps = {
  children: ReactNode;
  sectionId?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function Button({
  children,
  sectionId,
  onClick,
  variant = "primary",
  size = "md",
  className,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-2xl cursor-pointer",

    {
      "px-5 py-3 text-sm": size === "sm",
      "px-7 py-4 text-base": size === "md",
      "px-8 py-5 text-lg": size === "lg",

      "bg-gradient-to-r from-[#D4AF37] to-[#E6C766] text-black hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,.35)]":
        variant === "primary",

      "border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black":
        variant === "secondary",
    },

    className
  );

  const handleClick = () => {
    if (sectionId) {
      scrollToSection(sectionId);
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <button type="button" onClick={handleClick} className={classes}>
      {children}
    </button>
  );
}