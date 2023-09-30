import { BsExclamationSquare } from "react-icons/bs";
import { BiSolidHelpCircle } from "react-icons/bi";
import { IoCalendarNumber } from "react-icons/io5";
import SessionsSVG from "../SessionsSVG/SessionsSVG";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between flex-1">
      <a className="flex flex-col p-2 hover:bg-hover hover:text-white hover:cursor-pointer">
        <BsExclamationSquare className="text-5xl" />
        <p>Urgent</p>
      </a>
      <a className="flex flex-col p-2 hover:bg-hover hover:text-white hover:cursor-pointer">
        <BiSolidHelpCircle className="text-5xl" />
        <p>Help</p>
      </a>
      <a className="flex flex-col items-center p-2 hover:bg-hover hover:text-white hover:cursor-pointer">
        <IoCalendarNumber className="text-5xl" />
        <p>Calendar</p>
      </a>
      <a className="flex flex-col items-center p-2 hover:bg-hover hover:text-white hover:cursor-pointer">
        <SessionsSVG />
        <p>Sessions</p>
      </a>
    </div>
  );
};

export default Navigation;
