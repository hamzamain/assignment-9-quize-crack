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

  console.log(quizs);
  const { questions, name, total } = quizs;

  const handlerChecker = (id) => {
    console.log(id, quizs);
    const singleOption = questions.find((question) => question.id === id);
    return singleOption;
  };

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
