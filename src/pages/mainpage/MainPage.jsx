import { Navbar } from "@/components";
import React from "react";
import FileUpload from "./components/FileUpload";
import CaseContainer from "./components/CaseContainer";
import FileUp from "./components/FileUp";

const MainPage = () => {
  return (
    <div className="w-screen h-screen bg-gray-100 overflow-hidden">
      <Navbar />

      <div className="grid grid-cols-12 w-full h-full gap-0">
        <FileUpload />
        {/* <FileUp /> */}
        <CaseContainer />
      </div>
    </div>
  );
};

export default MainPage;
