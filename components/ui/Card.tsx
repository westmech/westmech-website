"use client";

import React from "react";

export interface CardProps {
  padding?: number;
  hover?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Surface card — white on paper, hairline border, faint shadow. */
export function Card({ padding = 24, hover = false, children, style }: CardProps) {
  const [h, setH] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: "var(--surface-card, var(--paper-raised))",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-md)",
        boxShadow: hover && h ? "var(--shadow-raised)" : "var(--shadow-card)",
        transition: "box-shadow var(--dur-med) var(--ease-out)",
        padding,
        boxSizing: "border-box",
        fontFamily: "var(--font-sans)",
        color: "var(--ink)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
