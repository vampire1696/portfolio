import React, { useEffect, useState } from 'react'
import "./Button.css"

const Button = ({setPage}) => {
    
  
  const [state1,SetState1] = useState(true);
  const [state2,SetState2] = useState(false);
  const [state3,SetState3] = useState(false);
  const arrayState = [state1,state2,state3]
  function handleAbout(){
    SetState1(true);
    SetState2(false);
    SetState3(false);
  }
  
  function handleWorks(){
    SetState2(true);
    SetState1(false);
    SetState3(false);
    
  }
  function handleContact(){
    SetState3(true);
    SetState2(false);
    SetState1(false);
    
  }
  function setPageHandle(){
    if(state1){
      setPage("about");
      console.log("da set about")
    } else if(state2){
      setPage("works");
    } else if(state3){
      setPage("contact");
    }
  }
  useEffect(()=>{
    setPageHandle();
    console.log("da set page")
  },[state1,state2,state3])
  return (
        <div>
         
<button onClick={handleAbout} className={state1 ? "cybr-btn cybr-btn-open" : "cybr-btn"}>
  About<span aria-hidden>_</span>
  <span aria-hidden className="cybr-btn__glitch">About_</span>
  <span aria-hidden className="cybr-btn__tag">R25</span>
</button>
<button onClick={handleWorks} className={state2 ? "cybr-btn cybr-btn-open" : "cybr-btn"}>
  Works<span aria-hidden>_</span>
  <span aria-hidden className="cybr-btn__glitch">Works_</span>
  <span aria-hidden className="cybr-btn__tag">R25</span>
</button>

<button onClick={handleContact} className={state3 ? "cybr-btn cybr-btn-open" : "cybr-btn"}>
  Contact<span aria-hidden>_</span>
  <span aria-hidden className="cybr-btn__glitch">Contact_</span>
  <span aria-hidden className="cybr-btn__tag">R25</span>
</button>
        </div>
  )
}

export default Button