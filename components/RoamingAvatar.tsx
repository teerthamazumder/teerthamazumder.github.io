"use client";

import { useEffect, useRef } from "react";

type State = "walking" | "running" | "jumping" | "idle" | "sitting";

export default function RoamingAvatar() {
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const leftLegRef  = useRef<SVGGElement>(null);
  const rightLegRef = useRef<SVGGElement>(null);
  const leftArmRef  = useRef<SVGGElement>(null);
  const rightArmRef = useRef<SVGGElement>(null);
  const bubbleRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    /* ── state ── */
    let posX = window.innerWidth  * 0.5;
    let posY = window.innerHeight * 0.35;
    let targetX = posX, targetY = posY;
    let jumpSX = posX, jumpSY = posY;
    let jumpProgress = 0;
    let animPhase = 0;
    let facingLeft = false;
    let state: State = "idle";
    let idlePhase = 0;
    let rafId: number;
    let nextTimer: ReturnType<typeof setTimeout>;
    let bubbleTimer: ReturnType<typeof setTimeout>;

    /* ── limb helpers ── */
    const setLimbs = (angle: number) => {
      if (leftLegRef.current)  leftLegRef.current.style.transform  = `rotate(${angle}deg)`;
      if (rightLegRef.current) rightLegRef.current.style.transform = `rotate(${-angle}deg)`;
      if (leftArmRef.current)  leftArmRef.current.style.transform  = `rotate(${-angle * 1.1}deg)`;
      if (rightArmRef.current) rightArmRef.current.style.transform = `rotate(${angle * 1.1}deg)`;
    };
    const resetLimbs = () => {
      [leftLegRef, rightLegRef, leftArmRef, rightArmRef].forEach((r) => {
        if (r.current) r.current.style.transform = "rotate(0deg)";
      });
    };

    /* ── speech bubble ── */
    const QUIPS = ["Hi! 👋", "Let's go!", "⚡ Fast!", "🔒 Secure", "☁️ Cloud", "🤖 AI!", "✨"];
    let quipIndex = 0;
    const showBubble = (text?: string) => {
      if (!bubbleRef.current) return;
      bubbleRef.current.textContent = text ?? QUIPS[quipIndex++ % QUIPS.length];
      bubbleRef.current.style.opacity = "1";
      clearTimeout(bubbleTimer);
      bubbleTimer = setTimeout(() => {
        if (bubbleRef.current) bubbleRef.current.style.opacity = "0";
      }, 1800);
    };

    /* ── target picking ── */
    const getTargets = (): { x: number; y: number; label: string }[] => {
      const sel = [
        "h1","h2","h3","h4",
        "nav a","nav button",
        "section p:first-of-type",
        ".font-syne",
        "button","a",
        "span[class*='rounded-full']",
        "li",
      ].join(",");
      const out: { x: number; y: number; label: string }[] = [];
      document.querySelectorAll(sel).forEach((el) => {
        const r = el.getBoundingClientRect();
        if (
          r.width > 20 && r.height > 8 &&
          r.top > 60 && r.bottom < window.innerHeight - 20 &&
          r.left > 20 && r.right < window.innerWidth - 20
        ) {
          out.push({
            x: r.left + r.width  * 0.5,
            y: r.top  + 2,
            label: (el.textContent ?? "").trim().slice(0, 20),
          });
        }
      });
      return out;
    };

    const pickTarget = () => {
      const targets = getTargets();
      if (targets.length === 0) {
        // Wander randomly around the viewport
        targetX = 80 + Math.random() * (window.innerWidth  - 160);
        targetY = 80 + Math.random() * (window.innerHeight - 160);
        state = "running";
        return;
      }
      const pick = targets[Math.floor(Math.random() * targets.length)];
      const dist  = Math.hypot(pick.x - posX, pick.y - posY);
      targetX = pick.x;
      targetY = pick.y;

      if (dist > 350) {
        jumpSX = posX; jumpSY = posY;
        jumpProgress = 0;
        state = "jumping";
        if (Math.random() < 0.4) showBubble(pick.label || undefined);
      } else {
        state = dist > 140 ? "running" : "walking";
      }
    };

    /* ── main loop ── */
    const loop = () => {
      const dx = targetX - posX;
      const dy = targetY - posY;
      const dist = Math.hypot(dx, dy);

      switch (state) {
        case "jumping": {
          jumpProgress += 0.022;
          if (jumpProgress >= 1) {
            jumpProgress = 1;
            posX = targetX; posY = targetY;
            state = "sitting";
            resetLimbs();
            nextTimer = setTimeout(() => { pickTarget(); showBubble(); }, 1800 + Math.random() * 1500);
          } else {
            posX = jumpSX + (targetX - jumpSX) * jumpProgress;
            const arc = Math.sin(jumpProgress * Math.PI) * Math.min(180, Math.hypot(targetX - jumpSX, targetY - jumpSY) * 0.45);
            posY = jumpSY + (targetY - jumpSY) * jumpProgress - arc;
            animPhase += 0.32;
            setLimbs(Math.sin(animPhase) * 38);
          }
          break;
        }
        case "running": {
          posX += dx * 0.055;
          posY += dy * 0.055;
          animPhase += 0.26;
          setLimbs(Math.sin(animPhase) * 36);
          if (dist < 12) {
            state = "sitting";
            resetLimbs();
            nextTimer = setTimeout(() => { pickTarget(); showBubble(); }, 2000 + Math.random() * 1500);
          }
          break;
        }
        case "walking": {
          posX += dx * 0.032;
          posY += dy * 0.032;
          animPhase += 0.14;
          setLimbs(Math.sin(animPhase) * 28);
          if (dist < 8) {
            state = "sitting";
            resetLimbs();
            nextTimer = setTimeout(() => { pickTarget(); showBubble(); }, 2500 + Math.random() * 2000);
          }
          break;
        }
        case "sitting":
        case "idle": {
          // Gentle idle bob
          idlePhase += 0.04;
          const bob = Math.sin(idlePhase) * 2.5;
          posY += (targetY + bob - posY) * 0.12;
          // Subtle arm sway
          if (leftArmRef.current)  leftArmRef.current.style.transform  = `rotate(${Math.sin(idlePhase) * 8}deg)`;
          if (rightArmRef.current) rightArmRef.current.style.transform = `rotate(${-Math.sin(idlePhase) * 8}deg)`;
          break;
        }
      }

      // Flip direction
      if (state !== "idle" && state !== "sitting") {
        const newFacing = dx < -2;
        if (newFacing !== facingLeft) {
          facingLeft = newFacing;
          wrapper.style.transform = `translate(-50%, -100%) scaleX(${facingLeft ? -1 : 1})`;
        }
      }

      wrapper.style.left = `${posX}px`;
      wrapper.style.top  = `${posY}px`;
      rafId = requestAnimationFrame(loop);
    };

    // Kick off after a short delay
    nextTimer = setTimeout(() => { pickTarget(); showBubble("Hi! 👋"); }, 800);
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(nextTimer);
      clearTimeout(bubbleTimer);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className="hidden md:block select-none"
      style={{
        position: "fixed",
        left: "50%",
        top: "35%",
        pointerEvents: "none",
        zIndex: 9997,
        transform: "translate(-50%, -100%) scaleX(1)",
        transition: "transform 0.1s ease",
      }}
    >
      {/* Speech bubble */}
      <div
        ref={bubbleRef}
        style={{
          position: "absolute",
          bottom: "calc(100% + 4px)",
          left: "50%",
          transform: "translateX(-50%)",
          background: "var(--bg-900)",
          border: "1px solid rgba(0,229,192,0.45)",
          borderRadius: 10,
          padding: "3px 10px",
          fontSize: 11,
          color: "var(--accent)",
          whiteSpace: "nowrap",
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          opacity: 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          boxShadow: "0 0 12px rgba(0,229,192,0.2)",
        }}
      />

      <svg
        width="46"
        height="62"
        viewBox="0 0 46 62"
        style={{ overflow: "visible", filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.6))" }}
      >
        {/* Ground shadow */}
        <ellipse cx="23" cy="61" rx="9" ry="2.5" fill="rgba(0,0,0,0.22)" />

        {/* Hair */}
        <path d="M 14 10 Q 16 2 23 1 Q 30 2 32 10 Q 28 5 23 5 Q 18 5 14 10 Z" fill="#92400e" />

        {/* Head */}
        <circle cx="23" cy="11" r="10" fill="#fde68a" />

        {/* Eyes */}
        <circle cx="19.5" cy="10" r="1.8" fill="#1c1c1c" />
        <circle cx="26.5" cy="10" r="1.8" fill="#1c1c1c" />
        <circle cx="20.3" cy="9.2" r="0.7" fill="white" />
        <circle cx="27.3" cy="9.2" r="0.7" fill="white" />

        {/* Smile */}
        <path d="M 19.5 14 Q 23 17 26.5 14" stroke="#b45309" strokeWidth="1.4" fill="none" strokeLinecap="round" />

        {/* Body */}
        <rect x="15" y="21" width="16" height="16" rx="4" fill="#00e5c0" />
        <text x="23" y="32" textAnchor="middle" fontSize="9" fontWeight="800" fill="#050505" fontFamily="Syne,sans-serif">T</text>

        {/* Left arm */}
        <g ref={leftArmRef} style={{ transformOrigin: "15px 23px" }}>
          <line x1="15" y1="23" x2="6" y2="33" stroke="#fde68a" strokeWidth="4" strokeLinecap="round" />
          <circle cx="6" cy="33" r="3" fill="#fde68a" />
        </g>

        {/* Right arm */}
        <g ref={rightArmRef} style={{ transformOrigin: "31px 23px" }}>
          <line x1="31" y1="23" x2="40" y2="33" stroke="#fde68a" strokeWidth="4" strokeLinecap="round" />
          <circle cx="40" cy="33" r="3" fill="#fde68a" />
        </g>

        {/* Left leg */}
        <g ref={leftLegRef} style={{ transformOrigin: "19px 37px" }}>
          <line x1="19" y1="37" x2="15" y2="51" stroke="#1e3a5f" strokeWidth="5" strokeLinecap="round" />
          <ellipse cx="13" cy="52" rx="5" ry="3" fill="#374151" />
        </g>

        {/* Right leg */}
        <g ref={rightLegRef} style={{ transformOrigin: "27px 37px" }}>
          <line x1="27" y1="37" x2="31" y2="51" stroke="#1e3a5f" strokeWidth="5" strokeLinecap="round" />
          <ellipse cx="33" cy="52" rx="5" ry="3" fill="#374151" />
        </g>
      </svg>
    </div>
  );
}
