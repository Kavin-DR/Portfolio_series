/**
 * Central portfolio data — generated from Sushmita's resume (Sushmita_dasari.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Kavin',
  displayName: 'KAVIN',
  firstName: 'Kavin',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A KAVIN ORIGINAL',
  role: 'AI - Engineer',
  tagline: ['AI Engineer', 'Machine Learning', 'Generative AI'],
intro:
  'A Computer Science and Engineering student passionate about Artificial Intelligence, Machine Learning and Generative AI. Skilled in Python, TensorFlow, NLP and full-stack development, building intelligent AI-powered applications and scalable solutions to solve real-world problems.',
location: 'Coimbatore, TamilNadu',
  email: 'kavin.d.r.2007@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/kavin-dr/',
    github: 'https://github.com/Kavin-DR',
  },
  resumePdf: '/assets/Kavin_resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Kavin',
  },
  interests: ['System Design', 'Cloud Computing (AWS)', 'Machine Learning'],
};

export const education = [
  {
    school: 'KIT - KALAIGNARKARUNANIDHI INSTITUTE OF TECHNOLOGY',
    place: 'Coimbatore',
    degree: 'Bachelor of Engineering - Computer science and engineering',
    period: 'September 2024 – Present',
    score: 'CGPA 7.58',
  },
  {
    school: 'GOVERNMENT HIGHER SECONDARY SCHOOL, MUGASI ANUMANPALLI',
    place: 'Erode',
    degree: 'HSC - Mathematics, Physics, Chemistry',
    period: 'June 2022 – May 2023',
    score: 'Score 983/1200',
  },
];

export const experience = [
  {
  company: 'Decode Labs',
  role: 'AI Engineer Intern',
  place: 'Lucknow, Uttar Pradesh',
  period: 'September 2026 – November 2026',
  points: [
  'Developed AI-powered applications using Python and Machine Learning techniques.',
  'Worked on data preprocessing, model development, training, and evaluation.',
  'Explored Generative AI concepts and implemented intelligent solutions for real-world problems.',
  'Built and integrated AI models with web applications using frontend and backend technologies.',
  'Gained hands-on experience in AI development, problem-solving, and project implementation.'
],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot',
    year: '2026',
    genre: 'AI • Web Development',
    logline: 'An AI-powered chatbot web application providing real-time user interaction through a responsive browser-based interface.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    build: [
      'Developed an AI-powered chatbot web application using HTML, CSS, and JavaScript, enabling real-time user interaction through a responsive, browser-based interface.',
      'Designed and implemented a user-friendly chat UI with responsive design principles, ensuring seamless functionality across devices.'
    ],
    features: [
      'AI-powered chatbot interaction',
      'Real-time user messaging',
      'Responsive chat interface',
      'Clean and user-friendly UI',
      'Cross-device compatibility'
    ],
    metrics: [],
    github: 'https://github.com/Kavin-DR/DecodeLabs-Internship/tree/main/Project-1-Chatbot',
    palette: {
      from: '#07152e',
      via: '#123b72',
      to: '#050816',
      accent: '#38bdf8'
    },
    motif: 'shield',},
  {
    id: 'game-verse',
    title: 'Game-Verse',
    year: '2026',
    genre: 'Full-Stack • Gaming',
    logline: 'A full-stack gaming platform designed to explore games and discover game reviews through an interactive interface.',
    stack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Tailwind CSS'
    ],
    build: [
      'Developed a full-stack gaming platform using React, Node.js, Express.js, and MongoDB to provide an interactive gaming and game-review experience.',
      'Designed a responsive user interface using Tailwind CSS and integrated backend services with MongoDB for efficient data management.'
    ],
    features: [
      'Interactive gaming platform',
      'Game listings and information',
      'Game reviews',
      'React-based user interface',
      'Node.js and Express.js backend',
      'MongoDB database integration',
      'Responsive design using Tailwind CSS'
    ],
    metrics: [],
    github: 'https://github.com/Kavin-DR/Game-Verse',
    palette: {
      from: '#07152e',
      via: '#123b72',
      to: '#050816',
      accent: '#38bdf8'
    },
    motif: 'flow',
  },
  {
    id: 'online-quiz-system',
    title: 'Online Quiz System',
    year: '2026',
    genre: 'C++ • OOP • Problem Solving',
    logline: 'A C++ console-based quiz application supporting multiple question types and categorized quiz topics.',
    stack: [
      'C++',
      'Object-Oriented Programming',
      'Exception Handling',
      'Enumerations'
    ],
    build: [
      'Developed a C++ console-based Online Quiz System applying object-oriented principles, including polymorphism, abstraction, and encapsulation, to manage multiple question types such as MCQs and True/False.',
      'Implemented robust exception handling and enumerations to ensure input validation, type safety, and crash-free execution across categorized quiz topics.'
    ],
    features: [
      'Multiple-choice questions (MCQ)',
      'True/False questions',
      'Object-oriented programming principles',
      'Polymorphism and abstraction',
      'Exception handling',
      'Enumerations for type safety',
      'Categorized quiz topics'
    ],
    metrics: [],
    github: 'https://github.com/Kavin-DR/Online-Quiz-System',
    palette: {
      from: '#10200a',
      via: '#356b18',
      to: '#080d05',
      accent: '#a3e635'
    },
    motif: 'shield',},
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'competitive-coding',
    title: 'Competitive Programmer',
    org: 'LeetCode • CodeChef',
    detail: 'LeetCode: 40+ problems solved with a maximum rating of 1287. CodeChef: 450+ problems solved, maximum rating of 1201, and 1-star ranking.',
    laurel: 'Problem Solving',
  },
  {
    id: 'mongodb-certifications',
    title: '9 MongoDB Certifications',
    org: 'MongoDB',
    detail: 'Earned 9 MongoDB certifications, demonstrating knowledge of database design and management.',
    laurel: 'Certifications',
  },
  {
    id: 'ai-ml-certifications',
    title: 'AI & Machine Learning Certifications',
    org: 'Infosys Springboard',
    detail: 'Completed Machine Learning Foundation Certification and Generative Models for Developers.',
    laurel: 'AI / ML',
  },
  {
    id: 'event-incharge',
    title: 'Event In-Charge',
    org: 'Code Debugging Event',
    detail: 'Coordinated and managed a technical debugging competition, overseeing problem-solving rounds and ensuring smooth event execution.',
    laurel: 'Leadership',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  {
    issuer: 'Infosys Springboard',
    name: 'Generative Models for Developers',
    link: 'https://drive.google.com/file/d/1LqStghYrK_osqI1gx9p4PfTifTV9-4aG/view',
  },
  {
    issuer: 'Coursera',
    name: 'Operating System Foundations',
    link: 'https://drive.google.com/file/d/1XO68l983LL2Y-SSTlb-5anKqu_bdOSMh/view',
  },
  {
    issuer: 'Google',
    name: 'Foundations of Cybersecurity',
    link: 'https://drive.google.com/file/d/1kKEBIwYuH5N80AR8Q1X9XjKuvJfuiOLw/view',
  },
  {
    issuer: 'Coursera',
    name: 'Introduction to Ethical Hacking',
    link: 'https://drive.google.com/file/d/1XV8Qinb00kID0Jc93z_eeV2pjF8crJWr/view',
  },
  {
    issuer: 'Google',
    name: 'Build, Launch, and Manage E-commerce Stores',
    link: 'https://drive.google.com/file/d/1ba6aJUXnBu3-43j0ME4syn69VXGQye1f/view',
  },
  {
    issuer: 'Cisco Networking Academy',
    name: 'Linux Essentials',
    link: 'https://drive.google.com/file/d/12aZRcJ5cwdSn79GENjPofIo-vhNtUtPB/view',
  },
  {
    issuer: 'Infosys Springboard',
    name: 'Machine Learning Foundation Certification',
    link: 'https://drive.google.com/file/d/1L25njarubxtATPWMwphkVgaKE32HakVO/view',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core programming skills',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'Java', mono: 'Jv' },
      { name: 'C++', mono: 'C+' },
      { name: 'C', mono: 'C' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    subtitle: 'Artificial intelligence technologies',
    skills: [
      { name: 'Machine Learning', mono: 'ML' },
      { name: 'Generative AI', mono: 'GA' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Web interfaces & development',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    subtitle: 'Server-side technologies',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'Mongoose', mono: 'Mg' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Database management systems',
    skills: [
      { name: 'MongoDB', mono: 'Mo' },
      { name: 'SQLite', mono: 'Sq' },
      { name: 'Supabase', mono: 'Sb' },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    subtitle: 'Deployment & development tools',
    skills: [
      { name: 'AWS', mono: 'Aw' },
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Vercel', mono: 'Ve' },
      { name: 'Render', mono: 'Rn' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'Computer science foundations',
    skills: [
      { name: 'OOPs', mono: 'Oo' },
      { name: 'Data Structures', mono: 'DS' },
      { name: 'Algorithms', mono: 'Al' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    subtitle: 'Development environment',
    skills: [
      { name: 'Postman', mono: 'Pm' },
      { name: 'npm', mono: 'Np' },
      { name: 'Linux', mono: 'Lx' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Tailwind CSS', mono: 'Tw' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: [
    'Cisco Python Essentials 1',
    'Machine Learning Foundation Certification',
    'AI Chatbot Project',
  ],

  Java: [
    'Java Programming',
    'Oracle Java Certification',
  ],

  C: [
    'Recipe Ingredient Parser',
  ],

  'C++': [
    'Online Quiz System',
    'Object-Oriented Programming',
  ],

  JavaScript: [
    'AI Chatbot',
    'Game-Verse',
    'Cisco JavaScript Essentials 1 & 2',
  ],

  SQL: [
    'Database Management Concepts',
  ],

  'React.js': [
    'Game-Verse',
  ],

  'Next.js': [
    'Frontend Development',
  ],

  HTML: [
    'AI Chatbot',
    'Pearson IT Specialist – HTML and CSS',
    'Cisco HTML Essentials',
  ],

  CSS: [
    'AI Chatbot',
    'Pearson IT Specialist – HTML and CSS',
    'Cisco CSS Essentials',
  ],

  'Node.js': [
    'Game-Verse',
    'Web Development Internship – Rinex Technology',
  ],

  'Express.js': [
    'Game-Verse',
  ],

  Mongoose: [
    'Game-Verse',
  ],

  MongoDB: [
    'MongoDB Certifications',
    'Game-Verse',
  ],

  SQLite: [
    'Database Management Concepts',
  ],

  Supabase: [
    'Database Management Concepts',
  ],

  AWS: [
    'Cloud Computing',
    'AWS Learning',
  ],

  Git: [
    'GitHub Foundations',
    'Personal GitHub Projects',
  ],

  GitHub: [
    'GitHub Foundations',
    'AI Chatbot',
    'Game-Verse',
    'Online Quiz System',
  ],

  Vercel: [
    'Web Development',
  ],

  Render: [
    'Web Development',
  ],

  'Tailwind CSS': [
    'Game-Verse',
  ],

  OOPs: [
    'Online Quiz System',
  ],

  'Data Structures': [
    'Recipe Ingredient Parser',
    'LeetCode Problem Solving',
    'CodeChef Problem Solving',
  ],

  Algorithms: [
    'LeetCode',
    'CodeChef',
    'Competitive Programming',
  ],

  Postman: [
    'Web Development',
  ],

  npm: [
    'Game-Verse',
  ],

  Linux: [
    'Cisco Linux Essentials',
  ],

  'VS Code': [
    'AI Chatbot',
    'Game-Verse',
    'Online Quiz System',
  ],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: 'School Years',
    synopsis: 'Building the academic foundation and developing an interest in technology and problem-solving.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'Completed Higher Secondary Education (12th Standard), building a foundation for engineering studies.',
        tags: ['Higher Secondary Education', 'Mathematics', 'Science'],
        runtime: '12th Standard',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'The Engineer',
    period: 'Present',
    synopsis: 'Pursuing Computer Science and Engineering at KIT – Kalaignarkarunanidhi Institute of Technology, Coimbatore.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Computer Science Student',
        description: 'Bachelor of Engineering in Computer Science and Engineering at KIT, with a CGPA of 7.58.',
        tags: ['B.E.', 'Computer Science', 'CGPA 7.58'],
        runtime: '3rd Year – Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Problem Solver',
        description: 'LeetCode: 40+ problems solved with a maximum rating of 1287. CodeChef: 450+ problems solved with a maximum rating of 1201 and a 1-star rating.',
        tags: ['DSA', 'LeetCode', 'CodeChef', 'Problem Solving'],
        runtime: '500+ Problems',
        palette: jade,
      },
      {
        code: 'S02 E03',
        title: 'The Achiever',
        description: 'Achieved a Top 97.57% global standing on LeetCode and secured competitive programming rankings on CodeChef.',
        tags: ['LeetCode', 'CodeChef', 'Competitive Programming'],
        runtime: 'Ongoing',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Entering the AI World',
    period: '2026',
    synopsis: 'Gaining practical industry experience through Artificial Intelligence and Web Development internships.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The AI Intern',
        description: 'Artificial Intelligence Internship at Appin Technology — assisted in developing and training machine learning models, data preprocessing, model evaluation and AI workflows.',
        tags: ['Artificial Intelligence', 'Machine Learning', 'Python'],
        runtime: 'May 2026',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The Machine Learning Explorer',
        description: 'Artificial Intelligence Internship at Decode Labs — implemented and tested machine learning algorithms and collaborated on improving model performance.',
        tags: ['AI', 'Machine Learning', 'Model Evaluation'],
        runtime: 'May 2026',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Web Developer',
        description: 'Web Development Internship at Rinex Technology — developed and maintained responsive web application features using frontend and backend technologies.',
        tags: ['Web Development', 'Frontend', 'Backend'],
        runtime: 'June 2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Projects',
    period: '2026',
    synopsis: 'Turning technical knowledge into practical applications through AI, full-stack development and problem-solving.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The AI Creator',
        description: 'AI Chatbot — developed an AI-powered chatbot web application with real-time interaction and a responsive user interface.',
        tags: ['HTML', 'CSS', 'JavaScript', 'AI'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Full-Stack Developer',
        description: 'Game-Verse — developed a full-stack gaming and game-review platform using React, Node.js, Express.js and MongoDB.',
        tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The C++ Problem Solver',
        description: 'Online Quiz System — built a console-based quiz application using C++ and object-oriented programming, supporting MCQ and True/False questions.',
        tags: ['C++', 'OOP', 'Exception Handling'],
        runtime: '2026',
        palette: jade,
      },
      {
        code: 'S04 E04',
        title: 'The Data Structure Enthusiast',
        description: 'Recipe Ingredient Parser — developed a C-based parser using N-ary trees, linked lists and rule-based parsing to organize recipe ingredients.',
        tags: ['C', 'Data Structures', 'N-ary Trees', 'Linked Lists'],
        runtime: '2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: 'The Knowledge Journey',
    period: '2025 – 2026',
    synopsis: 'Expanding technical knowledge through professional certifications, leadership and continuous learning.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Certified Learner',
        description: 'Completed certifications in Machine Learning, Generative AI, Cybersecurity, Operating Systems, Ethical Hacking, Linux and E-commerce.',
        tags: ['Machine Learning', 'Generative AI', 'Cybersecurity', 'Linux'],
        runtime: '2025 – 2026',
        palette: violet,
      },
      {
        code: 'S05 E02',
        title: 'The Event Leader',
        description: 'Served as Event In-Charge for a Code Debugging event, coordinating participants, managing problem-solving rounds and ensuring smooth execution.',
        tags: ['Leadership', 'Event Management', 'Code Debugging'],
        runtime: 'College Event',
        palette: amber,
      },
      {
        code: 'S05 E03',
        title: 'The Open-Source Contributor',
        description: 'Building and maintaining personal coding projects and repositories on GitHub while continuously improving development skills.',
        tags: ['Git', 'GitHub', 'Open Source', 'Development'],
        runtime: 'Ongoing',
        palette: jade,
      },
    ],
  },
  {
    number: 6,
    title: "What's Next",
    period: 'Now Streaming',
    synopsis: 'Preparing for the next chapter as an AI Engineer through continuous learning and practical development.',
    episodes: [
      {
        code: 'S06 E01',
        title: 'The Next Chapter',
        description: 'Exploring Artificial Intelligence, Machine Learning, Generative AI, Data Structures and Algorithms, and advanced software development.',
        tags: ['AI Engineering', 'Machine Learning', 'Generative AI', 'DSA'],
        runtime: 'In Production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  {
    label: 'Primary language',
    title: 'Python',
    detail: 'Programming language • AI and Machine Learning',
    palette: amber,
  },
  {
    label: 'The AI Project',
    title: 'AI Chatbot',
    detail: 'AI-powered chatbot • Real-time interaction',
    palette: crimson,
  },
  {
    label: 'Full-Stack Project',
    title: 'Game-Verse',
    detail: 'React • Node.js • Express.js • MongoDB',
    palette: ocean,
  },
  {
    label: 'Academic achievement',
    title: 'CGPA 7.58',
    detail: 'Computer Science and Engineering • KIT',
    palette: violet,
  },
  {
    label: 'AI experience',
    title: 'AI Intern',
    detail: 'Appin Technology • Decode Labs',
    palette: jade,
  },
  {
    label: 'Web development experience',
    title: 'Web Developer Intern',
    detail: 'Rinex Technology • June 2026',
    palette: amber,
  },
  {
    label: 'LeetCode achievement',
    title: '1287',
    detail: 'Maximum rating • 40+ problems solved',
    palette: crimson,
  },
  {
    label: 'CodeChef achievement',
    title: '1201',
    detail: 'Maximum rating • 450+ problems solved • 1 Star',
    palette: ocean,
  },
  {
    label: 'Technical certifications',
    title: 'AI & Machine Learning',
    detail: 'Infosys Springboard • Generative AI and ML',
    palette: jade,
  },
  {
    label: 'Current focus',
    title: 'AI Engineering',
    detail: 'Machine Learning • Generative AI • DSA',
    palette: violet,
  },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. · Computer Science',
    lines: [
      'KIT – Kalaignarkarunanidhi Institute of Technology, Coimbatore',
      '3rd Year · Pursuing',
    ],
    chips: ['CGPA 7.58'],
  },
  {
    kicker: 'Skills',
    title: 'AI meets Development.',
    lines: [
      'Python, C, C++, Java, JavaScript, SQL',
      'React.js, Next.js, Node.js, Express.js, MongoDB',
      'AWS, GitHub, Vercel, Render',
    ],
    chips: ['Python', 'C++', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
  },
  {
    kicker: 'Experience',
    title: 'The Internship Journey',
    lines: [
      'Artificial Intelligence Intern · Appin Technology',
      'Artificial Intelligence Intern · Decode Labs',
      'Web Developer Intern · Rinex Technology',
    ],
  },
  {
    kicker: 'Projects',
    title: 'Building Real Applications',
    lines: [
      'AI Chatbot — AI-powered chatbot with real-time interaction',
      'Game-Verse — Full-stack gaming and game-review platform',
      'Online Quiz System — C++ application using OOP concepts',
      'Recipe Ingredient Parser — C project using data structures',
    ],
  },
  {
    kicker: 'Achievements',
    title: 'Problem Solver',
    lines: [
      'LeetCode — 40+ problems · Maximum rating 1287',
      'CodeChef — 450+ problems · Maximum rating 1201',
      'Event In-Charge — College Code Debugging Event',
    ],
  },
  {
    kicker: 'Certified',
    title: 'Technical Certifications',
    lines: [
      'Machine Learning Foundation — Infosys Springboard',
      'Generative Models for Developers — Infosys Springboard',
      'Cybersecurity · Operating Systems · Ethical Hacking',
      'Linux Essentials · E-commerce',
    ],
  },
  {
    kicker: 'Current mission',
    title: 'Becoming an AI Engineer',
    lines: [
      'Artificial Intelligence · Machine Learning',
      'Generative AI · Data Structures & Algorithms',
      'Building intelligent and practical applications',
    ],
  },
];

export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'sushmita',
    blurb: 'Explore my complete journey',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Education, internships & achievements first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, technical skills & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Explorer',
    blurb: 'My story, projects & achievements',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<
  SectionId,
  { nav: string; card: string; meta: string; palette: Palette }
> = {
  about: {
    nav: 'About',
    card: 'About Me',
    meta: 'The Introduction • Education & Career Goals',
    palette: violet,
  },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`,
    palette: amber,
  },
  originals: {
    nav: 'Projects',
    card: 'My Projects',
    meta: `${projects.length} Projects • 2026`,
    palette: crimson,
  },
  picks: {
    nav: 'Highlights',
    card: 'Top Highlights',
    meta: 'Top 10 Career Highlights',
    palette: jade,
  },
  skills: {
    nav: 'Skills',
    card: 'Technical Skills',
    meta: `${skillCategories.length} Technical Categories`,
    palette: ocean,
  },
  moments: {
    nav: 'Achievements',
    card: 'My Achievements',
    meta: `${achievements.length} Achievements • ${certifications.length} Certifications`,
    palette: crimson,
  },
  story: {
    nav: 'Resume',
    card: 'My Resume',
    meta: 'Resume • View & Download',
    palette: violet,
  },
};