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
        bg-black/60
        backdrop-blur-xl
        border
        border-[#D4AF37]/10
        rounded-2xl
        p-4
        ${className}
      `}
    >
      <div className="flex items-center gap-3">
        <Icon
          size={18}
          className="text-[#D4AF37] shrink-0"
        />

        <div>
          <p className="text-xs text-zinc-500">
            {title}
          </p>

          <p className="text-sm font-medium">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}