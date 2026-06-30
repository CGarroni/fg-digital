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
		"inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-2xl cursor-pointer",

		{
			"px-5 py-3 text-sm": size === "sm",
			"px-7 py-4 text-base": size === "md",
			"px-8 py-5 text-lg": size === "lg",

			"bg-gradient-to-r from-[#D4AF37] to-[#E6C766] text-black hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,.35)]":
				variant === "primary",

			"border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black":
				variant === "secondary",

			"w-full": fullWidth,

			"opacity-60 cursor-not-allowed hover:scale-100": disabled || loading,
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
		>
			{loading ? (
				<>
					<Spinner size="sm" />
					<span>{loadingText}</span>
				</>
			) : (
				children
			)}
		</button>
	);
}
