import type { TrustBarSection as TrustBarSectionType } from "@/types/landing";

type TrustBarSectionProps = {
  section: TrustBarSectionType;
};

export default function TrustBarSection({ section }: TrustBarSectionProps) {
  return (
    <section
      id={section.id}
      className="px-6 py-6 bg-(--prototype-surface) border-y border-(--prototype-border)"
    >
      <div className="max-w-7xl mx-auto grid gap-4 md:grid-cols-3">
        {section.items.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-(--prototype-border) bg-black/10 px-5 py-4"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-(--prototype-primary)">
              {item.label}
            </p>
            <p className="mt-2 text-sm md:text-base text-(--prototype-text)">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}