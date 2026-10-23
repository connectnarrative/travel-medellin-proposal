import type {Metadata} from 'next';
import './globals.css';
import './fonts.css';
import './v2.css';
import {content,origin,siteSettings} from '@/lib/server';
import {Shell} from './ui';
const baseMetadata:Metadata={metadataBase:new URL(origin),openGraph:{siteName:'AUREA Private Access',type:'website',images:[{url:'/images/hero.webp',alt:'Medellín, Colombia'}]},title:{default:'AUREA Private Access — Estancias y experiencias en Medellín',template:'%s | AUREA Private Access'},description:'AUREA Private Access. Private stays, dining, experiences and travel planning in Medellín, Colombia.',icons:{icon:'/favicon.svg'},robots:{index:false,follow:false}};
export async function generateMetadata(){let live=false;try{live=(await siteSettings()).seoLive}catch{}return {...baseMetadata,robots:{index:live,follow:live}}}
export const dynamic='force-dynamic';
export default async function Layout({children}:{children:React.ReactNode}){let settings;try{settings=await siteSettings()}catch{}return <html lang="es"><body><Shell settings={settings} catalog={(await content()).listings}>{children}</Shell></body></html>}
