import React from "react";
import { RouteObject } from "react-router";
import BaseLayout from "@renderer/layout/BaseLayout";
import Home from "@renderer/view/home/Home";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { path: "", element: <Home /> },
    ],
  },
];

export default routes;
