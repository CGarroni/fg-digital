"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroShowcase from "@/components/HeroShowcase";
import Button from "@/components/ui/Button";
import { EASE } from "@/components/motion";

export default function Hero() {
  const reduce = useReducedMotion();

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

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
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

            <motion.h1
              id="hero-title"
              variants={itemVariants}
              className="
                text-4xl sm:text-5xl md:text-7xl
                font-bold
                leading-[0.95]
              "
            >
              Transformamos
              <span className="gold-gradient block">empresas em</span>
              referências digitais.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="
                text-zinc-400
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

            <motion.div
              variants={itemVariants}
              className="flex flex-row flex-wrap gap-4 mt-10"
            >
              <Button sectionId="contact">Solicitar Análise Gratuita</Button>

              <Button
                sectionId="process"
                variant="secondary"
                rightIcon={<ArrowRight size={18} />}
              >
                Conheça Nosso Processo
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={showcaseVariants}
            initial="hidden"
            animate="visible"
          >
            <HeroShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
