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
    document.getElementById("ai-response").innerHTML=""
  
}
//   if (!browserSupportsSpeechRecognition) {
//     return (
//     <p>Browser doesn't support speech recognition.</p>

//     )
//   }

  return (
    
    <div>
      <div>Microphone: {listening ? 'on' : 'off'}</div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={reSet}>Reset</button>
      <div id='text-speech'>{transcript}</div>
      <div id='text-translate'></div>
    </div>
  );
};
export default Dictaphone;