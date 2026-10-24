import React from 'react';
import {AbsoluteFill,useCurrentFrame} from 'remotion';
const ease=(x:number)=>{const t=Math.max(0,Math.min(1,x));return t*t*(3-2*t)};
export const ComputerB7:React.FC=()=>{const f=useCurrentFrame();const zoom=ease((f-90)/60);return <AbsoluteFill style={{background:'#0b1726',color:'white',fontFamily:'Noto Sans SC,sans-serif'}}><div style={{position:'absolute',top:70,left:100,fontSize:52}}>CPU · 三维镜头语言实验</div><div style={{position:'absolute',top:220,left:150,fontSize:32,transform:'scale('+(1+zoom*.4)+')'}}>B7 镜头推进预览</div></AbsoluteFill>};
