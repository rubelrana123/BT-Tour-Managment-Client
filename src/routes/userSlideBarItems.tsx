import Booking from "@/pages/User/Booking";
import type { ISliderItem } from "@/types";

export const userSidebarItems: ISliderItem[] = [
  {
    title: "User History",
    items: [
      {
        title: "Bookings",
        url: "/user/bookings",
        Component: Booking,
      },
    ],
  },
];
