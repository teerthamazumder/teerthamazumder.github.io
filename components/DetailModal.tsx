"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Github, ExternalLink, MapPin, Calendar,
  Building2, Star, ChevronRight,
} from "lucide-react";

export interface ModalData {
  type: "experience" | "project" | "certification";
  // Experience fields
  role?: string;
  company?: string;
  org?: string;
  location?: string;
  period?: string;
  current?: boolean;
  bullets?: string[];
  modalBg?: string;
  modalAccent?: string;
  orgUrl?: string;
  extra?: string;
  // Project fields
  title?: string;
  description?: string;
  highlight?: string;
  github?: string;
  demo?: string;
  category?: string;
  // Shared
  stack?: string[];
  // Future-proof extras — add any key/value here
  extras?: Record<string, string>;
}

interface Props {
  data: ModalData | null;
  onClose: () => void;
}

const categoryColors: Record<string, string> = {
  "AI/ML": "#00e5c0",
  "Full-Stack": "#a855f7",
  "Infrastructure": "#f59e0b",
  "Data": "#3b82f6",
  "Systems": "#ef4444",
};

export default function DetailModal({ data, onClose }: Props) {
  useEffect(() => {
    if (!data) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [data, onClose]);

  const isExp = data?.type === "experience";
  const accent = isExp
    ? (data?.modalAccent ?? "#00e5c0")
    : (data?.category ? (categoryColors[data.category] ?? "#00e5c0") : "#00e5c0");

  const bg = isExp
    ? (data?.modalBg ?? "linear-gradient(135deg, rgba(0,229,192,0.2), rgba(168,85,247,0.2))")
    : `linear-gradient(135deg, ${accent}22 0%, rgba(15,15,15,0.98) 60%, rgba(168,85,247,0.12) 100%)`;

  const heading = isExp ? data?.role : data?.title;

  return (
    <AnimatePresence>
      {data && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200]"
            style={{ background: "rgba(5,5,5,0.82)", backdropFilter: "blur(10px)" }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.88, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 32 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl pointer-events-auto"
              style={{
                background: "#0f0f0f",
                border: `1px solid ${accent}40`,
                boxShadow: `0 0 60px ${accent}22, 0 24px 80px rgba(0,0,0,0.7)`,
              }}
            >
              {/* Background gradient overlay */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ background: bg, opacity: 0.55 }}
              />

              {/* Decorative glow orb top-right */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${accent}22 0%, transparent 70%)`,
                  transform: "translate(30%, -30%)",
                }}
              />

              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#9ca3af",
                }}
              >
                <X size={16} />
              </button>

              <div className="relative p-6 md:p-8">
                {/* ---- EXPERIENCE MODAL ---- */}
                {isExp && (
                  <>
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 size={14} style={{ color: accent }} />
                        <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: accent }}>
                          Work Experience
                        </span>
                        {data.current && (
                          <span
                            className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ml-auto"
                            style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}44` }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: accent }} />
                            Current
                          </span>
                        )}
                      </div>

                      <h2 className="font-syne font-bold text-2xl md:text-3xl text-[#f0f0f0] mb-1">
                        {data.role}
                      </h2>

                      <a
                        href={data.orgUrl || "#"}
                        target={data.orgUrl ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="font-semibold text-base transition-opacity hover:opacity-80"
                        style={{ color: accent }}
                      >
                        {data.company}
                        {data.org && ` — ${data.org}`}
                      </a>

                      <div className="flex flex-wrap gap-4 mt-3 text-sm" style={{ color: "#6b7280" }}>
                        {data.location && (
                          <span className="flex items-center gap-1">
                            <MapPin size={13} /> {data.location}
                          </span>
                        )}
                        {data.period && (
                          <span className="flex items-center gap-1">
                            <Calendar size={13} /> {data.period}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px mb-6" style={{ background: `${accent}22` }} />

                    {/* Bullets */}
                    {data.bullets && data.bullets.length > 0 && (
                      <div className="mb-6">
                        <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "#6b7280" }}>
                          Responsibilities
                        </p>
                        <ul className="space-y-2">
                          {data.bullets.map((b, i) => (
                            <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                              <ChevronRight size={14} className="shrink-0 mt-0.5" style={{ color: accent }} />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Stack */}
                    {data.stack && data.stack.length > 0 && (
                      <div className="mb-6">
                        <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "#6b7280" }}>
                          Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {data.stack.map((s) => (
                            <span
                              key={s}
                              className="text-xs px-3 py-1 rounded-full"
                              style={{
                                background: `${accent}15`,
                                border: `1px solid ${accent}40`,
                                color: accent,
                              }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Extra field — future-proof */}
                    {data.extra && (
                      <div
                        className="p-4 rounded-xl text-sm"
                        style={{ background: `${accent}0d`, border: `1px solid ${accent}22`, color: "#9ca3af" }}
                      >
                        {data.extra}
                      </div>
                    )}

                    {/* Extras map — for future custom fields */}
                    {data.extras && Object.entries(data.extras).map(([k, v]) => (
                      <div key={k} className="mt-3">
                        <p className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: "#6b7280" }}>{k}</p>
                        <p className="text-sm" style={{ color: "#9ca3af" }}>{v}</p>
                      </div>
                    ))}
                  </>
                )}

                {/* ---- PROJECT MODAL ---- */}
                {!isExp && (
                  <>
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex flex-wrap gap-2">
                          {data.category && (
                            <span
                              className="text-xs font-semibold px-3 py-1 rounded-full"
                              style={{
                                background: `${accent}18`,
                                color: accent,
                                border: `1px solid ${accent}40`,
                              }}
                            >
                              {data.category}
                            </span>
                          )}
                          {data.highlight && (
                            <span className="flex items-center gap-1 text-xs font-medium" style={{ color: "#a855f7" }}>
                              <Star size={11} fill="currentColor" />
                              {data.highlight}
                            </span>
                          )}
                        </div>
                      </div>

                      <h2 className="font-syne font-bold text-2xl md:text-3xl text-[#f0f0f0] mb-3">
                        {data.title}
                      </h2>

                      <p className="text-base leading-relaxed" style={{ color: "#9ca3af" }}>
                        {data.description}
                      </p>
                    </div>

                    <div className="h-px mb-6" style={{ background: `${accent}22` }} />

                    {/* Stack */}
                    {data.stack && data.stack.length > 0 && (
                      <div className="mb-6">
                        <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "#6b7280" }}>
                          Built With
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {data.stack.map((s) => (
                            <span
                              key={s}
                              className="text-xs px-3 py-1 rounded-full"
                              style={{
                                background: "rgba(168,85,247,0.12)",
                                border: "1px solid rgba(168,85,247,0.35)",
                                color: "#a855f7",
                              }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      {data.github && data.github !== "#" && (
                        <a
                          href={data.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105"
                          style={{ background: accent, color: "#050505" }}
                        >
                          <Github size={15} /> View on GitHub
                        </a>
                      )}
                      {data.demo && data.demo !== "#" && (
                        <a
                          href={data.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border transition-all duration-200 hover:scale-105"
                          style={{ borderColor: `${accent}60`, color: accent }}
                        >
                          <ExternalLink size={15} /> Live Demo
                        </a>
                      )}
                    </div>

                    {/* Extras */}
                    {data.extras && Object.entries(data.extras).map(([k, v]) => (
                      <div key={k} className="mt-4">
                        <p className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: "#6b7280" }}>{k}</p>
                        <p className="text-sm" style={{ color: "#9ca3af" }}>{v}</p>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
