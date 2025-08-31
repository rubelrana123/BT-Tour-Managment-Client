import App from "@/App";
import AdminLayout from "@/components/layout/AdminLayout";
import DashboardLayout from "@/components/layout/DashboardLayout";

import About from "@/pages/About";
import Analytics from "@/pages/Admin/Analytics";
 
import Login from "@/pages/login";
import Register from "@/pages/register";
import Booking from "@/pages/User/Booking";
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
    Component : DashboardLayout,
    children : [
      {path : "analytics",
        Component : Analytics
      }
    ]
  },
    {
    path : "/user",
    Component : DashboardLayout,
    children : [
      {path : "bookings",
        Component : Booking
      }
    ]
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
