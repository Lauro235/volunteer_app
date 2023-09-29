import dayjs from "dayjs"

interface ICalenderForm {
  selectedDate: dayjs.Dayjs
}

const CalenderForm = ({selectedDate}: ICalenderForm) => {
  return (
    <div className="grid  p-2">
          <h2>Volunteer slots for {selectedDate.toDate().toDateString()}</h2>
          <p>No meetings for today.</p>
        </div>
  )
}

export default CalenderForm