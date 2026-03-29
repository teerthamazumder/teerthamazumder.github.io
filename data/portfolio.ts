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
  github: "https://github.com/winl2",
  linkedin: "https://www.linkedin.com/in/teertha-mazumder-51a656126/",
  location: "St. John's, NL, Canada",
  photo: "/teertha.jpg",
  resume: "/teertha_resume_2026.pdf",
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
      "IBM Power Systems", "HMC/LPAR", "Red Hat Satellite",
    ],
  },
  {
    category: "Security & Identity",
    skills: [
      "Firewalls", "Network Segmentation", "RBAC", "Active Directory",
      "Microsoft 365", "IAM", "Vulnerability Remediation", "CompTIA Security+",
    ],
  },
  {
    category: "Programming",
    skills: [
      "Python", "JavaScript", "TypeScript", "PHP",
      "Bash", "Node.js", "React", "Flutter",
    ],
  },
  {
    category: "Data & Analytics",
    skills: [
      "Power BI", "Tableau", "Pandas", "MySQL",
      "PostgreSQL", "SQLite", "ETL Pipelines",
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      "Docker", "Kubernetes", "Ansible", "AWS",
      "Azure", "GCP", "Terraform", "CloudFormation",
    ],
  },
  {
    category: "AI / ML",
    skills: [
      "Scikit-learn", "TensorFlow", "PyTorch", "LLaMA",
      "Hugging Face", "NLP", "Prompt Engineering", "Ollama", "LangChain",
    ],
  },
];

export const experience = [
  {
    role: "Computer Systems Analyst II",
    company: "Office of the Chief Information Officer (OCIO)",
    org: "Government of Newfoundland and Labrador",
    location: "St. John's, NL",
    period: "July 2025 – Present",
    current: true,
    stack: ["RHEL", "IBM AIX", "VMware", "Firewalls", "Red Hat Satellite", "Oracle", "MySQL"],
    bullets: [
      "Support and secure enterprise network and infrastructure delivering critical government services",
      "Manage firewall policies, network access controls, routing, and segmentation",
      "Administer and harden Linux (RHEL), IBM AIX, and Windows Server environments",
      "Perform patch management, vulnerability remediation, and risk assessments",
      "Support Microsoft 365 and Active Directory including IAM and RBAC validation",
      "Contribute to incident response, disaster recovery testing, and business continuity planning",
    ],
    modalBg: "linear-gradient(135deg, rgba(30,58,138,0.9) 0%, rgba(15,23,42,0.95) 60%, rgba(0,229,192,0.15) 100%)",
    modalAccent: "#3b82f6",
    orgUrl: "https://www.gov.nl.ca/",
    extra: "", // add extra notes here in future
  },
  {
    role: "Data Analyst / Systems Engineer (Contract)",
    company: "PROSHIKA — A Center for Human Development",
    org: "",
    location: "Dhaka, Bangladesh",
    period: "2020 – 2023",
    current: false,
    stack: ["Python", "SQL", "Power BI", "ETL", "Data Modeling"],
    bullets: [
      "Designed and implemented secure data processing and reporting systems",
      "Developed automated ETL pipelines using Python and SQL",
      "Built executive dashboards in Power BI for strategic decision-making",
      "Conducted risk and impact assessments for system enhancements",
      "Documented system architecture, workflows, and continuity procedures",
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
    title: "AI Agent — Local Windows Coworker",
    description:
      "Privacy-first local AI agent powered by Ollama. Runs entirely on your machine — CLI interaction, offline LLM inference, and secure system automation. No data leaves your device.",
    stack: ["Python", "Ollama", "LangChain", "LangGraph", "Gradio", "Windows"],
    category: "AI/ML",
    github: "https://github.com/winl2/AI-Agent-Local-Windows-Coworker",
    highlight: "Featured Project",
  },
  {
    title: "Electronic Design Automation using LLM",
    description:
      "AI-driven optimization models for electronic design workflows using LLaMA. Proof-of-concept with prompt engineering, performance evaluation, and feasibility analysis.",
    stack: ["Python", "LLaMA", "PyTorch", "Hugging Face", "NLP", "Kali Linux"],
    category: "AI/ML",
    highlight: "MUN Research, 2024",
  },
  {
    title: "Web-Based Athlete Management System",
    description:
      "Secure full-stack web application for athlete tracking and performance management with JWT authentication and REST API integration.",
    stack: ["Node.js", "Express", "React", "REST APIs", "MySQL", "JWT", "Git"],
    category: "Full-Stack",
    highlight: "MUN, 2024",
  },
  {
    title: "Secure NAS Infrastructure Design",
    description:
      "Linux-based network-attached storage with RAID, LVM, ACLs, and SSH hardening. Bash scripts for automation and monitoring. Full deployment documentation.",
    stack: ["Linux", "NFS", "Samba", "RAID", "LVM", "Bash", "Firewalld"],
    category: "Infrastructure",
    highlight: "Enterprise Design",
  },
  {
    title: "Result Management System",
    description:
      "Role-based academic result portal with secure data validation, grading business rules, and MySQL integration. Deployed for Bangladesh Polytechnic Institute.",
    stack: ["PHP", "MySQL", "HTML/CSS", "SQL"],
    category: "Full-Stack",
    highlight: "Professional Project, 2019",
  },
  {
    title: "Knowledge Graph from Twitter Data",
    description:
      "Built a knowledge graph from Twitter microdata to analyze entity relationships and structured information using NetworkX.",
    stack: ["Python", "Tweepy", "NetworkX", "JSON"],
    category: "Data",
  },
  {
    title: "Sentiment Analysis Engine",
    description:
      "Deep learning sentiment analysis model for text classification and opinion mining, built with TensorFlow/Keras and NLTK.",
    stack: ["Python", "TensorFlow", "Keras", "NLTK"],
    category: "AI/ML",
  },
  {
    title: "Voice-Activated Automated Car",
    description:
      "Voice-controlled robotic car on Arduino with real-time obstacle detection and navigation using ultrasonic sensors.",
    stack: ["Arduino", "Embedded C", "Speech Recognition API", "Ultrasonic Sensors"],
    category: "Systems",
  },
  {
    title: "E-Commerce Food Ordering App",
    description:
      "Android food ordering application with local SQLite database integration and clean user interface design.",
    stack: ["Java", "Android Studio", "SQLite", "XML"],
    category: "Full-Stack",
  },
  {
    title: "Data Link Layer Simulation",
    description:
      "Java simulation demonstrating data transmission with error detection and flow control mechanisms.",
    stack: ["Java", "OOP", "Network Protocol Simulation"],
    category: "Systems",
  },
];

export const education = [
  {
    degree: "Master of Applied Science",
    field: "Software Engineering",
    institution: "Memorial University of Newfoundland",
    location: "St. John's, NL, Canada",
    icon: "🎓",
  },
  {
    degree: "Bachelor of Science",
    field: "Computer Science & Engineering",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    icon: "🎓",
  },
];

export const certifications = [
  { name: "CompTIA Security+ Training", issuer: "LinkedIn Learning" },
  { name: "Red Hat Certified System Administrator (RHCSA)", issuer: "Red Hat" },
  { name: "Linux System Engineering & Security", issuer: "" },
  { name: "Ansible Configuration Management", issuer: "" },
  { name: "Linux Networking & Patch Management", issuer: "" },
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
