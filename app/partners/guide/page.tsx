import type {Metadata} from 'next';
import {PartnerGuide} from './presenter';
export const metadata:Metadata={title:'Guía de reuniones para aliados',robots:{index:false,follow:false}};
export default function Page(){return <PartnerGuide/>}
