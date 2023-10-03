import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import AppCalendar from "./AppCalendar/AppCalendar";
import Availability from "../Availability/Availability";
// import AvailabilityStrip from "../Availability/AvailabilityStrip/AvailabilityStrip";

import Strip from "../Strip/Strip";

// import useBrowserWindowDimensions from "../../hooks/useBrowserWindowDimensions";

const Booking = () => {
  const currentDate: Dayjs = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  // const {height: windowHeight} = useBrowserWindowDimensions();
  const [currentPosition, setCurrentPosition] = useState<number>(0);

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

  /**
   * 
   * @param num: number - this represents the index of the screen size div to slide to
   * @description This function controls currentPosition, which will act as an index to enable the program to focus on the correct div.
   */
  const changeCurrentPositionHandler = (num: number) => {
    setCurrentPosition(num);
  }

  return (
    // container
    // component needs to escape body/root
    // <div className="w-screen bg-yellow-500">
    <div className="w-screen overflow-x-hidden bg-yellow-500">
      <Strip heading="calendar" position={0} currentPosition={currentPosition} changeCurrentPositionHandler={changeCurrentPositionHandler} />
      <Strip heading="availability" position={1} currentPosition={currentPosition} changeCurrentPositionHandler={changeCurrentPositionHandler} />
      <div
        style={{
          transform: `translateX(${-currentPosition * 100}vw)`,
        }}
        className="flex w-[200vw] transition-transform relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] items-stretch"
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
