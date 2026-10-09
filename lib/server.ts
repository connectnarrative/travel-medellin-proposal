import { categories as seedCategories, listings as seedListings } from './seed';
import type { Category, Listing, SiteSettings } from './types';

// Vercel presentation mode: display the existing approved demonstration dataset.
// The original Cloudflare D1/R2-powered CMS is preserved in the original repository
// https://github.com/connectnarrative/travel-life-medellin
// Persistent CMS and lead storage must be migrated before taking real submissions.
export const database = (): D1Database => {
  throw new Error('Persistent CMS database is not configured for this Vercel demonstration.');
};

export async function admin(): Promise<boolean> {
  // No administrative writes or privileges until real Vercel authentication and storage exist.
  return false;
}

export async function seed(): Promise<void> {}

export async function content(all = false): Promise<{categories: Category[]; listings: Listing[]}> {
  const categories = [...seedCategories].sort((a, b) => a.order - b.order);
  const listings = seedListings
    .filter(l => all || (['published', 'demo'].includes(l.status) &&
      !['paused', 'archived'].includes(l.relationship)))
    .sort((a, b) => a.priority - b.priority);
  return { categories, listings };
}

export const origin = 'https://travel-medellin-proposal-fkgalejandro-9911s-projects.vercel.app';

export function sameOrigin(req: Request): boolean {
  const requestOrigin = req.headers.get('origin');
  return !requestOrigin || requestOrigin === new URL(req.url).origin || requestOrigin === origin;
}

export async function siteSettings(): Promise<SiteSettings> {
  return {
    heroImage: '/images/hero.webp',
    heroAlt: 'El valle de Medellín al atardecer',
    coffeeImage: '/images/coffee.webp',
    coffeeAlt: 'Una taza de café colombiano',
    logoUrl: '',
    whatsapp: '',
    seoLive: false,
  };
}
