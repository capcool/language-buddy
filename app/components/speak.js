"use client";
import "regenerator-runtime/runtime";
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
    SpeechRecognition.startListening({ language: "en-GB" });
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
          className="bg-blue-900 text-white font-semibold py-2 px-4 rounded-full"
          onClick={startMic}
        >
          Speak
        </div>
        <div
          className="bg-red-900 text-white font-semibold py-2 px-4 rounded-full"
          onClick={stopMic}
        >
          Stop
        </div>
        <div
          className="bg-green-900 text-white font-semibold py-2 px-4 rounded-full"
          onClick={reSet}
        >
          Reset
        </div>
      </div>
      <div className="m-2 max-w-6xl">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="ai-input"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
          value={transcript ? transcript : inputValue}
          onChange={onChange}
        ></textarea>
      </div>
      <div id="text-translate"></div>
    </div>
  );
};
export default Dictaphone;
