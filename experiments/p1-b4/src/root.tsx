import React from 'react';
import {Composition} from 'remotion';
import {ComputerB4} from './scene';
export const Root:React.FC=()=> <Composition id="ComputerB4" component={ComputerB4} durationInFrames={360} fps={30} width={1920} height={1080}/>;
