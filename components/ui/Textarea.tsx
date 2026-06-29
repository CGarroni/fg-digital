"use client";

import clsx from "clsx";
import { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
	error?: string;
};

export default function Textarea({
	error,
	className,
	...props
}: TextareaProps) {
	return (
  <div>
    <textarea
      className={clsx(
				`
        w-full
        bg-black/30
        border
        
        rounded-xl
        p-4
        outline-none
        text-white
        placeholder:text-zinc-500
        transition-all
        duration-300
        resize-none
        focus:border-[#D4AF37]
        focus:ring-2
        focus:ring-[#D4AF37]/20
        `,
        error
    ? "border-red-500 focus:ring-red-500/20"
    : "border-white/10 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20",
				className,
			)}
			{...props}
		/>

    {error && (
      <p className="mt-2 text-sm text-red-500">
        {error}
      </p>
    )}
  </div>
);
}
