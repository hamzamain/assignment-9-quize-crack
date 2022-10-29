import React from "react";
import { useContext } from "react";
import { QuizContext, ToastContext } from "../ShowQuiz/ShowQuiz";

const Option = ({ option, id, question }) => {
  const [quizs, handlerChecker] = useContext(QuizContext);
  const [showA, setShowA, toggleShowA] = useContext(ToastContext);
  // const { questions } = quizs;

  return (
    <button
      onClick={() => {
        return [toggleShowA, handlerChecker(id)];
      }}
      className="border border-warning rounded p-2"
    >
      {/* <input type="radio" value={option} id={id} name={question} />

      <label for={id}>{option}</label> */}
      {option}
    </button>
  );
};

export default Option;
