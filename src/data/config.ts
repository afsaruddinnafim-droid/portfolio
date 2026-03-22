// ============================================================
// SITE CONFIG — Replace all TODO values with your real data
// ============================================================

export const siteConfig = {
  name: "MD Afsaruddin Nafim",
  initials: "MAN",
  // TODO: Replace with your real tagline
  tagline: "Full-Stack Developer & Problem Solver",
  // TODO: Replace with your real one-liner bio
  shortBio:
    "I build fast, accessible, and beautiful digital products. Passionate about clean architecture and delightful user experiences.",
  // TODO: Add real resume PDF link (place file in /public/resume.pdf)
  resumeUrl: "/resume.pdf",
  siteUrl: "https://TODO-your-domain.com",
};

// ============================================================
// SOCIAL LINKS — TODO: Replace all href values
// ============================================================
export const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/TODO-your-username", // TODO
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/TODO-your-profile", // TODO
    icon: "linkedin",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://facebook.com/TODO-your-profile", // TODO
    icon: "facebook",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com/TODO-your-handle", // TODO
    icon: "instagram",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:TODO@example.com", // TODO
    icon: "mail",
  },
  {
    id: "phone",
    label: "Phone",
    href: "tel:+TODO", // TODO
    icon: "phone",
  },
];

// ============================================================
// EDUCATION — TODO: Replace with real education data
// ============================================================
export const education = [
  {
    degree: "TODO: Your Degree (e.g., B.Sc. in Computer Science)",
    institution: "TODO: University / College Name",
    duration: "TODO: Start Year – End Year",
    gpa: "TODO: GPA (optional)",
    highlights: [
      "TODO: Notable achievement or coursework",
      "TODO: Another highlight",
    ],
  },
];

// ============================================================
// EXPERIENCE — TODO: Replace with real work experience
// ============================================================
export const experiences = [
  {
    id: 1,
    title: "TODO: Job Title (e.g., Software Engineer)",
    company: "TODO: Company Name",
    companyUrl: "https://TODO-company.com",
    duration: "TODO: Month Year – Month Year",
    location: "TODO: City, Country (or Remote)",
    type: "Full-time",
    highlights: [
      "TODO: Key achievement or responsibility at this role",
      "TODO: Another highlight — quantify impact where possible (e.g., improved X by Y%)",
      "TODO: Technologies or systems you worked on",
    ],
    stack: ["TODO: Tech 1", "TODO: Tech 2", "TODO: Tech 3"],
  },
  {
    id: 2,
    title: "TODO: Job Title",
    company: "TODO: Company Name",
    companyUrl: "https://TODO-company.com",
    duration: "TODO: Month Year – Month Year",
    location: "TODO: City, Country",
    type: "Internship",
    highlights: [
      "TODO: Key achievement",
      "TODO: Another highlight",
    ],
    stack: ["TODO: Tech 1", "TODO: Tech 2"],
  },
];

// ============================================================
// PROJECTS / REPOS — TODO: Replace with real data or plug in GitHub API
// See /src/lib/github.ts for how to swap this with live API data
// ============================================================
export const projects = [
  {
    id: 1,
    name: "TODO: Project Name",
    description: "TODO: Short description of what this project does and why it matters.",
    language: "TypeScript",
    stars: 42,
    forks: 8,
    topics: ["web", "react", "typescript"],
    url: "https://github.com/TODO",
    demoUrl: "https://TODO-demo.com",
    updatedAt: "2024-09-01",
  },
  {
    id: 2,
    name: "TODO: Project Name",
    description: "TODO: Short description of what this project does.",
    language: "Python",
    stars: 28,
    forks: 4,
    topics: ["api", "python", "backend"],
    url: "https://github.com/TODO",
    demoUrl: null,
    updatedAt: "2024-08-15",
  },
  {
    id: 3,
    name: "TODO: Project Name",
    description: "TODO: Short description.",
    language: "JavaScript",
    stars: 15,
    forks: 2,
    topics: ["javascript", "cli", "tools"],
    url: "https://github.com/TODO",
    demoUrl: null,
    updatedAt: "2024-07-20",
  },
  {
    id: 4,
    name: "TODO: Project Name",
    description: "TODO: Short description.",
    language: "Go",
    stars: 9,
    forks: 1,
    topics: ["go", "microservices"],
    url: "https://github.com/TODO",
    demoUrl: "https://TODO-demo.com",
    updatedAt: "2024-06-10",
  },
  {
    id: 5,
    name: "TODO: Project Name",
    description: "TODO: Short description.",
    language: "TypeScript",
    stars: 33,
    forks: 6,
    topics: ["nextjs", "typescript", "web"],
    url: "https://github.com/TODO",
    demoUrl: "https://TODO-demo.com",
    updatedAt: "2024-05-01",
  },
  {
    id: 6,
    name: "TODO: Project Name",
    description: "TODO: Short description.",
    language: "Rust",
    stars: 7,
    forks: 1,
    topics: ["rust", "systems"],
    url: "https://github.com/TODO",
    demoUrl: null,
    updatedAt: "2024-04-18",
  },
];

// Language color map for project cards
export const languageColors: Record<string, string> = {
  TypeScript: "#3b82f6",
  JavaScript: "#f59e0b",
  Python: "#10b981",
  Go: "#06b6d4",
  Rust: "#f97316",
  Java: "#ef4444",
  "C++": "#8b5cf6",
  Ruby: "#ec4899",
  PHP: "#a855f7",
  Swift: "#f97316",
  Kotlin: "#8b5cf6",
};
