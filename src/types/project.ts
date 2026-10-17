export type Project = {
  name: string;
  category: string;
  description: string;
  cardDescription?: string;
  technologies: string[];
  features?: string[];
  links?: { label: string; url: string }[];
  number: string;
  image: string;
  tone: 'vermilion' | 'olive' | 'blue' | 'plum';
};
