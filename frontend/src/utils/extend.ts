import dayjs from "dayjs";
// import localeData from "dayjs/plugin/localeData"
import * as gb from "dayjs/locale/en-gb";
import updateLocale from "dayjs/plugin/updateLocale";
import weekday from "dayjs/plugin/weekday";

dayjs.locale();
import localeData from "dayjs/plugin/localeData";

dayjs.extend(updateLocale);
dayjs.extend(weekday);

dayjs.locale(gb);

dayjs.extend(localeData);

export { dayjs };
