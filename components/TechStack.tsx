"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiPython, SiJavascript, SiTypescript, SiReact, SiNodedotjs,
  SiPhp, SiGnubash, SiDocker, SiKubernetes, SiAnsible,
  SiGooglecloud, SiTerraform, SiMysql, SiPostgresql, SiLinux,
  SiTensorflow, SiOllama, SiPytorch, SiHuggingface, SiFlutter,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface TechItem {
  name: string;
  Icon: IconType;
}

const row1: TechItem[] = [
  { name: "Python", Icon: SiPython },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "PHP", Icon: SiPhp },
  { name: "Bash", Icon: SiGnubash },
  { name: "Docker", Icon: SiDocker },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "Ansible", Icon: SiAnsible },
];

const row2: TechItem[] = [
  { name: "Ollama", Icon: SiOllama },
  { name: "PyTorch", Icon: SiPytorch },
  { name: "GCP", Icon: SiGooglecloud },
  { name: "Terraform", Icon: SiTerraform },
  { name: "Hugging Face", Icon: SiHuggingface },
  { name: "MySQL", Icon: SiMysql },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Linux", Icon: SiLinux },
  { name: "TensorFlow", Icon: SiTensorflow },
  { name: "Flutter", Icon: SiFlutter },
];

function MarqueeRow({ items, direction }: { items: TechItem[]; direction: "left" | "right" }) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee-container overflow-hidden py-2`}>
      <div className={`marquee-track marquee-${direction}`}>
        {doubled.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex items-center gap-2 px-4 py-2 mx-2 rounded-lg border transition-colors duration-150 cursor-default shrink-0"
            style={{
              background: "var(--bg-900)",
              border: "1px solid rgba(255,255,255,0.06)",
              color: "var(--text-secondary)",
            }}
            data-hover
          >
            <item.Icon size={18} />
            <span className="text-sm font-medium whitespace-nowrap">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 px-4"
      >
        <p
          className="text-xs uppercase tracking-widest font-semibold mb-3"
          style={{ color: "var(--accent)" }}
        >
          Toolbox
        </p>
        <h2 className="font-syne font-bold text-3xl md:text-4xl text-[#f0f0f0]">
          Technologies I Work With
        </h2>
      </motion.div>

      <div className="space-y-3">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>
    </section>
  );
}
