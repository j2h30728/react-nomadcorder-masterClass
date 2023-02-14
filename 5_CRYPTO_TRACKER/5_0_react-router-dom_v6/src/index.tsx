import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router";
import router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//Create a Client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* Provide the clientto your App */}
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
