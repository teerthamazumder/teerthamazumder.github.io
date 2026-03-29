import { personal } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      className="py-10 px-4 md:px-8"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Monogram */}
          <span
            className="font-syne font-extrabold text-2xl"
            style={{ color: "var(--accent)" }}
          >
            {personal.initials}
          </span>

          {/* Name + tagline */}
          <div className="text-center">
            <p className="font-syne font-semibold text-[#f0f0f0]">{personal.name}</p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
              Built with Next.js &amp; Framer Motion
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-150 hover:text-accent"
                style={{ color: "var(--text-muted)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            &copy; 2026 {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
