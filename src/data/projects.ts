import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    name: 'Tetarasa',
    category: 'Care · Community',
    description: 'An independent platform connecting new mothers with trusted postnatal caregivers, designed around care that feels personal and dependable.',
    role: 'Independent project',
    technologies: ['Full-stack web application'],
    number: '01',
    tone: 'vermilion',
  },
  {
    name: 'GlamConnect',
    category: 'Beauty · Booking',
    description: 'A team-built booking system for beauty and wellness services, bringing discovery and appointment planning into one place.',
    role: 'Collaborative project',
    technologies: ['Web application'],
    number: '02',
    tone: 'olive',
  },
  {
    name: 'Inter-Office Memorandum System',
    category: 'Public service · Workflow',
    description: 'A team project developed during an internship with the Ministry of Foreign Affairs Diaspora Service.',
    role: 'Collaborative project',
    technologies: ['Web application'],
    number: '03',
    tone: 'blue',
  },
  {
    name: 'Space & Planetary Science',
    category: 'Science · Education',
    description: 'A collaborative website project for SSGI, sharing an accessible introduction to space and planetary science.',
    role: 'Collaborative project',
    technologies: ['Website'],
    number: '04',
    tone: 'plum',
  },
];
