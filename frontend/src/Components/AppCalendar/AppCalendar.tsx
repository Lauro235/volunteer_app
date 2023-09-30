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

  // const {width: windowWidth, height: windowHeight} = useBrowserWindowDimensions();
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

  return (
    // container
    <div className="flex flex-col">
      {/* wrapper */}
      <div className="flex w-full relative">
        {/* content wrapper */}
        <div className="w-screen h-full">
          {/* wrapper spacing */}
          <div className="app-margin">
            {/* <div ref={containerRef} className="flex"> */}
            {/*
                two elements need to be translating
                translating according to state
                a simple counter that will go between 0 and 1
              */}


            {/* beginning of main calendar section */}
            <div
              // style={{
              //   transform:
              //     dimensions !== undefined &&
              //     typeof dimensions?.width === "number"
              //       ? `translateX(${String(currentIndex * 100)}vw)`
              //       : "translateX(0px)",
              // }}
              className="grid gap-2 px-2 py-4 rounded-2xl bg-clr-contrast sm:flex"
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

            <div className="contents lg:hidden">
              <Availability
                currentIndex={currentIndex}
                // dimensions={dimensions}
              />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default AppCalendar;
