import React from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Badge, SectionLabel } from "@/components/ui";

export const metadata = { title: "Tournament Schedule" };

type Row = { event: string; date: string; location: string; fee: string; mandatory?: boolean; flagship?: boolean };

const ROWS: Row[] = [
  { event: "WestMech Internal Skill / Driver Bootcamp (MS/HS)", date: "Oct 15 (Sat)", location: "WM, Calgary", fee: "CAD 0", mandatory: true },
  { event: "WestMech Early Season Qualifier (MS/HS)", date: "Oct 18 (Sat)", location: "WM, Calgary", fee: "CAD 120", mandatory: true },
  { event: "WestMech Internal Skill / Driver Bootcamp (MS/HS)", date: "Nov 15 (Sat)", location: "WM, Calgary", fee: "CAD 0" },
  { event: "WestMech November Qualifier (MS/HS)", date: "Nov 22 (Sat)", location: "WM, Calgary", fee: "CAD 120", mandatory: true },
  { event: "STEM Innovation Academy Competition (MS/HS)", date: "Dec 13 (Sat)", location: "Calgary", fee: "CAD 100" },
  { event: "WestMech X'Mas Holiday Competition (MS/HS)", date: "Dec 20 (Sat)", location: "WM, Calgary", fee: "CAD 120" },
  { event: "STEM Collegiate — New Year Reboot (MS/HS)", date: "Jan 10 (Sat)", location: "Edmonton", fee: "CAD 100" },
  { event: "WestMech Mid-Season Challenge (MS/HS)", date: "Jan 17 (Sat)", location: "WM, Calgary", fee: "CAD 120" },
  { event: "WestMech Internal Driver Bootcamp (MS/HS)", date: "Jan 24 (Sat)", location: "WM, Calgary", fee: "CAD 0" },
  { event: "Mecha Mayhem (MS/HS)", date: "Feb 6–8 (F–S)", location: "BMO, Calgary", fee: "CAD 450", flagship: true },
  { event: "WestMech Internal Driver Bootcamp (MS/HS)", date: "Feb 20 (Sat)", location: "WM, Calgary", fee: "CAD 0" },
  { event: "Alberta Provincial (MS/HS) — by qualification", date: "Feb 27 (Sat)", location: "Calgary", fee: "CAD 200" },
  { event: "WestMech V5VRC Push Back Spring Scrimmage", date: "Mar 14 (Sat)", location: "WM, Calgary", fee: "CAD 120" },
  { event: "WestMech V5VRC End-Season Fun Game Scrimmage", date: "Apr 25 (Sat)", location: "WM, Calgary", fee: "CAD 120" },
];

const th: React.CSSProperties = {
  textAlign: "left",
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "var(--ink-3)",
  fontWeight: 400,
  padding: "0 16px 12px",
  borderBottom: "1px solid var(--line-strong)",
  whiteSpace: "nowrap",
};

const td: React.CSSProperties = {
  padding: "14px 16px",
  borderBottom: "1px solid var(--line)",
  font: "var(--text-body-sm)",
  color: "var(--ink-2)",
  verticalAlign: "top",
};

export default function TournamentPage() {
  return (
    <>
      <PageHeader
        label="2025 – 2026 Season"
        title="Tournament Schedule"
        blurb="Alberta tournaments, plus West Coast and North American signature events."
      />

      <section className="wm-container" style={{ padding: "64px var(--page-pad)", display: "flex", flexDirection: "column", gap: 24 }}>
        <SectionLabel>Alberta schedule</SectionLabel>
        <p style={{ margin: 0, font: "var(--text-body-sm)", color: "var(--ink-3)", maxWidth: "70ch" }}>
          Events marked <span style={{ color: "var(--azure)", fontWeight: 700 }}>*</span> are mandatory for all WestMech
          teams. We encourage every team to participate in local tournaments to learn and improve their robotics skills.
        </p>

        <div style={{ overflowX: "auto", border: "1px solid var(--line)", borderRadius: "var(--radius-md)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 640 }}>
            <thead>
              <tr>
                <th style={th}>Event</th>
                <th style={th}>Date</th>
                <th style={th}>Location</th>
                <th style={{ ...th, textAlign: "right" }}>Fee / Team</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr key={i} style={{ background: r.flagship ? "var(--azure-tint)" : "transparent" }}>
                  <td style={{ ...td, color: "var(--ink)", fontWeight: r.flagship ? 600 : 500 }}>
                    {r.event}
                    {r.mandatory && <span style={{ color: "var(--azure)", fontWeight: 700 }}> *</span>}
                    {r.flagship && (
                      <span style={{ marginLeft: 10, display: "inline-block", verticalAlign: "middle" }}>
                        <Badge tone="navy">Flagship</Badge>
                      </span>
                    )}
                  </td>
                  <td style={{ ...td, fontFamily: "var(--font-mono)", fontSize: 12, whiteSpace: "nowrap" }}>{r.date}</td>
                  <td style={td}>{r.location}</td>
                  <td style={{ ...td, textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 12, whiteSpace: "nowrap" }}>{r.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* West coast note */}
      <section style={{ borderTop: "1px solid var(--line)", background: "var(--paper-raised)" }}>
        <div className="wm-container" style={{ padding: "64px var(--page-pad)", display: "flex", flexDirection: "column", gap: 16, maxWidth: 780 }}>
          <SectionLabel>West Coast & North American events</SectionLabel>
          <p style={{ margin: 0, font: "var(--text-body-md)", color: "var(--ink-2)" }}>
            Teams may also participate in regional and international tournaments to compete and learn from top teams
            around the world. These signature events are optional, except the WPRA Early Season game.
          </p>
        </div>
      </section>
    </>
  );
}
