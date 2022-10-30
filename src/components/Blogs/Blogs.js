import React from "react";
import Blog from "../Blog/Blog";
import "./Blog.css";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      question: "what is the purpose of react router ?",
      answer: `React Router is used to define multiple routes in the application.
  When a user types a specific URL into the browser, and if this URL
  path matches any 'route' inside the router file, the user will be
  redirected to that particular route.`,
    },
    {
      id: 2,
      question: "how does context api works ?",
      answer: `The React Context API is a way for a React app to effectively produce
      global variables that can be passed around. This is the alternative to
      "prop drilling" or moving props from grandparent to child to parent,
      and so on. Context is also touted as an easier, lighter approach to
      state management using Redux.`,
    },
    {
      id: 3,
      question: "useref hook in react",
      answer: `The useRef Hook allows you to persist values between renders. It can
      be used to store a mutable value that does not cause a re-render when
      updated.`,
    },
  ];
  return (
    <div>
      <div className="blog container mx-auto">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
