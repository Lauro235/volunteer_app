import { BsExclamationSquare } from "react-icons/bs";
import { BiSolidHelpCircle } from "react-icons/bi";
import { IoCalendarNumber } from "react-icons/io5";
import eyes from "../../assets/eyes__grey-scale.svg";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between flex-1">
      <BsExclamationSquare className="text-5xl" />
      <BiSolidHelpCircle className="text-5xl" />
      <IoCalendarNumber className="text-5xl" />
      <img src={eyes} alt="Sessions" />
    </div>
  );
};

export default Navigation;
