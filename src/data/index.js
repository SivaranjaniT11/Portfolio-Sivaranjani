

const JOINED = new Date(2023, 5, 19);

export function getExperience(asOf = new Date()) {
  let years = asOf.getFullYear() - JOINED.getFullYear();
  let months = asOf.getMonth() - JOINED.getMonth();
  let days = asOf.getDate() - JOINED.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(asOf.getFullYear(), asOf.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const tenths = Math.round((months / 12) * 10);
  const displayYears = tenths === 10 ? years + 1 : years;
  const displayTenths = tenths === 10 ? 0 : tenths;
  const compact = displayTenths === 0 ? `${displayYears}+` : `${displayYears}.${displayTenths}+`;

  return {
    years: displayYears,
    months,
    days,
    compact,
    suffix: displayTenths === 0 ? "+" : `.${displayTenths}+`,
    long: `${years} yrs ${months} mos`,
    sentence: `${years} years ${months} months`,
  };
}

const experienceNow = getExperience();

export const personalInfo = {
  name: "Sivaranjani",
  role: "Full Stack Developer",
  company: "Taizo.in",
  experience: experienceNow.sentence,
  joined: "19 Jun 2023",
  tagline: "Building scalable enterprise solutions that matter",
  email: "sivaranjanithiyagarajan12@gmail.com",
  // Apps Script web app URL ending in /exec. A spreadsheet link cannot receive form posts.
  sheetEndpoint: "https://script.google.com/macros/s/AKfycbwCgEY387P6FKyilJfcsp3tXkIv1O1nppzOInKMjKLuphGITe3ILxlfD3r3bDwQFZSC/exec",
  spreadsheetUrl: "https://docs.google.com/spreadsheets/d/1xcJkCBQioj4SDXPpwVnJolGNjHni0cGKLD_rhotma6Lg/edit?gid=0#gid=0",
  github: "https://github.com/SivaranjaniT11",
  linkedin: "https://www.linkedin.com/in/sivaranjani-thiyagarajan-14573a273/",
  resumeUrl: "#",
  heroSubtitle:
    `Full Stack Developer with ${experienceNow.sentence} of experience building scalable web applications, CRM platforms, job portals, learning management systems, and business automation solutions.`,
  about:
    "I started as a Frontend Intern at Taizo.in and grew into a Frontend Developer, then a Full Stack Developer. I build CRM systems, job portals, and business web apps with React, Next.js, and Node.js.",
  stats: [
    { label: "Experience", text: experienceNow.sentence },
  ],
};

export const careerJourney = [
  {
    id: 1,
    role: "Frontend Intern",
    period: "Jun 2023 · 1 month",
    icon: "bi-code-slash",
    color: "#6C62FF",
    highlights: [
      "Learned HTML, CSS, JavaScript",
      "Worked on responsive websites",
      "Built reusable UI components",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer",
    period: "Jul 2023 – Jul 2024 · 1 year",
    icon: "bi-window-fullscreen",
    color: "#6C62FF",
    highlights: [
      "React JS development",
      "State management",
      "API integrations",
      "Responsive web applications",
    ],
  },
  {
    id: 3,
    role: "Backend Developer",
    icon: "bi-server",
    color: "#6C62FF",
    highlights: [
      "Node.js & Express.js",
      "REST API design",
      "Authentication & security",
      "Database design",
    ],
  },
  {
    id: 4,
    role: "Full Stack Developer",
    period: "Aug 2024 – Present · 2 yrs 4 mos",
    icon: "bi-stack",
    color: "#6C62FF",
    current: true,
    highlights: [
      "React.js, TypeScript & Next.js",
      "Node.js, Mysql &PostgreSQL & Prisma",
      "CRM Development",
      "Business Applications",
      "Performance Optimization",
    ],
  },
];

export const skills = {
  frontend: [
    { name: "HTML5", level: 96, icon: "bi-filetype-html" },
    { name: "CSS3", level: 93, icon: "bi-filetype-css" },
    { name: "JavaScript", level: 90, icon: "bi-filetype-js" },
    { name: "React JS", level: 92, icon: "bi-filetype-jsx" },
    { name: "TypeScript", level: 70, icon: "bi-filetype-tsx" },
    {
      name: "Next.js",
      level: 85,
      icon: "bi-layers",
      note: "Basics: App Router, layouts, and data fetching. Install with create-next-app. I use AI support while scaffolding and building projects.",
    },
    { name: "Bootstrap", level: 90, icon: "bi-bootstrap" },
     { name: "SCSS Modules", level: 82, icon: "bi-filetype-scss" },
    { name: "Tailwind CSS", level: 60, icon: "bi-palette" },
   
  ],
  backend: [
    { name: "Node.js", level: 82, icon: "bi-server" },
    { name: "Express.js", level: 80, icon: "bi-layers" },
    { name: "REST APIs", level: 85, icon: "bi-arrow-left-right" },
    { name: "TypeScript", level: 70, icon: "bi-filetype-tsx" },

  ],
  database: [
    { name: "MySQL", level: 80, icon: "bi-database" },
    { name: "PostgreSQL", level: 60, icon: "bi-database" },
    { name: "Prisma", level: 60, icon: "bi-diagram-3" },
    
  ],
  other: [
    { name: "Git", level: 88, icon: "bi-git" },
    { name: "GitHub", level: 87, icon: "bi-github" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "CRM Platform — Recruitment Admin",
    description:
      "End-to-end recruitment CRM for admins to manage leads, candidates, interviews, and invoicing — built with a Kanban-driven workflow.",
    images: [
      "/assets/image/admincrm1.png",
      "/assets/image/admincrm2.png",
      "/assets/image/admincrm3.png",
      "/assets/image/admincrm4.png",
      "/assets/image/admincrm5.png",
      "/assets/image/admincrm6.png",
    ],
    features: [
      "Kanban Board (Leads & Follow-ups)",
      "Candidate Detail View",
      "History & Documents",
      "Interview Analytics",
      "Invoice PDF Download",
    ],
    technologies: ["React JS", "Node.js", "MySQL", "Redux Toolkit", "Material UI", "SCSS", "html2canvas"],
    demo: "#",
    private: true,
    featured: true,
  },
  {
    id: 2,
    title: "Taizo.in — Company Website",
    description:
      "Contributed to the Taizo.in company site — implemented and updated key feature sections. Later migrated the codebase to Next.js.",
    image: "/assets/image/taizo.png",
    features: [
      "Feature Section Development",
      "HTML/CSS → Next.js Migration",
      "Responsive Design",
      "Reusable Components",
    ],
    technologies: ["HTML5", "CSS3", "React JS", "Next.js"],
    demo: "https://taizo.in",
    private: true,
    featured: true,
  },
  {
    id: 3,
    title: "Taizo.in — Job Portal",
    description:
      "Built the job search and application platform for Taizo.in from the ground up using Next.js — covering listings, filters, and applications.",
    image: "/assets/image/taizojobportal.png",
    features: [
      "Job Listings & Filters",
      "Candidate Applications",
      "Company Profiles",
      "SSR with Next.js",
    ],
    technologies: ["React JS", "Next.js", "Node.js", "MySQL"],
    demo: "https://taizo.in/jobs",
    private: true,
    featured: false,
  },
  {
    id: 4,
    title: "Course1on1 — Website",
    description:
      "Worked on Course1on1's static pages, implementing new feature sections and migrating parts of the site to Next.js.",
    images: [
      "/assets/image/courze1on1.png",
      "/assets/image/courze1on1course.png",
    ],
    features: [
      "Feature Section Development",
      "Next.js Migration",
      "Responsive UI",
    ],
    technologies: ["React JS", "Next.js"],
    demo: "https://www.courze1on1.com/",
    private: true,
    featured: false,
  },
  {
    id: 5,
    title: "PDF Automation — Taizo.in & Course1on1",
    description:
      "Automated PDF downloads for invoices, proforma invoices, and syllabus documents on both Taizo.in and Course1on1 — data-driven templates rendered and downloaded with Puppeteer.",
    images: [
      "/assets/image/taizosyllabus.png",
      "/assets/image/courzeSyllabus.png",
    ],
    features: [
      "Invoice PDF Download",
      "Proforma Invoice",
      "Syllabus Download",
      "Taizo.in & Course1on1",
      "Puppeteer PDF Rendering",
    ],
    technologies: ["Node.js", "Express.js", "Puppeteer"],
    demo: "https://prod.node.taizo.in/taizotemp/syllabus/syllabus.html",
    private: true,
    featured: false,
  },
    {
    id: 6,
    title: "GCS CRM",
    description:
      "Recruitment CRM module I built for project creation through offer. Create a project, review the overview, select an agent, and send the requirement on WhatsApp. Assign a candidate, schedule the interview, move the record to offer, and generate the offer letter as a PDF. The documentation module covers requirement upload and approval, with additional UI and features built using AI support.",
    images: [
      "/assets/image/gcsCRM1.png",
      "/assets/image/gcsCRM2.png",
      "/assets/image/gcsCRM3.png",
    ],
    features: [
      "Create Project",
      "Project Overview",
      "Agent Select & WhatsApp Requirement Alert",
      "Candidate Assigned",
      "Interview Scheduled",
      "Move to Offer",
      "Automated Offer PDF",
      "Requirement Document Upload & Approval",
      "UI and features with AI support",
    ],
    technologies: ["React JS", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    demo: "#",
    private: true,
    featured: true,
  },
];

export const experience = [
  {
    id: 1,
    company: "Taizo.in",
    role: "Frontend Intern",
    period: "Jun 2023",
    duration: "1 month",
    location: "India",
    type: "Internship",
    responsibilities: [
      "Learned HTML, CSS, and JavaScript.",
      "Worked on responsive websites.",
      "Built reusable UI components.",
    ],
  },
  {
    id: 2,
    company: "Taizo.in",
    role: "Frontend Developer",
    period: "Jul 2023 – Jul 2024",
    duration: "1 year",
    location: "India",
    type: "Full-time",
    responsibilities: [
      "Built React interfaces and reusable components.",
      "Handled state management and API integrations.",
      "Delivered responsive web applications.",
    ],
  },
  {
    id: 3,
    company: "Taizo.in",
    role: "Full Stack Developer",
    period: "Aug 2024 – Present",
    duration: "2 yrs 4 mos",
    location: "India",
    type: "Full-time",
    current: true,
    responsibilities: [
      "Build CRM systems, job portals, and business web apps.",
      "Create REST APIs with Node.js and Express.js.",
      "Design interfaces with React, TypeScript, and Next.js.",
      "Work with MySQL, PostgreSQL, and Prisma.",
    ],
  },
];

export const services = [
  {
    id: 1,
    title: "Full Stack Development",
    description:
      "End-to-end web application development covering React, TypeScript, and Next.js frontends, Node.js backends, and PostgreSQL, Prisma, and MySQL.",
    icon: "bi-stack",
    color: "#6C62FF",
  },
  {
    id: 2,
    title: "CRM & Enterprise Apps",
    description:
      "Building custom CRM systems, workflow automation platforms, and enterprise-grade tools tailored to business operations.",
    icon: "bi-diagram-3",
    color: "#6C62FF",
  },
  {
    id: 3,
    title: "Job Portal Development",
    description:
      "Creating job portals with advanced search, candidate management, application tracking, and company profile systems.",
    icon: "bi-briefcase",
    color: "#6C62FF",
  },
  {
    id: 4,
    title: "API Development",
    description:
      "Designing and implementing clean, well-documented RESTful APIs that power web apps, mobile clients, and third-party integrations.",
    icon: "bi-arrow-left-right",
    color: "#6C62FF",
  },
  {
    id: 5,
    title: "Frontend Engineering",
    description:
      "Crafting beautiful, responsive, high-performance UIs with React JS and Next.js — pixel-perfect, accessible, and fast.",
    icon: "bi-window-fullscreen",
    color: "#6C62FF",
  },
];

export const achievements = [
  {
    id: 1,
    category: "Experience",
    title: `${experienceNow.sentence} of professional experience`,
    issuer: "Taizo.in",
    year: "2024",
    icon: "bi-briefcase-fill",
    color: "#6C62FF",
    description:
      `Joined 19 Jun 2023 and still working — ${experienceNow.sentence} of hands-on experience delivering enterprise-grade web applications.`,
  },
  {
    id: 2,
    category: "Domain",
    title: "Full Stack Development Expertise",
    issuer: "React · TypeScript · Next.js · Node.js · PostgreSQL · Prisma · MySQL",
    year: "2024",
    icon: "bi-stack",
    color: "#6C62FF",
    description:
      "Deep expertise across the full web stack — React, TypeScript, and Next.js on the frontend, Node.js with PostgreSQL, Prisma, and MySQL on the backend.",
  },
  {
    id: 3,
    category: "Project",
    title: "Enterprise CRM Development",
    issuer: "Taizo.in",
    year: "2023",
    icon: "bi-diagram-3-fill",
    color: "#6C62FF",
    description:
      "Designed and built a complete CRM platform for candidate management, Kanban workflows, and recruitment analytics.",
  },
  {
    id: 4,
    category: "Project",
    title: "Job Portal Development",
    issuer: "Taizo.in",
    year: "2023",
    icon: "bi-search",
    color: "#6C62FF",
    description:
      "Developed a Next.js job portal with advanced search, company profiles, and candidate application tracking.",
  },
  {
    id: 5,
    category: "Project",
    title: "Learning Platform Development",
    issuer: "Course1on1",
    year: "2024",
    icon: "bi-mortarboard-fill",
    color: "#6C62FF",
    description:
      "Built educational platform pages and course enrollment flows for an e-learning product.",
  },
  {
    id: 6,
    category: "Project",
    title: "GCS CRM",
    issuer: "Taizo.in",
    year: "2026",
    icon: "bi-diagram-3",
    color: "#6C62FF",
    description:
      "Project module from create project and WhatsApp requirement alerts through interview, offer, and automated offer PDF, plus requirement document approval.",
  },
];
