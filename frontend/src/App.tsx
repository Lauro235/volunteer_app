import { useEffect, useState } from "react"
import { ISessionData } from "./data/sessionData";
import "./App.css";

import AppCalendar from "./Components/AppCalendar/AppCalendar";

function App() {
  const [sessions, setSessions] = useState<ISessionData[] | null>(null);

  useEffect(() => {
    const dataHandler = async () => {
      const response = await fetch("/sessions");
      const data = await response.json();
      setSessions(data);
    };
    dataHandler();
  }, []);

  console.log(sessions);
  
  return (
    <>
      <AppCalendar />
    </>
  );
}

export default App;
