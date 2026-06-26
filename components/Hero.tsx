"use client";

import { ArrowRight } from "lucide-react";
import HeroShowcase from "@/components/HeroShowcase";

const whatsappUrl =
  "https://wa.me/5551998467866?text=Olá,%20gostaria%20de%20uma%20análise%20gratuita.";

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
          w-[125px]
          h-[125px]
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
          w-[100px]
          h-[100px]
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
				<div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
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
								Presença Digital Premium
							</span>
						</div>

						<h1
							className="
              text-4xl sm:text-5xl md:text-7xl
              font-bold
              leading-[0.95]
              ">
							Transformamos
							<span className="gold-gradient block">visitantes em</span>
							oportunidades de negócio.
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
							Criamos experiências digitais premium que aumentam a confiança,
							fortalecem sua marca e ajudam sua empresa a gerar novas
							oportunidades.
						</p>

						<div className="flex flex-row flex-wrap gap-4 mt-10">
							<a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex
              items-center
              justify-center
              bg-gradient-to-r
              from-[#D4AF37]
              to-[#E6C766]
              text-black
              px-8
              py-4
              rounded-2xl
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_10px_40px_rgba(212,175,55,0.25)]
              "
            >
              Solicitar Análise Gratuita
            </a>

							<button
                onClick={() => {
                  document.getElementById("process")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="
                border
                border-[#D4AF37]
                text-[#D4AF37]
                px-8
                py-4
                rounded-2xl
                flex
                items-center
                gap-2
                transition-all
                duration-300
                hover:bg-gradient-to-r
                hover:from-[#D4AF37]
                hover:to-[#E6C766]
                hover:text-black
                hover:scale-105
                cursor-pointer
                "
              >
                Conheça Nosso Processo
                <ArrowRight size={18} />
              </button>
						</div>
					</div>

					<HeroShowcase />
				</div>
			</div>
		</section>
	);
}
