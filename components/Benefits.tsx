"use client";

import { ShieldCheck, TrendingUp, Globe } from "lucide-react";
import AmbientBackground from "@/components/AmbientBackground";
import BenefitCard from "@/components/ui/BenefitCard";
import SectionHeader from "@/components/ui/SectionHeader";

const benefits = [
	{
		icon: ShieldCheck,
		title: "Credibilidade que gera confiança",
		description:
			"Cause uma excelente primeira impressão e transmita profissionalismo antes mesmo do primeiro contato com o cliente.",
		result: "Mais confiança desde o primeiro acesso",
	},
	{
		icon: TrendingUp,
		title: "Mais oportunidades de negócio",
		description:
			"Transforme sua presença digital em um canal estratégico para atrair novos contatos e ampliar suas oportunidades comerciais.",
		result: "Seu site trabalhando por você 24h por dia",
	},
	{
		icon: Globe,
		title: "Destaque-se da concorrência",
		description:
			"Enquanto muitos competem apenas por preço, sua empresa passa a transmitir mais autoridade, valor e profissionalismo.",
		result: "Uma marca que inspira confiança",
	},
];

export default function Benefits() {
	return (
		<section
			id="benefits"
			className="relative section-padding bg-[#050505] overflow-hidden"
		>
			<AmbientBackground />

			<div className="max-w-7xl mx-auto px-6">
				<SectionHeader
    eyebrow="Benefícios"
    title="Sua empresa merece mais do que um site."
    description="Sua presença digital deve transmitir confiança, fortalecer sua marca e trabalhar todos os dias para gerar novas oportunidades de negócio."
/>

				<div className="grid md:grid-cols-3 gap-8 mt-20">
					{benefits.map((benefit, index) => (
						<BenefitCard
							key={benefit.title}
							icon={benefit.icon}
							title={benefit.title}
							description={benefit.description}
							result={benefit.result}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
