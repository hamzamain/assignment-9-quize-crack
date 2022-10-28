import React from "react";
import { useContext } from "react";
import Option from "../Option/Option";
import { QuizContext } from "../ShowQuiz/ShowQuiz";
import ShowTst from "../ShowQuiz/ShowTst/ShowTst";
import "./Questions.css";

const Questions = ({ qn }) => {
  //   const quizs = useContext(QuizContext);
  const { options, question, id } = qn;
  console.log(qn);

  return (
    <div className="border rounded shadow-lg mb-5 container p-5">
      {question}
      <div className="options">
        {options.map((option) => (
          <Option option={option} id={id} question={question}></Option>
        ))}
      </div>
      <ShowTst></ShowTst>
    </div>
  );
};

export default Questions;
