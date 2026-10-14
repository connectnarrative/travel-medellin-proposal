import {content,siteSettings} from '@/lib/server';
import {Intro,T,Save,Reveal} from './ui';
import {ArrowUpRight,KeyRound,Compass,CalendarDays,HeartHandshake} from 'lucide-react';
export const dynamic='force-dynamic';

export default async function Home(){
  let data;
  try{data=await content()}catch{
    return <main id="main" className="page"><h1>Volvemos en un momento.</h1><p>La colección no está disponible. Intenta de nuevo.</p></main>;
  }
  const {categories,listings}=data;
  const settings=await siteSettings();
  const primary=categories.filter(c=>['stay','dine','night'].includes(c.id));
  const more=categories.filter(c=>!['stay','dine','night'].includes(c.id));
  const curated=listings.filter(l=>l.featured&&['stay','live','dine','night','explore','move'].includes(l.category)).slice(0,6);
  return <main id="main">
    <Intro/>
    <section className="hero hero-editorial">
      <img src={settings.heroImage} alt={settings.heroAlt} fetchPriority="high"/>
      <div className="hero-shade"/>
      <div className="hero-coordinate">6°14′41″N 75°34′29″W <span>COLOMBIA</span></div>
      <div className="hero-copy">
        <div className="eyebrow"><span/><T es="ACCESO PRIVADO A LO EXTRAORDINARIO" en="PRIVATE ACCESS TO THE EXTRAORDINARY"/></div>
        <h1><T es="Una ciudad." en="One city."/><br/><em><T es="Infinitas posibilidades." en="Endless possibilities."/></em></h1>
        <p><T es="Estancias extraordinarias, mesas memorables, noches únicas y experiencias privadas. Descubre la ciudad desde otra perspectiva." en="Extraordinary stays, memorable tables, remarkable nights and private experiences. See Medellín from another perspective."/></p>
        <div className="hero-buttons">
          <a href="#coleccion" className="button gold"><T es="EXPLORAR LA COLECCIÓN" en="EXPLORE THE COLLECTION"/> <ArrowUpRight size={16}/></a>
          <a href="/concierge" className="text-link"><KeyRound size={17}/><T es="CONCIERGE PRIVADO" en="PRIVATE CONCIERGE"/></a>
        </div>
      </div>
      <div className="hero-bottom"><span><T es="UNA SELECCIÓN EDITORIAL" en="AN EDITORIAL COLLECTION"/></span><span className="scroll-label"><T es="DESCUBRE MÁS" en="DISCOVER MORE"/><i/></span><span>AUREA · PRIVATE ACCESS</span></div>
    </section>

    <section className="collection section" id="coleccion">
      <Reveal className="section-top">
        <div><span className="eyebrow">THE MEDELLÍN EDIT</span><h2><T es="Lo excepcional" en="The exceptional"/><br/><em><T es="está en los detalles." en="is in the details."/></em></h2></div>
        <p><T es="Imagina tu Medellín ideal. Explora categorías creadas para inspirar experiencias que nuestro equipo podrá personalizar y verificar." en="Imagine your ideal Medellín. Explore curated themes to inspire experiences our team can tailor and verify."/></p>
      </Reveal>
      <div className="editorial-grid">
        {primary.map((c,i)=><a className={'category-tile tile-'+i} href={'/'+c.slug} key={c.id}>
          <img src={c.image} alt={c.name+' · imagen conceptual'} loading="lazy"/>
          <span className="tile-number">0{i+1}</span>
          <div><span className="eyebrow"><T es={c.name} en={c.en}/></span><h3>{c.label}</h3><span className="tile-explore"><T es="DESCUBRIR" en="DISCOVER"/><ArrowUpRight size={18}/></span></div>
        </a>)}
      </div>
      <div className="category-index">{more.map(c=><a href={'/'+c.slug} key={c.id}><span>{c.label}</span><small><T es={c.name} en={c.en}/></small><ArrowUpRight size={17}/></a>)}</div>
      <p className="demo-note"><T es="Colección de inspiración: fotografías ilustrativas y propuestas conceptuales. Ninguna opción representa una reserva, propiedad o colaboración confirmada." en="Inspiration collection: illustrative photography and conceptual experiences. No option represents a confirmed booking, property or partnership."/></p>
    </section>

    <section className="luxe-story">
      <div className="luxe-story-image"><img src="/images/guatape.webp" alt="Paisajes de Guatapé, Antioquia" loading="lazy"/><span>ANTIOQUIA / BEYOND THE CITY</span></div>
      <div className="luxe-story-copy">
        <span className="eyebrow"><T es="MÁS ALLÁ DE LO CONVENCIONAL" en="BEYOND THE EXPECTED"/></span>
        <h2><T es="El lujo es" en="Luxury is"/><br/><em><T es="tener opciones." en="having options."/></em></h2>
        <p><T es="Una tarde entre montañas. Una mesa escondida. El primer brindis sobre la ciudad. No se trata de verlo todo: se trata de descubrir lo que importa para ti." en="An afternoon in the mountains. An intimate dinner. A first toast above the city. It's not about seeing everything; it's about discovering what matters to you."/></p>
        <a className="text-link" href="/experiencias-medellin"><T es="EXPLORAR EXPERIENCIAS" en="EXPLORE EXPERIENCES"/><ArrowUpRight size={18}/></a>
      </div>
    </section>

    <section className="section selected">
      <div className="section-top">
        <div><span className="eyebrow"><T es="EL ARTE DE ELEGIR" en="THE ART OF CHOOSING"/></span><h2><T es="Ideas para un" en="Ideas for an"/><br/><em><T es="viaje inolvidable." en="unforgettable trip."/></em></h2></div>
        <a className="text-link" href="/coleccion"><T es="TODA LA COLECCIÓN" en="THE FULL COLLECTION"/><ArrowUpRight size={17}/></a>
      </div>
      <p className="demo-note"><T es="Una primera mirada al universo AUREA. Son conceptos editoriales de muestra, no proveedores confirmados." en="A first look at the AUREA world. These are editorial preview concepts, not confirmed suppliers."/></p>
      <div className="listing-grid">
        {curated.map(l=><article className="listing-card" key={l.id}>
          <a href={'/coleccion/'+l.slug}><div className="listing-photo"><img src={l.image} loading="lazy" alt={l.alt}/><span><T es="CONCEPTO" en="CONCEPT"/></span></div>
          <span className="eyebrow">{categories.find(c=>c.id===l.category)?.label} / EDITORIAL</span><h3>{l.name}</h3>
          <p className="listing-blurb"><T es={l.tagline} en={l.taglineEn}/></p></a>
          <Save listing={l}/>
        </article>)}
      </div>
    </section>

    <section className="coffee-story">
      <img src={settings.coffeeImage} loading="lazy" alt={settings.coffeeAlt}/>
      <div><span className="eyebrow">THE COFFEE CHAPTER</span><h2><T es="Cada gran día" en="Every great day"/><br/><em><T es="tiene un comienzo." en="has a beginning."/></em></h2>
      <p><T es="El café es parte del carácter de Colombia. Descubre una forma más pausada y auténtica de acercarte a su cultura." en="Coffee is part of Colombia's character. Discover a slower, more thoughtful way to explore its culture."/></p>
      <a className="text-link" href="/cafes-medellin"><T es="DESCUBRIR CAFÉS" en="DISCOVER COFFEE"/><ArrowUpRight size={18}/></a></div>
    </section>

    <section className="private-journey section">
      <div className="private-journey-intro"><span className="eyebrow">PERSONAL. PRIVATE. CONSIDERED.</span>
        <h2><T es="El viaje comienza" en="Your journey begins"/><br/><em><T es="contigo." en="with you."/></em></h2>
        <p><T es="No necesitas tenerlo todo decidido. Guarda lo que te inspira y comparte tu idea de viaje. Nuestro equipo puede ayudarte a convertirla en una solicitud personalizada." en="You don't need every detail figured out. Save what inspires you and share the trip you have in mind. Our team can help turn it into a tailored inquiry."/></p>
        <a href="/concierge" className="button gold"><KeyRound size={17}/><T es="DISEÑAR MI EXPERIENCIA" en="DESIGN MY EXPERIENCE"/></a>
      </div>
      <div className="private-journey-steps">
        <article><Compass size={25}/><span>01</span><h3><T es="Descubre" en="Discover"/></h3><p><T es="Explora la inspiración por categoría y encuentra tu estilo." en="Explore by category and find your style."/></p></article>
        <article><KeyRound size={25}/><span>02</span><h3><T es="Selecciona" en="Select"/></h3><p><T es="Guarda tus favoritos en Mi Llave y construye tu lista." en="Save favorites to My Key and create your shortlist."/></p></article>
        <article><CalendarDays size={25}/><span>03</span><h3><T es="Conecta" en="Connect"/></h3><p><T es="Envía tu solicitud. Las opciones reales se verifican antes de cotizar o reservar." en="Send an inquiry. Real options are verified before any quote or reservation."/></p></article>
      </div>
    </section>

    <section className="partner-strip">
      <span className="eyebrow">A MORE CONSIDERED NETWORK</span>
      <h2><T es="Tu propuesta merece" en="Your offering deserves"/><br/><em><T es="la audiencia correcta." en="the right audience."/></em></h2>
      <p><T es="¿Ofreces una experiencia, un espacio o un servicio excepcional en Medellín? Conversemos sobre una posible colaboración." en="Have an exceptional space, service or experience in Medellín? Let's explore a potential collaboration."/></p>
      <a className="button" href="/partners"><HeartHandshake size={17}/><T es="PRESENTA TU MARCA" en="INTRODUCE YOUR BRAND"/></a>
    </section>
  </main>;
}
