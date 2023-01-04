import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./screens/Home";
import About from "./screens/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
