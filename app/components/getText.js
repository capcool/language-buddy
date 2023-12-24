"use client"
import React, {useContext} from "react";
import aiUtil from "./ai/googleGemini";
import { Context } from "../stateManagement/Store";
import ReactMarkdown from 'react-markdown';
import ReactDOM from 'react-dom'

export default function Speechtext(){
    const [state , setState]= useContext(Context);
   console.log(state);

    async function getText(){
        setState((preState)=>{
            return{
                ...preState , dataLoading:true
            }
            
        });
        let htmlText=document.getElementById("text-speech").innerHTML;
        await aiUtil.aiTranslate(htmlText).then(async (res)=>{
           console.log(res)
           //JSON.stringify(state.aiResponse.parts)
       // let modifiedRes=res.parts[0].text;
        //console.log(modifiedRes)
       // let newRes=await modifiedRes.replace('/\n', "&nbsp; \n");
        //console.log(newRes);

        let aires={
            apiRes:"As an AI language model, I don't have personal feelings or emotions, so I don't experience days or have a concept of well-being. I'm a virtual assistant designed to provide information and assist users with their queries and requests.\n\nMay I help you with something today?"
            }
            let modRes= aires.apiRes;
            let newRes=modRes.replace('/\n', "&nbsp; \n");
            setState((preState)=>{
                return{
                    ...preState , aiResponse:newRes , dataLoading:false
                }
                
            });
        });
    }
    return(
        <>
        <button onClick={getText}>Translate</button>
        {state.dataLoading?<div>Loading....</div>:<div id='ai-response'><ReactMarkdown children={state.aiResponse}/></div>}
        
        </>
    );
}
