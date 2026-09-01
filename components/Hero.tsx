"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import HeroShowcase from "@/components/HeroShowcase";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/ui/MagneticButton";
import { EASE } from "@/components/motion";

interface HeroProps {
  animate?: boolean;
}

/* ── Helpers ───────────────────────────────────────────── */

function splitTextToSpans(text: string, goldChar = false) {
  return text.split("").map((char, i) => (
    <span
      key={`${char}-${i}`}
      className="inline-block"
    >
      <span
        className={`inline-block char-reveal ${goldChar ? "gold-gradient" : ""}`}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    </span>
  ));
}

/* ── Component ────────────────────────────────────────── */

export default function Hero({ animate = true }: HeroProps) {
  const reduce = useReducedMotion();

  /* ── GSAP title stagger ────────────────────────────── */
  const titleRef = useRef<HTMLHeadingElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (reduce || !animate || hasAnimated.current || !titleRef.current) return;

    const chars = titleRef.current.querySelectorAll(".char-reveal");
    if (chars.length === 0) return;

    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      gsap.set(chars, { yPercent: 110, opacity: 0 });

      gsap.to(chars, {
        yPercent: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.025,
        delay: 0.3,
      });
    }, titleRef);

    return () => ctx.revert();
  }, [animate, reduce]);

  /* ── Framer Motion variants ─────────────────────────── */

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduce ? undefined : { duration: 0.55, ease: EASE },
    },
  };

  const showcaseVariants: Variants = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduce
        ? undefined
        : { duration: 0.6, ease: EASE, delay: 0.45 },
    },
  };

  /* ── 3D Parallax on showcase ────────────────────────── */

  const showcaseContainerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: 0, y: 0 });
  }, []);

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="
        min-h-screen
        flex
        items-start
        lg:items-center
        relative
        overflow-hidden
        pt-32
        md:pt-40
      "
    >
      {/* ── Ambient background glows ──────────────────── */}
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
            w-31.25
            h-31.25
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
            w-25
            h-25
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

      {/* ── Content grid ──────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center">
          {/* ── Left: Copy ────────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="
                inline-flex
                items-start
                lg:items-center
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
                  w-1
                  h-1
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
                Crescimento • Prestígio • Performance
              </span>
            </motion.div>

            {/* Title — GSAP character stagger (no Framer Motion on container)
                to avoid opacity/transform conflicts with GSAP */}
            <div>
              <h1
                id="hero-title"
                ref={titleRef}
                className="
                  text-4xl sm:text-5xl md:text-7xl
                  font-bold
                  leading-[0.95]
                "
              >
                {reduce ? (
                  <>
                    Transformamos
                    <span className="gold-gradient block">empresas em</span>
                    referências digitais.
                  </>
                ) : (
                  <>
                    <span className="block">
                      {splitTextToSpans("Transformamos")}
                    </span>
                    <span className="block">
                      {splitTextToSpans("empresas em", true)}
                    </span>
                    <span className="block">
                      {splitTextToSpans("referências digitais.")}
                    </span>
                  </>
                )}
              </h1>
            </div>

            {/* Subtitle — accessible contrast */}
            <motion.p
              variants={itemVariants}
              className="
                text-neutral-300
                text-lg
                md:text-xl
                mt-8
                max-w-xl
              "
            >
              Desenvolvemos experiências digitais que fortalecem a credibilidade
              da sua empresa, aumentam a confiança dos seus clientes e
              transformam visitantes em oportunidades reais de negócio.
            </motion.p>

            {/* CTA buttons — magnetic */}
            <motion.div
              variants={itemVariants}
              className="flex flex-row flex-wrap gap-4 mt-10"
            >
              <MagneticButton strength={0.35}>
                <Button sectionId="contact">Solicitar Análise Gratuita</Button>
              </MagneticButton>

              <MagneticButton strength={0.25}>
                <Button
                  sectionId="process"
                  variant="secondary"
                  rightIcon={<ArrowRight size={18} />}
                >
                  Conheça Nosso Processo
                </Button>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* ── Right: Showcase with 3D parallax ──────── */}
          <motion.div
            ref={showcaseContainerRef}
            variants={showcaseVariants}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            onMouseMove={!reduce ? handleMouseMove : undefined}
            onMouseLeave={!reduce ? handleMouseLeave : undefined}
            className="perspective-[1200px]"
            style={{
              transform: reduce
                ? undefined
                : `rotateY(${mousePos.x * 4}deg) rotateX(${-mousePos.y * 4}deg)`,
              transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              whileHover={
                reduce
                  ? undefined
                  : { scale: 1.015, transition: { duration: 0.4, ease: EASE } }
              }
            >
              <HeroShowcase />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
