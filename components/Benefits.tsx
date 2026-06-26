"use client";

import { ShieldCheck, TrendingUp, Globe } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
	{
		icon: ShieldCheck,
		title: "Mais Credibilidade",
		description:
			"Transmita confiança desde o primeiro contato e fortaleça a percepção da sua marca.",
	},
	{
		icon: TrendingUp,
		title: "Mais Oportunidades",
		description:
			"Transforme visitantes em contatos qualificados através de uma experiência estratégica.",
	},
	{
		icon: Globe,
		title: "Presença Digital Premium",
		description:
			"Destaque-se da concorrência com uma presença digital moderna e profissional.",
	},
];

export default function Benefits() {
	return (
		<section id="benefits" className="section-padding bg-[#050505]">
			<div className="max-w-7xl mx-auto px-6">
				<div className=" text-center max-w-3xl mx-auto">
					<span className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm">
						Benefícios
					</span>

					<h2 className="text-4xl md:text-5xl font-bold mt-6">
						Sua empresa merece mais do que um site.
					</h2>

					<p className="text-zinc-400 mt-6 text-lg">
						Criamos experiências digitais capazes de aumentar a confiança,
						fortalecer sua marca e gerar novas oportunidades de negócio.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 mt-20">
					{benefits.map((benefit, index) => {
						const Icon = benefit.icon;

						return (
							<motion.div
								key={benefit.title}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: index * 0.15,
								}}
								viewport={{ once: true }}
								className="
                bg-[#0B0B0B]
                border
                border-white/5
                rounded-3xl
                p-8
                hover:border-[#D4AF37]/40
hover:-translate-y-2
hover:shadow-[0_15px_40px_rgba(212,175,55,0.08)]
                transition-all
                duration-300
                "
							>
								<div
									className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-[#D4AF37]/10
                  flex
                  items-center
                  justify-center
                  "
								>
									<Icon size={28} className="text-[#D4AF37]" />
								</div>

								<h3 className="text-2xl font-semibold mt-8">{benefit.title}</h3>

								<p className="text-zinc-400 mt-4 leading-relaxed">
									{benefit.description}
								</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
