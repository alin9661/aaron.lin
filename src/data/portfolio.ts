import { Project, ExperienceItem, SkillCategory, ContactLink, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: '[ABOUT.MD]', href: '#about' },
  { label: '[PROJECTS/]', href: '#projects' },
  { label: '[TECH_STACK]', href: '#skills' },
  { label: '[TIMELINE.LOG]', href: '#experience' },
  { label: '[CONNECT.SH]', href: '#contact' }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    status: 'LIVE',
    description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with scalability and performance in mind.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma'],
    links: [
      { label: '[VIEW_LIVE]', url: '#' },
      { label: '[SOURCE_CODE]', url: '#' }
    ]
  },
  {
    id: '2',
    title: 'AI Task Manager',
    status: 'BETA',
    description: 'Smart task management application with AI-powered prioritization, natural language processing, and automated workflow suggestions.',
    technologies: ['React', 'OpenAI API', 'Node.js', 'MongoDB'],
    links: [
      { label: '[DEMO]', url: '#' },
      { label: '[GITHUB]', url: '#' }
    ]
  },
  {
    id: '3',
    title: 'Real-time Collaboration Tool',
    status: 'IN_DEV',
    description: 'WebSocket-based collaboration platform with live cursors, real-time document editing, and video chat integration.',
    technologies: ['Vue.js', 'Socket.io', 'WebRTC', 'Redis'],
    links: [
      { label: '[PREVIEW]', url: '#' },
      { label: '[DOCUMENTATION]', url: '#' }
    ]
  },
  {
    id: '4',
    title: 'Data Visualization Dashboard',
    status: 'LIVE',
    description: 'Interactive dashboard for complex data analysis with real-time updates, custom charts, and exportable reports.',
    technologies: ['D3.js', 'React', 'Python', 'FastAPI'],
    links: [
      { label: '[EXPLORE]', url: '#' },
      { label: '[CASE_STUDY]', url: '#' }
    ]
  },
  {
    id: '5',
    title: 'Creative Coding Library',
    status: 'OSS',
    description: 'Open-source library for creative coding projects, featuring particle systems, generative art algorithms, and WebGL utilities.',
    technologies: ['TypeScript', 'WebGL', 'Canvas API'],
    links: [
      { label: '[NPM]', url: '#' },
      { label: '[EXAMPLES]', url: '#' }
    ]
  },
  {
    id: '6',
    title: 'Mobile-First PWA',
    status: 'LIVE',
    description: 'Progressive Web App with offline functionality, push notifications, and native-like performance on mobile devices.',
    technologies: ['React Native', 'Service Workers', 'IndexedDB'],
    links: [
      { label: '[INSTALL]', url: '#' },
      { label: '[SOURCE]', url: '#' }
    ]
  }
];

export const experienceItems: ExperienceItem[] = [
  {
    id: '1',
    date: '2023 - Present',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovators Inc.',
    description: 'Leading development of cloud-native applications, mentoring junior developers, and architecting scalable solutions for enterprise clients.'
  },
  {
    id: '2',
    date: '2021 - 2023',
    title: 'Full-Stack Developer',
    company: 'Digital Solutions Co.',
    description: 'Developed and maintained multiple web applications, implemented CI/CD pipelines, and improved system performance by 40%.'
  },
  {
    id: '3',
    date: '2019 - 2021',
    title: 'Frontend Developer',
    company: 'Creative Agency',
    description: 'Created responsive web interfaces, implemented design systems, and collaborated with UX teams to deliver pixel-perfect experiences.'
  },
  {
    id: '4',
    date: '2018 - 2019',
    title: 'Junior Developer',
    company: 'Startup Hub',
    description: 'Started my professional journey building MVPs for startups, learning best practices, and contributing to open-source projects.'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: '[FRONTEND]',
    skills: [
      'React.js / Next.js 14+',
      'TypeScript / JavaScript ES6+',
      'Tailwind CSS / SCSS',
      'Redux / Zustand',
      'Three.js / WebGL',
      'Framer Motion'
    ]
  },
  {
    title: '[BACKEND]',
    skills: [
      'Node.js / Express',
      'Python / FastAPI',
      'PostgreSQL / MongoDB',
      'Prisma ORM',
      'GraphQL / REST APIs',
      'WebSocket / Socket.io'
    ]
  },
  {
    title: '[DEVOPS & TOOLS]',
    skills: [
      'Docker / Kubernetes',
      'AWS / Vercel / Netlify',
      'CI/CD / GitHub Actions',
      'Git / Version Control',
      'Jest / Cypress',
      'Webpack / Vite'
    ]
  }
];

export const contactLinks: ContactLink[] = [
  { label: '[GITHUB]', url: 'https://github.com/aaronlin' },
  { label: '[LINKEDIN]', url: 'https://linkedin.com/in/aaronlin' },
  { label: '[TWITTER]', url: 'https://twitter.com/aaronlin' },
  { label: '[EMAIL]', url: 'mailto:aaron.lin@email.com' },
  { label: '[RESUME.PDF]', url: '/resume.pdf' }
];