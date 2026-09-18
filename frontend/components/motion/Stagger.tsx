"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer, viewportOnce } from "./variants";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ol" | "ul";
  stagger?: number;
};

/** Container that reveals its StaggerItem children one after another on scroll. */
export function Stagger({ children, className, as = "div", stagger = 0.06 }: StaggerProps) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];
  if (reduceMotion) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }
  return (
    <Tag
      className={className}
      variants={staggerContainer(stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </Tag>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
};

export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];
  if (reduceMotion) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }
  return (
    <Tag className={className} variants={fadeUp}>
      {children}
    </Tag>
  );
}
