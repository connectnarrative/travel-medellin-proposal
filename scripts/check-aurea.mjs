// Historical command name retained for existing callers.
import assert from 'node:assert/strict';
import {readFileSync,readdirSync,existsSync} from 'node:fs';
import {join} from 'node:path';
function walk(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(dir,e.name)):[join(dir,e.name)])}
let references=0;
for(const file of [...walk('app'),...walk('lib')].filter(f=>/\.(tsx?|css)$/.test(f))){
 const source=readFileSync(file,'utf8');
 assert(!source.includes('AUREA'),'Previous visible brand in '+file);
 for(const [,path] of source.matchAll(/["'(](\/(?:brand|fonts)\/[^"'()]+|\/favicon\.png)["')]/g)){
  assert(existsSync('public'+path),file+' references missing asset '+path);references++;
 }
}
assert(references>5);
assert(existsSync('app/my-monteclave/page.tsx'));
console.log('PASS Monteclave brand asset references and canonical itinerary route');
