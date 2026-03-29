# Teertha Mazumder — Portfolio Website

Animated dark-theme personal portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

---

## Quick Start with Claude Code

1. Copy this entire `teertha-portfolio/` folder to your machine
2. Add your photo as `public/teertha.jpg`
3. Add your resume as `public/teertha-resume-2026.pdf`
4. Update your LinkedIn URL in `data/portfolio.ts` → `personal.linkedin`
5. Open Claude Code in this folder:
   ```bash
   cd teertha-portfolio
   claude
   ```
6. Paste the contents of `PROMPT.md` as your first message

Claude Code will build the entire site step by step.

---

## Manual Setup (without Claude Code)

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## Deploy

```bash
npx vercel --prod
```

---

## Folder Structure

```
teertha-portfolio/
├── CLAUDE.md          ← project memory for Claude Code
├── PROMPT.md          ← paste this into Claude Code to build
├── README.md          ← this file
├── data/
│   └── portfolio.ts   ← ALL content (edit this, not components)
├── public/
│   ├── teertha.jpg         ← ADD YOUR PHOTO
│   └── teertha-resume-2026.pdf  ← ADD YOUR RESUME
└── package.json
```

---

## After the Build

- Sign up at https://formspree.io for a free contact form backend
- Replace `YOUR_FORMSPREE_ID` in `components/Contact.tsx`
- Add your LinkedIn URL in `data/portfolio.ts`
