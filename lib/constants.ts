export const PROFILE = {
  name: "Nithya Gopalsamy",
  role: "Full Stack Developer | Cloud & DevOps | React Native | Next.js | Node.js",
  shortRole: "Full Stack Developer",
  tagline:
    "Building cloud-deployed, production-grade web and mobile applications with multitenant SaaS architectures, automated CI/CD pipelines, and modern full-stack technologies.",
  summary:
    "Full Stack Developer with 1.5+ years of experience building cloud-deployed, production-grade web and mobile applications using React Native, Next.js, and Node.js. Skilled in designing scalable, multitenant SaaS architectures and automating software delivery through CI/CD pipelines (GitHub Actions), cloud deployment (Vercel, cloud servers), and containerization basics (Docker). Strong background in REST API integration, tenant-isolated data modeling with MongoDB, and end-to-end delivery across the SDLC in Agile/Scrum teams.",
  about:
    "Software Engineer with 1.5+ years of experience specializing in multitenant SaaS applications, cross-platform mobile development, and automated DevOps workflows. Passionate about bridging frontend polish with robust backend architectures and zero-downtime deployment pipelines.",
  location: "Rajapalayam, Tamil Nadu, India",
  workLocation: "Chennai, Tamil Nadu",
  email: "nithyagopalsamy2020@gmail.com",
  phone: "+91-7538863687",
  phoneRaw: "+917538863687",
  github: "https://github.com/Nithya-210104",
  linkedin: "https://linkedin.com/in/nithyagopalsamy",
  portfolio: "https://solidpro-es.com",
  experienceYears: "1.5+",
  availability: "Available for Full-time Roles & Innovations",
  stats: [
    { label: "Experience", value: "1.5+ Years", detail: "Full Stack & DevOps" },
    { label: "Manual Effort Saved", value: "60%+", detail: "GitHub Actions CI/CD" },
    { label: "Component Velocity", value: "40%+", detail: "Reusable UI Systems" },
    { label: "Architecture", value: "Multi-tenant", detail: "Strict Data Isolation" },
  ],
  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Tamil", level: "Native / Bilingual" },
    { name: "Telugu", level: "Conversational" },
  ],
  strengths: [
    "Strong analytical and problem-solving skills; rapid learner adaptable to cloud-native & AI-driven architectures.",
    "Effective cross-functional communication and Agile/Scrum collaboration.",
    "Meticulous attention to detail, code maintainability, and end-to-end quality assurance.",
  ],
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

export type SkillCategory =
  | "AI / ML"
  | "Cloud & DevOps"
  | "Frontend & Mobile"
  | "Backend & APIs"
  | "Databases"
  | "Tools & Practices";

export const SKILL_CATEGORIES: Record<
  SkillCategory,
  {
    iconName: string;
    description: string;
    skills: string[];
  }
> = {
  "AI / ML": {
    iconName: "Sparkles",
    description: "Modern LLM orchestration, vector search & retrieval pipelines",
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
      "OpenAI API (GPT & Embeddings)",
      "Vector Databases (ChromaDB)",
      "Prompt Engineering",
      "Semantic Search",
    ],
  },
  "Cloud & DevOps": {
    iconName: "Cloud",
    description: "Automated pipelines, secrets orchestration & server provisioning",
    skills: [
      "GitHub Actions (CI/CD)",
      "Vercel Deployment",
      "Docker (Basics)",
      "Environment & Secrets Configuration",
      "Cloud Server Deployment",
      "Zero-Downtime Rollbacks",
    ],
  },
  "Frontend & Mobile": {
    iconName: "Smartphone",
    description: "Cross-platform mobile and responsive high-performance web applications",
    skills: [
      "React Native",
      "NativeWind",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "shadcn UI",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "WCAG Accessibility",
    ],
  },
  "Backend & APIs": {
    iconName: "Server",
    description: "Scalable service architecture, REST APIs & real-time sync",
    skills: [
      "Node.js",
      "Python",
      "FastAPI",
      "RESTful API Design & Integration",
      "Role-Based Access Control (RBAC)",
      "Real-time Data Communication",
    ],
  },
  Databases: {
    iconName: "Database",
    description: "Multi-tenant data isolation and vector storage",
    skills: [
      "MongoDB",
      "Multitenant Data Modeling",
      "Database-per-Tenant Segregation",
      "Collection-based Segregation",
      "ChromaDB Vector Store",
    ],
  },
  "Tools & Practices": {
    iconName: "Workflow",
    description: "Engineering rigor, quality profiling & collaborative delivery",
    skills: [
      "Git & GitHub",
      "Postman",
      "Debugging & Performance Profiling",
      "Agile / Scrum (Sprints & Stand-ups)",
      "End-to-End Testing",
      "SDLC Delivery",
    ],
  },
};

