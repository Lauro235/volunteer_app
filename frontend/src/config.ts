import { BsExclamationSquare } from "react-icons/bs";
import { BiSolidHelpCircle } from "react-icons/bi";
import { IoCalendarNumber } from "react-icons/io5";
import { MdUpcoming } from "react-icons/md"
import { BiPlus } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi2"

export const navigationVolunteer = [
  {
    icon: BiSolidHelpCircle,
    label: "Help",
    path: "/app/volunteer"
  },
  {
    icon: BsExclamationSquare,
    label: "Urgent",
    path: "/app/volunteer/urgent"
  },
  {
    icon: IoCalendarNumber,
    label: "Booking",
    path: "/app/volunteer/booking"
  },
  {
    icon: MdUpcoming,
    label: "Sessions",
    path: "/app/volunteer/sessions"
  },
]

export const navigationManager = [
  {
    icon: BiSolidHelpCircle,
    label: "Help",
    path: "/app/manager"
  },
  {
    icon: IoCalendarNumber,
    label: "Calendar",
    path: "/app/manager/booking"
  },
  {
    icon: BiPlus,
    label: "Create",
    path: "/app/manager/create"
  },
  {
    icon: HiUserGroup,
    label: "Volunteers",
    path: "/app/manager/volunteers"
  },
]