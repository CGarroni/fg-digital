// "use client";

// import clsx from "clsx";
// import { ReactNode } from "react";
// import { scrollToSection } from "@/utils/scrollToSection";

// type PrototypeButtonProps = {
//   children: ReactNode;
//   sectionId?: string;
//   onClick?: () => void;
//   type?: "button" | "submit" | "reset";
//   variant?: "primary" | "secondary";
//   fullWidth?: boolean;
//   disabled?: boolean;
//   className?: string;
// };

// export default function PrototypeButton({
//   children,
//   sectionId,
//   onClick,
//   type = "button",
//   variant = "primary",
//   fullWidth = false,
//   disabled = false,
//   className,
// }: PrototypeButtonProps) {
//   const classes = clsx(
//     "inline-flex items-center justify-center gap-2 rounded-full font-semibold",
//     "px-7 py-4 text-sm transition duration-300",
//     "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--prototype-primary)",
//     "focus-visible:ring-offset-2 focus-visible:ring-offset-(--prototype-bg)",
//     "active:scale-[0.98]",
//     {
//       "bg-(--prototype-primary) text-black hover:opacity-90":
//         variant === "primary",
//       "border border-(--prototype-border) bg-transparent text-(--prototype-text) hover:border-(--prototype-primary) hover:text-(--prototype-primary)":
//         variant === "secondary",
//       "opacity-60 cursor-not-allowed hover:scale-100": disabled,
//       "w-full": fullWidth,
//     },
//     className
//   );

//   const handleClick = () => {
//     if (disabled) return;

//     if (sectionId) {
//       scrollToSection(sectionId);
//     }

//     onClick?.();
//   };

//   return (
//     <button
//       type={type}
//       onClick={handleClick}
//       className={classes}
//       disabled={disabled}
//       aria-disabled={disabled}
//     >
//       {children}
//     </button>
//   );
// }

"use client";

import clsx from "clsx";
import { ReactNode } from "react";
import { scrollToSection } from "@/utils/scrollToSection";

type BaseProps = {
	children: ReactNode;
	variant?: "primary" | "secondary";
	fullWidth?: boolean;
	disabled?: boolean;
	className?: string;
};

type ScrollButtonProps = BaseProps & {
	kind?: "scroll";
	sectionId: string;
	href?: never;
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
};

type ExternalLinkProps = BaseProps & {
	kind: "external";
	href: string;
	sectionId?: never;
	type?: never;
	onClick?: never;
};

type PrototypeButtonProps = ScrollButtonProps | ExternalLinkProps;

export default function PrototypeButton(props: PrototypeButtonProps) {
	const {
		children,
		variant = "primary",
		fullWidth = false,
		disabled = false,
		className,
	} = props;

	const classes = clsx(
		"inline-flex min-w-[220px] items-center justify-center gap-2 rounded-full font-semibold",
		"h-14 px-7 text-sm text-center transition duration-300",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--prototype-primary)",
		"focus-visible:ring-offset-2 focus-visible:ring-offset-(--prototype-bg)",
		"active:scale-[0.98]",
		{
			"bg-(--prototype-primary) text-black hover:opacity-90":
				variant === "primary",
			"border border-(--prototype-border) bg-transparent text-(--prototype-text) hover:border-(--prototype-primary) hover:text-(--prototype-primary)":
				variant === "secondary",
			"opacity-60 cursor-not-allowed hover:scale-100 pointer-events-none":
				disabled,
			"w-full": fullWidth,
		},
		className,
	);

	if (props.kind === "external") {
		return (
			<a
				href={props.href}
				target="_blank"
				rel="noopener noreferrer"
				className={classes}
				aria-disabled={disabled}
			>
				{children}
			</a>
		);
	}

	const handleClick = () => {
		if (disabled) return;

		scrollToSection(props.sectionId);
		props.onClick?.();
	};

	return (
		<button
			type={props.type ?? "button"}
			onClick={handleClick}
			className={classes}
			disabled={disabled}
			aria-disabled={disabled}
		>
			{children}
		</button>
	);
}
