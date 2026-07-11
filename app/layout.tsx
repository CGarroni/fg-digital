import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: "%s | FG Digital",
  },

  description: siteConfig.description,

  keywords: [
    "FG Digital",
    "Landing Page",
    "Site Institucional",
    "Criação de Sites",
    "Desenvolvimento Web",
    "Next.js",
    "Presença Digital",
    "Conversão",
    "Marketing Digital",
  ],

  authors: [
    {
      name: siteConfig.author,
    },
  ],

  creator: siteConfig.name,

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
