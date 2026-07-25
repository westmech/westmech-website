import { ProgramDetail, type Offering } from "@/components/site/ProgramDetail";

export const metadata = { title: "VEX U Program" };

const offerings: Offering[] = [
  {
    tag: "Team",
    name: "VEX U VRC Competition Club Team",
    badge: "University",
    desc: "Our VRC Club Teams challenge students to take robotics to the next level. Using the advanced V5 platform, students design and engineer highly competitive robots while learning coding, strategy, teamwork, and collaboration. Teams compete regularly at tournaments, with opportunities to qualify for the VEX Robotics World Championship — the largest robotics competition in the world.",
    schedule: [
      { k: "Monday", v: "6:30 – 8:30 PM" },
      { k: "Tuesday", v: "4:30 – 8:30 PM" },
      { k: "Wednesday", v: "6:30 – 8:30 PM" },
      { k: "Thursday", v: "4:30 – 6:30 PM" },
      { k: "Saturday", v: "12:00 – 3:00 PM" },
    ],
    cta: {
      label: "Contact us →",
      href: "mailto:vivian@westernmech.ca?subject=Information%20Inquiry%20for%20VEX%20U%20Competition%20Team",
    },
  },
];

export default function VexUPage() {
  return (
    <ProgramDetail
      label="Club Programs · VEX U"
      title="VEX U"
      level="University"
      blurb="Our most advanced teams engineer highly competitive robots and compete toward the VEX Robotics World Championship."
      photo="/photos/robot-rodeo.jpg"
      photoCaption="Fig. 01 — competition robot, VEX U"
      offerings={offerings}
    />
  );
}
