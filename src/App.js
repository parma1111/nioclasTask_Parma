import React, { useState } from "react";
import Question from "./Question";
import "./App.css";

const questionIds = [
  "AreaUnderTheCurve_901",
  "BinomialTheorem_901",
  "DifferentialCalculus2_901",
];

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestionId = questionIds[currentQuestionIndex];

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex === questionIds.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex === 0 ? questionIds.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="app">
      <h1>Math Questions</h1>
      <Question questionId={currentQuestionId} />
      <button onClick={handlePreviousQuestion}>Previous Question</button>
      <button onClick={handleNextQuestion}>Next Question</button>
    </div>
  );
};

export default App;
