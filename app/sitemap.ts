import type { MetadataRoute } from "next";

/* Domínio atual do deploy. Quando houver domínio definitivo (registro.br), trocar aqui. */
const BASE_URL = "https://fg-digital.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
