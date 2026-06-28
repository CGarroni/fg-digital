"use client";

import clsx from "clsx";
import { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({
  className,
  children,
  ...props
}: SelectProps) {
  return (
    <select
      className={clsx(
        `
        w-full
        bg-black/30
        border
        border-white/10
        rounded-xl
        p-4
        outline-none
        text-white
        transition-all
        duration-300
        cursor-pointer
        focus:border-[#D4AF37]
        focus:ring-2
        focus:ring-[#D4AF37]/20
        `,
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}