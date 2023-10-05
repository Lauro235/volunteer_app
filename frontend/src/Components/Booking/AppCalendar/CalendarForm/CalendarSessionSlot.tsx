import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

interface ICalenderSessionSlot {
  slot: "morning" | "evening";
}

const CalendarSessionSlot = ({ slot }: ICalenderSessionSlot) => {
  return (
    <div className="flex justify-between w-full py-4 sm:gap-3 sm:w-full">
      <div className="sm:flex-1">
        <p className="font-semibold">{slot === "morning" ? "Morning" : "Evening"} slot</p>
        <p>available</p>
      </div>
      <div className="flex sm:flex-1 sm:items-center sm:justify-center">
        {/* <input type="checkbox" className="self-end w-6 h-6 rounded-xl sm:hidden"/> */}
        <button className="flex items-center bg-clr-primary hover:bg-hover hover:text-white">
        {

          slot === "morning" ?
            <BsFillSunFill className="sm:self-center sm:mb-0" />
          : <BsFillMoonStarsFill className="sm:self-center sm:mb-0" />
        }
        </button>
      </div>
    </div>
  );
};

export default CalendarSessionSlot;
