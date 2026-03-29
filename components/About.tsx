"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { personal, stats, photos } from "@/data/portfolio";

const SLIDE_INTERVAL = 12000; // 12 seconds

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(0, { stiffness: 80, damping: 30 });
  const display = useTransform(spring, (v) => Math.round(v));
  const [displayVal, setDisplayVal] = useState(0);

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, spring, value]);

  useEffect(() => {
    const unsub = display.on("change", (v) => setDisplayVal(v));
    return unsub;
  }, [display]);

  return (
    <span ref={ref} style={{ color: "var(--accent)" }}>
      {displayVal}{suffix}
    </span>
  );
}

interface AboutProps {
  id?: string;
}

export default function About({ id }: AboutProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const slideshow = photos.slideshow;

  // Auto-advance every 12 s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideshow.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [slideshow.length]);

  return (
    <section
      id={id}
      ref={ref}
      className="scroll-mt-20 py-24 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — slideshow */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          {/* Circular slideshow with gradient ring */}
          <div className="relative">
            {/* Gradient ring */}
            <div
              className="absolute -inset-[3px] rounded-full"
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--purple))",
                borderRadius: "50%",
              }}
            />
            <div
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden"
              style={{ border: "3px solid #050505" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slideshow[current]}
                    alt={`${personal.name} — photo ${current + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 224px, 288px"
                    priority={current === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot indicators */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
              {slideshow.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to photo ${i + 1}`}
                  className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                  style={{
                    background: i === current ? "var(--accent)" : "rgba(255,255,255,0.25)",
                    transform: i === current ? "scale(1.4)" : "scale(1)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110 hover:border-accent"
              style={{ borderColor: "rgba(0,229,192,0.3)", color: "var(--text-secondary)" }}
            >
              <Mail size={16} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110 hover:border-accent"
              style={{ borderColor: "rgba(0,229,192,0.3)", color: "var(--text-secondary)" }}
            >
              <Github size={16} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110 hover:border-accent"
              style={{ borderColor: "rgba(0,229,192,0.3)", color: "var(--text-secondary)" }}
            >
              <Linkedin size={16} />
            </a>
          </div>
        </motion.div>

        {/* Right — bio + stats */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--accent)" }}>
            About Me
          </p>

          <h2 className="font-syne font-bold text-3xl md:text-4xl text-[#f0f0f0] leading-tight">
            Turning infrastructure & code into{" "}
            <span style={{ color: "var(--accent)" }}>real-world impact</span>
          </h2>

          <p className="text-[#9ca3af] leading-relaxed font-inter">{personal.bio}</p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg p-4 text-center border transition-all duration-200 hover:border-accent/40"
                style={{ background: "var(--bg-900)", borderColor: "rgba(0,229,192,0.15)" }}
              >
                <p className="font-syne font-bold text-2xl md:text-3xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs mt-1 font-inter" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
