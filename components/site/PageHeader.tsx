import React from "react";
import { SectionLabel } from "@/components/ui";

/** Grid-paper page header band used at the top of interior pages. */
export function PageHeader({
  label,
  title,
  blurb,
  children,
}: {
  label: string;
  title: React.ReactNode;
  blurb?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section
      style={{
        backgroundImage: "var(--grid-paper)",
        backgroundSize: "var(--grid-size) var(--grid-size)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        className="wm-container"
        style={{ padding: "72px var(--page-pad) 64px", display: "flex", flexDirection: "column", gap: 20, maxWidth: 820 }}
      >
        <SectionLabel accent rule={false}>
          {label}
        </SectionLabel>
        <h1 style={{ margin: 0, font: "var(--text-display)", letterSpacing: "var(--tracking-tight)" }}>{title}</h1>
        {blurb && (
          <p style={{ margin: 0, font: "var(--text-body-lg)", color: "var(--ink-2)", maxWidth: "52ch" }}>{blurb}</p>
        )}
        {children}
      </div>
    </section>
  );
}

/** Standard interior content section with a section label. */
export function Section({
  label,
  labelAccent = false,
  count,
  children,
  style,
  raised = false,
}: {
  label?: string;
  labelAccent?: boolean;
  count?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  raised?: boolean;
}) {
  return (
    <section
      style={
        raised
          ? { borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", background: "var(--paper-raised)" }
          : undefined
      }
    >
      <div
        className="wm-container"
        style={{ padding: "72px var(--page-pad)", display: "flex", flexDirection: "column", gap: 32, ...style }}
      >
        {label && (
          <SectionLabel accent={labelAccent}>
            {count != null ? (
              <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
                {label}
                {count}
              </span>
            ) : (
              label
            )}
          </SectionLabel>
        )}
        {children}
      </div>
    </section>
  );
}
