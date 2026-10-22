import type {Metadata} from 'next';
import {PartnerProposal} from '../proposal';
export const metadata:Metadata={title:'Partnership proposal — Collection & Signature',description:'A selective hospitality collection. Explore AUREA Collection at US$200/month and AUREA Signature at US$500/month.',robots:{index:false,follow:false}};
export default function Page(){return <PartnerProposal/>}
