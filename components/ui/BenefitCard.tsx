"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  result: string;
}

export default function BenefitCard({
  icon: Icon,
  title,
  description,
  result,
}: BenefitCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setSpot({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setSpot((prev) => ({ ...prev, active: false }));
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="
        relative
        h-full
        overflow-hidden
        rounded-3xl
        border
        border-[#D4AF37]/10
        bg-linear-to-b
        from-[#111111]
        to-[#090909]
        p-8
        shadow-[0_8px_30px_rgba(212,175,55,0.04)]
        hover:border-[#D4AF37]/30
        hover:shadow-[0_18px_45px_rgba(212,175,55,0.10)]
        transition-[border-color,box-shadow]
        duration-500
        ease-out
        cursor-default
      "
    >
      {/* ── Mouse spotlight overlay ─────────────────────── */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-3xl
          z-0
          transition-opacity
          duration-300
        "
        style={{
          opacity: spot.active ? 1 : 0,
          background: `radial-gradient(
            600px circle at ${spot.x}px ${spot.y}px,
            rgba(212,175,55,0.06),
            transparent 40%
          )`,
        }}
      />

      {/* ── Content ─────────────────────────────────────── */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: -8, scale: 1.15 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="
            w-14
            h-14
            rounded-2xl
            bg-[#D4AF37]/8
            ring-1
            ring-[#D4AF37]/20
            flex
            items-center
            justify-center
            transition-colors
            duration-300
            hover:bg-[#D4AF37]/12
          "
        >
          <Icon size={28} className="text-[#D4AF37]" />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-semibold mt-7">{title}</h3>

        {/* Description — accessible contrast on dark bg */}
        <p className="text-base text-neutral-300 mt-5 leading-relaxed">
          {description}
        </p>

        {/* Result badge */}
        <div className="flex items-center gap-2 mt-8">
          <CheckCircle2
            size={18}
            className="text-[#D4AF37] shrink-0"
          />

          <p className="text-sm font-medium text-[#F5F5F5]">{result}</p>
        </div>
      </div>
    </motion.div>
  );
}
