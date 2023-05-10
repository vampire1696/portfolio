import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import Dance2 from './Dance2'
import onlyborder5 from './image/onlyborder5.png'

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
// import { Dance2 } from "./Dance2";
import "./App.css"
import SpeechRecognition,{useSpeechRecognition} from "react-speech-recognition";
import Micro from "./Micro";
import Button from "./components/Button";
import Box from "./components/Box";

export default function App() {

  //canvas fov 45
  const [action,SetAction] = useState("");
  const [page,SetPage] =useState("about");
  return (
    // `url(${require("./image/onlyborder5.png")})`
    <div style={{backgroundColor:"transparent",position:"relative" }}>
    <div style={{display:"flex",backgroundColor:"transparent",justifyContent:"flex-start","border-radius":"3px"}}>
    <div style={{zIndex:1, position:"absolute",top:"-4px",left:0,width:"100vw",height:"855px",border:"63px solid #d2d2d2"}}></div> 
    {/**Day la border mau bac */}
    <img src={onlyborder5} alt="sas" style={{zIndex:999, position:"absolute",top:"-8px",left:0,width:"1928px",height:"1434px"}} /> {/**Day la border mau do */}
    
   <div style={{ height:"734px", width:"45%",marginTop:"6%"}}> {/**Day la div ben trai chua canvas */}
   <div style={{"width":"100%","height":"175%"}}>
   
  
   <Canvas  > 
      <PerspectiveCamera makeDefault fov={45} position={[0,1,5]}/>
      <OrbitControls/>
      <directionalLight intensity={0.5} />
      <ambientLight intensity={1} />
      <pointLight position={[10,10,10]}/>
      <Suspense>
      <Dance2  page={page} action={action}/>  
      </Suspense>    
    </Canvas>
   </div>
   </div>
    <div style={{position:"absolute",right:0, top:"73px",width:"54vw",zIndex:10000,display:"flex",}}>
    <Button setPage={SetPage}/>  {/**Day la div ben phai chua button */}
    </div>
    <Box/>
    </div>
    </div>
  );
}
