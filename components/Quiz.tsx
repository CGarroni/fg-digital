"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  Store,
  Briefcase,
  Factory,
  Users,
  ShoppingCart,
  CalendarCheck,
  Award,
  Zap,
  Clock,
  Search,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/ui/MagneticButton";
import { whatsappLink } from "@/lib/contact";
import { EASE } from "@/components/motion";
import clsx from "clsx";

/* ── Dados ─────────────────────────────────────────────── */

interface Option {
  id: string;
  label: string;
  icon: React.ElementType;
}

const STEPS: { id: string; question: string; options: Option[] }[] = [
  {
    id: "segmento",
    question: "Qual o segmento do seu negócio?",
    options: [
      { id: "saude-beleza", label: "Saúde & Beleza", icon: Sparkles },
      { id: "comercio-servicos", label: "Comércio & Serviços", icon: Store },
      { id: "profissional", label: "Profissional liberal", icon: Briefcase },
      { id: "industria-outros", label: "Indústria & outros", icon: Factory },
    ],
  },
  {
    id: "objetivo",
    question: "Qual seu principal objetivo?",
    options: [
      { id: "atrair-clientes", label: "Atrair mais clientes", icon: Users },
      { id: "vender-online", label: "Vender online", icon: ShoppingCart },
      { id: "agendamentos", label: "Receber agendamentos", icon: CalendarCheck },
      { id: "marca", label: "Fortalecer minha marca", icon: Award },
    ],
  },
  {
    id: "prazo",
    question: "Para quando você precisa?",
    options: [
      { id: "urgente", label: "Urgente — até 30 dias", icon: Zap },
      { id: "medio", label: "1 a 3 meses", icon: Clock },
      { id: "pesquisando", label: "Ainda estou pesquisando", icon: Search },
    ],
  },
];

interface Tier {
  title: string;
  subtitle: string;
  reason: string;
}

function recommend(answers: Record<string, string>): Tier {
  const objetivo = answers["objetivo"];
  const prazo = answers["prazo"];

  if (objetivo === "vender-online") {
    return {
      title: "Performance Digital",
      subtitle: "Escalável",
      reason:
        "Para vender online você precisa de estrutura de conversão — não só de presença. Este plano foi desenhado para transformar visitas em vendas.",
    };
  }
  if (prazo === "urgente") {
    return {
      title: "Presença Digital",
      subtitle: "Essencial",
      reason:
        "Com prazo curto, o melhor caminho é lançar rápido uma presença profissional e evoluir depois. Este plano coloca você no ar em semanas.",
    };
  }
  return {
    title: "Operação Digital",
    subtitle: "Profissional",
    reason:
      "Pelo seu objetivo, você precisa de um site que trabalhe por você todos os dias: credibilidade, captação e agendamento integrados.",
  };
}

const labelOf = (stepId: string, optionId: string) =>
  STEPS.find((s) => s.id === stepId)?.options.find((o) => o.id === optionId)
    ?.label ?? optionId;

/* ── Componente ────────────────────────────────────────── */

