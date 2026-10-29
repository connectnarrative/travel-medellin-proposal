import {content} from '@/lib/server';
import {T,Save} from './ui';
import {ArrowUpRight} from 'lucide-react';
export const dynamic='force-dynamic';
export default async function Home(){
 const {categories,listings}=await content();
 const doors=['live','dine','night','wellness','explore','move'].map(id=>categories.find(c=>c.id===id)).filter(c=>!!c);
 const picks=['stay','dine','explore'].map(id=>listings.find(l=>l.category===id)!).filter(Boolean);
 return <main id="main" className="quiet-home">
  <section className="quiet-hero">
   <img src="/images/hero.webp" alt="Medellín at sunset across the Aburrá Valley" fetchPriority="high"/>
   <div className="quiet-hero-copy"><span className="eyebrow">MEDELLÍN · COLOMBIA</span><h1>Medellín,<br/>unlocked.</h1><p><T es="Estancias, gastronomía y experiencias para descubrir la ciudad a tu manera." en="Stays, dining and experiences to discover the city your way."/></p><a href="#collection" className="button gold"><T es="EXPLORAR LA COLECCIÓN" en="EXPLORE THE COLLECTION"/><ArrowUpRight size={17}/></a></div>
  </section>
  <section id="collection" className="section quiet-collection">
   <div className="quiet-heading"><div><span className="eyebrow">MONTECLAVE</span><h2><T es="Encuentra tu Medellín." en="Find your Medellín."/></h2></div><a href="/coleccion" className="text-link"><T es="VER TODO" en="VIEW ALL"/><ArrowUpRight size={16}/></a></div>
   <div className="quiet-doors">{doors.map(c=><a key={c.id} href={'/'+c.slug}><img src={listings.find(l=>l.category===c.id)?.image||c.image} alt={c.en+' · illustrative photography'} loading="lazy"/><div><h3><T es={c.name} en={c.en}/></h3><ArrowUpRight size={20}/></div></a>)}</div>
   <p className="demo-note"><T es="Colección de inspiración. Perfiles y fotos ilustrativos; aliados y disponibilidad por confirmar." en="Inspiration collection. Illustrative profiles and photos; partners and availability are not yet confirmed."/></p>
  </section>
  <section className="section ivory quiet-picks">
   <div className="quiet-heading"><div><span className="eyebrow"><T es="UNA PRIMERA SELECCIÓN" en="A FIRST SELECTION"/></span><h2><T es="Imagina tu estancia." en="Imagine your stay."/></h2></div><p><T es="Abre un perfil y guarda lo que te interese." en="Open a profile and save what interests you."/></p></div>
   <div className="listing-grid">{picks.map(l=><article className="listing-card" key={l.id}><a href={'/coleccion/'+l.slug}><div className="listing-photo"><img src={l.image} alt={l.alt} loading="lazy"/><span><T es="EJEMPLO" en="SAMPLE"/></span></div><h3><T es={l.name} en={l.nameEn||l.name}/></h3><p><T es={l.tagline} en={l.taglineEn}/></p></a><Save listing={l}/></article>)}</div>
  </section>
  <section className="section quiet-planning"><div><span className="eyebrow"><T es="TU VIAJE" en="YOUR TRIP"/></span><h2><T es="Dale forma a tu plan." en="Shape your plans."/></h2><p><T es="Reúne tus fechas, tu grupo y tus preferencias en un resumen para compartir." en="Bring your dates, group and preferences together in a brief to share."/></p></div><a href="/concierge#plan" className="button gold"><T es="PLANEAR MI VIAJE" en="PLAN MY TRIP"/><ArrowUpRight size={17}/></a></section>
 </main>
}
