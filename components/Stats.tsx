"use client";

import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          grid
          md:grid-cols-3
          gap-8
          "
        >

          <motion.div
            whileHover={{
              y: -8,
            }}
            className="
            bg-[#0B0B0B]
            rounded-3xl
            p-8
            text-center
            border
            border-white/5
            "
          >
            <h3 className="text-4xl sm:text-5xlfont-bold gold-gradient">
              Premium
            </h3>

            <p className="text-zinc-400 mt-3">
              Design Estratégico
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
            }}
            className="
            bg-[#0B0B0B]
            rounded-3xl
            p-8
            text-center
            border
            border-white/5
            "
          >
            <h3 className="text-4xl sm:text-5xlfont-bold gold-gradient">
              UX
            </h3>

            <p className="text-zinc-400 mt-3">
              Experiência Premium
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
            }}
            className="
            bg-[#0B0B0B]
            rounded-3xl
            p-8
            text-center
            border
            border-white/5
            "
          >
            <h3 className="text-4xl sm:text-5xlfont-bold gold-gradient">
              SEO
            </h3>

            <p className="text-zinc-400 mt-3">
              Estrutura Otimizada
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}