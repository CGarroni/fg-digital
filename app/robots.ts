import type { MetadataRoute } from "next";

/* Domínio atual do deploy. Quando houver domínio definitivo (registro.br), trocar aqui. */
const BASE_URL = "https://fg-digital.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
