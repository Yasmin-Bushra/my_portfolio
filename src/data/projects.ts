import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    name: 'Tetarasa',
    category: 'Postpartum & Newborn Care',
    cardDescription: 'Connecting mothers with postpartum and newborn caregivers.',
    description: 'A web platform concept connecting mothers in Ethiopia with caregivers who provide postpartum and newborn support. ',
    features: [
      'Separate sign-up flows and dashboards for mothers and caregivers.',
      'Browse and filter caregiver profiles by location and services.',
      'View caregiver details and send care requests.',
      'Manage a mother’s profile and review care requests.',
      'Backend API for authentication, caregiver search, profiles, requests, and appointments.',
    ],
    technologies: [
      'React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL',
    ],
    number: '01',
    image: '/images/projects/tetarasa.png',
    tone: 'vermilion',
  },
  {
    name: 'GlamConnect',
    category: 'Beauty & Wellness · Booking Platform',
    cardDescription: 'Discover salons and book beauty and wellness services.',
    description: 'A salon booking and management platform that connects customers with beauty and wellness services while helping salon businesses manage appointments and daily operations.',
    features: [
      'Salon discovery with services, staff profiles, reviews, and location-based search.',
      'Appointment booking and management with Chapa payment integration.',
      'Customer accounts, profiles, notifications, and reviews.',
      'Business management tools for services, staff, schedules, policies, and analytics.',
      'Receptionist tools for appointment scheduling and notifications.',
    ],
    technologies: [
      'React', 'Python', 'Django', 'PostgreSQL',
    ],
    number: '02',
    image: '/images/projects/glamconnect.png',
    tone: 'olive',
  },
  {
    name: 'Inter-Office Memorandum System',
    category: 'Public service · Workflow',
    cardDescription: 'A secure way for departments to exchange and track correspondence.',
    description: 'A web app for managing diaspora correspondence and messages across departments. Staff can exchange messages, while department heads and admins have role-based views and management tools.',
    features: [
      'Role-based access for admins, department heads, and staff.',
      'Department messaging and correspondence tracking.',
      'User and department administration.',
      'Notifications and profile management.',
    ],
    technologies: [
      'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB',
    ],
    number: '03',
    image: '/images/projects/inter-office-memorandum.png',
    tone: 'blue',
  },
  {
    name: 'Space & Planetary Science',
    category: 'Science · Education',
    cardDescription: 'The website for SSGI’s Space and Planetary Science department.',
    description: 'A website for the Space and Planetary Science department at SSGI, bringing together space weather information, research, events, and department content.',
    features: [
      'Space weather data and alerts, with NASA and NOAA API integrations.',
      'User authentication and role-based access.',
      'Research paper and event management.',
      'Real-time updates through WebSockets.',
      'A web interface with charts and visualizations.',
    ],
    technologies: [
      'React', 'Node.js', 'Express', 'MongoDB', 'NASA API', 'NOAA API',
    ],
    number: '04',
    image: '/images/projects/space-planetary-science.png',
    tone: 'plum',
  },
];
