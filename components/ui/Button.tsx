"use client";

import clsx from "clsx";
import { ReactNode } from "react";
import { scrollToSection } from "@/utils/scrollToSection";
import Spinner from "./Spinner";

type ButtonProps = {
	children: ReactNode;

	// Comportamento
	sectionId?: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";

	// Aparência
	variant?: "primary" | "secondary";
	size?: "sm" | "md" | "lg";
	fullWidth?: boolean;

	// Estado
	disabled?: boolean;
	loading?: boolean;
	loadingText?: string;

	// Conteúdo
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;

	className?: string;
};

export default function Button({
	children,
	sectionId,
	onClick,
	type = "button",
	variant = "primary",
	size = "md",
	fullWidth = false,
	disabled = false,
	loading = false,
	loadingText = "Enviando...",
	leftIcon,
	rightIcon,
	className,
}: ButtonProps) {
	const classes = clsx(
		// Base
		"inline-flex items-center justify-center gap-2 rounded-2xl font-semibold cursor-pointer",
		"transition-[transform,box-shadow,background-color,border-color,color]",
		"duration-300",
		"focus-visible:outline-none",
		"focus-visible:ring-2",
		"focus-visible:ring-[#D4AF37]",
		"focus-visible:ring-offset-2",
		"focus-visible:ring-offset-[#050505]",
		"active:scale-[0.98]",

		// Tamanho
		{
			"px-5 py-3 text-sm": size === "sm",
			"px-7 py-4 text-base": size === "md",
			"px-8 py-5 text-lg": size === "lg",
		},

		// Variantes
		{
			"bg-gradient-to-r from-[#D4AF37] to-[#E6C766] text-black shadow-[0_6px_18px_rgba(212,175,55,.18)] hover:scale-[1.02] hover:shadow-[0_0_26px_rgba(212,175,55,.35)]":
				variant === "primary",

			"border border-white/15 bg-transparent text-white hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5":
				variant === "secondary",
		},

		// Estados
		{
			"opacity-60 cursor-not-allowed hover:scale-100": disabled,
			"opacity-60 cursor-progress hover:scale-100": loading,
		},

		// Layout
		{
			"w-full": fullWidth,
		},

		className,
	);

	const handleClick = () => {
		if (disabled || loading) return;

		if (sectionId) {
			scrollToSection(sectionId);
		}

		onClick?.();
	};

	return (
		<button
			type={type}
			onClick={handleClick}
			className={classes}
			disabled={disabled || loading}
			aria-disabled={disabled || loading}
			aria-busy={loading}
		>
			{loading ? (
				<>
					<Spinner size="sm" />
					<span>{loadingText}</span>
				</>
			) : (
				<>
					{leftIcon && (
						<span className="flex items-center">
							{leftIcon}
						</span>
					)}

					<span>{children}</span>

					{rightIcon && (
						<span className="flex items-center">
							{rightIcon}
						</span>
					)}
				</>
			)}
		</button>
	);
}