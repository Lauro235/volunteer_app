// import dayjs from "dayjs"
import { dayjs } from "./extend";

export const generateDates = (
  month = dayjs().month(),
  year = dayjs().year()
) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  const arrayOfDates = [];

  // generate prefix days

  for (let i = 1; i <= firstDateOfMonth.day() - 1; i++) {
    arrayOfDates.push({
      isCurrentDay: false,
      currentMonth: false,
      date: firstDateOfMonth.day(i),
    });
  }

  // generate days of current month

  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDates.push({
      isCurrentDay:
        firstDateOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString()
          ? true
          : false,
      currentMonth: true,
      date: firstDateOfMonth.date(i),
    });
  }

  // generate suffix days

  const total = 35;
  const remaining = total - arrayOfDates.length;

  for (
    let i = lastDateOfMonth.date() + 1;
    i <= lastDateOfMonth.date() + remaining;
    i++
  ) {
    arrayOfDates.push({
      isCurrentDay: false,
      currentMonth: false,
      date: lastDateOfMonth.date(i),
    });
  }

  return { arrayOfDates };
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
