import {origin,content} from '@/lib/server';
export default async function sitemap(){const d=await content();return [{url:origin},{url:origin+'/membresia'},{url:origin+'/coleccion'},...d.categories.map(c=>({url:origin+'/'+c.slug})),...d.listings.filter(l=>l.status==='published'&&!l.noindex).map(l=>({url:origin+'/coleccion/'+l.slug}))]}
