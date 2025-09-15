
type ExperienceItem = {
  title: string;
  date: string;
  points: string[];
  company?: string;
  location?: string;
};

export const experience: ExperienceItem[] = [
  {
    title: 'Full Stack Web Developer',
    date: '2023 – Present',
    points: [
      'Developed and maintained dynamic web applications using React.js, Next.js, and Node.js.',
      'Architected RESTful APIs integrated with MongoDB.',
      'Deployed scalable applications on Vercel and Netlify.',
    ],
  },
  {
    title: 'Graphic Designer',
    date: '2021 – 2023',
    points: [
      'Created branding materials, social media assets, and promotional designs.',
      'Expertise in Adobe Photoshop, Canva, and Figma for designing.',
      "Able to create Logos for brands and companies.",
    ],
  },
];

type Project = {
  title: string;
  domain: string;
  description: string;
  technologies: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: 'Flappy Bird Game',
    domain: 'Web Development',
    link: 'https://flappy-bird-game-pearl.vercel.app/',
    description:
      'Built a browser-based Flappy Bird clone using vanilla HTML, CSS, and JavaScript, simulating gravity, obstacle collision, and responsive gameplay.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
  },
  {
    title: 'Ranking App',
    domain: 'Web Development',
    description:
      'Developed a responsive ranking app to dynamically list and sort items based on user-defined criteria, using pure HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
  },
  {
    title: 'Tic Tac Toe Game',
    domain: 'Web Development',
    link: 'https://tic-tac-toe-game-tan-one.vercel.app/',
    description:
      'Created an interactive two-player Tic Tac Toe game with real-time win condition checks and reset functionality using vanilla JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Game Logic'],
  },
  {
    title: 'Spotify Clone',
    domain: 'Web Development',
    description:
      'Designed a front-end clone of Spotify’s UI with music control features, playlists, and responsive styling using HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },
  {
    title: 'Waxwing',
    domain: 'Web Development',
    link: 'https://waxwing.vercel.app',
    description:
      'Built a professional, responsive company website for practice using Next.js with optimized performance, SEO, and modular components.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'SEO Optimization', 'Web Performance'],
  },
  {
    title: 'Friends Challenge Game',
    domain: 'Web Development',
    link: 'https://friends-challenge-game.vercel.app/',
    description:
      'Developed a React-based quiz game for friends to challenge each other with custom questions and score tracking.',
    technologies: ['React', 'JavaScript', 'Hooks', 'State Management'],
  },
  {
    title: 'Developer Portfolio',
    domain: 'Web Development',
    description:
      'Created a personal portfolio website to showcase projects, skills, and experience using HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },
  {
    title: 'Vite Clone',
    domain: 'Web Development',
    description:
      'Built a lightweight front-end tool mimicking the structure and setup of Vite using vanilla web technologies.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Netflix Clone',
    domain: 'Web Development',
    description:
      'Designed a static front-end Netflix clone featuring dynamic movie thumbnails, responsive layout, and styled sections.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },
  {
    title: 'Quiz App',
    domain: 'Web Development',
    description:
      'Developed a React-powered quiz application with multiple-choice questions, score tracking, and conditional rendering.',
    technologies: ['React', 'JavaScript', 'Hooks', 'State Management'],
  },
];

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: string;
};

export const contactInfo: ContactItem[] = [
  {
    label: "Email",
    value: "sheharyarrana2003@gmail.com",
    href: "mailto:sheharyarrana2003@gmail.com",
    icon: "📧",
  },
  {
    label: "LinkedIn",
    value: "Muhammad Sheharyar Shahzad",
    href: "https://www.linkedin.com/in/muhammad-sheharyar-shahzad-rana-5067a4276",
    icon: "🔗",
  },
  {
    label: "Instagram",
    value: "flutter-with-sheharyar",
    href: "https://www.instagram.com/flutter_with_sheharyar/",
    icon: "🔗",
  },
  {
    label: "GitHub",
    value: "sheharyarrana2003",
    href: "https://github.com/sheharyarrana2003",
    icon: "🐙",
  },
  {
    label: "LeetCode",
    value: "sheharyarrana2003",
    href: "https://leetcode.com/sheharyarrana2003/",
    icon: "🐙",
  },
  {
    label: "Fiverr",
    value: "sheharyarrana2003",
    href: "https://www.fiverr.com/s/xXRyEVa",
    icon: "🐙",
  },
  {
    label: "HackerRank",
    value: "sheharyarrana201",
    href: "https://www.hackerrank.com/profile/sheharyarrana201",
    icon: "🐙",
  },
];

export const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and high-performance websites tailored to your needs.',
  },
  {
    title: 'Mobile Applications',
    description: 'Creating smooth, user-friendly apps for both iOS and Android platforms.',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing modern, intuitive interfaces that enhance user experience.',
  },
  {
    title: 'Cloud Solutions',
    description: 'Deploying secure, scalable cloud infrastructure to support your business.',
  },
  {
    title: 'Data Analytics',
    description: 'Turning raw data into meaningful insights for better decision-making.',
  },
];

