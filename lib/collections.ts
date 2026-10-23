import type {Category} from './types';
import photos from './listing-photo-manifest.json';
const categoryPhotoIndex:Record<string,number>={live:3,stay:1,dine:6,night:9,move:18,explore:24,wellness:12,chef:30,fly:21,vip:31,protection:27};
export const collectionCategories:Category[]=[
['live','villas-medellin','Villas y residencias privadas','Villas & private residences','RESIDE','Casas completas, penthouses y villas para estancias privadas.','Entire homes, penthouses and villas for private stays.','hotel'],
['stay','hoteles-medellin','Hoteles y estancias boutique','Hotels & boutique stays','STAY','Compara ubicación, habitaciones y servicios para tu estancia.','Compare locations, rooms and services for your stay.','hotel'],
['dine','restaurantes-medellin','Gastronomía y restaurantes','Fine dining & restaurants','DINE','Menús degustación, cocina local y espacios para cenas privadas.','Tasting menus, local cuisine and private dining spaces.','dine'],
['night','rooftops-medellin','Rooftops y vida nocturna','Rooftops & nightlife','AFTER DARK','Terrazas, coctelería y música para planear la noche.','Terraces, cocktails and music for planning your evening.','night'],
['move','transporte-privado-medellin','Transporte y choferes privados','Transport & private chauffeurs','MOVE','Traslados de aeropuerto, choferes por horas y vehículos para grupos.','Airport transfers, hourly chauffeurs and group vehicles.','move'],
['explore','experiencias-medellin','Tours y experiencias privadas','Private tours & experiences','EXPLORE','Café, cultura, Guatapé y recorridos de naturaleza.','Coffee, culture, Guatapé and nature routes.','guatape'],
['wellness','spa-wellness-medellin','Wellness, spas y fitness','Wellness, spas & fitness','RESTORE','Masajes, circuitos de spa y sesiones privadas de movimiento.','Massages, spa circuits and private movement sessions.','wellness'],
['chef','chefs-privados-medellin','Chefs y gastronomía privada','Private chefs & in-villa dining','SAVOR','Menús privados en tu alojamiento, con servicio por acordar.','Private menus at your accommodation, with service to be agreed.','dine'],
['fly','helicopteros-medellin','Aviación privada y helicópteros','Private aviation & helicopters','TAKE FLIGHT','Solicitudes de vuelos panorámicos y charters con operadores autorizados.','Scenic flight and charter inquiries with authorized operators.','hero'],
['vip','servicios-vip-medellin','Servicios VIP y asistencia personal','VIP services & personal assistance','ASSIST','Asistencia para reservas, cambios y logística durante la estancia.','Assistance with reservations, changes and logistics during your stay.','coffee'],
['protection','seguridad-medellin','Seguridad privada','Private security','PROTECT','Discreción, planificación y operadores habilitados.','Discretion, planning and licensed operators.','move']
].map((a,i)=>({id:a[0],slug:a[1],name:a[2],en:a[3],label:a[4],intro:a[5],introEn:a[6],image:photos.find(p=>p.index===categoryPhotoIndex[a[0]])?.path||'/images/'+a[7]+'.webp',order:i}));
export const planningDetails:Record<string,{es:string[];en:string[]}>= {
 live:{es:['Distribución y capacidad','Personal y servicios incluidos','Políticas para grupos y visitas','Ubicación y disponibilidad'],en:['Layout and capacity','Included staff and services','Group and visitor policies','Location and availability']},
 stay:{es:['Categoría de habitación','Preferencias de estancia','Servicios del hotel','Disponibilidad y condiciones'],en:['Room category','Stay preferences','Hotel services','Availability and terms']},
 dine:{es:['Estilo de cocina','Restricciones alimentarias','Tamaño del grupo','Horario y ocasión'],en:['Cuisine style','Dietary requirements','Group size','Timing and occasion']},
 night:{es:['Ambiente y música','Condiciones de ingreso','Preferencia de mesa','Horario y consumo mínimo'],en:['Atmosphere and music','Entry requirements','Table preference','Timing and minimum spend']},
 move:{es:['Puntos de recogida','Equipaje y pasajeros','Tipo de vehículo','Tiempo y cobertura'],en:['Pickup locations','Luggage and passengers','Vehicle type','Timing and coverage']},
 explore:{es:['Intereses y ritmo','Duración y ruta','Movilidad y accesibilidad','Idioma del guía'],en:['Interests and pace','Duration and route','Mobility and accessibility','Guide language']},
 wellness:{es:['Tratamiento y preferencias','Ubicación del servicio','Duración','Cualificaciones del profesional'],en:['Treatment and preferences','Service location','Duration','Practitioner qualifications']},
 chef:{es:['Menú y preferencias','Alergias alimentarias','Equipamiento de cocina','Servicio y limpieza'],en:['Menu and preferences','Food allergies','Kitchen facilities','Service and cleanup']},
 fly:{es:['Ruta y pasajeros','Operador autorizado','Equipaje y condiciones meteorológicas','Disponibilidad y plan alterno'],en:['Route and passengers','Licensed operator','Luggage and weather conditions','Availability and alternatives']},
 vip:{es:['Alcance de asistencia','Horario e idioma','Prioridades del viaje','Confirmación de cada gestión'],en:['Scope of assistance','Timing and language','Trip priorities','Confirmation of each arrangement']},
 protection:{es:['Operador habilitado','Alcance y cobertura','Itinerario y evaluación de necesidades','Documentación vigente'],en:['Licensed operator','Scope and coverage','Itinerary and needs assessment','Current credentials']}
};
