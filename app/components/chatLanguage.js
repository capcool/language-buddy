"use client";
import React, { useContext, useState } from "react";
import { Context } from "../stateManagement/Store";

export default function ChatLanguage() {
  const [state, setState] = useContext(Context);
  const [ablychatname, setAblychantname] = useState(null);

  function updateChatLan() {
    let elemValue = document.getElementById("chat-lang").value;
    console.log(`chat lang: ${elemValue}`);
    setState((preState) => {
      return {
        ...preState,
        defaultChatLanguage: `${elemValue}`,
        livechat: "invisible",
      };
    });
  }
const updateName=(event)=>{
  setAblychantname(event.target.value);
}
  return (
    <>
      <form className="max-w-sm mx-auto">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <span className="text-xs inline-block py-1 px-2 rounded text-blue-600 bg-blue-200 last:mr-0 mr-1">
            Select Chat Language
          </span>
        
        <select
          id="chat-lang"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={updateChatLan}
        >
          <option value="en-GB">English</option>
          <option value="de-DE">German</option>
          <option value="ja-JP">Japanese</option>
          <option value="es-ES">Spanish</option>
        </select>
        </label>
        <label>
          Name:
          <input
            id="chat-name"
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 placeholder:italic"
            placeholder="This name will appear in chat..."
            value={ablychatname ||""}
            onChange={updateName}
          />
        </label>
      </form>
    </>
  );
}
