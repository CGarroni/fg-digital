"use client";

import { navLinks } from "@/lib/constants";
import { scrollToSection } from "@/utils/scrollToSection";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Header() {
	return (
		<header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 backdrop-blur-xl bg-black/40">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex items-center justify-between h-20">
					<Image
						src="/images/hero/fg-digital.png"
						alt="FG"
						width={56}
						height={56}
					/>

					<nav className="hidden md:flex gap-10">
						{navLinks.map((link) => (
							<button
								key={link.href}
								onClick={() => scrollToSection(link.href.slice(1))}
								className="text-zinc-300 cursor-pointer hover:text-[#D4AF37] transition"
							>
								{link.label}
							</button>
						))}
					</nav>

					<Button sectionId="contact">Solicitar Análise Gratuita</Button>
				</div>
			</div>
		</header>
	);
}
