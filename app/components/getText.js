"use client";
import React, { useContext, useState } from "react";
import aiUtil from "./ai/googleGemini";
import { Context } from "../stateManagement/Store";
import ReactMarkdown from "react-markdown";
import langDetails from "./langMapping";

export default function Speechtext() {
  const [state, setState] = useContext(Context);
  const [stopRead, setStopRead] = useState(true);
  //console.log(state);

  async function getText() {
    setState((preState) => {
      return {
        ...preState,
        dataLoading: true,
      };
    });
    let htmlText = await document.getElementById("ai-input").value;
    let defaultInput = state.defaultInput;
    let defaultOutput = state.defaultOutput;
    await aiUtil
      .aiTranslate(
        `Translate the following text strictly to ${langDetails[defaultOutput]} from ${langDetails[defaultInput]} : ${htmlText}`
      )
      .then(async (res) => {
        console.log(res);
        //JSON.stringify(state.aiResponse.parts)
        let modifiedRes = res.parts[0].text;
        //console.log(modifiedRes)
        let newRes = await modifiedRes.replace("/\n", "&nbsp; \n");
        //console.log(newRes);

        // let aires={
        //     apiRes:"As an AI language model, I don't have personal feelings or emotions, so I don't experience days or have a concept of well-being. I'm a virtual assistant designed to provide information and assist users with their queries and requests.\n\nMay I help you with something today?"
        //     }
        //     let modRes= aires.apiRes;
        //     let newRes=modRes.replace('/\n', "&nbsp; \n");
        setState((preState) => {
          return {
            ...preState,
            aiResponse: newRes,
            dataLoading: false,
          };
        });
      });
    setStopRead(true);
  }
  function stopTextRead() {
    setStopRead(true);
    window.speechSynthesis.cancel();
    // let player = new talkify.TtsPlayer(); //or new talkify.Html5Player()
    // player.playText(state.aiResponse);
  }
  async function defaultRead() {
    setStopRead(false);
    let voices;

    let utterance = new SpeechSynthesisUtterance("");
    speechSynthesis.speak(utterance);
    speechSynthesis.cancel();
    voices = window.speechSynthesis.getVoices();
    if (voices.length == 0) {
      window.speechSynthesis.addEventListener("voiceschanged", function () {
        voices = window.speechSynthesis.getVoices();
      });
    }

    const allVoicesObtained = new Promise(function (resolve, reject) {
      let voices = window.speechSynthesis.getVoices();
      if (voices.length !== 0) {
        resolve(voices);
      } else {
        window.speechSynthesis.addEventListener("voiceschanged", function () {
          voices = window.speechSynthesis.getVoices();
          resolve(voices);
        });
      }
    });

    voices = await allVoicesObtained;
    //speechSynthesis.cancel();

    let newArray = voices.filter(function (item) {
      return item.lang == state.defaultOutput;
    });
    let speakData = new SpeechSynthesisUtterance();
    speakData.volume = 1;
    speakData.rate = 1;
    speakData.pitch = 1;
    speakData.voice = newArray[0];
    //speakData.lang='en-GB';
    //speakData.lang='ja-JP'
    speakData.text = state.aiResponse;
    //console.log(newArray);
    //console.log(voices);
    speechSynthesis.speak(speakData);
    setStopRead(true);
    // console.log("end")
    //
    // console.log(amISpeaking);
  }
  return (
    <>
      <div className="pt-4">
        <div className="flex space-x-4 ">
          <div>
            <button
              className="bg-white text-white font-semibold py-2 px-4 rounded-full"
              onClick={getText}
            >
              <svg
                className="h-8 w-8 text-blue-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </button>
          </div>
          <div>
            {stopRead ? (
              <div className="bg-white-900 text-black font-semibold py-2 px-4 rounded-full">
                <button onClick={defaultRead}>
                  <svg
                    className="h-8 w-8 text-black-900"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />{" "}
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            <div>
              <button
                className="bg-white-300 text-white font-semibold py-2 px-4 rounded-full"
                onClick={stopTextRead}
              >
                <svg
                  className="h-6 w-6 text-red-900"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />{" "}
                  <rect x="9" y="9" width="6" height="6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {state.dataLoading ? (
          <div>Loading....</div>
        ) : (
          <div id="ai-response">
            <ReactMarkdown>{state.aiResponse}</ReactMarkdown>
          </div>
        )}
      </div>
    </>
  );
}
