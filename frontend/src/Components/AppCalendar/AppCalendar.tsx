import { useState } from "react"
import Calendar from "react-calendar"
import { ISessionData } from "../../data/sessionData";

interface IAppCalendar {
  sessions: ISessionData[];
}

const AppCalendar = ({sessions}: IAppCalendar) => {
  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];
  const [value, onChange] = useState<Value>(new Date());
  
  function dayHandler(e: React.MouseEvent<HTMLButtonElement>, value: Date) {
    const dateString = (e.target as HTMLElement).ariaLabel
    console.log(value);
    

    onChange(new Date(dateString !== null ? dateString : ''))
    

  }
  
  return (
    <>
      <Calendar onClickDay={(value: Date, e: React.MouseEvent<HTMLButtonElement>) => dayHandler(e, value)} className="bg-blue-200 grid" value={value} />
    </>
  )
}

export default AppCalendar