export const ROUND_MS=60000;
export function createRound(best=0){return {score:0,best:Number.isFinite(best)?Math.max(0,Math.floor(best)):0,combo:0,started:null,ended:false,words:0,correct:0,attempts:0}}
export function remaining(s,now){return s.started===null?ROUND_MS:Math.max(0,ROUND_MS-(now-s.started))}
export function enterWord(s,typed,target,now){if(s.ended)return false;if(s.started!==null&&remaining(s,now)===0){s.ended=true;return false}if(s.started===null)s.started=now;s.attempts++;if(typed.trim().toLowerCase()!==target){s.combo=0;return false}s.words++;s.correct+=target.length;s.combo=Math.min(5,s.combo+1);s.score+=target.length*10+s.combo*10;s.best=Math.max(s.best,s.score);return true}
export function tick(s,now){if(s.started!==null&&remaining(s,now)===0)s.ended=true;return s.ended}
