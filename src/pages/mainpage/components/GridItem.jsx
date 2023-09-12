import { FolderOpenIcon, XCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import TableContent from "./TableContent";

const GridItem = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div
      className="w-52 h-44 bg-gray-50 rounded cursor-pointer hover:bg-gray-200"
      onClick={() => setOpenModal(true)}>
      <FolderOpenIcon className="w-24" />
      <div className="px-4 flex flex-col gap-1">
        <label className="text-sm">Case: #102</label>
        <label className="text-sm">Case Files: 21</label>
        <label className="text-xs">Updated: 2023-07-23</label>
      </div>

      {openModal && (
        <div className="z-20 bg-black absolute top-0 right-0 left-0 bottom-0 bg-opacity-20 backdrop-blur-lg flex justify-center items-center cursor-default">
          <div className="w-[70%] bg-white px-10 py-5 rounded shadow">
            <div className="w-full flex justify-between">
              <h1 className="font-medium text-xl">Case No: #101 </h1>
              <button>
                <XCircleIcon
                  className="w-7 h-7 fill-red-400"
                  onClick={() => setOpenModal(false)}
                />
              </button>
            </div>
            <TableContent />
          </div>
        </div>
      )}
    </div>
  );
};

export default GridItem;
