import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import Calendar from "./Calendar/Calendar";
import CalendarForm from "./CalendarForm/CalendarForm";
import CalendarHandlers from "./CalendarHandlers/CalendarHandlers";
import Availability from "../Availability/Availability";

// import { useElementDimensions } from "../../hooks/useElementDimensions";
// import useBrowserWindowDimensions from "../../hooks/useBrowserWindowDimensions";

const AppCalendar = () => {
  const currentDate: Dayjs = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  // const {width: windowWidth} = useBrowserWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);

  // const [containerRef, dimensions] = useElementDimensions();
  // const [containerRef, dimensions] = useElementDimensions();
  // console.log(dimensions);

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

  console.log(selectedDate.format("YYYY-MM-DD"));
  

  return (
    // container
    // component needs to escape body/root
    <div className="flex w-[200vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">

      {/* wrapper */}
      <div className="w-full">
        <div
          className="grid w-4/5 gap-2 px-2 py-4 mx-auto rounded-2xl bg-clr-contrast sm:flex"
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

      <div className="w-full">
        <div className="w-4/5 mx-auto contents lg:hidden">
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
