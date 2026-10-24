import React from 'react';
import {AbsoluteFill,Sequence} from 'remotion';
import {StatCard} from './vendor/StatCard';
import {ComparisonCard} from './vendor/ComparisonCard';
export const Demo:React.FC=()=> <AbsoluteFill style={{fontFamily:"'Noto Sans SC',sans-serif"}}>
 <Sequence from={0} durationInFrames={90}><StatCard stat="30 FPS" subtitle="每秒显示三十张画面" accentColor="#81dbff" backgroundColor="#0c1c30"/></Sequence>
 <Sequence from={90} durationInFrames={120}><ComparisonCard title="帧率对比：画面为什么更流畅？" leftLabel="普通视频" leftValue="24 FPS" rightLabel="本次样片" rightValue="30 FPS" changeIndicator="多 6 帧" changeDirection="up" backgroundColor="#0c1c30" cardBackgroundColor="#183148" textColor="#eaf7ff" leftColor="#82baff" rightColor="#7ee6c3" fontFamily="'Noto Sans SC',sans-serif"/></Sequence>
 <Sequence from={210} durationInFrames={90}><StatCard stat="1080P" subtitle="高清科普视频输出" accentColor="#7ee6c3" backgroundColor="#112a3a"/></Sequence>
 </AbsoluteFill>;
