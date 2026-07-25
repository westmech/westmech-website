import React from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Card, Button, SectionLabel } from "@/components/ui";

export const metadata = { title: "Partnership" };

const CONTACT = [
  { k: "Phone", v: "587-888-7302", href: "tel:+15878887302" },
  { k: "Email", v: "justin@westernmech.ca", href: "mailto:justin@westernmech.ca?subject=Partnership%20Inquiry" },
];

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        label="Partnership"
        title="Partner with us."
        blurb="Together, we can provide STEM and robotics tools for the next generation of leaders."
      />

      <section className="wm-container" style={{ padding: "72px var(--page-pad)" }}>
        <div className="wm-collapse" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionLabel>Why partner</SectionLabel>
            <h2 style={{ margin: 0, font: "var(--text-h2)", letterSpacing: "-0.015em" }}>
              Put robotics in the hands of Calgary students.
            </h2>
            <p style={{ margin: 0, font: "var(--text-body-md)", color: "var(--ink-2)" }}>
              Western Mechatronics runs Canada&apos;s largest VEX tournament and Calgary&apos;s biggest robotics-education
              facility. Partnering with us means directly supporting hands-on STEM education — from Grade 3 first-timers to
              university teams competing on the world stage.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Brand visibility at Mecha Mayhem and WestMech tournaments",
                "Support summer camps, Girl Powered, and community outreach",
                "Help fund scholarships for standout student engineers",
              ].map((b) => (
                <li key={b} style={{ display: "flex", gap: 10, font: "var(--text-body-sm)", color: "var(--ink-2)" }}>
                  <span style={{ color: "var(--azure)", fontWeight: 700 }}>—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card padding={28}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <SectionLabel accent rule={false}>
                Let&apos;s talk
              </SectionLabel>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-3)" }}>
                Partnership inquiries
              </div>
              <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid var(--line)" }}>
                {CONTACT.map((c) => (
                  <div key={c.k} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "14px 0", borderBottom: "1px solid var(--line)" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-3)" }}>{c.k}</span>
                    <a href={c.href} style={{ font: "var(--text-body-md)", color: "var(--ink)", textDecoration: "none", fontWeight: 500 }}>
                      {c.v}
                    </a>
                  </div>
                ))}
              </div>
              <Button variant="accent" size="lg" href="mailto:justin@westernmech.ca?subject=Partnership%20Package%20Request">
                Request the partnership package →
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
