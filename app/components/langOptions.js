"use client"
import React, {useContext, useState} from "react";
import { Context } from "../stateManagement/Store";



export default function LangOptions(){
    const [state, setState] = useContext(Context);
    const [inputValue, setInputValue] = useState("");
    return(
        <>
        <div>Hello</div>
        
        </>
    );
  };