export type FAQ = {
	id: string;
	question: string;
	answer: string;
};

export const faq: FAQ[] = [
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
	{
		id: "alteracoes",
		question: "Posso solicitar alterações após a entrega?",
		answer:
			"Sim. Todo projeto possui um período inicial para ajustes e também oferecemos planos de manutenção para evoluções futuras.",
	},
	{
		id: "whatsapp",
		question: "O site terá integração com WhatsApp?",
		answer:
			"Sim. Todos os nossos projetos podem integrar botões estratégicos e formulários direcionados ao WhatsApp da empresa.",
	},
	{
		id: "pagamento",
		question: "Como funciona o pagamento?",
		answer:
			"Os detalhes são definidos na proposta comercial, normalmente com uma entrada para início do projeto e o restante na entrega.",
	},
];