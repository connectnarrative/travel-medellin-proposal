import {notFound} from 'next/navigation';
export const metadata={robots:{index:false,follow:false}};
// Public demo: no internal sales guide or administration content.
export default function Page(){notFound();}
