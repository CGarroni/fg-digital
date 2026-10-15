// lib/contact.ts — ponto único de contato da FG Digital.
//
// Todos os CTAs principais do site ("Falar sobre meu projeto") apontam
// para o WhatsApp através de `whatsappLink()`. Quando o número ainda não
// foi configurado, o fallback é a seção de contato da página.

/** Número da FG Digital no formato internacional, só dígitos (ex.: "5551999999999"). */
export const WHATSAPP_NUMBER = "5551998467866";

export const WHATSAPP_MESSAGE = "Olá! Quero falar sobre meu projeto";

export const CTA_LABEL = "Falar sobre meu projeto";

export function whatsappLink(message: string = WHATSAPP_MESSAGE): string {
  if (!WHATSAPP_NUMBER) return "#contact";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
