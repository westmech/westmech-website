"use client";

import React from "react";

export interface TabsProps {
  items: string[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}

/** Underline tabs — quiet, Notion-ish. */
export function Tabs({ items = [], value, defaultValue, onChange, style }: TabsProps) {
  const [internal, setInternal] = React.useState<string>(defaultValue ?? items[0]);
  const active = value ?? internal;
  const [hovered, setHovered] = React.useState<string | null>(null);

  return (
    <div
      style={{
        display: "flex",
        gap: 4,
        borderBottom: "1px solid var(--line)",
        fontFamily: "var(--font-sans)",
        ...style,
      }}
    >
      {items.map((it) => {
        const isActive = it === active;
        const isHover = it === hovered;
        return (
          <button
            key={it}
            onClick={() => {
              setInternal(it);
              onChange?.(it);
            }}
            onMouseEnter={() => setHovered(it)}
            onMouseLeave={() => setHovered(null)}
            style={{
              appearance: "none",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              fontWeight: isActive ? 600 : 500,
              color: isActive ? "var(--ink)" : isHover ? "var(--ink-2)" : "var(--ink-3)",
              padding: "10px 14px",
              marginBottom: -1,
              borderBottom: isActive ? "2px solid var(--ink)" : "2px solid transparent",
              transition: "color var(--dur-fast) var(--ease-out)",
            }}
          >
            {it}
          </button>
        );
      })}
    </div>
  );
}
