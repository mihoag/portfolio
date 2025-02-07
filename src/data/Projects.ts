type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  startDate: string;
  endDate: string;
  teamSize: number;
  features: string[];
  role: string;
  responsibilities: string[];
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'VOU – Marketing with Real-time Games',
    description: 'VOU – Gamified Marketing Platform is an innovative solution that enables brands to create viral promotional campaigns through real-time interactive games, such as quizzes and phone-shaking challenges, enhancing user engagement and brand visibility. Designed for cost-effective game-based promotions, VOU has evolved through multiple development phases to improve performance and scalability. Initially built as a monolithic application using Domain-Driven Design (DDD) in Version 1, the platform was enhanced in Version 2 with database replication for improved availability. Version 3 transitioned VOU to a microservices architecture, increasing flexibility and scalability, while Version 4 further optimized performance by introducing caching and replicated databases for the image service. With its continuously evolving architecture, VOU delivers a highly interactive and seamless marketing experience, empowering brands to engage users like never before.',
    image: 'https://res.cloudinary.com/dt0ps34k9/image/upload/v1738299491/Screenshot_2025-01-31_115628_nbgil1.png',
    technologies: ['Spring Boot', 'Spring Security', 'Microservices', 'Spring Cloud', 'JWT', 'WebSocket', 'MySQL', 'MongoDb' , 'Redis', 'RabbitMQ', 'Docker', 'React', 'React native', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://example-ecommerce.com',
    githubLink: 'https://github.com/VOU-Marketing-with-Real-time-Games',
    startDate: 'November 2024',
    endDate: 'January 2025',
    teamSize: 5,
    features: [
      'User registration and account verification',
      'User authentication and authorization',
      'Forgot password, reset password',
      `Static users, campaigns, brands, vouchers, puzzles, games (admin's side)`,
      `Campaigns, account, brands, game management (admin's side)`,     
      `Static campaigns, vouchers, participant (brand's side)`,
      'Campaigns, branches management (brand’s side)',
      `Render newest campaigns, popular branch`,
      'Add campaigns to favorite list, receive notifications when campaigns are upcoming',
      'Search campaigns, vouchers by name',
      `Rendering brands which their locations are near user's location, integrated with Google Map`,
      `Participate Shake's game and receive items`,
      `Share items to user's friends by send email`,
      `Share campaigns on social network, invite friends to receive turns`,
      'Participate in quizzes realtime, receive vouchers',
    ],
    role: 'Backend Developer',
    responsibilities: [
      "Design an ERD (Entity-Relationship Diagram) for the database schema of the entire system.",
      "Build the system using a monolithic architecture following a domain-driven design (DDD) approach.",
      "Design and build the system using a microservices architecture.",
      "Write API, Unit Test for Game Service, Notification Service",
      "Implement WebSocket for Quiz Realtime features.",
      "Write API documentation using Swagger.",
      "Collaborate with the frontend team to integrate the backend services with the frontend application.",
    ],
  },
  {
    id: '2',
    title: 'Movies Recommendation',
    description: 'The website is designed to help users easily discover and watch movies across various categories, including trending movies, popular movies, and newly released films. Users can search and filter movies based on their preferences and view detailed information about the actors featured in each film. Additionally, users can rate movies, add them to their favorites, create watch lists, and view statistics on the movies they have added and reviewed. The website offers advanced features such as searching for movies based on user queries, search history, and recommendations based on similarities in genres, descriptions, and keywords. Moreover, the website includes navigation features that allow users to easily access the pages they want, ensuring a seamless browsing experience.',
    image: 'https://res.cloudinary.com/dt0ps34k9/image/upload/v1738308050/Screenshot_2025-01-31_141955_gayvii.png',
    technologies: ['Spring Boot', 'Spring Security', 'JWT', 'MongoDb' , 'Redis', 'RAG-LLM' ,'Docker', 'React', 'React Query', 'Redux', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://advanced-web-project.github.io/tmdb-frontend',
    githubLink: 'https://github.com/advanced-web-project',
    startDate: 'December 2024',
    endDate: 'January 2025',
    teamSize: 3,
    features: [
      'Login with username & password',
      'Social login (Google)',
      'Account registration & email activation',
      'Password recovery',
      'Display trending, popular movies, new movie trailers, quick search bar, movie category switching',
      'Search and filter movies by movie name, actor name, natural language',
      'AI Assistant Navigation',
      'Personalized Movie Recommendations',
      'Rendering detail movie, actor',
      'User interaction: rate, add to favorite, watch list',
      'Detail profile, edit and update profile'
    ],
    role: 'Frontend Developer, Leader',
    responsibilities: [
      'Build entire UI for the frontend application using React, Tailwind CSS',
      `Implement all user's features in the frontend application`,
      'Integrate APIs with backend service',
      `Use Redux for state management, React Query for fetching data`,
      `Implement CI/CD pipeline for the frontend application`,
      `Collaborate with the backend team to develop project efficiently`,
    ]
  },
  {
    id: '3',
    title: 'Simple Enterprise Framework',
    description: 'SEP is a software development framework designed to streamline the creation of management applications with essential CRUD (Create, Read, Update, Delete) functionalities. Built using object-oriented design patterns, the framework provides a structured and reusable architecture, allowing developers to rapidly generate database-driven applications.',
    image: 'https://res.cloudinary.com/dt0ps34k9/image/upload/v1738310899/Screenshot_2025-01-31_150756_awm5kc.png',
    technologies: ['.NET','MongoDB','MySQL', 'PostgresSQL', 'React', 'Prisma'],
    liveLink: '',
    githubLink: '',
    startDate: 'November 2024',
    endDate: 'January 2025',
    teamSize: 4,
    features: [
      'User Authentication & Role-Based Access Control',
      'Dynamic CRUD Form Generation',
      'Custom Inversion of Control (IoC) Implementation',
      'Dynamically generates UI layouts and data models based on database structures.'
    ],
    role: 'Backend Developer',
    responsibilities: [
      'Implement core features of the framework including connection to databases, CRUD operations',
      'Apply design patterns such as Singleton, Strategy, Abstract Factory to ensure scalability and maintainability',
    ]
  },
  {
    id: '4',
    title: 'Online Novel Aggregation and Reading Application',
    description: 'The Online Novel Aggregation and Reading Application is a platform that enables users to search, read, and manage their favorite novels from multiple online sources. Instead of storing novel content, the system aggregates data from external websites, allowing users to access a wide variety of novels effortlessly. The application enhances the reading experience with customizable display settings, including font size, font type, background color, text color, and line spacing. Users can bookmark their reading progress, navigate efficiently between chapters, and export novels into various formats (PDF, EPUB, MP3) for offline reading on other devices. With a flexible source management system, users can prioritize novel sources to ensure they get the best-quality content. The system also automatically switches sources if a chapter is unavailable or of poor quality, maintaining a seamless reading experience. Designed with a plugin-based architecture, the application supports hot-plugging, allowing administrators to dynamically add or remove novel sources and export formats without requiring system recompilation. This ensures long-term adaptability and easy expansion, making the platform highly scalable and future-proof.',
    image: 'https://res.cloudinary.com/dt0ps34k9/image/upload/v1738325029/Screenshot_2025-01-31_190232_carp6b.png',
    technologies: ['Spring boot','Crawling', 'JSoup' , 'Spring Security', 'Docker', 'Typescript', 'ReactJS', 'MUI', 'Redux-Persits', 'Tailwind CSS', 'redux-toolkit', 'zustand', 'tanstack-react-query', 'react-loading-skeleton'],
    liveLink: 'https://me-d-c-truy-n.github.io/frontend/',
    githubLink: 'https://github.com/Me-d-c-truy-n',
    startDate: 'May 2024',
    endDate: 'July 2024',
    teamSize: 4,
    features: [
     'Search novels by title, author, publication year',
     'Read novels with customizable display settings (font size, colors, spacing)',
     'Fetches novel content from multiple external sources with user-defined priority',
     'Automatically switches to an alternative source if a chapter is missing or of low quality',
     'Saves user progress and enables quick navigation to chapters or specific pages',
     'Supports exporting novels into various formats (PDF, EPUB, MP3) for offline reading',
     'Downloads and stores content locally for faster access and better convenience',
     'Supports hot-plugging new novel sources without recompilation',
     'Administrators can add/remove supported ebook formats dynamically'
    ],
    role: 'Backend Developer',
    responsibilities: [
      `Build a plugin to crawl novel data from the source https://truyen.tangthuvien.vn/.`,
      `Design model and handle exceptions for entire backend application.`,
      'Build a plugin to export novel data to PDF, apply multithreading to improve performance when downloading novel data.',
      'Write unit tests for crawling and exporting plugins.',
      `Implement features plugins management, user authentication`,
      `Deploy the backend application on render.com`,
      'Write API documentation using Swagger.',
      'Collaborate with the frontend team to integrate the backend services with the frontend application.',
    ]
  },
  {
    id: '5',
    title: 'E-commerce Platform',
    description: 'EcommerceShop is a modular e-commerce platform that provides both admin and customer. This project is designed using a modular architecture for easy maintenance and flexibility. The root project, EcommerceShop, consists of multiple submodules, each handling different components of the e-commerce system.',
    image: 'https://res.cloudinary.com/dt0ps34k9/image/upload/v1738329598/Screenshot_2025-01-31_201825_id99re.png',
    technologies: ['Spring boot','Spring Security', 'MySql' , 'Redis', 'MongoDB', 'Docker', 'Bootstrap', 'JQuery', 'Charts', 'Thymeleaf', 'Websocket', 'Ajax', 'S3-Storage', 'Facebook-login', 'Googleoauth2', 'Paypal-checkout', 'Recaptcha-V3', 'FAISS', 'Huggingface Transformers'],
    liveLink: 'https://my-us-shop.onrender.com/Myshop',
    githubLink: 'https://github.com/mihoag/E-commerce-Website',
    startDate: 'July 2024',
    endDate: 'October 2024',
    teamSize: 1,
    features: [
      'Sign up, sign in, sign out',
      'User authentication and authorization',
      'Social login (Facebook, Google)',
      'Forgot password, reset password',
      'Update user profile',
      'Manage products, categories, brands, users, customers, orders, shipping, sale reports, settings (admin)',
      'View products by category, detail product',
      'Search products by category, name, natural language',
      'Add products to cart, update cart, delete cart',
      'Placing orders, tracking orders, viewing order history',
      'Making payments via PayPal and COD',
      'Chat between admin and customers',
    ],
    role: 'Fullstack Developer',
    responsibilities: []
  },
  {
    id: '6',
    title: 'Booking System',
    description: 'The Movie Ticket Booking System is a graphical user interface (GUI) application designed to facilitate the booking of tickets for events occurring on specified future dates. This system consists of two main components: a server application and a client application, allowing for efficient management and purchase of tickets.',
    image: 'https://res.cloudinary.com/dt0ps34k9/image/upload/v1738934263/Screenshot_2025-02-07_201107_xel87q.png',
    technologies: ['Java', 'JavaSwing', 'Socket', 'Multithreading', 'JCalendar', 'Synchronization'],
    liveLink: 'https://www.youtube.com/watch?v=Hv6hROnKYb8',
    githubLink: 'https://github.com/mihoag/BookingSystem',
    startDate: 'May 2024',
    endDate: 'June 2024',
    teamSize: 1,
    features: [
      'Configure events to take place on a specific date in the future.',
      'Configure the layout of the venue, including the number of zones or stages, rows, and seats per row.',
      'Allows administrators to configure events, seating arrangements, and ticket prices.',
      'Real-Time monitoring, provides a view of seat availability (occupied or vacant).',
      'Connects to the server to retrieve and display available events and their showtime.',
      'Enables users to book tickets for available seats, storing essential customer information (name, phone number, seat selection).',
      'Operate without a database by utilizing internal data storage for managing event and booking information.'
    ],
    role: 'Fullstack Developer',
    responsibilities: []
  },
];
