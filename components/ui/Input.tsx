"use client";

import clsx from "clsx";
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	error?: string;
};

export default function Input({ error, className, ...props }: InputProps) {
	return (
		<div>
			<input
				className={clsx(
					`
        w-full
        bg-black/30
        border
        ${error ? "border-red-500" : "border-white/10"}
        rounded-xl
        p-4
        outline-none
        text-white
        placeholder:text-zinc-500
        transition-all
        duration-300
        focus:border-[#D4AF37]
        focus:ring-2
        focus:ring-[#D4AF37]/20
        `,
					className,
				)}
				{...props}
			/>

			{error && <p className="mt-2 text-sm text-red-500">{error}</p>}
		</div>
	);
}
