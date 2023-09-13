import React, { useCallback, forwardRef, useState, useRef } from "react";
import {
  DocumentArrowUpIcon,
  DocumentPlusIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import { BsSoundwave } from "react-icons/bs";
import { MdOutlineAudioFile } from "react-icons/md";

import CustomSelect from "./CustomSelect";
const FileUpload = () => {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      if (
        selectedFile.type.startsWith("audio/") &&
        selectedFile.size <= 10 * 1024 * 1024
      ) {
        setFile(selectedFile);
        setErrorMessage("");
      } else {
        setFile(null);
        if (!selectedFile.type.startsWith("audio/")) {
          setErrorMessage("Invalid file type. Please select an audio file.");
        } else if (selectedFile.size > 10 * 1024 * 1024) {
          setErrorMessage(
            "File size exceeds 10MB limit. Please select a smaller audio file."
          );
        }
      }
    }
  };

  const handleUpload = () => {
    // Handle the file upload logic here
    if (file) {
      // Perform the upload action or display a success message
      alert("File uploaded successfully!");
    } else {
      // Handle the case where no valid file is selected
      alert("Please select a valid audio file first.");
    }
  };

  return (
    <div className="w-full col-span-12 h-full border-b-gray-200 border-b px-10 py-10 my-0">
      <div className="border-2 w-full sm:w-3/12 md:w-3/12 lg:w-2/12 xl:w-1/12 flex justify-center flex-col items-center py-2 gap-4">
        <DocumentPlusIcon className="w-20" />
        <div className="w-full px-2">
          <button
            className="btn w-full bg-green-400 text-white border-0"
            onClick={() => setShowModal(!showModal)}>
            Upload file
          </button>
        </div>
      </div>

      {showModal && (
        <div className="z-20 bg-black absolute top-0 right-0 left-0 bottom-0 bg-opacity-20 backdrop-blur-lg flex justify-center items-center">
          <div className="min-w-[600px] h-fit bg-white rounded px-7 py-5">
            <div className="flex justify-between">
              <h1 className="font-medium text-xl">Upload Case File</h1>
              <button>
                <XCircleIcon
                  className="w-7 h-7 fill-red-400"
                  onClick={() => setShowModal(false)}
                />
              </button>
            </div>
            <div className="mt-5 ">
              <label>Select Case</label>
              <div className="flex gap-5 items-center">
                <div className="flex-1">
                  <CustomSelect />
                </div>
                <button className="btn bg-sky-500 text-white border-0 btn-md">
                  New Case
                </button>
              </div>
            </div>

            {/* handle file upload */}

            <div className="w-full h-56 flex justify-center bg-gray-50 items-center rounded flex-col mt-5">
              <input
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
                ref={fileInputRef}
              />

              {file && (
                <div className="w-full flex justify-center flex-col items-center py-3">
                  <BsSoundwave className="w-20 h-20" />

                  <p>Selected File: {file.name}</p>
                  <p>File Size: {Math.round(file.size / 1024 / 1024)} MB</p>
                </div>
              )}
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

              {file === null ? (
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="w-full  flex justify-center flex-col items-center py-3 h-full">
                  <MdOutlineAudioFile className="w-20 h-20" />
                  Select Audio File
                  <label className="text-sky-600 text-xs block">
                    *.mp3 *.flac *.ogg *.m4a
                  </label>
                </button>
              ) : (
                <button
                  className="flex w-full justify-center pt-4"
                  onClick={() => fileInputRef.current.click()}>
                  <MdOutlineAudioFile className="w-5 h-5" />
                  Change File
                </button>
              )}
            </div>

            <div>
              <button
                className="btn bg-green-400 text-white  border-0 w-full mt-5 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-white"
                onClick={handleUpload}
                disabled={!file ? true : false}>
                Transcribe file
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
