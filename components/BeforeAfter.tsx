"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

export interface BeforeAfterPair {
  id: string;
  label: string;
  before: string;
  beforeAlt: string;
  after: string;
  afterAlt: string;
  /** ex.: "1200 / 828" — mantém o par sem distorção nem letterbox */
  aspect: string;
}

interface BeforeAfterProps {
  pairs: BeforeAfterPair[];
}

/**
 * Comparativo "antes / depois" lado a lado.
 * - Abas para trocar de par (seção do site)
 * - Desktop: duas imagens inteiras lado a lado; mobile: empilha vertical
 * - Zero corte: o lead vê as duas versões completas, sem margem para
 *   leitura de "imagem quebrada"
 * - Transição suave de revelação a cada troca de aba
 */
export default function BeforeAfter({ pairs }: BeforeAfterProps) {
  const [pairIdx, setPairIdx] = useState(0);

  const pair = pairs[pairIdx];

  return (
    <div>
      {/* ── Abas de seção ─────────────────────────── */}
      <div
        className="flex flex-wrap justify-center gap-2 mb-8"
        role="tablist"
        aria-label="Seções do site comparadas"
      >
        {pairs.map((p, i) => (
          <button
            key={p.id}
            role="tab"
            aria-selected={i === pairIdx}
            onClick={() => setPairIdx(i)}
            className={clsx(
              "px-5 py-2.5 rounded-full text-sm tracking-wide transition-all duration-300 cursor-pointer",
              "border",
              i === pairIdx
                ? "border-[#D4AF37]/70 bg-[#D4AF37]/10 text-[#E8C766]"
                : "border-white/10 text-neutral-400 hover:border-white/25 hover:text-neutral-200"
            )}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* ── Par lado a lado ───────────────────────── */}
      <div
        key={pair.id}
        className="grid md:grid-cols-2 gap-5 md:gap-6"
        style={{ animation: "compare-reveal 0.55s ease both" }}
      >
        {/* ANTES */}
        <figure className="m-0">
          <div
            className="
              relative w-full overflow-hidden rounded-2xl
              border border-white/10 bg-[#0A0A0A]
              shadow-[0_20px_70px_rgba(0,0,0,0.55)]
            "
            style={{ aspectRatio: pair.aspect }}
          >
            <Image
              src={pair.before}
              alt={pair.beforeAlt || `Versão anterior da seção ${pair.label}`}
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              className="object-cover"
              draggable={false}
            />
            <span
              className="
                absolute top-4 left-4
                px-3 py-1.5 rounded-full
                text-[11px] font-semibold uppercase tracking-[0.2em]
                bg-black/70 text-neutral-300 border border-white/15
                pointer-events-none
              "
            >
              Antes
            </span>
          </div>
        </figure>

        {/* DEPOIS */}
        <figure className="m-0">
          <div
            className="
              relative w-full overflow-hidden rounded-2xl
              border border-[#D4AF37]/25 bg-[#0A0A0A]
              shadow-[0_20px_70px_rgba(0,0,0,0.55),0_0_40px_rgba(212,175,55,0.08)]
            "
            style={{ aspectRatio: pair.aspect }}
          >
            <Image
              src={pair.after}
              alt={pair.afterAlt}
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              className="object-cover"
              draggable={false}
            />
            <span
              className="
                absolute top-4 left-4
                px-3 py-1.5 rounded-full
                text-[11px] font-semibold uppercase tracking-[0.2em]
                bg-[#D4AF37] text-black
                pointer-events-none
              "
            >
              Depois
            </span>
          </div>
        </figure>
      </div>

      <p className="text-center text-neutral-500 text-sm mt-5">
        Compare a transformação, seção por seção.
      </p>
    </div>
  );
}
