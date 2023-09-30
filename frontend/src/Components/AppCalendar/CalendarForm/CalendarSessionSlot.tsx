import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

interface ICalenderSessionSlot {
  slot: "morning" | "evening";
}

const CalendarSessionSlot = ({ slot }: ICalenderSessionSlot) => {
  return (
    <div className="flex justify-between w-min sm:gap-3 sm:w-full">
      <div className="bg-gray-400 sm:flex-1">
        <p>{slot === "morning" ? "Morning" : "Evening"} slot</p>
        <p>available</p>
      </div>
      <div className="flex bg-gray-400 sm:flex-1 sm:items-center sm:justify-center">
        <input type="checkbox" className="self-end w-6 h-6 rounded-xl sm:hidden"/>
        <button className="hidden sm:block hover:bg-hover hover:text-white">
        {

          slot === "morning" ?
            <BsFillSunFill className="mb-2 sm:self-center sm:mb-0" />
          : <BsFillMoonStarsFill className="mb-2 sm:self-center sm:mb-0" />
        }
        </button>
      </div>
    </div>
  );
};

export default CalendarSessionSlot;
