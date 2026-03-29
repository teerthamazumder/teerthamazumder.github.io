"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "@/data/portfolio";

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="scroll-mt-20 py-16 px-4 md:px-8 max-w-7xl mx-auto"
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
          Recognition
        </p>
        <h2 className="font-syne font-bold text-3xl md:text-4xl text-[#f0f0f0]">Achievements</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {achievements.map((ach, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-start gap-4 p-5 rounded-xl border-l-4"
            style={{
              background: "var(--bg-900)",
              borderLeftColor: "var(--accent)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderLeft: "4px solid var(--accent)",
            }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "rgba(0,229,192,0.1)" }}
            >
              <Trophy size={18} style={{ color: "var(--accent)" }} />
            </div>
            <div>
              <p className="font-syne font-bold text-[#f0f0f0]">{ach.title}</p>
              <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{ach.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
