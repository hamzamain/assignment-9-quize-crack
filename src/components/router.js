import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "./Blogs/Blogs";
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
        element: <Topics></Topics>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/topic/:topicId",
        element: <Topic></Topic>,
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
