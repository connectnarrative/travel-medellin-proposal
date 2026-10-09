import {requireChatGPTUser} from '@/app/chatgpt-auth';
import {admin} from '@/lib/server';
import Admin from './panel';
export const dynamic='force-dynamic';
export const metadata={title:'CMS',robots:{index:false,follow:false}};
export default async function AdminPage(){await requireChatGPTUser('/admin');if(!await admin())return <main id="main" className="page"><h1>Acceso restringido.</h1><p>Tu cuenta no tiene acceso al CMS de Travel & Life.</p><a href="/">Volver al inicio</a></main>;return <Admin/>}
