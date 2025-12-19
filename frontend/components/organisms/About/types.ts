import { PortableTextBlock } from 'sanity';

export interface KeyFact {
  label: string;
  value: string;
  order: number;
}

export interface AboutProps {
  title: string;
  bio: PortableTextBlock[];
  profileImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  keyFacts: KeyFact[];
  cvUrl?: string;
  className?: string;
}






