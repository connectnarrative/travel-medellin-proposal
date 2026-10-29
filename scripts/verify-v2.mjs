import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const base=process.env.BASE_URL||'http://localhost:4173';
const routes=['/','/partners','/partners/proposal','/my-monteclave','/concierge','/nosotros','/coleccion','/privacy','/credits','/villas-medellin','/hoteles-medellin','/restaurantes-medellin','/rooftops-medellin','/transporte-privado-medellin','/experiencias-medellin','/spa-wellness-medellin','/chefs-privados-medellin','/helicopteros-medellin','/servicios-vip-medellin','/seguridad-medellin'];
for(const route of routes){const res=await fetch(base+route);assert.equal(res.status,200,route);const html=await res.text();assert(html.includes('noindex'),route+' must stay noindex');assert(html.includes('id="main"'),route+' requires main landmark');assert(html.includes('MONTECLAVE'),route+' requires Monteclave branding');assert(!html.includes('AUREA'),route+' must not expose the previous brand');assert(!html.includes('Internal Server Error'),route);if(route==='/partners/proposal'){assert(html.includes('$200')&&html.includes('$500'));assert(html.includes('MONTECLAVE Signature')&&html.includes('MONTECLAVE Collection'));assert(html.includes('id="application"'));}if(route==='/coleccion'){const hrefs=[...html.matchAll(/href="(\/coleccion\/[^"?]+)/g)].map(x=>x[1]);assert(hrefs.length>=11);for(const detail of [...new Set(hrefs)]){const d=await fetch(base+detail);assert.equal(d.status,200,detail);const h=await d.text();assert(h.includes('PLAN THIS EXPERIENCE')||h.includes('PLANEAR ESTA EXPERIENCIA'));}}console.log('PASS',route)}
// Client presentation must not expose operational routes or sales-only instructions.
for(const route of ['/admin','/partners/guide']){
 const res=await fetch(base+route);
 assert([200,404].includes(res.status),route);
 const html=await res.text();
 assert(html.includes('404 / MONTECLAVE'),route+' should render a branded not-found page');
 assert(!html.includes('SALES TEAM GUIDE'),route+' must not expose team scripts');
 console.log('PASS client-only surface',route);
}
for(const route of ['/partners','/partners/proposal']){
 const res=await fetch(base+route);
 const html=await res.text();
 assert(!html.includes('href="/partners/guide"'),route+' must not link internal guide');
 assert(!html.includes('value-calculator'),route+' must not expose commercial margin tool');
 console.log('PASS presentation-only surface',route);
}
// Next.js returns 200 after streaming starts; require the branded not-found UI and noindex in either case.
// https://nextjs.org/docs/app/api-reference/file-conventions/not-found
const bad=await fetch(base+'/not-a-real-listing');assert([200,404].includes(bad.status));const missing=await bad.text();assert(missing.includes('404 / MONTECLAVE'));assert(missing.includes('noindex'));console.log('PASS branded not-found UI and noindex');
for(const path of ['/api/admin','/api/media']){const res=await fetch(base+path,{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'});assert(res.status>=400,path+' must reject unauthenticated writes');console.log('PASS access denied',path,res.status)}
const foreign=await fetch(base+'/api/leads',{method:'POST',headers:{'Content-Type':'application/json',Origin:'https://untrusted.example'},body:'{}'});assert.equal(foreign.status,403);
const invalid=await fetch(base+'/api/leads',{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'});assert.equal(invalid.status,400);
const valid=await fetch(base+'/api/leads',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({kind:'partner',requestId:crypto.randomUUID(),selected:[],data:{name:'QA example',email:'qa@example.invalid',whatsapp:'QA only',business:'QA example',consent:'true'}})});assert.equal(valid.status,503,'Unavailable persistence must never claim success');
console.log('PASS fail-closed inquiry endpoint; no real lead persisted');
const photos=JSON.parse(await readFile(new URL('../lib/listing-photo-manifest.json',import.meta.url),'utf8'));
assert.equal(photos.length,32);assert.equal(new Set(photos.map(p=>p.path)).size,32);
await Promise.all(photos.map(async p=>{const r=await fetch(base+p.path,{method:'HEAD'});assert.equal(r.status,200,p.path);assert(r.headers.get('content-type')?.startsWith('image/'),p.path);}));
console.log('PASS all 32 distinct listing images available');
console.log('HTTP verification complete. Browser interactions and visual QA are not covered by this check.');
