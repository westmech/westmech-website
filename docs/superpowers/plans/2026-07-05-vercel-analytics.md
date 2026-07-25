# Vercel Web Analytics Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Vercel Web Analytics for site-wide page views, plus a `dreamclass_signup_click` custom event on every DreamClass signup link so per-program conversion is visible.

**Architecture:** One new dependency (`@vercel/analytics`), an `<Analytics />` component in the root layout for automatic page views, and one small client component (`TrackedSignupLink`) used everywhere a DreamClass link appears. The component fires the custom event only for DreamClass hrefs, so non-DreamClass links (Zeffy, mailto) can flow through the same component untracked.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, `@vercel/analytics`.

**Spec:** `docs/superpowers/specs/2026-07-05-vercel-analytics-design.md`

## Global Constraints

- **Worktree:** Implement in a separate git worktree branched off `redesign-nextjs` (user request). Create it with the `superpowers:using-git-worktrees` skill before Task 1.
- **Event name:** exactly `dreamclass_signup_click`, with string properties `program` and `location`.
- **Program slugs** are keyed by DreamClass form so the same program aggregates across pages:
  - form `cbypTh` → `robotics-101-gr4-7`
  - form `vHPUha` → `summer-camp-gr4-7`
  - form `WZAzYd` → `robotics-101-gr7-12`
  - form `sDAMzh` → `summer-camp-gr7-12`
