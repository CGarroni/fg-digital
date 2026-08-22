"use client";

import { StaggerGroup, StaggerItem } from "@/components/Stagger";

const stats = [
  {
    title: "Premium",
    description: "Design Estratégico",
  },
  {
    title: "UX",
    description: "Experiência Premium",
  },
  {
    title: "SEO",
    description: "Estrutura Otimizada",
  },
];

export default function Stats() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <StaggerGroup className="grid md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <StaggerItem
              key={stat.title}
              whileHover={{ y: -8 }}
              className="
                bg-[#0B0B0B]
                rounded-3xl
                p-8
                text-center
                border
                border-white/5
              "
            >
              <h3 className="text-4xl sm:text-5xl font-bold gold-gradient">
                {stat.title}
              </h3>

              <p className="text-zinc-400 mt-3">{stat.description}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
