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
  const weekDays = ["m", "t", "w", "t", "f", "s", "s"];

  console.log(generateDates());
  

  return (
    <>
      <div className="grid overflow-clip">
        <div className="grid w-full grid-cols-7">
          {weekDays.map((day, index) => {
            return (
              <h2
                className="grid w-12 h-12 text-sm text-[#333] place-content-center"
                key={index}
              >
                {day}
              </h2>
            );
          })}
        </div>
        <div className="grid w-full grid-cols-7 gap-y-3">
          {arrayOfDates.map(({ date, isCurrentDay, currentMonth }, index) => {
            return (
              <div className="grid place-content-center" key={index}>
                <h1
                  className={cn(
                    selectedDate.toDate().toDateString() ===
                    date.toDate().toDateString() && !isCurrentDay
                    ? "bg-black text-white"
                    : "",
                    currentMonth ? "font-bold" : "font-medium",
                    isCurrentDay ? "bg-hover text-white" : "",
                    "text-base h-7 w-7 grid sm:font-normal place-content-center rounded-full hover:bg-black hover:text-white hover:cursor-pointer transition-colors",
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
