export const PROFILE = {
  name: "Nithya Gopalsamy",
  role: "Software Engineer | Full-Stack Web & Mobile Developer",
  shortRole: "Software Engineer",
  location: "Tamil Nadu, India",
  email: "nithyagopalsamy2020@gmail.com",
  phone: "+91 90000 00000",
  tagline: "I build performant web and mobile experiences with modern full-stack tools.",
  about:
    "Software Engineer with 1+ year experience in React Native, Next.js, Node.js, and scalable backend systems. I focus on building smooth user experiences, integrating APIs, and deploying production-ready applications.",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const SKILLS = {
  Frontend: ["React Native", "Next.js", "Tailwind CSS", "TypeScript"],
  Backend: ["Node.js", "FastAPI"],
  Database: ["MongoDB"],
  Deployment: ["VPS", "Nginx", "PM2"],
} as const;

export const PROJECTS = [
  {
    title: "Timesheet Mobile App",
    description:
      "A production-oriented timesheet platform with role-based workflows, attendance tracking, and manager approval pipelines.",
    tech: ["React Native", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Sustainability Web Portal",
    description:
      "A modern sustainability-focused web experience with responsive dashboards, reusable components, and optimized performance.",
    tech: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    link: "https://solidpro-es.com/",
  },
] as const;

export const CERTIFICATIONS = [
  "React Basic (HackerRank)",
  "SQL Intermediate",
  "Python Full Stack",
] as const;
