import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import Calendar from "./Calendar/Calendar";
import CalendarForm from "./CalendarForm/CalendarForm";
import CalendarHandlers from "./CalendarHandlers/CalendarHandlers";

const AppCalendar = () => {
  const currentDate: Dayjs = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState(currentDate);

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
    <div className="grid gap-2 py-4 rounded-2xl bg-col-contrast sm:flex">
      {/* <Test /> */}
        <div className="hidden sm:flex">
          <CalendarForm selectedDate={selectedDate} />
        </div>
      {/* <div className="self-stretch justify-self-stretch p-[1px] bg-black"></div> */}
      <div className="grid">
        <CalendarHandlers today={today} previousMonthHandler={previousMonthHandler} currentDayHandler={currentDayHandler} nextMonthHandler={nextMonthHandler} />
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
  );
};

export default AppCalendar;
