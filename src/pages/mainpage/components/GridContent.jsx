import React, { useState } from "react";
import CustomSelect from "./CustomSelect";
import GridItem from "./GridItem";
import { XCircleIcon } from "@heroicons/react/24/solid";
import TableContent from "./TableContent";

const GridContent = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = (id) => {
    setOpenModal(true);
  };
  return (
    <div className="flex flex-wrap w-full col-span-5 gap-5 mt-5 justify-center md:justify-start">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9].map((d, i) => (
        <div key={i}>
          <GridItem />
        </div>
      ))}

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

export default GridContent;
