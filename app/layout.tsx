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

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

/* ── JSON-LD structured data for Google ───────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/hero/fg-digital.png`,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  author: {
    "@type": "Person",
    name: siteConfig.author,
  },
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  knowsLanguage: ["pt-BR", "en"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Soluções FG Digital",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing Page Premium",
          description:
            "Páginas de alta conversão projetadas para transformar visitantes em clientes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Site Institucional",
          description:
            "Sites profissionais que transmitem credibilidade e fortalecem a marca da sua empresa.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Presença Digital Completa",
          description:
            "Solução escalável com automações, integrações e evolução contínua.",
        },
      },
    ],
  },
  /* Placeholder fields for future LocalBusiness upgrade */
  // telephone: "+55-XX-XXXXX-XXXX",
  // address: {
  //   "@type": "PostalAddress",
  //   streetAddress: "",
  //   addressLocality: "",
  //   addressRegion: "",
  //   postalCode: "",
  //   addressCountry: "BR",
  // },
  // openingHoursSpecification: {
  //   "@type": "OpeningHoursSpecification",
  //   dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  //   opens: "09:00",
  //   closes: "18:00",
  // },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
