"use client";

import { useEffect, useRef } from "react";

export default function RunningAvatar() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const leftLegRef = useRef<SVGGElement>(null);
  const rightLegRef = useRef<SVGGElement>(null);
  const leftArmRef = useRef<SVGGElement>(null);
  const rightArmRef = useRef<SVGGElement>(null);
  const speechRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let posX = -200;
    let posY = -200;
    let mouseX = -200;
    let mouseY = -200;
    let facingLeft = false;
    let animPhase = 0;
    let isRunning = false;
    let idleTimer: ReturnType<typeof setTimeout>;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      if (mouseX === -200) {
        posX = e.clientX;
        posY = e.clientY;
      }
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    const setLimbs = (phase: number) => {
      const legAngle = Math.sin(phase) * 38;
      const armAngle = Math.sin(phase) * 45;
      if (leftLegRef.current)  leftLegRef.current.style.transform  = `rotate(${legAngle}deg)`;
      if (rightLegRef.current) rightLegRef.current.style.transform = `rotate(${-legAngle}deg)`;
      if (leftArmRef.current)  leftArmRef.current.style.transform  = `rotate(${-armAngle}deg)`;
      if (rightArmRef.current) rightArmRef.current.style.transform = `rotate(${armAngle}deg)`;
    };

    const resetLimbs = () => {
      [leftLegRef, rightLegRef, leftArmRef, rightArmRef].forEach((r) => {
        if (r.current) r.current.style.transform = "rotate(0deg)";
      });
    };

    const animate = () => {
      const dx = mouseX - posX;
      const dy = mouseY - posY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 4) {
        posX += dx * 0.09;
        posY += dy * 0.09;

        // Flip direction
        const shouldFaceLeft = dx < 0;
        if (shouldFaceLeft !== facingLeft) {
          facingLeft = shouldFaceLeft;
          wrapper.style.transform = `translate(-50%, -110%) scaleX(${facingLeft ? -1 : 1})`;
        }

        // Running animation
        animPhase += 0.28;
        setLimbs(animPhase);
        isRunning = true;

        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => {
          isRunning = false;
          resetLimbs();
        }, 120);
      }

      wrapper.style.left = `${posX}px`;
      wrapper.style.top  = `${posY}px`;

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className="hidden md:block select-none"
      style={{
        position: "fixed",
        left: -200,
        top: -200,
        pointerEvents: "none",
        zIndex: 9998,
        transform: "translate(-50%, -110%) scaleX(1)",
        transition: "transform 0.08s ease",
      }}
    >
      {/* Speech bubble — shown via CSS on hover state (always visible here as decoration) */}
      <div
        ref={speechRef}
        style={{
          position: "absolute",
          top: -28,
          left: "50%",
          transform: "translateX(-50%)",
          background: "var(--bg-800)",
          border: "1px solid rgba(0,229,192,0.4)",
          borderRadius: 8,
          padding: "2px 8px",
          fontSize: 10,
          color: "var(--accent)",
          whiteSpace: "nowrap",
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          pointerEvents: "none",
          opacity: 0,
        }}
      >
        Hi! 👋
      </div>

      <svg
        width="48"
        height="64"
        viewBox="0 0 48 64"
        style={{ overflow: "visible", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))" }}
      >
        {/* Ground shadow */}
        <ellipse cx="24" cy="63" rx="10" ry="3" fill="rgba(0,0,0,0.2)" />

        {/* Hair */}
        <path
          d="M 15 11 Q 17 2 24 1 Q 31 2 33 11 Q 29 6 24 6 Q 19 6 15 11 Z"
          fill="#92400e"
        />

        {/* Head */}
        <circle cx="24" cy="12" r="10" fill="#fde68a" />

        {/* Eyes */}
        <circle cx="20" cy="11" r="1.8" fill="#1c1c1c" />
        <circle cx="28" cy="11" r="1.8" fill="#1c1c1c" />
        {/* Eye shine */}
        <circle cx="21" cy="10.2" r="0.7" fill="white" />
        <circle cx="29" cy="10.2" r="0.7" fill="white" />

        {/* Smile */}
        <path
          d="M 20 15 Q 24 18.5 28 15"
          stroke="#b45309"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        />

        {/* Body — accent-colored shirt */}
        <rect x="16" y="22" width="16" height="16" rx="4" fill="#00e5c0" />
        {/* "T" on shirt */}
        <text
          x="24"
          y="33"
          textAnchor="middle"
          fontSize="9"
          fontWeight="800"
          fill="#050505"
          fontFamily="Syne, sans-serif"
        >
          T
        </text>

        {/* Left arm */}
        <g ref={leftArmRef} style={{ transformOrigin: "16px 24px" }}>
          <line
            x1="16" y1="24" x2="7" y2="34"
            stroke="#fde68a" strokeWidth="4" strokeLinecap="round"
          />
          <circle cx="7" cy="34" r="3" fill="#fde68a" />
        </g>

        {/* Right arm */}
        <g ref={rightArmRef} style={{ transformOrigin: "32px 24px" }}>
          <line
            x1="32" y1="24" x2="41" y2="34"
            stroke="#fde68a" strokeWidth="4" strokeLinecap="round"
          />
          <circle cx="41" cy="34" r="3" fill="#fde68a" />
        </g>

        {/* Left leg */}
        <g ref={leftLegRef} style={{ transformOrigin: "20px 38px" }}>
          <line
            x1="20" y1="38" x2="16" y2="52"
            stroke="#1e3a5f" strokeWidth="5" strokeLinecap="round"
          />
          {/* Left shoe */}
          <ellipse cx="14" cy="53" rx="5" ry="3" fill="#374151" />
        </g>

        {/* Right leg */}
        <g ref={rightLegRef} style={{ transformOrigin: "28px 38px" }}>
          <line
            x1="28" y1="38" x2="32" y2="52"
            stroke="#1e3a5f" strokeWidth="5" strokeLinecap="round"
          />
          {/* Right shoe */}
          <ellipse cx="34" cy="53" rx="5" ry="3" fill="#374151" />
        </g>
      </svg>
    </div>
  );
}
