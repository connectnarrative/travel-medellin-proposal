# AUREA Private Access — Medellín (private presentation)

Working private presentation prototype with server-rendered category/detail pages, ES/EN client presentation, Mi Llave browser persistence, database-backed trip and partner inquiries, authenticated CMS, and persistent media storage.

## Run and data
- `pnpm install` uses the committed lockfile.
- `pnpm build` creates the Worker build through the included Vinext/Next-compatible architecture.
- `pnpm db:generate` generates schema migrations. The hosting workflow applies them to D1 before release.
- D1 (`DB`) stores categories, public listing JSON, separate private commercial records, leads and site settings. R2 (`BUCKET`) stores media. Data access is server-only, with bound SQL parameters.
- This deployment uses Cloudflare D1/R2 and platform sign-in, **not Supabase**. Money OS was not modified. Moving to Vercel requires replacing the D1/R2/auth adapters, for example with the originally preferred Supabase stack; this is not a zero-config Vercel build.
- First content read idempotently imports 55 original prospect/concept records and 10 categories. A separate `editorial-luxury-v1` migration adds 30 bilingual luxury inspiration profiles from `lib/editorial.ts`, including on databases that were initialized previously. The public preview excludes unconfirmed named prospects, while all existing prospect records and CMS edits remain available to staff. Seed content is maintained in `lib/seed.ts`; subsequent CMS edits are authoritative. No production customer data is bundled.

## CMS
Open `/admin`, sign in through the hosting platform with `fkgalejandro@gmail.com`.
`ADMIN_EMAILS` may contain a server-managed comma-separated staff allowlist. Sharing the site and authorizing CMS access are separate steps. Do not expose management endpoints publicly without their existing authorization checks.

Tabs: Perfiles, Categorías, Solicitudes, Marca e inicio.
- Create, edit, duplicate, preview, feature, unpublish, archive or delete profiles.
- New categories get routes automatically. A category containing profiles cannot be deleted.
- Media supports JPG/PNG/WebP/AVIF and MP4/WebM up to 20 MB. Upload gallery assets and use “Mover antes” to reorder.
- Membership fee, renewal, tier and notes are stored separately and returned only to authorized admin requests.
- `published` requires a `confirmed` relationship. `demo` profiles visibly disclose concept imagery and unconfirmed status.
- Site settings include official logo, hero/coffee media, concierge WhatsApp and launch indexing.

## Content and launch
The AUREA V1.0 creative identity is approved and documented in `brand/AUREA_BRAND_LOCK.md`. Public-facing preview branding uses scalable SVG interpretations in `public/brand/` and an AUREA emblem favicon. Original moodboard reference images are preserved in the approved downloadable identity kit. Update CMS-provided assets only with AUREA-approved media. Photography is existing licensed concept imagery reused for the presentation, not verified imagery of a named business or a confirmed offering. PHOTO-CREDITS.json records sources and licenses.

Client WhatsApp is intentionally blank. Add the number (digits including country code) to enable a structured, user-initiated WhatsApp handoff after a successful database save. Forms do not send email notifications automatically and do not confirm bookings.

The site starts private and noindex. Confirm membership relationships, names, facts, neighborhood details, image rights and contact information before launch. Client controls render ES/EN; CMS labels are Spanish. Stable per-language SEO URLs/hreflang are a next production step. No payment collection or membership billing automation has been added.

## Verification
`node node_modules/typescript/bin/tsc --noEmit`
`node scripts/verify.mjs` launches an isolated local production Worker and exercises 16 HTTP/database/security checks. Local D1 must first have the generated migrations applied. Test records are local only.

Verified: production build; server rendering and all ten category routes; listing, membership, Mi Llave, Guatapé and about routes; 404; admin authorization; create/edit/delete persistence; protected commercial fields; publishing restrictions; lead idempotency; validation; media upload/readback; sitemap and robots.

Not verified in this environment: browser click-through, desktop/mobile screenshots, reduced-motion behavior in a browser, cross-reload browser storage, real platform sign-in end-to-end, production database readback and WebMCP runtime registration. CSS has responsive layouts, visible focus and reduced-motion handling; these require a browser acceptance pass before public launch. WebMCP exposes read-only local Mi Llave state when supported.

## Next production steps
1. Validate the AUREA trademark/domain/handle, obtain final production-reviewed logo artwork, licensed partner media, confirmed listings and a real concierge WhatsApp.
2. Add staff emails to the server allowlist and grant corresponding site access.
3. Run desktop/mobile browser acceptance and a real signed-in CMS + inquiry test on the deployment.
4. Approve privacy/retention policy, configure lead notifications, and decide whether to migrate to Supabase/Vercel.
5. Publish to the intended audience/domain, turn on SEO only after content approval, and register Search Console.

## AUREA V1 conversion update (October 2026)
- Approved visual direction and brand SVGs: `brand/AUREA_BRAND_LOCK.md` and `public/brand/`. Visual identity is approved for a **private demonstration only**, pending trademark and domain clearance.
- `/concierge`: private travel inquiries with date, group, interests, approximate budget, and notes. Users can request bespoke help without first saving a listing.
- `/partners`: applications from hotels, villas, restaurants, nightlife and experience suppliers; commercial terms are intentionally not advertised as an established monthly-membership product.
- `/membresia`: redirected to `/partners` for backwards compatibility.
- `/mi-llave` remains the saved-listing itinerary flow, and `/admin` remains the protected CMS.
- `/api/leads` still stores requests in the database. WhatsApp handoff appears only when an authentic concierge number has been configured; no automatic email/push notifications have been set up.
- Run `node scripts/check-aurea.mjs` for a lightweight source-level smoke check. The legacy `scripts/verify.mjs` predates the editorial-demo hiding, rebrand and redirects and needs its assertions updated before using it as a release gate.
- This codebase currently depends on Cloudflare Workers + D1 + R2 + the hosting authentication adapter. A Vercel deployment requires an appropriate backend adapter/migration and credentials; it is not a zero-configuration port.
- Before public promotion: confirm trademark availability (not guaranteed), image/media rights, partner claims, production build, browser QA, RNT/privacy compliance as applicable, real contact information, and production lead notification handling.
