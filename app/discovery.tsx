'use client';
import {useState} from 'react';
import type {Category,Listing} from '@/lib/types';
import {Save,T,useTravel} from './ui';
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from '@/components/ui/select';
export function Choice({value,onChange,items,label}:{value:string;onChange:(s:string)=>void;items:{value:string;label:string}[];label:string}){return <Select value={value} onValueChange={onChange}><SelectTrigger className="choice" aria-label={label}><SelectValue placeholder={label}/></SelectTrigger><SelectContent>{items.map(i=><SelectItem key={i.value} value={i.value}>{i.label}</SelectItem>)}</SelectContent></Select>}
export function Discovery({categories,listings,category}:{categories:Category[];listings:Listing[];category?:Category}){const[query,setQuery]=useState('');const[cat,setCat]=useState(category?.id||'all');const[mood,setMood]=useState('all');const[neighborhood,setNeighborhood]=useState('all');const{lang}=useTravel();const en=lang==='en';const result=listings.filter(l=>(cat==='all'||cat===l.category)&&(mood==='all'||l.mood===mood)&&(neighborhood==='all'||l.neighborhood===neighborhood)&&[l.name,l.tags,l.neighborhood,l.tagline,l.occasion].join(' ').toLowerCase().includes(query.toLowerCase()));return <><div className="filters"><input aria-label={en?'Search collection':'Buscar en la colección'} placeholder={en?'Search a place, a mood…':'Busca un lugar, una ocasión…'} value={query} onChange={e=>setQuery(e.target.value)}/>{!category&&<Choice value={cat} onChange={setCat} label="Categoría" items={[{value:'all',label:en?'All collections':'Todas las colecciones'},...categories.map(c=>({value:c.id,label:en?c.en:c.name}))]}/>}<Choice value={neighborhood} onChange={setNeighborhood} label="Barrio" items={[{value:'all',label:en?'All areas':'Todos los barrios'},...Array.from(new Set(listings.map(l=>l.neighborhood).filter(Boolean))).map(x=>({value:x,label:x}))]}/>{listings.some(l=>l.mood)&&<Choice value={mood} onChange={setMood} label="Ambiente" items={[{value:'all',label:en?'All moods':'Todos los ambientes'},...Array.from(new Set(listings.map(l=>l.mood).filter(Boolean))).map(x=>({value:x,label:x}))]}/>}</div><p className="result-count">{result.length} <T es="selecciones · Perfiles demo e imágenes conceptuales" en="selections · Demo profiles and concept imagery"/></p><div className="listing-grid">{result.map(l=><article className="listing-card" key={l.id}><a href={'/coleccion/'+l.slug}><div className="listing-photo"><img src={l.image} alt={l.alt} loading="lazy"/><span>{l.relationship==='confirmed'&&l.status==='published'?(en?'CONFIRMED MEMBER':'MIEMBRO CONFIRMADO'):'CONCEPT PROFILE'}</span></div><span className="eyebrow">{categories.find(c=>c.id===l.category)?.label} · {l.neighborhood}</span><h3>{l.name}</h3><p>{en?l.taglineEn||l.tagline:l.tagline}</p></a><Save listing={l}/></article>)}</div>{result.length===0&&<div className="empty"><h3><T es="Otra forma de buscar." en="Try a different search."/></h3><p><T es="No encontramos selecciones con estos filtros." en="No selections match these filters."/></p><button className="button" onClick={()=>{setQuery('');setCat(category?.id||'all');setMood('all');setNeighborhood('all')}}><T es="LIMPIAR FILTROS" en="CLEAR FILTERS"/></button></div>}</>}
export function RequestForm({kind,selected=[]}:{kind:'trip'|'partner';selected?:Listing[]}){
  const {lang}=useTravel();
  const en=lang==='en';
  const [brief,setBrief]=useState('');
  const [copied,setCopied]=useState(false);
  const [error,setError]=useState('');
  const label=(es:string,enText:string)=>en?enText:es;
  const field=(name:string,es:string,enText:string,type='text',required=false)=><label>{label(es,enText)}
    <input name={name} type={type} required={required} maxLength={300}/>
  </label>;
  function prepare(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();setError('');
    const data=Object.fromEntries(new FormData(e.currentTarget).entries());
    const get=(key:string)=>String(data[key]||'').trim();
    if(kind==='trip' && get('arrival') && get('departure') && get('departure')<=get('arrival')){
      setError(label('Revisa las fechas de salida.','Check the departure date.'));
      return;
    }
    const lines=[
      'AUREA PRIVATE ACCESS — '+(kind==='trip'?'PRIVATE CONCIERGE':'PARTNERSHIP'),
      '',
      label('Nombre','Name')+': '+get('name'),
      'Email: '+get('email'),
      'WhatsApp: '+get('whatsapp'),
      ...(kind==='partner'?[
        label('Negocio','Business')+': '+get('business'),
        label('Categoría','Category')+': '+get('category'),
        'Website: '+get('website')
      ]:[
        label('Llegada','Arrival')+': '+get('arrival'),
        label('Salida','Departure')+': '+get('departure'),
        label('Personas','Guests')+': '+get('guests'),
        label('Origen','Origin')+': '+get('origin'),
        label('Ocasión','Occasion')+': '+get('occasion'),
        label('Estilo','Style')+': '+get('style'),
        label('Intereses','Interests')+': '+get('interests'),
        label('Presupuesto','Budget')+': '+get('budget'),
        ...selected.map(s=>'- '+s.name)
      ]),
      '',
      label('Descripción','Description')+': '+get('notes')
    ];
    setBrief(lines.filter(Boolean).join('\n'));
    setCopied(false);
  }
  if(brief)return <section className="success" role="status">
    <span className="eyebrow">AUREA · PRESENTATION MODE</span>
    <h2>{label('Tu solicitud','Your inquiry')}<br/><em>{label('está preparada.','is prepared.')}</em></h2>
    <p>{label('Esta versión es una demostración: los datos no se han enviado ni guardado. Puedes copiar el resumen para compartirlo directamente con el equipo cuando tengas su contacto.','This is a demonstration: your details were not transmitted or saved. Copy the brief to share directly with the team once you have their contact details.')}</p>
    <pre className="aurea-preview-brief">{brief}</pre>
    <button className="button gold" type="button" onClick={async()=>{try{await navigator.clipboard.writeText(brief);setCopied(true);}catch{setError(label('No se pudo copiar automáticamente. Selecciona el texto anterior.','Automatic copying unavailable. Select the text above.'));}}}>
      {copied?label('COPIADO','COPIED'):label('COPIAR SOLICITUD','COPY INQUIRY')}
    </button>
    <button type="button" className="text-link" style={{marginLeft:18,marginTop:20}} onClick={()=>{setBrief('');setCopied(false);setError('')}}>{label('EDITAR','EDIT')}</button>
    {error&&<p className="error" role="alert">{error}</p>}
  </section>;
  return <form className="request-form" onSubmit={prepare}>
    <p className="aurea-preview-notice" role="note">{label('VISTA DE PRESENTACIÓN — puedes preparar una solicitud y copiarla. Este formulario todavía no la envía ni la guarda.','PRESENTATION PREVIEW — prepare and copy an inquiry. This form does not yet transmit or save information.')}</p>
    <div className="form-grid">
      {field('name','Nombre completo','Full name','text',true)}
      {field('email','Email','Email','email',true)}
      {field('whatsapp','WhatsApp con código de país','WhatsApp including country code','tel',true)}
      {kind==='partner'?<>
        {field('business','Nombre de tu negocio','Business name','text',true)}
        {field('category','Tipo de negocio','Business type','text',true)}
        {field('website','Web o Instagram','Website or Instagram')}
      </>:<>
        {field('arrival','Llegada','Arrival','date',true)}
        {field('departure','Salida','Departure','date',true)}
        <label>{label('Personas','Guests')}<input name="guests" type="number" min="1" max="200" defaultValue="2" required/></label>
        {field('origin','Ciudad de origen','Origin city')}
        {field('occasion','Ocasión','Occasion')}
        {field('style','¿Cómo quieres vivir Medellín?','Your travel style')}
        {field('interests','Experiencias que te interesan','Experiences you are interested in')}
        {field('budget','Presupuesto aproximado','Approximate budget')}
      </>}
    </div>
    <label>{label('Cuéntanos un poco más','Tell us a little more')}
      <textarea name="notes" rows={4} maxLength={3000} required={kind==='trip'&&!selected.length}/>
    </label>
    {error&&<p className="error" role="alert">{error}</p>}
    <button type="submit" className="button gold">{label('PREPARAR SOLICITUD','PREPARE INQUIRY')}</button>
  </form>
}
export function MyKey(){const{saved,lang}=useTravel();return <main className="page" id="main"><span className="eyebrow">AUREA / MI LLAVE / MY KEY</span><h1><T es="Tu Medellín," en="Your Medellín,"/><br/><em><T es="desbloqueado." en="unlocked."/></em></h1><p className="lead"><T es="Cada lugar es una posibilidad. Juntos, tu próximo viaje." en="Each place is a possibility. Together, your next trip."/></p>{saved.length?<div className="key-layout"><div className="key-items">{saved.map((l,i)=><article key={l.id}><span>0{i+1}</span><img src={l.image} alt={l.alt}/><div><a href={'/coleccion/'+l.slug}><h3>{l.name}</h3></a><Save listing={l}/></div></article>)}<a className="text-link" href="/coleccion"><T es="SEGUIR EXPLORANDO" en="KEEP EXPLORING"/></a></div><div><h2><T es="Conectamos" en="We connect"/> <em><T es="los detalles." en="the details."/></em></h2><RequestForm kind="trip" selected={saved}/></div></div>:<div className="empty"><h2><T es="Todo empieza" en="It all starts"/> <em><T es="con una elección." en="with a choice."/></em></h2><p><T es="Añade un hotel, una mesa o una experiencia a tu llave." en="Add a stay, a table or an experience to your key."/></p><a className="button gold" href="/coleccion"><T es="EXPLORAR LA COLECCIÓN" en="EXPLORE THE COLLECTION"/></a><a className="text-link" style={{marginLeft:18,marginTop:20}} href="/concierge"><T es="O SOLICITAR UN VIAJE A MEDIDA" en="OR REQUEST A BESPOKE JOURNEY"/></a></div>}</main>}
