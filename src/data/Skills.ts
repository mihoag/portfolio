import { Code, Server, Database, Settings, UserCheck } from 'lucide-react';

export const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      {
        name: 'Java',
        image:
          'https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/java/java.png',
        description:
          'Java was originally developed as an alternative to the C/C++ programming languages. It is now mainly used for building web, desktop, mobile, and embedded applications. Java is owned and licensed through Oracle, with free and open source implementations available from Oracle and other vendors.',
      },
      {
        name: 'Javascript',
        image: 'path/to/javascript.png',
        description: 'A versatile language primarily used for web development.',
      },
      {
        name: 'C/C++',
        image: 'path/to/c_cpp.png',
        description: 'General-purpose programming languages with low-level memory manipulation.',
      },
      {
        name: 'C#',
        image: 'path/to/csharp.png',
        description: 'A modern, object-oriented programming language developed by Microsoft.',
      },
    ],
  },
  {
    title: 'Frontend',
    icon: Code,
    skills: [
      { name: 'React', image: 'path/to/react.png', description: 'A JavaScript library for building user interfaces.' },
      {
        name: 'Vue.js',
        image: 'path/to/vue.png',
        description: 'A progressive framework for building user interfaces.',
      },
      {
        name: 'JavaScript',
        image: 'path/to/javascript.png',
        description: 'A versatile language primarily used for web development.',
      },
      {
        name: 'TypeScript',
        image: 'path/to/typescript.png',
        description: 'A typed superset of JavaScript that compiles to plain JavaScript.',
      },
      { name: 'HTML', image: 'path/to/html.png', description: 'The standard markup language for creating web pages.' },
      {
        name: 'CSS',
        image: 'path/to/css.png',
        description: 'A style sheet language used for describing the presentation of a document.',
      },
      {
        name: 'Tailwind CSS',
        image: 'path/to/tailwind.png',
        description: 'A utility-first CSS framework for rapid UI development.',
      },
      {
        name: 'Bootstrap',
        image: 'path/to/bootstrap.png',
        description: 'A popular CSS framework for developing responsive and mobile-first websites.',
      },
      {
        name: 'JQuery',
        image: 'path/to/jquery.png',
        description: 'A fast, small, and feature-rich JavaScript library.',
      },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      {
        name: 'Spring boot',
        image: 'path/to/spring_boot.png',
        description: 'An open-source Java-based framework used to create microservices.',
      },
      {
        name: 'Spring security',
        image: 'path/to/spring_security.png',
        description: 'A framework that focuses on providing authentication and authorization.',
      },
      {
        name: 'Spring cloud',
        image: 'path/to/spring_cloud.png',
        description: 'A framework for building robust cloud applications.',
      },
      {
        name: 'ExpressJS',
        image: 'path/to/expressjs.png',
        description: 'A minimal and flexible Node.js web application framework.',
      },
      {
        name: 'Microservices (System Architecture)',
        image: 'path/to/microservices.png',
        description:
          'Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams. Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.',
      },
      {
        name: 'RESTful APIs',
        image: 'path/to/restful_apis.png',
        description: 'An architectural style for designing networked applications.',
      },
      {
        name: 'WebSockets',
        image: 'path/to/websockets.png',
        description: 'A protocol providing full-duplex communication channels over a single TCP connection.',
      },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      {
        name: 'Microsoft SQL Server',
        image: 'path/to/sql_server.png',
        description: 'A relational database management system developed by Microsoft.',
      },
      {
        name: 'MySQL',
        image: 'path/to/mysql.png',
        description: 'An open-source relational database management system.',
      },
      {
        name: 'PostgreSQL',
        image: 'path/to/postgresql.png',
        description: 'An open-source object-relational database system.',
      },
      {
        name: 'MongoDB',
        image: 'path/to/mongodb.png',
        description: 'A source-available cross-platform document-oriented database program.',
      },
      {
        name: 'Redis',
        image: 'path/to/redis.png',
        description: 'An open-source, in-memory data structure store, used as a database, cache, and message broker.',
      },
    ],
  },
  {
    title: 'Technologies',
    icon: Settings,
    skills: [
      {
        name: 'Git',
        image: 'path/to/git.png',
        description: 'A distributed version-control system for tracking changes in source code.',
      },
      {
        name: 'Github',
        image: 'path/to/github.png',
        description: 'A provider of Internet hosting for software development and version control using Git.',
      },
      {
        name: 'Github Actions',
        image: 'path/to/github_actions.png',
        description: 'A CI/CD service that allows you to automate your build, test, and deployment pipeline.',
      },
      {
        name: 'Docker',
        image: 'path/to/docker.png',
        description:
          'A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.',
      },
      {
        name: 'Swagger',
        image: 'path/to/swagger.png',
        description: 'A suite of tools for API developers from SmartBear Software.',
      },
      { name: 'Postman', image: 'path/to/postman.png', description: 'An API platform for building and using APIs.' },
      {
        name: 'Jira',
        image: 'path/to/jira.png',
        description:
          'A proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management.',
      },
    ],
  },
  {
    title: 'Soft skills',
    icon: UserCheck,
    skills: [
      {
        name: 'Strong self-study capabilities',
        image: 'path/to/self_study.png',
        description: 'Ability to learn and understand new concepts independently.',
      },
      {
        name: 'Effective communication',
        image: 'path/to/communication.png',
        description: 'Ability to convey information to others effectively and efficiently.',
      },
      {
        name: 'Collaborative skills',
        image: 'path/to/collaboration.png',
        description: 'Ability to work well with others to achieve a common goal.',
      },
    ],
  },
];
