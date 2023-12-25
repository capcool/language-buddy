"use client"
import React, {useContext, useState} from "react";
import aiUtil from "./ai/googleGemini";
import { Context } from "../stateManagement/Store";
import ReactMarkdown from 'react-markdown';
import { SayButton } from 'react-say';

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
                <SayButton  speak={state.aiResponse}>
                    Read
                </SayButton>
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
