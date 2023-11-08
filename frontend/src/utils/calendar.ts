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

  const total = 42;
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

/**
 * 
 * @param dateInput This is a state variable that can be changed when the client clicks next and previous week. They may also reset week to the current week.
 * @returns An array of objects. Each object represents a day within the week.
 */

export const generateWeek = (dateInput = dayjs()) => {
  const weekdays = []

  const firstDateOfWeek = dateInput.startOf('w');
  const firstDateOfWeekNumber = dateInput.startOf('w').date();

  for (let i = 0; i < 7; i++) {
    console.log(firstDateOfWeek);
    
    const current = firstDateOfWeek.date(firstDateOfWeekNumber + i); 
    weekdays.push({
      base: current,
      name: current.format('ddd'),
      shortName: current.format('D'),
      formattedDate: current.format('DD-MM-YYYY'),
    });
  }
  
  return { weekdays };
  
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
