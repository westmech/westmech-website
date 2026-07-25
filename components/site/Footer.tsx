import React from "react";

const social = [
  { label: "Instagram", href: "https://www.instagram.com/western_mechatronics/" },
  { label: "LinkedIn", href: "https://ca.linkedin.com/company/western-mechatronics-210y" },
  { label: "YouTube", href: "https://www.youtube.com/@WestMechRobotics" },
];

const hours = [
  ["Mon – Thu", "2 – 9 p.m."],
  ["Friday", "Closed"],
  ["Saturday", "9 a.m. – 3 p.m."],
  ["Sunday", "Closed"],
];

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", background: "var(--paper)" }}>
      <div
        style={{
          maxWidth: "var(--page-max)",
          margin: "0 auto",
          padding: "56px var(--page-pad)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 40,
        }}
      >
        {/* Brand + contact */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Western Mechatronics"
            width={40}
            height={40}
            style={{ height: 40, width: 40, alignSelf: "flex-start", objectFit: "contain" }}
          />
          <p style={{ margin: 0, font: "var(--text-body-sm)", color: "var(--ink-3)", maxWidth: "34ch" }}>
            Western Mechatronics Robotics Club — making robotics accessible to Calgary students from Grade 3 through
            University.
          </p>
        </div>

        {/* Contact */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-3)" }}>
            Contact
          </div>
          <a href="mailto:info@westernmech.ca" style={{ font: "var(--text-body-md)", color: "var(--ink-2)", textDecoration: "none" }}>
            info@westernmech.ca
          </a>
          <a
            href="https://www.google.com/maps?q=4114+Macleod+Trail+SE+Unit+C,+Calgary,+AB"
            target="_blank"
            rel="noopener noreferrer"
            style={{ font: "var(--text-body-md)", color: "var(--ink-2)", textDecoration: "none", lineHeight: 1.5 }}
          >
            4114 Macleod Trail SE Unit C
            <br />
            Calgary, AB T2G 2R7
          </a>
        </div>

        {/* Hours */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-3)" }}>
            Club Hours
          </div>
          {hours.map(([d, t]) => (
            <div key={d} style={{ display: "flex", justifyContent: "space-between", gap: 16, maxWidth: 240, font: "var(--text-body-sm)", color: "var(--ink-2)" }}>
              <span>{d}</span>
              <span style={{ color: "var(--ink-3)" }}>{t}</span>
            </div>
          ))}
        </div>

        {/* Follow */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-3)" }}>
            Follow Us
          </div>
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ font: "var(--text-body-md)", color: "var(--ink-2)", textDecoration: "none" }}
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>

      {/* Baseline */}
      <div style={{ borderTop: "1px solid var(--line)" }}>
        <div
          style={{
            maxWidth: "var(--page-max)",
            margin: "0 auto",
            padding: "20px var(--page-pad)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 12,
            fontFamily: "var(--font-mono)",
            fontSize: 11.5,
            color: "var(--ink-3)",
          }}
        >
          <span>WESTERN MECHATRONICS ROBOTICS CLUB // CALGARY, AB</span>
          <span style={{ flex: 1 }} />
          <span>© {new Date().getFullYear()} Western Mechatronics</span>
        </div>
      </div>
    </footer>
  );
}
