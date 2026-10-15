import {categories as seededCategories} from './seed';
import {editorialListings} from './editorial';
import type {Category,Listing,SiteSettings} from './types';

/**
 * Vercel presentation adapter, intentionally read-only and independently deployable.
 * The existing Cloudflare-backed main website retains its production database,
 * private records and CMS. No privileged API keys are bundled in this demo.
 */
export const origin='https://travel-medellin-proposal-fkgalejandro-9911s-projects.vercel.app';

export async function content(all=false):Promise<{categories:Category[];listings:Listing[]}> {
  void all;
  return {categories:seededCategories,listings:editorialListings};
}

export async function siteSettings():Promise<SiteSettings>{
  return {
    heroImage:'/images/hero.webp',heroAlt:'El valle de Medellín al atardecer',
    coffeeImage:'/images/coffee.webp',coffeeAlt:'Una taza de café colombiano',
    logoUrl:'/brand/aurea-logo-light.svg',whatsapp:'',seoLive:false
  };
}

// The production CMS must not be exposed on an unauthenticated demo host.
export async function admin():Promise<boolean>{return false;}
export function database():never{throw new Error('Presentation-only host: persistent database unavailable');}
export function sameOrigin(req:Request):boolean{const o=req.headers.get('origin');return !o||o===new URL(req.url).origin;}
