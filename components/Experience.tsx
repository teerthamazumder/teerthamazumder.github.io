"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, MousePointerClick } from "lucide-react";
import { experience } from "@/data/portfolio";
import DetailModal, { type ModalData } from "./DetailModal";

interface ExperienceProps {
  id?: string;
}

export default function Experience({ id }: ExperienceProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [modal, setModal] = useState<ModalData | null>(null);

  const openModal = (job: typeof experience[number]) => {
    setModal({
      type: "experience",
      role: job.role,
      company: job.company,
      org: job.org,
      location: job.location,
      period: job.period,
      current: job.current,
      bullets: job.bullets,
      stack: job.stack,
      modalBg: job.modalBg,
      modalAccent: job.modalAccent,
      orgUrl: job.orgUrl,
      extra: job.extra,
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
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "var(--accent)" }}>
            Career
          </p>
          <h2 className="font-syne font-bold text-3xl md:text-4xl text-[#f0f0f0]">Work Experience</h2>
          <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>
            Click any card to see full details
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ background: "rgba(255,255,255,0.08)" }} />
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px" style={{ background: "rgba(255,255,255,0.08)" }} />

          <div className="space-y-12 md:space-y-16">
            {experience.map((job, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className="relative">
                  {/* Timeline dot */}
                  <div
                    className={`hidden md:flex absolute top-6 left-1/2 -translate-x-1/2 items-center justify-center w-4 h-4 rounded-full z-10`}
                    style={{ background: "var(--accent)" }}
                  >
                    {job.current && (
                      <motion.div
                        className="absolute w-4 h-4 rounded-full"
                        style={{ background: "var(--accent)", opacity: 0.4 }}
                        animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                    )}
                  </div>
                  <div className="md:hidden absolute left-4 top-6 -translate-x-1/2 w-3 h-3 rounded-full z-10" style={{ background: "var(--accent)" }} />

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
                    className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                  >
                    <button
                      onClick={() => openModal(job)}
                      className="w-full text-left rounded-xl p-6 border-l-4 transition-all duration-200 group"
                      style={{
                        background: "var(--bg-900)",
                        borderLeft: "4px solid var(--accent)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderLeftWidth: 4,
                        borderLeftColor: "var(--accent)",
                        borderLeftStyle: "solid",
                      }}
                      data-hover
                    >
                      {/* Hover hint */}
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-syne font-bold text-lg text-[#f0f0f0]">{job.role}</h3>
                        <div className="flex items-center gap-1.5">
                          {job.current && (
                            <span className="text-xs px-2 py-0.5 rounded-full shrink-0" style={{ background: "rgba(0,229,192,0.15)", color: "var(--accent)", border: "1px solid rgba(0,229,192,0.3)" }}>
                              Current
                            </span>
                          )}
                          <MousePointerClick size={14} className="opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: "var(--accent)" }} />
                        </div>
                      </div>

                      <p className="font-medium text-sm mb-1" style={{ color: "var(--accent)" }}>
                        {job.company}{job.org && ` — ${job.org}`}
                      </p>

                      <div className="flex flex-wrap gap-3 text-xs mb-4" style={{ color: "var(--text-muted)" }}>
                        <span className="flex items-center gap-1"><MapPin size={11} />{job.location}</span>
                        <span className="flex items-center gap-1"><Calendar size={11} />{job.period}</span>
                      </div>

                      <ul className="space-y-1.5 mb-4">
                        {job.bullets.slice(0, 3).map((b, bi) => (
                          <li key={bi} className="text-sm flex gap-2" style={{ color: "var(--text-secondary)" }}>
                            <span style={{ color: "var(--accent)" }} className="mt-1 shrink-0">›</span>
                            {b}
                          </li>
                        ))}
                        {job.bullets.length > 3 && (
                          <li className="text-xs" style={{ color: "var(--text-muted)" }}>
                            +{job.bullets.length - 3} more — click to expand
                          </li>
                        )}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {job.stack.map((s) => (
                          <span key={s} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.3)", color: "var(--purple)" }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </button>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <DetailModal data={modal} onClose={() => setModal(null)} />
    </>
  );
}
