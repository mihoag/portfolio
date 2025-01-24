type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  startDate: string;
  teamSize: number;
  linesOfCode: number;
  majorFeatures: number;
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management and secure payment integration.',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: 'https://example-ecommerce.com',
    githubLink: 'https://github.com/yourusername/ecommerce-platform',
    startDate: 'January 2023',
    teamSize: 4,
    linesOfCode: 20000,
    majorFeatures: 15,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team communication features.',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['Vue.js', 'Firebase', 'Vuex', 'Tailwind CSS'],
    liveLink: 'https://example-taskmanager.com',
    githubLink: 'https://github.com/yourusername/task-management-app',
    startDate: 'March 2023',
    teamSize: 3,
    linesOfCode: 15000,
    majorFeatures: 12,
  },
  {
    id: '3',
    title: 'Weather Forecast Dashboard',
    description:
      'An interactive weather dashboard providing real-time forecasts and historical weather data visualization.',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['React', 'D3.js', 'OpenWeatherMap API', 'Styled Components'],
    liveLink: 'https://example-weatherdashboard.com',
    githubLink: 'https://github.com/yourusername/weather-forecast-dashboard',
    startDate: 'May 2023',
    teamSize: 2,
    linesOfCode: 10000,
    majorFeatures: 8,
  },
  {
    id: '4',
    title: 'Social Media Analytics Tool',
    description:
      'A comprehensive analytics tool for social media marketers, offering insights and campaign performance tracking.',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['Angular', 'Express.js', 'PostgreSQL', 'Chart.js'],
    liveLink: 'https://example-socialanalytics.com',
    githubLink: 'https://github.com/yourusername/social-media-analytics',
    startDate: 'July 2023',
    teamSize: 5,
    linesOfCode: 25000,
    majorFeatures: 20,
  },
];
