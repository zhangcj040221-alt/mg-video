import React from 'react';
import {AbsoluteFill,Sequence} from 'remotion';
import {StatCard} from './vendor/StatCard';
export const Demo:React.FC=()=> <AbsoluteFill style={{fontFamily:'Noto Sans SC,sans-serif'}}>
<Sequence from={0} durationInFrames={90}><StatCard stat="30 FPS" subtitle="每秒显示三十张画面" accentColor="#81dbff" backgroundColor="#0c1c30"/></Sequence>
<Sequence from={90} durationInFrames={90}><StatCard stat="1080P" subtitle="高清科普视频输出" accentColor="#7ee6c3" backgroundColor="#112a3a"/></Sequence>
</AbsoluteFill>;
