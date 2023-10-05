import { Dayjs } from "dayjs";
import Calendar from "./Calendar/Calendar";
import CalendarForm from "./CalendarForm/CalendarForm";
import CalendarHandlers from "./CalendarHandlers/CalendarHandlers";

interface IAppCalendar {
  today: Dayjs;
  selectedDate: Dayjs;
  // handlers
  previousMonthHandler: () => void;
  currentDayHandler: () => void;
  nextMonthHandler: () => void;
  selectedDateHandler: (date: Dayjs) => void;
}

const AppCalendar = ({today, selectedDate, previousMonthHandler, currentDayHandler, nextMonthHandler, selectedDateHandler}: IAppCalendar) => {
  // const {height: windowHeight} = useBrowserWindowDimensions();


  return (
    <>
      {/* wrapper */}
      <div 
        className="w-full h-full overflow-visible justify-self-stretch"
      >
        <div
          className="grid w-4/5 h-full gap-2 px-2 py-4 mx-auto rounded-2xl bg-clr-contrast sm:flex"
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
    </>
  );
};

export default AppCalendar;
