"use client";

import AmbientBackground from "@/components/AmbientBackground";
import SectionHeader from "@/components/ui/SectionHeader";
import FAQItem from "@/components/ui/FAQItem";

import { faq } from "@/lib/data/faq";

export default function FAQ() {
	return (
		<section
			id="faq"
			className="relative section-padding bg-[#050505] overflow-hidden"
		>
			<AmbientBackground />

			<div className="max-w-4xl mx-auto px-6">
				<SectionHeader
					eyebrow="DÚVIDAS FREQUENTES"
					title="Respondemos às principais dúvidas antes mesmo da nossa primeira conversa."
					description="Nosso objetivo é que você tenha segurança para tomar a melhor decisão para sua empresa."
				/>

				<div className="mt-20 space-y-6">
					{faq.map((item) => (
						<FAQItem
							key={item.id}
							item={item}
						/>
					))}
				</div>
			</div>
		</section>
	);
}