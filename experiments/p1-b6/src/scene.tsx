import React,{useMemo} from 'react';
import {AbsoluteFill,staticFile,useCurrentFrame,interpolate} from 'remotion';
import {ThreeCanvas} from '@remotion/three';
import {useGLTF,Center,Bounds} from '@react-three/drei';
import * as THREE from 'three';
const FONT="'Noto Sans SC',sans-serif";
const ease=(x:number)=>{const t=Math.max(0,Math.min(1,x));return t*t*(3-2*t)};
const Model:React.FC<{frame:number}>=({frame})=>{
 const gltf=useGLTF(staticFile('models/cpu.glb'));
 const cloned=useMemo(()=>gltf.scene.clone(true),[gltf.scene]);
 const spin=interpolate(frame,[0,239],[-.45,1.7]);
 const z=interpolate(frame,[0,239],[0,.1]);
 return <group rotation={[.14,spin,.04]} position={[0,0,z]}><Center><primitive object={cloned}/></Center></group>;
};
export const ComputerB6:React.FC=()=>{
 const f=useCurrentFrame(),t=f/30;
 const show=ease((t-.2)/.7),detail=ease((t-4)/.9);
 return <AbsoluteFill style={{background:'radial-gradient(circle at 40% 40%,#253e54 0%,#0a1726 65%,#050c14 100%)',fontFamily:FONT,color:'#eaf7ff'}}>
 <div style={{position:'absolute',left:100,top:80,zIndex:5,opacity:show}}>
 <div style={{fontSize:22,letterSpacing:5,color:'#7cdbfa'}}>3D ASSET STUDY / P1-B6</div>
 <div style={{fontSize:56,fontWeight:700,marginTop:16}}>CPU · 真实三维模型镜头实验</div>
 <div style={{fontSize:25,color:'#a5c4d6',marginTop:15}}>复用开源硬件模型，由代码控制镜头与运动</div>
 </div>
 <div style={{position:'absolute',left:60,top:170,width:1170,height:800}}>
 <ThreeCanvas width={1170} height={800} camera={{position:[3.8,2.7,5.8],fov:40,near:.01,far:1000}} gl={{antialias:true,alpha:true}}>
 <ambientLight intensity={1.9}/>
 <directionalLight position={[4,8,5]} intensity={3.2}/>
 <directionalLight position={[-4,1,-4]} intensity={1.5} color="#88cfff"/>
 <Bounds fit clip observe margin={1.5}><Model frame={f}/></Bounds>
 </ThreeCanvas>
 </div>
 <div style={{position:'absolute',left:1240,top:355,width:560,opacity:detail,background:'#11263b',border:'2px solid #426984',borderRadius:25,padding:35,boxSizing:'border-box'}}>
 <div style={{fontSize:35,fontWeight:700,color:'#83dfff'}}>从真实模型认识 CPU</div>
 <div style={{fontSize:27,lineHeight:1.8,marginTop:24}}>观察外壳、厚度与立体轮廓</div>
 <div style={{fontSize:24,color:'#a5bfd1',lineHeight:1.7,marginTop:18}}>本轮只验证三维资产加载、旋转与镜头构图；不宣称展示了芯片内部结构。</div>
 </div>
 <div style={{position:'absolute',left:102,bottom:52,fontSize:20,color:'#8ba8bb'}}>模型来源：brickshow / PC Anatomy · GitHub MIT 仓库 · 原始 GLB 素材使用前仍需核对独立授权</div>
 </AbsoluteFill>;
};
