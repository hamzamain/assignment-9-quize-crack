import React from "react";
import Option from "../Option/Option";
import ShowTst from "../ShowQuiz/ShowTst/ShowTst";
import "./Questions.css";

const Questions = ({ qn }) => {
  const { options, question, id } = qn;

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
