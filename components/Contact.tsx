"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Send } from "lucide-react";
import { personal } from "@/data/portfolio";

// To use Formspree: sign up at https://formspree.io, get your form ID, and set it here.
// Until then, the form falls back to opening your email client.
const FORMSPREE_ID = ""; // e.g. "xpwzabcd" — leave empty to use mailto fallback

interface ContactProps {
  id?: string;
}

export default function Contact({ id }: ContactProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const contactLinks = [
    {
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "github.com/winl2",
      href: personal.github,
      icon: Github,
    },
    {
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: personal.linkedin,
      icon: Linkedin,
    },
  ];

  return (
    <section
      id={id}
      ref={ref}
      className="scroll-mt-20 py-24 px-4 md:px-8 max-w-7xl mx-auto"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <p
          className="text-xs uppercase tracking-widest font-semibold mb-3"
          style={{ color: "var(--accent)" }}
        >
          Say Hello
        </p>
        <h2 className="font-syne font-bold text-3xl md:text-4xl text-[#f0f0f0] mb-3">
          Get In Touch
        </h2>
        <p className="text-[#9ca3af] max-w-md mx-auto font-inter">
          Open to opportunities, collaborations, and interesting conversations.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Contact link cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border group transition-all duration-200"
              style={{
                background: "var(--bg-900)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-accent group-hover:text-[#050505]"
                style={{ background: "rgba(0,229,192,0.1)", color: "var(--accent)" }}
              >
                <link.icon size={18} />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
                  {link.label}
                </p>
                <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {link.value}
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-y-1 group-hover:translate-y-0"
                style={{ color: "var(--accent)" }}
              />
            </a>
          ))}
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form
            action={FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : undefined}
            method={FORMSPREE_ID ? "POST" : undefined}
            onSubmit={!FORMSPREE_ID ? (e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const name = fd.get("name") as string;
              const email = fd.get("email") as string;
              const message = fd.get("message") as string;
              window.location.href = `mailto:${personal.email}?subject=Portfolio enquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;
            } : undefined}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 font-inter"
                style={{
                  background: "var(--bg-800)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "var(--text-primary)",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "var(--accent)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")
                }
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 font-inter"
                style={{
                  background: "var(--bg-800)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "var(--text-primary)",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "var(--accent)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")
                }
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 resize-none font-inter"
                style={{
                  background: "var(--bg-800)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "var(--text-primary)",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "var(--accent)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")
                }
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-[1.02] glow-accent"
              style={{ background: "var(--accent)", color: "#050505" }}
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
