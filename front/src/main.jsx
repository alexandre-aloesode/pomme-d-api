import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ProductList from "./productList.jsx";
import ProductPage from "./product.jsx";
import UserLogin from "./components/login.jsx";
import UserRegister from "./components/register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  { path: "/products", element: <ProductList /> },
  { path: "/login", element: <UserLogin /> },
  { path: "/register", element: <UserRegister /> },
  { path: "/product/:productID", element: <ProductPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
