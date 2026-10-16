export type Project = {
  name: string;
  category: string;
  description: string;
  role: 'Independent project' | 'Collaborative project';
  technologies: string[];
  number: string;
  tone: 'vermilion' | 'olive' | 'blue' | 'plum';
};
