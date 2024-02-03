"use client";
import "regenerator-runtime/runtime";
import LangOptions from "./langOptions";
import React, { useContext, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Context } from "../stateManagement/Store";
const Dictaphone = () => {
  const [state, setState] = useContext(Context);
  const [inputValue, setInputValue] = useState("");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const onChange = (event) => {
    // transcript= event.target.value
    setInputValue(event.target.value);
    resetTranscript();
  };
  function reSet() {
    resetTranscript();
    //document.getElementById("ai-response").innerHTML=""
    eraseAiResponse();
  }
  function eraseAiResponse() {
    setState((preState) => {
      return {
        ...preState,
        aiResponse: "",
      };
    });
  }
  function startMic() {
    eraseAiResponse();
    SpeechRecognition.startListening({ language: state.defaultInput });
  }
  function stopMic() {
    eraseAiResponse();
    SpeechRecognition.stopListening();
  }
  //   if (!browserSupportsSpeechRecognition) {
  //     return (
  //     <p>Browser doesn't support speech recognition.</p>

  //     )
  //   }

  return (
    <div className="pl-4">
      <div>Microphone: {listening ? "on" : "off"}</div>
      <div className="flex space-x-4 ">
        <div
          className="bg-white-900 text-white font-semibold py-2 px-4 rounded-full"
          onClick={startMic}
        >
          <svg
            className="h-8 w-8 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        </div>
        <div
          className="bg-white-900 text-white font-semibold py-2 px-4 rounded-full"
          onClick={stopMic}
        >
          <svg
            class="h-8 w-8 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
            />
          </svg>
        </div>
        <div
          className="bg-white-900 text-white font-semibold py-2 px-4 rounded-full"
          onClick={reSet}
        >
          <svg
            className="h-8 w-8 text-green-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M19 19h-11l-4 -4a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9 9" />{" "}
            <path d="M18 12.3l-6.3 -6.3" />
          </svg>
        </div>
      </div>
      <div className="m-2 max-w-6xl">
        <LangOptions />
        {/* <label
          //for="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label> */}
        <textarea
          id="ai-input"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Speak or Write your inputs here..."
          value={transcript ? transcript : inputValue}
          onChange={onChange}
        ></textarea>
      </div>
      <div id="text-translate"></div>
    </div>
  );
};
export default Dictaphone;
