import React from "react";
import "./Topic.css";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div className="shadow-lg topic position-relative ">
      <img src={logo} width="100%" alt="" />
      <div className="name-btn position-absolute bottom-0 start-0">
        <h4>{name}</h4>
        <button className="btn btn-warning text-black fw-semibold">
          Start Practice
        </button>
      </div>
    </div>
  );
};

export default Topic;