export const EXPERIENCE = [
  {
    company: "Solidpro Engineering Private Limited",
    role: "Software Engineer – Full Stack Developer",
    location: "Chennai, Tamil Nadu",
    period: "March 2024 – Present",
    duration: "1.5+ Years",
    type: "Full-Time",
    overview:
      "Engineered cloud-deployed SaaS architectures, cross-platform mobile apps, and automated CI/CD workflows across web, mobile, and backend microservices in an Agile/Scrum team.",
    achievements: [
      "Designed and developed cross-platform mobile applications using React Native with NativeWind styling, delivering seamless user experiences on iOS and Android.",
      "Built responsive, high-performance web interfaces using Next.js and TypeScript, following best practices for code quality and maintainability.",
      "Integrated RESTful APIs and backend services using Node.js and FastAPI to enable real-time data communication between frontend and server.",
      "Architected and implemented multitenant application infrastructure supporting tenant isolation, per-tenant configuration, and scalable data segregation using MongoDB.",
      "Designed and maintained CI/CD pipelines using GitHub Actions to automate build, test, and deployment workflows, reducing manual deployment effort by over 60%.",
      "Deployed and managed applications on cloud platforms (Vercel, cloud servers), handling environment configuration, secret management, and production releases.",
      "Performed end-to-end testing, debugging, and performance profiling to identify and resolve bottlenecks across web and mobile applications.",
      "Collaborated within Agile/Scrum teams, actively participating in sprint planning, daily stand-ups, code reviews, and retrospectives.",
    ],
    techStack: [
      "React Native",
      "NativeWind",
      "Next.js",
      "TypeScript",
      "Node.js",
      "FastAPI",
      "MongoDB",
      "GitHub Actions",
      "Vercel",
      "Docker",
    ],
  },
] as const;

