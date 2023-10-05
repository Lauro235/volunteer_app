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

export const instructionsVolunteer = [
  "Use the week view and tap the sun or the moon icons to book either a morning or evening slot.",
  "Check the urgent slots and book one of those if you want to save the day!",
  "Click the calendar Icon to find a specific date that you want to book for."
]

export const instructionsManager = [
  "See all future sessions and whether they have been booked or not.",
  "See who has booked sessions",
  "Get the profile of users.",
  "Create new sessions."

]