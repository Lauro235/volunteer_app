import dayjs from "dayjs";
import { months } from "../../../utils/calendar";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

interface ICalenderHandlers {
  today: dayjs.Dayjs;
  previousMonthHandler: () => void;
  currentDayHandler: () => void;
  nextMonthHandler: () => void;
}

const CalendarHandlers = ({
  today,
  previousMonthHandler,
  currentDayHandler,
  nextMonthHandler,
}: ICalenderHandlers) => {
  return (
    <div className="flex justify-between">
      <div className="text-left">
        <h2 className="font-bold sm:font-semibold">
          {months[today.month()]}, {today.year()}
        </h2>
      </div>
      <div className="flex items-center gap-5">
        <GrFormPrevious
          className="w-5 h-5 cursor-pointer"
          onClick={previousMonthHandler}
        />
        <h2 className="cursor-pointer" onClick={currentDayHandler}>
          Today
        </h2>
        <GrFormNext
          className=" w-5 h-5 cursor-pointer"
          onClick={nextMonthHandler}
        />
      </div>
    </div>
  );
};

export default CalendarHandlers;
