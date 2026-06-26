"use client";

import { Mail, MessageCircle, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          grid
          lg:grid-cols-[1fr_1.1fr]
          gap-12
          bg-[#0B0B0B]
          border
          border-[#D4AF37]/10
          rounded-4xl
          p-10
          lg:p-16
          "
        >

          <div>

            <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm">
              Solicite uma análise
            </span>

            <h2 className="text-4xl sm:text-5xlfont-bold mt-6">
              Vamos transformar sua presença digital.
            </h2>

            <p className="text-zinc-400 mt-6 text-lg">
              Receba uma análise gratuita e descubra como sua empresa pode transmitir mais confiança, autoridade e gerar mais oportunidades.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-[#D4AF37]" />
                <span>contato@fgdigital.com.br</span>
              </div>

              <div className="flex items-center gap-4">
                <MessageCircle className="text-[#D4AF37]" />
                <span>Atendimento via WhatsApp</span>
              </div>

            </div>

          </div>

          <form className="space-y-5">

            <input
              placeholder="Nome"
              className="
              w-full
              bg-black/30
              border
              border-white/10
              rounded-xl
              p-4
              outline-none
              "
            />

            <input
              placeholder="Empresa"
              className="
              w-full
              bg-black/30
              border
              border-white/10
              rounded-xl
              p-4
              outline-none
              "
            />

            <input
              placeholder="WhatsApp"
              className="
              w-full
              bg-black/30
              border
              border-white/10
              rounded-xl
              p-4
              outline-none
              "
            />

            <textarea
              rows={5}
              placeholder="Conte um pouco sobre seu projeto"
              className="
              w-full
              bg-black/30
              border
              border-white/10
              rounded-xl
              p-4
              outline-none
              "
            />

            <button
              className="
              w-full
              bg-[#D4AF37]
              text-black
              font-semibold
              py-4
              rounded-2xl
              flex
              justify-center
              items-center
              gap-2
              hover:bg-[#E6C766]
              transition
              cursor-pointer
              "
            >
              Solicitar Análise Gratuita
              <ArrowRight size={18} />
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}