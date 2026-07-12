export type Service = {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	features: string[];
	buttonText: string;
	highlight: boolean;
};

export const services: Service[] = [
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
];