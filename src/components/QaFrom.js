import React, { useState } from "react";

const QaForm = ({ onAddQa }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleAddQa = () => {
    // Check if both question and answer are provided
    if (question.trim() !== "" && answer.trim() !== "") {
      // Call the callback function to add Q&A
      onAddQa({ question, answer });
      // Clear the input fields
      setQuestion("");
      setAnswer("");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 flex flex-col sm:flex-row items-center justify-between">
      <div className="mb-4 sm:mr-4 w-full sm:w-auto">
        <label
          className="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="question"
        >
          Question
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="question"
          type="text"
          placeholder="Enter Question"
          value={question}
          onChange={handleQuestionChange}
        />
      </div>
      <div className="mb-4 sm:mr-4 w-full sm:w-auto">
        <label
          className="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="answer"
        >
          Answer
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="answer"
          type="text"
          placeholder="Enter Answer"
          value={answer}
          onChange={handleAnswerChange}
        />
      </div>
      <div className="flex items-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-3 py-2 rounded focus:outline-none focus:shadow-outline"
          onClick={handleAddQa}
        >
          Add Q&A
        </button>
      </div>
    </div>
  );
};

export default QaForm;
