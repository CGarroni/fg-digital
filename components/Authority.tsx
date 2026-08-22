"use client";

import { StaggerGroup, StaggerItem } from "@/components/Stagger";

export default function Authority() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <StaggerGroup
          className="
            bg-[#0B0B0B]
            border
            border-[#D4AF37]/10
            rounded-4xl
            p-12
            text-center
          "
        >
          <StaggerItem>
            <span className="text-[#D4AF37] uppercase tracking-[0.25em]">
              Nossa visão
            </span>
          </StaggerItem>

          <StaggerItem>
            <h2 className="text-4xl sm:text-5xl font-bold mt-8 max-w-4xl mx-auto">
              Sua presença digital é muitas vezes o primeiro contato que um
              cliente terá com sua empresa.
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="max-w-3xl mx-auto text-zinc-400 mt-8 text-lg">
              Empresas que investem em credibilidade, posicionamento e
              experiência digital saem na frente. A FG Digital existe para
              ajudar negócios a transmitir o valor que realmente entregam.
            </p>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
