import dayjs from "dayjs";
import CalendarSessionSlot from "./CalendarSessionSlot";

interface ICalenderForm {
  selectedDate: dayjs.Dayjs;
}

const CalendarForm = ({ selectedDate }: ICalenderForm) => {
  return (
    <div className="pb-2">
      <div className="grid p-2">
        <h2>Volunteer slots for {selectedDate.toDate().toDateString()}</h2>
        <p>No meetings for today.</p>
      </div>
      <div className="flex sm:flex-col items-center sm:items-start p-2 gap-5 whitespace-nowrap bg-blue-400 text-left justify-center">
        <CalendarSessionSlot slot="morning" />
        <CalendarSessionSlot slot="evening" />
      </div>
      <button
        type="button"
        className="bg-green-600/50 w-fit justify-self-center mt-4"
      >
        Book Session
      </button>
    </div>
  );
};

export default CalendarForm;
