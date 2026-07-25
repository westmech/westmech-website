"use client";

import React from "react";

export interface Partner {
  name: string;
  src: string;
}

/** Smooth, seamless infinite scroll of black partner logos. */
export function PartnerMarquee({
  label = "Our Partners",
  items,
  speed = 48,
  height = 34,
  gap = 72,
}: {
  label?: string;
  items: Partner[];
  speed?: number;
  height?: number;
  gap?: number;
}) {
  const track = [...items, ...items];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <style>{`
        @keyframes wm-partners { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .wm-partners-track { animation: wm-partners ${speed}s linear infinite; }
        .wm-partners-mask:hover .wm-partners-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .wm-partners-track { animation: none; } }
      `}</style>

      {label && (
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: 12.5,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--ink-3)",
            textAlign: "center",
          }}
        >
          {label}
        </div>
      )}

      <div
        className="wm-partners-mask"
        style={{
          overflow: "hidden",
          position: "relative",
          maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div
          className="wm-partners-track"
          style={{ display: "flex", alignItems: "center", gap, width: "max-content", padding: "6px 0" }}
        >
          {track.map((p, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={p.src}
              alt={p.name}
              aria-hidden={i >= items.length ? "true" : undefined}
              style={{ height, width: "auto", display: "block", flexShrink: 0, opacity: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
