import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import Dance2 from './Dance2'


import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
// import { Dance2 } from "./Dance2";
import "./App.css"
import SpeechRecognition,{useSpeechRecognition} from "react-speech-recognition";
import Micro from "./Micro";
import Button from "./components/Button";

export default function App() {

  //canvas fov 45
  const [action,SetAction] = useState("");
  return (
    <div style={{"width":"100%","height":"100%",display:"flex",justifyContent:"flex-start"}}>
   <div style={{ height:"734px", width:"48%", border:"1px solid #333", borderRadius:"10px",marginTop:"10%"}}>
   <div style={{"width":"100%","height":"175%"}}>

   <Canvas  > 
      <PerspectiveCamera makeDefault fov={45} position={[0,1,5]}/>
      <OrbitControls/>
      <directionalLight intensity={0.5} />
      <ambientLight intensity={1} />
      <pointLight position={[10,10,10]}/>
      <Suspense>
      <Dance2  action={action}/>  
      </Suspense>    
    </Canvas>
   </div>
   </div>
    <Button/>
    {/* <div style={{position:"absolute",top:"50%",left:"70%"}}>
    <Micro setAction={SetAction} />
    </div> */}
    </div>
  );
}
