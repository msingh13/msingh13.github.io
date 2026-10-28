export const COLS=64,ROWS=46;
export function random(seed){let n=seed>>>0;return()=>{n=(Math.imul(n,1664525)+1013904223)>>>0;return n/4294967296}}
export function makeSlab(seed=1){return {seed,cleared:new Uint8Array(COLS*ROWS),count:0,finished:false,strokes:0,best:0}}
export function carve(slab,x,y,radius){let added=0;for(let row=Math.max(0,Math.floor((y-radius/.72)*ROWS));row<=Math.min(ROWS-1,Math.ceil((y+radius/.72)*ROWS));row++)for(let col=Math.max(0,Math.floor((x-radius)*COLS));col<=Math.min(COLS-1,Math.ceil((x+radius)*COLS));col++){const dx=(col+.5)/COLS-x,dy=((row+.5)/ROWS-y)*.72;if(dx*dx+dy*dy<=radius*radius&&!slab.cleared[row*COLS+col]){slab.cleared[row*COLS+col]=1;added++}}slab.count+=added;return added}
export function carveLine(slab,from,to,radius){const length=Math.hypot(to.x-from.x,(to.y-from.y)*.72),steps=Math.max(1,Math.ceil(length/(radius*.3)));let n=0;for(let i=0;i<=steps;i++)n+=carve(slab,from.x+(to.x-from.x)*i/steps,from.y+(to.y-from.y)*i/steps,radius);return n}
export const progress=slab=>Math.min(100,Math.floor(slab.count/slab.cleared.length*100));
export function finish(slab){if(progress(slab)<90||slab.finished)return false;slab.finished=true;slab.cleared.fill(1);slab.count=slab.cleared.length;return true}
export function point(clientX,clientY,rect){return {x:Math.max(0,Math.min(1,(clientX-rect.left)/rect.width)),y:Math.max(0,Math.min(1,(clientY-rect.top)/rect.height))}}
