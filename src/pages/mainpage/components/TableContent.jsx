import React from "react";

const TableContent = () => {
  return (
    <div className="mt-5">
      <table className="w-full border-collapse border-2 table-auto">
        <thead>
          <tr>
            <th className="py-2 px-3 bg-gray-200 border border-slate-600">
              Case No
            </th>
            <th className="py-2 px-3 bg-gray-200 border border-slate-600">
              Transcribed File
            </th>
            <th className="py-2 px-3 bg-gray-200 border border-slate-600">
              Word Document
            </th>
          </tr>
        </thead>
        <tbody>
          {[0, 1, 3, 4, 5, 6, 7, 8, 9, 8, 0].map((d, i) => (
            <tr
              className="text-center hover:bg-gray-100 cursor-pointer"
              key={i}>
              <td className="px-2 py-3 border border-slate-600 hover:bg-gray-100">
                #00{d}
              </td>
              <td className="px-2 py-3 border border-slate-600 hover:bg-gray-100">
                {" "}
                <a
                  download={"#"}
                  className="text-sky-500">
                  {" "}
                  defense.case.2.12.2023.json
                </a>
              </td>
              <td className="px-2 py-3 border border-slate-600 hover:bg-gray-100">
                {" "}
                <a
                  download={"#"}
                  className="text-sky-500">
                  {" "}
                  defense.case.2.12.2023.docx
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;
