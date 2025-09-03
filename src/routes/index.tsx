import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";

import About from "@/pages/About";
import Login from "@/pages/login";
import Register from "@/pages/register";

import Verify from "@/pages/Verify";
import generateRoute from "@/utils/generateRoute";

import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSlideBarItems";
import { withAuth } from "@/utils/withAuth.tsx";
import { UnauthorizedPage } from "@/pages/Unauthorized";
import { role } from "@/constants/role";
import type { TRole } from "@/types";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: withAuth(About),
        path: "about",
      },
    ],
  },
  {
    path: "/admin",
    Component: withAuth(DashboardLayout, role?.admin as TRole),
    children: [
      { index: true, element: <Navigate to="/admin/analytics" /> },
      ...generateRoute(adminSidebarItems),
    ],
  },
  {
    path: "/user",
    Component: withAuth(DashboardLayout, role?.user as TRole),
    children: [
      { index: true, element: <Navigate to="/user/bookings" /> },

      ...generateRoute(userSidebarItems),
    ],
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
  {
    path : "/unauthorized",
    Component : UnauthorizedPage
  }
]);
