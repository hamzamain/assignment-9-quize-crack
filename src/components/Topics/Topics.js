import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MainHeader from "../MainHeader/MainHeader";
import Topic from "../Topic/Topic";
import "./Topics.css";

const Topics = () => {
  const topics = useLoaderData().data;
  // const [anser, serAnser] = useState([]);

  // console.log(topics);
  return (
    <div className="width my-5 topics">
      <MainHeader></MainHeader>

      <div className="topic-container">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;
