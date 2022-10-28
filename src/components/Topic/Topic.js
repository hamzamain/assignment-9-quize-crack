import React from "react";
import { Link } from "react-router-dom";
import "./Topic.css";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div className="shadow-lg topic  ">
      <img src={logo} width="40%" alt="" />
      <div className="">
        <h4>{name}</h4>
        <Link to={`/topic/${id}`}>
          <button className="btn btn-warning text-black fw-semibold">
            Start Practice
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Topic;
