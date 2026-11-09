export const fallbackProfile = {
  name: 'Emtayes Anwar Avash',
  shortName: 'EMTAYES_ANWAR',
  role: 'Web Developer',
  location: 'Khulna, Bangladesh',
  bio: 'Web developer focused on responsive interfaces and practical web applications, learning through building and improving real projects.',
  languages: ['JavaScript'],
  stack: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
  status: true,
  socialLinks: { github: 'https://github.com/avash755', linkedin: 'https://www.linkedin.com/in/emtayesanwaravash/' }
};

export const fallbackProjects = [
  { 
    title: 'StudyFlow — Study Management System', 
    slug: 'studyflow', 
    description: 'A productivity platform designed to help students and self-learners manage study sessions, schedules, goals, assignments, and track their progress.', 
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'JWT'
    ], 
    image: '/assets/Project-StudyFlow.png', 
    liveUrl: 'https://studyflowhq.vercel.app/', 
    githubUrl: 'https://github.com/avash755/studyflow-frontend', 
    featured: true 
  },
  { 
    title: 'Campus Management System', 
    slug: 'My Campus', 
    description: 'A campus management platform designed to organize academic activities, student information, administration, and campus operations in one place.', 
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'JWT',
      'Brevo'
    ], 
    image: '/assets/MyCampus.png', 
    liveUrl: 'https://mycampus-edu.vercel.app/', 
    githubUrl: 'https://github.com/avash755/MyCampus_Frontend', 
    featured: true 
  },
  { 
    title: 'Inventory & Invoice Management System', 
    slug: 'Inventory-Invoice-Manager', 
    description: 'A client project focused on managing inventory, tracking products and stock levels, and generating invoices to simplify everyday business operations.', 
    technologies: ['React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'JWT',
      'nodemailer'], 
    image: null,
    liveUrl: 'https://inventory-invoice-management-frontend.vercel.app', 
    githubUrl: 'https://github.com/avash755/Exercise-Management-System-Frontend', 
    featured: true 
  },
];

export const fallbackSkills = {
  Frontend: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'],
  'Development Tools': ['Git', 'VS Code', 'Figma', 'Postman', 'MongoDB Compass', 'Vercel', 'Netlify']
};

export const fallbackJourney = [
  { year: '2024', title: 'Started Web Development', description: 'Explored the fundamentals of web development, learning HTML for structure and CSS for styling and building responsive layouts.', category: 'Web Foundations' },
  { year: '2025', title: 'Bringing Websites to Life', description: 'Started learning JavaScript and explored DOM manipulation, interactive elements, and the fundamentals of dynamic web development.', category: 'JavaScript' },
  { year: 'June 21, 2026', title: 'Entered the Backend World', description:'Started learning Node.js, Express.js, and MongoDB, exploring server-side development, REST APIs, database operations, and backend architecture.', category: 'Backend Development' },
  { year: 'August 19, 2026', title: 'Started Learning React.js', description: 'Moved into component-based development with React.js, learning reusable components, state management, and modern frontend architecture.', category: 'Frontend Development' },
  { year: 'Late 2026', title: 'Completed the MERN Stack', description: 'Completed my MERN stack learning journey during my 5th-semester final exams, bringing together MongoDB, Express.js, React.js, and Node.js to build full-stack web applications.', category: 'Full-Stack Development' },
];
