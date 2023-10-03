import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import AppCalendar from "./AppCalendar/AppCalendar";
import Availability from "../Availability/Availability";
import AvailabilityStrip from "../Availability/AvailabilityStrip/AvailabilityStrip";

// import useBrowserWindowDimensions from "../../hooks/useBrowserWindowDimensions";

const Booking = () => {
  const currentDate: Dayjs = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  // const {height: windowHeight} = useBrowserWindowDimensions();
  const [position, setCurrentPosition] = useState(0);

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
    // container
    // component needs to escape body/root
    <div className="w-screen overflow-x-hidden bg-yellow-500">
      <AvailabilityStrip />
      <div
        style={{
          transform: `translateX(${-position * 100}vw)`,
        }}
        className="flex w-[200vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] items-stretch"
      >
        <AppCalendar
          today={today}
          selectedDate={selectedDate}
          previousMonthHandler={previousMonthHandler}
          currentDayHandler={currentDayHandler}
          nextMonthHandler={nextMonthHandler}
          selectedDateHandler={selectedDateHandler}
        />
        <Availability selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default Booking;
