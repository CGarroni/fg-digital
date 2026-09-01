"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const runAnimation = useCallback(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      // 1. Counter from 0 → 100 in 1 second
      const counter = { val: 0 };
      tl.to(counter, {
        val: 100,
        duration: 1,
        ease: "power2.inOut",
        onUpdate: () => {
          setCount(Math.round(counter.val));
        },
      });

      // 2. Loading line fills across
      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: "power2.inOut" },
        0
      );

      // 3. Counter fade out
      tl.to(counterRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      }, ">-0.15");

      // 4. Line fades out
      tl.to(lineRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      }, "<");

      // 5. Split curtain — panels slide apart
      tl.to(
        leftPanelRef.current,
        {
          xPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
        },
        ">-0.05"
      );

      tl.to(
        rightPanelRef.current,
        {
          xPercent: 100,
          duration: 0.8,
          ease: "power4.inOut",
        },
        "<"
      );

      // 6. Container fades out after curtain opens
      tl.to(containerRef.current, {
        autoAlpha: 0,
        duration: 0.15,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  useEffect(() => {
    if (reduce) {
      onComplete();
      return;
    }
    const cleanup = runAnimation();
    return cleanup;
  }, [reduce, onComplete, runAnimation]);

  if (reduce) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
      aria-hidden="true"
    >
      {/* Left curtain panel */}
      <div
        ref={leftPanelRef}
        className="absolute inset-y-0 left-0 w-1/2 bg-[#050505]"
      />

      {/* Right curtain panel */}
      <div
        ref={rightPanelRef}
        className="absolute inset-y-0 right-0 w-1/2 bg-[#050505]"
      />

      {/* Center seam accent line */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          ref={lineRef}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent origin-center"
        />
      </div>

      {/* Counter */}
      <span
        ref={counterRef}
        className="relative z-10 text-5xl sm:text-7xl font-light tracking-tighter text-white tabular-nums"
      >
        {count}
        <span className="text-[#D4AF37] text-lg sm:text-xl align-top ml-0.5">
          %
        </span>
      </span>
    </div>
  );
}
