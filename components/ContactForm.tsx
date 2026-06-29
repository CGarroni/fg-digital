"use client";

import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/Textarea";
import { useForm } from "react-hook-form";

export default function ContactForm() {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data: unknown) => {
		console.log(data);
	};
	return (
		<form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
			<Input placeholder="Nome" type="text" {...register("name")} />

			<Input placeholder="Empresa" type="text" {...register("company")} />

			<Input placeholder="WhatsApp" type="tel" {...register("phone")} />

			<Textarea
				rows={5}
				placeholder="Conte um pouco sobre seu projeto"
				{...register("message")}
			/>

			<Button type="submit" fullWidth>
				Solicitar Análise Gratuita
				{<ArrowRight size={18} />}
			</Button>
		</form>
	);
}
