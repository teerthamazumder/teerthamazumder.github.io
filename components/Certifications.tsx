"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
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
          Credentials
        </p>
        <h2 className="font-syne font-bold text-3xl md:text-4xl text-[#f0f0f0]">
          Certifications &amp; Training
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 glow-accent-hover"
            style={{
              background: "var(--bg-900)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "rgba(0,229,192,0.1)", border: "1px solid rgba(0,229,192,0.3)" }}
            >
              <ShieldCheck size={18} style={{ color: "var(--accent)" }} />
            </div>
            <div>
              <p className="font-medium text-sm text-[#f0f0f0] leading-snug">{cert.name}</p>
              {cert.issuer && (
                <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                  {cert.issuer}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
