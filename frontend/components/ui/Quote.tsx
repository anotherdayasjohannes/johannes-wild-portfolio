import type { Testimonial } from "@/content/types";

type QuoteProps = {
  testimonial: Testimonial;
  className?: string;
};

/** Quote in Light 34, attribution as grey UI text. */
export function Quote({ testimonial, className = "" }: QuoteProps) {
  return (
    <figure className={className}>
      <blockquote className="max-w-[30ch] text-lead font-light">„{testimonial.quote}“</blockquote>
      <figcaption className="mt-6 text-ui font-retina leading-list text-ink-2">
        <span className="font-medium text-ink">{testimonial.name}</span> · {testimonial.role}
      </figcaption>
    </figure>
  );
}
