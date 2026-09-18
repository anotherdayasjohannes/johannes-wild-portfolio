"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import type { AccordionEntry } from "@/content/types";
import { easeOutExpo } from "@/components/motion/variants";

type AccordionProps = {
  items: AccordionEntry[];
  ordered?: boolean;
};

/** Hairline accordion. The plus icon is two 1px lines; one rotates to form a minus. */
export function Accordion({ items, ordered = true }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const duration = reduceMotion ? 0 : 0.45;

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div
            key={item.title}
            className={`border-b border-line ${isOpen ? "bg-bg" : "bg-surface"}`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-5 py-5 text-left md:py-6"
              >
                <span className="flex items-baseline gap-4 text-lead">
                  {ordered ? (
                    <span className="text-label uppercase text-muted">
                      ({String(i + 1).padStart(2, "0")})
                    </span>
                  ) : null}
                  <span>{item.title}</span>
                </span>
                <span
                  className="relative h-4 w-4 shrink-0"
                  aria-hidden
                >
                  <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-fg" />
                  <motion.span
                    className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-fg"
                    animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                    transition={{ duration, ease: easeOutExpo }}
                  />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration, ease: easeOutExpo }}
                  className="overflow-hidden"
                >
                  <ol className="grid gap-3 pb-6 md:ml-[calc(2.75rem+1rem)] md:max-w-2xl">
                    {item.body.map((line, j) => (
                      <li key={j} className="flex gap-4 text-body">
                        <span className="text-meta text-muted pt-1">{j + 1}</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ol>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
