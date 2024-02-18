"use client";
import React, { useContext, useState } from "react";
import { Context } from "../stateManagement/Store";
import Image from "next/image";
import Language from "./language";
export default function LangDropdown() {
  const [state, setState] = useContext(Context);
  const [inputValue, setInputValue] = useState("");
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
    <div className="flex">
    <Language opt='IN'/>
    <Language/>
    </div>
    </>
  );
}
