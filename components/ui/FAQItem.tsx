"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import type { FAQ } from "@/lib/data/faq";

type FAQItemProps = {
	item: FAQ;
};

export default function FAQItem({ item }: FAQItemProps) {
	const [open, setOpen] = useState(false);

	return (
		<div
			className="
				rounded-3xl
				border
				border-[#D4AF37]/10
				bg-linear-to-b
				from-[#111111]
				to-[#090909]
				transition-all
				duration-500
				hover:border-[#D4AF37]/25
			"
		>
			<button
				type="button"
				onClick={() => setOpen(!open)}
				className="
					w-full
					flex
					items-center
					justify-between
					p-6
					text-left
					cursor-pointer
				"
			>
				<h3 className="text-lg font-semibold pr-6">
					{item.question}
				</h3>

				<ChevronDown
					size={22}
					className={clsx(
						"transition-transform duration-300 text-[#D4AF37]",
						open && "rotate-180"
					)}
				/>
			</button>

			<AnimatePresence initial={false}>
				{open && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="overflow-hidden"
					>
						<p
							className="
								px-6
								pb-6
								text-zinc-300
								leading-relaxed
							"
						>
							{item.answer}
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}