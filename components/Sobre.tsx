"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { EASE } from "@/components/motion";

/**
 * Sobre — Opção B aprovada: "O rosto por trás da proximidade."
 * Retrato colorido + assinatura dourada animada.
 */
export default function Sobre() {
  const reduce = useReducedMotion();

  return (
    <section id="sobre" className="section-padding relative overflow-hidden bg-[#0A0908]">
      {/* ── Brilho ambiente ─────────────────────────── */}
      <div
        aria-hidden
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_bottom_left,#D4AF3712,transparent_45%)]
        "
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Retrato ───────────────────────────────── */}
          <AnimatedSection className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/sobre/francisco-retrato-cor-v1.jpg"
                alt="Francisco Garroni, fundador da FG Digital"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top portrait-fade"
                priority={false}
              />
            </div>

            {/* Moldura editorial com respiro */}
            <div
              aria-hidden
              className="
                absolute -inset-8
                rounded-[2rem]
                border border-[#D4AF37]/15
                pointer-events-none
              "
            />
          </AnimatedSection>

          {/* ── Texto ───────────────────────────────── */}
          <div>
            <AnimatedSection>
              <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm">
                Sobre a FG Digital
              </span>

              <h2 className="font-display font-semibold text-4xl md:text-5xl mt-6 leading-tight">
                O rosto por trás da{" "}
                <span className="gold-gradient">proximidade.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-neutral-300 text-lg mt-8 leading-relaxed max-w-xl">
                Sou o Francisco Garroni, fundador da FG Digital. Cada projeto
                do portfólio passou pelas minhas mãos — do primeiro rascunho
                à entrega.
              </p>

              <p className="text-neutral-400 mt-4 leading-relaxed max-w-xl">
                Nada de equipe terceirizada ou atendimento genérico: aqui você
                fala direto com quem projeta, constrói e acompanha o seu site.
              </p>
            </AnimatedSection>

            {/* ── Assinatura dourada ────────────────── */}
            <AnimatedSection delay={0.2} className="overflow-visible">
              {reduce ? (
                <p className="font-signature text-5xl md:text-6xl text-[#D4AF37] mt-10 -rotate-2 leading-[1.2] pb-3">
                  Francisco Garroni
                </p>
              ) : (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  variants={{ hidden: {}, visible: {} }}
                >
                  <motion.p
                    variants={{
                      hidden: {
                        opacity: 0,
                        clipPath: "inset(0 100% 0 0)",
                      },
                      visible: {
                        opacity: 1,
                        clipPath: "inset(0 0% 0 0)",
                        transition: {
                          duration: 1.4,
                          ease: EASE,
                          delay: 0.3,
                        },
                      },
                    }}
                    className="
                      font-signature
                      text-5xl md:text-6xl
                      text-[#D4AF37]
                      mt-10
                      -rotate-2
                      origin-left
                      leading-[1.2]
                      pb-3
                      overflow-visible
                    "
                  >
                    Francisco Garroni
                  </motion.p>
                </motion.div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
