"use client";
import React, { useContext, useState } from "react";
import { Context } from "../stateManagement/Store";

export default function ChatLanguage() {
  const [state, setState] = useContext(Context);

  function updateChatLan() {
    let elemValue = document.getElementById("chat-lang").value;
    console.log(`chat lang: ${elemValue}`);
    setState((preState) => {
      return {
        ...preState,
        defaultChatLanguage: `${elemValue}`,
        livechat:"invisible"
      };
    });
  }

  return (
    <>
      <form className="max-w-sm mx-auto">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <span className="text-xs inline-block py-1 px-2 rounded text-blue-600 bg-blue-200 last:mr-0 mr-1">
            Select Chat Language
          </span>
        </label>
        <select
          id="chat-lang"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          //value="en-GB"
          //defaultValue="en-GB"
          onChange={updateChatLan}
        >
          <option value="en-GB">English</option>
          <option value="de-DE">German</option>
          <option value="ja-JP">Japanese</option>
          <option value="es-ES">Spanish</option>
        </select>
      </form>
    </>
  );
}
