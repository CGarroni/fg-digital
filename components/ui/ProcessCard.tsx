"use client";

import { motion } from "framer-motion";

interface ProcessCardProps {
	number: string;
	title: string;
	description: string;
	index: number;
	isLast?: boolean;
}

export default function ProcessCard({
	number,
	title,
	description,
	index,
	isLast = false,
}: ProcessCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.6,
				delay: index * 0.12,
				ease: "easeOut",
			}}
			viewport={{ once: true }}
			className="
				group
				relative
				bg-linear-to-b
				from-[#111111]
				to-[#090909]
				border
				border-[#D4AF37]/10
				rounded-3xl
				p-8
				shadow-[0_8px_30px_rgba(212,175,55,0.04)]
				hover:-translate-y-2
				hover:border-[#D4AF37]/25
				hover:shadow-[0_18px_45px_rgba(212,175,55,0.10)]
				transition-[transform,border-color,box-shadow]
				duration-500
				ease-out
			"
		>
			{/* Número */}
			<span
				className="
					block
					text-5xl
					font-bold
					text-[#D4AF37]/15
					select-none
				"
			>
				{number}
			</span>

			{/* Conteúdo */}
			<h3 className="text-xl md:text-2xl font-semibold mt-6">
				{title}
			</h3>

			<p className="mt-4 text-base leading-relaxed text-zinc-300">
				{description}
			</p>

			{/* Linha de conexão (desktop) */}
			{!isLast && (
				<div
					className="
						hidden
						md:block
						absolute
						top-14
						-right-8
						w-8
						h-px
						bg-linear-to-r
						from-[#D4AF37]/40
						to-transparent
						pointer-events-none
					"
				/>
			)}
		</motion.div>
	);
}