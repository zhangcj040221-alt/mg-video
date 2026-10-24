import React,{useMemo} from 'react';
import {AbsoluteFill,staticFile,useCurrentFrame} from 'remotion';
import {ThreeCanvas} from '@remotion/three';
import {useGLTF,Center,Bounds} from '@react-three/drei';
const ease=(v:number)=>{const t=Math.max(0,Math.min(1,v));return t*t*(3-2*t)};
const CpuModel=({f}:{f:number})=>{
 const {scene}=useGLTF(staticFile('models/cpu.glb'));
 const copy=useMemo(()=>scene.clone(true),[scene]);
 const zoom=ease((f-85)/65),orbit=ease((f-185)/70);
 return <group scale={1+zoom*.55} rotation={[.12+orbit*.85,-.55+f/110,.05]}>
 <Center><primitive object={copy}/></Center></group>;
};
export const ComputerB7:React.FC=()=>{
 const f=useCurrentFrame(),t=f/30,stage=t<3.2?0:t<6.5?1:2;
 const titles=['整体观察','推进特写','倾斜环绕'];
 return <AbsoluteFill style={{background:'radial-gradient(circle at 38% 40%,#24445a,#07121e 70%)',color:'#eef8ff',fontFamily:'Noto Sans SC,sans-serif'}}>
 <div style={{position:'absolute',top:70,left:100,fontSize:54,fontWeight:700}}>CPU · 三维镜头语言实验</div>
 <div style={{position:'absolute',top:155,left:105,fontSize:25,color:'#9fc6da'}}>P1-B7 · 现成 GLB 模型 · 10 秒</div>
 <div style={{position:'absolute',top:200,left:60,width:1180,height:750}}>
 <ThreeCanvas width={1180} height={750} camera={{position:[3.8,2.7,5.8],fov:40,near:.01,far:1000}}>
 <ambientLight intensity={1.9}/><directionalLight position={[4,8,5]} intensity={3.2}/>
 <directionalLight position={[-4,1,-4]} intensity={1.5} color="#88cfff"/>
 <Bounds fit clip observe margin={1.25}><CpuModel f={f}/></Bounds>
 </ThreeCanvas></div>
 <div style={{position:'absolute',left:1290,top:330,width:490}}>
 {titles.map((name,i)=><div key={i} style={{padding:26,marginBottom:24,borderRadius:18,background:stage===i?'#1c3d54':'#102537',border:'2px solid '+(stage===i?'#79dbff':'#31516a'),opacity:stage===i?1:.55,fontSize:29}}>{i+1}. {name}</div>)}
 </div>
 <div style={{position:'absolute',bottom:62,left:105,fontSize:21,color:'#8aaabd'}}>模型：PC Anatomy / brickshow · 演示外部形态，不代表内部结构</div>
 </AbsoluteFill>;
};