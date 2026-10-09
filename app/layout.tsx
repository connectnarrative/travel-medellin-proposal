import type {Metadata} from 'next';
import './globals.css';
import {siteSettings} from '@/lib/server';
import {Shell} from './ui';
const baseMetadata:Metadata={title:{default:'Travel & Life Medellín — Medellín, desbloqueado.',template:'%s | Travel & Life Medellín'},description:'Una llave. Todo Medellín. Una selección de lugares, experiencias y servicios para vivir la ciudad a tu manera.',icons:{icon:'/favicon.svg'},robots:{index:false,follow:false}};
export async function generateMetadata(){let live=false;try{live=(await siteSettings()).seoLive}catch{}return {...baseMetadata,robots:{index:live,follow:live}}}
export const dynamic='force-dynamic';
export default async function Layout({children}:{children:React.ReactNode}){let settings;try{settings=await siteSettings()}catch{}return <html lang="es"><body><Shell settings={settings}>{children}</Shell></body></html>}
