"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillGroups } from "@/data/portfolio";

interface SkillsProps {
  id?: string;
}

export default function Skills({ id }: SkillsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      ref={ref}
      className="scroll-mt-20 py-24 px-4 md:px-8 max-w-7xl mx-auto"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      {/* Heading */}
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
          Expertise
        </p>
        <h2 className="font-syne font-bold text-3xl md:text-4xl text-[#f0f0f0]">
          Technical Skills
        </h2>
      </motion.div>

      {/* Skill groups */}
      <div className="space-y-10">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
          >
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-4"
              style={{ color: "var(--accent)" }}
            >
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: gi * 0.08 + si * 0.04,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(0,229,192,1)" }}
                  className="px-3 py-1.5 rounded-full text-sm font-inter transition-all duration-150 cursor-default"
                  style={{
                    background: "var(--bg-800)",
                    border: "1px solid rgba(0,229,192,0.3)",
                    color: "var(--text-primary)",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