- **Never block navigation:** no `preventDefault` in click handlers; `track()` is beacon-based and fire-and-forget.
- **No test framework exists in this repo** (no jest/vitest — deliberate; don't add one for this feature). Verification is: `npx tsc --noEmit`, `npm run build`, and manual dev-server checks using `@vercel/analytics` debug console output (it logs every pageview/event to the browser console in dev).
- Server components stay server components — only the new `TrackedSignupLink` is a client component.
- Match existing code style: inline `style` objects, double quotes, `@/` path aliases.

---

### Task 1: Install `@vercel/analytics` and enable page-view tracking

**Files:**
- Modify: `package.json` (via npm install)
- Modify: `app/layout.tsx`

**Interfaces:**
- Produces: `<Analytics />` mounted site-wide; `track` from `@vercel/analytics` becomes importable for Task 2.

- [ ] **Step 1: Install the package**

Run: `npm install @vercel/analytics`
Expected: succeeds; `@vercel/analytics` appears under `dependencies` in `package.json`.

- [ ] **Step 2: Add `<Analytics />` to the root layout**

In `app/layout.tsx`, add the import at the top (after the existing imports):

```tsx
import { Analytics } from "@vercel/analytics/next";
```

Then add `<Analytics />` just before `</body>`. The end of the `RootLayout` return becomes:

```tsx
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
```

- [ ] **Step 3: Verify typecheck and build**

Run: `npx tsc --noEmit`
Expected: no errors.

Run: `npm run build`
Expected: build completes successfully (all routes compile).

- [ ] **Step 4: Verify page views fire in dev**

Run: `npm run dev`, open `http://localhost:3000` in a browser, open the console.
Expected: a `[Vercel Web Analytics]` debug message (debug mode is on by default in dev) including a pageview log. Navigate to `/programs` — a second pageview logs.
Stop the dev server afterwards.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json app/layout.tsx
git commit -m "feat: add Vercel Web Analytics page-view tracking"
```

---

### Task 2: `TrackedSignupLink` component + homepage integration

**Files:**
- Create: `components/site/TrackedSignupLink.tsx`
- Modify: `components/ui/index.ts` (export `ButtonProps` type)
- Modify: `app/page.tsx` (PROGRAMS data + card link)

**Interfaces:**
- Consumes: `track` from `@vercel/analytics` (Task 1); `Button`, `ButtonProps` from `@/components/ui`.
- Produces: `TrackedSignupLink({ href, program, location, children, buttonVariant?, style? })` — a client component that renders a `Button` (when `buttonVariant` is set) or a plain styled `<a>`, opening in a new tab, firing `track("dreamclass_signup_click", { program, location })` on click **only when the href contains `dreamclass.io`**. Task 3 relies on this exact signature.

- [ ] **Step 1: Export the `ButtonProps` type from the ui barrel**

In `components/ui/index.ts`, change line 1 from:

```ts
export { Button } from "./Button";
```

to:

```ts
export { Button, type ButtonProps } from "./Button";
```

- [ ] **Step 2: Create the component**

Create `components/site/TrackedSignupLink.tsx`:

```tsx
"use client";

import React from "react";
import { track } from "@vercel/analytics";
import { Button, type ButtonProps } from "@/components/ui";

export interface TrackedSignupLinkProps {
  href: string;
  /** Stable program slug, e.g. "robotics-101-gr4-7". Same slug = same program across pages. */
  program: string;
  /** Where the link lives, e.g. "home", "vex-iq", "vex-v5". */
  location: string;
  children: React.ReactNode;
  /** Render as a Button with this variant; omit for a plain <a> (style it via `style`). */
  buttonVariant?: ButtonProps["variant"];
  style?: React.CSSProperties;
}

/**
 * External signup link that records a `dreamclass_signup_click` analytics event.
 * Only DreamClass hrefs fire the event — other hrefs render identically but stay
 * untracked. Tracking is fire-and-forget (beacon); navigation is never blocked.
 */
export function TrackedSignupLink({ href, program, location, children, buttonVariant, style }: TrackedSignupLinkProps) {
  const handleClick = () => {
    if (href.includes("dreamclass.io")) {
      track("dreamclass_signup_click", { program, location });
    }
  };

  if (buttonVariant) {
    return (
      <Button variant={buttonVariant} href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
        {children}
      </Button>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={style} onClick={handleClick}>
      {children}
    </a>
  );
}
```

- [ ] **Step 3: Add program slugs to the homepage PROGRAMS data**

In `app/page.tsx`, extend the `PROGRAMS` array type and entries. The declaration (currently lines 37–43) becomes:

```tsx
const PROGRAMS: {
  num: string;
  name: string;
  grade: string;
  desc: string;
  href: string;
  program: string;
}[] = [
```

Add a `program` field to each entry, matching by href:

- entry `01` (`.../form/cbypTh`): `program: "robotics-101-gr4-7",`
- entry `02` (`.../form/vHPUha`): `program: "summer-camp-gr4-7",`
- entry `03` (`.../form/WZAzYd`): `program: "robotics-101-gr7-12",`
- entry `04` (`.../form/sDAMzh`): `program: "summer-camp-gr7-12",`
- entry `05` (Girl Powered, zeffy.com): `program: "girl-powered",` (never fires — non-DreamClass href — but keeps the data uniform)

Example for entry `01`:

```tsx
  {
    num: "01",
    name: "Robotics 101",
    grade: "Gr. 4–7",
    desc: "Foundation course covering the basics of robotics. Small class sizes — start your robotics journey with confidence.",
    href: "https://robotics.dreamclass.io/pages/admissions/form/cbypTh",
    program: "robotics-101-gr4-7",
  },
```

- [ ] **Step 4: Use `TrackedSignupLink` in the homepage program cards**

In `app/page.tsx`, add the import (after the `JoinForm` import):

```tsx
import { TrackedSignupLink } from "@/components/site/TrackedSignupLink";
```

In the PROGRAMS `.map()` inside the Programs section, replace the plain anchor (currently lines 255–262):

```tsx
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ font: "var(--text-body-sm)", fontWeight: 600, color: "var(--azure)", textDecoration: "none" }}
                >
                  More info →
                </a>
```

with:

```tsx
                <TrackedSignupLink
                  href={p.href}
                  program={p.program}
                  location="home"
                  style={{ font: "var(--text-body-sm)", fontWeight: 600, color: "var(--azure)", textDecoration: "none" }}
                >
                  More info →
                </TrackedSignupLink>
```

Note: `app/page.tsx` stays a server component — `TrackedSignupLink` is the client boundary.

- [ ] **Step 5: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 6: Verify in dev**

Run: `npm run dev`, open `http://localhost:3000`, open the browser console.

- Click "More info →" on a DreamClass card (e.g. card 01). Expected: a new tab opens to DreamClass AND the original tab's console shows a `[Vercel Web Analytics]` debug log for event `dreamclass_signup_click` with `{ program: "robotics-101-gr4-7", location: "home" }`.
- Click "More info →" on the Girl Powered card. Expected: new tab opens to zeffy.com, NO `dreamclass_signup_click` log.
- Visual check: the links look identical to before (azure, semibold, no underline).

Stop the dev server afterwards.

- [ ] **Step 7: Commit**

```bash
git add components/site/TrackedSignupLink.tsx components/ui/index.ts app/page.tsx
git commit -m "feat: track DreamClass signup clicks on homepage program cards"
```

---

### Task 3: Track signup CTAs on program detail pages

**Files:**
- Modify: `components/site/ProgramDetail.tsx`
- Modify: `app/programs/vex-iq/page.tsx`
- Modify: `app/programs/vex-v5/page.tsx`

**Interfaces:**
- Consumes: `TrackedSignupLink` from Task 2 (exact signature above).
- Produces: `Offering.cta` gains an optional `program?: string` field; `ProgramDetail` derives `location` from its `title` prop (lowercased, spaces → dashes, e.g. "VEX IQ" → `vex-iq`).

- [ ] **Step 1: Extend the `Offering` cta type**

In `components/site/ProgramDetail.tsx`, change the `cta` field of the `Offering` interface (currently line 16) from:

```ts
  cta: { label: string; href: string };
```

to:

```ts
  cta: { label: string; href: string; /** Analytics slug — required for DreamClass links. */ program?: string };
```

- [ ] **Step 2: Render DreamClass CTAs through `TrackedSignupLink`**

In `components/site/ProgramDetail.tsx`, add the import (after the existing imports):

```tsx
import { TrackedSignupLink } from "@/components/site/TrackedSignupLink";
```

Change `OfferingCard` to accept a `location` prop. The signature (currently line 29) becomes:

```tsx
function OfferingCard({ o, location }: { o: Offering; location: string }) {
```

Replace the CTA block (currently lines 78–82):

```tsx
        <div>
          <Button variant={o.cta.href.startsWith("mailto") ? "secondary" : "accent"} href={o.cta.href} target={o.cta.href.startsWith("http") ? "_blank" : undefined} rel={o.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}>
            {o.cta.label}
          </Button>
        </div>
```

with:

```tsx
        <div>
          {o.cta.href.includes("dreamclass.io") ? (
            <TrackedSignupLink href={o.cta.href} program={o.cta.program ?? "unknown"} location={location} buttonVariant="accent">
              {o.cta.label}
            </TrackedSignupLink>
          ) : (
            <Button variant={o.cta.href.startsWith("mailto") ? "secondary" : "accent"} href={o.cta.href} target={o.cta.href.startsWith("http") ? "_blank" : undefined} rel={o.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}>
              {o.cta.label}
            </Button>
          )}
        </div>
```

In the `ProgramDetail` function body, derive the location and pass it down. Change the offerings map (currently lines 108–112) from:

```tsx
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {offerings.map((o) => (
            <OfferingCard key={o.name} o={o} />
          ))}
        </div>
```

to:

```tsx
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {offerings.map((o) => (
            <OfferingCard key={o.name} o={o} location={title.toLowerCase().replace(/\s+/g, "-")} />
          ))}
        </div>
```

- [ ] **Step 3: Add program slugs to the VEX IQ offerings**

In `app/programs/vex-iq/page.tsx`:

Offering 1 cta (currently line 18) becomes:

```ts
    cta: { label: "Sign up →", href: "https://robotics.dreamclass.io/pages/admissions/form/cbypTh", program: "robotics-101-gr4-7" },
```

Offering 2 cta (currently line 31) becomes:

```ts
    cta: { label: "Sign up →", href: "https://robotics.dreamclass.io/pages/admissions/form/vHPUha", program: "summer-camp-gr4-7" },
```

Offering 3's mailto cta is untouched (not a DreamClass link).

- [ ] **Step 4: Add program slugs to the VEX V5 offerings**

In `app/programs/vex-v5/page.tsx`:

Offering 1 cta (currently line 17) becomes:

```ts
    cta: { label: "Sign up →", href: "https://robotics.dreamclass.io/pages/admissions-v2/form/WZAzYd", program: "robotics-101-gr7-12" },
```

Offering 2 cta (currently line 30) becomes:

```ts
    cta: { label: "Sign up →", href: "https://robotics.dreamclass.io/pages/admissions/form/sDAMzh", program: "summer-camp-gr7-12" },
```

Offering 3's mailto cta is untouched.

- [ ] **Step 5: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 6: Verify in dev**

Run: `npm run dev`, open the browser console on each page:

- `http://localhost:3000/programs/vex-iq`: click "Sign up →" on offering 1. Expected: new tab to DreamClass + console log for `dreamclass_signup_click` with `{ program: "robotics-101-gr4-7", location: "vex-iq" }`. The "Contact us →" button still opens the mail client with NO event log, and still renders in the secondary (outline) style.
- `http://localhost:3000/programs/vex-v5`: click "Sign up →" on offering 2. Expected: event log with `{ program: "summer-camp-gr7-12", location: "vex-v5" }`.
- Visual check: "Sign up →" buttons still render as accent (azure) buttons.

Stop the dev server afterwards.

- [ ] **Step 7: Commit**

```bash
git add components/site/ProgramDetail.tsx app/programs/vex-iq/page.tsx app/programs/vex-v5/page.tsx
git commit -m "feat: track DreamClass signup clicks on program detail pages"
```

---

### Task 4: Final verification

**Files:** none modified — verification only.

**Interfaces:**
- Consumes: everything from Tasks 1–3.

- [ ] **Step 1: Full typecheck and production build**

Run: `npx tsc --noEmit`
Expected: no errors.

Run: `npm run build`
Expected: build succeeds; all routes (`/`, `/programs/*`, etc.) compile.

- [ ] **Step 2: Full manual click-through in dev**

Run: `npm run dev`, with the browser console open verify each of the 8 tracked links fires exactly one `dreamclass_signup_click` with the right properties, and the 3 untracked links (Girl Powered/zeffy on home, the two mailto "Contact us" CTAs) fire nothing:

| Page (`location`) | Link | Expected `program` |
|---|---|---|
| `/` (`home`) | Card 01 More info | `robotics-101-gr4-7` |
| `/` (`home`) | Card 02 More info | `summer-camp-gr4-7` |
| `/` (`home`) | Card 03 More info | `robotics-101-gr7-12` |
| `/` (`home`) | Card 04 More info | `summer-camp-gr7-12` |
| `/` | Card 05 (Girl Powered) | no event |
| `/programs/vex-iq` (`vex-iq`) | Offering 1 Sign up | `robotics-101-gr4-7` |
| `/programs/vex-iq` (`vex-iq`) | Offering 2 Sign up | `summer-camp-gr4-7` |
| `/programs/vex-iq` | Offering 3 Contact us | no event |
| `/programs/vex-v5` (`vex-v5`) | Offering 1 Sign up | `robotics-101-gr7-12` |
| `/programs/vex-v5` (`vex-v5`) | Offering 2 Sign up | `summer-camp-gr7-12` |
| `/programs/vex-v5` | Offering 3 Contact us | no event |

- [ ] **Step 3: Note the post-deploy step**

No code — surface this to the user at handoff: after this branch deploys to Vercel, someone must enable Web Analytics once in the Vercel dashboard (Project → Analytics tab → Enable). Until then no data is collected in production. Then confirm page views and `dreamclass_signup_click` events appear after a few visits/clicks.
