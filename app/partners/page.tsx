import type {Metadata} from 'next';
import {T} from '../ui';
import {ArrowUpRight,KeyRound,Check} from 'lucide-react';

export const metadata:Metadata={title:'Partner with AUREA — Hospitality Partners Medellín',description:'Explore AUREA Collection and Signature partnership presentations for Medellín hospitality businesses.',robots:{index:false,follow:false}};

const sectors=[
  {slug:'hotels',image:'/images/listings/01-suite-window.webp',eyebrow:'01 / STAY',titleEs:'Hoteles y villas',titleEn:'Hotels & villas',copyEs:'Más contexto para una estancia que merece ser elegida.',copyEn:'More context for a stay worth choosing.'},
  {slug:'dining',image:'/images/listings/09-private-dining.webp',eyebrow:'02 / DINE',titleEs:'Restaurantes y rooftops',titleEn:'Dining & rooftops',copyEs:'De una cena a una ocasión especial.',copyEn:'Turn a dinner into an occasion.'},
  {slug:'wellness',image:'/images/listings/14-private-spa.webp',eyebrow:'03 / EXPERIENCE',titleEs:'Wellness y servicios',titleEn:'Wellness & services',copyEs:'Una experiencia que se entiende antes de reservar.',copyEn:'An experience guests understand before they book.'}
];

