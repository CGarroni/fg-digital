"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cases } from "@/lib/data/cases";
import { scrollToSection } from "@/utils/scrollToSection";
import { EASE } from "@/components/motion";

const AUTOPLAY_MS = 6500;

/**
 * HeroShowcase — carrossel editorial de projetos reais.
 * Troca o mockup genérico de notebook por prova concreta de trabalho
 * logo na primeira dobra: cada slide mostra um case real do portfólio.
 */
export default function HeroShowcase() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = cases.length;

  const goTo = useCallback(
    (i: number) => setIndex(((i % total) + total) % total),
    [total]
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  /* ── Autoplay (pausa no hover/focus; respeita reduced motion) ── */
  useEffect(() => {
    if (reduce || paused) return;
    const t = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, next, paused, reduce]);

  const current = cases[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* ── Eyebrow ─────────────────────────────── */}
      <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs mb-4">
        Projetos reais
      </p>

      {/* ── Painel ──────────────────────────────── */}
      <div
        className="
          relative
          aspect-[16/10]
          rounded-3xl
          overflow-hidden
          border
          border-[#D4AF37]/15
          bg-[#0A0A0A]
          shadow-[0_0_80px_rgba(212,175,55,0.08)]
          cursor-pointer
        "
        onClick={() => scrollToSection("projetos")}
        title="Ver todos os projetos"
        role="button"
        aria-label="Ver todos os projetos"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") scrollToSection("projetos");
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={current.id}
            className="absolute inset-0"
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: -48 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {/* Fundo: a própria imagem desfocada preenche a moldura */}
            <Image
              src={current.image}
              alt=""
              aria-hidden
              fill
              className="object-cover blur-2xl scale-110 opacity-40 saturate-[0.8]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            {/* Imagem nítida, inteira, sem corte — com Ken Burns cinematográfico */}
            <Image
              src={current.image}
              alt={`${current.name} — ${current.category}`}
              fill
              priority={index === 0}
              className={`object-contain ${!reduce ? "animate-kenburns" : ""}`}
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            {/* Véu para unificar o tom com o site */}
            <div aria-hidden className="absolute inset-0 bg-black/15" />
          </motion.div>
        </AnimatePresence>

        {/* Legenda */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            bg-gradient-to-t
            from-black/85
            via-black/40
            to-transparent
            pt-16
            pb-5
            px-6
            pointer-events-none
          "
        >
          <p className="text-[#D4AF37] uppercase tracking-[0.2em] text-[11px]">
            {current.category}
          </p>
          <p className="font-display text-xl md:text-2xl mt-1">
            {current.name}
          </p>
        </div>
      </div>

      {/* ── Controles ───────────────────────────── */}
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-2" role="tablist" aria-label="Cases">
          {cases.map((c, i) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={i === index}
              aria-label={`Ver ${c.name}`}
              onClick={() => goTo(i)}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                cursor-pointer
                ${i === index ? "w-8 bg-[#D4AF37]" : "w-1.5 bg-white/20 hover:bg-white/40"}
              `}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-neutral-400 tabular-nums">
            {String(index + 1).padStart(2, "0")}
            <span className="text-neutral-600"> / {String(total).padStart(2, "0")}</span>
          </span>

          <button
            onClick={prev}
            aria-label="Case anterior"
            className="
              w-10 h-10
              rounded-full
              border border-white/15
              flex items-center justify-center
              text-neutral-300
              hover:border-[#D4AF37]/60
              hover:text-[#D4AF37]
              transition
              cursor-pointer
            "
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            aria-label="Próximo case"
            className="
              w-10 h-10
              rounded-full
              border border-white/15
              flex items-center justify-center
              text-neutral-300
              hover:border-[#D4AF37]/60
              hover:text-[#D4AF37]
              transition
              cursor-pointer
            "
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
