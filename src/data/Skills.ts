import { Code, Server, Database, Settings, UserCheck } from 'lucide-react';

export const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Java', 'Javascript', 'C/C++', 'C#'],
  },
  {
    title: 'Frontend',
    icon: Code,
    skills: ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'JQuery'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      'Spring boot',
      'Spring security',
      'Spring cloud',
      'ExpressJS',
      'Microservices (System Architecture)',
      'RESTful APIs',
      'WebSockets',
    ],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['Microsoft SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Technologies',
    icon: Settings,
    skills: ['Git', 'Github', 'Github Actions', 'Docker', 'Swagger', 'Postman', 'Jira'],
  },
  {
    title: 'Soft skills',
    icon: UserCheck,
    skills: ['Strong self-study capabilities', 'Effective communication', 'Collaborative skills'],
  },
];
