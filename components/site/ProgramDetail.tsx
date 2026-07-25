import React from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Card, Badge, Button, SectionLabel, FigureFrame } from "@/components/ui";

export interface Offering {
  tag: string;
  name: string;
  badge?: string;
  desc: string;
  /** Schedule rows: mono label + detail. */
  schedule?: { k: string; v: string }[];
  /** Bullet list (levels, opportunities, etc.). */
  bullets?: string[];
  /** Cost / pricing lines, emphasized. */
  cost?: string[];
  /** Optional side photo for the offering card. */
  photo?: { src: string; alt: string; caption?: string };
  cta: { label: string; href: string };
}

export interface ProgramDetailProps {
  label: string;
  title: string;
  level: string;
  blurb: string;
  photo: string;
  photoCaption: string;
  offerings: Offering[];
}

function OfferingCard({ o }: { o: Offering }) {
  const body = (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-3)" }}>
            {o.tag}
          </span>
          {o.badge && <Badge tone="azure">{o.badge}</Badge>}
        </div>
        <h3 style={{ margin: 0, font: "var(--text-h3)", color: "var(--ink)" }}>{o.name}</h3>
        <p style={{ margin: 0, font: "var(--text-body-md)", color: "var(--ink-2)" }}>{o.desc}</p>

        {o.schedule && (
          <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid var(--line)" }}>
            {o.schedule.map((r) => (
              <div
                key={r.k + r.v}
                className="wm-collapse-sm"
                style={{ display: "grid", gridTemplateColumns: "minmax(0,220px) 1fr", gap: 16, padding: "12px 0", borderBottom: "1px solid var(--line)" }}
              >
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-3)" }}>{r.k}</div>
                <div style={{ font: "var(--text-body-sm)", color: "var(--ink-2)" }}>{r.v}</div>
              </div>
            ))}
          </div>
        )}

        {o.bullets && (
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            {o.bullets.map((b) => (
              <li key={b} style={{ display: "flex", gap: 10, font: "var(--text-body-sm)", color: "var(--ink-2)" }}>
                <span style={{ color: "var(--azure)", fontWeight: 700 }}>—</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {o.cost && (
          <div style={{ display: "flex", flexDirection: "column", gap: 4, padding: "12px 14px", background: "var(--azure-tint)", borderRadius: "var(--radius-sm)" }}>
            {o.cost.map((c, i) => (
              <div key={c} style={{ font: "var(--text-body-sm)", fontWeight: i === 0 ? 600 : 400, color: i === 0 ? "var(--azure-press)" : "var(--ink-2)" }}>
                {c}
              </div>
            ))}
          </div>
        )}

        <div>
          <Button variant={o.cta.href.startsWith("mailto") ? "secondary" : "accent"} href={o.cta.href} target={o.cta.href.startsWith("http") ? "_blank" : undefined} rel={o.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}>
            {o.cta.label}
          </Button>
        </div>
      </div>
  );

  if (!o.photo) {
    return <Card padding={26}>{body}</Card>;
  }

  return (
    <Card padding={26}>
      <div className="wm-collapse" style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 28, alignItems: "start" }}>
        {body}
        <FigureFrame src={o.photo.src} alt={o.photo.alt} caption={o.photo.caption} height={300} />
      </div>
    </Card>
  );
}

export function ProgramDetail({ label, title, level, blurb, photo, photoCaption, offerings }: ProgramDetailProps) {
  return (
    <>
      <PageHeader label={label} title={title} blurb={blurb}>
        <div style={{ marginTop: 4 }}>
          <Badge tone="neutral">{level}</Badge>
        </div>
      </PageHeader>

      <section className="wm-container" style={{ padding: "56px var(--page-pad)" }}>
        <FigureFrame src={photo} alt={title} caption={photoCaption} height={340} />
      </section>

      <section className="wm-container" style={{ padding: "0 var(--page-pad) 80px", display: "flex", flexDirection: "column", gap: 28 }}>
        <SectionLabel>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
            What we offer
            <Badge tone="azure">{offerings.length}</Badge>
          </span>
        </SectionLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {offerings.map((o) => (
            <OfferingCard key={o.name} o={o} />
          ))}
        </div>

        <div style={{ marginTop: 12 }}>
          <Button variant="ghost" href="/programs">
            ← All programs
          </Button>
        </div>
      </section>
    </>
  );
}
