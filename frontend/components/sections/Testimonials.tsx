"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Quote } from "@/components/ui/Quote";
import { easeOutExpo } from "@/components/motion/variants";
import type { Testimonial } from "@/content/types";

type TestimonialsProps = {
  items: Testimonial[];
};

/** Shows one quote at a time with previous/next controls. */
export function Testimonials({ items }: TestimonialsProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.4;
  const current = items[index];

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + items.length) % items.length);

  return (
    <div className="grid gap-10 md:grid-cols-12">
      <div className="md:col-span-9">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -16 }}
            transition={{ duration, ease: easeOutExpo }}
          >
            <Quote testimonial={current} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-start gap-6 text-caption md:col-span-3 md:justify-end">
        <span className="text-muted" aria-live="polite">
          {index + 1} / {items.length}
        </span>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            className="link-wipe font-medium"
            aria-label="Vorherige Stimme"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="link-wipe font-medium"
            aria-label="Nächste Stimme"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
