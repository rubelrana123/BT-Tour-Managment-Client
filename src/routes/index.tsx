import App from "@/App";
import AdminLayout from "@/components/layout/AdminLayout";

import About from "@/pages/About";
 
import Login from "@/pages/login";
import Register from "@/pages/register";
import Verify from "@/pages/Verify";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/about",
        Component: About,
      },
    ],
  },
  {
    path : "/admin",
    Component : AdminLayout,
  },
    {
    path : "/login",
    Component : Login,
  },
    {
    path : "/register",
    Component : Register,
  },
    {
    path : "/verify",
    Component : Verify,
  }  
]);
