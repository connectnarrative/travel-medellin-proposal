import type {Listing} from './types';

/**
 * Editorial placeholders for the private presentation.
 * These are experience TYPES, not actual suppliers, inventory, confirmed bookings,
 * endorsements, prices, availability or commercial partnerships.
 * Replace them in the CMS with authorized, confirmed partner listings before launch.
 */
const concepts = [
  {
    "category": "stay",
    "name": "Suites con vista al valle",
    "pitch": "Despertar con una ciudad entera a tus pies.",
    "pitchEn": "Wake up to the city unfolding below.",
    "img": "hotel",
    "secondary": "hero",
    "featured": true
  },
  {
    "category": "stay",
    "name": "Refugios boutique",
    "pitch": "Interiores serenos, diseño atento y mañanas sin prisa.",
    "pitchEn": "Considered interiors, quiet mornings and a sense of place.",
    "img": "hotel",
    "secondary": "wellness",
    "featured": false
  },
  {
    "category": "stay",
    "name": "Escapadas de diseño",
    "pitch": "Estancias donde la arquitectura también es parte del viaje.",
    "pitchEn": "Stays where architecture is part of the journey.",
    "img": "hotel",
    "secondary": "hero",
    "featured": false
  },
  {
    "category": "live",
    "name": "Penthouse panorámico",
    "pitch": "Una perspectiva privada de Medellín.",
    "pitchEn": "A private perspective on Medellín.",
    "img": "hero",
    "secondary": "hotel",
    "featured": true
  },
  {
    "category": "live",
    "name": "Villa entre montañas",
    "pitch": "Espacio para compartir y desconectar.",
    "pitchEn": "Space to gather, reset and reconnect.",
    "img": "hotel",
    "secondary": "guatape",
    "featured": false
  },
  {
    "category": "live",
    "name": "Residencias para grupos",
    "pitch": "La ciudad se disfruta mejor cuando todos están juntos.",
    "pitchEn": "The city feels different when everyone stays together.",
    "img": "hotel",
    "secondary": "night",
    "featured": false
  },
  {
    "category": "dine",
    "name": "Cena de autor",
    "pitch": "Una mesa que merece ser el centro de la noche.",
    "pitchEn": "Make the table the highlight of the evening.",
    "img": "dine",
    "secondary": "coffee",
    "featured": true
  },
  {
    "category": "dine",
    "name": "Sabores contemporáneos",
    "pitch": "Cocina creativa, encuentros y sobremesas memorables.",
    "pitchEn": "Creative cuisine and evenings worth extending.",
    "img": "dine",
    "secondary": "night",
    "featured": false
  },
  {
    "category": "dine",
    "name": "Mesas íntimas",
    "pitch": "Espacios elegidos para conversaciones sin interrupciones.",
    "pitchEn": "Thoughtful settings for unhurried conversations.",
    "img": "coffee",
    "secondary": "dine",
    "featured": false
  },
  {
    "category": "night",
    "name": "Rooftops al atardecer",
    "pitch": "El valle cambia de color. La noche apenas comienza.",
    "pitchEn": "A changing skyline as the evening begins.",
    "img": "night",
    "secondary": "hero",
    "featured": true
  },
  {
    "category": "night",
    "name": "Coctelería de autor",
    "pitch": "Cada detalle, desde la primera copa hasta la última canción.",
    "pitchEn": "Every detail, from the first drink to the last song.",
    "img": "night",
    "secondary": "dine",
    "featured": false
  },
  {
    "category": "night",
    "name": "Noches a tu medida",
    "pitch": "La ciudad después de las luces, a tu propio ritmo.",
    "pitchEn": "Experience the city after dark, on your terms.",
    "img": "night",
    "secondary": "hero",
    "featured": false
  },
  {
    "category": "wellness",
    "name": "Rituales de bienestar",
    "pitch": "Una pausa pensada para renovar cuerpo y mente.",
    "pitchEn": "A reset for body and mind.",
    "img": "wellness",
    "secondary": "coffee",
    "featured": false
  },
  {
    "category": "wellness",
    "name": "Spa privado",
    "pitch": "Un espacio de calma dentro del ritmo de la ciudad.",
    "pitchEn": "Find a quiet moment in the heart of the city.",
    "img": "wellness",
    "secondary": "hotel",
    "featured": false
  },
  {
    "category": "wellness",
    "name": "Movimiento consciente",
    "pitch": "Bienestar, entrenamiento y equilibrio en tu agenda.",
    "pitchEn": "Movement, energy and balance woven into your trip.",
    "img": "wellness",
    "secondary": "guatape",
    "featured": false
  },
  {
    "category": "explore",
    "name": "Café de especialidad",
    "pitch": "Descubre el ritual detrás de cada origen.",
    "pitchEn": "Discover the story behind every origin.",
    "img": "coffee",
    "secondary": "dine",
    "featured": false
  },
  {
    "category": "explore",
    "name": "Mañanas sin prisa",
    "pitch": "Cafés y lugares para comenzar el día con calma.",
    "pitchEn": "Places to start the day beautifully and slowly.",
    "img": "coffee",
    "secondary": "wellness",
    "featured": false
  },
  {
    "category": "explore",
    "name": "Cultura cafetera",
    "pitch": "Una puerta a las historias del café colombiano.",
    "pitchEn": "A doorway into Colombia's coffee culture.",
    "img": "coffee",
    "secondary": "guatape",
    "featured": false
  },
  {
    "category": "move",
    "name": "Traslados ejecutivos",
    "pitch": "Una llegada tan cuidada como el resto del viaje.",
    "pitchEn": "An arrival as considered as the rest of your stay.",
    "img": "move",
    "secondary": "hero",
    "featured": true
  },
  {
    "category": "move",
    "name": "Rutas privadas",
    "pitch": "Recorre Medellín a tu tiempo y bajo tu itinerario.",
    "pitchEn": "Explore Medellín on your schedule.",
    "img": "move",
    "secondary": "hotel",
    "featured": false
  },
  {
    "category": "move",
    "name": "Movilidad para grupos",
    "pitch": "Espacio, comodidad y logística por diseñar.",
    "pitchEn": "Room, comfort and logistics tailored to your group.",
    "img": "move",
    "secondary": "night",
    "featured": false
  },
  {
    "category": "fly",
    "name": "El valle desde el aire",
    "pitch": "Una perspectiva extraordinaria sobre las montañas.",
    "pitchEn": "A remarkable new view of the valley.",
    "img": "hero",
    "secondary": "guatape",
    "featured": false
  },
  {
    "category": "fly",
    "name": "Momentos panorámicos",
    "pitch": "Vistas memorables para ocasiones especiales.",
    "pitchEn": "Memorable scenery for meaningful occasions.",
    "img": "guatape",
    "secondary": "hero",
    "featured": false
  },
  {
    "category": "fly",
    "name": "Escapadas aéreas",
    "pitch": "Imagina un itinerario que empieza sobre la ciudad.",
    "pitchEn": "Imagine an itinerary beginning above the city.",
    "img": "hero",
    "secondary": "guatape",
    "featured": false
  },
  {
    "category": "explore",
    "name": "Guatapé en privado",
    "pitch": "Color, agua y paisajes a tu propio ritmo.",
    "pitchEn": "Colorful streets, open water and views on your terms.",
    "img": "guatape",
    "secondary": "hero",
    "featured": true
  },
  {
    "category": "explore",
    "name": "Naturaleza & aventura",
    "pitch": "Explora otra cara de Antioquia.",
    "pitchEn": "Explore another side of Antioquia.",
    "img": "guatape",
    "secondary": "wellness",
    "featured": false
  },
  {
    "category": "explore",
    "name": "Experiencias locales",
    "pitch": "Descubre sabores, historias y rincones distintos.",
    "pitchEn": "Discover local flavors, stories and hidden corners.",
    "img": "coffee",
    "secondary": "guatape",
    "featured": false
  },
  {
    "category": "protection",
    "name": "Asistencia discreta",
    "pitch": "Considera apoyo personalizado durante tu visita.",
    "pitchEn": "Consider personalized support during your stay.",
    "img": "move",
    "secondary": "hotel",
    "featured": false
  },
  {
    "category": "protection",
    "name": "Coordinación privada",
    "pitch": "Planificación y acompañamiento adaptados a cada grupo.",
    "pitchEn": "Thoughtful planning tailored to each group.",
    "img": "hotel",
    "secondary": "move",
    "featured": false
  },
  {
    "category": "protection",
    "name": "Tranquilidad al viajar",
    "pitch": "Cada detalle cuenta al diseñar un viaje sin fricciones.",
    "pitchEn": "Every detail counts when planning a seamless visit.",
    "img": "move",
    "secondary": "wellness",
    "featured": false
  }
  ,{category:'chef',name:'Una noche en la villa',pitch:'Una velada privada alrededor de tu mesa.',pitchEn:'An evening shaped around your own table.',img:'dine',secondary:'coffee',featured:false},
  {category:'vip',name:'El arte de resolver',pitch:'Asistencia personal para conectar los detalles.',pitchEn:'Personal assistance to connect the details.',img:'coffee',secondary:'move',featured:false}
] as const;
const englishNames=["Valley-view suites", "Boutique hideaways", "Design escapes", "Panoramic penthouse", "Villa in the mountains", "Residences for gathering", "The chef’s table", "Contemporary flavors", "Intimate tables", "Sunset rooftops", "Signature cocktails", "Nights on your terms", "Wellness rituals", "Private spa", "Mindful movement", "Specialty coffee", "Unhurried mornings", "Coffee culture", "Executive transfers", "Private routes", "Group transport", "The valley from above", "Panoramic moments", "Aerial escapes", "Guatapé in private", "Nature & adventure", "Local experiences", "Discreet support", "Private coordination", "Peace of mind", "An evening at the villa", "The art of arranging"];
const safeSlug=(value:string)=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
export const editorialListings:Listing[]=concepts.map((c,i)=>{
  const slug='inspiracion-'+c.category+'-'+safeSlug(c.name);
  const image='/images/'+c.img+'.webp';
  const secondary='/images/'+c.secondary+'.webp';
  return {
    id:slug,slug,name:c.name,nameEn:englishNames[i]||c.name,category:c.category,status:'demo',relationship:'sample',
    tagline:c.pitch,taglineEn:c.pitchEn,
    description:c.pitch+' Una idea para inspirar un viaje extraordinario a Medellín. Esta propuesta es contenido editorial de demostración, no una propiedad, establecimiento ni servicio confirmado. Nuestro equipo deberá verificar las opciones reales, sus condiciones y su disponibilidad antes de presentarlas al viajero.',
    descriptionEn:c.pitchEn+' This is an editorial concept to inspire your Medellín journey, not a confirmed property, venue or bookable service. Real options, terms and availability must be verified by the concierge team before they are offered to guests.',
    image,mobileImage:'',alt:'Imagen ilustrativa de lujo · concepto sin proveedor confirmado',gallery:[image,secondary],video:'',reel:'',logo:'',
    neighborhood:'Medellín · Inspiración editorial',address:'',coordinates:'',website:'',instagram:'',whatsapp:'',
    why:'Una dirección creativa para imaginar una estancia diferente. No implica alianza ni disponibilidad confirmada.',
    whyEn:'A creative direction for exploring something extraordinary. No partnership or availability is implied.',
    recommended:'',note:'Contenido conceptual. Pendiente de curaduría y verificación.',highlights:'Inspiración editorial,Experiencia personalizable',
    tags:'inspiración,concepto,lujo',mood:'Elegante y privado',occasion:'Viajes a medida',time:'',capacity:0,
    featured:c.featured,priority:i,seoTitle:'',seoDescription:'',ogImage:'',canonical:'',noindex:true
  };
});
