// data/portfolio.ts
// Single source of truth for all portfolio content.
// All components import from here — never hardcode content in components.

export const personal = {
  name: "Teertha Mazumder",
  initials: "TM",
  title: "Infrastructure & Security Analyst · Software Engineer · AI Specialist",
  tagline: "Bridging enterprise infrastructure with software engineering and AI-driven innovation.",
  availableForWork: true,
  email: "mteertha@gmail.com",
  github: "https://github.com/teerthamazumder",
  linkedin: "https://www.linkedin.com/in/teertha-mazumder-51a656126/",
  location: "St. John's, NL, Canada",
  photo: "/teertha.jpg",
  resume: "/Teertha_Mazumder_Resume.pdf",
  bio: "Senior Infrastructure and Security Analyst at the Government of Newfoundland and Labrador, with a Master of Applied Science in Software Engineering. I secure and modernize mission-critical government systems while building full-stack applications and AI-driven solutions — bridging enterprise infrastructure leadership with modern software engineering, automation, and LLM-based development.",
  typewriterRoles: [
    "Senior Infrastructure Analyst",
    "Security Engineer",
    "Full-Stack Developer",
    "AI/ML Engineer",
    "Data Analyst",
    "Cloud Architect",
  ],
};

export const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Projects Built" },
  { value: 8, suffix: "", label: "Certifications" },
  { value: 3, suffix: "+", label: "Cloud Platforms" },
];

export const skillGroups = [
  {
    category: "Systems & Infrastructure",
    skills: [
      "RHEL", "IBM AIX", "Windows Server", "VMware vSphere",
      "IBM Power Systems", "HMC/LPAR", "Apache HTTPD", "Apache Tomcat",
      "IBM Spectrum Protect", "Red Hat Satellite",
    ],
  },
  {
    category: "Microsoft Ecosystem",
    skills: [
      "Power BI", "DAX", "Microsoft Excel", "Microsoft 365",
      "Azure App Services", "Power Platform", "Copilot Studio", "C#", ".NET",
    ],
  },
  {
    category: "Security & Identity",
    skills: [
      "Firewalls", "Network Segmentation", "RBAC", "Active Directory",
      "IAM", "OAuth", "JWT", "Vulnerability Remediation", "CompTIA Security+",
    ],
  },
  {
    category: "Programming",
    skills: [
      "Python", "JavaScript", "TypeScript", "PHP",
      "Bash", "Node.js", "React", "Next.js 14", "Flutter", "C#",
    ],
  },
  {
    category: "Data & Analytics",
    skills: [
      "Power BI", "Tableau", "Pandas", "NumPy", "Matplotlib",
      "Oracle Database", "MySQL", "PostgreSQL", "SQLite", "Supabase",
      "pgvector", "ETL Pipelines", "KPI Reporting",
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      "Docker", "Kubernetes", "Ansible", "AWS",
      "Azure", "GCP", "Terraform", "CloudFormation",
      "GitHub Actions CI/CD", "Secrets Management",
    ],
  },
  {
    category: "AI / ML",
    skills: [
      "LangChain", "LangGraph", "Ollama", "LLaMA", "Claude API",
      "Azure OpenAI", "Voyage AI", "RAG Pipelines", "Prompt Engineering",
      "Tool Calling", "Agent Orchestration", "pgvector", "Embeddings",
      "Scikit-learn", "TensorFlow", "PyTorch", "Hugging Face", "NLP",
    ],
  },
];

