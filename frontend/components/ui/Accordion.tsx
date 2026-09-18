"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import type { AccordionEntry } from "@/content/types";
import { easeOutExpo } from "@/components/motion/variants";

type AccordionProps = {
  items: AccordionEntry[];
};

/** Hairline accordion on the module. The plus is two 1px lines; the vertical one fades out when open. */
export function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const duration = reduceMotion ? 0 : 0.4;

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div key={item.title} className="border-b border-line">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="grid w-full grid-cols-12 items-baseline gap-x-gutter py-4 text-left text-body md:py-5"
              >
                <span className="tnum col-span-2 text-ui font-medium text-orange-text md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-9 font-normal md:col-span-10">{item.title}</span>
                <span className="relative col-span-1 h-3.5 w-3.5 justify-self-end self-center" aria-hidden>
                  <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ink" />
                  <motion.span
                    className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink"
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
                  <ol className="grid grid-cols-12 gap-x-gutter pb-6">
                    <div className="col-span-12 grid max-w-[46ch] gap-2 text-body font-retina md:col-span-8 md:col-start-2">
                      {item.body.map((line, j) => (
                        <li key={j} className="grid grid-cols-[2ch_1fr] gap-3">
                          <span className="tnum text-ink-2">{j + 1}</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </div>
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
