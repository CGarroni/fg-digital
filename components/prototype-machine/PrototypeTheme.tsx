import type { ReactNode, CSSProperties } from "react";
import type { ThemeConfig } from "@/types/landing";

type PrototypeThemeProps = {
  theme: ThemeConfig;
  children: ReactNode;
};

type PrototypeThemeStyle = CSSProperties & {
  "--prototype-bg": string;
  "--prototype-surface": string;
  "--prototype-primary": string;
  "--prototype-primary-hover": string;
  "--prototype-text": string;
  "--prototype-muted": string;
  "--prototype-border": string;
};

export default function PrototypeTheme({
  theme,
  children,
}: PrototypeThemeProps) {
  const style: PrototypeThemeStyle = {
    "--prototype-bg": theme.colors.background,
    "--prototype-surface": theme.colors.surface,
    "--prototype-primary": theme.colors.primary,
    "--prototype-primary-hover": theme.colors.primaryHover,
    "--prototype-text": theme.colors.text,
    "--prototype-muted": theme.colors.muted,
    "--prototype-border": theme.colors.border,
  };

  return (
    <div
      style={style}
      className="min-h-screen bg-(--prototype-bg) text-(--prototype-text)"
    >
      {children}
    </div>
  );
}