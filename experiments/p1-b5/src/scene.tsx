import React from 'react';
import {AbsoluteFill,useCurrentFrame} from 'remotion';
import {Cpu,MemoryStick,HardDrive,CircuitBoard,ArrowUpRight} from 'lucide-react';
const FONT="'Noto Sans SC',sans-serif";
const smooth=(x:number)=>{const t=Math.max(0,Math.min(1,x));return t*t*(3-2*t)};
const ITEMS=[
 {key:'CPU',title:'中央处理器',desc:'执行计算与控制指令',color:'#70d8ff',Icon:Cpu},
 {key:'RAM',title:'运行内存',desc:'暂存正在使用的数据',color:'#83ebbb',Icon:MemoryStick},
 {key:'SSD',title:'固态硬盘',desc:'长期保存文件与系统',color:'#ffce8b',Icon:HardDrive},
 {key:'GPU',title:'图形处理器',desc:'负责图形与并行计算',color:'#c6a9ff',Icon:CircuitBoard},
];
export const ComputerB5:React.FC=()=>{
 const frame=useCurrentFrame(),t=frame/30;
 const intro=smooth((t-.25)/.9),cards=smooth((t-2.5)/1.1),focus=smooth((t-7.6)/.85),fade=1-smooth((t-11.5)/.5);
 return <AbsoluteFill style={{background:'radial-gradient(circle at 47% 37%,#1b3348 0%,#0b1728 55%,#060d17 100%)',fontFamily:FONT,color:'#eaf6ff'}}>
 <div style={{position:'absolute',inset:0,opacity:.18,backgroundImage:'linear-gradient(#49718b 1px,transparent 1px),linear-gradient(90deg,#49718b 1px,transparent 1px)',backgroundSize:'65px 65px'}}/>
 <div style={{position:'absolute',left:104,top:70,opacity:fade}}>
 <div style={{fontSize:21,letterSpacing:5,color:'#68d6fa',fontWeight:700}}>COMPUTER / EXPLAINED</div>
 <div style={{fontSize:54,fontWeight:700,marginTop:14}}>一台电脑，四种核心职责</div>
 <div style={{fontSize:25,color:'#a6c0d1',marginTop:12}}>{t<3?'从整机开始，认识电脑的内部组成':t<7.7?'将功能拆开看，比复杂的机箱更容易理解':'放大观察：CPU 如何成为计算核心'}</div>
 </div>
 <div style={{position:'absolute',left:90,top:248,width:610,height:610,opacity:(1-focus)*fade,transform:`translateX(${(1-intro)*-65}px)`}}>
 <div style={{position:'absolute',inset:28,border:'2px solid #4d7189',borderRadius:34,background:'linear-gradient(145deg,#1e3b51,#0c1d2d)',boxShadow:'0 24px 80px #0008'}}/>
 <div style={{position:'absolute',top:100,left:138,width:332,height:340,border:'3px solid #508e8b',borderRadius:20,background:'#153b3b',boxShadow:'inset 0 0 35px #051a1e'}}/>
 <div style={{position:'absolute',top:145,left:170,display:'grid',gridTemplateColumns:'repeat(2,135px)',gap:18}}>
 {ITEMS.map(({key,color,Icon})=><div key={key} style={{height:128,border:`2px solid ${color}`,borderRadius:16,background:'#142838',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:10}}><Icon color={color} size={60} strokeWidth={1.6}/><span style={{fontSize:23,fontWeight:700,color}}>{key}</span></div>)}
 </div>
 <div style={{position:'absolute',bottom:54,left:112,fontSize:20,color:'#8eafbf'}}>结构示意 · 非实际安装位置或比例</div>
 </div>
 <div style={{position:'absolute',left:730,top:256,width:1090,height:604,opacity:fade*(.15+.85*cards)*(1-focus),display:'grid',gridTemplateColumns:'1fr 1fr',gap:22}}>
 {ITEMS.map(({key,title,desc,color,Icon},i)=><div key={key} style={{border:'1px solid #42617b',borderRadius:24,background:'linear-gradient(140deg,#183147,#0d1d30)',padding:'30px 32px',boxShadow:'0 16px 45px #0004',transform:`translateY(${(1-smooth((t-2.5-i*.16)/.85))*55}px)`,opacity:smooth((t-2.4-i*.16)/.75)}}>
 <div style={{display:'flex',alignItems:'center',gap:20}}><div style={{width:100,height:100,borderRadius:22,background:'#203e50',display:'grid',placeItems:'center',border:`2px solid ${color}`}}><Icon size={64} color={color} strokeWidth={1.5}/></div><div><div style={{fontSize:31,color,fontWeight:700}}>{key}</div><div style={{fontSize:26,fontWeight:700,marginTop:5}}>{title}</div></div></div>
 <div style={{fontSize:24,color:'#bed2df',marginTop:25}}>{desc}</div>
 </div>)}
 </div>
 <div style={{position:'absolute',left:160,top:245,width:1570,height:650,opacity:focus*fade,display:'flex',alignItems:'center',gap:100}}>
 <div style={{width:540,height:540,borderRadius:65,background:'linear-gradient(145deg,#24465c,#102334)',border:'4px solid #70d8ff',display:'grid',placeItems:'center',boxShadow:'0 0 90px #35b4ec28'}}>
 <Cpu size={350} color="#87ddff" strokeWidth={1.25}/>
 </div>
 <div style={{width:800}}><div style={{fontSize:30,color:'#74d9ff',letterSpacing:4}}>01 / PROCESSOR</div><div style={{fontSize:74,fontWeight:700,marginTop:28}}>CPU · 中央处理器</div><div style={{fontSize:36,color:'#c4dbe8',marginTop:30}}>读取并执行程序中的计算指令</div><div style={{fontSize:26,color:'#8aaabc',marginTop:50}}>图标示意放大，不代表真实芯片内部结构</div><ArrowUpRight size={44} color="#70d8ff" style={{marginTop:40}}/></div>
 </div>
 <div style={{position:'absolute',left:106,bottom:58,color:'#7395ac',fontSize:21,opacity:fade}}>V2 · P1-B5  /  成熟图标素材 + 代码控制的科普信息图</div>
 </AbsoluteFill>;
};
