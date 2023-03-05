import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Question = ({ questionId }) => {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      const res = await axios.get(
        `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${questionId}`
      );
      setQuestion(res.data[0].Question);
    };
    fetchQuestion();
  }, [questionId]);

  return (
    <div className="question">
      {question && (
        <MathJaxContext>
          <MathJax>{question}</MathJax>
        </MathJaxContext>
      )}
    </div>
  );
};

export default Question;
