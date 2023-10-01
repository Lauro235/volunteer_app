import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import AppCalendar from "./AppCalendar/AppCalendar";
import Availability from "../Availability/Availability";

// import useBrowserWindowDimensions from "../../hooks/useBrowserWindowDimensions";

const Booking = () => {
  const currentDate: Dayjs = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [calendarWidth, setCalendarWidth] = useState(0);

  // const {height: windowHeight} = useBrowserWindowDimensions();
  // const [currentIndex, setCurrentIndex] = useState(0);

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

  const calendarWidthHandler = (width: number | undefined) => {
    setCalendarWidth((prev) => width !== undefined ? width : prev);
  }

  

  return (
    // container
    // component needs to escape body/root
    <div className="flex w-[200vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] items-stretch overflow-y-hidden">
      <AppCalendar
        today={today}
        selectedDate={selectedDate}
        width={calendarWidth}
        previousMonthHandler={previousMonthHandler}
        currentDayHandler={currentDayHandler}
        nextMonthHandler={nextMonthHandler}
        selectedDateHandler={selectedDateHandler}
        calendarWidthHandler={calendarWidthHandler}
      />
      <Availability width={calendarWidth} selectedDate={selectedDate} />
    </div>
  );
};

export default Booking;
