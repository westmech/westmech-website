import React from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Card, Badge, Button, SectionLabel, FigureFrame } from "@/components/ui";

export const metadata = { title: "Seasons" };

type Award = { team: string; award: string; highlight?: boolean };

const DIVISIONS: { division: string; program: string; teams: Award[] }[] = [
  {
    division: "High School Division",
    program: "V5",
    teams: [
      { team: "210K", award: "Excellence Award", highlight: true },
      { team: "210C", award: "Skills Champion", highlight: true },
      { team: "210Z", award: "Wait List" },
    ],
  },
  {
    division: "Middle School Division",
    program: "V5",
    teams: [
      { team: "2088K", award: "Tournament Champion / Excellence Award", highlight: true },
      { team: "2088H", award: "Tournament Champion", highlight: true },
      { team: "2088U", award: "Design Award" },
    ],
  },
  {
    division: "Elementary School Division",
    program: "IQ",
    teams: [
      { team: "220A", award: "Teamwork Champion", highlight: true },
      { team: "220C", award: "Teamwork Champion / Excellence Award", highlight: true },
      { team: "220X", award: "Skills Runner-Up" },
    ],
  },
];

const FEATURES: { title: string; body: string; photo: string; caption: string }[] = [
  {
    title: "First overseas Signature Event",
    body: "We're thrilled to share the very first overseas Signature Event for the new Push Back game! Watch the action, see the innovative designs, and get inspired for the exciting season ahead.",
    photo: "/photos/robot-rodeo.jpg",
    caption: "Fig. 02 — Push Back Signature Event",
  },
  {
    title: "Team 220X at 2026 Worlds",
    body: "Team 220X's vlog captures their journey from Calgary to St. Louis — the coolest kids enjoying every second of the World Championship. They came very close to advancing through the division top rankings, showing strong performance and determination throughout.",
    photo: "/photos/rodeo-green.jpg",
    caption: "Fig. 03 — 220X Worlds vlog",
  },
];

export default function SeasonsPage() {
  return (
    <>
      <PageHeader
        label="Seasons"
        title="2026 VEX Worlds."
        blurb="Congratulations to the WestMech teams who qualified for the 2026 VEX Robotics World Championship in St. Louis — across High School, Middle School, and Elementary divisions."
      >
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 4 }}>
          <Button variant="accent" size="lg" href="/tournament">
            Tournament schedule →
          </Button>
        </div>
      </PageHeader>

      {/* Color-break payoff photo */}
      <section className="wm-container" style={{ padding: "56px var(--page-pad)" }}>
        <FigureFrame color src="/photos/rodeo-champion.jpg" alt="WestMech champions" caption="Fig. 01 — champions, 2025–2026 season" height={400} />
      </section>

      {/* Results by division */}
      <section className="wm-container" style={{ padding: "0 var(--page-pad) 72px", display: "flex", flexDirection: "column", gap: 32 }}>
        <SectionLabel>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
            Worlds qualifiers
            <Badge tone="azure">9 teams</Badge>
          </span>
        </SectionLabel>
        <div className="wm-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {DIVISIONS.map((d) => (
            <Card key={d.division} padding={22}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{d.division}</div>
                  <Badge tone="navy">VEX {d.program}</Badge>
                </div>
                <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid var(--line)" }}>
                  {d.teams.map((t) => (
                    <div key={t.team} style={{ display: "flex", alignItems: "baseline", gap: 12, padding: "12px 0", borderBottom: "1px solid var(--line)" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 500, color: t.highlight ? "var(--azure)" : "var(--ink)", width: 56, flexShrink: 0 }}>
                        {t.team}
                      </span>
                      <span style={{ font: "var(--text-body-sm)", color: "var(--ink-2)" }}>{t.award}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Video features */}
      <section style={{ borderTop: "1px solid var(--line)", background: "var(--paper-raised)" }}>
        <div className="wm-container" style={{ padding: "72px var(--page-pad)", display: "flex", flexDirection: "column", gap: 32 }}>
          <SectionLabel>From the season</SectionLabel>
          <div className="wm-collapse" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            {FEATURES.map((f) => (
              <div key={f.title} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <FigureFrame src={f.photo} alt={f.title} caption={f.caption} height={260} />
                <h3 style={{ margin: 0, font: "var(--text-h3)" }}>{f.title}</h3>
                <p style={{ margin: 0, font: "var(--text-body-sm)", color: "var(--ink-2)" }}>{f.body}</p>
                <a
                  href="https://www.youtube.com/@WestMechRobotics"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ font: "var(--text-body-sm)", fontWeight: 600, color: "var(--azure)", textDecoration: "none" }}
                >
                  Watch on YouTube →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
