"use client";

import { useRef, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScoreRingProps {
  value: number;
  label: string;
  color: string;
  animatedValue: number;
}

function ScoreRing({ label, color, animatedValue }: ScoreRingProps) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const progress = (animatedValue / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-36 h-36 sm:w-40 sm:h-40">
        {/* Background track */}
        <svg
          className="absolute inset-0 -rotate-90"
          viewBox="0 0 120 120"
          fill="none"
        >
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="6"
          />
        </svg>

        {/* Animated progress arc */}
        <svg
          className="absolute inset-0 -rotate-90"
          viewBox="0 0 120 120"
          fill="none"
        >
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            className="transition-none"
          />
        </svg>

        {/* Center value */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
            {animatedValue}
          </span>
        </div>
      </div>

      <span className="text-sm font-medium text-neutral-300">{label}</span>
    </div>
  );
}

export default function PageSpeed() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scores, setScores] = useState(() =>
    reduce
      ? { perf: 100, a11y: 100, seo: 100 }
      : { perf: 0, a11y: 0, seo: 0 }
  );

  useEffect(() => {
    if (reduce) return;

    const counter = { perf: 0, a11y: 0, seo: 0 };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.to(counter, {
        perf: 100,
        duration: 1.2,
        ease: "power2.out",
        onUpdate: () => {
          setScores((prev) => ({
            ...prev,
            perf: Math.round(counter.perf),
          }));
        },
      });

      tl.to(
        counter,
        {
          a11y: 100,
          duration: 1.2,
          ease: "power2.out",
          onUpdate: () => {
            setScores((prev) => ({
              ...prev,
              a11y: Math.round(counter.a11y),
            }));
          },
        },
        "-=0.9"
      );

      tl.to(
        counter,
        {
          seo: 100,
          duration: 1.2,
          ease: "power2.out",
          onUpdate: () => {
            setScores((prev) => ({
              ...prev,
              seo: Math.round(counter.seo),
            }));
          },
        },
        "-=0.9"
      );
    }, containerRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <div ref={containerRef} className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Browser-style header */}
        <div
          className="
            bg-[#111111]
            border
            border-[#D4AF37]/10
            rounded-t-3xl
            px-6
            py-4
            flex
            items-center
            gap-3
          "
        >
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
          </div>

          <div
            className="
              flex-1
              bg-[#090909]
              rounded-xl
              px-4
              py-2
              text-xs
              text-zinc-500
              font-mono
            "
          >
            pagespeed.web.dev/analysis
          </div>
        </div>

        {/* Results body */}
        <div
          className="
            bg-[#0B0B0B]
            border
            border-t-0
            border-[#D4AF37]/10
            rounded-b-3xl
            p-8
            sm:p-12
          "
        >
          <div className="text-center mb-10">
            <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-medium">
              Google PageSpeed Insights
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold mt-3">
              Performance{" "}
              <span className="gold-gradient">perfeita</span>.
            </h3>

            <p className="text-neutral-300 mt-3 text-sm sm:text-base">
              Seu site entregando o máximo em cada métrica que importa.
            </p>
          </div>

          {/* Score rings */}
          <div className="flex justify-center items-center gap-8 sm:gap-14 flex-wrap">
            <ScoreRing
              value={100}
              label="Performance"
              color="#0cce6b"
              animatedValue={scores.perf}
            />

            <ScoreRing
              value={100}
              label="Acessibilidade"
              color="#0cce6b"
              animatedValue={scores.a11y}
            />

            <ScoreRing
              value={100}
              label="SEO"
              color="#0cce6b"
              animatedValue={scores.seo}
            />
          </div>

          {/* Badge */}
          <div className="flex justify-center mt-10">
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-full
                bg-[#0cce6b]/10
                border
                border-[#0cce6b]/20
              "
            >
              <svg
                className="w-4 h-4 text-[#0cce6b]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>

              <span className="text-sm font-medium text-[#0cce6b]">
                Todos os critérios atingidos
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
