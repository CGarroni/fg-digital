// import type { HeroSection as HeroSectionType } from "@/types/landing";
// import PrototypeButton from "@/components/prototype-machine/PrototypeButton";

// type HeroSectionProps = {
//   section: HeroSectionType;
// };

// export default function HeroSection({ section }: HeroSectionProps) {
//   return (
//     <section
//       id={section.id}
//       className="min-h-screen flex items-center px-6 bg-(--prototype-bg) text-(--prototype-text)"
//     >
//       <div className="max-w-6xl mx-auto w-full">
//         {section.eyebrow && (
//           <span className="text-xs uppercase tracking-[0.25em] text-(--prototype-primary)">
//             {section.eyebrow}
//           </span>
//         )}

//         <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.95] mt-6 max-w-4xl">
//           {section.title}
//           {section.highlightedText && (
//             <span className="block text-(--prototype-primary)">
//               {section.highlightedText}
//             </span>
//           )}
//         </h1>

//         <p className="text-(--prototype-muted) text-lg md:text-xl mt-8 max-w-2xl">
//           {section.description}
//         </p>

//         <div className="flex flex-wrap gap-4 mt-10">
//           <PrototypeButton
//             sectionId={section.primaryCta.sectionId}
//             variant={section.primaryCta.variant}
//           >
//             {section.primaryCta.label}
//           </PrototypeButton>

//           {section.secondaryCta && (
//             <PrototypeButton
//               sectionId={section.secondaryCta.sectionId}
//               variant={section.secondaryCta.variant}
//             >
//               {section.secondaryCta.label}
//             </PrototypeButton>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import type { HeroSection as HeroSectionType } from "@/types/landing";
import PrototypeButton from "@/components/prototype-machine/PrototypeButton";

type HeroSectionProps = {
  section: HeroSectionType;
};

export default function HeroSection({ section }: HeroSectionProps) {
  return (
    <section
      id={section.id}
      className="min-h-screen flex items-center px-6 py-20 bg-(--prototype-bg) text-(--prototype-text)"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {section.eyebrow && (
            <span className="text-xs uppercase tracking-[0.25em] text-(--prototype-primary)">
              {section.eyebrow}
            </span>
          )}

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.95] mt-6 max-w-4xl">
            {section.title}
            {section.highlightedText && (
              <span className="block text-(--prototype-primary)">
                {section.highlightedText}
              </span>
            )}
          </h1>

          <p className="text-(--prototype-muted) text-lg md:text-xl mt-8 max-w-2xl">
            {section.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            {section.primaryCta.kind === "external" ? (
              <PrototypeButton
                kind="external"
                href={section.primaryCta.href}
                variant={section.primaryCta.variant}
              >
                {section.primaryCta.label}
              </PrototypeButton>
            ) : (
              <PrototypeButton
                sectionId={section.primaryCta.sectionId}
                variant={section.primaryCta.variant}
              >
                {section.primaryCta.label}
              </PrototypeButton>
            )}

            {section.secondaryCta &&
              (section.secondaryCta.kind === "external" ? (
                <PrototypeButton
                  kind="external"
                  href={section.secondaryCta.href}
                  variant={section.secondaryCta.variant}
                >
                  {section.secondaryCta.label}
                </PrototypeButton>
              ) : (
                <PrototypeButton
                  sectionId={section.secondaryCta.sectionId}
                  variant={section.secondaryCta.variant}
                >
                  {section.secondaryCta.label}
                </PrototypeButton>
              ))}
          </div>
        </div>

        {section.image && (
          <div className="relative">
            <div className="absolute inset-0 rounded-4xl bg-(--prototype-primary) opacity-10 blur-3xl" />
            <div className="relative overflow-hidden rounded-4xl border border-(--prototype-border) bg-(--prototype-surface)">
              <Image
                src={section.image.src}
                alt={section.image.alt}
                width={900}
                height={1100}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}