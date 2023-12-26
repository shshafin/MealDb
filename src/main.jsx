import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Items from "./components/items/Items";
import ItemDetail from "./components/ItemDetail/ItemDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/Items",
        loader: () =>
          fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`),
        element: <Items></Items>,
      },
      {
        path: `/Items/:itemId`,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/categories.php/${params.itemId}`
          ),
        element: <ItemDetail></ItemDetail>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
// https://www.themealdb.com/api/json/v1/1/categories.php
