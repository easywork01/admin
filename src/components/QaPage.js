import React, { useState } from "react";
import QaForm from "../components/QaFrom";
import QaList from "../components/QaList";

const QaPage = () => {
  const [qaList, setQaList] = useState([]);

  const handleAddQa = (qa) => {
    setQaList([...qaList, qa]);
  };

  return (
    <div className="body-container bg-stone-200 h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <QaList qaList={qaList} />
        <QaForm onAddQa={handleAddQa} />
      </div>
    </div>
  );
};

export default QaPage;
