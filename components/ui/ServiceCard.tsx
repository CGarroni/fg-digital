"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import Button from "@/components/ui/Button";
import type { Service } from "@/lib/data/services";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const {
    title,
    subtitle,
    description,
    features,
    buttonText,
    highlight,
  } = service;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={clsx(
        `
          relative
          flex
          flex-col
          h-full
          rounded-3xl
          border
          bg-linear-to-b
          from-[#111111]
          to-[#090909]
          p-8
          transition-all
          duration-500
          ease-out
        `,
        highlight
          ? "border-[#D4AF37]/40 shadow-[0_18px_45px_rgba(212,175,55,.12)] lg:scale-[1.03]"
          : "border-[#D4AF37]/10 hover:border-[#D4AF37]/25"
      )}
    >
      {/* ── Pulsing glow ring (highlighted plan only) ──── */}
      {highlight && (
        <div
          className="
            absolute
            -inset-px
            rounded-3xl
            pointer-events-none
            z-0
          "
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.3), transparent 50%, rgba(212,175,55,0.15))",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
            animation: "premium-pulse 3s ease-in-out infinite",
          }}
        />
      )}

      {/* ── Content ────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col h-full">
        <span
          className={clsx(
            "inline-flex self-start rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium",
            highlight
              ? "bg-[#D4AF37] text-black"
              : "bg-[#D4AF37]/10 text-[#D4AF37]"
          )}
        >
          {subtitle}
        </span>

        <h3 className="mt-6 text-3xl font-bold">{title}</h3>

        {/* Description — accessible contrast */}
        <p className="mt-5 text-neutral-300 leading-relaxed">
          {description}
        </p>

        {/* Features list */}
        <ul className="mt-8 space-y-4 flex-1">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckCircle2
                size={18}
                className="mt-0.5 shrink-0 text-[#D4AF37]"
              />

              <span className="text-neutral-300">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-10">
          <Button
            fullWidth
            variant={highlight ? "primary" : "secondary"}
            sectionId="contact"
          >
            {buttonText}
          </Button>
        </div>
      </div>

      {/* ── Bottom accent line ─────────────────────────── */}
      <div
        className="
          absolute
          bottom-0
          left-8
          right-8
          h-px
          bg-linear-to-r
          from-transparent
          via-[#D4AF37]/50
          to-transparent
          z-10
        "
      />
    </motion.div>
  );
}
