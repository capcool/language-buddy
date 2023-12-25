"use client"
import 'regenerator-runtime/runtime';
import React, { useContext, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Context } from '../stateManagement/Store';
const Dictaphone = () => {
  const [state, setState] = useContext(Context);
  const [inputValue, setInputValue]=useState('');
  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const onChange = (event) => {
   // transcript= event.target.value
    setInputValue(event.target.value);
    resetTranscript();
  };
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
      <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default input</label>
    <input type="text" id="ai-input" value={transcript?transcript:inputValue} onChange={onChange}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    </div>
      <div id='text-translate'></div>
    </div>
  );
};
export default Dictaphone;