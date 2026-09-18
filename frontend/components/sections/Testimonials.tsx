"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Quote } from "@/components/ui/Quote";
import { easeOutExpo } from "@/components/motion/variants";
import type { Testimonial } from "@/content/types";

type TestimonialsProps = {
  items: Testimonial[];
};

/** One quote at a time, cols 1–8; counter and arrows right. */
export function Testimonials({ items }: TestimonialsProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.4;
  const current = items[index];

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + items.length) % items.length);

  return (
    <div className="grid grid-cols-12 gap-x-gutter gap-y-8 px-gutter">
      <div className="col-span-12 md:col-span-8">
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
      <div className="col-span-12 flex items-start gap-6 text-body font-retina md:col-span-4 md:justify-end">
        <span className="tnum text-ink-2" aria-live="polite">
          {index + 1} / {items.length}
        </span>
        <div className="case flex gap-5">
          <button type="button" onClick={() => go(-1)} className="u" aria-label="Vorherige Stimme">
            ←
          </button>
          <button type="button" onClick={() => go(1)} className="u" aria-label="Nächste Stimme">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
