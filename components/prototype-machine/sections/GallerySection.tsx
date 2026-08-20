import Image from "next/image";
import type { GallerySection as GallerySectionType } from "@/types/landing";

type GallerySectionProps = {
  section: GallerySectionType;
};

export default function GallerySection({ section }: GallerySectionProps) {
  return (
    <section
      id={section.id}
      className="px-6 py-20 bg-(--prototype-bg) text-(--prototype-text)"
    >
      <div className="max-w-7xl mx-auto">
        {(section.eyebrow || section.title || section.description) && (
          <div className="max-w-3xl mb-10">
            {section.eyebrow && (
              <p className="text-xs uppercase tracking-[0.22em] text-(--prototype-primary)">
                {section.eyebrow}
              </p>
            )}

            <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
              {section.title}
            </h2>

            {section.description && (
              <p className="mt-4 text-(--prototype-muted) text-base md:text-lg">
                {section.description}
              </p>
            )}
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          {section.images.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="overflow-hidden rounded-[1.75rem] border border-(--prototype-border) bg-(--prototype-surface)"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}