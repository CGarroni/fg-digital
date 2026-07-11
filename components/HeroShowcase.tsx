"use client";

import Image from "next/image";
import Floating from "@/components/Floating";
import { Globe, BarChart3 } from "lucide-react";
import InfoBadge from "@/components/ui/InfoBadge";

export default function HeroShowcase() {
	return (
		<div className="relative isolate">
			<div
				className="
					relative
					h-90
					sm:h-115
		lg:h-125
		xl:h-155
					rounded-3xl
					lg:rounded-4xl
					overflow-hidden
					border
					border-[#D4AF37]/10
					shadow-[0_0_80px_rgba(212,175,55,0.08)]
				"
			>
				<Image
					src="/images/hero/hero-premium.png"
					alt="Mockup de website premium desenvolvido pela FG Digital"
					fill
					priority
					className="object-cover"
				/>

				<div
					className="
          absolute
          inset-0
          bg-linear-to-t
          from-black/40
          via-transparent
          to-transparent
          "
				/>
			</div>
			<Floating>
				<div className="absolute left-4 -bottom-0">
					<InfoBadge
						icon={Globe}
						title="Método"
						value="Estratégia + Design"
					/>
				</div>
			</Floating>

			<Floating>
				<div className="absolute right-4 -bottom-0">
					<InfoBadge
						icon={BarChart3}
						title="Resultado"
						value="Autoridade + Conversão"
					/>
				</div>
			</Floating>
		</div>
	);
}
