import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="
      border-t
      border-[#D4AF37]/10
      py-20
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        grid
        md:grid-cols-[1.6fr_1fr_1fr]
        gap-14
        items-start
        "
      >
        {/* Marca */}

        <div>
          <Image
            src="/images/hero/fg-digital.png"
            alt="FG"
            width={60}
            height={60}
          />

          <p
            className="
            text-zinc-400
            mt-6
            max-w-sm
            leading-relaxed
            "
          >
            Transformamos visitantes em oportunidades de negócio através
            de experiências digitais premium.
          </p>
        </div>

        {/* Serviços */}

        <div>
          <h3
            className="
            text-xs
            uppercase
            tracking-[0.25em]
            text-zinc-500
            mb-6
            "
          >
            Serviços
          </h3>

          <ul className="space-y-4">
            <li className="text-[#D4AF37] font-medium">
              Sites
            </li>

            <li className="text-[#D4AF37] font-medium">
              Landing Pages
            </li>

            <li className="text-[#D4AF37] font-medium">
              Sistemas Web
            </li>
          </ul>
        </div>

        {/* Institucional */}

        <div>
          <h3
            className="
            text-xs
            uppercase
            tracking-[0.25em]
            text-zinc-500
            mb-6
            "
          >
            Institucional
          </h3>

          <p className="text-zinc-300">
            © 2026 FG Digital
          </p>

          <p className="text-zinc-500 mt-2">
            Todos os direitos reservados.
          </p>

          <p className="text-zinc-600 text-sm mt-8">
            Desenvolvido no Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
}