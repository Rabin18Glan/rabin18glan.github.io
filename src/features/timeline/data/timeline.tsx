import Icon from "../../../components/Icon";

export interface TimelineItemData {
  date: string;
  title: string;
  taskDone: string;
  icon: JSX.Element;
}

export const timeline: TimelineItemData[] = [
    {
      date: '2022 January',
      title: 'Started Coding',
      taskDone: 'Started to learn C and C++ programming',
      icon: <Icon name="devicon-cplusplus-plain" className="text-blue-600" />
    },
    {
      date: '2022 April',
      title: 'Started Web Development',
      taskDone: 'First I learn HTML, CSS and Javascript and Jumped into React',
      icon: <Icon name="devicon-html5-plain" className="text-orange-600" />
    },
    {
      date: '2023 January',
      title: 'Started Doing own Projects',
      taskDone: 'Using React I started building some simple projects',
      icon: <Icon name="devicon-react-original" className="text-blue-400" />
    },
    {
      date: '2023 May',
      title: 'Started Doing Flutter',
      taskDone: 'Dark, Flutter with Getx, MVVM architecture, etc',
      icon: <Icon name="devicon-flutter-plain" className="text-cyan-500" />
    },
    {
      date: '2023 October',
      title: 'Started Backend with Node Js',
      taskDone: 'Learn backend concepts and databases',
      icon: <Icon name="devicon-nodejs-plain" className="text-green-600" />
    }, 
    {
      date: '2024 February',
      title: 'Started Laravel Development',
      taskDone: 'Learn backend concepts and databases',
      icon: <Icon name="devicon-laravel-plain" className="text-red-600" />
    },
    {
      date: '2024 August',
      title: 'Started Next.js',
      taskDone: 'Learned Full Stack Development with Next, AuthNext, Server side rendering, etc',
      icon: <Icon name="devicon-nextjs-plain" className="text-black dark:text-white" />
    },
    {
      date: '2025 Jan - June',
      title: 'First Internship - Kutumba Tech',
      taskDone: 'Remote internship as Frontend & Mobile App Developer. Learned ASP.NET, Design Patterns, and worked on real-world Flutter (Cinema App, Health Platform) and React projects.',
      icon: <Icon name="devicon-flutter-plain" className="text-cyan-500" />
    },
    {
      date: '2025 May - Aug',
      title: 'Full Stack Internship - Truenary Solutions',
      taskDone: 'Onsite internship learning GraphQL, Serverless, Kubernetes, Microservices, and Multi-tenant apps. Worked on restaurant platforms and RAG applications.',
      icon: <Icon name="devicon-graphql-plain" className="text-pink-600" />
    },
    {
      date: '2025 Aug - Present',
      title: 'Full Stack Developer - Truenary Solutions',
      taskDone: 'Transitioned to a full-time role, continuing to build and scale complex applications with modern web and cloud technologies.',
      icon: <Icon name="devicon-docker-plain" className="text-blue-500" />
    },
    {
      date: '2025 August - Present',
      title: 'Remote Full Stack & WP Developer - US TechWorks Global',
      taskDone: 'Contributing part-time as a Full Stack and WordPress Developer, managing various digital solutions in a remote global environment.',
      icon: <Icon name="devicon-wordpress-plain" className="text-blue-400" />
    },
    {
      date: '2025 October',
      title: 'The Rust Journey',
      taskDone: 'Started learning Rust to build scalable, safe, and stable backend systems. Currently mastering memory safety and performance concepts.',
      icon: <Icon name="devicon-rust-original" className="text-orange-700 dark:text-orange-500" />
    },
];