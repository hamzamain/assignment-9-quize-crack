import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import { topicsData } from "../Loder/TopicsData";
import Blogs from "./Blogs/Blogs";
import ShowQuiz from "./ShowQuiz/ShowQuiz";
import Statistics from "./Statistics/Statistics";
import Topic from "./Topic/Topic";
import Topics from "./Topics/Topics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => topicsData(),
        element: <Topics></Topics>,
      },
      {
        path: "/statistics",
        loader: () => topicsData(),
        element: <Statistics></Statistics>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/topic/:topicId",
        loader: ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
          );
        },
        element: <ShowQuiz></ShowQuiz>,
      },
      {
        path: "/*",
        element: (
          <div>
            <p>
              <b>Page not found</b>
            </p>
            <p>
              <b>
                <i>404</i>
              </b>
            </p>
          </div>
        ),
      },
    ],
  },
]);

export default router;
