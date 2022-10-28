import React from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Topic from "../Topic/Topic";
import "./Topics.css";

const Topics = () => {
  const topics = useLoaderData().data;
  console.log(topics);
  return (
    <div className="width-85 my-5 topics">
      <Navbar></Navbar>
      <div className="topic-container">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;
