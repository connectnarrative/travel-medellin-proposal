'use client';
import {useState,useEffect} from 'react';
import type {Category,Listing} from '@/lib/types';
import {Save,T,useTravel} from './ui';
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from '@/components/ui/select';
export function Choice({value,onChange,items,label}:{value:string;onChange:(s:string)=>void;items:{value:string;label:string}[];label:string}){return <Select value={value} onValueChange={onChange}><SelectTrigger className="choice" aria-label={label}><SelectValue placeholder={label}/></SelectTrigger><SelectContent>{items.map(i=><SelectItem key={i.value} value={i.value}>{i.label}</SelectItem>)}</SelectContent></Select>}
export function Discovery({categories,listings,category}:{categories:Category[];listings:Listing[];category?:Category}){const[query,setQuery]=useState('');const[cat,setCat]=useState(category?.id||'all');const[mood,setMood]=useState('all');const[neighborhood,setNeighborhood]=useState('all');const{lang}=useTravel();const en=lang==='en';const result=listings.filter(l=>(cat==='all'||cat===l.category)&&(mood==='all'||l.mood===mood)&&(neighborhood==='all'||l.neighborhood===neighborhood)&&[l.name,l.nameEn,l.tags,l.neighborhood,l.tagline,l.taglineEn,l.occasion].join(' ').toLowerCase().includes(query.toLowerCase()));return <><div className="filters"><input aria-label={en?'Search collection':'Buscar en la colección'} placeholder={en?'Search a place, a mood…':'Busca un lugar, una ocasión…'} value={query} onChange={e=>setQuery(e.target.value)}/>{!category&&<Choice value={cat} onChange={setCat} label="Categoría" items={[{value:'all',label:en?'All collections':'Todas las colecciones'},...categories.map(c=>({value:c.id,label:en?c.en:c.name}))]}/>}<Choice value={neighborhood} onChange={setNeighborhood} label="Barrio" items={[{value:'all',label:en?'All areas':'Todos los barrios'},...Array.from(new Set(listings.map(l=>l.neighborhood).filter(Boolean))).map(x=>({value:x,label:x}))]}/>{listings.some(l=>l.mood)&&<Choice value={mood} onChange={setMood} label="Ambiente" items={[{value:'all',label:en?'All moods':'Todos los ambientes'},...Array.from(new Set(listings.map(l=>l.mood).filter(Boolean))).map(x=>({value:x,label:x}))]}/>}</div><p className="result-count">{result.length} <T es="selecciones · Perfiles demo e imágenes conceptuales" en="selections · Demo profiles and concept imagery"/></p><div className="listing-grid">{result.map(l=><article className="listing-card" key={l.id}><a href={'/coleccion/'+l.slug}><div className="listing-photo"><img src={l.image} alt={l.alt} loading="lazy"/><span>{l.relationship==='confirmed'&&l.status==='published'?(en?'CONFIRMED MEMBER':'MIEMBRO CONFIRMADO'):'CONCEPT PROFILE'}</span></div><span className="eyebrow">{categories.find(c=>c.id===l.category)?.label} · {l.neighborhood}</span><h3>{en?l.nameEn||l.name:l.name}</h3><p>{en?l.taglineEn||l.tagline:l.tagline}</p></a><Save listing={l}/></article>)}</div>{result.length===0&&<div className="empty"><h3><T es="Otra forma de buscar." en="Try a different search."/></h3><p><T es="No encontramos selecciones con estos filtros." en="No selections match these filters."/></p><button className="button" onClick={()=>{setQuery('');setCat(category?.id||'all');setMood('all');setNeighborhood('all')}}><T es="LIMPIAR FILTROS" en="CLEAR FILTERS"/></button></div>}</>}
export function RequestForm({kind,selected=[],packageName='',businessName='',sectorName='',travelDates}:{kind:'trip'|'partner';selected?:Listing[];packageName?:string;businessName?:string;sectorName?:string;travelDates?:{arrival:string;departure:string;guests:string}}){
  const {lang}=useTravel();
  const en=lang==='en';
  const [brief,setBrief]=useState('');
  const [copied,setCopied]=useState(false);
  const [error,setError]=useState('');
  const [draft,setDraft]=useState<Record<string,string>>({});
  useEffect(()=>{if(travelDates)setDraft(d=>({...d,...travelDates}))},[travelDates?.arrival,travelDates?.departure,travelDates?.guests]);
  const label=(es:string,enText:string)=>en?enText:es;
  const field=(name:string,es:string,enText:string,type='text',required=false)=><label>{label(es,enText)}
    <input name={name} type={type} required={required} maxLength={300} value={draft[name]??(name==='business'?businessName:name==='category'?sectorName:name==='arrival'?travelDates?.arrival||'':name==='departure'?travelDates?.departure||'':'')} onChange={e=>setDraft(d=>({...d,[name]:e.target.value}))} min={type==='date'?new Date().toLocaleDateString('en-CA'):undefined}/>
  </label>;
  function prepare(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();setError('');
    const data=Object.fromEntries(new FormData(e.currentTarget).entries());
    setDraft(Object.fromEntries(Object.entries(data).map(([k,v])=>[k,String(v)])));
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
        'Website: '+get('website'),
        label('Paquete','Package')+': '+(packageName||get('package')),
        label('Ubicación','Location')+': '+get('location'),
        label('Credenciales','Credentials')+': '+get('credentials'),
        label('Portafolio','Portfolio')+': '+get('portfolio')
      ]:[
        label('Llegada','Arrival')+': '+get('arrival'),
        label('Salida','Departure')+': '+get('departure'),
        label('Personas','Guests')+': '+get('guests'),
        label('Origen','Origin')+': '+get('origin'),
        label('Ocasión','Occasion')+': '+get('occasion'),
        label('Estilo','Style')+': '+get('style'),
        label('Intereses','Interests')+': '+get('interests'),
        label('Presupuesto','Budget')+': '+get('budget'),
        ...selected.map((s,i)=>(i+1)+'. '+(en?s.nameEn||s.name:s.name))
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
  return <form className="request-form" onSubmit={prepare} onChange={e=>{const form=e.currentTarget;setDraft(Object.fromEntries([...new FormData(form).entries()].map(([k,v])=>[k,String(v)])))}}>
    {packageName&&<p className="selected-plan">{packageName}</p>}
    <p className="aurea-preview-notice" role="note">{label('VISTA DE PRESENTACIÓN — puedes preparar una solicitud y copiarla. Este formulario todavía no la envía ni la guarda.','PRESENTATION PREVIEW — prepare and copy an inquiry. This form does not yet transmit or save information.')}</p>
    <div className="form-grid">
      {field('name','Nombre completo','Full name','text',true)}
      {field('email','Email','Email','email',true)}
      {field('whatsapp','WhatsApp con código de país','WhatsApp including country code','tel',true)}
      {kind==='partner'?<>
        {field('business','Nombre de tu negocio','Business name','text',true)}
        {field('category','Tipo de negocio','Business type','text',true)}
        {field('website','Web o Instagram','Website or Instagram')}
        {field('location','Ciudad y ubicación','City and location','text',true)}
        {field('credentials','Licencias o credenciales, si aplica','Licenses or credentials, if applicable')}
        {field('portfolio','Enlace a fotos o portafolio','Photo or portfolio link')}
        {!packageName&&<label>{label('Paquete de interés','Package of interest')}<select name="package" defaultValue={draft.package||'Collection — $200 USD/month'}><option>Collection — $200 USD/month</option><option>Signature — $500 USD/month</option></select></label>}
      </>:<>
        {field('arrival','Llegada','Arrival','date',true)}
        {field('departure','Salida','Departure','date',true)}
        <label>{label('Personas','Guests')}<input name="guests" type="number" min="1" max="200" value={draft.guests??travelDates?.guests??"2"} onChange={e=>setDraft(d=>({...d,guests:e.target.value}))} required/></label>
        {field('origin','Ciudad de origen','Origin city')}
        {field('occasion','Ocasión','Occasion')}
        {field('style','¿Cómo quieres vivir Medellín?','Your travel style')}
        {field('interests','Experiencias que te interesan','Experiences you are interested in')}
        {field('budget','Presupuesto aproximado','Approximate budget')}
      </>}
    </div>
    <label>{label('Cuéntanos un poco más','Tell us a little more')}
      <textarea name="notes" defaultValue={draft.notes||''} rows={4} maxLength={3000} required={kind==='trip'&&!selected.length}/>
    </label>
    {error&&<p className="error" role="alert">{error}</p>}
    <p className="demo-note"><a className="text-link" href="/privacy">{label('Información de privacidad','Privacy information')}</a></p>
    <button type="submit" className="button gold">{label('PREPARAR SOLICITUD','PREPARE INQUIRY')}</button>
  </form>
}
export function MyKey(){
 const {saved,lang,reorder}=useTravel();const en=lang==='en';const t=(es:string,english:string)=>en?english:es;
 const [dates,setDates]=useState({arrival:'',departure:'',guests:'2'});const [ready,setReady]=useState(false);const [message,setMessage]=useState('');
 useEffect(()=>{try{const d=JSON.parse(localStorage.getItem('aurea-dates')||'null');if(d&&typeof d.arrival==='string'&&typeof d.departure==='string'&&typeof d.guests==='string')setDates(d)}catch{}setReady(true)},[]);
 useEffect(()=>{if(ready)try{localStorage.setItem('aurea-dates',JSON.stringify(dates))}catch{}},[dates,ready]);
 function itinerary(){return ['AUREA · MY PRIVATE ITINERARY',t('Borrador — no es una reserva','Draft — not a reservation'),dates.arrival+' → '+dates.departure,dates.guests+' '+t('personas','guests'),'',...saved.map((l,i)=>(i+1)+'. '+(en?l.nameEn||l.name:l.name)+'\n'+location.origin+'/coleccion/'+l.slug),'',t('Perfiles conceptuales; opciones y disponibilidad por verificar.','Concept profiles; options and availability require verification.')].join('\n')}
 function download(){const blob=new Blob([itinerary()],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='My-AUREA-itinerary.txt';a.click();URL.revokeObjectURL(url);setMessage(t('Itinerario descargado para compartir.','Itinerary downloaded for sharing.'))}
 return <main className="page my-aurea-page" id="main"><span className="eyebrow">MY AUREA / YOUR PRIVATE EDIT</span><h1>{t('Tu Medellín,','Your Medellín,')}<br/>{t('bellamente organizado.','beautifully arranged.')}</h1><p className="lead">{t('Guarda lo que te inspira. Conecta los detalles. El viaje empieza a tomar forma.','Save what inspires you. Connect the details. Your journey starts to take shape.')}</p><p className="planner-draft-notice">{t('Borrador guardado en este navegador. No es una reserva.','Draft saved in this browser. Not a reservation.')}</p>
 {saved.length?<div className="key-layout"><div className="key-items">{saved.map((l,i)=><article key={l.id}><span>{String(i+1).padStart(2,'0')}</span><img src={l.image} alt={l.alt}/><div><a href={'/coleccion/'+l.slug}><h3>{en?l.nameEn||l.name:l.name}</h3></a><Save listing={l}/><div className="reorder"><button aria-label={t('Subir ','Move up ')+(en?l.nameEn||l.name:l.name)} disabled={i===0} onClick={()=>reorder(l.id,-1)}>↑</button><button aria-label={t('Bajar ','Move down ')+(en?l.nameEn||l.name:l.name)} disabled={i===saved.length-1} onClick={()=>reorder(l.id,1)}>↓</button></div></div></article>)}<a className="text-link" href="/coleccion">{t('SEGUIR EXPLORANDO','KEEP EXPLORING')}</a><div className="planner-dates"><label>{t('Llegada','Arrival')}<input type="date" value={dates.arrival} onChange={e=>setDates({...dates,arrival:e.target.value})}/></label><label>{t('Salida','Departure')}<input type="date" min={dates.arrival} value={dates.departure} onChange={e=>setDates({...dates,departure:e.target.value})}/></label><label>{t('Personas','Guests')}<input type="number" min="1" max="200" value={dates.guests} onChange={e=>setDates({...dates,guests:e.target.value})}/></label></div><div className="planner-actions"><button className="button dark" onClick={download}>{t('DESCARGAR ITINERARIO','DOWNLOAD ITINERARY')}</button><button className="button dark" onClick={async()=>{try{await navigator.clipboard.writeText(itinerary());setMessage(t('Itinerario copiado.','Itinerary copied.'))}catch{setMessage(t('Copia no disponible. Usa Descargar itinerario.','Copy unavailable. Use Download itinerary.'))}}}>{t('COPIAR PARA COMPARTIR','COPY TO SHARE')}</button></div>{message&&<p role="status" className="planner-status">{message}</p>}<p className="planner-preview-note">{t('Puedes compartir el resumen descargado. Los enlaces privados con vencimiento estarán disponibles cuando se active el almacenamiento seguro.','Share your downloaded summary. Expiring private links become available when secure storage is activated.')}</p></div><div><h2>{t('Los detalles','The details')}<br/>{t('hacen la diferencia.','make the difference.')}</h2><RequestForm kind="trip" selected={saved} travelDates={dates}/></div></div>:<div className="empty"><h2>{t('Todo empieza con una elección.','It all starts with a choice.')}</h2><p>{t('Guarda una estancia, una mesa o una experiencia en My AUREA.','Save a stay, a table or an experience to My AUREA.')}</p><a className="button dark" href="/coleccion">{t('EXPLORAR LA COLECCIÓN','EXPLORE THE COLLECTION')}</a><a className="text-link" style={{marginLeft:18,marginTop:20}} href="/concierge">{t('O DISEÑAR MI VIAJE','OR DESIGN MY JOURNEY')}</a></div>}
 </main>
}
