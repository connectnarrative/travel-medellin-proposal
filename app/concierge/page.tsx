import type {Metadata} from 'next';
import {RequestForm} from '@/app/discovery';
import {T} from '@/app/ui';
import {content} from '@/lib/server';
import {ArrowUpRight,CalendarDays,MapPin,ShieldCheck} from 'lucide-react';
export const metadata:Metadata={title:'Concierge privado en Medellín | AUREA',description:'Solicita un itinerario privado en Medellín con AUREA: estadías, experiencias, restaurantes, transporte y noches especiales. Solicitud sin compromiso.',robots:{index:false,follow:false}};
export default async function ConciergePage({searchParams}:{searchParams:Promise<{listing?:string}>}){const q=await searchParams;const {listings}=await content();const selected=listings.filter(l=>l.slug===q.listing);return <main id="main" className="aurea-landing">
<section className="aurea-landing-hero">
 <img src="/images/hero.webp" alt="Medellín y las montañas del Valle de Aburrá al atardecer" fetchPriority="high"/>
 <div className="aurea-landing-overlay"/>
 <div className="aurea-landing-heading"><span className="eyebrow">AUREA / PRIVATE CONCIERGE</span>
 <h1><T es="Cada viaje es" en="Every journey is"/><br/><em><T es="personal." en="personal."/></em></h1>
 <p><T es="Reúne fechas, alojamiento, transporte y experiencias en una solicitud. Puedes empezar desde cero o con tus favoritos de la colección." en="Bring dates, stays, transport and experiences into one inquiry. Start from scratch or with your collection favorites."/></p>
 <a className="button gold" href="#plan"><T es="DISEÑA TU VIAJE" en="DESIGN YOUR TRIP"/><ArrowUpRight size={17}/></a>
 </div>
</section>
<section className="section aurea-landing-content" id="plan">
 <div className="aurea-landing-copy"><span className="eyebrow">PRIVATE ACCESS TO THE EXTRAORDINARY</span>
 <h2><T es="Dinos cómo" en="Tell us how"/><br/><em><T es="quieres vivirlo." en="you imagine it."/></em></h2>
 <p><T es="Comparte las fechas, el grupo y las experiencias que tienes en mente. No necesitas elegir nada de la colección antes de solicitar ayuda." en="Share your dates, group size, and the experiences you have in mind. You don't need to save anything from our collection to request assistance."/></p>
 <div className="aurea-benefit"><CalendarDays size={23}/><span><T es="Estancias, villas y apartamentos" en="Hotels, villas and private residences"/></span></div>
 <div className="aurea-benefit"><MapPin size={23}/><span><T es="Gastronomía, experiencias y vida nocturna" en="Dining, experiences and nightlife"/></span></div>
 <div className="aurea-benefit"><ShieldCheck size={23}/><span><T es="Transporte, logística y servicios privados" en="Transportation, logistics and private services"/></span></div>
 <p className="demo-note"><T es="Una solicitud no es una reserva. Las opciones y condiciones se verifican directamente antes de cotizar." en="An inquiry is not a reservation. Options and terms are verified before quoting."/></p>
 </div>
 <div className="aurea-form-wrap"><span className="eyebrow">START THE CONVERSATION</span><h3><T es="Los detalles de tu viaje." en="Your trip details."/></h3><RequestForm kind="trip" selected={selected}/></div>
</section>
</main>}