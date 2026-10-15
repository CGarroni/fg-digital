"use client";

import { MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/ui/MagneticButton";
import { CTA_LABEL, whatsappLink } from "@/lib/contact";

/**
 * Contato — WhatsApp-first.
 * Boutique conversa: sem formulário longo, o visitante fala direto
 * com o Francisco pelo WhatsApp com mensagem pré-preenchida.
 */
export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div
        aria-hidden
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_center,#D4AF3714,transparent_55%)]
        "
      />

      <div className="max-w-4xl mx-auto px-6 relative text-center">
        <AnimatedSection>
          <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm">
            Vamos conversar
          </span>

          <h2 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl mt-6 leading-tight">
            Falar sobre{" "}
            <span className="gold-gradient">meu projeto.</span>
          </h2>

          <p className="text-neutral-300 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Sem formulários longos, sem espera. Você fala direto comigo no
            WhatsApp, me conta sobre o seu projeto e eu respondo com os
            próximos passos.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mt-12 flex justify-center">
            <MagneticButton strength={0.35}>
              <Button
                href={whatsappLink()}
                size="lg"
                leftIcon={<MessageCircle size={20} />}
              >
                {CTA_LABEL}
              </Button>
            </MagneticButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
