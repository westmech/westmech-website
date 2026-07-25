import React from "react";
import {
  Button,
  Card,
  Badge,
  SectionLabel,
  FigureFrame,
  RotatingWord,
} from "@/components/ui";
import { JoinForm } from "@/components/site/JoinForm";
import { PartnerMarquee } from "@/components/site/PartnerMarquee";

/** Full-bleed hero background photo — B&W grain, fades to paper. Easily swappable. */
const HERO_PHOTO = "/photos/drill-press.jpg";
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")";

// Partner logos — normalized to black. Priority sponsors lead the marquee.
const PARTNERS = [
  { name: "Google", src: "/photos/partners/google.png" },
  { name: "Calgary Stampede", src: "/photos/partners/calgary-stampede.png" },
  { name: "TC Energy", src: "/photos/partners/tc-energy.png" },
  { name: "Waterloo Engineering", src: "/photos/partners/waterloo.png" },
  { name: "University of Calgary", src: "/photos/partners/university-of-calgary.png" },
  { name: "University of Alberta", src: "/photos/partners/university-of-alberta.png" },
  { name: "SAIT", src: "/photos/partners/sait.png" },
  { name: "Alberta Innovates", src: "/photos/partners/alberta-innovates.png" },
  { name: "Government of Alberta", src: "/photos/partners/government-of-alberta.png" },
  { name: "Tourism Calgary", src: "/photos/partners/tourism-calgary.png" },
  { name: "Garmin", src: "/photos/partners/garmin.png" },
  { name: "Global Convention Services", src: "/photos/partners/global-convention.png" },
  { name: "Encore", src: "/photos/partners/encore.png" },
  { name: "iDesign 365", src: "/photos/partners/idesign365.png" },
  { name: "Shane Homes", src: "/photos/partners/shane-homes.png" },
  { name: "Gong Cha", src: "/photos/partners/gong-cha.png" },
];

// Where some alumni have continued their studies (text wordmarks for now).
const UNIVERSITIES = [
  "University of Waterloo",
  "University of British Columbia",
  "University of Washington",
  "Queen's University",
  "University of Toronto",
  "University of Calgary",
];

const PROGRAMS: {
  num: string;
  name: string;
  grade: string;
  desc: string;
  href: string;
}[] = [
  {
    num: "01",
    name: "Robotics 101",
    grade: "Gr. 4–7",
    desc: "Foundation course covering the basics of robotics. Small class sizes — start your robotics journey with confidence.",
    href: "https://robotics.dreamclass.io/pages/admissions/form/cbypTh",
  },
  {
    num: "02",
    name: "Summer Camps",
    grade: "Gr. 4–7",
    desc: "Immerse your child in robotics with our week-long, introductory summer camps.",
    href: "https://robotics.dreamclass.io/pages/admissions/form/vHPUha",
  },
  {
    num: "03",
    name: "Robotics 101",
    grade: "Gr. 7–12",
    desc: "An introductory course covering the basics of robotics. Offered monthly, small class size. Future engineers start here.",
    href: "https://robotics.dreamclass.io/pages/admissions-v2/form/WZAzYd",
  },
  {
    num: "04",
    name: "Summer Camps",
    grade: "Gr. 7–12",
    desc: "Week-long, introductory summer camps for older students. Build — code — compete.",
    href: "https://robotics.dreamclass.io/pages/admissions/form/sDAMzh",
  },
  {
    num: "05",
    name: "Girl Powered",
    grade: "Gr. 7+",
    desc: "Introductory two-weekend robotics workshops for girls in Grades 7+ each August. Build robots, build confidence.",
    href: "https://www.zeffy.com/en-CA/ticketing/girl-powered--2026",
  },
];

const WHY: { num: string; title: string; body: React.ReactNode }[] = [
  {
    num: "01",
    title: "Real-world skill development",
    body: (
      <>
        Robotics teaches essential STEM skills — <b>coding, engineering, and problem-solving</b> — that prepare
        students for future careers in tech, automation, and innovation.
      </>
    ),
  },
  {
    num: "02",
    title: "Applied learning that sticks",
    body: (
      <>
        Students see how math, science, and physics come to life by <b>building and programming real robots</b>,
        reinforcing classroom knowledge through <b>hands-on experience</b>.
      </>
    ),
  },
  {
    num: "03",
    title: "Build the future, starting now",
    body: (
      <>
        University-level robotics can be learned early through our programs — giving students in robotics and
        engineering <b>a head start</b>.
      </>
    ),
  },
];

