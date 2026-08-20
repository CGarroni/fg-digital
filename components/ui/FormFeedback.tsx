import clsx from "clsx";

type FormFeedbackProps = {
	type: "success" | "error";
	message: string;
};

export default function FormFeedback({ type, message }: FormFeedbackProps) {
	return (
		<div
			className={clsx(
				"rounded-xl border px-4 py-3 text-sm font-medium",

				{
					"border-green-500/30 bg-green-500/10 text-green-400":
						type === "success",

					"border-red-500/30 bg-red-500/10 text-red-400": type === "error",
				},
			)}
		>
			{message}
		</div>
	);
}
