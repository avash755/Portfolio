export const fallbackProfile = {
  name: 'Emtayes Anwar Avash',
  shortName: 'EMTAYES_ANWAR',
  role: 'Software Developer',
  location: 'Khulna, Bangladesh',
  bio: 'A developer driven by a passion for building things. I create full-stack applications, explore game development, and enjoy experimenting with new technologies. Always learning, building, and turning ideas into reality.',
  languages: ['C#', 'JavaScript', 'C++', 'Python'],
  stack: ['React', 'MongoDB', 'Node', 'Express'],
  gameDevelopment: ['Unity','Blender','LibreSprite'],
  creativeTools: ['Photoshop','Premiere Pro','After Effects','Illustrator','Figma','Krita'],
   interests: ['Artificial Intelligence','Robotics','IoT','Game Development'],
  status: true,
  resumeUrl: '/resume.pdf',
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
    image: '/assets/Inventory-Invoice-Manager.png', 
    liveUrl: 'https://inventory-invoice-management-frontend.vercel.app', 
    githubUrl: 'https://github.com/avash755/Exercise-Management-System-Frontend', 
    featured: true 
  },
];

export const fallbackSkills = {
  Frontend: ['React', 'Tailwind CSS', 'HTML', 'CSS'],
  Backend: ['Node.js', 'Express', 'MongoDB'],
  Programming: ['JavaScript', 'Python', 'Java', 'C++', 'C', 'C#'],
  'Tools & OS': ['Git', 'VS Code', 'Figma', 'Linux', 'Postman', 'mongoDB Compass','Vercel', 'Netlify', 'Unity', 'Premiere Pro', 'After Effects', 'Blender', 'Photoshop', 'Illustrator']
};

export const fallbackJourney = [
  { year: '2023', title: 'First Steps into Programming', description: 'Started learning Python during my 1st and 2nd semesters. Built my understanding of programming fundamentals and logical thinking.', category: 'Foundation' },
  { year: 'Late 2024', title: 'Discovered Web Development', description: 'Started my web development journey during my 3rd semester. Learned HTML, CSS, JavaScript, and explored Python OOP.', category: 'Web Development' },
  { year: '2025', title: 'Explored Java & C', description: 'I started learning Java for my 4th semester finals and later moved to C programming, expanding my understanding of programming languages and problem-solving.', category: 'Programming Exploration' },
  { year: 'May 16, 2026', title: 'Won a medal', description: 'In my first-ever contest, I won 1st place in the first round and received a medal at the National High School Programming Contest 2026. However, due to personal reasons, I didn\'t participate in the second round.', category: 'Competitive Programming' },
  { year: 'July 13, 2026', title: 'Another Challenge — 4th Place', description: 'Participated in another programming competition and secured 4th place, gaining more competitive programming experience.', category: 'Competitive Programming' },
  { year: 'August 2026', title: 'Completed the MERN Stack', description: 'Completed my MERN stack learning journey during my 5th-semester final exams. Worked with MongoDB, Express.js, React, and Node.js to understand full-stack application development.', category: 'Full-Stack Development' },
  { year: 'September 2026', title: 'DSA Meets Game Development', description: 'Currently focusing on Data Structures & Algorithms while exploring game development with Unity and C#. Continuing to strengthen my fundamentals, build projects, and explore new technologies.', category: 'Building & Exploring' }
];

