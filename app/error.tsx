'use client';
import {T} from './ui';
export default function ErrorPage({reset}:{reset:()=>void}){return <main id="main" className="page"><h1><T es="Un momento," en="One moment,"/><br/><T es="por favor." en="please."/></h1><p><T es="No pudimos cargar esta página. Tus selecciones de My MONTECLAVE permanecen en este navegador." en="We couldn’t load this page. Your My MONTECLAVE selections remain in this browser."/></p><button className="button gold" onClick={reset}><T es="VOLVER A INTENTAR" en="TRY AGAIN"/></button></main>}
