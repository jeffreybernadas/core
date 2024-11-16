import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

const App = () => <RouterProvider router={router} />;
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
