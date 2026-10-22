# AUREA V2 — release status, 2026-10-22

## Implemented
- New editorial homepage with animated arch/key introduction, immediate skip, session memory and reduced-motion handling.
- Traveler / partner split entrance; ivory, obsidian and sage sections; upright Playfair Display and Montserrat hosted locally.
- Eleven collection categories, including private chefs, VIP assistance and private security. Existing coffee URL redirects to experiences.
- Bilingual collection names, editorial concept listings, detail requests carrying the selected concept, category-specific planning attributes, related experiences and search.
- My AUREA: existing saved-list migration preserved, browser persistence, reorder/remove, dates/guests, copy and text export. Old `/mi-llave` redirects.
- Partner overview and `/partners/proposal`: $200 Collection / $500 Signature, tailored sector messaging, personal presentation heading, plan comparison, transparent placement policy, editable contribution-margin calculator, print styles and a link containing only non-personal sector/plan values.
- Inquiry drafts retain entered information when edited; partner briefs include package, location, credentials and portfolio. No false submission confirmations.
- Noindex preserved. Preview privacy explanation added. Admin APIs remain denied and uploads unavailable.

## Verification
- Production build and TypeScript passed after implementation and final functional changes.
- HTTP test script: `scripts/verify-v2.mjs`. Checks public routes, listing routes, noindex, 404s, admin denial, media denial, cross-origin rejection, invalid payload rejection and fail-closed unavailable persistence. Runtime result must be recorded after deployment.
- Browser visual and interaction QA is BLOCKED: the cloud browser rejected the local preview under its URL/security policy. No alternate browser or automation bypass was attempted. Before/after screenshots, mobile Safari, keyboard walkthrough, print pagination and actual client interactions are not verified.
- Local HTTP requests could not reach the supervised preview; do not count as a test pass. Vercel build and permitted HTTP checks remain available.

## Operational blockers — do not claim launch-ready
1. No dedicated AUREA Supabase project exists in the connected account. Only Money OS and RAÍCES projects were found; neither was modified. The available organization is `connectnarrative.com`. The Supabase project-creation tool requires the user to choose the organization, and any nonzero cost must be confirmed before provisioning.
2. No verified AUREA notification recipient, sending service/domain or WhatsApp destination is configured. Live lead capture must stay inactive until durable storage, retrieval and notifications pass end-to-end verification.
3. CMS, CRM, partner auth, tenant isolation, approval workflows and secure uploads are not connected or operational on Vercel. The pre-existing Cloudflare source and data remain untouched. No simulated dashboard is presented as real.
4. Expiring/revocable itinerary links need secure server persistence; the working local alternative is text export/copy.
5. No licensed cinematic film was supplied or retrieved. The homepage uses the existing licensed still photography with restrained motion; it is not represented as a completed travel film. No new supplier relationships or verified inventory are fabricated.
6. Legal/controller information and trademark clearance remain launch prerequisites under the user's brief. Site remains noindex; no domains or paid services were purchased.

## Proposed operating terms
- Collection: US$200/month; one category placement; bilingual profile; 12 supplied images; one update batch/month; agreed guest benefit; initial share card; monthly attributed activity report.
- Signature: US$500/month; Collection benefits plus premium band before Collection, rotation among Signature partners, shared homepage rotation, 24 supplied images and supplied video, two update batches/month, one editorial digital asset/month and 30-minute monthly review.
- Proposed capacity: ten total active partners/category, up to three Signature within that total. Actual capacity is confirmed during review. Paid placements must be labeled sponsored; not an independent ranking.
- No guaranteed bookings, audience size, revenue or ROI. No fabricated urgency. Separate written terms govern taxes, COP conversion, cancellation and any booking commission. Fees start only when agreed delivery and inquiry capability are active.

## Release decision
Feature branch is committed locally. Publishing it was blocked twice by automatic approval review: the reviewer requires direct authorization to disclose source to the existing public GitHub repository. The outgoing-change scan found no private contact values, credentials or environment files (only qa@example.invalid in the test). No Vercel preview has been created for these changes. Once directly authorized, push the feature branch and create a Vercel PREVIEW deployment. Do not merge to production until the brief's visual QA and launch requirements are met, or the user explicitly approves a narrower presentation-only release with the limitations visible.


## Publication update — user approval received
The user explicitly approved publishing in the follow-up turn. GitHub commit cb71347e79c44353456ff8c60c5f369b798428ba was published to feat/aurea-v2-partner-proposal using the connected GitHub app (the terminal has no GitHub write credentials). The remote tree exactly matched the locally built tree. Vercel deployment dpl_EUYyQzTVz2ShmaqGTkgu1XaDc2E3 reached READY as a preview.

HTTP checks passed for all 19 public routes, all linked listing-detail pages and noindex. Next.js streamed not-found responses use status 200 with noindex, as documented by Next.js; the test now validates the branded error UI and noindex. Legacy branding on loading/404 screens was corrected and error pages made bilingual. Browser interaction/visual QA remains unverified. Operational blockers above remain in effect.
