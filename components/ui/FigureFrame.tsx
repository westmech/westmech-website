import React from "react";

/** Fractal-noise film grain, layered at low opacity with mix-blend overlay. */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")";

export interface FigureFrameProps {
  src?: string;
  alt?: string;
  caption?: string;
  height?: number;
  /** Duotone treatment for navy sections (luminosity blend). */
  navy?: boolean;
  /** Full-color break — reserve for payoff moments (match day, trophies, reveals). */
  color?: boolean;
  /** CSS object-position for the photo crop (default "center"). */
  objectPosition?: string;
  placeholder?: string;
  style?: React.CSSProperties;
}

/**
 * Textbook-plate figure frame: 1px ink border, film-grain photo treatment,
 * mono caption below. Default = B&W grain. color = full-color break. navy = duotone.
 */
export function FigureFrame({
  src,
  alt = "",
  caption,
  height = 220,
  navy = false,
  color = false,
  objectPosition,
  placeholder,
  style,
}: FigureFrameProps) {
  // Content figures render in full color by default; navy sections stay duotone.
  // (The `color` prop is retained for explicit callers but no longer changes the paper case.)
  void color;
  const filter = navy
    ? "var(--photo-filter-duotone, grayscale(1) contrast(1.1) brightness(1.08))"
    : "var(--photo-filter-color, contrast(1.05) saturate(1.12))";

  return (
    <figure style={{ margin: 0, display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--font-sans)", ...style }}>
      <div
        style={{
          height,
          overflow: "hidden",
          position: "relative",
          boxSizing: "border-box",
          border: navy ? "none" : "1px solid var(--line-strong)",
          background: navy ? "var(--navy)" : "var(--paper-sunken)",
        }}
      >
        {src ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition,
                filter,
                display: "block",
                mixBlendMode: navy ? "luminosity" : "normal",
              }}
            />
            {/* grain */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: navy ? 0.45 : 0.35,
                mixBlendMode: "overlay",
                backgroundImage: GRAIN,
              }}
            />
            {/* soft vignette (paper frames only) */}
            {!navy && <div style={{ position: "absolute", inset: 0, boxShadow: "var(--photo-vignette)" }} />}
          </>
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: navy
                ? "repeating-linear-gradient(45deg, rgba(245,245,242,.08), rgba(245,245,242,.08) 8px, transparent 8px, transparent 16px)"
                : "repeating-linear-gradient(45deg, var(--paper-sunken), var(--paper-sunken) 8px, var(--paper) 8px, var(--paper) 16px)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11.5,
                color: navy ? "var(--on-navy-muted)" : "var(--ink-3)",
                background: navy ? "var(--navy-deep)" : "var(--paper)",
                border: navy ? "1px solid var(--line-on-navy)" : "1px solid var(--line)",
                padding: "4px 8px",
              }}
            >
              [ {placeholder || "b&w photo"} ]
            </span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--ink-3)" }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
