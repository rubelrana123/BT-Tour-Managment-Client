import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";

import About from "@/pages/About";
import Login from "@/pages/login";
import Register from "@/pages/register";
 
import Verify from "@/pages/Verify";
import generateRoute from "@/utils/generateRoute";

import { createBrowserRouter } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSlideBarItems";

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
    path: "/admin",
    Component: DashboardLayout,
    children: [...generateRoute(adminSidebarItems)],
  },
  {
    path: "/user",
    Component: DashboardLayout,
    children: [...generateRoute(userSidebarItems)],
  },

  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/verify",
    Component: Verify,
  },
]);
