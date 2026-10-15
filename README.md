# AUREA Private Access — Vercel Presentation

**Status:** deployed as a read-only luxury travel/concierge presentation on Vercel, with the approved AUREA V1 identity. This repository is connected to the Vercel project `travel-medellin-proposal`. The canonical presentation URL is https://travel-medellin-proposal.vercel.app.

## Application

- Next.js 16, React, Tailwind, Framer Motion.
- `/coleccion`: editorial collections and demo listing pages, using the existing bilingual content.
- `/mi-llave`: local-device shortlist for travel inspiration.
- `/concierge`: bespoke journey brief builder.
- `/partners`: prospective supplier/partner introduction brief builder.
- `/membresia` redirects to `/partners` (legacy links).
- Branding is defined in `brand/AUREA_BRAND_LOCK.md`, using SVG artwork in `public/brand`.

## Important safety and operating constraints

**This deployed site is a presentation, not a booking system.** It does not collect, send or persist leads. Its two inquiry forms prepare a copyable brief in the visitor's browser and clearly explain that no information was submitted. It has no live availability, supplier contracts, online payments or completed reservations.

The Vercel adapter in `lib/server.ts` returns 30 generic editorial/demo listings and 10 service categories without privileged external dependencies. Demo listings are not real supplier offers, quotes, or confirmed partnerships. All preview pages are `noindex`. The CMS and uploads are not activated on this Vercel presentation. Do not enable them without real authenticated authorization, durable storage, and security review.

**The operational source is separate:** `connectnarrative/travel-life-medellin` retains the original Cloudflare Workers + D1 + R2 architecture and its CMS/lead logic. The two repositories must not be treated as interchangeable backends.

## Local development and deployment

Run `npm install` (or the committed pnpm workflow) then `npm run dev`. `npm run build` runs `next build`, the same framework used by Vercel. Git pushes to `main` automatically start a Vercel production build in the linked project. Use Vercel deployment status/logs to confirm READY before sharing updates. `node scripts/check-aurea.mjs` provides static source checks, not browser QA.

## Launch gates

Before using AUREA for public commercial lead generation: trademark/domain clearance, actual concierge contact details, verified/lawful supplier content and media, data privacy policy, live persistent lead storage and notifications, proper administrator authentication, browser/mobile QA, and applicable Colombian tourism business registrations. Avoid publishing personal contact details copied from the original demo or brand mockups.

© AUREA Private Access — creative preview.
