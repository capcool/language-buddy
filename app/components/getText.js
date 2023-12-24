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
        await aiUtil.aiTranslate(htmlText).then((res)=>{
           console.log(res)
           //JSON.stringify(state.aiResponse.parts)
        let modifiedRes=res.parts[0].text;
        console.log(modifiedRes)
        let newRes=modifiedRes.replace('/\n', "&nbsp; \n");
        console.log(newRes);
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
