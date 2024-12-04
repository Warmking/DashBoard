import React from "react";

const TableTransactions = ({ tableData = "" }) => {
  const headers = Object.keys(tableData[0]);
  return (
    <div className="bg-[#F7FFFA] px-3 m-2 rounded-xl focus:border-[#197BBD] focus:border">
    <h3 className="text-center font-bold p-4">Last 10 transactions</h3>
      <table
        style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }} className="text-[0.7rem]"
      >
        <thead>
          <tr className="text-[#AEAEAE] font-thin">
            <th className="p-2" >S.No</th>
            {headers.map((header, index) => (
              <th key={index} className="p-2">{header}</th>
            ))} 
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, rowIndex) => (
            <tr key={rowIndex}>
              <td className="p-2">{rowIndex+1}</td>
              <td className="p-2">{data.Date}</td>
              <td className="p-2 text-[#718EBF]">{data.Name}</td>
              <td className="p-2 text-[#718EBF]">{data.Status}</td>
              <td className="p-2 text-[#F3941E]">Rs.{data.Amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTransactions;
