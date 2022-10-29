import React, { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";
import ShowTst from "./ShowTst/ShowTst";

export const QuizContext = createContext({});
export const ToastContext = createContext([]);

const ShowQuiz = () => {
  const quizs = useLoaderData().data;

  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  const [answers, setAnswers] = useState([]);

  // console.log(quizs);
  console.log(answers);
  const { questions, name, total } = quizs;

  const handlerChecker = (id) => {
    const singleOption = questions.find((question) => question.id === id);

    const exist = answers.find((ques) => ques.id === singleOption.id);

    if (exist) {
      alert("This answer has taken");
    } else {
      const newAnswers = [...answers, singleOption];
      setAnswers(newAnswers);
    }

    return singleOption;
  };

  const toastData = handlerChecker();
  console.log(toastData);

  return (
    <QuizContext.Provider value={[quizs, handlerChecker]}>
      <ToastContext.Provider value={[showA, setShowA, toggleShowA]}>
        <div>
          <h1>{name}</h1>
          <p>
            <small>
              <b>Total QN: {total}</b>
            </small>
          </p>
          {questions.map((qn) => (
            <Questions key={qn.id} qn={qn}></Questions>
          ))}
        </div>
        <ShowTst></ShowTst>
      </ToastContext.Provider>
    </QuizContext.Provider>
  );
};

export default ShowQuiz;
