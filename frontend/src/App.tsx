import { useState, useEffect } from "react"
import { ISessionData } from "./data/sessionData";
import './App.css'

import AppCalendar from "./Components/AppCalendar/AppCalendar";

function App() {
  const [sessions, setSessions] = useState<ISessionData[] | null>(null);
  
  useEffect(() => {
    const setData = async () => {
      const response = await fetch("/sessions")
      const data = await response.text();
      setSessions(JSON.parse(data))
    }
    setData()
  }, [])

  return (
    <>
      {/* <h1 className='text-4xl font-bold underline'>Volunteer App</h1> */}

      <div className="border-2 border-black rounded-3xl">
        <AppCalendar />
      </div>
    </>
  )
}

export default App
