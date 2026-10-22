import type {Metadata} from 'next';
import './globals.css';
import './fonts.css';
import './v2.css';
import {siteSettings} from '@/lib/server';
import {Shell} from './ui';
const baseMetadata:Metadata={title:{default:'AUREA Private Access — Medellín, Elevated.',template:'%s | AUREA Private Access'},description:'AUREA Private Access. A curated world of extraordinary stays, private experiences and personal concierge in Medellín, Colombia.',icons:{icon:'/favicon.svg'},robots:{index:false,follow:false}};
export async function generateMetadata(){let live=false;try{live=(await siteSettings()).seoLive}catch{}return {...baseMetadata,robots:{index:live,follow:live}}}
export const dynamic='force-dynamic';
export default async function Layout({children}:{children:React.ReactNode}){let settings;try{settings=await siteSettings()}catch{}return <html lang="es"><body><Shell settings={settings}>{children}</Shell></body></html>}
