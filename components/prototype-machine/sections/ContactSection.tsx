import type { ContactSection as ContactSectionType } from "@/types/landing";
import PrototypeButton from "@/components/prototype-machine/PrototypeButton";

type ContactSectionProps = {
  section: ContactSectionType;
};

export default function ContactSection({
  section,
}: ContactSectionProps) {
  return (
    <section
      id={section.id}
      className="px-6 py-24 bg-(--prototype-bg) text-(--prototype-text)"
    >
      <div className="max-w-5xl mx-auto rounded-4xl border border-(--prototype-border) bg-(--prototype-surface) p-8 md:p-12">
        {section.eyebrow && (
          <span className="text-sm uppercase tracking-[0.25em] text-(--prototype-primary)">
            {section.eyebrow}
          </span>
        )}

        <h2 className="text-3xl md:text-5xl font-bold mt-6 max-w-3xl">
          {section.title}
        </h2>

        <p className="text-(--prototype-muted) text-lg mt-6 max-w-2xl">
          {section.description}
        </p>

        <div className="mt-10 space-y-4 text-(--prototype-text)">
          {section.email && <p>{section.email}</p>}
          {section.whatsappLabel && <p>{section.whatsappLabel}</p>}
        </div>

        <div className="mt-10">
          <PrototypeButton sectionId="hero" variant="primary">
            Solicitar Análise Gratuita
          </PrototypeButton>
        </div>
      </div>
    </section>
  );
}