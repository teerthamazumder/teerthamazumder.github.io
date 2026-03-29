"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star, MousePointerClick } from "lucide-react";
import { projects, type ProjectCategory } from "@/data/portfolio";
import DetailModal, { type ModalData } from "./DetailModal";

const categories: ProjectCategory[] = ["All", "AI/ML", "Full-Stack", "Infrastructure", "Data", "Systems"];

const categoryColors: Record<string, string> = {
  "AI/ML": "#00e5c0",
  "Full-Stack": "#a855f7",
  "Infrastructure": "#f59e0b",
  "Data": "#3b82f6",
  "Systems": "#ef4444",
};

interface ProjectsProps {
  id?: string;
}

export default function Projects({ id }: ProjectsProps) {
  const [active, setActive] = useState<ProjectCategory>("All");
  const [modal, setModal] = useState<ModalData | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  const openModal = (p: typeof projects[number]) => {
    setModal({
      type: "project",
      title: p.title,
      description: p.description,
      stack: p.stack,
      category: p.category,
      github: p.github,
      demo: p.demo,
      highlight: p.highlight,
    });
  };

  return (
    <>
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
        className="text-center mb-10"
      >
        <p
          className="text-xs uppercase tracking-widest font-semibold mb-3"
          style={{ color: "var(--accent)" }}
        >
          Portfolio
        </p>
        <h2 className="font-syne font-bold text-3xl md:text-4xl text-[#f0f0f0]">Projects</h2>
      </motion.div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
            style={
              active === cat
                ? { background: "var(--accent)", color: "#050505" }
                : {
                    background: "var(--bg-800)",
                    color: "var(--text-secondary)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }
            }
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, i) => {
            const isFeatured = project.highlight === "Featured Project";
            const catColor = categoryColors[project.category] ?? "var(--accent)";
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.01 }}
                onClick={() => openModal(project)}
                className="flex flex-col rounded-xl p-5 border transition-all duration-200 cursor-pointer group"
                style={
                  isFeatured
                    ? { background: "var(--bg-900)", border: "1px solid rgba(0,229,192,0.4)", boxShadow: "0 0 24px rgba(0,229,192,0.2)" }
                    : { background: "var(--bg-900)", border: "1px solid rgba(255,255,255,0.06)" }
                }
                data-hover
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-3">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: `${catColor}18`, color: catColor, border: `1px solid ${catColor}40` }}
                  >
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.highlight && (
                      <span className="flex items-center gap-1 text-xs font-medium" style={{ color: isFeatured ? "var(--accent)" : "var(--purple)" }}>
                        {isFeatured && <Star size={11} fill="currentColor" />}
                        {project.highlight}
                      </span>
                    )}
                    <MousePointerClick size={13} className="opacity-0 group-hover:opacity-50 transition-opacity" style={{ color: "var(--accent)" }} />
                  </div>
                </div>

                <h3 className="font-syne font-bold text-[#f0f0f0] mb-2 text-base leading-snug">
                  {project.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-4 flex-1 overflow-hidden"
                  style={{
                    color: "var(--text-secondary)",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.description}
                </p>

                {/* Stack pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.slice(0, 5).map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: "rgba(168,85,247,0.1)",
                        border: "1px solid rgba(168,85,247,0.25)",
                        color: "var(--purple)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                  {project.stack.length > 5 && (
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ color: "var(--text-muted)" }}
                    >
                      +{project.stack.length - 5} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto pt-2 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <a
                    href={project.github ?? "#"}
                    target={project.github ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex items-center gap-1.5 text-xs transition-colors duration-150 hover:text-accent"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <Github size={14} />
                    Code
                  </a>
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Demo"
                      className="flex items-center gap-1.5 text-xs transition-colors duration-150 hover:text-accent"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>

    <DetailModal data={modal} onClose={() => setModal(null)} />
    </>
  );
}
