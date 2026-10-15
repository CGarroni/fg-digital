"use client";

import Image from "next/image";
import clsx from "clsx";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";
import { cases, type Case } from "@/lib/data/cases";

function CaseCard({ caseItem }: { caseItem: Case }) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border border-[#D4AF37]/10
        bg-[#0B0B0B]
        transition-all
        duration-500
        hover:border-[#D4AF37]/30
        hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)]
      "
    >
      {/* ── Imagem: inteira dentro da moldura ─────── */}
      <div className="relative overflow-hidden aspect-[16/10] bg-[#0A0A0A]">
        {/* Fundo: a própria imagem desfocada preenche a moldura */}
        <Image
          src={caseItem.image}
          alt=""
          aria-hidden
          fill
          sizes={
            caseItem.featured
              ? "(max-width: 1024px) 100vw, 1200px"
              : "(max-width: 1024px) 100vw, 50vw"
          }
          className="object-cover blur-2xl scale-110 opacity-40 saturate-[0.8]"
        />
        {/* Imagem nítida, inteira, sem corte */}
        <Image
          src={caseItem.image}
          alt={`Projeto ${caseItem.name}`}
          fill
          sizes={
            caseItem.featured
              ? "(max-width: 1024px) 100vw, 1200px"
              : "(max-width: 1024px) 100vw, 50vw"
          }
          className="
            object-contain
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.03]
          "
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-black/15 pointer-events-none"
        />
      </div>

      {/* ── Texto ─────────────────────────────────── */}
      <div className="p-7 md:p-8">
        <p className="text-[#D4AF37] uppercase tracking-[0.2em] text-[11px] font-medium mb-3">
          {caseItem.category}
        </p>

        <h3 className="font-display font-semibold text-2xl md:text-[1.7rem] text-white">
          {caseItem.name}
        </h3>

        <p className="text-neutral-400 mt-3 leading-relaxed">
          {caseItem.description}
        </p>
      </div>

      {/* ── Linha dourada inferior ────────────────── */}
      <div
        aria-hidden
        className="
          h-px
          mx-7 md:mx-8
          mb-0
          bg-gradient-to-r
          from-transparent
          via-[#D4AF37]/40
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
      />
    </article>
  );
}

export default function Cases() {
  return (
    <section id="projetos" className="section-padding relative overflow-hidden">
      <div
        aria-hidden
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_top_right,#D4AF370d,transparent_45%)]
        "
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Projetos selecionados"
            title="Trabalhos que falam por mim."
            description="Cada projeto abaixo passou pelas minhas mãos — do primeiro rascunho à entrega. Sites e sistemas reais, para negócios reais."
          />
        </AnimatedSection>

        <StaggerGroup className="grid md:grid-cols-2 gap-8 mt-20">
          {cases.map((caseItem) => (
            <StaggerItem
              key={caseItem.id}
              className={clsx("h-full", caseItem.featured && "md:col-span-2")}
            >
              <CaseCard caseItem={caseItem} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
