import React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/site/PageHeader";
import { Button, Badge, SectionLabel, FigureFrame } from "@/components/ui";

export const metadata = { title: "Club Programs" };

const TRACKS: {
  num: string;
  name: string;
  level: string;
  grade: string;
  desc: string;
  href: string;
  photo: string;
}[] = [
  {
    num: "01",
    name: "VEX IQ",
    level: "Elementary School",
    grade: "Grades 3 – 7",
    desc: "Guided weekly sessions where students learn to build, code, and drive a VEX IQ robot in a supportive, hands-on setting.",
    href: "/programs/vex-iq",
    photo: "/photos/IQ photos/iq2.avif",
  },
  {
    num: "02",
    name: "VEX V5",
    level: "Middle & High School",
    grade: "Grades 7+",
    desc: "Students design, build, and code competitive V5 robots and compete in VEX Robotics Competition tournaments.",
    href: "/programs/vex-v5",
    photo: "/photos/building.jpg",
  },
  {
    num: "03",
    name: "VEX U",
    level: "University",
    grade: "University students",
    desc: "Advanced teams engineer highly competitive robots and compete toward the VEX Robotics World Championship.",
    href: "/programs/vex-u",
    photo: "/photos/robot-rodeo.jpg",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        label="Club Programs"
        title="Robotics for every level."
        blurb="Build the next generation of engineers — from Grade 3 all the way to University. Three competitive tracks, plus camps and workshops throughout the year."
      >
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 4 }}>
          <Button variant="accent" size="lg" href="#tracks">
            Explore programs
          </Button>
        </div>
      </PageHeader>

      {/* Tracks */}
      <section id="tracks" className="wm-container" style={{ padding: "72px var(--page-pad)", display: "flex", flexDirection: "column", gap: 32 }}>
        <SectionLabel>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
            Competitive tracks
            <Badge tone="azure">3 programs</Badge>
          </span>
        </SectionLabel>
        <div className="wm-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {TRACKS.map((t) => (
            <Link key={t.name} href={t.href} style={{ textDecoration: "none", color: "inherit", display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", overflow: "hidden", background: "var(--paper-raised)", width: "100%" }}>
                <FigureFrame src={t.photo} alt={t.name} height={200} style={{ gap: 0 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "4px 20px 22px" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-3)" }}>
                    {t.num} · {t.name}
                  </div>
                  <div style={{ font: "var(--text-h3)", color: "var(--ink)" }}>{t.level}</div>
                  <Badge>{t.grade}</Badge>
                  <p style={{ margin: "4px 0 0", font: "var(--text-body-sm)", color: "var(--ink-2)" }}>{t.desc}</p>
                  <span style={{ marginTop: 4, font: "var(--text-body-sm)", fontWeight: 600, color: "var(--azure)" }}>Learn more →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Watch us compete — hidden while the tournament schedule page is offline.
      <section style={{ background: "linear-gradient(160deg, var(--navy), var(--navy-deep))", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "var(--grid-navy)", backgroundSize: "var(--grid-size) var(--grid-size)" }} />
        <div className="wm-container wm-collapse" style={{ position: "relative", padding: "64px var(--page-pad)", display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 40, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <SectionLabel navy>Come watch us compete</SectionLabel>
            <h2 style={{ margin: 0, font: "var(--text-h2)", letterSpacing: "-0.015em", color: "var(--on-navy)" }}>
              See our teams on the competition floor.
            </h2>
            <p style={{ margin: 0, font: "var(--text-body-md)", color: "var(--on-navy-muted)", maxWidth: "44ch" }}>
              From local qualifiers to Canada&apos;s largest VEX tournament — the full 2025–2026 schedule is online.
            </p>
          </div>
          <div>
            <Button variant="accent" size="lg" href="/tournament">
              Tournament schedule →
            </Button>
          </div>
        </div>
      </section>
      */}
    </>
  );
}
