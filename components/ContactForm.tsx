"use client";

import { ArrowRight } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/Textarea";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import FormFeedback from "@/components/ui/FormFeedback";
import RadioGroup from "@/components/ui/RadioGroup";

type ContactFormData = {
	name: string;
	company?: string;
	phone: string;
	hasWebsite: "yes" | "no";
	service: "landing" | "website" | "not-sure";
	message: string;
};

export default function ContactForm() {
	const {
		register,
		control,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ContactFormData>({
		defaultValues: {
			hasWebsite: "no",
			service: "landing",
		},
	});

	const [successMessage, setSuccessMessage] = useState("");

	const onSubmit = async (data: ContactFormData) => {
		console.log(data);

		await new Promise((resolve) => setTimeout(resolve, 2000));

		setSuccessMessage("Solicitação enviada com sucesso!");

		setTimeout(() => {
			setSuccessMessage("");
		}, 2000);

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
					onChange: () => setSuccessMessage(""),
				})}
			/>

			<Input
				placeholder="Empresa (opcional)"
				type="text"
				error={errors.company?.message}
				{...register("company", {
					onChange: () => setSuccessMessage(""),
				})}
			/>

			<Input
				placeholder="WhatsApp"
				type="tel"
				error={errors.phone?.message}
				{...register("phone", {
					required: "Informe seu WhatsApp.",
					onChange: () => setSuccessMessage(""),
				})}
			/>

			<Controller
				control={control}
				name="hasWebsite"
				rules={{
					required: "Informe se você já possui um site.",
				}}
				render={({ field }) => (
					<RadioGroup
						label="Você já possui um site?"
						name={field.name}
						value={field.value}
						onChange={field.onChange}
						options={[
							{
								value: "yes",
								label: "Sim",
							},
							{
								value: "no",
								label: "Não",
							},
						]}
						error={errors.hasWebsite?.message}
					/>
				)}
			/>

			<Controller
				control={control}
				name="service"
				rules={{
					required: "Selecione o serviço desejado.",
				}}
				render={({ field }) => (
					<RadioGroup
						label="Qual solução procura?"
						name={field.name}
						value={field.value}
						onChange={field.onChange}
						options={[
							{
								value: "landing",
								label: "Landing Page",
							},
							{
								value: "website",
								label: "Site Institucional",
							},
							{
								value: "not-sure",
								label: "Ainda não tenho certeza",
							},
						]}
						error={errors.service?.message}
					/>
				)}
			/>

			<Textarea
				rows={5}
				placeholder="Conte brevemente sobre sua empresa, seus objetivos e como podemos ajudar."
				error={errors.message?.message}
				{...register("message", {
					required: "Conte um pouco sobre seu projeto.",
					onChange: () => setSuccessMessage(""),
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
