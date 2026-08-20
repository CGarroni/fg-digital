"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/navigation";
import { scrollToSection } from "@/utils/scrollToSection";
import Button from "@/components/ui/Button";

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const handleNavigate = (section: string) => {
		scrollToSection(section);
		setIsOpen(false);
	};

	return (
		<>
			<button
				className="md:hidden text-white hover:text-[#D4AF37]
transition-colors
duration-300"
				onClick={() => setIsOpen(!isOpen)}
				aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
			>
				{isOpen ? <X size={28} /> : <Menu size={28} />}
			</button>

			{isOpen && (
				<div className="absolute top-20 left-0 w-full bg-black backdrop-blur-xl border-t border-white/10 md:hidden">
					<div className="flex flex-col px-6 py-6 gap-8">
						{navigation.map((link) => (
							<button
								key={link.href}
								onClick={() => handleNavigate(link.href.slice(1))}
								className="
								text-left
								text-lg
								font-medium
								tracking-wide
								text-zinc-300
								transition-colors
								duration-300
								"
							>
								{link.label}
							</button>
						))}

						<div className="pt-4 border-t border-white/10">
							<Button
								sectionId="contact"
								onClick={() => setIsOpen(false)}
								fullWidth
							>
								Solicitar Análise Gratuita
							</Button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
