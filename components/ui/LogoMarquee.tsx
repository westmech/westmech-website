"use client";

import React from "react";

export interface LogoMarqueeProps {
  items: string[];
  label?: string;
  speed?: number;
  navy?: boolean;
  style?: React.CSSProperties;
}

/** Infinite logo marquee — text wordmarks, B&W treatment, edge-faded. */
export function LogoMarquee({ items = [], label, speed = 30, navy = false, style }: LogoMarqueeProps) {
  const track = [...items, ...items];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18, ...style }}>
      <style>{`@keyframes wm-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      {label && (
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: 12.5,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: navy ? "var(--on-navy-muted)" : "var(--ink-3)",
            textAlign: "center",
          }}
        >
          {label}
        </div>
      )}
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 64,
            width: "max-content",
            padding: "6px 0",
            animation: `wm-marquee ${speed}s linear infinite`,
          }}
        >
          {track.map((it, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: 17,
                letterSpacing: "0.01em",
                whiteSpace: "nowrap",
                color: navy ? "var(--on-navy-muted)" : "var(--ink-3)",
                filter: "grayscale(1)",
                opacity: 0.85,
              }}
            >
              {it}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export interface RotatingWordProps {
  words: string[];
  interval?: number;
  color?: string;
  style?: React.CSSProperties;
}

/** Rotating headline word — serif italic; smooth crossfade, width eases, descenders never clip. */
export function RotatingWord({
  words = [],
  interval = 2400,
  color = "var(--azure)",
  style,
}: RotatingWordProps) {
  const [i, setI] = React.useState(0);
  const [prev, setPrev] = React.useState<number | null>(null);
  const lastRef = React.useRef(0);
  const measureRef = React.useRef<HTMLSpanElement>(null);
  const [w, setW] = React.useState<number | null>(null);

  React.useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval]);

  // Keep the outgoing word mounted briefly so it can crossfade out.
  React.useEffect(() => {
    if (lastRef.current === i) return;
    setPrev(lastRef.current);
    lastRef.current = i;
    const t = setTimeout(() => setPrev(null), 520);
    return () => clearTimeout(t);
  }, [i]);

  const measure = React.useCallback(() => {
    if (measureRef.current) {
      // getBoundingClientRect is sub-pixel; round up so italic ink never clips.
      setW(Math.ceil(measureRef.current.getBoundingClientRect().width) + 1);
    }
  }, []);

  React.useLayoutEffect(() => {
    measure();
  }, [i, words, measure]);

  React.useEffect(() => {
    if (!document.fonts) return;
    document.fonts.ready.then(measure);
  }, [measure]);

  const serif: React.CSSProperties = {
    fontFamily: "var(--font-serif)",
    fontStyle: "italic",
    fontWeight: 400,
    // Italic glyphs overhang their advance width — pad so the reveal box doesn't clip them.
    paddingRight: "0.12em",
  };

  return (
    <span
      style={{
        display: "inline-block",
        verticalAlign: "bottom",
        position: "relative",
        whiteSpace: "nowrap",
        width: w == null ? "auto" : w,
        // Cancel the inner word's overhang padding externally so following
        // punctuation (e.g. a period) hugs the word instead of gapping.
        marginRight: "-0.12em",
        // Clip horizontally (for the width reveal) but NOT vertically, so
        // descenders like the "g" in "engineers" are never cropped.
        clipPath: "inset(-0.4em 0px -0.4em 0px)",
        transition: "width 340ms var(--ease-out)",
        ...style,
      }}
    >
      <style>{`
        @keyframes wm-word-in { from { opacity: 0; transform: translateY(0.34em); } to { opacity: 1; transform: translateY(0); } }
        @keyframes wm-word-out { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(-0.34em); } }
      `}</style>
      {/* hidden measurer for the current word's width */}
      <span ref={measureRef} style={{ ...serif, position: "absolute", visibility: "hidden", left: 0, top: 0 }}>
        {words[i]}
      </span>
      {/* outgoing word crossfades up and out */}
      {prev !== null && prev !== i && (
        <span
          key={`out-${prev}`}
          aria-hidden="true"
          style={{ ...serif, color, display: "inline-block", position: "absolute", left: 0, top: 0, animation: "wm-word-out 460ms var(--ease-out) forwards" }}
        >
          {words[prev]}
        </span>
      )}
      {/* incoming word (in flow — defines the box height) */}
      <span key={`in-${i}`} style={{ ...serif, color, display: "inline-block", animation: "wm-word-in 460ms var(--ease-out)" }}>
        {words[i]}
      </span>
    </span>
  );
}
