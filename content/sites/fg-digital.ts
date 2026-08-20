import type { LandingPageConfig } from "@/types/landing";

export const fgDigitalSite: LandingPageConfig = {
  slug: "fg-digital",
  businessName: "FG Digital",
  segment: "Tecnologia",
  seo: {
    title: "FG Digital",
    description:
      "Transformamos visitantes em oportunidades de negócio através de Landing Pages e Sites Institucionais Premium.",
  },
  theme: {
    colors: {
      background: "#050505",
      surface: "#0B0B0B",
      primary: "#D4AF37",
      primaryHover: "#E6C766",
      text: "#F5F5F5",
      muted: "#A1A1AA",
      border: "rgba(255,255,255,0.05)",
    },
  },
  sections: [
    {
      type: "hero",
      id: "hero",
      eyebrow: "Crescimento • Prestígio • Performance",
      title: "Transformamos empresas em",
      highlightedText: "referências digitais.",
      description:
        "Desenvolvemos experiências digitais que fortalecem a credibilidade da sua empresa, aumentam a confiança dos seus clientes e transformam visitantes em oportunidades reais de negócio.",
      primaryCta: {
  kind: "scroll",
  label: "Solicitar análise",
  sectionId: "contact",
  variant: "primary",
},
secondaryCta: {
  kind: "scroll",
  label: "Ver serviços",
  sectionId: "services",
  variant: "secondary",
},
    },
    {
      type: "services",
      id: "services",
      eyebrow: "SOLUÇÕES",
      title: "Escolha a solução ideal para o momento da sua empresa.",
      description:
        "Cada projeto é desenvolvido para fortalecer sua marca, transmitir credibilidade e transformar sua presença digital em oportunidades de negócio.",
      items: [
        {
          id: "essential",
          title: "Presença Digital",
          subtitle: "Essencial",
          description:
            "Ideal para empresas que desejam transmitir confiança e conquistar uma presença digital profissional.",
          features: [
            "Landing Page Premium",
            "Design Responsivo",
            "Estrutura preparada para o Google",
            "Integração com WhatsApp",
            "Formulário de Contato",
            "Alta Performance",
          ],
          buttonText: "Quero começar",
          highlight: false,
        },
        {
          id: "professional",
          title: "Operação Digital",
          subtitle: "Profissional",
          description:
            "Para empresas que desejam transformar o site em uma ferramenta de atendimento e geração de oportunidades.",
          features: [
            "Tudo do Essencial",
            "Solicitações Online",
            "Agendamentos",
            "Catálogo de Serviços",
            "Integrações",
            "Automação Inicial",
          ],
          buttonText: "Quero evoluir",
          highlight: true,
        },
        {
          id: "performance",
          title: "Performance Digital",
          subtitle: "Escalável",
          description:
            "Solução completa para empresas que desejam automatizar processos e acelerar seu crescimento.",
          features: [
            "Tudo do Profissional",
            "Acompanhamento de Resultados",
            "Integrações com seus Sistemas",
            "Automações Inteligentes",
            "Evolução Contínua",
            "Suporte Estratégico",
          ],
          buttonText: "Quero crescer",
          highlight: false,
        },
      ],
    },
    {
      type: "faq",
      id: "faq",
      eyebrow: "DÚVIDAS FREQUENTES",
      title: "Perguntas comuns antes de iniciar seu projeto.",
      description:
        "Esclarecemos os pontos mais importantes para você avançar com segurança.",
      items: [
        {
          id: "prazo",
          question: "Em quanto tempo meu site fica pronto?",
          answer:
            "Na maioria dos projetos, entre 5 e 7 dias úteis após o recebimento de todo o material necessário.",
        },
        {
          id: "dominio",
          question: "Vocês cuidam do domínio e da hospedagem?",
          answer:
            "Sim. Podemos orientar ou cuidar de toda a configuração para que você não precise se preocupar com a parte técnica.",
        },
        {
          id: "google",
          question: "Meu site aparecerá no Google?",
          answer:
            "Desenvolvemos o projeto seguindo boas práticas de SEO técnico para facilitar a indexação pelos mecanismos de busca.",
        },
      ],
    },
    {
      type: "contact",
      id: "contact",
      eyebrow: "Solicite uma análise",
      title: "Vamos transformar sua presença digital.",
      description:
        "Receba uma análise personalizada da presença digital da sua empresa e descubra oportunidades para transmitir mais confiança, fortalecer sua marca e conquistar novos clientes.",
      email: "contato@fgdigital.com.br",
      whatsappLabel: "Atendimento via WhatsApp",
    },
  ],
};