"use client";

import clsx from "clsx";

interface AmbientBackgroundProps {
  className?: string;
}

export default function AmbientBackground({
  className,
}: AmbientBackgroundProps) {
  return (
    <div
      className={clsx(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      {/* Glow Superior */}
      <div
        className="
          absolute
          -top-32
          -left-24
          w-96
          h-96
          rounded-full
          bg-[#D4AF37]/6
          blur-[180px]
        "
      />

      {/* Glow Inferior */}
      <div
        className="
          absolute
          -bottom-32
          -right-24
          w-96
          h-96
          rounded-full
          bg-[#D4AF37]/5
          blur-[200px]
        "
      />
    </div>
  );
}