export const teamImages: string[] = [
  'https://placehold.co/400x300/111/FFF?text=Team+1',
  'https://placehold.co/400x300/111/FFF?text=Team+2',
  'https://placehold.co/400x300/111/FFF?text=Team+3',
  'https://placehold.co/400x300/111/FFF?text=Team+4',
  'https://placehold.co/400x300/111/FFF?text=Team+5',
  'https://placehold.co/400x300/111/FFF?text=Team+6',
  'https://placehold.co/400x300/111/FFF?text=Team+7',
  'https://placehold.co/400x300/111/FFF?text=Team+8',
];

export const eventImages: string[] = [
  'https://placehold.co/400x300/111/FFF?text=Event+1',
  'https://placehold.co/400x300/111/FFF?text=Event+2',
  'https://placehold.co/400x300/111/FFF?text=Event+3',
  'https://placehold.co/400x300/111/FFF?text=Event+4',
  'https://placehold.co/400x300/111/FFF?text=Event+5',
  'https://placehold.co/400x300/111/FFF?text=Event+6',
  'https://placehold.co/400x300/111/FFF?text=Event+7',
  'https://placehold.co/400x300/111/FFF?text=Event+8',
  'https://placehold.co/400x300/111/FFF?text=Event+9',
  'https://placehold.co/400x300/111/FFF?text=Event+10',
  'https://placehold.co/400x300/111/FFF?text=Event+11',
  'https://placehold.co/400x300/111/FFF?text=Event+12',
];

export const skills = [
  { name: "JavaScript", icon: "https://placehold.co/100x100/111/FFF?text=JS" },
  { name: "TypeScript", icon: "https://placehold.co/100x100/111/FFF?text=TS" },
  { name: "React", icon: "https://placehold.co/100x100/111/FFF?text=React" },
  { name: "Next.js", icon: "https://placehold.co/100x100/111/FFF?text=Next.js" },
  { name: "Node.js", icon: "https://placehold.co/100x100/111/FFF?text=Node.js" },
  { name: "MongoDB", icon: "https://placehold.co/100x100/111/FFF?text=MongoDB" },
  { name: "Python", icon: "https://placehold.co/100x100/111/FFF?text=Python" },
  { name: "TailwindCSS", icon: "https://placehold.co/100x100/111/FFF?text=Tailwind" },
  { name: "GitHub", icon: "https://placehold.co/100x100/111/FFF?text=GitHub" },
  { name: "Figma", icon: "https://placehold.co/100x100/111/FFF?text=Figma" },
  { name: "Docker", icon: "https://placehold.co/100x100/111/FFF?text=Docker" },
  // Add more as needed
];


export const certifications = [
  { name: "AWS Certification", icon: "https://placehold.co/400x300/111/FFF?text=AWS+Certification" },
  { name: "Google Cloud", icon: "https://placehold.co/400x300/111/FFF?text=Google+Cloud" },
  { name: "Microsoft Certified", icon: "https://placehold.co/400x300/111/FFF?text=Microsoft+Certified" },
  { name: "Meta Frontend", icon: "https://placehold.co/400x300/111/FFF?text=Meta+Frontend" },
  { name: "Meta Frontend", icon: "https://placehold.co/400x300/111/FFF?text=Meta+Frontend" },
  // add more with same format
];

export const badges = [
  { name: "GitHub Badge", icon: "https://placehold.co/400x300/111/FFF?text=GitHub+Badge" },
  { name: "LeetCode Badge", icon: "https://placehold.co/400x300/111/FFF?text=LeetCode+Badge" },
  { name: "HackerRank Badge", icon: "https://placehold.co/400x300/111/FFF?text=HackerRank+Badge" },
  { name: "StackOverflow Badge", icon: "https://placehold.co/400x300/111/FFF?text=StackOverflow+Badge" },
  { name: "StackOverflow Badge", icon: "https://placehold.co/400x300/111/FFF?text=StackOverflow+Badge" },
  // add more with same format
];



export type PageDef = {
  name: string;
  id: string;
  component: React.ComponentType<{}>;
};


