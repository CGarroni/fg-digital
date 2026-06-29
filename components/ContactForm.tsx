"use client";

import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/Textarea";
import { useForm } from "react-hook-form";

type ContactFormData = {
	name: string;
	company: string;
	phone: string;
	message: string;
};

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormData>();
	const onSubmit = (data: ContactFormData) => {
		console.log(data);
	};
	return (
		<form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
			<Input
				placeholder="Nome"
				type="text"
				error={errors.name?.message}
				{...register("name", {
					required: "Informe seu nome.",
				})}
			/>

			<Input
				placeholder="Empresa"
				type="text"
				error={errors.company?.message}
				{...register("company", {
					required: "Informe sua empresa.",
				})}
			/>

			<Input
				placeholder="WhatsApp"
				type="tel"
				error={errors.phone?.message}
				{...register("phone", {
					required: "Informe seu WhatsApp.",
				})}
			/>

			<Textarea
				rows={5}
				placeholder="Conte um pouco sobre seu projeto"
				error={errors.message?.message}
				{...register("message", {
					required: "Conte um pouco sobre seu projeto.",
				})}
			/>

			<Button type="submit" fullWidth>
				Solicitar Análise Gratuita
				{<ArrowRight size={18} />}
			</Button>
		</form>
	);
}
