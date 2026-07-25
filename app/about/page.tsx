import React from "react";
import { Card, Badge, Button, SectionLabel, FigureFrame } from "@/components/ui";

export const metadata = { title: "About" };

/** Full-bleed hero background photo — B&W grain, fades to paper. Easily swappable. */
const HERO_PHOTO = "/photos/Volunteers About Us Hero.jpg";
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")";

const TEAM: { name: string; role: string; photo: string; pos?: string; scale?: number }[] = [
  { name: "Jonathan Zhou", role: "Programs", photo: "/photos/jonathan-headshot.jpeg" },
  { name: "Justin Zhou", role: "Events", photo: "/photos/justin-headshot.jpeg", scale: 1.16 },
  { name: "Ian Wang", role: "Tech", photo: "/Ian.jpg", pos: "center 8%" },
];

const COACHES: { num: string; name: string; role: string; bio: string }[] = [
  {
    num: "01",
    name: "James Zhang",
    role: "VEX V5 Coach",
    bio: "I'm 19 and currently studying Engineering at the University of Calgary. I competed in VEX Robotics for 4 years and was previously on Team 210T Titan. Happy to help everyone in any way they might need.",
  },
  {
    num: "02",
    name: "Jason Xiao",
    role: "VEX V5 Coach",
    bio: "An Engineering student at the University of Calgary. In my free time I enjoy playing games and riding my bike. I previously won the FFCA & Western Mechatronics Spin Up December Duel on the WestMech Black Team 210S.",
  },
  {
    num: "03",
    name: "Kaleb Larouche",
    role: "VEX V5 Coach",
    bio: "A FIRST Robotics alumnus — I competed in FRC and FTC and took home awards including the Rookie All-Star at the FRC Idaho Regional and the FTC Design and Inspire awards. Looking forward to sharing my experience with the team.",
  },
  {
    num: "04",
    name: "Ryan Quon",
    role: "VEX IQ Coach",
    bio: "I competed in VEX for 4 years, coached IQ for 2, and still love what I do every day. I'm passionate about robotics and teaching others — my primary roles are builder and designer.",
  },
  {
    num: "05",
    name: "Gauthier Appaix",
    role: "VEX V5 Coach",
    bio: "I believe robotics is one of the best ways for students to learn engineering through hands-on experience, and I'm excited to help others develop their passion for physical problem-solving.",
  },
];

const VOLUNTEERS: { name: string; role: string }[] = [
  { name: "Kartik Ramachandran", role: "Volunteer Lead" },
  { name: "Alex Williamson", role: "Mecha + Rodeo Lead" },
  { name: "Eric Jones", role: "Mecha + Rodeo Lead" },
  { name: "Winnie Dinh", role: "Marketing Lead" },
  { name: "Jennifer Fone", role: "Volunteer Lead" },
  { name: "Avinav Bhandari", role: "AV Lead" },
  { name: "Tim Chang", role: "Engineering Lead" },
  { name: "Tony Wu", role: "Production Lead" },
];

function Monogram({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <div
      style={{
        width: 44,
        height: 44,
        flexShrink: 0,
        borderRadius: "var(--radius-pill)",
        background: "var(--navy)",
        color: "var(--on-navy)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        letterSpacing: "0.02em",
      }}
    >
      {initials}
    </div>
  );
}

/** Square headshot with the standard B&W grain photo treatment. */
function Headshot({ src, name, pos, scale }: { src: string; name: string; pos?: string; scale?: number }) {
  return (
    <div
      style={{
        position: "relative",
        aspectRatio: "1 / 1",
        overflow: "hidden",
        border: "1px solid var(--line-strong)",
        background: "var(--paper-sunken)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: pos ?? "center",
          transform: scale ? `scale(${scale})` : undefined,
          filter: "var(--photo-filter-color, contrast(1.05) saturate(1.12))",
          display: "block",
        }}
      />
      <div style={{ position: "absolute", inset: 0, opacity: 0.35, mixBlendMode: "overlay", backgroundImage: GRAIN }} />
      <div style={{ position: "absolute", inset: 0, boxShadow: "var(--photo-vignette)" }} />
    </div>
  );
}

