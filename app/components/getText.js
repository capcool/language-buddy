"use client"
import React, {useContext, useState} from "react";
import aiUtil from "./ai/googleGemini";
import { Context } from "../stateManagement/Store";
import ReactMarkdown from 'react-markdown';


export default function Speechtext(){
    const [state , setState]= useContext(Context);
    const [stopRead, setStopReat]=useState(true);
   //console.log(state);

    async function getText(){
        setState((preState)=>{
            return{
                ...preState , dataLoading:true
            }
            
        });
        let htmlText=document.getElementById("ai-input").value;
        await aiUtil.aiTranslate("Translate it to japanese from english - "+htmlText).then(async (res)=>{
           console.log(res)
           //JSON.stringify(state.aiResponse.parts)
       let modifiedRes=res.parts[0].text;
        //console.log(modifiedRes)
       let newRes=await modifiedRes.replace('/\n', "&nbsp; \n");
        //console.log(newRes);

        // let aires={
        //     apiRes:"As an AI language model, I don't have personal feelings or emotions, so I don't experience days or have a concept of well-being. I'm a virtual assistant designed to provide information and assist users with their queries and requests.\n\nMay I help you with something today?"
        //     }
        //     let modRes= aires.apiRes;
        //     let newRes=modRes.replace('/\n', "&nbsp; \n");
            setState((preState)=>{
                return{
                    ...preState , aiResponse:newRes , dataLoading:false
                }
                
            });
        });
        setStopReat(true);
    }
    function stopTextRead(){
       setStopReat(true)
       window.speechSynthesis.cancel()
    // let player = new talkify.TtsPlayer(); //or new talkify.Html5Player()
    // player.playText(state.aiResponse);
    }
     async function defaultRead(){
        setStopReat(false);
        let voices;
        
        
            let utterance = new SpeechSynthesisUtterance("");
            speechSynthesis.speak(utterance);
            speechSynthesis.cancel();
            voices=window.speechSynthesis.getVoices();
            if (voices.length==0){
                window.speechSynthesis.addEventListener("voiceschanged", function() {
                voices = window.speechSynthesis.getVoices();})
        
            }

            const allVoicesObtained = new Promise(function(resolve, reject) {
                let voices = window.speechSynthesis.getVoices();
                if (voices.length !== 0) {
                  resolve(voices);
                } else {
                  window.speechSynthesis.addEventListener("voiceschanged", function() {
                    voices = window.speechSynthesis.getVoices();
                    resolve(voices);
                  });
                }
              });

              voices=  await allVoicesObtained;
            //speechSynthesis.cancel();
            
            let newArray = voices.filter(function(item) {
                return item.lang== state.defaultOutput;
              });
        let speakData = new SpeechSynthesisUtterance();
        speakData.volume=1;
        speakData.rate=1;
        speakData.pitch=1;
        speakData.voice=newArray[0];
        //speakData.lang='en-GB';
        //speakData.lang='ja-JP'
        speakData.text=state.aiResponse;
        //console.log(newArray);
        //console.log(voices);
        speechSynthesis.speak(speakData);
        setStopReat(true);
       // console.log("end")
       // 
       // console.log(amISpeaking);
    }
    return(
        <>
        <div className="pt-4">
        <div className='flex space-x-4 '>
            <div>
                <button className='bg-black text-white font-semibold py-2 px-4 rounded-full' onClick={getText}>Ask AI</button>
            </div>
            <div>{stopRead?
                (
                <div className='bg-green-700 text-white font-semibold py-2 px-4 rounded-full'>
                <button onClick={defaultRead}>Read</button>
                </div>
                ):(<></>)
                    }
            </div>
            <div>
            <div>
                <button className='bg-red-300 text-white font-semibold py-2 px-4 rounded-full' 
                onClick={stopTextRead}>Stop</button>
            </div>

            </div>
        </div>
        {state.dataLoading?<div>Loading....</div>:<div id='ai-response'><ReactMarkdown>{state.aiResponse}</ReactMarkdown></div>}
        </div>
        </>
    );
}
