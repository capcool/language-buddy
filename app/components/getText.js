"use client"
import React, {useState} from "react";
import aiUtil from "./ai/googleGemini";

export default function Speechtext(){
    const [data , setData]= useState(null);
    async function getText(){
        let htmlText=document.getElementById("text-speech").innerHTML;
        await aiUtil.aiTranslate(htmlText).then((res)=>{
            console.log(res)
            setData(res);
        });
    }
    return(
        <>
        <button onClick={getText}>Translate</button>
        {data?<div>{JSON.stringify(data)}</div>:<div>Loading...</div>}
        </>
    );
}
