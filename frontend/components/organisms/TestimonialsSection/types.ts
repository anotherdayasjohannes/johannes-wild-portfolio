export interface Testimonial {
  name: string;
  position: string;
  company?: string;
  quote: string;
  image?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  order: number;
}

export interface TestimonialsSectionProps {
  title: string;
  testimonials: Testimonial[];
  className?: string;
}