export default function PartnersPage(){return <main id="main" className="partner-acquisition">
  <section className="aurea-landing-hero partner-hero partner-new-hero">
    <img src="/images/listings/10-rooftop-drinks.webp" alt="Cocktail on a terrace overlooking city lights; illustrative hospitality photography" fetchPriority="high"/>
    <div className="aurea-landing-overlay"/>
    <div className="aurea-landing-heading">
      <span className="eyebrow">AUREA PRIVATE ACCESS / MEDELLÍN</span>
      <h1><T es="Tu negocio merece" en="Your business deserves"/><br/><T es="ser parte del viaje." en="a place in the journey."/></h1>
      <p><T es="Presenta tu experiencia ante viajeros que exploran Medellín: una vitrina editorial bilingüe, presencia en una colección curada y una forma de preparar solicitudes con contexto." en="Present your experience to travelers exploring Medellín: a bilingual editorial showcase, placement in a curated collection, and a way to prepare inquiries with context."/></p>
      <div className="partner-hero-actions">
        <a className="button gold" href="/partners/proposal#preview"><T es="VER CÓMO APARECERÍA MI NEGOCIO" en="PREVIEW MY BUSINESS"/><ArrowUpRight size={17}/></a>
        <a className="partner-hero-secondary" href="/partners/proposal#packages"><T es="CONOCER LOS PLANES · $200 / $500" en="VIEW PLANS · $200 / $500"/><ArrowUpRight size={15}/></a>
      </div>
    </div>
    <span className="partner-hero-caption"><T es="Imagen ilustrativa · Colección en formación" en="Illustrative image · Collection in development"/></span>
  </section>

  <section className="section ivory partner-value">
    <span className="eyebrow">WHY AUREA</span>
    <div className="partner-value-intro"><h2><T es="No vendas un anuncio." en="Not just an ad."/><br/><T es="Presenta una experiencia." en="Show the experience."/></h2><p><T es="La decisión de un viajero comienza mucho antes de escribir un mensaje. AUREA permite descubrir un lugar, entender su propuesta, guardarlo con otros planes y preparar una solicitud relevante. Estamos seleccionando la primera colección. La incorporación depende de criterios editoriales, acuerdos claros y estándares de servicio." en="A traveler's decision starts long before they send a message. AUREA helps guests discover a place, understand its offering, save it with other plans and prepare a relevant inquiry. We are selecting the first collection. Inclusion follows editorial standards, clear agreements and service quality."/></p></div>
    <div className="partner-path">
      <article><span>01 / DISCOVER</span><h3><T es="Descubrir" en="Discover"/></h3><p><T es="Perfil bilingüe con imágenes, ubicación y razones para elegirte." en="Bilingual profile with imagery, location and reasons to choose you."/></p></article>
      <article><span>02 / SAVE</span><h3><T es="Guardar" en="Save"/></h3><p><T es="El viajero suma tu propuesta a My AUREA junto con su itinerario." en="Guests add your experience to My AUREA alongside their itinerary."/></p></article>
      <article><span>03 / INQUIRE</span><h3><T es="Consultar" en="Inquire"/></h3><p><T es="Una solicitud preparada con fechas, tipo de ocasión y preferencias." en="A prepared inquiry with dates, occasion and preferences."/></p></article>
    </div>
  </section>

  <section className="section partner-proof">
    <div className="section-top"><div><span className="eyebrow">A PLACE FOR YOUR BRAND</span><h2><T es="Descubre" en="Discover"/><br/><T es="tu lugar en AUREA." en="your place in AUREA."/></h2></div><div><p><T es="Una presentación personalizada por sector para imaginar cómo luciría tu marca en una colección pensada para los viajes a Medellín." en="Explore a sector-specific presentation and envision how your brand could appear in a curated Medellín travel collection."/></p><a className="text-link" href="/partners/proposal#preview"><T es="EXPLORAR PRESENTACIÓN PERSONALIZADA" en="EXPLORE PERSONALIZED PREVIEW"/><ArrowUpRight size={16}/></a></div></div>
    <div className="partner-sector-grid">{sectors.map(s=><a href={'/partners/proposal?sector='+s.slug+'#preview'} className="partner-sector-card" key={s.slug}><img src={s.image} alt={s.titleEn+' illustrative service photography'} loading="lazy"/><span className="partner-sector-scrim"/><div><span className="eyebrow">{s.eyebrow}</span><h3><T es={s.titleEs} en={s.titleEn}/></h3><p><T es={s.copyEs} en={s.copyEn}/></p><strong><T es="VER PRESENTACIÓN" en="SEE PREVIEW"/><ArrowUpRight size={15}/></strong></div></a>)}</div>
    <p className="partner-illustrative-note"><T es="Las imágenes y los perfiles de demostración ilustran el formato; no representan aliados confirmados." en="Images and sample profiles illustrate the format; they are not confirmed partner listings."/></p>
  </section>

  <section className="section ivory partner-plans-summary">
    <div className="section-top"><div><span className="eyebrow">AUREA / PARTNER PACKAGES</span><h2><T es="Dos formas de" en="Two ways to"/><br/><T es="estar presente." en="be seen."/></h2></div><p><T es="Elegimos los negocios por calidad; los planes definen posición y acompañamiento. Cada propuesta se revisa individualmente." en="We select businesses for quality; the plans define placement and support. Each proposal is reviewed individually."/></p></div>
    <div className="partner-two-plans">
      <article><div><span>01 / AUREA COLLECTION</span><h3>$200 <small>USD / <T es="mes" en="month"/></small></h3><p><T es="Presencia en la selección Top 10 de una categoría." en="Placement within a category's Top 10 collection."/></p></div><ul><li><Check size={16}/><T es="Perfil editorial bilingüe" en="Bilingual editorial profile"/></li><li><Check size={16}/><T es="Hasta 12 imágenes" en="Up to 12 images"/></li><li><Check size={16}/><T es="Acceso a la planificación My AUREA" en="My AUREA planning integration"/></li><li><Check size={16}/><T es="Reporte mensual de actividad" en="Monthly activity report"/></li></ul><a className="button dark" href="/partners/proposal?plan=collection#packages"><T es="EXPLORAR COLLECTION" en="EXPLORE COLLECTION"/><ArrowUpRight size={16}/></a></article>
      <article className="partner-premium-plan"><div><span>02 / AUREA SIGNATURE</span><h3>$500 <small>USD / <T es="mes" en="month"/></small></h3><p><T es="Posición premium al inicio de la colección y mayor presencia editorial." en="Front-of-collection premium placement and deeper editorial presence."/></p></div><ul><li><Check size={16}/><T es="Todo lo de Collection" en="Everything in Collection"/></li><li><Check size={16}/><T es="Franja premium y rotación en inicio" en="Premium band and homepage rotation"/></li><li><Check size={16}/><T es="Hasta 24 imágenes + video" en="Up to 24 images + video"/></li><li><Check size={16}/><T es="Pieza editorial mensual y revisión comercial" en="Monthly editorial asset and commercial review"/></li></ul><a className="button gold" href="/partners/proposal?plan=signature#packages"><T es="EXPLORAR SIGNATURE" en="EXPLORE SIGNATURE"/><ArrowUpRight size={16}/></a></article>
    </div>
    <p className="partner-plan-disclosure"><T es="Top 10 identifica una colección comercial curada, no un ranking independiente. Máximo propuesto de diez aliados por categoría, incluidos hasta tres Signature, sujeto a confirmación. No garantizamos tráfico, consultas ni reservas." en="Top 10 identifies a curated commercial collection, not an independent ranking. Proposed capacity of ten partners per category, including up to three Signature, subject to confirmation. Traffic, inquiries and bookings are not guaranteed."/></p>
  </section>

  <section className="section partner-final-cta"><div><span className="eyebrow">THE NEXT STEP</span><KeyRound size={36}/><h2><T es="Empieza con una" en="Start with a"/><br/><T es="conversación." en="conversation."/></h2><p><T es="Conversemos sobre tu negocio, tu propuesta y cómo podría formar parte de AUREA. La evaluación es sin compromiso." en="Let's explore your business, its offering and how it could become part of AUREA. There is no obligation to apply."/></p></div><div className="partner-final-actions"><a className="button gold" href="/partners/proposal#application"><T es="PREPARAR SOLICITUD" en="PREPARE APPLICATION"/><ArrowUpRight size={17}/></a></div></section>
</main>}
