import dayjs from "dayjs";
import { useState } from "react";
import { generateDates, months } from "../../utils/calendar";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import cn from "../../utils/conditions";

function Calendar() {
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const { arrayOfDates } = generateDates(today.month(), today.year());
  const weekDays = ["M", "T", "W", "T", "F", "S", "S"];
  const [selectedDate, setSelectedDate] = useState(currentDate);

  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-6 p-5 overflow-clip border-solid border-2 border-black">
        <div className="grid place-content-center">
          <h2>Volunteer slots for {selectedDate.toDate().toDateString()}</h2>
          <p>No meetings for today.</p>
        </div>
        <div className="p-[1px] sm:p-[2px] rounded-md bg-black self-stretch justify-self-stretch"></div>
        <div>
          <div className="flex justify-between mb-5">
            <div className="text-left">
              <h2 className="font-bold sm:font-semibold">
                {months[today.month()]}, {today.year()}
              </h2>
            </div>
            <div className="flex items-center gap-5">
              <GrFormPrevious
                className="w-5 h-5 cursor-pointer"
                onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}
              />
              <h2
                className="cursor-pointer"
                onClick={() => {
                  setToday(currentDate);
                }}
              >
                Today
              </h2>
              <GrFormNext
                className=" w-5 h-5 cursor-pointer"
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                }}
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-7 mb-6">
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
          <div className="w-full grid grid-cols-7 gap-y-6">
            {arrayOfDates.map(({ date, isCurrentDay, currentMonth }, index) => {
              return (
                <div className="grid place-content-center" key={index}>
                  <h1
                    className={cn(
                      currentMonth ? "" : "text-gray-400/50",
                      isCurrentDay ? "bg-[#0C41FF] text-white" : "",
                      selectedDate.toDate().toDateString() ===
                        date.toDate().toDateString() && !isCurrentDay
                        ? "bg-black text-white"
                        : "",
                      "h-8 w-8 grid font-bold sm:font-normal place-content-center rounded-full hover:bg-black hover:text-white hover:cursor-pointer text-[16px] transition-colors"
                    )}
                    onClick={() => setSelectedDate(date)}
                  >
                    {date.date().toString().padStart(2, "0")}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
