import React from "react";

const Blog = ({ blog }) => {
  const { question, answer } = blog;
  return (
    <div className="border border-info rounded p-4">
      <h2>{question}</h2>
      <p>{answer}</p>
    </div>
  );
};

export default Blog;
