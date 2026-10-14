import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { faq } from "@/lib/data/faq";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* Serifada editorial — identidade boutique (headlines) */
const displaySerif = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

/* Manuscrita — assinatura do fundador */
const signatureScript = Great_Vibes({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fg-digital.vercel.app"),

  title: {
    default: siteConfig.title,
    template: "%s | FG Digital",
  },

  description: siteConfig.description,

  keywords: [
    "FG Digital",
    "Criação de Sites Porto Alegre",
    "Site para empresas Porto Alegre",
    "Landing Page",
    "Site Institucional",
    "Criação de Sites",
    "Desenvolvimento Web",
    "Agência digital Rio Grande do Sul",
    "Região Metropolitana de Porto Alegre",
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
  areaServed: [
    {
      "@type": "City",
      name: "Porto Alegre",
      containedInPlace: { "@type": "State", name: "Rio Grande do Sul" },
    },
    { "@type": "City", name: "Canoas" },
    { "@type": "City", name: "São Leopoldo" },
    { "@type": "City", name: "Novo Hamburgo" },
    { "@type": "City", name: "Gravataí" },
    { "@type": "City", name: "Viamão" },
    { "@type": "City", name: "Alvorada" },
    { "@type": "City", name: "Cachoeirinha" },
    { "@type": "City", name: "Esteio" },
    { "@type": "City", name: "Sapucaia do Sul" },
    { "@type": "City", name: "Guaíba" },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: -30.0346,
    longitude: -51.2177,
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

/* ── FAQPage: reforça SEO clássico e citação por IAs/respostas ─── */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${displaySerif.variable} ${signatureScript.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {/* Geo tags — reforço de localização para buscadores */}
        <meta name="geo.region" content="BR-RS" />
        <meta name="geo.placename" content="Porto Alegre" />
        <meta name="geo.position" content="-30.0346;-51.2177" />
        <meta name="ICBM" content="-30.0346, -51.2177" />
      </head>

      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
