// lib/data/cases.ts — portfólio real da FG Digital

export interface Case {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  featured?: boolean;
}

export const cases: Case[] = [
  {
    id: "spa-lisiane",
    name: "Spa Lisiane Garroni",
    category: "Site premium",
    image: "/images/cases/spa-lisiane.png",
    description:
      "Redesign completo em conceito luxo editorial — do storytelling ao agendamento via WhatsApp.",
    featured: true,
  },
  {
    id: "tati-silva",
    name: "Tati Silva Nail Designer",
    category: "Site institucional",
    image: "/images/cases/tati-silva.png",
    description:
      "Presença digital delicada e feminina, com foco em agendamento e prova social.",
  },
  {
    id: "fino-corte",
    name: "Fino Corte Barbearia",
    category: "Site institucional",
    image: "/images/cases/fino-corte.png",
    description:
      "Identidade clássica de barbearia traduzida para o digital, com agendamento em destaque.",
  },
  {
    id: "dr-newton",
    name: "Dr. Newton da Luz Fernandes",
    category: "Site odontologia",
    image: "/images/cases/dr-newton.png",
    description:
      "Autoridade e confiança para clínica odontológica — do primeiro contato ao pós-tratamento.",
  },
  {
    id: "dashboard-clinica",
    name: "Manutenção Clínica — FSNH",
    category: "Sistema web",
    image: "/images/cases/dashboard-clinica.png",
    description:
      "Dashboard operacional para o Hospital Municipal de Novo Hamburgo: ordens de serviço, estoque e relatórios.",
  },
];
