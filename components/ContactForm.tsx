"use client";

import { ArrowRight } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/Textarea";
import { useForm } from "react-hook-form";
import { useState } from "react";
import FormFeedback from "@/components/ui/FormFeedback";

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
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ContactFormData>();

	const [successMessage, setSuccessMessage] = useState("");

	const onSubmit = async (data: ContactFormData) => {
		console.log(data);

		await new Promise((resolve) => setTimeout(resolve, 2000));

		setSuccessMessage("Solicitação enviada com sucesso!");

		reset();
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

			{successMessage && (
				<FormFeedback type="success" message={successMessage} />
			)}

			<Button type="submit" fullWidth loading={isSubmitting}>
				Solicitar Análise Gratuita
				{<ArrowRight size={18} />}
			</Button>
		</form>
	);
}
