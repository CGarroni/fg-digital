/**
 * SectionDivider — transição editorial entre seções.
 * Linha dourada hairline em gradiente com um pequeno losango ao centro.
 * Marca a virada de "capítulo" sem quebrar o fluxo escuro do site.
 */
export default function SectionDivider() {
  return (
    <div aria-hidden className="relative flex items-center justify-center py-2">
      <div className="h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />
      <span className="absolute w-1.5 h-1.5 rotate-45 bg-[#D4AF37]/50" />
    </div>
  );
}
