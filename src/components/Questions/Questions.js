import React from "react";
import Option from "../Option/Option";
import ShowTst from "../ShowQuiz/ShowTst/ShowTst";
import "./Questions.css";

const Questions = ({ eachQuestion, handlerChecker, forToast }) => {
  // console.log(eachQuestion);
  const { options, question, correctAnswer } = eachQuestion;
  return (
    <div className="shadow-lg width mb-5 p-5 rounded">
      <p className="text-danger">{question}</p>
      <div className="options text-danger">
        {options.map((option, idx) => (
          <Option
            key={idx}
            option={option}
            correctAnswer={correctAnswer}
            handlerChecker={handlerChecker}
            eachQuestion={eachQuestion}
          ></Option>
        ))}
      </div>
      <ShowTst forToast={forToast}></ShowTst>
    </div>
  );
};

export default Questions;
