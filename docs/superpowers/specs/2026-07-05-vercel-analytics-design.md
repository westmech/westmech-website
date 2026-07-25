# Design: Event Tracking with Vercel Web Analytics

**Date:** 2026-07-05
**Status:** Approved

## Goal

Get insight into site traffic (visitors, top pages, referrers) and conversion behavior — specifically how many people click through to DreamClass to sign up for a program.

## Decision

Use **Vercel Web Analytics** (`@vercel/analytics`). Chosen because:

- The site is hosted on Vercel — analytics is native, one dependency, no extra account.
- Free on the Hobby tier (2,500 events/month, page views + custom events combined).
- Cookieless and privacy-friendly — no cookie-consent banner required.
- Supports custom events for tracking the DreamClass signup clicks.

Alternatives considered:

- **Umami Cloud** — higher free cap (~10k events/mo) and host-portable, but adds an external account and a second dashboard. Fallback if we outgrow Vercel's cap.
- **Plausible** — paid unless self-hosted; no server available. Ruled out.

## Scope

1. **Add `@vercel/analytics`** as a dependency.
2. **Render `<Analytics />` in `app/layout.tsx`** — enables automatic page-view tracking site-wide.
3. **Track DreamClass signup clicks** as a custom event, `dreamclass_signup_click`, with properties identifying which button was clicked. DreamClass links exist in:
   - `app/page.tsx` (homepage program cards, 4 links)
   - `app/programs/vex-iq/page.tsx` (2 links)
   - `app/programs/vex-v5/page.tsx` (2 links)

   Event properties: `program` (e.g. `vex-iq-junior`) and `location` (e.g. `home`, `program-page`) so per-button conversion is visible.

## Implementation notes

- The DreamClass buttons are external `<a>` links; `track()` is beacon-based and fire-and-forget, so it must not block or delay navigation (no `preventDefault`).
- Components using `track()` on click handlers must be client components; extract a small shared `TrackedSignupLink` (or similar) client component rather than converting whole pages to client components.
- Data only appears after the site is deployed to Vercel **and** Web Analytics is enabled in the project's dashboard (Analytics tab → Enable). Locally, events are no-ops / debug-logged.
- Implementation happens in a separate git worktree per user preference.

## Out of scope

- Session replay, heatmaps, funnels (deeper product analytics — revisit later if wanted).
- Tracking other clicks (contact/email) — same one-line pattern can be added later.
- Cookie consent UI — not needed (cookieless).

## Testing / verification

- Dev build renders with `<Analytics />` present; clicking a DreamClass button fires `track` (visible in console debug mode) and still navigates.
- Post-deploy: confirm page views and `dreamclass_signup_click` events appear in the Vercel Analytics tab.
