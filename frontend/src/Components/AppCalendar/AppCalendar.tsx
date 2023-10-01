import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import Calendar from "./Calendar/Calendar";
import CalendarForm from "./CalendarForm/CalendarForm";
import CalendarHandlers from "./CalendarHandlers/CalendarHandlers";
import Availability from "../Availability/Availability";

import { useElementDimensions } from "../../hooks/useElementDimensions";
import useBrowserWindowDimensions from "../../hooks/useBrowserWindowDimensions";

const AppCalendar = () => {
  const currentDate: Dayjs = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const {height: windowHeight} = useBrowserWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);

  const [containerRef, dimensions] = useElementDimensions();

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

  /*
    find the height of the browser
    find the y position of the container
    subtract the y position from the browser height
    this will be our container height
    our inner conntainer height will be the same - 40px
  */
  
    console.log((dimensions && windowHeight - dimensions?.y));
    

  return (
    // container
    // component needs to escape body/root
    <div 
      ref={containerRef}
      className="flex w-[200vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-y-hidden"
    >

      {/* wrapper */}
      <div 
        style={{
          height: dimensions && `${(windowHeight - dimensions.y)}px`
        }}
        className="w-full overflow-y-hidden"
      >
        <div
          className="grid w-4/5 gap-2 px-2 py-4 mx-auto rounded-2xl bg-clr-contrast h-[90%] sm:flex"
        >
          <div className="hidden sm:flex">
            <CalendarForm selectedDate={selectedDate} />
          </div>
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
      </div>

      <div 
        style={{
          height: dimensions && `${(windowHeight - dimensions.y)}px`
        }}
        className="w-full"
      >
        <div className="w-4/5 h-full mx-auto contents lg:hidden">
          <Availability
            currentIndex={currentIndex}
            selectedDate={selectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppCalendar;
