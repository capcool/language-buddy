"use client";
import React, { useContext, useState } from "react";
import { Context } from "../stateManagement/Store";
import Image from "next/image";

export default function Language(prop) {
  const [state, setState] = useContext(Context);
  const [inputValue, setInputValue] = useState("");
  
  let selectId=()=>{
    if (prop.opt=="IN"){
      return "lang"
    }else{
      return "lang-target"
    }
  } 
  function checkSelectedValue(){
    let selectType=selectId();
    let elemValue = document.getElementById(selectType).value
    if(selectType=="lang"){
      setState((preState) => {
        return {
          ...preState,
          defaultInput: elemValue
        };
      });
    }else{
      setState((preState) => {
        return {
          ...preState,
          defaultOutput: elemValue
        };
      });
    }
  }
  function updateLang1() {
    setState((preState) => {
      return {
        ...preState,
        defaultInput: "en-GB",
        defaultOutput: "ja-JP",
        translateInput: "English",
        translateOutput: "Japanese",
      };
    });
  }
  function updateLang4() {
    setState((preState) => {
      return {
        ...preState,
        defaultInput: "ja-JP",
        defaultOutput: "en-GB",
        translateInput: "Japanese",
        translateOutput: "English",
      };
    });
  }
  return (
    <>
      <form className="max-w-sm mx-auto">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <span className="text-xs inline-block py-1 px-2 rounded text-blue-600 bg-blue-200 last:mr-0 mr-1">
          {prop.opt == "IN" ? "Input Language" : "Target Language"}
          </span>
          
        </label>
        <select
          id={selectId()}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          //value={prop.opt == "IN" ? "en-GB" : "ja-JP"}
          defaultValue={prop.opt=="IN"?"en-GB":"ja-JP"}
          onChange={checkSelectedValue}
        >

          <option value="en-GB">English</option>
          <option value="ja-JP">Japanese</option>
          <option value="de-DE">German</option>
          <option value="fr-FR">French</option>
          <option value="yue-Hant-HK">Chinese, Cantonese</option>
          <option value="cmn-Hans-CN">Chinese, Mandarin</option>
          <option value="es-ES">Spanish</option>
        </select>
      </form>
    </>
  );
}
