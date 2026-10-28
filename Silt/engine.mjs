export const ROUND_MS=60000;
export function createRound(best=0){return {score:0,best:Number.isFinite(best)?Math.max(0,Math.floor(best)):0,combo:0,started:null,ended:false,words:0,correct:0,attempts:0,drain:0,typed:0,bestWpm:0}}
export function remaining(s,now){return s.started===null||s.untimed?ROUND_MS:Math.max(0,ROUND_MS-(now-s.started)-s.drain)}
export function enterWord(s,typed,target,now){if(s.ended)return false;if(s.started!==null&&remaining(s,now)===0){s.ended=true;return false}if(s.started===null)s.started=now;s.attempts++;if(typed.trim().toLowerCase()!==target){s.combo=0;return false}s.words++;s.correct+=target.length;s.combo=Math.min(5,s.combo+1);s.score+=target.length*10+s.combo*10;s.best=Math.max(s.best,s.score);return true}
export function tick(s,now){if(s.started!==null&&remaining(s,now)===0)s.ended=true;return s.ended}

export function typeCharacters(s,count,now){if(s.ended||count<=0)return;if(s.started===null)s.started=now;s.typed+=count;s.drain+=count*100;}
export function wpm(s,now){if(s.started===null)return 0;const minutes=Math.max(1,((s.finishedAt??now)-s.started)/1000)/60;return Math.round(s.correct/5/minutes)}
