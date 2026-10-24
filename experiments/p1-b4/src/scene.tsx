import React from 'react';
import {AbsoluteFill,useCurrentFrame} from 'remotion';
const FONT="'Noto Sans SC', sans-serif";
const E=(x:number)=>{const t=Math.max(0,Math.min(1,x));return t*t*(3-2*t)};
const M=(a:number,b:number,t:number)=>a+(b-a)*t;
const hardware=[
 {id:'CPU',name:'中央处理器',desc:'执行计算指令',x:-92,y:-80,w:126,h:126,c:'#73dbff',dx:-410,dy:-145},
 {id:'RAM',name:'内存',desc:'临时存放运行数据',x:100,y:-90,w:66,h:244,c:'#85efb5',dx:425,dy:-170},
 {id:'SSD',name:'固态硬盘',desc:'长期保存数据',x:-110,y:153,w:190,h:76,c:'#ffd18a',dx:-405,dy:185},
 {id:'GPU',name:'显卡',desc:'处理图形和并行计算',x:130,y:151,w:244,h:112,c:'#c8acff',dx:420,dy:205}
];
function Part({p,x,y,scale=1}:{p:typeof hardware[number],x:number,y:number,scale?:number}){
 return <g transform={`translate(${x} ${y}) scale(${scale})`}>
 <rect x={-p.w/2} y={-p.h/2} width={p.w} height={p.h} rx="9" fill="#203443" stroke={p.c} strokeWidth="4"/>
 {p.id==='CPU'&&<><rect x="-43" y="-43" width="86" height="86" rx="5" fill="#587987" stroke="#d9eaf1" strokeWidth="3"/>{Array.from({length:8},(_,i)=><g key={i}><path d={`M ${-46+i*13} -56 v11 M ${-46+i*13} 45 v11`} stroke="#e5b967" strokeWidth="4"/></g>)}<text textAnchor="middle" y="9" fill="white" fontSize="25" fontWeight="700" fontFamily={FONT}>CPU</text></>}
 {p.id==='RAM'&&<>{Array.from({length:5},(_,i)=><rect key={i} x="-24" y={-94+i*38} width="48" height="25" rx="3" fill="#214e3d" stroke={p.c} strokeWidth="2"/>)}{Array.from({length:8},(_,i)=><rect key={i} x="-31" y={-92+i*25} width="5" height="12" fill="#eac678"/>)}</>}
 {p.id==='SSD'&&<><rect x="-75" y="-24" width="150" height="48" rx="5" fill="#333c44" stroke="#e6b777" strokeWidth="2"/><text textAnchor="middle" y="10" fill="#ffe4bf" fontSize="27" fontWeight="700" fontFamily={FONT}>SSD</text></>}
 {p.id==='GPU'&&<>{[-57,57].map(cx=><g key={cx}><circle cx={cx} cy="0" r="39" fill="#111e30" stroke={p.c} strokeWidth="4"/>{Array.from({length:7},(_,i)=><path key={i} d={`M ${cx} 0 l 7 -31 q 24 10 6 31 z`} transform={`rotate(${i*360/7} ${cx} 0)`} fill="#a994d7"/>)}<circle cx={cx} cy="0" r="8" fill="#ede4ff"/></g>)}</>}
 </g>;
}
function Board(){return <g><rect x="-295" y="-272" width="590" height="544" rx="30" fill="#101f30" stroke="#66819a" strokeWidth="7"/><rect x="-260" y="-235" width="520" height="470" rx="14" fill="#173a3a" stroke="#5c9b8c" strokeWidth="4"/>{Array.from({length:13},(_,i)=><g key={i}><path d={`M -248 ${-216+i*34} H 246`} stroke="#52998b" strokeWidth="2" opacity=".46"/><circle cx={-225+(i%3)*214} cy={-216+i*34} r="4" fill="#ddb76e"/></g>)}<rect x="-260" y="-235" width="520" height="470" rx="14" fill="none" stroke="#86c5ae" strokeOpacity=".5" strokeWidth="2"/></g>}
export const ComputerB4:React.FC=()=>{
 const f=useCurrentFrame(),t=f/30;
 const explode=E((t-3.7)/1.8)*(1-E((t-7.6)/.8));
 const close=E((t-8.0)/.9);
 const zoom=1+close*1.1;
 const opacity=E(t/.45)*(1-E((t-11.6)/.35));
 return <AbsoluteFill style={{background:'radial-gradient(ellipse at 50% 46%,#193249 0%,#091522 65%,#050a12 100%)'}}>
 <svg width="1920" height="1080" viewBox="0 0 1920 1080" opacity={opacity}>
 <text x="105" y="110" fill="#eff8ff" fontFamily={FONT} fontSize="49" fontWeight="700">电脑内部，四个关键部件如何协作？</text>
 <text x="108" y="161" fill="#9db9cb" fontFamily={FONT} fontSize="26">{t<3.5?'01  整机结构：先认识部件的位置':t<7.8?'02  结构拆解：分离并识别四个部件':'03  局部特写：观察中央处理器'}</text>
 <g opacity={1-close} transform="translate(960 547)">
 <Board/>
 {hardware.map(p=><Part key={p.id} p={p} x={M(p.x,p.x+p.dx,explode)} y={M(p.y,p.y+p.dy,explode)}/>)}
 {hardware.map(p=><g key={p.id} opacity={E(explode*2)}><path d={`M ${p.x+p.dx} ${p.y+p.dy} L ${p.dx<0?-475:475} ${p.dy<0?-240:260}`} fill="none" stroke={p.c} strokeWidth="2" opacity=".65"/><text x={p.dx<0?-810:510} y={p.dy<0?-220:280} fill={p.c} fontFamily={FONT} fontSize="29" fontWeight="700">{p.id} · {p.name}</text><text x={p.dx<0?-810:510} y={p.dy<0?-180:320} fill="#d3e0e9" fontFamily={FONT} fontSize="23">{p.desc}</text></g>)}
 </g>
 <g opacity={close} transform={`translate(790 565) scale(${zoom})`}>
 <Part p={hardware[0]} x={0} y={0} scale={1.75}/>
 </g>
 <g opacity={close}>
 <rect x="1210" y="355" width="520" height="310" rx="22" fill="#13283b" stroke="#4c7794" strokeWidth="3"/>
 <text x="1250" y="420" fill="#8cdeff" fontFamily={FONT} fontSize="42" fontWeight="700">CPU · 中央处理器</text>
 <text x="1250" y="480" fill="#edf5fb" fontFamily={FONT} fontSize="30">执行程序中的计算指令</text>
 <text x="1250" y="540" fill="#abc6d7" fontFamily={FONT} fontSize="25">示意放大：不代表实际尺寸</text>
 <path d="M 1195 515 L 1075 515" stroke="#8cdeff" strokeWidth="3"/>
 </g>
 <text x="110" y="970" fill="#8daabd" fontFamily={FONT} fontSize="22">V2 · P1-B4 ｜二维结构科普能力测试 ｜部件位置与比例为教学示意</text>
 </svg></AbsoluteFill>;
};
