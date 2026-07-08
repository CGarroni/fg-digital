"use client";

import Image from "next/image";
import Floating from "@/components/Floating";
import { Globe, BarChart3 } from "lucide-react";

export default function HeroShowcase() {
	return (
		<div className="relative">
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
					alt="FG Digital"
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
				<div
					className="
          absolute
          left-0
          -bottom-4
          bg-black/60
          backdrop-blur-xl
          border
          border-[#D4AF37]/10
          rounded-2xl
          p-4
          "
				>
					<div className="flex items-center gap-3">
						<Globe size={18} className="text-[#D4AF37]" />

						<div>
							<p className="text-xs text-zinc-500">Método</p>

							<p className="text-sm font-medium">Estratégia + Design</p>
						</div>
					</div>
				</div>
			</Floating>

			<Floating>
				<div
					className="
          absolute
          right-0
          -bottom-4
          bg-black/60
          backdrop-blur-xl
          border
          border-[#D4AF37]/10
          rounded-2xl
          p-4
          "
				>
					<div className="flex items-center gap-3">
						<BarChart3 size={18} className="text-[#D4AF37]" />

						<div>
							<p className="text-xs text-zinc-500">Resultado</p>

							<p className="text-sm font-medium">Autoridade + Conversão</p>
						</div>
					</div>
				</div>
			</Floating>
		</div>
	);
}
