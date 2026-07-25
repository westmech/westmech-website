import React from "react";

type Tone = "neutral" | "azure" | "navy" | "ok" | "warn" | "danger";

const tones: Record<Tone, React.CSSProperties> = {
  neutral: { background: "var(--paper-sunken)", color: "var(--ink-2)", border: "1px solid var(--line)" },
  azure: { background: "var(--azure-tint)", color: "var(--azure-press)", border: "1px solid transparent" },
  navy: { background: "var(--navy)", color: "var(--on-navy)", border: "1px solid transparent" },
  ok: { background: "var(--ok-tint)", color: "var(--ok)", border: "1px solid transparent" },
  warn: { background: "var(--warn-tint)", color: "var(--warn)", border: "1px solid transparent" },
  danger: { background: "var(--danger-tint)", color: "var(--danger)", border: "1px solid transparent" },
};

/** Small status/count pill. */
export function Badge({
  tone = "neutral",
  children,
  style,
}: {
  tone?: Tone;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 12,
        lineHeight: 1.2,
        padding: "4px 10px",
        borderRadius: "var(--radius-pill)",
        ...tones[tone],
        ...style,
      }}
    >
      {children}
    </span>
  );
}

/** Mono metadata tag, square corners — spec-sheet style. */
export function Tag({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-mono)",
        fontSize: 11.5,
        lineHeight: 1.2,
        color: "var(--ink-3)",
        background: "var(--paper)",
        border: "1px solid var(--line)",
        padding: "4px 8px",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
