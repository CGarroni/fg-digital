"use client";

import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/Textarea";


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

            <h2 className="text-4xl sm:text-5xl font-bold mt-6">
              Vamos transformar sua presença digital.
            </h2>

            <p className="text-zinc-400 mt-6 text-lg">
              Receba uma análise personalizada da presença digital da sua empresa e descubra            oportunidades para transmitir mais confiança, fortalecer sua marca e conquistar novos clientes.
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

            <Input
              placeholder="Nome"
              type="text"
            />

            <Input
              placeholder="Empresa"
              type="text"
            />

            <Input
              placeholder="WhatsApp"
              type="tel"
            />



            <Textarea
              rows={5}
              placeholder="Conte um pouco sobre seu projeto"
            />

            <Button
              type="submit"
              fullWidth
          >
              Solicitar Análise Gratuita
              {<ArrowRight size={18} />}
            </Button>
          </form>

        </div>

      </div>
    </section>
  );
}