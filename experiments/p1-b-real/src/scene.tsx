import React from 'react';
import {AbsoluteFill,useCurrentFrame} from 'remotion';
const clamp=(n:number)=>Math.max(0,Math.min(1,n));
const ease=(n:number)=>{const t=clamp(n);return t*t*(3-2*t);};
const mix=(a:number,b:number,t:number)=>a+(b-a)*t;
const FONT='Noto Sans SC, sans-serif';
const parts=[
 {name:'CPU · 中央处理器',detail:'负责执行计算指令',x:0,y:-128,dx:-360,dy:-190,w:154,h:134,color:'#8ce5ff',type:'cpu'},
 {name:'RAM · 内存',detail:'暂存正在使用的数据',x:155,y:-90,dx:370,dy:-180,w:90,h:235,color:'#a6f3c3',type:'ram'},
 {name:'SSD · 固态硬盘',detail:'长期保存文件与系统',x:-145,y:142,dx:-360,dy:180,w:200,h:80,color:'#ffc88d',type:'ssd'},
 {name:'GPU · 图形处理器',detail:'负责图像与并行计算',x:125,y:140,dx:370,dy:190,w:230,h:125,color:'#cfb0ff',type:'gpu'},
];
export const ComputerExploded:React.FC=()=>{
 const frame=useCurrentFrame(),t=frame/30;
 const spread=ease((t-1.6)/1.65),rebuild=ease((t-7.2)/1.5);
 const amount=spread*(1-rebuild);
 const fade=ease(t/.45)*(1-ease((t-9.6)/.35));
 return <AbsoluteFill style={{background:'radial-gradient(ellipse at 50% 45%,#192b42 0%,#081321 72%,#050912 100%)'}}>
 <svg viewBox="0 0 1920 1080" width="1920" height="1080" opacity={fade}>
 <text x="115" y="122" fontSize="44" fill="#f2f9ff" fontFamily={FONT} fontWeight="700">电脑内部的四个关键部件</text>
 <text x="118" y="170" fontSize="25" fill="#93b1c7" fontFamily={FONT}>它们各自负责什么？</text>
 <g transform="translate(960 530)">
 <rect x="-300" y="-280" width="600" height="560" rx="28" fill="#101f31" stroke="#47647c" strokeWidth="5"/>
 <rect x="-270" y="-248" width="540" height="496" rx="14" fill="#152b3e" stroke="#36556a" strokeWidth="2"/>
 {Array.from({length:12},(_,i)=><g key={i}><path d={`M -245 ${-210+i*37} H 245`} stroke="#4e9485" strokeWidth="2" opacity=".65"/><circle cx={-210+(i%3)*195} cy={-210+i*37} r="5" fill="#d9b36b"/></g>)}
 {parts.map((p,i)=>{
 const x=mix(p.x,p.x+p.dx,amount),y=mix(p.y,p.y+p.dy,amount);
 return <g key={p.type}>
 <g transform={`translate(${x} ${y})`}>
 <rect x={-p.w/2} y={-p.h/2} width={p.w} height={p.h} rx="12" fill="#20374a" stroke={p.color} strokeWidth="5"/>
 <rect x={-p.w/2+13} y={-p.h/2+13} width={p.w-26} height={p.h-26} rx="6" fill={p.color} fillOpacity=".18" stroke={p.color} strokeOpacity=".5"/>
 {p.type==='cpu'&&<><rect x="-48" y="-43" width="96" height="86" rx="6" fill="#527282" stroke="#d5e6e9" strokeWidth="4"/><text textAnchor="middle" y="10" fill="#ffffff" fontSize="29" fontFamily={FONT} fontWeight="700">CPU</text></>}
 {p.type==='ram'&&Array.from({length:5},(_,j)=><rect key={j} x="-27" y={-92+j*37} width="54" height="22" rx="3" fill="#143b2f" stroke={p.color} strokeWidth="3"/>)}
 {p.type==='ssd'&&<text textAnchor="middle" y="12" fill={p.color} fontSize="35" fontFamily={FONT}>SSD</text>}
 {p.type==='gpu'&&<>{[-50,52].map(cx=><g key={cx}><circle cx={cx} cy="0" r="39" fill="#0e1d2e" stroke={p.color} strokeWidth="5"/>{Array.from({length:6},(_,j)=><path key={j} d={`M ${cx} 0 l 7 -31 q 25 9 5 31 z`} transform={`rotate(${j*60} ${cx} 0)`} fill="#9f86c8"/>)}<circle cx={cx} cy="0" r="8" fill="#e6ddf7"/></g>)}</>}
 </g>
 {amount>.01&&<g opacity={ease(amount*2)}>
 <path d={p.dx<0?`M ${x-p.w/2-10} ${y} L -470 ${p.dy<0?-170:198} L -490 ${p.dy<0?-170:198}`:`M ${x+p.w/2+10} ${y} L 490 ${p.dy<0?-170:198} L 510 ${p.dy<0?-170:198}`} fill="none" stroke={p.color} strokeWidth="2" strokeOpacity=".7"/>
 <text x={p.dx<0?-785:515} y={p.dy<0?-160:210} fill={p.color} fontSize="30" fontWeight="700" fontFamily={FONT}>{p.name}</text>
 <text x={p.dx<0?-785:515} y={p.dy<0?-118:252} fill="#c0d0de" fontSize="23" fontFamily={FONT}>{p.detail}</text>
 </g>}
 </g>;
 })}
 </g>
 <text x="120" y="965" fontSize="23" fill="#89a8c1" fontFamily={FONT}>V2-P1 · 真实科普场景验证 · 示意图，非实际硬件布局</text>
 </svg></AbsoluteFill>;
};
