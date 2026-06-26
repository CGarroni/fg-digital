"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendemos sua empresa, objetivos e desafios.",
  },
  {
    number: "02",
    title: "Estratégia",
    description:
      "Definimos a melhor estrutura para gerar resultados.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Construímos uma experiência digital premium.",
  },
  {
    number: "04",
    title: "Evolução",
    description:
      "Acompanhamos melhorias e crescimento contínuo.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-padding"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm">
            Processo
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Um processo claro para gerar resultados.
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
              relative
              bg-[#0B0B0B]
              border
              border-white/5
              rounded-3xl
              p-8
              "
            >
              <span
                className="
                text-5xl
                font-bold
                text-[#D4AF37]/20
                "
              >
                {step.number}
              </span>

              <h3 className="text-2xl font-semibold mt-6">
                {step.title}
              </h3>

              <p className="text-zinc-400 mt-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}