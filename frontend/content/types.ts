export type NavItem = {
  label: string;
  href: string;
};

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Station = {
  period: string;
  role: string;
  org: string;
  summary?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type AccordionEntry = {
  title: string;
  body: string[];
};

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};
