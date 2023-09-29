import {useEffect, useState} from "react"
import Calendar from "../Calendar/Calendar";
import { ISessionData } from "../../data/sessionData";



const AppCalendar = () => {
  const [sessions, setSessions] = useState<ISessionData[] | null>(null);

  useEffect(() => {
    const dataHandler = async () => {
      const response = await fetch("/sessions");
      const data = await response.json();
      setSessions(data)
    };
    dataHandler();
  }, []);

  console.log(sessions);
  
  
  return (
    <>
      {/* <Test /> */}
      <Calendar />
    </>
  )
}

export default AppCalendar