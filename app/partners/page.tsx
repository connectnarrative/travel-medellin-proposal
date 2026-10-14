import type {Metadata} from 'next';
import {RequestForm} from '@/app/discovery';
import {T} from '@/app/ui';
import {ArrowUpRight,Camera,Handshake,MessagesSquare} from 'lucide-react';
export const metadata:Metadata={title:'Alianzas para experiencias de lujo | AUREA',description:'Presenta tu hotel, villa, restaurante, rooftop o servicio premium al equipo AUREA en Medellín. Solicita evaluación para formar parte de la colección.',robots:{index:false,follow:false}};
export default function PartnersPage(){return <main id="main" className="aurea-landing">
<section className="aurea-landing-hero">
 <img src="/images/dine.webp" alt="Interior elegante de un restaurante, fotografía ilustrativa" fetchPriority="high"/>
 <div className="aurea-landing-overlay"/>
 <div className="aurea-landing-heading"><span className="eyebrow">AUREA / PARTNER NETWORK</span>
 <h1><T es="La excelencia" en="Excellence"/><br/><em><T es="se reconoce." en="deserves discovery."/></em></h1>
 <p><T es="Construimos una colección de espacios, servicios y experiencias excepcionales. Si tu negocio comparte nuestra visión, nos gustaría conocerte." en="We are building a considered collection of spaces, services and exceptional experiences. If your business shares our approach, we'd like to meet you."/></p>
 <a className="button gold" href="#alianza"><T es="PRESENTA TU NEGOCIO" en="INTRODUCE YOUR BUSINESS"/><ArrowUpRight size={17}/></a>
 </div>
</section>
<section className="section aurea-landing-content" id="alianza">
 <div className="aurea-landing-copy"><span className="eyebrow">CONSIDERED PARTNERSHIPS</span>
 <h2><T es="Un espacio en" en="A place in"/><br/><em><T es="la conversación." en="the conversation."/></em></h2>
 <p><T es="Buscamos relaciones con propuestas auténticas que aporten valor al viajero. Cada colaboración será evaluada individualmente; no prometemos visibilidad, exclusividad ni reservas." en="We look for thoughtful relationships that add real value for travelers. Every collaboration is assessed individually; visibility, exclusivity and bookings are not guaranteed."/></p>
 <div className="aurea-benefit"><Camera size={23}/><span><T es="Presentación editorial de experiencias" en="Editorial storytelling for experiences"/></span></div>
 <div className="aurea-benefit"><Handshake size={23}/><span><T es="Oportunidades de colaboración a medida" en="Tailored collaboration opportunities"/></span></div>
 <div className="aurea-benefit"><MessagesSquare size={23}/><span><T es="Contacto directo con el equipo curatorial" en="A direct conversation with our curatorial team"/></span></div>
 <p className="demo-note"><T es="No hay una tarifa de membresía pública ni condiciones comerciales automáticas. Cada acuerdo se conversa antes de formalizarse." en="There is no advertised membership fee or automatic commercial arrangement. Terms are discussed before any agreement."/></p>
 </div>
 <div className="aurea-form-wrap"><span className="eyebrow">BECOME PART OF THE CONVERSATION</span><h3><T es="Cuéntanos tu historia." en="Tell us your story."/></h3><RequestForm kind="partner"/></div>
</section>
</main>}