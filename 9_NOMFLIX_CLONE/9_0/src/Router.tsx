import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "/tv",
            element: <Tv />,
          },
          {
            path: "/search",
            element: <Search />,
          },
        ],
      },
    ],
  },
]);

export default router;
