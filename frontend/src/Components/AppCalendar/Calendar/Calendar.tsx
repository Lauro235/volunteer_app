import { Dayjs } from "dayjs";
import { generateDates } from "../../../utils/calendar";
// import { twMerge } from "tailwind-merge";
import { cn } from "../../../utils/conditions";

interface ICalender {
  today: Dayjs;
  selectedDate: Dayjs;
  selectedDateHandler: (date: Dayjs) => void;
}

function Calendar({ today, selectedDate, selectedDateHandler }: ICalender) {
  const { arrayOfDates } = generateDates(today.month(), today.year());
  const weekDays = ["M", "T", "W", "T", "F", "S", "S"];

  console.log(generateDates());
  

  return (
    <>
      <div className="grid overflow-clip">
        <div className="w-full grid grid-cols-7">
          {weekDays.map((day, index) => {
            return (
              <h2
                className="text-sm text-slate-500 h-12 w-12 grid place-content-center"
                key={index}
              >
                {day}
              </h2>
            );
          })}
        </div>
        <div className="w-full grid grid-cols-7 gap-y-3">
          {arrayOfDates.map(({ date, isCurrentDay, currentMonth }, index) => {
            return (
              <div className="grid place-content-center" key={index}>
                <h1
                  className={cn(
                    selectedDate.toDate().toDateString() ===
                    date.toDate().toDateString() && !isCurrentDay
                    ? "bg-black text-white"
                    : "",
                    currentMonth ? "" : "text-gray-400/50",
                    isCurrentDay ? "bg-hovercolor text-white" : "",
                    "h-8 w-8 grid font-bold sm:font-normal place-content-center rounded-full hover:bg-black hover:text-white hover:cursor-pointer text-[16px] transition-colors",
                  )}
                  onClick={() => selectedDateHandler(date)}
                >
                  {date.date().toString().padStart(2, "0")}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Calendar;
