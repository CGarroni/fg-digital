import type { ServicesSection as ServicesSectionType } from "@/types/landing";
import PrototypeButton from "@/components/prototype-machine/PrototypeButton";

type ServicesSectionProps = {
  section: ServicesSectionType;
};

export default function ServicesSection({
  section,
}: ServicesSectionProps) {
  return (
    <section
      id={section.id}
      className="px-6 py-24 bg-(--prototype-bg) text-(--prototype-text)"
    >
      <div className="max-w-7xl mx-auto">
        {section.eyebrow && (
          <span className="text-sm uppercase tracking-[0.25em] text-(--prototype-primary)">
            {section.eyebrow}
          </span>
        )}

        <h2 className="text-3xl md:text-5xl font-bold mt-6 max-w-4xl">
          {section.title}
        </h2>

        {section.description && (
          <p className="text-(--prototype-muted) text-lg mt-6 max-w-3xl">
            {section.description}
          </p>
        )}

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {section.items.map((item) => (
            <article
              key={item.id}
              className={`rounded-3xl border p-8 ${
                item.highlight
                  ? "border-(--prototype-primary) bg-(--prototype-surface)"
                  : "border-(--prototype-border) bg-(--prototype-surface)"
              }`}
            >
              {item.subtitle && (
                <span className="text-sm uppercase tracking-[0.2em] text-(--prototype-primary)">
                  {item.subtitle}
                </span>
              )}

              <h3 className="text-2xl font-bold mt-4">
                {item.title}
              </h3>

              <p className="text-(--prototype-muted) mt-4">
                {item.description}
              </p>

              <ul className="mt-6 space-y-3">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-(--prototype-text) flex items-start gap-2"
                  >
                    <span className="text-(--prototype-primary)">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <PrototypeButton
                  sectionId="contact"
                  variant={item.highlight ? "primary" : "secondary"}
                >
                  {item.buttonText}
                </PrototypeButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}