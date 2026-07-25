import { ProgramDetail, type Offering } from "@/components/site/ProgramDetail";

export const metadata = { title: "VEX V5 Program" };

const offerings: Offering[] = [
  {
    tag: "Course",
    name: "VEX V5 Robotics 101 (Grades 7–11)",
    badge: "Summer / Fall",
    desc: "An accelerated, engaging 4-week introductory course designed to cultivate students' interest in engineering and technology — nurturing their passion before they transition into advanced programs such as a Competition Club Team.",
    schedule: [
      { k: "August options", v: "Option 1: Aug 4–7 · Option 2: Aug 11–14 — Tue–Fri, 10:00 AM – 4:00 PM (4 days, 5 hrs/day)" },
      { k: "Fall options", v: "Option 3: Sep 8 – Oct 1 · Option 4: Oct 6 – Oct 29, 2026" },
      { k: "Fall format", v: "4 weeks, 2 classes/week, 8 classes (2.5 hrs each) — Tue & Thu 6:30 – 9:00 PM" },
    ],
    cost: ["Sign up now and take a special community discount at checkout!"],
    photo: {
      src: "/photos/building.jpg",
      alt: "A student fabricating a V5 competition robot with a power drill at the WM facility",
      caption: "Fig. 02 — hands-on fabrication in Robotics 101",
    },
    cta: { label: "Sign up →", href: "https://robotics.dreamclass.io/pages/admissions-v2/form/WZAzYd" },
  },
  {
    tag: "Camp",
    name: "2026 VRC (V5) Summer Bootcamp",
    badge: "Grades 7–11",
    desc: "Immerse your child in robotics with our week-long, introductory summer camps! Perfect for beginners, these camps introduce building, programming, and driving robots while fostering teamwork, problem-solving, and creativity.",
    schedule: [
      { k: "Students", v: "Grades 7–11 in September 2026 — choose your camp week at sign-up" },
      { k: "Week options", v: "Jul 6–10 · Jul 13–17 · Jul 20–24 · Jul 27–31" },
      { k: "Time & place", v: "9:00 AM – 4:00 PM · 4114 Macleod Trail SE, Calgary AB T2G 2R7" },
    ],
    cost: ["Don't miss the special price!"],
    photo: {
      src: "/photos/controller.jpg",
      alt: "A student in a Western Mechatronics jersey driving a V5 robot with a controller",
      caption: "Fig. 03 — learning to drive at summer bootcamp",
    },
    cta: { label: "Sign up →", href: "https://robotics.dreamclass.io/pages/admissions/form/sDAMzh" },
  },
  {
    tag: "Team",
    name: "VEX V5 VRC Competition Club Team",
    badge: "Year-round",
    desc: "Our VRC Club Team program challenges students to take their skills to the next level. Using the advanced VEX V5 platform, students design, build, and engineer competitive robots while developing programming, strategy, teamwork, and collaboration — competing regularly with opportunities to qualify for the VEX Robotics World Championship. Standout students also gain access to WestMech scholarship opportunities that support post-secondary study in engineering and technology.",
    bullets: [
      "Mecha Mayhem Signature VEX Robotics Competition",
      "Girl Powered Bootcamp",
      "Calgary Stampede Robot Rodeo",
      "Local Girl Guides outreach",
      "WestMech Tournaments",
      "Other community outreach programs",
    ],
    photo: {
      src: "/photos/rodeo-champion.jpg",
      alt: "Calgary Stampede Robot Rodeo tournament champion belt buckles engraved with the Western Mechatronics logo",
      caption: "Fig. 04 — Robot Rodeo tournament champions",
    },
    cta: {
      label: "Contact us →",
      href: "mailto:vivian@westernmech.ca?subject=Information%20Inquiry%20for%20VEX%20V5%20VRC%20Competition%20Team",
    },
  },
];

export default function VexV5Page() {
  return (
    <ProgramDetail
      label="Club Programs · VEX V5"
      title="VEX V5"
      level="Middle & High School · Grades 7+"
      blurb="Design, build, and code competitive V5 robots — and compete in VEX Robotics Competition tournaments across Alberta and beyond."
      photo="/photos/Westmech Club Photos/wm3.jpg"
      photoCaption="Fig. 01 — a V5 competition robot at the WM facility"
      offerings={offerings}
    />
  );
}
