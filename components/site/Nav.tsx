"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Club Programs" },
];

export function Nav() {
  const [open, setOpen] = React.useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        background: "rgba(245,245,242,.85)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <nav
        style={{
          maxWidth: "var(--page-max)",
          margin: "0 auto",
          padding: "0 var(--page-pad)",
          minHeight: 64,
          display: "flex",
          alignItems: "center",
          gap: 28,
        }}
      >
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }} aria-label="Western Mechatronics — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Western Mechatronics" style={{ height: 34, width: "auto", display: "block" }} />
        </Link>

        <div style={{ flex: 1 }} />

        {/* Desktop links */}
        <div className="wm-nav-desktop" style={{ alignItems: "center", gap: 28 }}>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ fontSize: 14, fontWeight: 500, color: "var(--ink-2)", textDecoration: "none" }}
            >
              {l.label}
            </Link>
          ))}
          <Button variant="accent" size="sm" href="/programs">
            Join a Program
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="wm-nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{
            appearance: "none",
            background: "transparent",
            border: "1.5px solid var(--line)",
            borderRadius: "var(--radius-md)",
            padding: "7px 12px",
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: 13,
            color: "var(--ink)",
            cursor: "pointer",
          }}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="wm-nav-mobile"
          style={{
            borderTop: "1px solid var(--line)",
            background: "var(--paper)",
            padding: "12px var(--page-pad) 20px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "var(--ink)",
                textDecoration: "none",
                padding: "10px 0",
                borderBottom: "1px solid var(--line)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <div style={{ marginTop: 12 }}>
            <Button variant="accent" size="md" href="/programs" onClick={() => setOpen(false)}>
              Join a Program
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
