"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo, fadeUpAt } from "@/components/motion/variants";
import type { Photo } from "@/content/types";
import { asset } from "@/lib/paths";

type HeroProps = {
  firstName: string;
  surname: string;
  fullName: string;
  claim: readonly [string, string];
  roleLine: string;
  portrait: Photo;
};

const WILD_WEIGHT = 600;

/**
 * Typographic hero on the 12-column module: JOHANNES label, WILD with the
 * orange full stop (the one signal element on the page), claim, role line.
 * Portrait as a framed 4:5 tile in columns 8–12, bottom-aligned with the type;
 * on very wide screens its width is capped so it never grows past the hero height.
 */
export function Hero({ firstName, surname, fullName, claim, roleLine, portrait }: HeroProps) {
  const reduceMotion = useReducedMotion();
  const v = (delay: number) => (reduceMotion ? undefined : fadeUpAt(delay));

  return (
    <section className="relative md:h-[calc(100svh-var(--header-h))] md:min-h-hero">
      <div className="grid h-full grid-cols-12 items-end gap-x-gutter gap-y-10 px-gutter pb-gutter pt-6 md:pt-0">
        <div className="order-2 col-span-12 self-end md:order-1 md:col-span-7">
          <motion.p
            className="case mb-5 text-body font-medium uppercase tracking-[0.14em] text-ink-2 md:mb-7"
            variants={v(0.1)}
            initial="hidden"
            animate="visible"
          >
            {firstName}
          </motion.p>

          <h1 aria-label={fullName} className="-ml-[0.04em] text-wild">
            <span aria-hidden className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                style={{ fontWeight: WILD_WEIGHT }}
                initial={reduceMotion ? false : { y: "110%", fontWeight: 100 }}
                animate={{ y: 0, fontWeight: WILD_WEIGHT }}
                transition={{
                  y: { duration: 0.9, ease: easeOutExpo, delay: 0.2 },
                  fontWeight: { duration: 1.2, ease: "easeOut", delay: 0.35 },
                }}
              >
                {surname}
                <span className="font-normal text-signal">.</span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="mt-8 max-w-[24ch] text-lead font-light leading-[1.2] text-ink-2 md:mt-10"
            variants={v(0.7)}
            initial="hidden"
            animate="visible"
          >
            {claim[0]} <span className="text-ink">{claim[1]}</span>
          </motion.p>
          <motion.p
            className="mt-6 text-ui font-retina text-ink-2 md:mt-7"
            variants={v(0.9)}
            initial="hidden"
            animate="visible"
          >
            {roleLine}
          </motion.p>
        </div>

        <motion.figure
          className="tile order-1 col-span-12 aspect-[4/5] md:order-2 md:col-span-5 md:w-full md:max-w-[calc((100svh-var(--header-h)-2*var(--gutter))*0.8)] md:justify-self-end"
          initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src={asset(portrait.src)}
            alt={portrait.alt}
            fill
            priority
            sizes="(min-width: 810px) 42vw, 100vw"
            className="object-cover object-[50%_15%]"
          />
        </motion.figure>
      </div>
    </section>
  );
}
