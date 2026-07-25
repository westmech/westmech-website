"use client";

import React from "react";

type Variant = "primary" | "accent" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  target?: string;
  rel?: string;
}

/** Western Mechatronics Button — solid ink / azure / outline / ghost. */
export function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  href,
  children,
  style,
  ...rest
}: ButtonProps) {
  const [state, setState] = React.useState<"idle" | "hover" | "press">("idle");

  const sizes: Record<Size, React.CSSProperties> = {
    sm: { padding: "6px 14px", fontSize: 13 },
    md: { padding: "10px 18px", fontSize: 13.5 },
    lg: { padding: "13px 24px", fontSize: 15 },
  };

  const palettes: Record<Variant, Record<string, React.CSSProperties>> = {
    primary: {
      idle: { background: "var(--ink)", color: "var(--paper)", border: "1.5px solid var(--ink)" },
      hover: { background: "#000", color: "var(--paper)", border: "1.5px solid #000" },
      press: { background: "#000", color: "var(--paper)", border: "1.5px solid #000" },
    },
    accent: {
      idle: { background: "var(--azure)", color: "#fff", border: "1.5px solid var(--azure)" },
      hover: { background: "var(--azure-hover)", color: "#fff", border: "1.5px solid var(--azure-hover)" },
      press: { background: "var(--azure-press)", color: "#fff", border: "1.5px solid var(--azure-press)" },
    },
    secondary: {
      idle: { background: "transparent", color: "var(--ink)", border: "1.5px solid var(--line)" },
      hover: { background: "var(--paper-sunken)", color: "var(--ink)", border: "1.5px solid var(--ink-4)" },
      press: { background: "var(--paper-sunken)", color: "var(--ink)", border: "1.5px solid var(--ink)" },
    },
    ghost: {
      idle: { background: "transparent", color: "var(--ink-2)", border: "1.5px solid transparent" },
      hover: { background: "var(--paper-sunken)", color: "var(--ink)", border: "1.5px solid transparent" },
      press: { background: "var(--line)", color: "var(--ink)", border: "1.5px solid transparent" },
    },
  };

  const p = palettes[variant][disabled ? "idle" : state];

  const shared: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    whiteSpace: "nowrap",
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    lineHeight: 1.2,
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "default" : "pointer",
    textDecoration: "none",
    opacity: disabled ? 0.45 : 1,
    transition:
      "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
    ...sizes[size],
    ...p,
    ...style,
  };

  const handlers = {
    onMouseEnter: () => setState("hover"),
    onMouseLeave: () => setState("idle"),
    onMouseDown: () => setState("press"),
    onMouseUp: () => setState("hover"),
  };

  if (href) {
    const { type: _t, ...anchorRest } = rest;
    return (
      <a href={disabled ? undefined : href} style={shared} {...handlers} {...(anchorRest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button disabled={disabled} style={shared} {...handlers} {...rest}>
      {children}
    </button>
  );
}
