import React, { useCallback, forwardRef, useState } from "react";
import {
  DocumentArrowUpIcon,
  DocumentCheckIcon,
  DocumentPlusIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import Uploady from "@rpldy/uploady";
import UploadDropZone from "@rpldy/upload-drop-zone";
import { asUploadButton } from "@rpldy/upload-button";

import CustomSelect from "./CustomSelect";
const FileUpload = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  // eslint-disable-next-line react/display-name
  const MyClickableDropZone = forwardRef((props, ref) => {
    const { onClick, ...buttonProps } = props;

    const onZoneClick = useCallback(
      (e) => {
        if (onClick) {
          onClick(e);
        }
      },
      [onClick]
    );

    return (
      <UploadDropZone
        {...buttonProps}
        ref={ref}
        onDragOverClassName="active"
        extraProps={{ onClick: onZoneClick }}>
        <div className="flex flex-col justify-center items-center">
          {selectedFile ? (
            <div className="w-20">
              <DocumentCheckIcon className="W-20" />
              {selectedFile.name}
            </div>
          ) : (
            <>
              <DocumentArrowUpIcon className="w-20" />
              <label>Drop audio file or click here</label>
              <label className="text-sky-600 text-xs">
                *.mp3 *.flac *.ogg *.m4a
              </label>
            </>
          )}
        </div>
      </UploadDropZone>
    );
  });

  const DropZoneButton = asUploadButton(MyClickableDropZone);
  const filterByAudio = useCallback((file) => {
    // Filter out files larger than 5MB
    if (file.size > 5242880) {
      return false;
    }

    // Check if the file type is audio
    const allowedAudioTypes = ["audio/mpeg", "audio/wav", "audio/mp3"];
    return allowedAudioTypes.includes(file.type);
  }, []);

  const onFileSelect = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  }, []);

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
          {/* <button className="btn btn-md bg-400 text-white border-0">
          Upload File
        </button> */}
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

            <div className="mt-5 px-5 ">
              <div className="w-full h-44 flex justify-center bg-gray-50 items-center rounded">
                <Uploady
                  accept="*.mp3"
                  debug
                  multiple={false}>
                  <DropZoneButton
                    onClick={onFileSelect}
                    fileFilter={filterByAudio}
                  />
                </Uploady>
              </div>
            </div>

            <div>
              <button className="btn bg-green-400 text-white  border-0 w-full mt-5">
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
