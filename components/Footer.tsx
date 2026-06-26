export default function Footer() {
	return (
		<footer
			className="
      border-t
      border-white/5
      py-10
      "
		>
			<div
				className="
        container-custom
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-4
        "
			>
				<div>
					<span className="text-3xl font-bold gold-gradient">FG</span>

					<p className="text-zinc-500 mt-2">
						Transformando visitantes em oportunidades.
					</p>
				</div>

				<div className="flex gap-6 mt-4">
					<span className="text-zinc-500">Sites</span>

					<span className="text-zinc-500">Landing Pages</span>

					<span className="text-zinc-500">Sistemas Web</span>
				</div>

				<p className="text-zinc-500 text-sm">
					© 2026 FG Digital. Todos os direitos reservados.
				</p>
			</div>
		</footer>
	);
}
