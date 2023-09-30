import dayjs from "dayjs";
import CalendarSessionSlot from "./CalendarSessionSlot";

interface ICalenderForm {
  selectedDate: dayjs.Dayjs;
}

const CalendarForm = ({ selectedDate }: ICalenderForm) => {
  return (
    <div className="grid pb-2 gap-7">
      <div className="items-center justify-center hidden gap-5 p-2 text-left sm:flex sm:flex-col sm:items-start whitespace-nowrap">
        <CalendarSessionSlot slot="morning" />
        <CalendarSessionSlot slot="evening" />
      </div>
      <div className="grid text-[#222] mt-4 gap-5 sm:hidden">
        <div>
          <p className="text-sm font-medium">I would like to book a session for...</p>
          <p className="text-base font-bold">{selectedDate.toDate().toDateString()}</p>
        </div>
        <p className="text-sm">0/2 bookings made for this date.</p>
      </div>
      <div className="hidden gap-5 sm:grid">
        <p>Want to book a regular slot?</p>
        <button className="bg-safety hover:bg-hover justify-self-center hover:text-white" type="button">Yes please!</button>
      </div>
    </div>
  );
};

export default CalendarForm;
