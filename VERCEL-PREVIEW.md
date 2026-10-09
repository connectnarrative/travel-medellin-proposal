# Vercel presentation deployment

This is a read-only presentation copy of the Travel & Life Medellín project.

- Source and Cloudflare-backed working application: https://github.com/connectnarrative/travel-life-medellin
- GitHub presentation/deployment repository: https://github.com/connectnarrative/travel-medellin-proposal
- The existing artwork, 10 categories, 55 concept profiles, bilingual navigation and client-side Mi Llave UI remain in place.
- The Vercel project overrides the build command with `npx next build`; source repo continues using the Cloudflare Vinext Worker build.
- CMS authentication and D1/R2 storage are NOT connected on Vercel. Admin returns forbidden; uploads, stored enquiries, and R2 media are not available.
- No fake submissions are saved. Endpoints return explicit unavailable responses.
- Keep this website noindex, and label concept profiles as unconfirmed.
- Before enabling real customer enquiries or paid partner onboarding, migrate D1/R2/auth to a suitable Vercel-compatible backend, apply migrations and access controls, and run integration tests.
- Replace temporary icon and unconfirmed concept images with the approved official assets and verified partner media before public release.
