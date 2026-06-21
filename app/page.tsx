"use client";
import Image from "next/image";
import { MouseEvent } from "react";

export default function Home() {
	function scrollToSection(event: MouseEvent<HTMLAnchorElement>) {
		event.preventDefault();
		const target = event.currentTarget.getAttribute("href");
		if (!target) return;

		const section = document.querySelector(target);
		if (!section) return;

		section.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}

	return (
		<div className="min-h-screen bg-fg-black text-fg-text">
			<header className="w-full border-b border-fg-gray-dark">
				<div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
					<div className="flex items-center gap-2">
						<Image
							src="/fg-digital.png" // ou fg-digital2.png, conforme o arquivo
							alt="FG Digital"
							width={48}
							height={48}
							className="h-12 w-12 rounded-full object-cover"
						/>
					</div>

					<a
						href="#como-funciona"
						onClick={scrollToSection}
						className="hidden rounded-full border border-fg-gray-dark px-4 py-1.5 text-xs font-medium text-fg-text hover:border-fg-gold-border hover:text-fg-gold-soft sm:inline"
					>
						Como funciona
					</a>
				</div>
			</header>

			<main className="flex min-h-screen flex-col items-center justify-center px-6 sm:px-8">
				<div className="max-w-3xl text-center sm:text-left mt-10 sm:mt-14">
					<div className="space-y-6">
						<h1 className="text-3xl sm:text-4xl font-bold leading-tight sm:leading-tight">
							Seu próximo cliente está procurando no Google agora. <br />
							Seu negócio aparece bem e responde mesmo depois do horário
							comercial?
						</h1>

						<p className="text-lg sm:text-xl text-fg-gray max-w-2xl">
							Ajudo empresas a conquistarem mais clientes com sites modernos,
							atendimento automatizado e uma presença digital que transmite
							profissionalismo desde o primeiro clique.
						</p>

						<div className="mt-8 flex flex-col gap-4 sm:flex-row">
							<a
								href="#contato"
								onClick={scrollToSection}
								className="inline-flex items-center justify-center rounded-full bg-fg-gold px-6 py-3 text-sm font-semibold text-fg-black shadow-md transition hover:bg-fg-gold-soft"
							>
								Quero um site que trabalhe por mim
							</a>

							<a
								href="#como-funciona"
								onClick={scrollToSection}
								className="inline-flex items-center justify-center rounded-full border border-fg-gray-dark px-6 py-3 text-sm font-semibold text-fg-text transition hover:border-fg-gold-border hover:text-fg-gold-soft"
							>
								Ver como funciona
							</a>
						</div>
					</div>
				</div>

				<div className="mt-16 max-w-3xl text-left">
					<h2 className="text-2xl sm:text-3xl font-semibold mb-4">
						Como seu site trabalha por você 24/7
					</h2>

					<ul className="space-y-3 text-fg-gray text-base sm:text-lg">
						<li>
							Seu negócio continua respondendo, vendendo e trabalhando mesmo
							enquanto você dorme ou está ocupado.
						</li>
						<li>
							Seus clientes encontram informações e respostas sem precisar
							esperar por atendimento.
						</li>
						<li>
							Sua empresa transmite mais confiança e credibilidade desde o
							primeiro contato.
						</li>
						<li>
							Menos tempo respondendo perguntas repetidas, mais tempo fechando
							negócios.
						</li>
					</ul>
				</div>

				<section id="como-funciona" className="mt-16 max-w-3xl text-left">
					<h2 className="text-2xl sm:text-3xl font-semibold mb-4">
						Como funciona trabalhar comigo
					</h2>

					<div className="space-y-4">
						<div className="flex gap-4">
							<div className="flex h-9 w-9 items-center justify-center rounded-full bg-fg-gold text-fg-black text-sm font-semibold">
								1
							</div>
							<div>
								<h3 className="font-semibold">
									Entendendo seu momento e seus objetivos
								</h3>
								<p className="text-fg-gray text-sm sm:text-base">
									Conversamos para entender seus objetivos e necessidades e
									criar uma solução alinhada com o momento da sua empresa.
								</p>
							</div>
						</div>

						<div className="flex gap-4">
							<div className="flex h-9 w-9 items-center justify-center rounded-full bg-fg-gold text-fg-black text-sm font-semibold">
								2
							</div>
							<div>
								<h3 className="font-semibold">
									Criação do site moderno e responsivo
								</h3>
								<p className="text-fg-gray text-sm sm:text-base">
									Crio um site moderno, responsivo e otimizado para transmitir
									confiança e facilitar o contato dos seus clientes.
								</p>
							</div>
						</div>

						<div className="flex gap-4">
							<div className="flex h-9 w-9 items-center justify-center rounded-full bg-fg-gold text-fg-black text-sm font-semibold">
								3
							</div>
							<div>
								<h3 className="font-semibold">
									Site no ar, gerando oportunidades
								</h3>
								<p className="text-fg-gray text-sm sm:text-base">
									Seu site entra no ar pronto para receber visitantes, gerar
									oportunidades e apoiar o crescimento da empresa.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="mt-16 max-w-3xl text-left">
					<h2 className="text-2xl sm:text-3xl font-semibold mb-4">
						Por que isso gera resultado de verdade
					</h2>

					<p className="text-fg-gray text-sm sm:text-base mb-4 max-w-2xl">
						Não é só sobre ter um site bonito, é sobre transformar visitas em
						oportunidades reais de negócio para a sua empresa.
					</p>

					<ul className="space-y-3 text-sm sm:text-base text-fg-gray">
						<li>
							<span className="text-fg-text font-semibold">
								Foco em conversão, não só em design.
							</span>{" "}
							Cada página é pensada para guiar o visitante até o contato,
							agendamento ou pedido.
						</li>
						<li>
							<span className="text-fg-text font-semibold">
								Mensagem clara e alinhada ao seu público.
							</span>{" "}
							“O texto do site é trabalhado para falar a linguagem de quem
							compra, contrata serviços ou busca atendimento com você.”
						</li>
						<li>
							<span className="text-fg-text font-semibold">
								Integração com seus canais de atendimento.
							</span>{" "}
							Seu site trabalha junto com WhatsApp, redes sociais e outros
							canais que você já usa.
						</li>
					</ul>
				</section>

				<section
					id="contato"
					className="mt-20 w-full max-w-3xl border-t border-fg-gray-dark pt-10"
				>
					<h2 className="text-2xl sm:text-3xl font-semibold mb-3">
						Pronto para ter um site que trabalhe por você?
					</h2>

					<p className="text-fg-gray text-sm sm:text-base mb-6 max-w-2xl">
						Preencha os dados abaixo e retornarei com uma proposta alinhada ao
						momento do seu negócio.
					</p>

					<form className="space-y-4">
						<div>
							<label className="block text-sm font-medium mb-1" htmlFor="nome">
								Nome
							</label>
							<input
								id="nome"
								type="text"
								className="w-full rounded-md border border-fg-gray-dark bg-transparent px-3 py-2 text-sm outline-none focus:border-fg-gold focus:ring-1 focus:ring-fg-gold"
								placeholder="Como devo te chamar?"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium mb-1" htmlFor="email">
								E-mail
							</label>
							<input
								id="email"
								type="email"
								className="w-full rounded-md border border-fg-gray-dark bg-transparent px-3 py-2 text-sm outline-none focus:border-fg-gold focus:ring-1 focus:ring-fg-gold"
								placeholder="Seu melhor e-mail de contato"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium mb-1" htmlFor="tipo">
								Tipo de negócio
							</label>
							<input
								id="tipo"
								type="text"
								className="w-full rounded-md border border-fg-gray-dark bg-transparent px-3 py-2 text-sm outline-none focus:border-fg-gold focus:ring-1 focus:ring-fg-gold"
								placeholder="Clínica, estética, advocacia, outro..."
							/>
						</div>

						<div>
							<label
								className="block text-sm font-medium mb-1"
								htmlFor="mensagem"
							>
								O que você está buscando?
							</label>
							<textarea
								id="mensagem"
								rows={4}
								className="w-full rounded-md border border-fg-gray-dark bg-transparent px-3 py-2 text-sm outline-none focus:border-fg-gold focus:ring-1 focus:ring-fg-gold"
								placeholder="Conte um pouco sobre seu momento e o que espera do site."
							/>
						</div>

						<button
							type="submit"
							className="mt-2 inline-flex items-center justify-center rounded-full bg-fg-gold px-6 py-3 text-sm font-semibold text-fg-black shadow-md transition hover:brightness-110"
						>
							Enviar mensagem
						</button>
					</form>
				</section>
			</main>
		</div>
	);
}
