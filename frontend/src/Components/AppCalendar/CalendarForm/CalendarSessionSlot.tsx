interface ICalenderSessionSlot {
  slot: "morning" | "evening";
}

const CalendarSessionSlot = ({slot}: ICalenderSessionSlot) => {
  return (
    <div className="flex w-min sm:w-full justify-between">
      <div>
        <p>{slot === "morning" ? "Morning" : "Evening"} slot</p>
        <p>available</p>
      </div>
      <input type="checkbox" className="self-end" />
    </div>
  );
};

export default CalendarSessionSlot;
