import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PagesLogin } from "./Pages/Login.jsx";
import { RegisterPage } from "./Pages/RegisterPage.jsx";
import { ErrorPage } from "./Pages/ErrorPage.jsx";
import { Products } from "./Pages/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <PagesLogin />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
