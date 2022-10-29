import React, { useContext } from "react";
import { ToastContext } from "../ShowQuiz/ShowQuiz";
import "./Options.css";

const Option = ({ option, correctAnswer, handlerChecker, eachQuestion }) => {
  const [show, setShow] = useContext(ToastContext);
  return (
    <button
      className={`border border-danger m-3 rounded p-3 hover `}
      onClick={(event) => {
        return [
          handlerChecker(event, correctAnswer, eachQuestion, option),
          setShow(true),
        ];
      }}
    >
      {option}
    </button>
  );
};

export default Option;
