"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType } from "react";
import { riseIn, staggerContainer } from "./variants";

type SplitTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
};

/**
 * Splits a headline into words and animates each word rising in from
 * below a clipping mask. Falls back to plain text for reduced motion.
 */
export function SplitText({
  text,
  as: Tag = "h1",
  className,
  delay = 0,
  stagger = 0.04,
}: SplitTextProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        className="inline"
        variants={staggerContainer(stagger, delay)}
        initial="hidden"
        animate="visible"
        aria-hidden
      >
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden pb-[0.08em] align-bottom"
          >
            <motion.span className="inline-block" variants={riseIn}>
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
