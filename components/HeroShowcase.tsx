"use client";

import Image from "next/image";
import Floating from "@/components/Floating";
import { Globe, BarChart3 } from "lucide-react";
import InfoBadge from "@/components/ui/InfoBadge";

export default function HeroShowcase() {
  return (
    <div className="relative pb-24 sm:pb-16">
      <div
        className="
          relative
          h-107.5
          sm:h-135
          lg:h-155
          xl:h-190
          rounded-3xl
          lg:rounded-4xl
          overflow-hidden
          border
          border-[#D4AF37]/10
          shadow-[0_0_80px_rgba(212,175,55,0.08)]
        "
      >
        <Image
          src="/images/hero/hero-premium.png"
          alt="Mockup de website premium desenvolvido pela FG Digital"
          fill
          priority
          className="object-cover"
        />

        <div
          className="
            absolute
            inset-0
            bg-linear-to-t
            from-black/40
            via-transparent
            to-transparent
          "
        />
      </div>

      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2
          bottom-0

          flex
          flex-col
          sm:flex-row

          gap-5
          sm:gap-4

          w-[92%]
          sm:w-auto

          items-center
          justify-center
        "
      >
        <Floating>
          <InfoBadge
            icon={Globe}
            title="Método"
            value="Estratégia + Design"
          />
        </Floating>

        <Floating>
          <InfoBadge
            icon={BarChart3}
            title="Resultado"
            value="Autoridade + Conversão"
          />
        </Floating>
      </div>
    </div>
  );
}
