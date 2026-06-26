"use client";

import { motion } from "framer-motion";

interface FloatingProps {
  children: React.ReactNode;
}

export default function Floating({
  children,
}: FloatingProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}