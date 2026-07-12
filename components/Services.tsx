"use client";

import AmbientBackground from "@/components/AmbientBackground";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";

import { services } from "@/lib/data/services";

export default function Services() {
	return (
		<section
			id="services"
			className="relative section-padding bg-[#050505] overflow-hidden"
		>
			<AmbientBackground />

			<div className="max-w-7xl mx-auto px-6">
				<SectionHeader
					eyebrow="SOLUÇÕES"
					title="Escolha a solução ideal para o momento da sua empresa."
					description="Cada projeto é desenvolvido para fortalecer sua marca, transmitir credibilidade e transformar sua presença digital em oportunidades de negócio."
				/>

				<div className="grid lg:grid-cols-3 gap-8 mt-20">
					{services.map((service) => (
						<ServiceCard
							key={service.id}
							service={service}
						/>
					))}
				</div>
			</div>
		</section>
	);
}