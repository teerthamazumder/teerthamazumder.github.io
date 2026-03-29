"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { personal } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#0f0f0f]/80 border-b border-white/8"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-syne font-bold text-xl text-accent tracking-wider"
          style={{ color: "var(--accent)" }}
        >
          {personal.initials}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-inter transition-colors duration-200 relative ${
                  isActive ? "text-accent" : "text-[#9ca3af] hover:text-[#f0f0f0]"
                }`}
                style={isActive ? { color: "var(--accent)" } : {}}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ background: "var(--accent)" }}
                  />
                )}
              </button>
            );
          })}
          <a
            href={personal.resume}
            download
            className="flex items-center gap-1.5 text-sm px-4 py-1.5 rounded border transition-all duration-200 hover:bg-accent hover:text-[#050505] font-medium"
            style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#9ca3af] hover:text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-white/8 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-[#f0f0f0] hover:text-accent transition-colors duration-200 py-1"
              style={{ color: "var(--text-primary)" }}
            >
              {link.label}
            </button>
          ))}
          <a
            href={personal.resume}
            download
            className="flex items-center gap-1.5 text-sm px-4 py-2 rounded border w-fit transition-all duration-200"
            style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
          >
            <Download size={14} />
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
