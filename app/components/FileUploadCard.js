"use client";
import { useState } from "react";
import FileTranslate from "../components/FileTranslate";
export default function FileUploadCard() {
  const [file, setFile] = useState("");
  const [trnslate, setTranslate] = useState(false);
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
    <>
      <div className="flex ">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              File translate through DeepL
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            PDF, Word (.docx), or PowerPoint (.pptx) file can be translated
          </p>
          <form onSubmit={handleUpload}>
            <input
              name="file"
              onChange={handleFile}
              accept=".doc,.docx,application/pdf"
              type="file"
              id="formFile"
            />
            <label className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select an option
            </label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Select target language</option>
              <option value="EN">English</option>
              <option value="JA">Japanese</option>
            </select>
            <button className="inline-flex items-center px-3 mt-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Translate
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </form>
          {trnslate ? (
            <FileTranslate file={file} downlod={trnslate} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}
