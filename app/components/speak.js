"use client";
import "regenerator-runtime/runtime";
import LangOptions from "./langOptions";
import React, { useContext, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Context } from "../stateManagement/Store";
const micClass = "bg-white-900 text-white font-semibold py-2 px-4 rounded-full";
const micStopClass =
  "bg-white-900 text-white font-semibold py-2 px-4 rounded-full";
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
    <>
      <div className="m-2 max-w-6xl pl-4 ">
        <LangOptions />
        {/* <div>Microphone: {listening ? "on" : "off"}</div> */}
        <div className="flex space-x-4 pt-4">
          <div
            className={listening ? "invisible" : micClass}
            onClick={startMic}
          >
            <svg
              className="h-5 w-5 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />{" "}
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />{" "}
              <line x1="12" y1="19" x2="12" y2="23" />{" "}
              <line x1="8" y1="23" x2="16" y2="23" />
            </svg>
          </div>
          <div
            className={listening ? micStopClass : "invisible"}
            onClick={stopMic}
          >
            <svg
              className="h-5 w-5 text-red-600"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <line x1="18" y1="6" x2="6" y2="18" />{" "}
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <div
            className="bg-white-900 text-white font-semibold py-2 px-4 rounded-full"
            onClick={reSet}
          >
            <svg
              className="h-5 w-5 text-black"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M19 19h-11l-4 -4a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9 9" />{" "}
              <path d="M18 12.3l-6.3 -6.3" />
            </svg>
          </div>
        </div>
        <div className="m-2 max-w-6xl">
          {/* <LangOptions /> */}
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
    </>
  );
};
export default Dictaphone;
