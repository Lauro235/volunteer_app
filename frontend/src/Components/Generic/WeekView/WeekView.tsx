// import { useState } from "react";
import { generateWeek } from "../../../utils/calendar"
import dayjs from 'dayjs';

const WeekView = () => {
  // const [moment, setMoment] = useState(dayjs());
  const {weekdays} = generateWeek(dayjs());
  return (
    <div className="hideweek:hidden row-span-4 text-left gap-2 grid grid-cols-7">
      {weekdays.map((day) => {
        return (
          <div key={day.formattedDate} className="h-full flex flex-col">
            <div className="p-3 bg-[#eee]">
              <p>{day.name}</p>
              <p>{day.shortName}</p>
            </div>
            <div className="grid grid-rows-2 gap-3 h-full">
              <div className="h-full bg-[#999]"></div>
              <div className="h-full bg-[#999]"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WeekView;