import React from "react";

export interface SectionLabelProps {
  children?: React.ReactNode;
  accent?: boolean;
  rule?: boolean;
  navy?: boolean;
  style?: React.CSSProperties;
}

/** Uppercase mono-ish section label with hairline rule. */
export function SectionLabel({
  children,
  accent = false,
  rule = true,
  navy = false,
  style,
}: SectionLabelProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, ...style }}>
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize: 12.5,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          color: accent ? "var(--azure)" : navy ? "var(--on-navy-muted)" : "var(--ink-3)",
        }}
      >
        {children}
      </span>
      {rule && (
        <span
          style={{
            flex: 1,
            height: 1,
            background: navy ? "var(--line-on-navy)" : "var(--line)",
          }}
        />
      )}
    </div>
  );
}
