import React from "react";
import "./Navbar.css";

const imgUrl =
  "https://thumbs.dreamstime.com/b/question-mark-icons-blue-background-vertical-image-not-having-opinion-being-confused-question-mark-icons-blue-234520957.jpg";
const Navbar = () => {
  return (
    <div className="position-relative">
      <img src={imgUrl} className="w-100 rounded " alt="" />
      <div className="position ">
        <h1 className="fw-bold">QUIZ TIME</h1>
        <p>Start Quiz and Know your Level and Improve it</p>
      </div>
    </div>
  );
};

export default Navbar;
