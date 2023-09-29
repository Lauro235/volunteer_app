import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

interface ICalenderSessionSlot {
  slot: "morning" | "evening";
}

const CalendarSessionSlot = ({ slot }: ICalenderSessionSlot) => {
  return (
    <div className="flex w-min sm:gap-3 sm:w-full justify-between">
      <div className="sm:flex-1 bg-gray-400">
        <p>{slot === "morning" ? "Morning" : "Evening"} slot</p>
        <p>available</p>
      </div>
      <div className="flex sm:flex-1 sm:items-center sm:justify-center bg-gray-400">
        <input type="checkbox" className="self-end sm:hidden"/>
        <button className="hidden sm:block hover:bg-hovercolor">
        {

          slot === "morning" ?
            <BsFillSunFill className="sm:self-center mb-2 sm:mb-0" />
          : <BsFillMoonStarsFill className="sm:self-center mb-2 sm:mb-0" />
        }
        </button>
      </div>
    </div>
  );
};

export default CalendarSessionSlot;
