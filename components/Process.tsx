"use client";

import { useRef, useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos sua empresa, objetivos e desafios.",
  },
  {
    number: "02",
    title: "Estratégia",
    description: "Definimos a melhor estrutura para gerar resultados.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Construímos uma experiência digital premium.",
  },
  {
    number: "04",
    title: "Evolução",
    description: "Acompanhamos melhorias e crescimento contínuo.",
  },
];

export default function Process() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;

    const ctx = gsap.context(() => {
      /* ── Sticky pin the left title on desktop only ──── */
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: pinRef.current,
        pinSpacing: false,
      });

      /* ── Fade each step based on scroll position ───── */
      const stepEls = stepsRef.current?.querySelectorAll(".process-step");
      if (!stepEls) return;

      stepEls.forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0.2, y: 30 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: step,
              start: "top 75%",
              end: "top 25%",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative"
    >
      {/* ── Header (outside scroll area) ─────────────── */}
      <div className="section-padding pb-0">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Nosso Método"
              title="Um processo pensado para transformar estratégia em resultados reais."
              description="Cada etapa foi planejada para entender seu negócio, desenvolver a melhor solução e entregar uma presença digital que gere resultados consistentes."
            />
          </AnimatedSection>
        </div>
      </div>

      {/* ── Scroll area: sticky title + scrolling steps ─ */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-20 pt-20">
          {/* Left: pinned title (desktop only) */}
          <div
            ref={pinRef}
            className="
              hidden
              lg:block
              lg:w-[35%]
              lg:sticky
              lg:top-32
              lg:self-start
            "
          >
            <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm">
              Nosso Método
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
              Do diagnóstico à{" "}
              <span className="gold-gradient">evolução contínua</span>.
            </h2>

            <p className="text-neutral-300 text-lg mt-6 leading-relaxed">
              Cada etapa foi pensada para entregar resultados reais e
              sustentáveis para o seu negócio.
            </p>
          </div>

          {/* Right: scrolling steps */}
          <div ref={stepsRef} className="lg:w-[65%] space-y-6 lg:space-y-10 pb-20">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="
                  process-step
                  relative
                  bg-linear-to-b
                  from-[#111111]
                  to-[#090909]
                  border
                  border-[#D4AF37]/10
                  rounded-3xl
                  p-8
                  shadow-[0_8px_30px_rgba(212,175,55,0.04)]
                  hover:border-[#D4AF37]/25
                  hover:shadow-[0_18px_45px_rgba(212,175,55,0.10)]
                  transition-[border-color,box-shadow]
                  duration-500
                "
              >
                {/* Connector line (not on last) */}
                {index < steps.length - 1 && (
                  <div
                    className="
                      hidden
                      lg:block
                      absolute
                      -bottom-6
                      lg:-bottom-10
                      left-12
                      w-px
                      h-6
                      lg:h-10
                      bg-linear-to-b
                      from-[#D4AF37]/30
                      to-transparent
                    "
                  />
                )}

                <span
                  className="
                    block
                    text-5xl
                    font-bold
                    text-[#D4AF37]/15
                    select-none
                  "
                >
                  {step.number}
                </span>

                <h3 className="text-xl md:text-2xl font-semibold mt-6">
                  {step.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-neutral-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
