import type {Category} from './types';
export const collectionCategories:Category[]=[
['live','villas-medellin','Villas y residencias privadas','Villas & private residences','RESIDE','Un lugar para hacer tuyo.','A place to make your own.','hotel'],
['stay','hoteles-medellin','Hoteles y estancias boutique','Hotels & boutique stays','STAY','Donde el viaje encuentra su ritmo.','Where your journey finds its rhythm.','hotel'],
['dine','restaurantes-medellin','Gastronomía y restaurantes','Fine dining & restaurants','DINE','Una mesa que merece una historia.','A table worth a story.','dine'],
['night','rooftops-medellin','Rooftops y vida nocturna','Rooftops & nightlife','AFTER DARK','Cuando la ciudad cambia de luz.','When the city changes its light.','night'],
['move','transporte-privado-medellin','Transporte y choferes privados','Transport & private chauffeurs','MOVE','Cada llegada, bien pensada.','Every arrival, considered.','move'],
['explore','experiencias-medellin','Tours y experiencias privadas','Private tours & experiences','EXPLORE','Historias que empiezan fuera de lo habitual.','Stories that begin beyond the familiar.','guatape'],
['wellness','spa-wellness-medellin','Wellness, spas y fitness','Wellness, spas & fitness','RESTORE','Tiempo para volver a ti.','Time to return to yourself.','wellness'],
['chef','chefs-privados-medellin','Chefs y gastronomía privada','Private chefs & in-villa dining','SAVOR','Tu mesa. Tu momento.','Your table. Your moment.','dine'],
['fly','helicopteros-medellin','Aviación privada y helicópteros','Private aviation & helicopters','TAKE FLIGHT','Otra perspectiva. Otras posibilidades.','Another perspective. New possibilities.','hero'],
['vip','servicios-vip-medellin','Servicios VIP y asistencia personal','VIP services & personal assistance','ASSIST','El valor de los detalles bien resueltos.','The value of details, thoughtfully arranged.','coffee'],
['protection','seguridad-medellin','Seguridad privada','Private security','PROTECT','Discreción, planificación y operadores habilitados.','Discretion, planning and licensed operators.','move']
].map((a,i)=>({id:a[0],slug:a[1],name:a[2],en:a[3],label:a[4],intro:a[5],introEn:a[6],image:'/images/'+a[7]+'.webp',order:i}));
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
