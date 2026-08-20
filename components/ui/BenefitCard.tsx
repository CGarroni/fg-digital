"use client";

import { LucideIcon, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface BenefitCardProps {
	icon: LucideIcon;
	title: string;
	description: string;
	result: string;
	index: number;
}

export default function BenefitCard({
	icon: Icon,
	title,
	description,
	result,
	index,
}: BenefitCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.5,
				delay: index * 0.15,
			}}
			viewport={{ once: true }}
			className="
				group
				bg-linear-to-b
				from-[#111111]
				to-[#090909]
				border
				border-[#D4AF37]/10
				rounded-3xl
				p-8
				shadow-[0_8px_30px_rgba(212,175,55,0.04)]
				hover:border-[#D4AF37]/30
				hover:-translate-y-2
				hover:shadow-[0_18px_45px_rgba(212,175,55,0.10)]
				transition-[transform,border-color,box-shadow]
				duration-500
				ease-out
			"
		>
			<div
				className="
					w-14
					h-14
					rounded-2xl
					bg-[#D4AF37]/8
					ring-1
					ring-[#D4AF37]/20
					flex
					items-center
					justify-center
					transition-colors
					duration-300
					group-hover:bg-[#D4AF37]/12
				"
			>
				<Icon
					size={28}
					className="text-[#D4AF37]"
				/>
			</div>

			<h3 className="text-xl md:text-2xl font-semibold mt-7">
				{title}
			</h3>

			<p className="text-base text-zinc-300 mt-5 leading-relaxed">
				{description}
			</p>

			<div className="flex items-center gap-2 mt-8">
				<CheckCircle2
					size={18}
					className="text-[#D4AF37] shrink-0"
				/>

				<p className="text-sm font-medium text-[#F5F5F5]">
					{result}
				</p>
			</div>
		</motion.div>
	);
}