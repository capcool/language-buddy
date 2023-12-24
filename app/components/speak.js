"use client"
import 'regenerator-runtime/runtime';
import React, { useContext, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Context } from '../stateManagement/Store';
const Dictaphone = () => {
  const [state, setState] = useContext(Context);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
function reSet(){
    resetTranscript();
    //document.getElementById("ai-response").innerHTML=""
    eraseAiResponse();
  
}
function eraseAiResponse(){
  setState((preState)=>{
    return{
      ...preState , aiResponse:""
  }
  });
}
function startMic(){
  eraseAiResponse();
  SpeechRecognition.startListening();
}
function stopMic(){
  eraseAiResponse();
  SpeechRecognition.stopListening();
}
//   if (!browserSupportsSpeechRecognition) {
//     return (
//     <p>Browser doesn't support speech recognition.</p>

//     )
//   }

  return (
    
    <div className='pl-4'>
      <div>Microphone: {listening ? 'on' : 'off'}</div>
      <div className='flex space-x-4 '>
        <div className='bg-blue-900 text-white font-semibold py-2 px-4 rounded-full' 
        onClick={startMic}>Speak</div>
        <div className='bg-red-900 text-white font-semibold py-2 px-4 rounded-full' onClick={stopMic}>Stop</div>
        <div className='bg-green-900 text-white font-semibold py-2 px-4 rounded-full' onClick={reSet}>Reset</div>
      </div>
      
      <div id='text-speech'>{transcript}</div>
      <div id='text-translate'></div>
    </div>
  );
};
export default Dictaphone;