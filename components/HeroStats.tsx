"use client";

import { ShieldCheck, TrendingUp, Gem } from "lucide-react";

const stats = [
  {
    icon: ShieldCheck,
    title: "Credibilidade",
  },
  {
    icon: Gem,
    title: "Autoridade",
  },
  {
    icon: TrendingUp,
    title: "Conversão",
  },
];

export default function HeroStats() {
  return (
    <>
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
            flex
            items-center
            gap-3
            bg-[#0B0B0B]/80
            backdrop-blur-xl
            border
            border-[#D4AF37]/10
            rounded-2xl
            px-5
            py-4
            "
          >
            <Icon
              size={18}
              className="text-[#D4AF37]"
            />

            <span className="text-sm">
              {item.title}
            </span>
          </div>
        );
      })}
    </>
  );
}