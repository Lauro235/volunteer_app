import dayjs from "dayjs";
// import localeData from "dayjs/plugin/localeData"
import * as gb from "dayjs/locale/en-gb";
import updateLocale from "dayjs/plugin/updateLocale";
import weekday from "dayjs/plugin/weekday"

dayjs.locale()
import localeData from "dayjs/plugin/localeData";

dayjs.extend(updateLocale);
dayjs.extend(weekday)

dayjs.locale(gb);

dayjs().weekday(-1)

dayjs.updateLocale("en-gb", {
  weekStart: 0,
  weekdaysMin: ["M", "T", "W", "T", "F", "S", "S"],
  weekdaysShort: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  weekdays: [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  ]
})
dayjs.extend(localeData);

export {dayjs};
