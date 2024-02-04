"use client";
import { useState } from "react";
import FileTranslate from "./FileTranslate";

export default function FileUpload() {
  const [file, setFile] = useState("");
  const [trnslate, setTranslate]=useState(false);
  function handleFile(event) {
    setTranslate(false);
    setFile(event.target.files[0]);
    // console.log(event.target.files[0]);
  }
  function handleUpload(event) {
    console.log(file);
    setTranslate(true);
    event.preventDefault();
    
  }
  return (
    <div className="mb-3 w-96">
      <label
        htmlFor="formFile"
        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
      >
        Upload file for the translation
      </label>
      <form onSubmit={handleUpload}>
        <input
          name="file"
          onChange={handleFile}
          accept=".doc,.docx,application/pdf"
          type="file"
          id="formFile"
        />
        <button>Upload</button>
      </form>
      {trnslate?<FileTranslate file={file}/>:<div></div>}
    </div>
  );
}
