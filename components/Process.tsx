"use client";

import ProcessCard from "@/components/ui/ProcessCard";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
	{
		number: "01",
		title: "Diagnóstico",
		description: "Entendemos sua empresa, objetivos e desafios.",
	},
	{
		number: "02",
		title: "Estratégia",
		description: "Definimos a melhor estrutura para gerar resultados.",
	},
	{
		number: "03",
		title: "Desenvolvimento",
		description: "Construímos uma experiência digital premium.",
	},
	{
		number: "04",
		title: "Evolução",
		description: "Acompanhamos melhorias e crescimento contínuo.",
	},
];

export default function Process() {
	return (
		<section id="process" className="section-padding">
			<div className="max-w-7xl mx-auto px-6">
				<SectionHeader
					eyebrow="Nosso Método"
					title="Um processo pensado para transformar estratégia em resultados reais."
					description="Cada etapa foi planejada para entender seu negócio, desenvolver a melhor solução e entregar uma presença digital que gere resultados consistentes."
				/>

				<div className="grid md:grid-cols-4 gap-8 mt-20">
					{steps.map((step, index) => (
						<ProcessCard
							key={step.number}
							number={step.number}
							title={step.title}
							description={step.description}
							index={index}
							isLast={index === steps.length - 1}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
