"use client";
import React, { useContext, useState } from "react";
import { Context } from "../stateManagement/Store";

export default function LangOptions() {
  const [state, setState] = useContext(Context);
  const [inputValue, setInputValue] = useState("");
  function updateLang1(){
    setState((preState) => {
      return {
        ...preState,
        defaultInput:"en-GB",
        defaultOutput:"ja-JP",
        translateInput: "English",
        translateOutput: "Japanese"
      };
    });
  }
  function updateLang4(){
    setState((preState) => {
      return {
        ...preState,
        defaultInput:"ja-JP",
        defaultOutput:"en-GB",
        translateInput: "Japanese",
        translateOutput: "English"
      };
    });
  }
  return (
    <>
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        Mode:
      </h3>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="horizontal-list-radio-license"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              onClick={updateLang1}
            />
            <label
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              <p className="text-xs text-gray-500">English to Japanese</p>
            </label>
          </div>
        </li>
        <li className="w-full dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="horizontal-list-radio-passport"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              onClick={updateLang4}
            />
            <label
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
             <p className="text-xs text-gray-500">Japanese to English</p>
            </label>
          </div>
        </li>
      </ul>
    </>
  );
}
