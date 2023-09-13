import { DocumentArrowUpIcon } from "@heroicons/react/24/solid";
import React, { useRef, useState } from "react";
import { BsSoundwave } from "react-icons/bs";
const FileUp = () => {
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
    <div>
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      <>
        <DocumentArrowUpIcon className="w-20" />
        <label> click here to select a file</label>
        <label className="text-sky-600 text-xs">*.mp3 *.flac *.ogg *.m4a</label>
      </>
      <button onClick={() => fileInputRef.current.click()}>
        Select Audio File
      </button>
      {file && (
        <div className="w-20">
          <BsSoundwave className="W-20" />
          {file.name}

          <p>Selected File: {file.name}</p>
          <p>File Size: {Math.round(file.size / 1024 / 1024)} MB</p>
          <button
            className="btn bg-green-400 text-white  border-0 w-full mt-5"
            onClick={handleUpload}>
            Transcribe file
          </button>
        </div>
      )}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default FileUp;
