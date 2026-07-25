import { ProgramDetail, type Offering } from "@/components/site/ProgramDetail";

export const metadata = { title: "VEX IQ Program" };

const offerings: Offering[] = [
  {
    tag: "Course",
    name: "IQ Robotics 101 (Grades 4–7)",
    badge: "Summer / Fall 2026",
    desc: "An introductory robotics program designed to spark interest and build foundational skills in robotics and engineering. Through guided weekly sessions, students explore how to build, code, and drive a VEX IQ robot in a supportive classroom setting — preparing them to join our VEX IQ Competition Team.",
    schedule: [
      { k: "August · Option 1", v: "August 4–7 · Tue–Fri, 10:00 AM – 4:00 PM (4 days, 5 hrs/day)" },
      { k: "August · Option 2", v: "August 11–14" },
      { k: "Fall Class", v: "Sept 7 – Oct 19, 2026 · 6 weeks, 2 classes/week (Mon & Wed), 12 classes total" },
      { k: "Class times", v: "Mondays 5:00 – 6:30 PM and Wednesdays 5:00 – 6:30 PM" },
    ],
    cost: ["Cost (Regular): $550 + GST", "Community Special price when you sign up before July 15, 2026 — don't miss it!"],
    photo: {
      src: "/photos/IQ photos/iq3.avif",
      alt: "Two students assembling a VEX IQ robot together in class",
      caption: "Fig. 02 — building in IQ Robotics 101",
    },
    cta: { label: "Sign up →", href: "https://robotics.dreamclass.io/pages/admissions/form/cbypTh" },
  },
  {
    tag: "Camp",
    name: "VEX IQ 2026 Summer Bootcamp",
    badge: "Ages 9–12",
    desc: "Immerse your child in robotics with our week-long, introductory summer camps! Perfect for beginners, these camps introduce building, programming, and driving robots while fostering teamwork, problem-solving, and creativity.",
    schedule: [
      { k: "Ages", v: "9–12 (Grades 3–6 in September) — choose your camp week at sign-up" },
      { k: "Week options", v: "Jul 6–10 · Jul 13–17 · Jul 20–24 · Jul 27–31" },
      { k: "Time & place", v: "9:00 AM – 4:00 PM · 4114 Macleod Trail SE, Calgary" },
    ],
    cost: ["Cost (Regular): $425 + GST", "Before June 30, 2026: $341.25 ($325 + GST)"],
    photo: {
      src: "/photos/IQ photos/iq5.avif",
      alt: "Campers building robots with VEX IQ parts spread across the bench",
      caption: "Fig. 03 — summer bootcamp build session",
    },
    cta: { label: "Sign up →", href: "https://robotics.dreamclass.io/pages/admissions/form/vHPUha" },
  },
  {
    tag: "Team",
    name: "VEX IQ Competition Club Team (Grades 4–7)",
    badge: "Year-round",
    desc: "Our IQ Club Teams introduce students to competitive robotics in a fun, team-based environment. Students design, build, and program robots while developing problem-solving, creativity, and teamwork — and prepare to compete in local, provincial, and international VEX IQ competitions throughout the year. Choose an activity level based on your goals and availability.",
    bullets: [
      "Explorer Level — 1 class a week",
      "Odyssey Level — 2 classes a week",
      "High Commitment — 3 classes or more a week",
    ],
    photo: {
      src: "/photos/IQ elementary schoool closup.JPG",
      alt: "Two IQ team members in Western Mechatronics jerseys working on their robot at a competition",
      caption: "Fig. 04 — IQ club team at Mecha Mayhem",
    },
    cta: {
      label: "Contact us →",
      href: "mailto:vivian@westernmech.ca?subject=Information%20Inquiry%20for%20VEX%20IQ%20Competition%20Team",
    },
  },
];

export default function VexIqPage() {
  return (
    <ProgramDetail
      label="Club Programs · VEX IQ"
      title="VEX IQ"
      level="Primary School · Grades 3–7"
      blurb="Where our youngest builders start — learning to build, code, and drive a VEX IQ robot, then step up to competitive play."
      photo="/photos/IQ photos/iq1.avif"
      photoCaption="Fig. 01 — a weekly IQ class at the WM facility"
      offerings={offerings}
    />
  );
}
