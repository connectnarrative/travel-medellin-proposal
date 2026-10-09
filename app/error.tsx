'use client';
export default function ErrorPage({reset}:{reset:()=>void}){return <main id="main" className="page"><h1>Un momento,<br/><em>por favor.</em></h1><p>No pudimos cargar esta página. Tu llave sigue guardada en este dispositivo.</p><button className="button gold" onClick={reset}>VOLVER A INTENTAR</button></main>}
