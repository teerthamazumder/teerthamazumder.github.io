# CLAUDE.md — Teertha Mazumder Portfolio

This is the single source of truth for the portfolio project.
Read this file before every task. Do not deviate without explicit approval.

---

## Owner

| Field | Value |
|---|---|
| Name | Teertha Mazumder |
| Title | Senior Infrastructure & Security Analyst · Software Engineer · AI/ML Developer |
| Location | St. John's, Newfoundland & Labrador, Canada |
| Email | mteertha@gmail.com |
| GitHub | https://github.com/teerthamazumder |
| Photo | /public/teertha.jpg  ← replace placeholder once uploaded |

> Do NOT include government email or phone number on the public site.

---

## Project Goal

Build a stunning, animated, single-page portfolio website inspired by https://www.redoyanulhaque.me
— same quality of animation and dark aesthetic, fully personalized with Teertha's real data.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Particles | @tsparticles/react + @tsparticles/slim |
| Typewriter | react-type-animation |
| Icons | lucide-react + react-icons |
| Fonts | Syne (headings) + Inter (body) via next/font/google |
| Deploy | Vercel (free tier) |

---

## Design System

```
Background:       #050505  (near-black, NOT pure black)
Surface:          #0f0f0f  (cards, navbar)
Surface-2:        #1a1a1a  (hover states, inputs)
Accent (primary): #00e5c0  (cyan-teal — highlights, borders, glows)
Accent (purple):  #a855f7  (tags, secondary highlights)
Text primary:     #f0f0f0
Text secondary:   #9ca3af
Text muted:       #6b7280
Border:           rgba(255,255,255,0.08)
```

- **Dark mode only** — no light mode toggle needed
- **Fonts:** Syne 700/800 for headings, Inter 400/500 for body
- **Motion:** Framer Motion `whileInView` + staggered children on every section
- **Cursor:** Custom animated cursor (dot + lagging ring, scales on hover)
- **Glow effects:** accent-color box-shadow on cards and buttons on hover

---

## Sections (in order)

### 1. Hero
- Full-screen, tsParticles connected-dot background
- Greeting: `Hi, I'm Teertha Mazumder`
- Typewriter cycling: `Senior Infrastructure Analyst` · `Security Engineer` · `Full-Stack Developer` · `AI/ML Engineer` · `Data Analyst` · `Cloud Architect`
- Tagline: "Bridging enterprise infrastructure with software engineering and AI-driven innovation."
- Buttons: `View My Work →` (filled) · `Download Resume ↓` (outlined → /public/teertha-resume-2026.pdf)
- Bouncing scroll arrow

### 2. About
- Left: circular photo (`/public/teertha.jpg`) with gradient ring border
- Right: bio + 4 animated counters
- Bio: "Senior Infrastructure and Security Analyst at the Government of Newfoundland and Labrador,
  with a Master of Applied Science in Software Engineering. I secure and modernize mission-critical
  government systems while building full-stack applications and AI-driven solutions. I bridge
  enterprise infrastructure leadership with modern software engineering, automation, and LLM-based
  development."
- Counters: `5+` Years Exp · `20+` Projects · `8` Certifications · `3+` Cloud Platforms

### 3. Skills
Grouped pill/tag style with staggered entrance animations.

| Category | Skills |
|---|---|
| Systems & Infrastructure | RHEL, IBM AIX, Windows Server, VMware vSphere, IBM Power Systems (HMC/LPAR), Red Hat Satellite |
| Security & Identity | Firewalls, Network Segmentation, RBAC, Active Directory, Microsoft 365, IAM, Vulnerability Remediation, CompTIA Security+ |
| Programming | Python, JavaScript, TypeScript, PHP, Bash, Node.js, React, Flutter |
| Data & Analytics | Power BI, Tableau, Pandas, MySQL, PostgreSQL, SQLite, ETL Pipelines |
| DevOps & Cloud | Docker, Kubernetes, Ansible, AWS, Azure, GCP, Terraform, CloudFormation |
| AI / ML | Scikit-learn, TensorFlow, PyTorch, LLM Dev (LLaMA), Hugging Face, NLP, Prompt Engineering, Ollama |

