import AddTour from "@/pages/Admin/AddTour";
import Analytics from "@/pages/Admin/Analytics";
import type { ISliderItem } from "@/types";

export const adminSidebarItems : ISliderItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        Component: Analytics,
      },
    ],
  },
  {
    title: "Tour Management",
    items: [
      {
        title: "Add Tour Type",
        url: "/admin/add-tour-type",
        Component: AddTour,
      },

      {
        title: "Add Tour",
        url: "/admin/add-tour",
        Component: AddTour,
      },
    ],
  },
];