export const PROJECTS = [
  {
    id: "timesheet-saas",
    title: "Multitenant SaaS Platform – Timesheet Management",
    category: "Mobile & Cloud SaaS",
    tagline: "Enterprise timesheet platform with multi-tenant data isolation & automated CI/CD",
    overview:
      "Architected a multitenant timesheet management platform featuring strict tenant data isolation, per-tenant role-based access control (Admin, Manager, Employee), and customized dashboards per tenant organization.",
    highlights: [
      "Architected multitenant timesheet system with strict tenant data isolation, per-tenant RBAC, and dedicated dashboards.",
      "Implemented tenant-aware MongoDB models using database-per-tenant and collection-based segregation strategies.",
      "Built automated CI/CD pipelines via GitHub Actions — automating lint, test, build, and deployment across staging and production.",
      "Designed automated environment promotion workflows enabling zero-downtime cloud deployments with rollback capabilities.",
      "Engineered weekly calendar logic, multi-step approval workflows, and real-time API integrations, slashing manual timesheet processing by ~40%.",
    ],
    tech: ["React Native", "NativeWind", "Node.js", "MongoDB", "GitHub Actions (CI/CD)", "REST APIs"],
    metrics: [
      { label: "Efficiency", value: "40% Faster Processing" },
      { label: "Security", value: "Strict Tenant Isolation" },
      { label: "Deployment", value: "Zero-Downtime Rollback" },
    ],
    link: "#",
    isLive: false,
  },
  {
    id: "sustainability-portal",
    title: "Sustainability Web Portal",
    category: "Enterprise Web Portal",
    tagline: "High-performance ESG reporting portal with automated Vercel CI/CD and shadcn UI",
    overview:
      "Developed and deployed a fully responsive sustainability reporting web portal on Vercel with automated CI/CD via GitHub Actions — each pull request triggers build checks, preview deployments, and production promotion on merge.",
    highlights: [
      "Built and deployed a fully responsive sustainability portal on Vercel with automated CI/CD workflows.",
      "Architected a reusable component library using shadcn UI and Tailwind CSS, reducing development time for future features by ~40%.",
      "Structured scalable page layouts with Next.js App Router, leveraging server-side rendering and code splitting for optimal Core Web Vitals.",
      "Ensured rigorous cross-browser compatibility, WCAG accessibility compliance, and end-to-end testing across all modules.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn UI", "Vercel", "GitHub Actions (CI/CD)"],
    metrics: [
      { label: "Dev Velocity", value: "40% Faster Delivery" },
      { label: "Accessibility", value: "WCAG Compliant" },
      { label: "Architecture", value: "Next.js App Router SSR" },
    ],
    link: "https://solidpro-es.com",
    isLive: true,
  },
  {
    id: "ai-resume-rag",
    title: "AI Resume Q&A Chatbot (RAG)",
    category: "AI / LLM & Vector Search",
    tagline: "Retrieval-Augmented Generation chatbot with semantic document search and zero-hallucination guardrails",
    overview:
      "Engineered an intelligent Retrieval-Augmented Generation (RAG) chatbot allowing users to upload resumes and query them using natural language with high accuracy and source grounding.",
    highlights: [
      "Parsed and chunked uploaded resume documents, generating vector embeddings using OpenAI's embedding models.",
      "Stored and indexed high-dimensional embeddings in a ChromaDB vector store for semantic similarity search.",
      "Implemented a LangChain retrieval pipeline fetching the most relevant document chunks for user queries.",
      "Constructed prompt guardrails feeding retrieved context to OpenAI GPT models, minimizing hallucinations and maximizing factual relevance.",
    ],
    tech: ["LangChain", "OpenAI API (GPT & Embeddings)", "ChromaDB", "Python", "Vector Search"],
    metrics: [
      { label: "Model Stack", value: "OpenAI GPT & Embeddings" },
      { label: "Vector DB", value: "ChromaDB" },
      { label: "Reliability", value: "Strict Context Grounding" },
    ],
    link: "https://github.com/Nithya-210104",
    isLive: false,
  },
] as const;

export const EDUCATION = {
  institution: "PSG College of Technology",
  location: "Coimbatore, Tamil Nadu",
  degree: "B.Sc. Computer Systems and Design",
  graduation: "Graduated: May 2024",
  cgpa: "7.8 / 10.0",
  highlights: [
    "Rigorous curriculum covering computer architecture, systems programming, and database engineering.",
    "Advanced coursework in software design patterns, full-stack web development, and cloud systems.",
    "Active participant in technical symposiums, hackathons, and software engineering labs.",
  ],
} as const;

export const CERTIFICATIONS = [
  {
    title: "React (Basic) Certification",
    issuer: "HackerRank",
    skills: ["React Components", "State Management", "Props & Hooks", "Lifecycle"],
    link: "https://www.hackerrank.com/certificates",
  },
  {
    title: "SQL (Intermediate) Certification",
    issuer: "HackerRank",
    skills: ["Complex Queries", "Joins & Aggregations", "Subqueries", "Data Modeling"],
    link: "https://www.hackerrank.com/certificates",
  },
  {
    title: "Python Full Stack Development Certification",
    issuer: "Professional Certification Program",
    skills: ["Python", "FastAPI / Backend", "RESTful Architecture", "Full Stack Integration"],
    link: "#",
  },
] as const;