### 4. Experience Timeline
Vertical alternating timeline (desktop) / left-edge single column (mobile).
Cards slide in from respective sides on scroll.

**Entry 1:**
- Role: Computer Systems Analyst II
- Company: Office of the Chief Information Officer (OCIO) — Government of Newfoundland and Labrador
- Location: St. John's, NL
- Dates: July 2025 – Present
- Stack badge: RHEL · IBM AIX · VMware · Firewalls · Red Hat Satellite · Oracle · MySQL
- Bullets:
  - Support and secure enterprise network and infrastructure delivering critical government services
  - Manage firewall policies, network access controls, routing, and segmentation
  - Administer and harden Linux (RHEL), IBM AIX, and Windows Server environments
  - Perform patch management, vulnerability remediation, and risk assessments
  - Support Microsoft 365 and Active Directory, including IAM and RBAC validation
  - Contribute to incident response, disaster recovery testing, and business continuity planning

**Entry 2:**
- Role: Data Analyst / Systems Engineer (Contract)
- Company: PROSHIKA — A Center for Human Development
- Location: Dhaka, Bangladesh
- Dates: 2020 – 2023
- Stack badge: Python · SQL · Power BI · ETL · Data Modeling
- Bullets:
  - Designed and implemented secure data processing and reporting systems
  - Developed automated ETL pipelines using Python and SQL
  - Built executive dashboards in Power BI for strategic decision-making
  - Conducted risk and impact assessments for system enhancements
  - Documented system architecture, workflows, and continuity procedures

### 5. Projects Gallery
Filter tabs: All | AI/ML | Full-Stack | Infrastructure | Data | Systems
3-col grid → 2-col tablet → 1-col mobile. Cards glow on hover.

| # | Title | Description | Stack | Category | Link |
|---|---|---|---|---|---|
| 1 | AI Agent — Local Windows Coworker | Privacy-first local AI agent powered by Ollama. Runs entirely on your machine — CLI interaction, offline LLM inference, and secure system automation. | Python · Ollama · LangChain · LangGraph · Gradio · Windows | AI/ML | https://github.com/winl2/AI-Agent-Local-Windows-Coworker |
| 2 | Electronic Design Automation using LLM | AI-driven optimization models for electronic design workflows using LLaMA. Proof-of-concept with performance evaluation and feasibility analysis. | Python · LLaMA · PyTorch · Hugging Face · NLP · Kali Linux | AI/ML | # |
| 3 | Web-Based Athlete Management System | Secure full-stack web app for athlete tracking and performance management with JWT auth. | Node.js · Express · React · REST APIs · MySQL · JWT · Git | Full-Stack | # |
| 4 | Secure NAS Infrastructure Design | Linux-based network-attached storage with RAID, LVM, ACLs, and SSH hardening. Bash automation for monitoring. | Linux · NFS · Samba · RAID · LVM · Bash · Firewalld | Infrastructure | # |
| 5 | Result Management System | Role-based academic result portal with secure data validation and MySQL integration. | PHP · MySQL · HTML/CSS | Full-Stack | # |
| 6 | Knowledge Graph | Knowledge graph from Twitter microdata — entity relationship analysis using NetworkX. | Python · Tweepy · NetworkX · JSON | Data | # |
| 7 | Sentiment Analysis Engine | Deep learning sentiment analysis model for text classification and opinion mining. | Python · TensorFlow · Keras · NLTK | AI/ML | # |
| 8 | Voice-Activated Automated Car | Voice-controlled robotic car with real-time obstacle detection on Arduino. | Arduino · Embedded C · Speech Recognition API · Ultrasonic Sensors | Systems | # |
| 9 | E-Commerce Food Ordering App | Android food ordering app with local SQLite database and clean UI. | Java · Android Studio · SQLite · XML | Full-Stack | # |
| 10 | Data Link Layer Simulation | Java simulation of data transmission with error detection and flow control. | Java · OOP · Network Protocol Simulation | Systems | # |

