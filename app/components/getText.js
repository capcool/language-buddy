"use client"
import React, {useContext} from "react";
import aiUtil from "./ai/googleGemini";
import { Context } from "../stateManagement/Store";

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
        aiUtil.aiTranslate(htmlText).then((res)=>{
            console.log(res)
            setState((preState)=>{
                return{
                    ...preState , aiResponse:res , dataLoading:false
                }
                
            });
        });
    }
    return(
        <>
        <button onClick={getText}>Translate</button>
        {state.dataLoading?<div>Loading....</div>:<div id='ai-response'>{JSON.stringify(state.aiResponse.parts)}</div>}
        
        </>
    );
}
