import { BsExclamationSquare } from "react-icons/bs";
import { BiSolidHelpCircle } from "react-icons/bi";
import { IoCalendarNumber } from "react-icons/io5";
import SessionsSVG from "../SessionsSVG/SessionsSVG";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between flex-1 app-margin">
    <a className="flex flex-col p-2 text-clr-primary hover:bg-hover hover:cursor-pointer hover:text-clr-primary">
        <BsExclamationSquare className="text-5xl" />
        <p>Urgent</p>
      </a>
      <a className="flex flex-col p-2 text-clr-primary hover:bg-hover hover:cursor-pointer hover:text-clr-primary">
        <BiSolidHelpCircle className="text-5xl" />
        <p>Help</p>
      </a>
      <a className="flex flex-col items-center p-2 text-clr-primary hover:bg-hover hover:cursor-pointer hover:text-clr-primary">
        <IoCalendarNumber className="text-5xl" />
        <p>Calendar</p>
      </a>
      <a className="flex flex-col items-center p-2 text-clr-primary hover:bg-hover hover:cursor-pointer hover:text-clr-primary">
        <SessionsSVG />
        <p>Sessions</p>
      </a>
    </div>
  );
};

export default Navigation;
