"use client";
import { useState } from "react";
export default function FileTranslate(props) {
  const [disabled, setDisabled] = useState(props.translate);
  const activeButton =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded";
  const disabledButton =
    "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed";
  function downloadFile() {
    console.log("file downloaded successfully");
    setDisabled(true);
  }

  return (
    <>
      translation completed for file {props.file.name}
      <button
        className={disabled ? disabledButton : activeButton}
        onClick={downloadFile}
      >
        download
      </button>
    </>
  );
}