### 6. Education
Two cards side by side (stacked mobile).

- **Master of Applied Science — Software Engineering**
  Memorial University of Newfoundland | St. John's, Canada
- **Bachelor of Science — Computer Science & Engineering**
  Daffodil International University | Dhaka, Bangladesh

### 7. Certifications
Badge-card grid (3-col → 2-col → 1-col).

| Certification | Issuer |
|---|---|
| CompTIA Security+ Training | LinkedIn Learning |
| Red Hat Certified System Administrator (RHCSA) | Red Hat |
| Linux System Engineering & Security | — |
| Ansible Configuration Management | — |
| Linux Networking & Patch Management | — |
| Data Analyst & Development Certificate | — |
| Excel Essential Training | NASBA |
| Emergency First Aid (CPR-B & CPR-C) | — |

### 8. Achievements
Small section with two items displayed as accent-colored highlight cards.

- 🥈 1st Runners-up — Math Olympiad Inter-District (2011)
- ✍️ Composition Writing Winner — International Mother Language Day (2006)

### 9. Tech Stack Marquee
Two infinite-scroll rows (CSS keyframes), opposite directions. Pause on hover.

- Row 1 (→): Python · JavaScript · TypeScript · React · Node.js · PHP · Bash · Docker · Kubernetes · Ansible
- Row 2 (←): AWS · Azure · GCP · Terraform · Power BI · MySQL · PostgreSQL · Linux · TensorFlow · Ollama · LLaMA

### 10. Contact
- Three link cards: Email · GitHub · LinkedIn (placeholder — add URL)
- Simple contact form: Name · Email · Message · Send
  - Use Formspree: replace `YOUR_FORMSPREE_ID` in Contact.tsx with real ID from formspree.io

### 11. Footer
- "TM" monogram · name · tagline
- Nav links row
- © 2026 Teertha Mazumder

---

## Navigation

- Fixed top navbar with `backdrop-blur`
- Logo: "TM" in accent color
- Links: About · Skills · Experience · Projects · Contact
- Active section detection via Intersection Observer
- Mobile: hamburger → slide drawer
- "Resume" download button (outlined)

---

## File Structure

```
teertha-portfolio/
├── app/
│   ├── layout.tsx          ← fonts, metadata, global providers
│   ├── page.tsx            ← assembles all sections
│   └── globals.css         ← CSS variables, base styles, custom cursor CSS
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   ├── Certifications.tsx
│   ├── Achievements.tsx
│   ├── TechStack.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── CustomCursor.tsx
├── data/
│   └── portfolio.ts        ← ALL content as typed TS constants
├── public/
│   ├── teertha.jpg         ← ADD YOUR PHOTO HERE (rename to teertha.jpg)
│   └── teertha-resume-2026.pdf  ← ADD YOUR RESUME PDF HERE
├── CLAUDE.md
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Rules for Claude Code

1. Read this file before every task
2. All content lives in `data/portfolio.ts` — never hardcode text in components
3. TypeScript strict mode — no `any` types
4. All Framer Motion animations must respect `prefers-reduced-motion`
5. Components max ~150 lines — extract sub-components if larger
6. `npm run build` must pass with zero errors before marking a task done
7. Mobile-first responsive — test at 375px, 768px, 1440px
8. Government email and phone number must NEVER appear on the site

---

## Definition of Done

- [ ] All 11 sections built and populated with real data
- [ ] Scroll animations trigger correctly on all sections
- [ ] Fully responsive on mobile, tablet, desktop
- [ ] Custom cursor works; hides on touch devices
- [ ] `npm run build` passes clean
- [ ] Lighthouse Performance ≥ 90, Accessibility ≥ 95
- [ ] Deployed live on Vercel

---

## Bonus Features (implement after base is done)

1. GitHub activity graph — `react-github-calendar` for username `winl2`
2. AI chat widget — floating button → chat powered by Claude API with portfolio context
3. SEO — full `metadata` in layout.tsx, Open Graph, sitemap.xml
4. Vercel Analytics — `@vercel/analytics`
5. Dark/light mode toggle
