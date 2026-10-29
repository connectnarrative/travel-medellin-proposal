import {origin,siteSettings} from '@/lib/server';
export default async function robots(){const s=await siteSettings();return {rules:{userAgent:'*',disallow:s.seoLive?['/admin','/api','/mi-llave','/my-monteclave','/partners/proposal']:'/'},sitemap:origin+'/sitemap.xml'}}