export const experience = [
  {
    role: "Computer Systems Analyst II",
    company: "Office of the Chief Information Officer (OCIO)",
    org: "Government of Newfoundland and Labrador",
    location: "St. John's, NL",
    period: "July 2025 – April 2026",
    current: false,
    stack: [
      "RHEL", "IBM AIX", "VMware vSphere", "PeopleSoft HCM",
      "Oracle Database", "MySQL", "Apache HTTPD", "IBM Spectrum Protect",
      "Python", "Bash",
    ],
    bullets: [
      "Provided technical analysis, systems support, and solution design for enterprise IT infrastructure serving government departments province-wide, supporting mission-critical applications including PeopleSoft HCM and Financial Management Systems on RHEL, IBM AIX, and VMware vSphere",
      "Administered and optimized Oracle Database and MySQL environments, performing SQL query optimization, data integrity validation, performance tuning, and supporting analytical data flows for enterprise applications",
      "Developed Python and Bash automation scripts for system monitoring, log-level analysis, statistical reporting, and alert delivery, building maintainable production pipelines with scheduled CI/CD-style execution",
      "Supported enterprise system integrations between PeopleSoft HCM, government data systems, and external services, analyzing data flows, identifying mapping issues, and coordinating resolutions across teams",
      "Administered Apache HTTPD, Apache Tomcat, IBM Spectrum Protect, and IBM Power Systems HMC and LPAR virtualized infrastructure, managing full server lifecycle including installation, patching, and decommissioning",
      "Produced technical documentation, solution designs, configuration standards, and operational runbooks aligned with enterprise architecture, security, and change management standards",
      "Collaborated with cross-functional teams and communicated complex technical findings clearly to both technical and non-technical stakeholders, maintaining a client-focused, service-oriented approach",
      "Provided technical guidance, peer review, and knowledge transfer to colleagues, contributing to team capability and a culture of continuous improvement",
    ],
    modalBg: "linear-gradient(135deg, rgba(30,58,138,0.9) 0%, rgba(15,23,42,0.95) 60%, rgba(0,229,192,0.15) 100%)",
    modalAccent: "#3b82f6",
    orgUrl: "https://www.gov.nl.ca/",
    extra: "",
  },
  {
    role: "Data Analyst and Systems Engineer",
    company: "PROSHIKA — A Center for Human Development",
    org: "",
    location: "Dhaka, Bangladesh",
    period: "2020 – 2023",
    current: false,
    stack: ["Python", "SQL", "Power BI", "Tableau", "ETL", "Data Modeling"],
    bullets: [
      "Designed and maintained end-to-end data processing and reporting systems using Python and SQL, managing data extraction, cleaning, transformation, validation, and delivery across organizational information systems",
      "Built Power BI and Tableau dashboards to monitor KPIs, analyze program trends, and communicate performance insights clearly to executive stakeholders and non-technical audiences",
      "Automated ETL workflows using Python and SQL scripting, reducing manual overhead and improving data consistency and accuracy across reporting pipelines",
      "Collaborated with business teams to define KPIs, gather requirements, and iterate on data solutions aligned with organizational goals, applying strong analytical and stakeholder management skills",
    ],
    modalBg: "linear-gradient(135deg, rgba(20,83,45,0.9) 0%, rgba(15,23,42,0.95) 60%, rgba(168,85,247,0.15) 100%)",
    modalAccent: "#22c55e",
    orgUrl: "",
    extra: "",
  },
];

export type ProjectCategory = "All" | "AI/ML" | "Full-Stack" | "Infrastructure" | "Data" | "Systems";

export interface Project {
  title: string;
  description: string;
  stack: string[];
  category: Exclude<ProjectCategory, "All">;
  github?: string;
  demo?: string;
  highlight?: string;
}

export const projects: Project[] = [
  {
    title: "BotNest — Multi-Tenant SaaS AI Platform",
    description:
      "Production-grade multi-tenant SaaS platform featuring a complete RAG pipeline with Voyage AI embeddings, pgvector semantic search, and streamed Claude API responses. Implements OAuth-compatible auth, Row Level Security, rate limiting, Stripe Connect billing, and CI/CD deployment with live monitoring.",
    stack: ["React", "TypeScript", "Next.js 14", "Supabase", "pgvector", "Voyage AI", "Claude API", "RAG", "Stripe", "CI/CD"],
    category: "AI/ML",
    highlight: "SaaS Platform · 2026",
  },
  {
    title: "OpenCare — Two-Sided Healthcare Marketplace",
    description:
      "Cloud-native healthcare marketplace built with Next.js 14 and Supabase, featuring Daily.co real-time video consultations and Stripe Connect payments. Independently owns system design, API contracts, security architecture, and cloud deployment for a regulated healthcare context requiring strict data integrity.",
    stack: ["Next.js 14", "React", "TypeScript", "Supabase", "Daily.co", "Stripe Connect"],
    category: "Full-Stack",
    highlight: "Healthcare · 2026",
  },
  {
    title: "WinAgent — Local Windows AI Automation Agent",
    description:
      "Production-ready AI agent leveraging LangGraph state machines for multi-step agentic reasoning, tool calling, and branching task execution entirely on-device. Evaluated multiple open-source LLMs via Ollama for performance trade-offs and applied MCP-style agent tool integration patterns for secure system automation.",
    stack: ["Python", "Ollama", "LangChain", "LangGraph", "Gradio", "Windows"],
    category: "AI/ML",
    github: "https://github.com/teerthamazumder/AI-Agent-Local-Windows-Coworker",
    highlight: "Featured Project · 2025",
  },
  {
    title: "Electronic Design Automation Using LLMs",
    description:
      "MASc research project benchmarking AI-assisted EDA automation at Memorial University under Dr. Lihong Zhang. Designed Python-based data processing, orchestration, and evaluation pipelines using LLaMA, applying prompt engineering, RAG patterns, and performance testing with clear communication of findings to diverse technical audiences.",
    stack: ["Python", "LLaMA", "PyTorch", "Hugging Face", "RAG", "NLP", "Prompt Engineering"],
    category: "AI/ML",
    highlight: "MUN MASc Research · 2024",
  },
  {
    title: "Athlete Management & Real-Time Tracking System",
    description:
      "Full-stack web application for athlete performance tracking and management, built at Memorial University under Dr. Adrian Fiech. Features JWT authentication, role-based access control, RESTful APIs, and live data integration between React frontend and Node.js backend services.",
    stack: ["Node.js", "Express", "React", "REST APIs", "MySQL", "JWT", "Git"],
    category: "Full-Stack",
    highlight: "MUN · 2024",
  },
  {
    title: "Cost-Optimized NAS & Linux Infrastructure",
    description:
      "Designed and deployed a Linux-based NAS server with RAID, LVM, NFS/Samba shares, SSH hardening, ACLs, and Bash automation scripts for monitoring and storage management. Full deployment documentation and cost-optimization analysis included.",
    stack: ["Linux", "NFS", "Samba", "RAID", "LVM", "Bash", "Firewalld"],
    category: "Infrastructure",
    highlight: "Infrastructure Design · 2020",
  },
  {
    title: "Online Result Management System",
    description:
      "BSc research project — role-based web platform for academic result publication developed for a national education board in Bangladesh. Features secure PHP backend with business-rule-driven grading logic, data validation, and a MySQL database, deployed for real institutional use.",
    stack: ["PHP", "MySQL", "HTML/CSS", "SQL"],
    category: "Full-Stack",
    highlight: "BSc Research · 2019",
  },
  {
    title: "Sentiment Analysis Engine & Knowledge Graph",
    description:
      "Dual applied ML project combining a deep learning NLP sentiment classification model (TensorFlow/Keras/NLTK) with a Twitter-microdata knowledge graph for entity relationship analysis (NetworkX). Demonstrates end-to-end ML pipeline design, model evaluation, and data engineering.",
    stack: ["Python", "TensorFlow", "Keras", "NLTK", "NetworkX", "Tweepy"],
    category: "AI/ML",
    highlight: "DIU · 2018–2019",
  },
  {
    title: "E-Commerce Food Ordering System",
    description:
      "Android food ordering application with SQLite for product, customer, and order data management. Explored ASP.NET backend integration for order management and reporting, covering mobile app development, database design, and backend connectivity patterns.",
    stack: ["Java", "Android Studio", "SQLite", "XML", "ASP.NET"],
    category: "Full-Stack",
    highlight: "2021",
  },
  {
    title: "Data Link Layer Simulation",
    description:
      "Java simulation demonstrating reliable data transmission with error detection (CRC/checksum), flow control, and frame sequencing. Models core data-link layer protocols using OOP principles.",
    stack: ["Java", "OOP", "Network Protocol Simulation"],
    category: "Systems",
  },
];

