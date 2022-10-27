import React from "react";

const imgUrl =
  "https://thumbs.dreamstime.com/b/question-mark-icons-blue-background-vertical-image-not-having-opinion-being-confused-question-mark-icons-blue-234520957.jpg";
const Navbar = () => {
  return (
    <div>
      <img src={imgUrl} className="w-100 rounded " alt="" />
      <h1>QUIZ TIME</h1>
    </div>
  );
};

export default Navbar;
