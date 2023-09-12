import React, { useState } from "react";
import GridContent from "./GridContent";
import CustomSelect from "./CustomSelect";
import { QueueListIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import TableContent from "./TableContent";

const CaseContainer = () => {
  const [tab, setTab] = useState("tab1");
  const switchTab = (tab) => {
    setTab(tab);
  };
  return (
    <div className="col-span-12 w-full h-screen bg-gray-200 px-10">
      <h1 className="font-medium text-lg text-gray-700 w-full col-span-12 mt-5 h-fit ">
        Available Cases
      </h1>
      <div className="w-full h-full">
        <div className="tabs">
          <button
            className={`tab tab-bordered ${tab === "tab1" && "tab-active"}`}
            onClick={() => setTab("tab1")}>
            All Cases
          </button>
          <button
            className={`tab tab-bordered ${tab === "tab2" && "tab-active"}`}
            onClick={() => setTab("tab2")}>
            All Files
          </button>
        </div>
        <div className="w-full bg-white min-h-[600px] p-5 rounded">
          <div className="w-full flex justify-between">
            <div className="w-8/12 lg:w-2/12">
              <CustomSelect />
            </div>
            <div className="flex gap-2 items-center">
              <button>
                <Squares2X2Icon className="w-5" />
              </button>
              <button>
                <QueueListIcon className="w-5" />
              </button>
            </div>
          </div>
          {tab === "tab1" && <GridContent />}
          {tab === "tab2" && <TableContent />}
        </div>
      </div>
    </div>
  );
};

export default CaseContainer;
