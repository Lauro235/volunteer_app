import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import Calendar from "./Calendar/Calendar";
import CalenderForm from "./CalenderForm/CalenderForm";
import CalenderHandlers from "./CalenderHandlers/CalenderHandlers";

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
    <div className="flex border-solid border-black border-2 gap-2">
      {/* <Test /> */}
        <CalenderForm selectedDate={selectedDate} />
      <div className="self-stretch justify-self-stretch p-[1px] bg-black"></div>
      <div className="grid p-2">
        <CalenderHandlers today={today} previousMonthHandler={previousMonthHandler} currentDayHandler={currentDayHandler} nextMonthHandler={nextMonthHandler} />
        <Calendar
          today={today}
          selectedDate={selectedDate}
          selectedDateHandler={selectedDateHandler}
        />
      </div>
    </div>
  );
};

export default AppCalendar;
