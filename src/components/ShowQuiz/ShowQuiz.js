import React, { useState } from "react";
import { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";
import ShowTst from "./ShowTst/ShowTst";

export const ToastContext = createContext([]);
const ShowQuiz = () => {
  const lodedData = useLoaderData().data;
  const { name, questions, total } = lodedData;

  const [answer, setAnswer] = useState([]);
  const [show, setShow] = useState(false);
  const [forToast, setForToast] = useState([]);

  const handlerChecker = (event, correctAnswer, eachQuestion, option) => {
    const showToToast = [correctAnswer, eachQuestion, option];
    setForToast(showToToast);
    const textValue = event.currentTarget.innerText;

    if (textValue === correctAnswer) {
      event.currentTarget.classList.toggle("true");
      alert("answer is true");
    } else {
      event.currentTarget.classList.toggle("false");
    }

    const ans = { option: option, correctAnswer: correctAnswer };
    setAnswer(ans);

    // const exists = answer.find(
    //   (answer) => answer.question.id === question.question.id
    // );

    // if (exists) {
    //   alert("alredy answred");
    // } else {
    //   const newQuestion = [...answer, question];
    //   setAnswer(newQuestion);
    // }
    return showToToast;
  };

  return (
    <ToastContext.Provider value={[show, setShow]}>
      <div>
        <h1>Quiz of {name}</h1>
        <p>
          <b>Total Quiz's: {total}</b>
        </p>
        <div className="single-question">
          {questions.map((eachQuestion) => (
            <Questions
              key={eachQuestion.id}
              eachQuestion={eachQuestion}
              handlerChecker={handlerChecker}
              forToast={forToast}
            ></Questions>
          ))}
        </div>
      </div>
    </ToastContext.Provider>
  );
};

export default ShowQuiz;
