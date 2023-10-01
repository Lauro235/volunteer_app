import { Dayjs } from "dayjs";
// import { IDimensions } from "../../hooks/useElementDimensions";
// import AvailabilityStrip from "./AvailabilityStrip/AvailabilityStrip";

import CalendarSessionSlot from "../AppCalendar/CalendarForm/CalendarSessionSlot";

interface IAvailability {
  // containerWidth: number;
  currentIndex: number;
  selectedDate: Dayjs; 
  // dimensions: IDimensions | undefined;
}

// const Availability = ({ containerWidth, currentIndex, selectedDate }: IAvailability) => {
const Availability = ({ currentIndex, selectedDate }: IAvailability) => {

  return (
    <>
      {/* <AvailabilityStrip /> */}
      <div className="w-4/5 mx-auto h-[90%] rounded-2xl bg-clr-gradTwo">
        <h2>{selectedDate.toDate().toDateString()}</h2>
        <div>
          <h3>{selectedDate.format("YYYY-MM-DD")}</h3>
          <CalendarSessionSlot slot="morning" />
          <CalendarSessionSlot slot="evening" />
          <p>Want to book a regular slot?</p>
          <button type="button" className="bg-safety">yes please!</button>
        </div>
      </div>

    </>
  );
};

export default Availability;
