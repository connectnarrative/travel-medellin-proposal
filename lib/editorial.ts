import type {Listing} from './types';
import concepts from './editorial-content.json';
import photos from './listing-photo-manifest.json';

// Sample service formats, not verified suppliers or bookable inventory.
// Existing IDs and URLs remain stable when presentation copy changes.
export const editorialListings:Listing[]=concepts.map((c,i)=>{
  const photo=photos.find(p=>p.index===i);
  return {...c,status:'demo',relationship:'sample',
    image:photo?.path||'/images/hero.webp',mobileImage:'',alt:photo?.altEn||c.nameEn,
    gallery:[],video:'',reel:'',logo:'',address:'',coordinates:'',website:'',instagram:'',whatsapp:'',
    recommended:'',note:'',highlights:c.details.map(d=>d.valueEs).join(','),
    tags:[c.name,c.nameEn,c.category,c.neighborhood,c.mood,c.why,c.whyEn].join(','),
    occasion:c.why,time:'',capacity:0,priority:i,seoTitle:'',seoDescription:'',ogImage:'',canonical:'',noindex:true,
    photoCredit:photo?.credit,photoSource:photo?.sourceUrl
  };
});
