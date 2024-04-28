import React from "react";

const QaList = ({ qaList }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-8 mb-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Q&A List</h2>
      <div className="grid gap-6">
        <div className="flex flex-wrap">
          <div className="w-1/2 pr-2">
            <div className="font-bold text-lg mb-2">Question:</div>
          </div>
          <div className="w-1/2 pl-4">
            <div className="font-bold text-lg mb-2">Answer:</div>
          </div>
        </div>
        {qaList.map((qa, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4">
            <div className="flex flex-wrap">
              <div className="w-1/2 pr-4">
                <div>{qa.question}</div>
              </div>
              <div className="w-1/2 pl-4">
                <div>{qa.answer}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QaList;
