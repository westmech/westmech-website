"use client";

import React from "react";
import { Card, Input, Select, Button } from "@/components/ui";

/**
 * Lightweight interest form. No backend yet — on submit it opens a pre-filled
 * email to info@westernmech.ca so nothing is silently dropped.
 */
export function JoinForm() {
  const [email, setEmail] = React.useState("");
  const [interest, setInterest] = React.useState("Not sure yet");
  const [sent, setSent] = React.useState(false);

  const submit = () => {
    const subject = encodeURIComponent("Interested in Western Mechatronics");
    const body = encodeURIComponent(
      `Hi WestMech team,\n\nI'd like to hear about upcoming programs.\n\nEmail: ${email}\nInterested in: ${interest}\n`
    );
    window.location.href = `mailto:info@westernmech.ca?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <Card padding={24}>
        <div style={{ fontWeight: 600, fontSize: 16 }}>Thanks — talk soon.</div>
        <div style={{ fontSize: 13.5, color: "var(--ink-3)", marginTop: 4 }}>
          Your email app should have opened. If not, reach us at{" "}
          <a href="mailto:info@westernmech.ca" style={{ color: "var(--azure)" }}>
            info@westernmech.ca
          </a>
          .
        </div>
      </Card>
    );
  }

  return (
    <Card padding={24}>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          hint="we only email about programs and events"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Select
          label="What are you curious about?"
          options={["Not sure yet", "Robotics 101", "Summer Camps", "Girl Powered", "Competitive VEX"]}
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />
        <div>
          <Button variant="accent" onClick={submit}>
            Keep me posted
          </Button>
        </div>
      </div>
    </Card>
  );
}
