import React, { useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


function Micro({setAction}){
 
  const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();

      
      useEffect(() => {
        
        handleVoice();   
      },[transcript]);
      function handleVoice (){
        let text = transcript.toLowerCase();
        //console.log({start:text.includes("dance"),stop:text.includes("stop dance")})
        
        if(text?.includes("alo")||text?.includes("hello")){
            console.log("da dance");
            setAction("Dance");
            
        }
        else if(text?.includes("stop")){
          console.log("da stop");
          setAction("Stop");
      }
      return 
    }
    
   
      
   
    const handleStart =() =>{
        SpeechRecognition.startListening()
       
    }

     if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
    
    return (
        <div>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button onClick={handleStart}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
        </div>
  )
}

export default Micro