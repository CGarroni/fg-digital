"use client";

import clsx from "clsx";

type Option = {
	value: string;
	label: string;
};

type RadioGroupProps = {
	label: string;
	name: string;
	options: Option[];
	value?: string;
	onChange: (value: string) => void;
	error?: string;
};

export default function RadioGroup({
	label,
	name,
	options,
	value,
	onChange,
	error,
}: RadioGroupProps) {
	return (
		<div className="space-y-3">
			<label className="block text-sm font-medium text-zinc-200">
				{label}
			</label>

			<div className="flex flex-col gap-3">
				{options.map((option) => (
					<label
						key={option.value}
						className={clsx(
							"flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition",
							value === option.value
								? "border-[#D4AF37] bg-[#D4AF37]/10"
								: "border-white/10 hover:border-[#D4AF37]/40"
						)}
					>
						<input
							type="radio"
							name={name}
							value={option.value}
							checked={value === option.value}
							onChange={() => onChange(option.value)}
							className="accent-[#D4AF37]"
						/>

						<span className="text-zinc-200">
							{option.label}
						</span>
					</label>
				))}
			</div>

			{error && (
				<p className="text-sm text-red-400">
					{error}
				</p>
			)}
		</div>
	);
}