export const education = [
  {
    degree: "Master of Applied Science (MASc)",
    field: "Software Engineering",
    institution: "Memorial University of Newfoundland",
    location: "St. John's, NL, Canada",
    years: "2023 – 2024",
    icon: "🎓",
  },
  {
    degree: "Bachelor of Science (BSc)",
    field: "Computer Science & Engineering",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    years: "2016 – 2019",
    icon: "🎓",
  },
];

export const certifications = [
  { name: "Red Hat Certified System Administrator (RHCSA)", issuer: "Red Hat" },
  { name: "Linux System Engineering & Security", issuer: "CompTIA CEU eligible" },
  { name: "Learning Ansible Configuration Management", issuer: "" },
  { name: "Data Analyst & Development Certificate", issuer: "" },
  { name: "Excel Essential Training", issuer: "NASBA" },
  { name: "Emergency First Aid (CPR-B & CPR-C)", issuer: "" },
];

export const achievements = [
  {
    title: "1st Runners-up — Math Olympiad",
    detail: "Inter-District Level · 2011",
  },
  {
    title: "Composition Writing Winner",
    detail: "International Mother Language Day · 2006",
  },
];

export const techStackMarquee = {
  row1: [
    { name: "Python", icon: "SiPython" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "React", icon: "SiReact" },
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "PHP", icon: "SiPhp" },
    { name: "Bash", icon: "SiGnubash" },
    { name: "Docker", icon: "SiDocker" },
    { name: "Kubernetes", icon: "SiKubernetes" },
    { name: "Ansible", icon: "SiAnsible" },
  ],
  row2: [
    { name: "AWS", icon: "SiAmazonaws" },
    { name: "Azure", icon: "SiMicrosoftazure" },
    { name: "GCP", icon: "SiGooglecloud" },
    { name: "Terraform", icon: "SiTerraform" },
    { name: "Power BI", icon: "SiPowerbi" },
    { name: "MySQL", icon: "SiMysql" },
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "Linux", icon: "SiLinux" },
    { name: "TensorFlow", icon: "SiTensorflow" },
    { name: "Ollama", icon: "SiOllama" },
  ],
};

// Photo assets (all in /public/)
export const photos = {
  main: "/teertha.jpg",
  headshot: "/teertha-headshot.jpg",
  graduation: "/teertha-graduation.jpg",
  // Slideshow — About section
  slideshow: [
    "/teertha.jpg",
    "/teertha-graduation.jpg",
    "/Teertha_snow.jpg",
    "/Teertha_formal.jpg",
    "/Teertha_classic.jpg",
  ],
};
