"use client"
import 'regenerator-runtime/runtime';
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

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
      <button onClick={resetTranscript}>Reset</button>
      <div id='text-speech'>{transcript}</div>
      <div id='text-translate'></div>
    </div>
  );
};
export default Dictaphone;