const INVOLVEMENT: { code: string; title: string; meta: string; open?: boolean }[] = [
  { code: "R-101", title: "Robotics 101", meta: "Grades 4–12 · monthly intakes", open: true },
  { code: "CAMP", title: "Summer Camps", meta: "Week-long · beginners welcome" },
  { code: "GP-26", title: "Girl Powered", meta: "Grades 7+ · every August" },
  { code: "VEX", title: "Competitive VEX", meta: "VEX IQ · V5 · U teams" },
];

const SECTION_PAD = "88px var(--page-pad)";

export default function Home() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid var(--line)" }}>
        {/* full-bleed background photo → B&W grain → fade to paper */}
        <div style={{ position: "absolute", inset: 0 }} aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_PHOTO}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 32%",
              filter: "var(--photo-filter)",
              display: "block",
            }}
          />
          <div style={{ position: "absolute", inset: 0, backgroundImage: GRAIN, opacity: 0.4, mixBlendMode: "overlay" }} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(245,245,242,0.30) 0%, rgba(245,245,242,0) 24%, rgba(245,245,242,0) 40%, rgba(245,245,242,0.80) 64%, rgba(245,245,242,0.97) 83%, var(--paper) 100%)",
            }}
          />
        </div>

        {/* content anchored to the bottom, over the faded area */}
        <div
          className="wm-container"
          style={{
            position: "relative",
            minHeight: "clamp(600px, 84vh, 840px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "120px var(--page-pad) 56px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 760 }}>
            <SectionLabel accent rule={false}>
              Western Mechatronics — Calgary, AB
            </SectionLabel>
            <h1 style={{ margin: 0, font: "var(--text-display)", letterSpacing: "var(--tracking-tight)" }}>
              Building the next generation of{" "}
              <RotatingWord words={["engineers", "builders", "thinkers", "makers", "innovators", "leaders"]} />.
            </h1>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button variant="accent" size="lg" href="/programs">
                Join a Program
              </Button>
              <Button variant="secondary" size="lg" href="#why">
                Why robotics?
              </Button>
            </div>
          </div>

          <div
            className="wm-hero-tag"
            style={{ position: "absolute", right: "var(--page-pad)", bottom: 60, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-3)" }}
          >
            engineers // builders // thinkers — no experience required
          </div>
        </div>
      </section>

      {/* ======================= PARTNERS MARQUEE ======================= */}
      <div style={{ borderBottom: "1px solid var(--line)", padding: "40px 0" }}>
        <div className="wm-container">
          <PartnerMarquee label="Our Partners" items={PARTNERS} />
        </div>
      </div>

      {/* ==================== EVERY LEVEL → PROGRAMS ==================== */}
      <section style={{ borderBottom: "1px solid var(--line)" }}>
        <div
          className="wm-container wm-collapse"
          style={{
            padding: "64px var(--page-pad)",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 40,
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: "42ch" }}>
            <SectionLabel accent rule={false}>
              Every level
            </SectionLabel>
            <h2 style={{ margin: 0, font: "var(--text-h2)", letterSpacing: "-0.015em" }}>
              Programs for students at every level — from Grade 3 to University.
            </h2>
            <p style={{ margin: 0, font: "var(--text-body-md)", color: "var(--ink-2)" }}>
              Whether it&apos;s a first robot or a university competition team, there&apos;s a place to start and a place
              to grow.
            </p>
          </div>
          <div>
            <Button variant="accent" size="lg" href="#programs">
              See the programs →
            </Button>
          </div>
        </div>
      </section>

      {/* =========================== PROGRAMS =========================== */}
      <section id="programs" className="wm-container" style={{ padding: SECTION_PAD, display: "flex", flexDirection: "column", gap: 32, scrollMarginTop: 80 }}>
        <SectionLabel>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
            Programs
            <Badge tone="azure">5 available</Badge>
          </span>
        </SectionLabel>

        <div
          className="wm-collapse"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
        >
          {PROGRAMS.map((p) => (
            <Card key={p.num + p.name} hover padding={22}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-3)" }}>{p.num}</span>
                  <Badge>{p.grade}</Badge>
                </div>
                <div style={{ font: "var(--text-h3)", color: "var(--ink)" }}>{p.name}</div>
                <div style={{ font: "var(--text-body-sm)", color: "var(--ink-2)", flex: 1 }}>{p.desc}</div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ font: "var(--text-body-sm)", fontWeight: 600, color: "var(--azure)", textDecoration: "none" }}
                >
                  More info →
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================= WHY ROBOTICS ========================= */}
      <section id="why" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", background: "var(--paper-raised)", scrollMarginTop: 80 }}>
        <div className="wm-container" style={{ padding: SECTION_PAD, display: "flex", flexDirection: "column", gap: 8 }}>
          <SectionLabel>Why robotics?</SectionLabel>
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column" }}>
            {WHY.map((w) => (
              <div
                key={w.num}
                className="wm-collapse"
                style={{
                  display: "grid",
                  gridTemplateColumns: "72px 1fr 1.4fr",
                  gap: 24,
                  padding: "28px 0",
                  borderTop: "1px solid var(--line)",
                  alignItems: "start",
                }}
              >
                <div
                  aria-hidden
                  style={{ font: "var(--text-h2)", color: "var(--ink-4)", fontFamily: "var(--font-mono)", fontWeight: 400 }}
                >
                  {w.num}
                </div>
                <h3 style={{ margin: 0, font: "var(--text-h3)", color: "var(--ink)" }}>{w.title}</h3>
                <p style={{ margin: 0, font: "var(--text-body-md)", color: "var(--ink-2)" }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ALUMNI UNIVERSITIES ===================== */}
      <section style={{ borderBottom: "1px solid var(--line)" }}>
        <div
          className="wm-container"
          style={{ padding: "56px var(--page-pad)", display: "flex", flexDirection: "column", gap: 20, alignItems: "center", textAlign: "center" }}
        >
          <p style={{ margin: 0, font: "var(--text-body-md)", color: "var(--ink-2)", maxWidth: "56ch" }}>
            Over the years, some of our members have gone on to study at universities like these — we&apos;re proud to
            have been a small part of the start.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px 32px", maxWidth: 820 }}>
            {UNIVERSITIES.map((u) => (
              <span key={u} style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 16, color: "var(--ink-3)" }}>
                {u}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== MECHA MAYHEM (NAVY) ===================== */}
      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(160deg, var(--navy), var(--navy-deep))" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "var(--grid-navy)", backgroundSize: "var(--grid-size) var(--grid-size)" }} />
        <div
          className="wm-container wm-collapse"
          style={{
            position: "relative",
            padding: SECTION_PAD,
            display: "grid",
            gridTemplateColumns: ".9fr 1.1fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionLabel navy>Our flagship event</SectionLabel>
            <h2 style={{ margin: 0, font: "var(--text-display)", letterSpacing: "var(--tracking-tight)", color: "var(--on-navy)", lineHeight: 1.02 }}>
              Mecha <span style={{ color: "var(--azure)" }}>Mayhem</span>
            </h2>
            <p style={{ margin: 0, font: "var(--text-body-lg)", color: "var(--on-navy)", maxWidth: "42ch" }}>
              We're proud to host <strong>Canada&apos;s largest VEX Robotics Tournament</strong> — teams from across the
              country compete at the BMO Centre in Calgary.
            </p>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--on-navy-muted)" }}>
              BMO CENTRE · CALGARY, AB
            </div>
            <div>
              <Button variant="accent" size="lg" href="https://www.mechamayhem.ca/" target="_blank" rel="noopener noreferrer">
                Visit mechamayhem.ca →
              </Button>
            </div>
          </div>
          <div className="wm-collapse-sm" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <FigureFrame navy src="/photos/mecha-photo-1.jpg" alt="Mecha Mayhem competing teams" caption="Fig. 02 — competing teams, 2025" height={260} />
            <FigureFrame navy src="/photos/mecha-photo-2.jpg" alt="Mecha Mayhem event staff" caption="Fig. 03 — event floor, 2025" height={260} />
          </div>
        </div>
      </section>

      {/* ======================= GET INVOLVED / JOIN ======================= */}
      <section className="wm-container wm-collapse" style={{ padding: SECTION_PAD, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <SectionLabel>Ways to get involved</SectionLabel>
          {INVOLVEMENT.map((it) => (
            <Card key={it.code} hover padding={18}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-3)", width: 56 }}>{it.code}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{it.title}</div>
                  <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 2 }}>{it.meta}</div>
                </div>
                {it.open && <Badge tone="azure">Open to everyone</Badge>}
              </div>
            </Card>
          ))}
        </div>

        <div id="join" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <SectionLabel accent>Join us</SectionLabel>
          <h2 style={{ margin: 0, font: "var(--text-h2)", letterSpacing: "-0.015em" }}>
            Come{" "}
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--azure)" }}>
              build
            </span>{" "}
            with us.
          </h2>
          <p style={{ margin: 0, font: "var(--text-body-md)", color: "var(--ink-2)" }}>
            Leave your email and we&apos;ll let you know when the next program or workshop opens up.
          </p>
          <JoinForm />
        </div>
      </section>
    </>
  );
}
