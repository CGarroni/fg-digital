"use client";

import { ArrowRight } from "lucide-react";
import HeroShowcase from "@/components/HeroShowcase";
import Button from "@/components/ui/Button";

export default function Hero() {
	return (
		<section
			id="hero"
			className="
      min-h-screen
      flex
      items-center
      relative
      overflow-hidden
      pt-40 "
		>
			<div
				className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
        "
			>
				<div
					className="
          absolute
          top-20
          right-20
          w-31.25
          h-31.25
          rounded-full
          bg-[#D4AF37]/10
          blur-[150px]
          "
				/>

				<div
					className="
          absolute
          bottom-0
          left-0
          w-25
          h-25
          rounded-full
          bg-[#D4AF37]/5
          blur-[150px]
          "
				/>
			</div>

			<div
				className="
        absolute
        inset-0
        pointer-events-none
        bg-[radial-gradient(circle_at_top_right,#D4AF3720,transparent_40%)]
      "
			/>

			<div className="max-w-7xl mx-auto px-6">
				<div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center">
					<div>
						<div
							className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-[#D4AF37]/20
              bg-[#D4AF37]/5
              mb-6
              "
						>
							<div
								className="
                w-2
                h-2
                rounded-full
                bg-[#D4AF37]
                "
							/>

							<span
								className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-[#D4AF37]
                "
							>
								Estratégia • Design • Engenharia
							</span>
						</div>

						<h1
							className="
  text-4xl sm:text-5xl md:text-7xl
  font-bold
  leading-[0.95]
  "
						>
							Transformamos
							<span className="gold-gradient block">empresas em</span>
							referências digitais.
						</h1>

						<p
							className="
              text-zinc-400
              text-lg
              md:text-xl
              mt-8
              max-w-xl
              "
						>
							Criamos produtos digitais que unem estratégia, design e engenharia
							para fortalecer sua marca, gerar confiança e transformar
							visitantes em oportunidades de negócio.
						</p>

						<div className="flex flex-row flex-wrap gap-4 mt-10">
							<Button sectionId="contact">Solicitar Análise Gratuita</Button>

							<Button sectionId="process">
								Conheça Nosso Processo
								<ArrowRight size={18} />
							</Button>
						</div>
					</div>

					<HeroShowcase />
				</div>
			</div>
		</section>
	);
}
