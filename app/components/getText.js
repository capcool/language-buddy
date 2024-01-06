"use client"
import React, {useContext, useState} from "react";
import aiUtil from "./ai/googleGemini";
import { Context } from "../stateManagement/Store";
import ReactMarkdown from 'react-markdown';


export default function Speechtext(){
    const [state , setState]= useContext(Context);
    const [stopRead, setStopReat]=useState(true);
   console.log(state);

    async function getText(){
        setState((preState)=>{
            return{
                ...preState , dataLoading:true
            }
            
        });
        let htmlText=document.getElementById("ai-input").value;
        await aiUtil.aiTranslate(htmlText).then(async (res)=>{
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
        setStopReat(false)
    // let player = new talkify.TtsPlayer(); //or new talkify.Html5Player()
    // player.playText(state.aiResponse);
    }
     function defaultRead(){
        let voices;
        
        
            let utterance = new SpeechSynthesisUtterance("");
            speechSynthesis.cancel();
            speechSynthesis.speak(utterance);
            voices=speechSynthesis.getVoices();
    
            speechSynthesis.cancel();
        

        let speakData = new SpeechSynthesisUtterance();
        speakData.volume=1;
        speakData.rate=1;
        speakData.pitch=1;
        speakData.voice=voices[0];
        //speakData.lang='en-GB';
        speakData.text=state.aiResponse;
        console.log(voices);
        speechSynthesis.speak(speakData);

        console.log("end")
        const amISpeaking = speechSynthesis.speaking
        console.log(amISpeaking);
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
