"use client";

import { getImageProps } from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SplitText } from "@/components/motion/SplitText";
import { fadeUpAt, heroScale } from "@/components/motion/variants";
import type { Photo } from "@/content/types";

type HeroProps = {
  name: string;
  positioning: string;
  desktop: Photo;
  mobile: Photo;
};

/**
 * Full-bleed portrait hero. Portrait crop on mobile, landscape on desktop,
 * served as one <picture> so only the visible source is preloaded.
 */
export function Hero({ name, positioning, desktop, mobile }: HeroProps) {
  const reduceMotion = useReducedMotion();

  const common = { alt: desktop.alt, priority: true, sizes: "100vw" } as const;
  const { props: desktopProps } = getImageProps({
    ...common,
    width: desktop.width,
    height: desktop.height,
    src: desktop.src,
  });
  const { props: mobileProps } = getImageProps({
    ...common,
    width: mobile.width,
    height: mobile.height,
    src: mobile.src,
  });

  return (
    <section className="relative h-[92svh] overflow-hidden text-on-photo md:h-screen">
      <motion.div
        className="absolute inset-0"
        variants={reduceMotion ? undefined : heroScale}
        initial="hidden"
        animate="visible"
      >
        <picture>
          <source media="(min-width: 768px)" srcSet={desktopProps.srcSet} sizes="100vw" />
          <source srcSet={mobileProps.srcSet} sizes="100vw" />
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text -- props come from getImageProps */}
          <img
            {...mobileProps}
            className="h-full w-full object-cover object-[50%_20%] md:object-[45%_35%]"
          />
        </picture>
        <div className="absolute inset-0 bg-overlay" aria-hidden />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col justify-end px-gutter pb-5">
        <div className="grid gap-8 md:grid-cols-5 md:items-end md:gap-5">
          <motion.p
            className="order-2 text-caption font-medium md:order-1 md:col-span-2"
            variants={reduceMotion ? undefined : fadeUpAt(1)}
            initial="hidden"
            animate="visible"
          >
            Scroll
          </motion.p>
          <div className="order-1 md:order-2 md:col-span-3">
            <SplitText text={name} as="h1" className="text-display" delay={0.2} />
            <motion.p
              className="mt-6 max-w-xl text-lead"
              variants={reduceMotion ? undefined : fadeUpAt(0.7)}
              initial="hidden"
              animate="visible"
            >
              {positioning}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
