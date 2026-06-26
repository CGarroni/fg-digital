"use client";

import { navLinks } from "@/lib/constants";
import { scrollToSection } from "@/utils/scrollToSection";
import Image from "next/image";

const whatsappUrl =
  "https://wa.me/5551998467866?text=Olá,%20gostaria%20de%20uma%20análise%20gratuita.";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 backdrop-blur-xl bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          <Image
  src="/images/hero/fg-digital.png"
  alt="FG"
  width={56}
  height={56}
/>

          <nav className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-zinc-300 cursor-pointer hover:text-[#D4AF37] transition"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            className="
              bg-[#D4AF37]
              text-black
              px-6
              py-3
              rounded-2xl
              font-medium
              hover:bg-[#E6C766]
              transition
            "
          >
            Solicitar Análise Gratuita
          </a>

        </div>
      </div>
    </header>
  );
}