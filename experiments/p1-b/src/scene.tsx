import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';

const clamp = (v: number) => Math.max(0, Math.min(1, v));
const ease = (v: number) => {const t=clamp(v);return t*t*(3-2*t);};
const lerp = (a:number,b:number,t:number)=>a+(b-a)*t;

export const ExplodeMorph: React.FC = () => {
  const frame=useCurrentFrame();
  const t=frame/30;
  const explode=ease((t-1.0)/1.55);
  const morph=ease((t-3.15)/1.55);
  const rebuild=ease((t-5.55)/1.5);
  const fade=ease(t/.4)*(1-ease((t-7.55)/.4));
  const positions=[[-1,-1],[1,-1],[-1,1],[1,1]];
  return <AbsoluteFill style={{background:'radial-gradient(ellipse at 50% 50%, #1a2843 0%, #0a1427 60%, #050a13 100%)',overflow:'hidden'}}>
    <svg viewBox="0 0 1920 1080" width="1920" height="1080" opacity={fade}>
      <defs>
        <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#98f6e2"/><stop offset="100%" stopColor="#5582fb"/>
        </linearGradient>
      </defs>
      <text x="120" y="132" fill="#f0f8ff" fontSize="42" fontWeight="600" fontFamily="sans-serif">STRUCTURE / MORPH</text>
      <text x="122" y="180" fill="#93aeca" fontSize="24" fontFamily="sans-serif">ASSEMBLE  ·  EXPLODE  ·  TRANSFORM  ·  REBUILD</text>
      <circle cx="960" cy="550" r={lerp(285,435,explode)*(1-rebuild)+285*rebuild} fill="none" stroke="#8ef3e5" strokeWidth="2" strokeDasharray="7 16" opacity=".26"/>
      {positions.map(([dx,dy],i)=>{
        const x=lerp(135*dx,355*dx,explode)*(1-rebuild)+135*dx*rebuild;
        const y=lerp(135*dy,250*dy,explode)*(1-rebuild)+135*dy*rebuild;
        const angle=(i%2===0?-1:1)*(18+i*6)*explode*(1-rebuild);
        const radius=lerp(12,92,morph*(1-rebuild));
        return <g key={i} transform={`translate(${960+x} ${550+y}) rotate(${angle})`}>
          <rect x="-122" y="-122" width="244" height="244" rx={radius} fill="url(#panel)" fillOpacity=".9" stroke="#d7fff8" strokeWidth="3"/>
          <rect x="-96" y="-96" width="192" height="192" rx={Math.max(4,radius-14)} fill="none" stroke="#f5ffff" strokeWidth="2" strokeOpacity=".25"/>
          <text x="0" y="15" textAnchor="middle" fontSize="43" fontFamily="sans-serif" fontWeight="700" fill="#10243d">{String(i+1).padStart(2,'0')}</text>
        </g>;
      })}
      <text x="122" y="980" fill="#83a2bf" fontSize="22" fontFamily="sans-serif">V2-P1 / EXPERIMENT B / REMOTION</text>
    </svg>
  </AbsoluteFill>;
};
