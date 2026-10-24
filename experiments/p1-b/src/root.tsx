import React from 'react';
import {Composition} from 'remotion';
import {ExplodeMorph} from './scene';
export const Root:React.FC=()=> <Composition id="ExplodeMorph" component={ExplodeMorph} durationInFrames={240} fps={30} width={1920} height={1080}/>;
