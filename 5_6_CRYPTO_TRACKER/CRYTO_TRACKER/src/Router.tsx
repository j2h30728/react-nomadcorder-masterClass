import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Coins from "./componts/Coins";
import Coin from "./componts/Coin";
import Price from "./componts/Price";
import Chart from "./componts/Chart";

const router = createBrowserRouter([
  {
    path: `${process.env.PUBLIC_URL}/`,
    element: <App />,
    children: [
      {
        path: "",
        element: <Coins />,
      },
      {
        path: ":coinId",
        element: <Coin />,
        children: [
          {
            path: "price",
            element: <Price />,
          },
          {
            path: "chart",
            element: <Chart />,
          },
        ],
      },
    ],
  },
]);
export default router;
