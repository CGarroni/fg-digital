"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import type { MotionProps, Variants } from "framer-motion";
import { fadeUp } from "./motion";

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  amount?: number;
};

export function StaggerGroup({
  children,
  className,
  stagger = 0.12,
  delayChildren = 0.08,
  amount = 0.15,
}: StaggerGroupProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  whileHover?: MotionProps["whileHover"];
  variants?: Variants;
};

export function StaggerItem({
  children,
  className,
  whileHover,
  variants = fadeUp,
}: StaggerItemProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      whileHover={whileHover}
    >
      {children}
    </motion.div>
  );
}