export default function Quiz() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const current = STEPS[step];
  const tier = done ? recommend(answers) : null;

  const choose = (optionId: string) => {
    const next = { ...answers, [current.id]: optionId };
    setAnswers(next);
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const back = () => {
    if (done) {
      setDone(false);
      return;
    }
    if (step > 0) setStep(step - 1);
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
    setDone(false);
  };

  const message = done
    ? `Olá! Fiz o simulador no site da FG Digital: sou do segmento "${labelOf("segmento", answers["segmento"])}", meu objetivo é "${labelOf("objetivo", answers["objetivo"])}" e meu prazo é "${labelOf("prazo", answers["prazo"])}". Quero conversar sobre o plano ${tier!.title} (${tier!.subtitle}).`
    : "";

  return (
    <section
      id="simulador"
      aria-labelledby="quiz-title"
      className="section-padding relative overflow-hidden"
    >
      <div
        aria-hidden
        className="
          absolute inset-0 pointer-events-none
          bg-[radial-gradient(circle_at_top_left,#D4AF370d,transparent_45%)]
        "
      />

      <div className="max-w-4xl mx-auto px-6 relative">
        <AnimatedSection>
          <div id="quiz-title">
            <SectionHeader
              eyebrow="Simulador"
              title="Qual site ideal para o seu negócio?"
              description="Responda 3 perguntas rápidas e receba uma recomendação sob medida — direto para o WhatsApp."
            />
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-12">
          <div
            className="
              relative
              rounded-3xl
              border border-[#D4AF37]/15
              bg-[#0B0B0B]
              p-6 md:p-10
              overflow-hidden
            "
          >
            {/* Barra de progresso */}
            {!done && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                    Passo {step + 1} de {STEPS.length}
                  </span>
                  {(step > 0 || Object.keys(answers).length > 0) && (
                    <button
                      onClick={back}
                      className="
                        flex items-center gap-1.5
                        text-sm text-neutral-400
                        hover:text-[#D4AF37]
                        transition cursor-pointer
                      "
                    >
                      <ArrowLeft size={14} /> Voltar
                    </button>
                  )}
                </div>
                <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#B8912A] to-[#E8C766]"
                    initial={false}
                    animate={{
                      width: `${((step + 1) / STEPS.length) * 100}%`,
                    }}
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                </div>
              </div>
            )}

            <AnimatePresence mode="wait" initial={false}>
              {!done ? (
                <motion.div
                  key={`step-${step}`}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, x: -32 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-center mb-8">
                    {current.question}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {current.options.map((opt) => {
                      const Icon = opt.icon;
                      const selected = answers[current.id] === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => choose(opt.id)}
                          aria-pressed={selected}
                          className={clsx(
                            "group flex items-center gap-4",
                            "p-5 rounded-2xl border text-left",
                            "transition-all duration-300 cursor-pointer",
                            selected
                              ? "border-[#D4AF37]/70 bg-[#D4AF37]/10"
                              : "border-white/10 bg-white/[0.02] hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/5"
                          )}
                        >
                          <span
                            className={clsx(
                              "w-11 h-11 shrink-0 rounded-xl flex items-center justify-center",
                              "border transition-colors duration-300",
                              selected
                                ? "border-[#D4AF37]/60 text-[#E8C766] bg-[#D4AF37]/10"
                                : "border-white/10 text-neutral-400 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/40"
                            )}
                          >
                            <Icon size={20} />
                          </span>
                          <span className="font-medium text-neutral-100">
                            {opt.label}
                          </span>
                          <ArrowRight
                            size={16}
                            className="
                              ml-auto text-neutral-600
                              group-hover:text-[#D4AF37] group-hover:translate-x-1
                              transition-all duration-300
                            "
                          />
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="text-center"
                >
                  <span
                    className="
                      inline-flex items-center gap-2
                      px-4 py-2 rounded-full
                      border border-[#D4AF37]/30 bg-[#D4AF37]/10
                      text-[#E8C766] text-xs uppercase tracking-[0.25em]
                      mb-6
                    "
                  >
                    <CheckCircle2 size={14} /> Recomendação pronta
                  </span>

                  <p className="text-neutral-400 uppercase tracking-[0.2em] text-sm mb-3">
                    O plano ideal para você é
                  </p>
                  <h3 className="font-display text-4xl md:text-5xl font-semibold">
                    {tier!.title}
                    <span className="gold-gradient block text-2xl md:text-3xl mt-2 font-medium">
                      {tier!.subtitle}
                    </span>
                  </h3>

                  <p className="text-neutral-300 leading-relaxed max-w-xl mx-auto mt-6">
                    {tier!.reason}
                  </p>

                  {/* Resumo das respostas */}
                  <div className="flex flex-wrap justify-center gap-2 mt-6">
                    {STEPS.map((s) => (
                      <span
                        key={s.id}
                        className="
                          px-3 py-1.5 rounded-full
                          text-xs text-neutral-400
                          border border-white/10 bg-white/[0.03]
                        "
                      >
                        {labelOf(s.id, answers[s.id])}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <MagneticButton strength={0.35}>
                      <Button href={whatsappLink(message)}>
                        Quero esse plano
                      </Button>
                    </MagneticButton>
                    <button
                      onClick={restart}
                      className="
                        flex items-center gap-2
                        text-sm text-neutral-400
                        hover:text-[#D4AF37]
                        transition cursor-pointer
                      "
                    >
                      <RotateCcw size={14} /> Refazer simulador
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
