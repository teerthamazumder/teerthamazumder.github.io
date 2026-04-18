"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown, Download, ArrowRight, Briefcase } from "lucide-react";
import { personal } from "@/data/portfolio";
import ParticleCanvas from "./ParticleCanvas";

export default function Hero() {
  const typewriterSequence = personal.typewriterRoles.flatMap((role) => [role, 2200]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,229,192,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(168,85,247,0.08) 0%, transparent 60%), #050505",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,192,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,192,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Canvas particle animation */}
      <ParticleCanvas />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Role + availability pills */}
        <motion.div variants={itemVariants} className="flex justify-center gap-2 mb-6 flex-wrap">
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold border"
            style={{
              borderColor: "rgba(0,229,192,0.4)",
              color: "var(--accent)",
              background: "rgba(0,229,192,0.08)",
            }}
          >
            Infrastructure & Security Analyst
          </span>
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold border"
            style={{
              borderColor: "rgba(168,85,247,0.4)",
              color: "var(--purple)",
              background: "rgba(168,85,247,0.08)",
            }}
          >
            Software Engineer · AI Specialist
          </span>
          {personal.availableForWork && (
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border"
              style={{
                borderColor: "rgba(34,197,94,0.4)",
                color: "#22c55e",
                background: "rgba(34,197,94,0.08)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{
                  background: "#22c55e",
                  boxShadow: "0 0 6px #22c55e",
                  animation: "ping 1.5s ease-in-out infinite",
                }}
              />
              Available for Work
            </span>
          )}
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={itemVariants}
          className="font-syne font-extrabold text-[#f0f0f0] leading-tight mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Hi, I&apos;m{" "}
          <span
            style={{
              color: "var(--accent)",
              textShadow: "0 0 40px rgba(0,229,192,0.4)",
              fontFamily: "'Times New Roman', Times, serif",
            }}
          >
            {personal.name}
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          variants={itemVariants}
          className="text-xl md:text-2xl text-[#9ca3af] mb-6 font-inter min-h-[2rem]"
        >
          I am a{" "}
          <TypeAnimation
            sequence={typewriterSequence}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ color: "var(--accent)", fontWeight: 600 }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-[#9ca3af] text-base md:text-lg max-w-2xl mx-auto mb-10 font-inter leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-[#050505] transition-all duration-200 hover:scale-105"
            style={{
              background: "var(--accent)",
              boxShadow: "0 0 24px rgba(0,229,192,0.35)",
            }}
          >
            View My Work
            <ArrowRight size={16} />
          </a>
          <a
            href={`mailto:${personal.email}?subject=Hiring Inquiry — ${personal.name}`}
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold border transition-all duration-200 hover:bg-[rgba(168,85,247,0.12)] hover:scale-105"
            style={{ borderColor: "var(--purple)", color: "var(--purple)" }}
          >
            <Briefcase size={16} />
            Hire Me
          </a>
          <a
            href={personal.resume}
            download
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold border transition-all duration-200 hover:bg-[rgba(0,229,192,0.08)] hover:scale-105"
            style={{ borderColor: "rgba(0,229,192,0.5)", color: "var(--accent)" }}
          >
            <Download size={16} />
            Resume
          </a>
        </motion.div>

        {/* Scroll arrow */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
            style={{ color: "var(--accent)", opacity: 0.6 }}
          >
            <ChevronDown size={28} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-[2]"
        style={{ background: "linear-gradient(to bottom, transparent, #050505)" }}
      />
    </section>
  );
}
