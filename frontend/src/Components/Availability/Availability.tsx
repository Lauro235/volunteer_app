import { Dayjs } from "dayjs";
// import { IDimensions } from "../../hooks/useElementDimensions";
// import AvailabilityStrip from "./AvailabilityStrip/AvailabilityStrip";

import CalendarSessionSlot from "../Booking/AppCalendar/CalendarForm/CalendarSessionSlot";

interface IAvailability {
  // containerWidth: number;
  selectedDate: Dayjs;
  // dimensions: IDimensions | undefined;
}

// const Availability = ({ containerWidth, position, selectedDate }: IAvailability) => {
const Availability = ({ selectedDate }: IAvailability) => {
  return (
    <div
      // style={{
      //   transform: `translateX(${(-position * 100)}%)`
      // }}
      className="w-full overflow-y-hidden justify-self-stretch"
    >
      <div className="w-4/5 h-full px-2 py-4 mx-auto text-black text-start rounded-2xl bg-clr-gradTwo">
        {/* <div className="w-4/5 mx-auto h-[90%] rounded-2xl bg-clr-gradTwo"> */}
        <div className="grid gap-4 place-content-center">
          <h2 className="text-2xl font-semibold text-white">
            {selectedDate.toDate().toDateString()}
          </h2>
          <h3 className="text-xl font-semibold">{selectedDate.format("YYYY-MM-DD")}</h3>
          <CalendarSessionSlot slot="morning" />
          <CalendarSessionSlot slot="evening" />
          <p>Want to book a regular slot?</p>
          <button type="button" className="bg-safety">
            yes please!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Availability;
