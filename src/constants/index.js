



export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
  
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'GHRhack-1.0 ',
    desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
    subdesc:
      'Built a Hackathon Website with React, Tailwind CSS, GSAP designed for optimal performance and scalability.',
    href: 'https://ghrhack.live',
    texture: '/textures/project/Ghrhack.mp4',
    logo: '/assets/GHR-logo.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Reactjs',
        path: 'assets/React.js.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: 'assets/JavaScript.svg',
      },
      
    ],
  },
  {
    title: 'Holiday Homes',
    desc: 'A full-stack hotel booking website where users can browse listings, view details, and manage bookings.',
    subdesc:
      'Users can list,Check,update,delete and book a hotels , by using Express.js,ejs, MongoDB',
    href: 'https://github.com/CodeLander07/Hotel-Booking-Website',
    texture: '/textures/project/Project2.mp4',
    logo: '/assets/icon.svg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Node.js',
        path: 'assets/Node.js.svg',
      },
      {
        id: 2,
        name: 'mongoDB',
        path: 'assets/MongoDB.svg',
      },
      {
        id: 3,
        name: 'Express.js',
        path: 'assets/Express.svg',
      },
      {
        id: 4,
        name: 'Css',
        path: 'assets/CSS3.svg',
      },
      
    ],
  },
  {
    title: 'Ai-Code-Reviewer',
    desc: 'The AI Code Reviewer is a full-stack web application that leverages artificial intelligence to automatically review source code, provide constructive feedback, and improve code quality.',
    subdesc:
      'Built using the MERN stack (MongoDB, Express.js, React.js, Node.js) or Next.js, and integrated with powerful LLMs Gemini this tool empowers developers by simulating real-time code reviews—just like having a senior developer on-demand.',
    href: 'https://github.com/CodeLander07/Ai-Code-Reviewer',
    texture: '/textures/project/Project3.mp4',
    logo: '/assets/code.svg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React',
        path: 'assets/React.js.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/Node.js.svg',
      },
      {
        id: 4,
        name: 'Express.js',
        path: '/assets/Express.svg',
      },
      {
        id: 5,
        name: 'MongoDB',
        path: '/assets/MongoDB.svg',
      },
    ],
  },
  {
    title: 'Employee-Management-System',
    desc: 'The Employee Management System (EMS) is a robust and user-friendly full-stack web application designed to simplify and digitize the management of employee data within an organization',
    subdesc:'Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this platform offers a centralized solution for HR teams and managers to maintain, monitor, and manage all employee records effectively.',
    href: 'https://github.com/CodeLander07/Employee-Management-System',
    texture: '/textures/project/Project4.mp4',
    logo: '/assets/EMS.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React',
        path: 'assets/React.js.svg',
      },
      {
        id: 2,
        name: 'Vite.js',
        path: '/assets/Vite.js.svg',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Express.js',
        path: 'assets/Express.svg',
      },
      {
        id: 3,
        name: 'Node.js',
        path: 'assets/Node.js.svg',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: 'assets/MongoDB.svg',
      },
      
    ],
  },
  
    
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'GHR Hack',
    pos: 'Team Lead',
    duration: '28 Nov 2024 to 10 Mar 2025',
    title: "GHR Hack is a dynamic organization dedicated to fostering innovation, problem-solving, and technological advancements through hackathons. By bringing together talented developers, designers, and tech enthusiasts, GHR Hack creates an ecosystem where ideas transform into groundbreaking solutions.",
    icon: '/assets/GHRHack.jpg',
    animation: 'victory',
  },

];
