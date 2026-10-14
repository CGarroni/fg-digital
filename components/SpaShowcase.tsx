"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/ui/MagneticButton";
import BeforeAfter, { type BeforeAfterPair } from "@/components/BeforeAfter";
import { CTA_LABEL, whatsappLink } from "@/lib/contact";

const PAIRS: BeforeAfterPair[] = [
  {
    id: "hero",
    label: "Início",
    before: "/images/cases/spa-lisiane/antes/antes-hero.jpg",
    beforeAlt: "",
    after: "/images/cases/spa-lisiane/depois/depois-hero.jpg",
    afterAlt: "Hero do site remodelado do Spa Lisiane Garroni",
    aspect: "1200 / 828",
  },
  {
    id: "servicos",
    label: "Serviços",
    before: "/images/cases/spa-lisiane/antes/antes-metodos.jpg",
    beforeAlt: "",
    after: "/images/cases/spa-lisiane/depois/depois-experiencias.jpg",
    afterAlt: "Seção de experiências do site remodelado",
    aspect: "1200 / 828",
  },
  {
    id: "sobre",
    label: "Sobre",
    before: "/images/cases/spa-lisiane/antes/antes-sobre.jpg",
    beforeAlt: "",
    after: "/images/cases/spa-lisiane/depois/depois-sobre.jpg",
    afterAlt: "Seção sobre do site remodelado",
    aspect: "1200 / 828",
  },
  {
    id: "pacotes",
    label: "Pacotes",
    before: "/images/cases/spa-lisiane/antes/antes-pacotes.jpg",
    beforeAlt: "",
    after: "/images/cases/spa-lisiane/depois/depois-pacotes.jpg",
    afterAlt: "Seção de pacotes do site remodelado",
    aspect: "1200 / 828",
  },
];

/**
 * SpaShowcase — case em destaque com comparador antes/depois.
 * A prova concreta da transformação: o visitante arrasta e vê
 * o salto do site antigo para o remodel "Essência".
 */
export default function SpaShowcase() {
  return (
    <section
      id="case-spa"
      aria-labelledby="spa-showcase-title"
      className="section-padding relative overflow-hidden"
    >
      <div
        aria-hidden
        className="
          absolute inset-0 pointer-events-none
          bg-[radial-gradient(circle_at_bottom_left,#D4AF370d,transparent_45%)]
        "
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimatedSection>
          <div id="spa-showcase-title">
            <SectionHeader
              eyebrow="Case em destaque"
              title="Do comum ao extraordinário."
              description="O Spa Lisiane Garroni tinha um site funcional — e saiu de lá com uma experiência digital à altura do atendimento premium que ele entrega. Compare a transformação, seção por seção."
            />
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-14">
          <BeforeAfter pairs={PAIRS} />
        </AnimatedSection>

        <AnimatedSection className="mt-12 text-center">
          <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Redesign completo em conceito luxo editorial: storytelling da
            fundadora, método exclusivo, serviços e pacotes — tudo conduzindo
            ao agendamento pelo WhatsApp.
          </p>
          <div className="mt-8 flex justify-center">
            <MagneticButton strength={0.35}>
              <Button
                href={whatsappLink(
                  "Olá! Vi a transformação do site do Spa Lisiane Garroni e quero algo assim para o meu negócio."
                )}
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
