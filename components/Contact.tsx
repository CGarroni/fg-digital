"use client";

import { Mail, MessageCircle } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <StaggerGroup
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
          <StaggerItem>
            <StaggerGroup stagger={0.1}>
              <StaggerItem>
                <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm">
                  Solicite uma análise
                </span>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-4xl sm:text-5xl font-bold mt-6">
                  Vamos transformar sua presença digital.
                </h2>
              </StaggerItem>

              <StaggerItem>
                <p className="text-zinc-400 mt-6 text-lg">
                  Receba uma análise personalizada da presença digital da sua
                  empresa e descubra oportunidades para transmitir mais
                  confiança, fortalecer sua marca e conquistar novos clientes.
                </p>
              </StaggerItem>

              <StaggerItem>
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
              </StaggerItem>
            </StaggerGroup>
          </StaggerItem>

          <StaggerItem>
            <ContactForm />
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
