import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import Calendar from "./Calendar/Calendar";
import CalendarForm from "./CalendarForm/CalendarForm";
import CalendarHandlers from "./CalendarHandlers/CalendarHandlers";
import Availability from "../Availability/Availability";

import { useDimensions } from "../../hooks/useDimensions";

const AppCalendar = () => {
  const currentDate: Dayjs = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  // how to destructure when the second value could be undefined?
  const [measurements, dimensions] = useDimensions();
  console.log(dimensions);
  

  const previousMonthHandler = () => {
    setToday(today.month(today.month() - 1));
  };

  const currentDayHandler = () => {
    setToday(currentDate);
    setSelectedDate(currentDate);
  };

  const nextMonthHandler = () => {
    setToday(today.month(today.month() + 1));
  };

  const selectedDateHandler = (date: Dayjs) => {
    setSelectedDate(date);
  };

  return (
    <div className="contents">
      <div ref={measurements} className="grid gap-2 px-2 py-4 rounded-2xl bg-clr-contrast sm:flex">
        {/* <Test /> */}
        <div className="hidden sm:flex">
          <CalendarForm selectedDate={selectedDate} />
        </div>
        {/* <div className="self-stretch justify-self-stretch p-[1px] bg-black"></div> */}
        <div className="grid">
          <CalendarHandlers
            today={today}
            previousMonthHandler={previousMonthHandler}
            currentDayHandler={currentDayHandler}
            nextMonthHandler={nextMonthHandler}
          />
          <Calendar
            today={today}
            selectedDate={selectedDate}
            selectedDateHandler={selectedDateHandler}
          />
        </div>
        <div className="grid sm:hidden">
          <CalendarForm selectedDate={selectedDate} />
        </div>
      </div>

      <div className="contents lg:hidden">
        <Availability />
      </div>
    </div>
  );
};

export default AppCalendar;
