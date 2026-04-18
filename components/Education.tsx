"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { education, photos } from "@/data/portfolio";

interface EducationProps {
  id?: string;
}

export default function Education({ id }: EducationProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      ref={ref}
      className="scroll-mt-20 relative overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      {/* Full-section graduation photo background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={photos.graduation}
          alt="Graduation background"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Heavy dark overlay so text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,5,5,0.82) 0%, rgba(5,5,5,0.70) 40%, rgba(5,5,5,0.88) 100%)",
          }}
        />
        {/* Blur overlay */}
        <div
          className="absolute inset-0"
          style={{ backdropFilter: "blur(3px)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-24 px-4 md:px-8 max-w-7xl mx-auto">
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
            Academic Background
          </p>
          <h2 className="font-syne font-bold text-3xl md:text-4xl text-[#f0f0f0]">
            Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              className="rounded-xl border transition-all duration-200 glow-accent-hover"
              style={{
                background: "rgba(15,15,15,0.75)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderTop: "3px solid var(--accent)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(0,229,192,0.12)",
                      border: "1px solid rgba(0,229,192,0.35)",
                    }}
                  >
                    <GraduationCap size={22} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-lg text-[#f0f0f0] leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="font-semibold text-sm mt-0.5" style={{ color: "var(--accent)" }}>
                      {edu.field}
                    </p>
                    <p className="text-sm mt-1.5 font-semibold" style={{ color: "var(--text-secondary)" }}>
                      {edu.institution}
                    </p>
                    <p
                      className="text-xs mt-1 flex items-center gap-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <MapPin size={11} />
                      {edu.location}
                    </p>
                    {edu.years && (
                      <p className="text-xs mt-1 font-semibold" style={{ color: "var(--accent)", opacity: 0.8 }}>
                        {edu.years}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
