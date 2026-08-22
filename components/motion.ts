import type { Variants } from "framer-motion";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const DURATION = 0.6;

export const DISTANCE = 24;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: DISTANCE },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION, ease: EASE },
  },
};

export const staggerContainer = (
  stagger = 0.12,
  delayChildren = 0.08,
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});
