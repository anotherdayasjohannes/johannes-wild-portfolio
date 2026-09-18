"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "./variants";

type FadeUpProps = {
  children: ReactNode;
  className?: string;
};

/** Fades and lifts content into view once when scrolled to. */
export function FadeUp({ children, className }: FadeUpProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}
