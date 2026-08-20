"use client";

import { Crown, Gem, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const items = [
	{
		icon: Crown,
		title: "Posicionamento Premium",
		description:
			"Projetamos experiências digitais que elevam a percepção de valor da sua empresa.",
	},
	{
		icon: Gem,
		title: "Design Estratégico",
		description:
			"Cada elemento possui um propósito: transmitir confiança e gerar oportunidades.",
	},
	{
		icon: Rocket,
		title: "Foco em Crescimento",
		description:
			"Não criamos apenas páginas. Criamos ferramentas para impulsionar negócios.",
	},
];

export default function WhyChoose() {
	return (
		<section id="why-choose" className="section-padding">
			<div className="max-w-7xl mx-auto px-6">
				<div className="max-w-3xl">
					<span className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm">
						Por que escolher a FG Digital
					</span>

					<h2 className=" text-4xl sm:text-5xlfont-bold mt-6">
						Sua presença digital deve transmitir o mesmo valor do seu trabalho.
					</h2>
				</div>

				<div className="grid md:grid-cols-3 gap-8 mt-20">
					{items.map((item, index) => {
						const Icon = item.icon;

						return (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									delay: index * 0.15,
								}}
								viewport={{ once: true }}
								className="
                bg-[#0B0B0B]
                rounded-3xl
                p-8
                border
                border-[#D4AF37]/10
                hover:border-[#D4AF37]/40
hover:-translate-y-2
hover:shadow-[0_15px_40px_rgba(212,175,55,0.08)]
                transition-all
                "
							>
								<Icon size={34} className="text-[#D4AF37]" />

								<h3 className="text-2xl font-semibold mt-8">{item.title}</h3>

								<p className="text-zinc-400 mt-4">{item.description}</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
