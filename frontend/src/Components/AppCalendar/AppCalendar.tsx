import { useState } from "react"
import Calendar from "react-calendar"

const AppCalendar = () => {
  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];
  const [value, onChange] = useState<Value>(new Date());
  console.log(value);
  
  return (
    <>
      <Calendar className="bg-blue-200 grid" onChange={(() => onChange(new Date('2023-11-13')))} value={value} />
    </>
  )
}

export default AppCalendar