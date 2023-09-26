import { useState, useEffect } from "react"
import { ISessionData } from "./data/sessionData";
import './App.css'

function App() {
  const [sessions, setSessions] = useState<ISessionData[] | null>(null);
  // console.log(sessions);
  
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
      <h1 className='text-4xl font-bold underline'>Volunteer App</h1>
    </>
  )
}

export default App
