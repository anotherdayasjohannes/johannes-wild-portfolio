import type { Testimonial } from "@/content/types";

type QuoteProps = {
  testimonial: Testimonial;
  className?: string;
};

/** Large display quote in Instrument Serif with attribution. */
export function Quote({ testimonial, className = "" }: QuoteProps) {
  return (
    <figure className={className}>
      <blockquote className="font-serif text-quote text-fg">
        „{testimonial.quote}“
      </blockquote>
      <figcaption className="mt-8 text-caption">
        <span className="font-medium">{testimonial.name}</span>
        <span className="text-muted"> · {testimonial.role}</span>
      </figcaption>
    </figure>
  );
}
