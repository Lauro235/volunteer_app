import { useState } from "react";
import { generateWeek } from "../../../utils/calendar"
import dayjs from 'dayjs';

const WeekView = () => {
  const [moment, setMoment] = useState(dayjs());
  const {weekdays} = generateWeek(moment);
  return (
    <div className="row-span-4 text-left gap-2 grid grid-cols-7">
      {
        weekdays.map((day, i) => {
          return (
            <div key={i} className="bg-[#eee]">
              <div className="p-3">
                <p>{day.name}</p>
                <p>{day.shortName}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default WeekView;