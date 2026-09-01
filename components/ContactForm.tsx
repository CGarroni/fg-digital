"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/Textarea";
import RadioGroup from "@/components/ui/RadioGroup";


/* ── Zod schemas per step ─────────────────────────────── */

const step1Schema = z.object({
  name: z.string().min(1, "Informe seu nome."),
  company: z.string().optional(),
});

const step2Schema = z.object({
  phone: z.string().min(1, "Informe seu WhatsApp."),
});

const step3Schema = z.object({
  hasWebsite: z.enum(["yes", "no"], {
    error: "Informe se você já possui um site.",
  }),
});

const step4Schema = z.object({
  service: z.enum(["landing", "website", "not-sure"], {
    error: "Selecione o serviço desejado.",
  }),
});

const step5Schema = z.object({
  message: z.string().min(1, "Conte um pouco sobre seu projeto."),
});

const fullSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema)
  .merge(step4Schema)
  .merge(step5Schema);

type ContactFormData = z.infer<typeof fullSchema>;

/* ── Step definitions ─────────────────────────────────── */

interface StepConfig {
  id: string;
  label: string;
  schema: z.ZodTypeAny;
}

const steps: StepConfig[] = [
  { id: "identity", label: "Identificação", schema: step1Schema },
  { id: "contact", label: "Contato", schema: step2Schema },
  { id: "need", label: "Necessidade", schema: step3Schema },
  { id: "solution", label: "Solução", schema: step4Schema },
  { id: "details", label: "Detalhes", schema: step5Schema },
];

/* ── Slide animation variants ─────────────────────────── */

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
  }),
};

/* ── Component ────────────────────────────────────────── */

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [stepErrors, setStepErrors] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<ContactFormData>({
    resolver: zodResolver(fullSchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      hasWebsite: "no",
      service: "landing",
      message: "",
    },
    mode: "onTouched",
  });

  /* ── Validate current step and advance ──────────────── */

  const validateAndNext = useCallback(async () => {
    const schema = steps[currentStep].schema;
    const values = getValues();
    const result = schema.safeParse(values);

    if (!result.success) {
      const firstError = result.error.issues[0]?.message || "Preencha o campo corretamente.";
      setStepErrors(firstError);
      return;
    }

    setStepErrors(null);
    setDirection(1);
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  }, [currentStep, getValues]);

  /* ── Go back ────────────────────────────────────────── */

  const goBack = useCallback(() => {
    setStepErrors(null);
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }, []);

  /* ── Final submit ───────────────────────────────────── */

  const onSubmit = () => {
    setSubmitted(true);
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="relative">
      {/* ── Progress bar ──────────────────────────────── */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-[#D4AF37] uppercase tracking-wider">
            Passo {currentStep + 1} de {steps.length}
          </span>

          <span className="text-xs text-zinc-500">
            {steps[currentStep].label}
          </span>
        </div>

        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#D4AF37] to-[#E6C766] rounded-full"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* Step dots */}
        <div className="flex justify-between mt-3">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${
                  i < currentStep
                    ? "bg-[#D4AF37]"
                    : i === currentStep
                      ? "bg-[#D4AF37] scale-125"
                      : "bg-white/10"
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* ── Step content with AnimatePresence ──────────── */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative min-h-[280px] overflow-hidden"
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            {/* ── Step 1: Identity ──────────────────────── */}
            {currentStep === 0 && (
              <>
                <Input
                  placeholder="Seu nome"
                  type="text"
                  error={errors.name?.message}
                  {...register("name", {
                    onChange: () => setStepErrors(null),
                  })}
                />

                <Input
                  placeholder="Empresa (opcional)"
                  type="text"
                  error={errors.company?.message}
                  {...register("company", {
                    onChange: () => setStepErrors(null),
                  })}
                />
              </>
            )}

            {/* ── Step 2: Contact ───────────────────────── */}
            {currentStep === 1 && (
              <Input
                placeholder="WhatsApp"
                type="tel"
                error={errors.phone?.message}
                {...register("phone", {
                  onChange: () => setStepErrors(null),
                })}
              />
            )}

            {/* ── Step 3: Has website? ──────────────────── */}
            {currentStep === 2 && (
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
                    onChange={(val) => {
                      field.onChange(val);
                      setStepErrors(null);
                    }}
                    options={[
                      { value: "yes", label: "Sim" },
                      { value: "no", label: "Não" },
                    ]}
                    error={errors.hasWebsite?.message}
                  />
                )}
              />
            )}

            {/* ── Step 4: Service ───────────────────────── */}
            {currentStep === 3 && (
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
                    onChange={(val) => {
                      field.onChange(val);
                      setStepErrors(null);
                    }}
                    options={[
                      { value: "landing", label: "Landing Page" },
                      { value: "website", label: "Site Institucional" },
                      { value: "not-sure", label: "Ainda não tenho certeza" },
                    ]}
                    error={errors.service?.message}
                  />
                )}
              />
            )}

            {/* ── Step 5: Details + Submit ──────────────── */}
            {currentStep === 4 && (
              <>
                <Textarea
                  rows={5}
                  placeholder="Conte brevemente sobre sua empresa, seus objetivos e como podemos ajudar."
                  error={errors.message?.message}
                  {...register("message", {
                    onChange: () => setStepErrors(null),
                  })}
                />
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Step-level validation error ──────────────── */}
        {stepErrors && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-400 mt-4"
          >
            {stepErrors}
          </motion.p>
        )}

        {/* ── Navigation buttons ───────────────────────── */}
        <div className="flex items-center gap-3 mt-8">
          {currentStep > 0 && (
            <Button
              type="button"
              variant="secondary"
              onClick={goBack}
              leftIcon={<ArrowLeft size={18} />}
            >
              Voltar
            </Button>
          )}

          {currentStep < steps.length - 1 ? (
            <Button
              type="button"
              onClick={validateAndNext}
              rightIcon={<ArrowRight size={18} />}
            >
              Próximo
            </Button>
          ) : (
            <Button
              type="submit"
              fullWidth
              loading={isSubmitting}
              rightIcon={<ArrowRight size={18} />}
            >
              Solicitar Análise Gratuita
            </Button>
          )}
        </div>
      </form>

      {/* ── Success state ──────────────────────────────── */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
              bg-[#0B0B0B]
              rounded-3xl
              z-20
            "
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
            >
              <CheckCircle2 size={56} className="text-[#D4AF37]" />
            </motion.div>

            <h3 className="text-2xl font-bold mt-6">Análise solicitada!</h3>

            <p className="text-neutral-300 mt-3 text-center max-w-sm">
              Entraremos em contato em breve com uma análise personalizada
              da presença digital da sua empresa.
            </p>

            <Button
              variant="secondary"
              className="mt-8"
              onClick={() => {
                setSubmitted(false);
                setCurrentStep(0);
              }}
            >
              Enviar outra mensagem
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
