import { LucideIcon } from "lucide-react";

interface InfoBadgeProps {
  icon: LucideIcon;
  title: string;
  value: string;
  className?: string;
}

export default function InfoBadge({
  icon: Icon,
  title,
  value,
  className = "",
}: InfoBadgeProps) {
  return (
    <div
      className={`
        w-full
        max-w-45
        bg-black/60
        backdrop-blur-xl
        border
        border-[#D4AF37]/10
        rounded-2xl
        px-4
        py-3
        ${className}
      `}
    >
      <div className="flex items-center gap-2.5">
        <Icon
          size={16}
          className="text-[#D4AF37] shrink-0"
        />

        <div className="leading-tight">
          <p className="text-[11px] text-zinc-500">
            {title}
          </p>

          <p className="text-sm font-semibold text-zinc-100">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}