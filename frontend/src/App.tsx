import { useEffect, useState } from "react"
import { ISessionData } from "./data/sessionData";
import "./App.css";

import AppCalendar from "./Components/AppCalendar/AppCalendar";
import MobileHeader from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";

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
  
  /*
    Keep a single column design until you get to xl.
  
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
  */
  
  return (
    <>
      <MobileHeader />
      <Navigation />
      <AppCalendar />
    </>
  );
}

export default App;
