// import { useEffect } from "react"
import { useState, useEffect } from "react";
import { ISessionData } from "./data/sessionData";
import "./App.css";

import AppCalendar from "./Components/AppCalendar/AppCalendar";

function App() {
  const [sessions, setSessions] = useState<ISessionData[] | null>(null);

  useEffect(() => {
    const dataHandler = async () => {
      const response = await fetch("/sessions");
      const data = await response.json();
      setSessions(data)
    };
    dataHandler();
  }, []);

  // console.log(sessions);

  return (
    <>
      {/* <h1 className='text-4xl font-bold underline'>Volunteer App</h1> */}

      <div className="overflow-clip border-2 border-black rounded-3xl">
        <AppCalendar />
      </div>
    </>
  );
}

export default App;
