"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "@/components/motion/variants";
import type { FamilyMember } from "@/content/family";
import { asset } from "@/lib/paths";

const tileColor: Record<FamilyMember["color"], string> = {
  hellblau: "bg-tile-hellblau",
  orange: "bg-tile-orange",
  rose: "bg-tile-rose",
  gruen: "bg-tile-gruen",
};

type TilesProps = {
  members: FamilyMember[];
  label: string;
};

/** 2 × 2 grid, one colour per person. Tiles settle in with a 60 ms stagger. */
export function Tiles({ members, label }: TilesProps) {
  const reduceMotion = useReducedMotion();

  return (
    <main
      aria-label={label}
      className="grid min-h-0 flex-1 grid-cols-2 grid-rows-2 gap-gutter px-gutter"
    >
      {members.map((m, i) => (
        <motion.div
          key={m.fullName}
          className="min-h-0"
          initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: easeOutExpo, delay: reduceMotion ? 0 : 0.08 + i * 0.06 }}
        >
          <Tile member={m} index={i + 1} />
        </motion.div>
      ))}
    </main>
  );
}

function Tile({ member, index }: { member: FamilyMember; index: number }) {
  const base = `group relative flex h-full min-h-[42svh] flex-col justify-between overflow-hidden p-3.5 text-tile-ink md:min-h-0 md:p-6 ${tileColor[member.color]}`;
  const num = String(index).padStart(2, "0");

  const content = (
    <>
      <div className="flex items-start justify-between gap-4 text-ui font-medium leading-tight">
        <span className="tnum">{num}</span>
        {member.head && !member.portrait ? (
          <span>
            <span className="hidden md:inline">{member.head.replace(/\/johannes$/, "")}</span>/johannes
          </span>
        ) : null}
      </div>

      {member.portrait ? (
        <figure className="absolute right-3.5 top-3.5 aspect-square w-[44%] overflow-hidden border border-tile-ink/25 bg-surface md:right-6 md:top-6 md:w-[min(38%,42vh)]">
          <Image
            src={asset(member.portrait.src)}
            alt={member.portrait.alt}
            fill
            sizes="(min-width: 810px) 20vw, 22vw"
            className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
          />
        </figure>
      ) : null}

      <div className="relative">
        <h2 className="text-[clamp(1.5rem,7.6vw,2.125rem)] font-medium leading-[0.95] tracking-[-0.015em] md:text-[clamp(2.125rem,5.2vw,4.75rem)]">
          {member.name.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        {member.links ? (
          <p className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1 text-ui font-medium leading-tight md:mt-4">
            {member.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="me noopener noreferrer"
                className="u case whitespace-nowrap opacity-85 hover:opacity-100"
              >
                {l.label} <span aria-hidden>↗</span>
              </a>
            ))}
          </p>
        ) : null}
        {member.sub ? (
          <p className="mt-2 max-w-[calc(100%-2.5rem)] text-[0.75rem] font-normal leading-read opacity-70 md:mt-3.5 md:max-w-none md:text-ui">
            {member.sub}
          </p>
        ) : null}
      </div>

      {member.href ? (
        <span
          aria-hidden
          className="case absolute bottom-3.5 right-3.5 text-[1.5rem] font-light leading-none transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none md:bottom-6 md:right-6 md:text-lead"
        >
          →
        </span>
      ) : null}
    </>
  );

  if (member.href) {
    return (
      <Link href={member.href} className={base} aria-label={`${member.fullName}, zur Seite`}>
        {content}
      </Link>
    );
  }
  return (
    <section className={base} aria-label={member.sub === "folgt" ? `${member.fullName}, Seite folgt` : member.fullName}>
      {content}
    </section>
  );
}
