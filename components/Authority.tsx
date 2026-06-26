"use client";

import { motion } from "framer-motion";

export default function Authority() {
	return (
		<section className="section-padding">
			<div className="max-w-7xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="
          bg-[#0B0B0B]
          border
          border-[#D4AF37]/10
          rounded-4xl
          p-12
          text-center
          "
				>
					<span className="text-[#D4AF37] uppercase tracking-[0.25em]">
						Nossa visão
					</span>

					<h2 className="text-4xl sm:text-5xl font-bold mt-8 max-w-4xl mx-auto">
						Sua presença digital é muitas vezes o primeiro contato que um
						cliente terá com sua empresa.
					</h2>

					<p className="max-w-3xl mx-auto text-zinc-400 mt-8 text-lg">
						Empresas que investem em credibilidade, posicionamento e experiência
						digital saem na frente. A FG Digital existe para ajudar negócios a
						transmitir o valor que realmente entregam.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