export default function AboutPage() {
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
              objectPosition: "center 70%",
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
            minHeight: "clamp(520px, 72vh, 760px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "120px var(--page-pad) 56px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 760 }}>
            <h1 style={{ margin: 0, font: "var(--text-display)", letterSpacing: "var(--tracking-tight)" }}>
              Students{" "}
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--azure)" }}>
                first
              </span>
              , robots second.
            </h1>
            <p style={{ margin: 0, font: "var(--text-body-lg)", color: "var(--ink-2)", maxWidth: "52ch" }}>
              Western Mechatronics was founded in 2019 by high-school friends who saw a need for robotics education in
              Calgary. We would not be where we are without our incredible team of coaches, alumni, and volunteers.
            </p>
          </div>

          <div
            className="wm-hero-tag"
            style={{ position: "absolute", right: "var(--page-pad)", bottom: 60, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-3)" }}
          >
            event staff // Mecha Mayhem 2025
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="wm-container" style={{ padding: "72px var(--page-pad)" }}>
        <div className="wm-collapse" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionLabel>Our story</SectionLabel>
            <h2 style={{ margin: 0, font: "var(--text-h2)", letterSpacing: "-0.015em" }}>
              A club built by students, for students.
            </h2>
            <p style={{ margin: 0, font: "var(--text-body-md)", color: "var(--ink-2)" }}>
              It started with a few friends building robots in a basement because "it's cool". That same feeling is what still drives everything we do today. It&apos;s
              in our summer camps, our events, and every one of our club teams.
            </p>
          </div>
          <FigureFrame src="/photos/Founders.jpeg" alt="The founders on stage at Mecha Mayhem 2025" caption="Fig. 01 — Justin, Ian and Jonathan at Mecha 2025" height={360} />
        </div>
      </section>

      {/* The team */}
      <section style={{ borderTop: "1px solid var(--line)", background: "var(--paper-raised)" }}>
        <div className="wm-container" style={{ padding: "72px var(--page-pad)", display: "flex", flexDirection: "column", gap: 32 }}>
          <SectionLabel>The team</SectionLabel>
          <div className="wm-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {TEAM.map((m) => (
              <Card key={m.name} padding={18}>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <Headshot src={m.photo} name={m.name} pos={m.pos} scale={m.scale} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ fontWeight: 600, fontSize: 16 }}>{m.name}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--ink-3)" }}>
                      {m.role}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="wm-container" style={{ padding: "72px var(--page-pad)", display: "flex", flexDirection: "column", gap: 32 }}>
        <SectionLabel>Meet the coaches</SectionLabel>
        <div className="wm-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {COACHES.map((c) => (
            <Card key={c.name} hover padding={22}>
              <div style={{ display: "flex", gap: 16 }}>
                <Monogram name={c.name} />
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-3)" }}>{c.num}</span>
                    <span style={{ fontWeight: 600, fontSize: 16 }}>{c.name}</span>
                    <Badge>{c.role}</Badge>
                  </div>
                  {/* bios hidden for now — re-enable when ready */}
                  {/* <p style={{ margin: 0, font: "var(--text-body-sm)", color: "var(--ink-2)" }}>{c.bio}</p> */}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Volunteers */}
      <section style={{ borderTop: "1px solid var(--line)", background: "var(--paper-raised)" }}>
        <div className="wm-container" style={{ padding: "72px var(--page-pad)", display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <SectionLabel>Our incredible volunteers</SectionLabel>
            <h2 style={{ margin: "8px 0 0", font: "var(--text-h2)", letterSpacing: "-0.015em" }}>
              The people who make it all run.
            </h2>
          </div>
          <div className="wm-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {VOLUNTEERS.map((v) => (
              <Card key={v.name} padding={18}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <Monogram name={v.name} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <div style={{ fontWeight: 600, fontSize: 15 }}>{v.name}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--ink-3)" }}>
                      {v.role}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our space */}
      <section style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wm-container" style={{ padding: "72px var(--page-pad)", display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <SectionLabel>Our space</SectionLabel>
            <h2 style={{ margin: "8px 0 0", font: "var(--text-h2)", letterSpacing: "-0.015em" }}>
              Where our teams design, build, and compete.
            </h2>
            <p style={{ margin: "12px 0 0", font: "var(--text-body-md)", color: "var(--ink-2)", maxWidth: "58ch" }}>
              Our 7,000 sq ft facility at 4114 Macleod Trail SE Unit C, Calgary is home to competition fields, build
              benches, and classrooms.
            </p>
          </div>
          <div className="wm-collapse-sm" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <FigureFrame
              src="/photos/Westmech Club Photos/wm4.jpg"
              alt="The Western Mechatronics building entrance at 4114 Unit C"
              caption="Fig. 02 — our front door"
              height={280}
            />
            <FigureFrame
              src="/photos/Westmech Club Photos/wm1.jpg"
              alt="Competition hall with VEX IQ fields set up"
              caption="Fig. 03 — the competition hall"
              height={280}
            />
            <FigureFrame
              src="/photos/Westmech Club Photos/wm3.jpg"
              alt="A VEX V5 robot on the workbench in front of the parts wall"
              caption="Fig. 04 — the build bench"
              height={280}
              objectPosition="center bottom"
            />
            <FigureFrame
              src="/photos/Westmech Club Photos/wm2.jpg"
              alt="Team tables outside the classrooms"
              caption="Fig. 05 — the commons"
              height={280}
            />
          </div>
        </div>
      </section>

      {/* Partners CTA */}
      <section style={{ background: "linear-gradient(160deg, var(--navy), var(--navy-deep))", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "var(--grid-navy)", backgroundSize: "var(--grid-size) var(--grid-size)" }} />
        <div className="wm-container wm-collapse" style={{ position: "relative", padding: "64px var(--page-pad)", display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 40, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <SectionLabel navy>Partners</SectionLabel>
            <h2 style={{ margin: 0, font: "var(--text-h2)", letterSpacing: "-0.015em", color: "var(--on-navy)" }}>
              Want to work with us?
            </h2>
            <p style={{ margin: 0, font: "var(--text-body-md)", color: "var(--on-navy-muted)", maxWidth: "44ch" }}>
              We partner with organizations who want to put STEM and robotics tools in the hands of the next generation
              of leaders.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Button variant="accent" size="lg" href="/partners">
              Partnership opportunities →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
