"use client";

import { useState } from "react";
import type { FAQSection as FAQSectionType } from "@/types/landing";

type FAQSectionProps = {
  section: FAQSectionType;
};

export default function FAQSection({ section }: FAQSectionProps) {
  const [openItemId, setOpenItemId] = useState<string | null>(
    section.items[0]?.id ?? null
  );

  const toggleItem = (id: string) => {
    setOpenItemId((current) => (current === id ? null : id));
  };

  return (
    <section
      id={section.id}
      className="px-6 py-24 bg-(--prototype-bg) text-(--prototype-text)"
    >
      <div className="max-w-4xl mx-auto">
        {section.eyebrow && (
          <span className="text-sm uppercase tracking-[0.25em] text-(--prototype-primary)">
            {section.eyebrow}
          </span>
        )}

        <h2 className="text-3xl md:text-5xl font-bold mt-6">
          {section.title}
        </h2>

        {section.description && (
          <p className="text-(--prototype-muted) text-lg mt-6 max-w-2xl">
            {section.description}
          </p>
        )}

        <div className="mt-12 space-y-4">
          {section.items.map((item) => {
            const isOpen = openItemId === item.id;

            return (
              <article
                key={item.id}
                className="rounded-3xl border border-(--prototype-border) bg-(--prototype-surface) overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${item.id}`}
                >
                  <span className="text-lg font-semibold">
                    {item.question}
                  </span>

                  <span className="text-(--prototype-primary) text-2xl leading-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-content-${item.id}`}
                    className="px-6 pb-6 text-(--prototype-muted)"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}