import clsx from "clsx";

type SectionHeaderProps = {
	eyebrow: string;
	title: string;
	description?: string;
	align?: "left" | "center";
	className?: string;
};

export default function SectionHeader({
	eyebrow,
	title,
	description,
	align = "center",
	className,
}: SectionHeaderProps) {
	return (
		<div
			className={clsx(
				"max-w-3xl",
				align === "center" ? "mx-auto text-center" : "text-left",
				className,
			)}
		>
			<span className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm">
				{eyebrow}
			</span>

			<h2 className="text-4xl md:text-5xl font-bold mt-6">
				{title}
			</h2>

			{description && (
				<p className="text-zinc-300 text-lg mt-6">
					{description}
				</p>
			)}
		</div>
	);
}