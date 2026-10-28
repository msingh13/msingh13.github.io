export const ROUND_MS=45000;
export function createRound(best=0){return {score:0,best:Number.isFinite(best)?Math.max(0,Math.floor(best)):0,combo:0,last:null,started:null,ended:false,pops:0}}
export function remaining(s,now){return s.started===null?ROUND_MS:Math.max(0,ROUND_MS-(now-s.started))}
export function pop(s,now){if(s.ended)return 0;if(s.started!==null&&remaining(s,now)===0){s.ended=true;return 0}if(s.started===null)s.started=now;s.combo=s.last!==null&&now-s.last<=1100?Math.min(5,s.combo+1):1;s.last=now;s.pops++;const points=10*s.combo;s.score+=points;s.best=Math.max(s.best,s.score);return points}
export function tick(s,now){if(s.started!==null&&remaining(s,now)===0)s.ended=true;return s.ended}
